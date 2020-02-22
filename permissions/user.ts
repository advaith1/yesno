import {permission} from 'sparkbots'
import {Message} from 'discord.js'
const Permission = permission("User", {level: 0})
Permission.code = (client, message: Message) => {
    if(message.author.bot) return true
    return false
}

module.exports = Permission