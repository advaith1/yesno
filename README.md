# YesNo

![status](https://botlist.space/bot/526189797711151114/badge?property=status) ![servers](https://botlist.space/bot/526189797711151114/badge?property=servers) [![chat](https://img.shields.io/discord/398998849026261003?color=%237289DA&logo=discord&logoColor=white)](https://img.shields.io/discord/398998849026261003?color=%237289DA&logo=discord&logoColor=white)

YesNo is a simple Discord yes/no poll bot for created by advaith. It is based on the YesNo bot built in to Google Allo, which shut down in March 2019.

[Website](https://yesno.advaith.fun) | [Add to Discord](https://discordapp.com/oauth2/authorize?client_id=526189797711151114&scope=bot&response_type=code)

## Using YesNo

YesNo is super easy to use and requires no setup. To create a poll, mention the bot (`@YesNo`) and ask the question. For example: `@YesNo is YesNo the best bot?`. Polls will be pinned to the channel so people can easily find them.

You can close a poll (which will unpin it and send the results) by sending `yn.close`.

## YesNo Development

YesNo uses [discord.js](https://discord.js.org) v12 ([Docs](https://discord.js.org/#/docs/main/master/general/welcome), [Repo](https://github.com/discordjs/discord.js)) and a fork of [Spark](https://sparkdocs.advaith.fun) ([Docs](https://sparkdocs.advaith.fun/documentation/intro), [Repo](https://github.com/advaith1/Spark-djs12)). [Cloud Firestore](https://firebase.google.com/products/firestore) is used for the database. YesNo uses TypeScript and Node.js v13.

Tokens are loaded from a `.env` file: `TOKEN` is the Discord bot token, `PORT` is the port that the webserver (`web.ts`) runs on, `DATADOG_API_KEY` is the Datadog API key, and the bot list tokens from `functions/engines/botlists.ts` are there.

The Cloud Firestore service account JSON file should be in `FIRESTORE.json`.

Self-hosting YesNo is not recommended, and please don't make a public clone.
