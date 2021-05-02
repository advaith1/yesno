import {command} from 'sparkbots'
import { TextChannel } from 'discord.js'
import { APIApplicationCommandGuildInteraction, InteractionResponseType, MessageFlags } from 'discord-api-types/v8'
const Command = command("stats")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'
import {yes, no} from '../emojis.json'

Command.code = async (client, interaction: APIApplicationCommandGuildInteraction, respond) => {

  if (!interaction.guild_id) return respond({type: InteractionResponseType.ChannelMessageWithSource,
    data: {content: 'DMs cannot have polls', flags: MessageFlags.EPHEMERAL}})
    
  const doc = db.collection('polls').doc(interaction.channel_id)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return respond({type: InteractionResponseType.ChannelMessageWithSource, data: {content: 'Looks like there isn\'t a poll currently open.'}})
    
  const msg = await (client.channels.cache.get(interaction.channel_id) as TextChannel).messages.fetch(docx.data().message)
  
  await respond({type: InteractionResponseType.ChannelMessageWithSource, data: {
      embeds: [{
        title: `Poll Stats: ${docx.data().q}`,
        description: `<:yes:424361224675786752> Yes: ${msg.reactions.cache.get(yes).count-1}
<:no:424361302069346304> No: ${msg.reactions.cache.get(no).count-1}
[Poll Message](https://discord.com/channels/${interaction.guild_id}/${interaction.channel_id}/${msg.id})`
      }]
    }})
  
}
