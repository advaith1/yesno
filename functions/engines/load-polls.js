const Spark = require("sparkbots")
const Engine = Spark.engine("load-polls")
module.exports = Engine

const {db} = require('/app/db.js')

Engine.code = (client, message) => {

  db.collection('polls').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        
        if(!client.channels.resolve(doc.id)) return
        
        client.channels.resolve(doc.id).messages.fetch(doc.data().message).catch(e => {})
        
      })
  })
  
}