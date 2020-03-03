import { event } from 'sparkbots'
import { Guild } from 'discord.js'
import { increment } from 'datadog-metrics'
const Event = event('leave')
Event.setEvent('guildDelete')

Event.code = async (client, server: Guild) => {
    if(!server.available) return
    increment('yesno.left', -1)
}

export = Event
