const Spark = require("sparkbots")
const Engine = Spark.engine("botlists")
module.exports = Engine

const blapi = require('blapi')
const fetch = require('jaczfetch')

Engine.code = (client, message) => {
    
  blapi.handle(client, {
    'botlist.space': process.env.blspace,
    'botsfordiscord.com': process.env.BFD_TOKEN,
    'discord.boats': process.env.dboats,
    'discordboats.club': process.env.dbc,
    // Currently not listed on dbi
    // discordbotlist.com is below
    'discordbotlist.xyz': process.env.dblxyz,
    'discordapps.dev': process.env.ls,
    'discordbotreviews.xyz': process.env.dbr,
    'discordbot.world': process.env.dbw,
    'discord.bots.gg': process.env.dbgg,
    //'discordbotslist.com': process.env.dbotslist,   Site doe
    'discordbots.group': process.env.dbg,
    // Not listed on discord services yet
    'discordsbestbots.xyz': process.env.dbb,
    // DEL is down so i cant get api key
    'divinediscordbots.com': process.env.ddbl,
    'discordbots.org': process.env.dbl // blapi should manually support dbl now
  }, 1)
  
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