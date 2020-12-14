import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("stats")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'
import {yes, no} from '../emojis.json'

Command.code = async (client, message: Message) => {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
  
  if(!docx.data()) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  const msg = await message.channel.messages.fetch(docx.data().message)
  
  await message.channel.send({
      "embed": {
        "title": `Poll Stats: ${docx.data().q}`,
        "description": `<:yes:424361224675786752> Yes: ${msg.reactions.cache.get(yes).count-1}
        <:no:424361302069346304> No: ${msg.reactions.cache.get(no).count-1}
        [Poll Message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${msg.id})`
      }
    })
  
}
