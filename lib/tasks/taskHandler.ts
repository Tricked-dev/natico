import { NaticoHandler } from '../base/baseHandler.ts';
import { Collection } from '../../deps.ts';
import Task from './Task.ts';
import { NaticoClient } from '../../src/client.ts';

export default class TaskHandler extends NaticoHandler {
	modules: Collection<string, Task>;

	directory: string;

	constructor(client: NaticoClient, { directory }: { directory: string }) {
		super(client, {
			directory,
		});
		this.directory = directory;
		this.modules = new Collection();
	}
	register(task: Task, filepath: string) {
		if (task.runOnStart) task.exec();
		if (task.delay) {
			setInterval(() => {
				task.exec();
			}, Number(task.delay));
		}
		return super.register(task, filepath);
	}
}
