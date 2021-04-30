import CommandHandler from '../commandHandler.ts';
import {
	Message,
	createSlashCommand,
	Interaction,
	executeSlashCommand,
} from '../../deps.ts';
export default {
	name: 'enableslash',
	description: 'Slash commands i hear?',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: Message, args: string) {
		message.handler.commands.forEach((command) => {
			if (command.SlashData) {
				console.log(command.SlashData);
				createSlashCommand({command.SlashData})
				message.reply('Enabled Slash for ' + command.name);
			}
		});
	},
};
