import { event } from 'sparkbots'
import { increment } from 'datadog-metrics'
const Event = event('raw')
Event.setEvent('raw')

interface RawEvent {
    /** opcode */
    op: number
    /** event data */
    d: object
    /** sequence number, used for resuming sessions and heartbeats */
    s: number
    /** event name */
    t: string
}

const datadogKey = !!process.env.DATADOG_API_KEY

Event.code = async (client, event: RawEvent) => {
    if(datadogKey && event.t) increment('yesno.WSEvent', 1, [`event:${event.t}`])
}

export = Event
