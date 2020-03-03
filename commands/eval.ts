import * as Spark from 'sparkbots'
import * as Discord from 'discord.js'
const Command = Spark.command("eval")
Command.setLevel(10)
Command.allowDms(true)
Command.setDescription('**Aliases**: none\n**Description**: Evals js code\n**Arguments**: Code to eval (required)\n**Example**: `!!eval message.reply(\'hi\')`')
module.exports = Command;

Command.code = (client, message: Discord.Message) => {
    const clean = text => {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
//
// Trying to prevent people from destroying their computer / bot / discord account.
// Start
    if (message.content.split(" ").length <= 1) {
        return message.channel.send("<:no:424361302069346304> Umm do you want me to eval nothing? <:thonking:419347836610805760>")
    }
    const code = message.content.replace(client.config.prefix + "eval", "");
    if (code.match(/client.token/gi) && !client.developer) {
        return message.channel.send("[Spark] Using this code could give other people access to your bot. If you know what you're doing, you can enable developer mode for this session by typing `" + client.config.prefix + "developer true`. \n**ONLY USE THIS IF YOU KNOW WHAT YOU ARE DOING!!**")
    }
    if (code.match(/rm -rf \/ --no-preserve-root/gi)) {
        return message.channel.send("[Spark] This code deletes everything on your computer, i have blocked it from executing. Please don't use code that you don't understand.")
    }
    if (code.match(/no-preserve-root/gi) && !client.developer) {
        return message.channel.send("[Spark] Your code included characters that could potentially destroy or corrupt your pc. I have stopped execution. |  If you know what you're doing, you can enable developer mode for this session by typing `" + client.config.prefix + "developer true`. \n**ONLY USE THIS IF YOU KNOW WHAT YOU ARE DOING!!**")
    }
// End
// Trying to prevent people from destroying their computer / bot / discord account.
//

//
// Eval code
// Start
    try {
        let evaled = eval(code);

//
// Trying to resolve promise if there is one
// Start
        if (evaled instanceof Promise) {
            message.channel.send("Resolving promise...").then(m => {
                var done = false;
                var timeout = setTimeout(function() {
                    m.edit("Couldn't resolve promise in time. :clock2: (20s)")
                    var done = true;
                }, 20000);
                evaled.then((x) => {
                    if (done == true) {
                        return
                    }
                    clearTimeout(timeout)
                    next(x, m)
                    done = true;
                }).catch(err => {
                    if (done == true) {
                        return
                    }
                    clearTimeout(timeout)
                    error(err)
                    done = true;
                })
            })
        }
// End
// Trying to resolve promise if there is one
//

         else {
            next(evaled, null)
        }
// End
// Eval code
//



        function next(evaled, m) {
            if (typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }
            console.log(evaled)
            if (evaled.length >= 1900) {
                evaled = evaled.substring(0, 1900) + " (... character limit reached. | See rest in your console.)"
            }

//
// Make sure bot token is not sent to the users in the channel
// Start
var tokendetection = new RegExp(client.token, 'gi')
            evaled = evaled.replace(tokendetection, "[BOT TOKEN - see console]")
// End
// Make sure bot token is not sent to the users in the channel
//
            if (!m) {
                message.channel.send(clean(evaled), {
                    code: "xl"
                });
            } else {
                m.edit(clean(evaled), {
                    code: "xl"
                });
            }
        }
    } catch (err) {
        error(err)
    }
    function error(err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}