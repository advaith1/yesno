import {engine} from 'sparkbots'
import {Client} from 'discord.js'
const Engine = engine("activity")
export = Engine

Engine.code = async (client: Client) => {
  
    //runs every minute
setInterval( async () => {
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: 'online',
          activity: {
            name: `polls on ${client.guilds.cache.size} servers | yn.help`,
            type: 3,
          }
        })
  
}, 60000)

  
  // Sets status on boot
    client.user.setPresence({
          status: 'idle',
          activity: {
            name: `polls [JUST RESTARTED] on ${client.guilds.cache.size} servers | yn.help`,
            type: 3,
      }
  })
  
}