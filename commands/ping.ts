import {command} from 'sparkbots'
import {CommandInteraction} from 'discord.js'
const Command = command('ping')
Command.setLevel(0)
Command.setDescription('Ping pong')
export = Command

Command.code = async (client, interaction: CommandInteraction) => {
    const reply = await interaction.defer({ fetchReply: true })
    const responseTimestamp = 'createdTimestamp' in reply ? reply.createdTimestamp : new Date(reply.timestamp).getTime() // handle raw messages, for private threads
    interaction.editReply(`🏓 Pong! Took **${responseTimestamp - interaction.createdTimestamp}**ms.`)
}
