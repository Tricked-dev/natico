import { NaticoModule } from '../base/baseModule.ts';
import TaskHandler from './taskHandler.ts';
export default class Task extends NaticoModule {
	handler: TaskHandler;
	delay: number;
	runOnStart: boolean;
	constructor(
		id: string,
		{ delay, runOnStart = false }: { delay: number; runOnStart?: boolean }
	) {
		super(id);
		this.delay = delay;
		this.runOnStart = runOnStart;
	}
	exec() {
		throw new Error(`${this.id} no implementated`);
	}
}
