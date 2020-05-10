var Spark = require("sparkbots")
const Engine = Spark.engine("dbl")
module.exports = Engine

const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBLTOKEN)

Engine.code = (client, message) => {
  
    setInterval(() => {

      dbl.postStats(client.guilds.size)
      
      //console.log('Posted stats to DBL, server count: '+client.guilds.size)
  
    }, 60000)
  
}