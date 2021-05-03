import {
	startBot,
	Message,
	token,
	Interaction,
	editBotsStatus,
	naticoInteraction,
	naticoMessage,
	yellow,
} from '../deps.ts';
import { commandHandler } from './client.ts';
console.log(yellow('starting'));
await commandHandler.loadALL();
//denod ocs stable https://doc.deno.land/builtin/stable
startBot({
	token,
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	eventHandlers: {
		interactionCreate(interaction: Interaction) {
			commandHandler.runSlash(interaction as naticoInteraction);
		},
		async ready() {
			await commandHandler.EnableSlash('748956745409232945');
			editBotsStatus('online', 'with deno modules');
			console.log(yellow('Bot succesfully started'));
		},
		messageCreate(message: Message) {
			commandHandler.handleCommand(message as naticoMessage);
		},
		messageUpdate(message: Message) {
			commandHandler.handleCommand(message as naticoMessage);
		},
	},
});
