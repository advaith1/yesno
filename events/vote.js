const spark = require("sparkbots")
const event = spark.event("vote")
event.setEvent("messageReactionAdd")

let vote

event.code = (client, reaction, user) => {
    
  if(user.id===client.user.id) return
  
  if(reaction.emoji.id==='526209014254665759') { vote = 'Yes' }
  
  else if(reaction.emoji.id==='526209037361086526') { vote = 'No' }
  
  else return
  
  reaction.message.channel.send(`${user.tag} voted ${vote}`)

}

module.exports = event