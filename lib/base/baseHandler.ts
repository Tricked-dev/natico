import { Collection, join } from '../../deps.ts';
import { NaticoModule } from './baseModule.ts';
import { NaticoClient } from '../../src/client.ts';

export abstract class NaticoHandler {
	client: NaticoClient;
	directory: string;
	modules: Collection<string, any>;
	constructor(client: NaticoClient, { directory }: { directory: string }) {
		this.client = client;
		this.directory = directory;
		this.modules = new Collection();
	}

	async load(thing: string) {
		let mod = await import('file://' + thing);
		mod = new mod.default();

		this.register(mod, thing);

		return mod;
	}
	remove(id: string) {
		const mod = this.modules.get(id.toString());
		if (!mod) return;
		this.deregister(mod);
		return mod;
	}
	reload(id: string) {
		const mod = this.modules.get(id.toString());
		if (!mod) return;
		this.deregister(mod);

		const filepath = mod.filepath;
		const newMod = this.load(filepath);
		return newMod;
	}
	deregister(mod: NaticoModule) {
		this.modules.delete(mod.id);
	}
	reloadAll() {
		for (const m of Array.from(this.modules.values())) {
			if (m.filepath) this.reload(m.id);
		}

		return this;
	}
	async loadALL(dirPath?: string) {
		dirPath = await Deno.realPath(dirPath || this.directory);
		const entries = Deno.readDir(dirPath);
		for await (const entry of entries) {
			if (entry.isFile) {
				await this.load(`${dirPath}/${entry.name}`);
				continue;
			}

			await this.loadALL(`${dirPath}/${entry.name}`);
		}
	}
	register(mod: any, filepath: string) {
		mod.filepath = filepath;
		mod.handler = this;
		mod.client = this.client;
		this.modules.set(mod.id, mod);
	}
}
