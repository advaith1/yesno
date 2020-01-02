const Spark = require("sparkbots")
const Engine = Spark.engine("botlists")
module.exports = Engine

const blapi = require('blapi')
const fetch = require('jaczfetch')

Engine.code = (client, message) => {
      
  try {
    
    blapi.handle(client, {
      'botlist.space': process.env.bls,
      'discordsbestbots.xyz': process.env.dbb,
      'discordbots.org': process.env.dbl,
      'bots.ondiscord.xyz': process.env.bod,
      'botsfordiscord.com': process.env.bfd,
      'discordextremelist.xyz': process.env.del,
      'discord.bots.gg': process.env.dbgg
    }, 3)
    
    // discordbotlist.com accepts more data
    setInterval(() => {
        fetch.post(`https://discordbotlist.com/api/bots/${client.user.id}/stats`)
          .set('Authorization', 'Bot '+process.env.dblc)
          .send({ guilds: client.guilds.size, users: client.users.size })
          .catch(error => console.error(error))
    }, 60000)

  } catch (e) {
    console.error(e)
  }
  
}