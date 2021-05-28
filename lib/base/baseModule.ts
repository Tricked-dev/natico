import { NaticoHandler } from './baseHandler.ts';
import { NaticoClient } from '../../src/client.ts';

export class NaticoModule {
	client!: NaticoClient;
	handler!: NaticoHandler;
	id: string;
	filepath!: string;
	constructor(id: string) {
		this.id = id;

		this.filepath;

		this.handler;
	}

	/**
	 * Reloads the module.
	 * @returns {AkairoModule}
	 */
	reload() {
		return this.handler.reload(this.id);
	}

	/**
	 * Removes the module.
	 * @returns {AkairoModule}
	 */
	remove() {
		return this.handler.remove(this.id);
	}

	/**
	 * Returns the ID.
	 * @returns {string}
	 */
	toString() {
		return this.id;
	}
}
