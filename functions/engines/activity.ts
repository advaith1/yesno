import {engine} from 'sparkbots'
const Engine = engine("activity")
export = Engine

Engine.code = async (client) => {
  
  //runs every minute
  setInterval( async () => {
  
    //updates status: Watching x servers
    client.user.setPresence({
      status: 'online',
      activities: [{
        name: `polls on ${client.guilds.cache.size} servers | yn.help`,
        type: 3,
      }]
    })
    
  }, 60000)

  
  // Sets status on boot
  client.user.setPresence({
    status: 'idle',
    activities: [{
      name: `polls [JUST RESTARTED] on ${client.guilds.cache.size} servers | yn.help`,
      type: 3,
    }]
  })
  
}
