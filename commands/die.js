const Spark = require("sparkbots")
const Command = Spark.command("die")
Command.setLevel(10)
Command.allowDms(true)
module.exports = Command;

Command.code = async (client, message) => {

  await message.channel.send(":ok_hand::skin-tone-4:  Killing the bot...")
  
  process.exit()
  
}