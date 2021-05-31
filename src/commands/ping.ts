import { NaticoMessage } from '../../lib/NaticoMessage.ts';
import Command from '../../lib/commands/Command.ts';
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
	exec(message: NaticoMessage) {
		message.reply('ping🏓');
	}
}
