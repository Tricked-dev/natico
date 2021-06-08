import { naticoMessage } from '../../deps.ts';
import Listener from '../../lib/listeners/Listener.ts';
export default class messageCreate extends Listener {
	constructor() {
		super('messageCreate', {
			emitter: 'client',
			event: 'messageCreate',
		});
	}

	exec(message: naticoMessage) {
		this.client.commandHandler.handleCommand(message);
	}
}
