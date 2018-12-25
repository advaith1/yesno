const spark = require("sparkbots")
const event = spark.event("unvote")
event.setEvent("messageReactionRemove")

const {db} = require('/app/db.js')


event.code = async (client, reaction, user) => {
  
  const doc = db.collection('polls').doc(reaction.message.channel.id)

  if(user.id===client.user.id) return
  
  if(reaction.emoji.id==='526209014254665759') { // Yes
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.get('526209037361086526')) return reaction.message.channel.send('Looks like this poll does not have a No reaction on it, manually add one to fix.')
    
    if(!reaction.message.reactions.get('526209037361086526').users.get(user.id)) reaction.message.channel.send(`${user.tag} removed their vote`)
  
  }
  
  else if(reaction.emoji.id==='526209037361086526') { // No
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.get('526209014254665759')) return reaction.message.channel.send('Looks like this poll does not have a Yes reaction on it, manually add one to fix.')
    
    if(!reaction.message.reactions.get('526209014254665759').users.get(user.id)) reaction.message.channel.send(`${user.tag} removed their vote`)
  
  }
  
  else return


}

module.exports = event