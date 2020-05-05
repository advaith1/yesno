const result = require('dotenv').config({path: __dirname + '/.env'})

if (result.error)
  throw result.error


import {start} from 'sparkbots'

start({
  prefix: 'yn.',
  ignoreBots: true,
  token: process.env.TOKEN,
  clientOptions: {
    partials: ['USER'],
    shards: 'auto',
    ws: {
      large_threshold: 50,
      intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']
      //1 << 0 | 1 << 9 | 1 << 10 | 1 << 12
    }
  }
})

import './web'

console.log('Starting...')
