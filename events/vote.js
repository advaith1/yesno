const spark = require("sparkbots")
const event = spark.event("vote")
event.setEvent("messageReactionAdd")

const {db} = require('/app/db.js')


event.code = async (client, reaction, user) => {
  
  const doc = db.collection('polls').doc(reaction.message.channel.id)

  if(user.id===client.user.id) return
  
  if(reaction.emoji.id==='526209014254665759') {
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    reaction.message.channel.send(`${user.tag} voted Yes`)
  
  }
  
  else if(reaction.emoji.id==='526209037361086526') {  }
  
  else return


}

module.exports = event