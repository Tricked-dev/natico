import { HandlerMessage, CommandInteraction } from '../../deps.ts';
export default {
	name: 'ping',
	description: 'What to ping next?',
	enabled: true,
	slash: true,
	category: 'general',
	exec(message: HandlerMessage) {
		message.reply('ping');
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'yes',
				description: 'no?',
				default: false,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		console.log(await interaction.reply({ content: 'Hello world' }));
	},
};
