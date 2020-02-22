import {command} from 'sparkbots'
import {Message} from 'discord.js'
const Command = command("die")
Command.setLevel(10)
Command.allowDms(true)
module.exports = Command;

Command.code = async (client, message: Message) => {

  await message.channel.send(":ok_hand::skin-tone-4:  Killing the bot...")
  
  process.exit()
  
}