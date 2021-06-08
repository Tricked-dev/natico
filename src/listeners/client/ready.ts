import {
	yellow,
	editBotStatus,
	DiscordActivityTypes,
	white,
	botId,
} from '../../../deps.ts';
import Listener from '../../../lib/listeners/Listener.ts';
export default class invite extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready',
		});
	}

	exec() {
		// if (settings.dev == true) {
		// 	await commandHandler.enableSlash(settings.testserver);
		// }
		editBotStatus({
			activities: [
				{
					name: 'deno packages',
					type: DiscordActivityTypes.Competing,
					createdAt: Date.now(),
				},
			],
			status: 'online',
		});
		this.client.id = botId;
		console.log(white('[i]'), yellow('Bot succesfully started'));
	}
}
