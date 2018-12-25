const Spark = require("sparkbots")
const Command = Spark.command("forceclose")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('close a poll')
module.exports = Command

const {db} = require('/app/db.js')

Command.code = async (client, message) => {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
  
  if(!docx.data()) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
    
  await message.channel.send(`${message.author.tag} force closed a poll`)
  
  doc.delete()
  
}
