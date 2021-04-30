import CommandHandler from '../commandHandler.ts';
import {
	Message,
	createSlashCommand,
	Interaction,
	executeSlashCommand,
} from '../../deps.ts';
export default {
	name: 'ping',
	description: 'What to ping next?',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: Message, args: string) {},
};
