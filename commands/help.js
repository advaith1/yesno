const Spark = require("sparkbots")
const Command = Spark.command("help")
Command.setLevel(0)
Command.allowDms(true)
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send({
  "embed": {
    "title": "YesNo Help",
    "description": "Moosic is a simple Discord Music bot by advaith.\n\nMoosic² is an add-on bot to Moosic that lets you play music in 2 servers at the same time! However, to support Moosic, you must be in the Moosic server and vote for Moosic on BFD to use Moosic².",
    "color": 45013
  }
})

}