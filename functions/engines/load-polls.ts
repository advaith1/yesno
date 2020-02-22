import {engine} from 'sparkbots'
import {Client, TextChannel} from 'discord.js'
const Engine = engine("load-polls")
export = Engine

import {db} from '../../db'


Engine.code = (client: Client) => {

  db.collection('polls').get().then((snapshot) => {
      snapshot.forEach(async (doc) => {
        
        // Cancel if channel isn't found
        if(!client.channels.resolve(doc.id)) return
        
        // Fetch message
        await (client.channels.resolve(doc.id) as TextChannel).messages.fetch(doc.data().message).catch(e => {})

        // Cancel if message isn't found
        if(!(client.channels.resolve(doc.id) as TextChannel).messages.resolve(doc.data().message)) return

        // Fetch yes reactions
        (client.channels.resolve(doc.id) as TextChannel).messages.resolve(doc.data().message).reactions.resolve('526209014254665759').users.fetch().catch(e => console.error(e));

        // Fetch no reactions
        (client.channels.resolve(doc.id) as TextChannel).messages.resolve(doc.data().message).reactions.resolve('526209037361086526').users.fetch().catch(e => console.error(e))
      })
  })
  
}