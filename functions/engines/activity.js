var Spark = require("sparkbots")
const Engine = Spark.engine("activity")
module.exports = Engine

//const DBL = require("dblapi.js");
//const dbl = new DBL(process.env.DBLTOKEN)

let votes

Engine.code = async (client, message) => {
  
    //runs every minute
setInterval( async () => {
  
   //await dbl.getBot('444633099712856064').then(bot => { votes = bot.points })
  
  //updates status: Watching x servers
  client.user.setPresence({
          status: "online",
          activity: {
            name: `music on ${client.guilds.size} servers | %help | moosic.co |upvotes on DBL`,
            type: 0,
          }
        })
  
}, 60000)

  //await dbl.getBot('444633099712856064').then(bot => { votes = bot.points })

  
  // Sets status on boot
    client.user.setPresence({
          status: "online",
          activity: {
            name: `music [JUST RESTARTED] on ${client.guilds.size} servers | %help | moosic.co | upvotes on DBL`,
            type: 0,
      }
  })
  
}