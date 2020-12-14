import {command} from 'sparkbots'
import {SnowflakeUtil, TextChannel} from 'discord.js'
import {APIInteraction} from 'discord-api-types/v8'
const Command = command('ping')
Command.setLevel(0)
Command.setDescription('Ping pong')
export = Command

Command.code = async (client, interaction: APIInteraction, respond) => {
    await respond({type: 4, data: {content: 'Ping!'}})
    const start = SnowflakeUtil.deconstruct(interaction.id).timestamp
    const end = SnowflakeUtil.deconstruct((client.channels.cache.get(interaction.channel_id) as TextChannel).lastMessageID).timestamp
    const edit = (text: string) => client.api.webhooks(client.config.applicationID, interaction.token).messages('@original').patch({data: {content: text}})
    edit(`🏓 Pong! Took **${end - start}**ms.`)
}
