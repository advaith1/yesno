const Spark = require("sparkbots")
const Command = Spark.command("help")
Command.setLevel(0)
Command.allowDms(true)
module.exports = Command;

Command.code = (client, message) => {

  message.channel.send({
  "embed": {
    "title": "Moosic² Help",
    "description": "Moosic is a simple Discord Music bot by advaith.\n\nMoosic² is an add-on bot to Moosic that lets you play music in 2 servers at the same time! However, to support Moosic, you must be in the Moosic server and vote for Moosic on BFD to use Moosic².",
    "url": "https://moosic.advaith.fun",
    "color": 45013,
    "fields": [
      {
        "name": "Commands",
        "value": "• ▶ `play`: Plays music, you can use a file URL, YouTube URL, or song name/search query.\n\n• ⏺ `stream`: Stream music from a YT livestream, you can use a YouTube URL or stream name/search query.\n\n• ⏸ `pause`: Pauses music\n\n• ⏯ `resume`: Resumes paused music\n\n• ⏹ `stop`: Stops music and leaves the voice channel\n​"
      },
      {
        "name": "Links",
        "value": "[Website](https://moosic.advaith.fun) | [Add to your server](https://moosic.advaith.fun/2) | [Join server](https://discord.gg/WxPH3Fc) | [Upvote](https://discordbots.org/bot/444633099712856064/vote)"
      }
    ]
  }
})

}