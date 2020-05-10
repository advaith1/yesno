const Spark = require("sparkbots")

Spark.start({
prefix: 'yn.',
token: process.env.TOKEN })

require('./express.js')