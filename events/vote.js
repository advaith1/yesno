const spark = require("sparkbots")
const event = spark.event("vote")
event.setEvent("messageReactionAdd")

const {db} = require('/app/db.js')

event.code = async (client, reaction, user) => {
  
  const doc = db.collection('polls').doc(reaction.message.channel.id)

  if(user.id===client.user.id) return
  
  if(reaction.emoji.id==='526209014254665759') { // Yes
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.resolve('526209037361086526')) return reaction.message.channel.send('Looks like this poll does not have a No reaction on it, manually add one to fix.')
    
    if(reaction.message.reactions.resolve('526209037361086526').users.resolve(user.id)) {
      
      reaction.message.reactions.resolve('526209037361086526').users.remove(user.id)
      
      reaction.message.channel.send(`${user.tag} changed their vote from No to Yes`)
      
    } else reaction.message.channel.send(`${user.tag} voted Yes`)
  
  }
  
  else if(reaction.emoji.id==='526209037361086526') { // No
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.resolve('526209014254665759')) return reaction.message.channel.send('Looks like this poll does not have a Yes reaction on it, manually add one to fix.')
    
    if(reaction.message.reactions.resolve('526209014254665759').users.resolve(user.id)) {
      
      reaction.message.reactions.resolve('526209014254665759').users.remove(user.id)
      
      reaction.message.channel.send(`${user.tag} changed their vote from Yes to No`)
      
    } else reaction.message.channel.send(`${user.tag} voted No`)
  
  }
  
  else return


}

module.exports = event