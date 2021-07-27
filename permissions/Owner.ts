import {permission} from 'sparkbots'
const Permission = permission("Owner", {level: 10})
Permission.code = (client, interaction, message) => {
  let owners = ['190916650143318016'];
    if (interaction && interaction.user.id || message && !owners.includes(message.author.id)) {
        return true
    }
    return false;

}

module.exports = Permission