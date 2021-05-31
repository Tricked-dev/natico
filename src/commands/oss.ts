import { settings } from '../../deps.ts';
import { NaticoMessage } from '../../lib/NaticoMessage.ts';
import Command from '../../lib/commands/Command.ts';
export default class oss extends Command {
	constructor() {
		super('oss', {
			name: 'oss',
			aliases: ['oss'],
			examples: ['oss'],
			description: 'Sends to repository for the source code of the bot',
			enabled: true,
			slash: true,
			category: 'general',
		});
	}
	async exec(message: NaticoMessage) {
		await message.channel?.send({
			content:
				'Yes im opensource you can find my source code at ' + settings.repo,
		});
	}
}
