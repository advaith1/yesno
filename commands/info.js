const Spark = require("sparkbots")
const Command = Spark.command("info")
Command.addAlias('about')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('**Aliases**: none\n**Description**: Some info about the bot\n**Arguments**: none\n**Example**: &info`')
module.exports = Command;

Command.code = (client, message) => {

    var v = process.memoryUsage().heapUsed
    v = (v / 1024 / 1024).toFixed(3)
  
  message.channel.send({
  "embed": {
    "description": "Moosic is a simple Discord music bot.",
    "color": 45013,
    "thumbnail": {
      "url": client.user.displayAvatarURL({format: 'png', size: 1024})
    },
    "author": {
      "name": "Moosic Info",
      "url": "https://moosic.advaith.fun",
      "icon_url": client.user.displayAvatarURL({format: 'png', size: 1024})
    },
    "fields": [
      {
        "name": "Prefix",
        "value": "`&`",
        "inline": true
      },
      {
        "name": "Creator",
        "value": "<@190916650143318016> (`advaith#9121`)",
        "inline": true
      },
      {
        "name": "Official Server",
        "value": "https://discord.gg/ZG9EJ9Q",
        "inline": true
      },
      {
        "name": "Website",
        "value": "https://moosic.advaith.fun",
        "inline": true
      },
      {
        "name": "Bot List pages",
        "value": "[Discord Bots](https://bots.discord.pw/bots/398690824721924107)\n[Discord Bot List](https://discordbots.org/bot/398690824721924107)\n[Listcord](https://listcord.com/bot/444633099712856064)\n[Bots For Discord](https://botsfordiscord.com/bot/444633099712856064)",
        "inline": true
      },
      {
        "name": "Library",
        "value": "[discord.js](https://discord.js.org) v12 (master)",
        "inline": true
      },
      {
        "name": "Framework",
        "value": "[Spark](https://beta.discordspark.com) v"+Spark.version,
        "inline": true
      },
      {
        "name": "Server Count",
        "value": client.guilds.cache.size,
        "inline": true
      },
      {
        "name": "User Count",
        "value": client.users.cache.size,
        "inline": true
      },
      {
        "name": "Memory Usage",
        "value": `${v} MB`,
        "inline": true
      },
      {
        "name": "Contributors",
        "value": '<@217006264570347520> (`Olybear9#9309`)',
        "inline": true
      }
    ]
  }
  })
  
}