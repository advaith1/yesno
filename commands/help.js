const Spark = require("sparkbots")
const Command = Spark.command("help")
Command.setLevel(0)
Command.allowDms(true)
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send({
  "embed": {
    "title": "YesNo Help",
    "description": `YesNo is a simple yes/no poll bot created by [advaith](https://advaith.fun). It is based on the YesNo bot built in to Google's [Allo]()`,
    "color": 45013
  }
})

}