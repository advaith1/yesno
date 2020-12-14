import {permission} from 'sparkbots'
const Permission = permission("User", {level: 0})
Permission.code = (client, interaction, message) => {
    return Boolean(message?.author.bot)
}

module.exports = Permission