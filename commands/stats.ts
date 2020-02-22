import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("stats")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'

Command.code = async (client, message: Message) => {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
  
  if(!docx.data()) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
  
  await message.channel.messages.fetch(docx.data().message)
  
  const msg = await message.channel.messages.fetch(docx.data().message)
  
  msg.reactions.resolve('526209014254665759')
  msg.reactions.resolve('526209037361086526')
  
  await message.channel.send({
      "embed": {
        "title": `Poll Stats: ${docx.data().q}`,
        "description": `Yes: ${msg.reactions.resolve('526209014254665759').count-1}
No: ${msg.reactions.resolve('526209037361086526').count-1}`
      }
    })
  
}
