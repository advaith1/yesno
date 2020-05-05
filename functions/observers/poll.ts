import {observer} from 'sparkbots'
import {Message, DMChannel} from 'discord.js'
const Observer = observer("poll")

import {db} from '../../db'

Observer.code = async (_client, message: Message) => {
  
  if(message.content.startsWith('<@526189797711151114> ') || message.content.startsWith('<@!526189797711151114> ')) {
    
    if(message.channel instanceof DMChannel) return message.channel.send('<:no:424361302069346304> You cannot create polls in DMs, please try it in a server.')

    const doc = db.collection('polls').doc(message.channel.id)
    
    const docx = await doc.get()
    
    if(docx.data()) return message.channel.send('A poll is currently open. Use `yn.close` to close it.')
    
    if(!message.channel.permissionsFor(message.guild.me).has('ADD_REACTIONS')) throw message.channel.send('I need the Add Reactions permission!')
    if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) throw message.channel.send('I need the Embed Links permission!')
    if(!message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES')) throw message.channel.send('I need the Manage Messages permission!')

    await message.channel.send(`${message.author} started a poll`, {allowedMentions: {parse: []}})

    let q = message.content.replace('<@526189797711151114> ', '').replace('<@!526189797711151114> ', '')
    let q2 = ''
    const oq = q

    if(q.length > 250) {
      q2 = q.slice(241)
      q = q.slice(0, 241) + '...'
    }

    let msg = await message.channel.send({
      embed: {
        title: `Poll: ${q}`,
        description: q2
      }
    })

    await msg.react('526209014254665759')
    await msg.react('526209037361086526')

    await msg.pin()

    await message.channel.lastMessage.delete()
    
    doc.set({
      'message': msg.id,
      'q': oq
    })
    
  }
}

export = Observer