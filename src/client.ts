import CommandHandler from './commandHandler.ts';
import { join, Message, settings } from '../deps.ts';
export const commandHandler: CommandHandler = new CommandHandler({
	dir: join(Deno.cwd(), 'src', 'commands'),
	prefix: (message: Message) => ['l!', 'limited', 'l?', 'l-'],
	owners: settings.ids.owner,
});
