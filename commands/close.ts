import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("close")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'

Command.code = async (client, message: Message) => {
  
  try {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
  
  if(!docx.data()) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
  
  await message.channel.messages.fetch(docx.data().message)
  
  const msg = await await message.channel.messages.fetch(docx.data().message)
  
  await message.channel.send({
      "embed": {
        "title": `Poll Closed: ${docx.data().q}`,
        "description": `Yes: ${msg.reactions.cache.get('526209014254665759').count-1}
No: ${msg.reactions.cache.get('526209037361086526').count-1}`
      }
    })
  
  await message.channel.send(`${message.author.tag} closed a poll`)
  
  msg.unpin()

  message.delete()
  
  doc.delete()
    
  } catch (e) {
  
    message.channel.send(`There was an error closing the poll: ${e}

To force close the active poll use \`yn.forceclose\`.`)
    
  }
  
}
