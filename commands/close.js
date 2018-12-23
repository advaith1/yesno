const Spark = require("sparkbots")
const Command = Spark.command("close")
Command.setLevel(0)
Command.allowDms(true)
Command.setDescription('Ping pong')
module.exports = Command

const {db} = require('/app/db.js')

Command.code = async (client, message) => {
    
  const doc = db.collection('polls').doc(message.channel.id)
    
  const docx = await doc.get()
    
  if(!docx.data().message) return message.channel.send('Looks like there isn\'t a poll currently open.')
  
  await message.channel.messages.fetch(docx.data().message)
  
  const msg = await await message.channel.messages.fetch(docx.data().message)
  
  await message.channel.send({
      "embed": {
        "title": `Poll Closed: ${docx.data().q}`,
        "description": `Yes: ${msg.reactions.get('526209014254665759').count-1}
No: ${msg.reactions.get('526209037361086526').count-1}`
      }
    })
  
  await message.channel.send(`${message.author.tag} closed a poll`)

  msg.delete()
  
  doc.delete()
  
}
