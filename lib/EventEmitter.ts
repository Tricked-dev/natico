/** Code taken from https://deno.land/x/cascade@1.0.7/struct/EventEmitter.ts
 *
 * Modified it to use the discorddeno collection instead of the one cascade had
 */

import { Collection } from '../deps.ts';
/**
 * Type for a function which is ran on events
 */
type EventHandler = (...args: unknown[]) => void;

/**
 * A very small port of nodejs's EventEmitters
 */
export class EventEmitter {
	/**
	 * The event listeners which are registered and run on event
	 */
	private registeredEvents: Collection<string, EventHandler> = new Collection();
	/**
	 * Registers a handler function to be ran on an event
	 * @param event The event to be ran on
	 * @param handler The function to be run
	 */
	public on(event: string, handler: EventHandler) {
		this.registeredEvents.set(event, handler);
	}
	/**
	 * Registers a handler function to be ran on an event, but only once.
	 * @param event The event to be ran on
	 * @param handler The function to be run
	 */
	public once(event: string, handler: EventHandler) {
		this.registeredEvents.set('once-' + event, handler);
	}
	/**
	 * Emits an event on this emitter and runs the listener for that event.
	 * @param event The event to emit
	 * @param args The arguments to pass to listeners
	 */
	public emit(event: string, args?: unknown[]) {
		if (this.registeredEvents.has('once-' + event)) {
			const handler = this.registeredEvents.get('once-' + event);
			if (args) {
				if (handler) handler(...args);
			} else {
				if (handler) handler();
			}
			this.registeredEvents.delete('once-' + event);
		} else if (this.registeredEvents.has(event)) {
			const handler = this.registeredEvents.get(event);
			if (args) {
				if (handler) handler(...args);
			} else {
				if (handler) handler();
			}
		}
	}
}
