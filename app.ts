import Spark 

Spark.start({
    prefix: 'yn.',
    ignoreBots: true,
    token: process.env.TOKEN
})

require('./web.js')