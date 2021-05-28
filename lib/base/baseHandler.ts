import { Collection, join } from '../../deps.ts';
import { NaticoModule } from './baseModule.ts';
import { NaticoClient } from '../../src/client.ts';
export class NaticoHandler {
	client: NaticoClient;
	directory: string;
	modules: Collection<string, NaticoModule>;
	constructor(client: NaticoClient, { directory }: { directory: string }) {
		this.client = client;
		this.directory = directory;
		this.modules = new Collection();
	}

	async loadALL() {
		const filepaths = this.readdirRecursive(this.directory);
		for (let filepath of filepaths) {
			filepath = join(filepath);
			if (filepath) await this.load(filepath);
		}

		return this;
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
	readdirRecursive(directory: string) {
		const result = [];
		(function read(directory) {
			const files = Deno.readDirSync(directory);

			for (const file of files) {
				const filepath = join(directory, `${file.name}`);

				if (file.isDirectory) {
					read(filepath);
				} else {
					result.push(filepath);
				}
			}
		})(directory);

		return result;
	}
	register(mod: NaticoModule, filepath: string) {
		mod.filepath = filepath;
		mod.handler = this;
		mod.client = this.client;
		this.modules.set(mod.id, mod);
	}
}
