import {event} from 'sparkbots'
import {Client, MessageReaction, User} from 'discord.js'
const Event = event("vote")
Event.setEvent("messageReactionAdd")

import {db} from '../db'

Event.code = async (client: Client, reaction: MessageReaction, user: User) => {
  
  const doc = db.collection('polls').doc(reaction.message.channel.id)

  if(user.id===client.user.id) return
  
  if(reaction.emoji.id==='526209014254665759') { // Yes
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.cache.get('526209037361086526')) return reaction.message.channel.send('Looks like this poll does not have a No reaction on it, manually add one to fix.')
    
    if(reaction.message.reactions.cache.get('526209037361086526').users.cache.get(user.id)) {
      
      reaction.message.reactions.cache.get('526209037361086526').users.remove(user.id)
      
      reaction.message.channel.send(`${user.tag} changed their vote from No to Yes`)
      
    } else reaction.message.channel.send(`${user.tag} voted Yes`)
  
  }
  
  else if(reaction.emoji.id==='526209037361086526') { // No
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.cache.get('526209014254665759')) return reaction.message.channel.send('Looks like this poll does not have a Yes reaction on it, manually add one to fix.')
    
    if(reaction.message.reactions.cache.get('526209014254665759').users.cache.get(user.id)) {
      
      reaction.message.reactions.cache.get('526209014254665759').users.remove(user.id)
      
      reaction.message.channel.send(`${user.tag} changed their vote from Yes to No`)
      
    } else reaction.message.channel.send(`${user.tag} voted No`)
  
  }
  
  else return


}

export = Event