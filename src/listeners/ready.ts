import {
	yellow,
	editBotStatus,
	DiscordActivityTypes,
	white,
} from '../../deps.ts';
import Listener from '../../lib/listeners/Listener.ts';
export default class invite extends Listener {
	constructor() {
		super('ready', {
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
		console.log(white('[i]'), yellow('Bot succesfully started'));
	}
}
