import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("forceclose")
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
    
  await message.channel.send(`${message.author.tag} force closed a poll`)
  
  doc.delete()
  
}
