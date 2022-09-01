import {command} from 'sparkbots'
import { CommandInteraction } from 'discord.js'
import { stripIndent } from 'common-tags'
const Command = command("help")
Command.setLevel(0)
export = Command

Command.code = async (client, interaction: CommandInteraction) => {

  interaction.reply({
    embeds: [{
      title: "YesNo Help",
      description: stripIndent`
        YesNo is a simple yes/no poll bot created by [advaith](https://advaith.io). It is based on the YesNo bot built in to [Google Allo](https://allo.google.com), which shut down in March 2019.

        YesNo is super easy to use and requires no setup. To create a poll, mention the bot (\`@YesNo\`) and ask the question. For example: \`@YesNo is YesNo the best bot?\`. Polls will be pinned to the channel so people can easily find them.

        You can close a poll (which will unpin it and send the results) by using </close:788287602235146240>.

        To get YesNo update notifications delivered to this channel, use </subscribe:788287922088050698>.`,
      color: 2041985,
      footer: {
        text: "The YesNo name, logo design, and concept are by Google. This bot is not affiliated with Google."
      }
    }],
    components: [{type: 1, components: [
      {
        type: 2,
        style: 5,
        label: 'Website',
        url: 'https://yesno.advaith.io',
        emoji: '692120145430052875'
      },
      {
        type: 2,
        style: 5,
        label: 'Support Server',
        url: 'https://discord.gg/9QhkP4',
        emoji: '692120146227232799'
      },
      {
        type: 2,
        style: 5,
        label: 'Add to your server',
        url: 'https://discord.com/api/oauth2/authorize?client_id=526189797711151114&scope=bot+applications.commands&response_type=code',
        emoji: '692120145685905522'
      },
      {
        type: 2,
        style: 5,
        label: 'Vote',
        url: 'https://botsfordiscord.com/bot/526189797711151114/vote',
        emoji: '692120145421795328'
      },
      {
        type: 2,
        style: 5,
        label: 'Review',
        url: 'https://bots.ondiscord.xyz/bots/526189797711151114/review',
        emoji: '692120145916723211'
      }
    ]}]
  })

}
