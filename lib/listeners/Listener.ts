import { NaticoModule } from '../base/baseModule.ts';
export default class NaticoLister extends NaticoModule {
	event: string;
	constructor(id: string, { event }: { event: string }) {
		super(id);
		this.event = event;
	}
	exec(...args) {
		throw new Error(`${this.id} no implementated`);
	}
}
