import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command('ping')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Ping pong')
export = Command

Command.code = (client, message: Message) => {
    let start = new Date().getTime()
    message.channel.send('Pinging...').then((message) => {
        let end = new Date().getTime()
        message.edit('🏓 Pong! Took **' + (end - start) + '**ms');
    })
  
    // Permission check
    if(message.guild && !message.guild.me.hasPermission('EMBED_LINKS')){
        message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run most commands.')
    }
}
