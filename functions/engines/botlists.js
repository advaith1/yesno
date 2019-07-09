const Spark = require("sparkbots")
const Engine = Spark.engine("botlists")
module.exports = Engine

const blapi = require('blapi')
const fetch = require('jaczfetch')

Engine.code = (client, message) => {
    
  blapi.setLogging(true)
  
  blapi.handle(client, {
    'botlist.space': process.env.bls,
    'discordbots.group': process.env.dbg,
    'discordsbestbots.xyz': process.env.dbb,
    'discordbots.org': process.env.dbl
  }, 3)
  
  // Bots On Discord has a ratelimit of 2 mins
  blapi.handle(client, {
    'bots.ondiscord.xyz': process.env.bod
  }, 2)
  
  // discordbotlist.com accepts more data
  setInterval(() => {
      fetch.post(`https://discordbotlist.com/api/bots/${client.user.id}/stats`)
        .set('Authorization', 'Bot '+process.env.dblc)
        .send({ guilds: client.guilds.size, users: client.users.size })
        .catch(error => console.error(error))
  }, 60000)
  
}