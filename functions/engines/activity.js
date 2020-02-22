var Spark = require("sparkbots")
const Engine = Spark.engine("activity")
module.exports = Engine

Engine.code = async (client, message) => {
  
    //runs every minute
setInterval( async () => {
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: "online",
          activity: {
            name: `polls on ${client.guilds.cache.size} servers | yn.help`,
            type: 3,
          }
        })
  
}, 60000)

  
  // Sets status on boot
    client.user.setPresence({
          status: "online",
          activity: {
            name: `polls [JUST RESTARTED] on ${client.guilds.cache.size} servers | yn.help`,
            type: 3,
      }
  })
  
}