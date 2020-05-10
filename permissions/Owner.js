const Spark = require("sparkbots")
const Permission = Spark.permission("Owner", {level: 10})
Permission.code = (client, message) => {
  let owners = ['190916650143318016', '217006264570347520'];
    if (!owners.includes(message.author.id)) {
        return true
    }
    return false;

}

module.exports = Permission