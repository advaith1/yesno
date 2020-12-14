import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("help")
Command.setLevel(0)
Command.allowDms(true)
export = Command

Command.code = (client, message: Message) => {

  message.channel.send({
  "embed": {
    "title": "YesNo Help",
    "description": `YesNo is a simple yes/no poll bot created by [advaith](https://advaith.io). It is based on the YesNo bot built in to [Google Allo](https://allo.google.com), which shut down in March 2019.

YesNo is super easy to use and requires no setup. To create a poll, mention the bot (\`@YesNo\`) and ask the question. For example: \`@YesNo is YesNo the best bot?\`. Polls will be pinned to the channel so people can easily find them.

You can close a poll (which will unpin it and send the results) by sending \`yn.close\`.

To get YesNo update notifications delivered to this channel, send \`yn.subscribe\`.

<:yn_website:692120145430052875>[ Website](https://yesno.advaith.io) | <:yn_support:692120146227232799>[ Support Server](https://discord.gg/9QhkP4) | <:yn_add:692120145685905522>[ Add to your server](https://discord.com/api/oauth2/authorize?client_id=526189797711151114&scope=bot&response_type=code) | **<:yn_vote:692120145421795328>[ Vote](https://botsfordiscord.com/bot/526189797711151114/vote)** | <:yn_review:692120145916723211>[ Review](https://bots.ondiscord.xyz/bots/526189797711151114/review)
​`,
    "color": 2041985,
    "footer": {
      "text": "The YesNo name, logo design, and concept are by Google. This bot is not affiliated with Google."
    },
  }
})

}