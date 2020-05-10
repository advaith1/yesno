const Spark = require("sparkbots")
const Permission = Spark.permission("User", {level: 0})
Permission.code = (client, message) => {
    if(message.author.bot) return true
    return false

}

module.exports = Permission