import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class ping extends Command {
	constructor() {
		super('ping', {
			name: 'ping',
			aliases: ['ping'],
			examples: ['ping'],
			description: 'Ping the bot',
			enabled: true,
			slash: true,
			category: 'general',
		});
	}
	exec(message: naticoMessage) {
		message.reply('ping🏓');
	}
	async execSlash(interaction: naticoInteraction) {
		await interaction.reply({ content: 'Pong🏓' });
	}
}
