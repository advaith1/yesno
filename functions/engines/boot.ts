import {engine} from 'sparkbots'
import {TextChannel} from 'discord.js'
const Engine = engine("boot")
export = Engine

Engine.code = (client) => {
  
    (client.channels.cache.get('424391556267769857') as TextChannel).send('<:check:424361224675786752> Bot started up!')

}
