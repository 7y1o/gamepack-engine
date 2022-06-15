
/** Event subscriber */
interface IEventBusListener {
    once: boolean,
    event: string,
    cb: (...data: any[]) => any
}

/** Global events bus */
class EventBus {
    
    /** Global event listeners */
    private listeners: IEventBusListener[];

    public constructor() {
        this.listeners = [];
    }

    /** Subscribe once */
    public once(event: IEventBusListener['event'], cb: IEventBusListener['cb']): void {
        this.listeners.push({
            once: true, event, cb
        });
    }

    /** Subscribe */
    public on(event: IEventBusListener['event'], cb: IEventBusListener['cb']): void {
        this.listeners.push({
            once: false, event, cb
        });
    }

    /** Unsubscribe */
    public off(event: IEventBusListener['event'], cb: IEventBusListener['cb']): void {
        this.listeners.splice(this.listeners.findIndex((l) => l.event === event && l.cb == cb), 1);
    }

    /** Emit event */
    public emit(event: string, ...data: any[]): void {
        for (const listener of this.listeners) {
            listener.cb(...data);
            if (listener.once) this.off(event, listener.cb);
        }
    }
}

const ebus = new EventBus();
export default ebus;
