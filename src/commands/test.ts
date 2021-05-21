import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class test extends Command {
	constructor() {
		super('test', {
			name: 'test',
			aliases: ['test'],
			examples: ['test'],
			description: 'test command used for official testing:tm:',
			enabled: true,
			slash: false,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
		if (!message.guild)
			return message.reply('NO YOU CANT CHANGE THE PREFIX IN DMS STOP TRYING');
		await message.reply(`Anyone knows a good deno database?`);
	}
	async execSlash(interaction: naticoInteraction) {
		await interaction.reply({ content: 'I need help finding a database' });
	}
}
