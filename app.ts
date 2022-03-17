const result = require('dotenv').config({path: __dirname + '/.env'})
if (result.error) throw result.error

import { start } from 'sparkbots'
import { Options } from 'discord.js'

start({
  prefix: 'yn.',
  ignoreBots: true,
  token: process.env.TOKEN,
  clientOptions: {
    shards: 'auto',
    makeCache: Options.cacheWithLimits({MessageManager: 10}),
    partials: ['MESSAGE', 'REACTION', 'USER'],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']
  }
})

import './web'

console.log('Starting...')

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:')
  console.error(error)
})

process.on('uncaughtException', error => {
  console.error('Uncaught exception:')
  console.error(error)
})
