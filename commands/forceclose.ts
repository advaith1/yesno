import {command} from 'sparkbots'
import { CommandInteraction } from 'discord.js'
const Command = command("forceclose")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'

Command.code = async (client, interaction: CommandInteraction) => {

  if (!interaction.guild) return interaction.reply({content: 'DMs cannot have polls', ephemeral: true})
    
  const doc = db.collection('polls').doc(interaction.channelId)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return interaction.reply("Looks like there isn't a poll currently open.")
        
  await interaction.reply(`<@${interaction.user.id}> force closed a poll`)
  
  doc.delete()
  
}
