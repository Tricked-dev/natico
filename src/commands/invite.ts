import { naticoMessage, botId } from '../../deps.ts';
import Command from '../../lib/commands/Command.ts';
export default class invite extends Command {
	constructor() {
		super('invite', {
			name: 'invite',
			aliases: ['invite', 'inv'],
			examples: ['invite'],
			description: 'Eval some super javascript deno code',
			enabled: true,
			slash: false,
			category: 'dev',
			ownerOnly: false,
		});
	}
	async exec(message: naticoMessage) {
		return await message.reply(
			`https://discord.com/oauth2/authorize?client_id=${botId}&permissions=117824&scope=bot%20applications.commands`
		);
	}
}
