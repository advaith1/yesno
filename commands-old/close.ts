import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("close")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'
import {yes, no} from '../emojis.json'


Command.code = async (client, message: Message) => {
  
  try {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
  
  if(!docx.data()) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  const msg = await message.channel.messages.fetch(docx.data().message)
  
  const votemsgs = [
    '', '', '',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_vote:692120145421795328> voting for it on <:botsfordiscord2:381674698993303553> Bots For Discord!](https://botsfordiscord.com/bot/526189797711151114/vote)',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_vote:692120145421795328> voting for it on <:botsfordiscord2:381674698993303553> Bots For Discord!](https://botsfordiscord.com/bot/526189797711151114/vote)',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_review:692120145916723211> reviewing it on <:bod:693953659188412416> Bots on Discord!](https://bots.ondiscord.xyz/bots/526189797711151114/review)'
  ]

  const votemsg = votemsgs[Math.floor(Math.random()*votemsgs.length)]

  let q = docx.data().q
  
  if(q.length > 243)
    q = q.slice(0, 239) + '...'
  
  await message.channel.send({
      "embed": {
        "title": `Poll Closed: ${q}`,
        "description": `<:yes:424361224675786752> Yes: ${msg.reactions.cache.get(yes).count-1}
<:no:424361302069346304> No: ${msg.reactions.cache.get(no).count-1}
[Poll Message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${msg.id})${votemsg}`
      }
    })
  
  await message.channel.send(`${message.author} closed a poll`, {allowedMentions: {parse: []}})
  
  msg.unpin()

  message.delete()
  
  doc.delete()
    
  } catch (e) {
  
    message.channel.send(`There was an error closing the poll: ${e}

To force close the active poll use \`yn.forceclose\`.`)
    
  }
  
}
