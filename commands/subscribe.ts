import {command} from 'sparkbots'
import {Client, Message, NewsChannel} from 'discord.js'
const Command = command('subscribe')
Command.setLevel(0)
export = Command

Command.code = async (client: Client, message: Message) => {
  
  if(!message.member.permissionsIn(message.channel).has('MANAGE_WEBHOOKS') && !message.member.hasPermission('MANAGE_GUILD') && message.member.id!=="190916650143318016")
    return message.channel.send({
      embed: {
        title: 'Error',
        description: 'You do not have the "Manage Webhooks" or "Manage Server" permission.',
        color: 16711680
      }
    })

  if(!message.guild.me.permissionsIn(message.channel).has('MANAGE_WEBHOOKS'))
    return message.channel.send('<:no:424361302069346304> I don\'t have the `Manage Webhooks` permission! I need this to run the subscribe command.')

  let error = false

  await (client.channels.cache.get('692495015322189934') as NewsChannel).addFollower(message.channel.id, `${message.author.tag} used the subscribe command`).catch(e => {message.channel.send('<:no:424361302069346304> '+e.toString(), {allowedMentions: {parse: []}}); error = true})

  if(error) return

  message.channel.send('<:check:424361224675786752> Successfully subscribed to YesNo announcements! Bot updates will be delivered to this channel. You can manage this in Channel Settings > Integrations.')

}
