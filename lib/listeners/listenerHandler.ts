import { NaticoHandler } from '../base/baseHandler.ts';
import { Collection } from '../../deps.ts';
import Listener from './Listener.ts';
import { NaticoClient } from '../../src/client.ts';

export default class ListenerHandler extends NaticoHandler {
	modules: Collection<string, Listener>;
	emitters: Collection<string, any>;
	directory: string;

	constructor(client: NaticoClient, { directory }: { directory: string }) {
		super(client, {
			directory,
		});
		this.directory = directory;
		this.modules = new Collection();
		this.emitters = new Collection();
		this.emitters.set('client', this.client);
	}
	register(listener: any, filepath: string) {
		super.register(listener, filepath);
		listener.exec = listener.exec.bind(listener);
		this.addToEmitter(listener.id);
		return listener;
	}

	addToEmitter(id) {
		const listener = this.modules.get(id.toString());
		if (!listener) return;

		const emitter = this.emitters.get(listener.emitter);
		if (emitter == this.client) this.client.addEvent(listener.event);
		emitter.on(listener.event, listener.exec);
		return listener;
	}
	setEmitters(emitters: any) {
		for (const [key, value] of Object.entries(emitters)) {
			this.emitters.set(key, value);
		}

		return this;
	}
}
