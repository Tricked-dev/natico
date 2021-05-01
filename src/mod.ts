import { startBot, Message, token, Interaction } from '../deps.ts';
import { CommandInteraction } from './interfaces.ts';
import { commandHandler } from './client.ts';
await commandHandler.loadALL();
startBot({
	token,
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	eventHandlers: {
		interactionCreate(interaction: Interaction) {
			commandHandler.runSlash(interaction as CommandInteraction);
		},
		ready() {
			console.log('Successfully connected to gateway');
		},
		messageCreate(message: Message) {
			commandHandler.handleCommand(message);
		},
	},
});
