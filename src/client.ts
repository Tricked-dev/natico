import CommandHandler from '../lib/commandHandler.ts';
import { join, settings } from '../deps.ts';

export const commandHandler: CommandHandler = new CommandHandler({
	dir: join(Deno.cwd(), 'src', 'commands'),
	cooldown: 5000, // 5 seconds
	guildonly: true,
	prefix: () => {
		return settings.prefix;
	},
	owners: settings.ids.owner,
});
