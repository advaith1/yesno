import {engine} from 'sparkbots'
import {Client} from 'discord.js'
import {gauge} from 'datadog-metrics'
const Engine = engine('datadog')
export = Engine

import {db} from '../../db'

Engine.code = (client: Client) => {
  
  const stats = async () => {
    gauge('yesno.servercount', client.guilds.cache.size)
    gauge('yesno.users', client.users.cache.size)
    gauge('yesno.memory.heapUsed', process.memoryUsage().heapUsed/1024/1024)
  }

  const polls = () => {
    db.collection('polls').get().then((snapshot) => {
      gauge('yesno.polls', snapshot.size)
    })
  }

  setInterval(stats, 30000)
  setInterval(polls, 1800000)

}
