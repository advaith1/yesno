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
  
  let msg = await message.channel.send({
      "embed": {
        "title": `Poll Closed: ${docx.data().q}`
      }
    })
  
  doc.delete()
  
}
