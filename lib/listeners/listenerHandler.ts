import { NaticoHandler } from '../base/baseHandler.ts';
import { Collection } from '../../deps.ts';
import Listener from './Listener.ts';
import { NaticoClient } from '../../src/client.ts';

export default class ListenerHandler extends NaticoHandler {
	modules: Collection<string, Listener>;

	directory: string;

	constructor(client: NaticoClient, { directory }: { directory: string }) {
		super(client, {
			directory,
		});
		this.directory = directory;
		this.modules = new Collection();
	}
	startAll() {
		for (const [, module] of this.modules) {
			this.client.events[module.event] = (...args) => {
				module.exec(...args);
			};
		}
	}
}
