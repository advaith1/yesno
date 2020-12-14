import {command} from 'sparkbots'
import { APIInteraction } from 'discord-api-types/v8'
const Command = command("forceclose")
Command.setLevel(0)
Command.setDescription('close a poll')
export = Command

import {db} from '../db'

Command.code = async (client, interaction: APIInteraction, respond) => {
    
  const doc = db.collection('polls').doc(interaction.channel_id)
    
  const docx = await doc.get()
  
  if(!docx.data()?.message) return respond({type: 4, data: {content: 'Looks like there isn\'t a poll currently open.'}})
        
  await respond({type: 4, data: {content: `<@${interaction.member.user.id}> force closed a poll`}})
  
  doc.delete()
  
}
