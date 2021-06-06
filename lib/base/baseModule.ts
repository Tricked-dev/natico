import { NaticoClient } from '../../src/client.ts';
export class NaticoModule {
	client!: NaticoClient;
	handler!: any;
	id: string;
	filepath!: string;
	constructor(id: string) {
		this.id = id;

		this.filepath;

		this.handler;
	}

	reload() {
		return this.handler.reload(this.id);
	}

	remove(): NaticoModule | undefined {
		return this.handler.remove(this.id);
	}

	toString() {
		return this.id;
	}
}
