import { HandlerMessage, CommandInteraction } from '../../deps.ts';
export default {
	name: 'ping',
	aliases: ['ping'],
	description: 'Ping the bot',
	enabled: true,
	slash: true,
	category: 'general',
	exec(message: HandlerMessage) {
		message.reply('ping🏓');
	},
	SlashData: {},
	async execSlash(interaction: CommandInteraction) {
		await interaction.reply({ content: 'Pong🏓' });
	},
};
