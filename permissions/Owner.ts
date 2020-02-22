import {permission} from 'sparkbots'
import {Message} from 'discord.js'
const Permission = permission("Owner", {level: 10})
Permission.code = (client, message: Message) => {
  let owners = ['190916650143318016'];
    if (!owners.includes(message.author.id)) {
        return true
    }
    return false;

}

module.exports = Permission