import { event } from 'sparkbots'
import { Guild } from 'discord.js'
import { increment } from 'datadog-metrics'
const Event = event('join')
Event.setEvent('guildCreate')

Event.code = async (client, server: Guild) => {
    if(!server.available) return
    increment('yesno.joined')
}

export = Event
