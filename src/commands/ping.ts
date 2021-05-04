import { naticoMessage, naticoInteraction } from '../../deps.ts';
export default {
	name: 'ping',
	aliases: ['ping'],
	examples: ['ping'],
	description: 'Ping the bot',
	enabled: true,
	slash: true,
	category: 'general',
	exec(message: naticoMessage) {
		message.reply('ping🏓');
	},
	SlashData: {},
	async execSlash(interaction: naticoInteraction) {
		await interaction.reply({ content: 'Pong🏓' });
	},
};
