declare module 'sparkbots' {
    import { ClientOptions, Snowflake, MessageEmbed } from 'discord.js'
    import DataStore from 'sparkbots/src/dataStore'
    import CustomConfig from 'sparkbots/src/CustomConfig'
    const version : string
    const DataStore: DataStore
    const methods: {RichEmbed: MessageEmbed, MessageEmbed: MessageEmbed}
    const CustomConfig: CustomConfig
    const command: any
    const observer: any
    const engine: any
    const permission: any
    const snippet: any
    const event: any
    function start(options: StartOptions): any
    interface StartOptions {
        prefix: string | string[]
        ignoreBots?: boolean
        token: string
        disabled?: any
        clientOptions?: ClientOptions
        ownerID?: Snowflake
        embedColor?: string
        ignoreUpdate?: boolean | string | string[]
        first?: boolean
    }
}
