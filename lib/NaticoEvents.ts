import { EventEmitter } from 'https://deno.land/x/cascade@1.0.7/struct/EventEmitter.ts';

export class EventHandlers extends EventEmitter {
    [event:string]:(...args[])=>any|Promise<any>
	constructor() {
		super();
	}
    //@ts-ignorenmaksdnml
	addEvent(event: string) {
		this[event] = (...args: any[]) => this.emit(event, ...args);
        return this
	}
}
export const eventHandlers = new EventHandlers().addEvent("ready")
eventHandlers.on("ready", () => console.log("readied up"))