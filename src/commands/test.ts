import { NaticoMessage } from '../../lib/NaticoMessage.ts';
import Command from '../../lib/commands/Command.ts';
export default class test extends Command {
	constructor() {
		super('test', {
			name: 'test',
			aliases: ['test'],
			examples: ['test'],
			description: 'test command used for official testing:tm:',
			enabled: false,
			slash: false,
			category: 'dev',
		});
	}
	async exec(message: NaticoMessage) {
		if (!message.guild)
			return message.reply('NO YOU CANT CHANGE THE PREFIX IN DMS STOP TRYING');
		await message.reply(`Anyone knows a good deno database?`);
	}
}
