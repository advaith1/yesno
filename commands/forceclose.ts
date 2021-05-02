import {command} from 'sparkbots'
import { APIApplicationCommandGuildInteraction, InteractionResponseType, MessageFlags } from 'discord-api-types/v8'
const Command = command("forceclose")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'

Command.code = async (client, interaction: APIApplicationCommandGuildInteraction, respond) => {

  if (!interaction.guild_id) return respond({type: InteractionResponseType.ChannelMessageWithSource,
    data: {content: 'DMs cannot have polls', flags: MessageFlags.EPHEMERAL}})
    
  const doc = db.collection('polls').doc(interaction.channel_id)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return respond({type: InteractionResponseType.ChannelMessageWithSource,
    data: {content: 'Looks like there isn\'t a poll currently open.'}})
        
  await respond({type: InteractionResponseType.ChannelMessageWithSource,
    data: {content: `<@${interaction.member.user.id}> force closed a poll`}})
  
  doc.delete()
  
}
