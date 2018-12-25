const Spark = require("sparkbots")
const Command = Spark.command("help")
Command.setLevel(0)
Command.allowDms(true)
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send({
  "embed": {
    "title": "YesNo Help",
    "description": `YesNo is a simple yes/no poll bot created by [advaith](https://advaith.fun). It is based on the YesNo bot built in to [Google Allo](https://allo.google.com), which will shut down in March.

YesNo is super easy to use and requires no setup. To create a poll, mention the bot (\`@YesNo\`) and ask the question. For example: \`@YesNo is YesNo the best bot?\`. Polls will be pinned to the channel so people can easily find them.

You can close a poll (which will unpin it and send the results) by sending \`yn.close\`.`,
    "color": 2041985
  }
})

}