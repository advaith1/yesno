import {command} from 'sparkbots'
import {NewsChannel, CommandInteraction, GuildMember} from 'discord.js'
const Command = command('subscribe')
Command.setLevel(0)
export = Command

Command.code = async (client, interaction: CommandInteraction & {member: GuildMember | null}) => {

  if (!interaction.guild) return interaction.reply({
    content: 'You cannot subscribe in DMs, please use the command in a server.',
    ephemeral: true
  })
  
  if (!interaction.member.permissionsIn(interaction.channelId).has('MANAGE_WEBHOOKS') && !interaction.member.permissions.has('MANAGE_GUILD') && interaction.user.id!=="190916650143318016")
    return interaction.reply({
      embeds: [{
        title: 'Error',
        description: 'You do not have the "Manage Webhooks" or "Manage Server" permission.',
        color: 16711680
      }]
    })

  if (!interaction.guild.me.permissionsIn(interaction.channelId).has('MANAGE_WEBHOOKS'))
    return interaction.reply("<:no:424361302069346304> I don't have the `Manage Webhooks` permission! I need this to run the subscribe command.")

  let error = false

  await (client.channels.cache.get('692495015322189934') as NewsChannel).addFollower(interaction.channelId, `${interaction.user.tag} used the subscribe command`)
    .catch(e => {interaction.reply({content: '<:no:424361302069346304> '+e.toString(), allowedMentions: {parse: []}}); error = true})

  if (error) return

  interaction.reply('<:check:424361224675786752> Successfully subscribed to YesNo announcements! Bot updates will be delivered to this channel. You can manage this in Channel Settings > Integrations.')

}
