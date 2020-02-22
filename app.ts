const result = require('dotenv').config({path: __dirname + '/.env'})

if (result.error) {
  throw result.error
}

import {start} from 'sparkbots'

start({
    prefix: 'yn.',
    ignoreBots: true,
    token: process.env.TOKEN
})

import './web'

console.log('Starting...')
