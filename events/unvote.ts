import {event} from 'sparkbots'
import {MessageReaction, User} from 'discord.js'
const Event = event("unvote")
Event.setEvent("messageReactionRemove")

import {db} from '../db'
import {yes, no} from '../emojis.json'

Event.code = async (client, reaction: MessageReaction, user: User) => {

  if(reaction.partial) await reaction.fetch()

  if(user.partial) await user.fetch()

  const doc = db.collection('polls').doc(reaction.message.channel.id)

  if(user.id===client.user.id) return
  
  // ----- yes reaction -----
  if(reaction.emoji.id===yes) {
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.cache.has(no)) return reaction.message.channel.send('Looks like this poll does not have a No reaction on it, manually add one to fix.')
    
    const noVoters = await reaction.message.reactions.cache.get(no).users.fetch()

    if(!noVoters.has(user.id)) reaction.message.channel.send({content: `${user} (${user.tag}) removed their vote`, allowedMentions: {parse: []}})
  
  }
  
  // ----- no reaction -----
  else if(reaction.emoji.id===no) {
  
    const docx = await doc.get()
    
    if(!docx.data()) return
    
    if(docx.data().message!==reaction.message.id) return
    
    if(!reaction.message.reactions.cache.has(yes)) return reaction.message.channel.send('Looks like this poll does not have a Yes reaction on it, manually add one to fix.')
    
    const yesVoters = await reaction.message.reactions.cache.get(yes).users.fetch()

    if(!yesVoters.has(user.id)) reaction.message.channel.send({content: `${user} (${user.tag}) removed their vote`, allowedMentions: {parse: []}})
  
  }
  
  else return


}

export = Event
