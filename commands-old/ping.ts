import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command('ping')
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Ping pong')
export = Command

Command.code = async (client, message: Message) => {
    const sent = await message.channel.send("Pinging...")
    sent.edit(`🏓 Pong! Took **${sent.createdTimestamp - message.createdTimestamp}**ms.`)
    
    // Permission check
    if(message.guild && !message.guild.me.permissions.has('EMBED_LINKS')){
        message.channel.send(':warning: I don\'t have the `Embed Links` permission! I need this to run most commands.')
    }
}
