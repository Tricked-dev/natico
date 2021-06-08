import { naticoMessage } from '../../../deps.ts';
import Listener from '../../../lib/listeners/Listener.ts';
export default class messageUpdate extends Listener {
	constructor() {
		super('messageUpdate', {
			emitter: 'client',
			event: 'messageUpdate',
		});
	}

	exec(message: naticoMessage) {
		this.client.commandHandler.handleCommand(message);
	}
}
