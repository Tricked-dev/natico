import Command from '../../lib/commands/Command.ts';
import { NaticoMessage } from '../../lib/NaticoMessage.ts';
export default class invite extends Command {
	constructor() {
		super('invite', {
			name: 'invite',
			aliases: ['invite', 'inv'],
			examples: ['invite'],
			description: 'Invite natico to your server',
			enabled: true,
			slash: true,
			category: 'dev',
			ownerOnly: false,
		});
	}
	async exec(message: NaticoMessage) {
		return await message.reply(
			`https://discord.com/oauth2/authorize?client_id=${this.client.id}&permissions=117824&scope=bot%20applications.commands`
		);
	}
}
