import { naticoMessage, naticoInteraction, settings } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class prefix extends Command {
	constructor() {
		super('prefix', {
			name: 'prefix',
			aliases: ['prefix', 'pf'],
			examples: ['prefix'],
			description: 'Set the prefix of natico',
			enabled: true,
			slash: false,
			required: true,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
		return await message.reply(`My prefixes are ${settings.prefix.join(', ')}`);
		if (!message.guild)
			return message.reply('NO YOU CANT CHANGE THE PREFIX IN DMS STOP TRYING');
		await message.reply(`Anyone knows a good deno database?`);
	}
	async execSlash(interaction: naticoInteraction) {
		await interaction.reply({ content: 'I need help finding a database' });
	}
}
