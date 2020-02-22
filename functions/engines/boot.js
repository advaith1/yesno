const Spark = require("sparkbots")
const Engine = Spark.engine("boot")
module.exports = Engine

Engine.code = (client, message) => {
  
    client.channels.resolve('424391556267769857').send('<:check:424361224675786752> Bot started up!')
  
}