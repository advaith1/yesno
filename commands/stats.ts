import {command} from 'sparkbots'
import { CommandInteraction } from 'discord.js'
import { stripIndent } from 'common-tags'
const Command = command("stats")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'
import {yes, no} from '../emojis.json'

Command.code = async (client, interaction: CommandInteraction) => {

  if (!interaction.guild) return interaction.reply({content: 'DMs cannot have polls', ephemeral: true})
    
  const doc = db.collection('polls').doc(interaction.channelId)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return interaction.reply("Looks like there isn't a poll currently open.")
    
  const msg = await interaction.channel.messages.fetch(docx.data().message)
  
  await interaction.reply({
      embeds: [{
        title: `Poll Stats: ${docx.data().q}`,
        description: stripIndent`
          <:yes:424361224675786752> Yes: ${msg.reactions.cache.get(yes).count-1}
          <:no:424361302069346304> No: ${msg.reactions.cache.get(no).count-1}
          [Poll Message](${msg.url})`
      }]
    })
  
}
