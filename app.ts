const result = require('dotenv').config({path: __dirname + '/.env'})
if (result.error) throw result.error

import {start} from 'sparkbots'

start({
  prefix: 'yn.',
  ignoreBots: true,
  token: process.env.TOKEN,
  clientOptions: {
    shards: 'auto',
    messageCacheMaxSize: 10,
    partials: ['USER'],
    ws: {
      large_threshold: 50,
      intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']
    }
  }
})

import './web'

console.log('Starting...')
