import {command} from 'sparkbots'
import {NewsChannel} from 'discord.js'
import { APIApplicationCommandGuildInteraction, InteractionResponseType, MessageFlags } from 'discord-api-types/v8'
const Command = command('subscribe')
Command.setLevel(0)
export = Command

Command.code = async (client, interaction: APIApplicationCommandGuildInteraction, respond) => {

  if (!interaction.guild_id) return respond({type: InteractionResponseType.ChannelMessageWithSource,
    data: {content: 'You cannot subscribe in DMs, please use the command in a server.', flags: MessageFlags.EPHEMERAL}})

  const guild = client.guilds.cache.get(interaction.guild_id)
  const member = await guild.members.fetch(interaction.member.user.id)
  
  if(!member.permissionsIn(interaction.channel_id).has('MANAGE_WEBHOOKS') && !member.hasPermission('MANAGE_GUILD') && member.id!=="190916650143318016")
    return respond({type: InteractionResponseType.ChannelMessageWithSource, data: {
      embeds: [{
        title: 'Error',
        description: 'You do not have the "Manage Webhooks" or "Manage Server" permission.',
        color: 16711680
      }]
    }})

  if(!guild.me.permissionsIn(interaction.channel_id).has('MANAGE_WEBHOOKS'))
    return respond({type: InteractionResponseType.ChannelMessageWithSource, data: {content: '<:no:424361302069346304> I don\'t have the `Manage Webhooks` permission! I need this to run the subscribe command.'}})

  let error = false

  await (client.channels.cache.get('692495015322189934') as NewsChannel).addFollower(interaction.channel_id, `${member.user.tag} used the subscribe command`).catch(e => {respond({type: InteractionResponseType.ChannelMessageWithSource, data: {content: '<:no:424361302069346304> '+e.toString(), allowed_mentions: {parse: []}}}); error = true})

  if(error) return

  respond({type: InteractionResponseType.ChannelMessageWithSource, data: {content: '<:check:424361224675786752> Successfully subscribed to YesNo announcements! Bot updates will be delivered to this channel. You can manage this in Channel Settings > Integrations.'}})

}
