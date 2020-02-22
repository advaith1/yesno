const Spark = require("sparkbots")
const Engine = Spark.engine("load-polls")
module.exports = Engine

const {db} = require('/app/db.js')

Engine.code = (client, message) => {

  db.collection('polls').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        
        // Cancel if channel isn't found
        if(!client.channels.resolve(doc.id)) return
        
        // Fetch message
        client.channels.resolve(doc.id).messages.fetch(doc.data().message).catch(e => console.error(e))

        // Cancel if message isn't found
        if(!client.channels.resolve(doc.id).messages.resolve(doc.data().message)) return

        // Fetch yes reactions
        client.channels.resolve(doc.id).messages.resolve(doc.data().message).reactions.resolve('526209014254665759').users.fetch()

        // Fetch no reactions
        client.channels.resolve(doc.id).messages.resolve(doc.data().message).reactions.resolve('526209037361086526').users.fetch()
      })
  })
  
}