import {engine} from 'sparkbots'
import {Client, TextChannel} from 'discord.js'
const Engine = engine("load-polls")
export = Engine

import {db} from '../../db'


Engine.code = (client: Client) => {

  db.collection('polls').get().then((snapshot) => {
      snapshot.forEach(async (doc) => {
        
        let channel = client.channels.cache.get(doc.id)

        // Cancel if channel isn't found
        if(!channel) return

        if(!(channel instanceof TextChannel)) return
        
        // Fetch message
        await channel.messages.fetch(doc.data().message).catch(e => {})

        // Cancel if message isn't found
        if(!channel.messages.cache.get(doc.data().message)) return

        if(!channel.messages.cache.get(doc.data().message).reactions.cache.get('526209014254665759')) return console.log(`No Yes reaction: Channel ${doc.id}, Message ${doc.data().message}`)
        if(!channel.messages.cache.get(doc.data().message).reactions.cache.get('526209037361086526')) return console.log(`No No reaction: Channel ${doc.id}, Message ${doc.data().message}`)

        // Fetch yes reactions
        channel.messages.cache.get(doc.data().message).reactions.cache.get('526209014254665759').users.fetch().catch(e => console.error(e));

        // Fetch no reactions
        channel.messages.cache.get(doc.data().message).reactions.cache.get('526209037361086526').users.fetch().catch(e => console.error(e))
      })
  })
  
}