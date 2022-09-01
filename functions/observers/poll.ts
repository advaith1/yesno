import {observer} from 'sparkbots'
import {Message} from 'discord.js'
const Observer = observer("poll")

import {db} from '../../db'
import {yes, no} from '../../emojis.json'

Observer.code = async (client, message: Message) => {
  
  if(message.content.startsWith('<@526189797711151114> ') || message.content.startsWith('<@!526189797711151114> ')) {
    
    if(!message.inGuild()) return message.channel.send('<:no:424361302069346304> You cannot create polls in DMs, please try it in a server.')

    const doc = db.collection('polls').doc(message.channel.id)
    
    const docx = await doc.get()
    
    if(docx.data()) return message.channel.send('A poll is currently open. Use </close:788287602235146240> to close it.')
    
    if(!message.channel.permissionsFor(message.guild.me).has('ADD_REACTIONS')) throw message.channel.send('I need the Add Reactions permission!')
    if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) throw message.channel.send('I need the Embed Links permission!')
    if(!message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES')) throw message.channel.send('I need the Manage Messages permission!')

    await message.channel.send({content: `${message.author} started a poll`, allowedMentions: {parse: []}})

    let q = message.cleanContent.split(' ').slice(1).join(' ')
    let q2 = ''
    const oq = q

    if(q.length > 250) {
      q2 = q.slice(241)
      q = q.slice(0, 241) + '...'
    }

    let msg = await message.channel.send({
      embeds: [{
        title: `Poll: ${q}`,
        description: q2
      }]
    })

    await msg.react(yes)
    await msg.react(no)

    await msg.pin()

    await message.channel.lastMessage.delete()
    
    doc.set({
      'message': msg.id,
      'q': oq
    })
    
  }
}

export = Observer
