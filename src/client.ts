import CommandHandler from './commandHandler.ts';
import { join, Message, settings } from '../deps.ts';

export const commandHandler: CommandHandler = new CommandHandler({
	dir: join(Deno.cwd(), 'src', 'commands'),
	cooldown: 5000, // 5 seconds
	prefix: async (message: Message) => {
		return message.guild
			? ['l!', 'limited', 'l?', 'l-']
			: ['l!', 'limited', 'l?', 'l-'];

		//[('l!', 'limited', 'l?', 'l-')];
	},
	owners: settings.ids.owner,
});
