import {command} from 'sparkbots'
import { CommandInteraction } from 'discord.js'
import { stripIndent } from 'common-tags'
const Command = command("close")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'
import {yes, no} from '../emojis.json'


Command.code = async (client, interaction: CommandInteraction) => {

  if (!interaction.guild) return interaction.reply({content: 'DMs cannot have polls', ephemeral: true})
  
  try {
    
  const doc = db.collection('polls').doc(interaction.channelId)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return interaction.reply("Looks like there isn't a poll currently open.")
        
  const msg = await interaction.channel.messages.fetch(docx.data().message)
  
  const votemsgs = [
    '', '', '',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_vote:692120145421795328> voting for it on <:botsfordiscord2:381674698993303553> Bots For Discord!](https://botsfordiscord.com/bot/526189797711151114/vote)',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_vote:692120145421795328> voting for it on <:botsfordiscord2:381674698993303553> Bots For Discord!](https://botsfordiscord.com/bot/526189797711151114/vote)',
    '\n\nThanks for using YesNo! Please help out the bot by [<:yn_review:692120145916723211> reviewing it on <:bod:693953659188412416> Bots on Discord!](https://bots.ondiscord.xyz/bots/526189797711151114/review)'
  ]

  const votemsg = votemsgs[Math.floor(Math.random()*votemsgs.length)]

  let q = docx.data().q
  
  if(q.length > 243)
    q = q.slice(0, 239) + '...'
  
  await interaction.reply({
      embeds: [{
        title: `Poll Closed: ${q}`,
        description: stripIndent`
          <:yes:424361224675786752> Yes: ${msg.reactions.cache.get(yes).count-1}
          <:no:424361302069346304> No: ${msg.reactions.cache.get(no).count-1}
          [Poll Message](${msg.url})${votemsg}`
      }]
    })
  
  await interaction.followUp({content: `<@${interaction.member.user.id}> closed a poll`, allowedMentions: {parse: []}})
  
  msg.unpin()
  
  doc.delete()
    
  } catch (e) {
  
    interaction.followUp(stripIndent`
      There was an error closing the poll: ${e}

      To force close the active poll use </forceclose:788287844056956950>.`)
    
  }
  
}
