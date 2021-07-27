declare module 'sparkbots' {
    import { ClientOptions, Snowflake, MessageEmbed, Client as DiscordClient, Message, ClientEvents, CommandInteraction } from 'discord.js'
    import DataStore from 'sparkbots/src/dataStore'
    import CustomConfig from 'sparkbots/src/CustomConfig'

    // @ts-expect-error
    interface Client extends DiscordClient {
        readonly api: {
            applications: any
            channels: any
            gateway: any
            guilds: any
            invites: any
            oauth2: any
            users: any
            voice: any
            webhooks: any
        }
        config: any
    }

    const version : string
    const DataStore: DataStore
    const methods: {RichEmbed: MessageEmbed, MessageEmbed: MessageEmbed}
    const CustomConfig: CustomConfig

    function command(name: string): Command
    interface Command {
        addAlias(name: string | string[]): void
        setDescription(description: string): void
        setLevel(level: number): void
        allowDms(allow: boolean): void
        addHelpField(title: string, value: string, inline: boolean): void
        disable(): void
        level: number
        name: string
        code(client: Client, interaction: CommandInteraction | Message): any
    }

    function observer(name: string): Observer
    interface Observer {
        setType(type: 'command' | 'message' | 'all'): void
        disable(): void
        code(client: Client, message: Message): any
    }

    function engine(name: string): Engine
    interface Engine {
        setTime(time: number): void
        setDelay(delay: number): void
        disable(): void
        code(client: Client): any
    }

    function permission(name: string, {level: number}): Permission
    interface Permission {
        setLevel(level: number): void
        disable(): void
        level: number
        code(client: Client, interaction: CommandInteraction, message: Message): boolean
    }

    const snippet: any

    function event(name: string): Event
    interface Event {
        setEvent(event: keyof ClientEvents): void
        code(client: Client, ...args: any): any
    }

    function start(options: StartOptions): any
    interface StartOptions {
        prefix: string | string[]
        ignoreBots?: boolean
        token?: string
        disabled?: any
        clientOptions?: ClientOptions
        ownerID?: Snowflake
        embedColor?: string
        ignoreUpdate?: boolean | string | string[]
        first?: boolean
    }
}
