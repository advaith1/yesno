var Spark = require("sparkbots")
const Engine = Spark.engine("dbpw")
module.exports = Engine

const snekfetch = require('snekfetch')

Engine.code = (client, message) => {
  
    setInterval(() => {

      snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
        .set('Authorization', process.env.DBPW)
        .send({ server_count: client.guilds.size })
        .catch(err => console.error(`Whoops something went wrong with updating bots.discord.pw stats: ${err.body}`))
      
      //console.log('Posted stats to discordbots.pw, server count: '+client.guilds.size)
  
    }, 60000)
  
}