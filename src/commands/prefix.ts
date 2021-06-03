import { naticoMessage, naticoInteraction, settings } from '../../deps.ts';
import Command from '../../lib/commands/Command.ts';
export default class prefix extends Command {
	constructor() {
		super('prefix', {
			name: 'prefix',
			aliases: ['prefix', 'pf'],
			examples: ['prefix'],
			description: 'Set the prefix of natico',
			enabled: true,
			slash: false,
			required: false,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
		// const option = args.split(' ');
		// if (!option || !args) {
		// 	let prefixes = await this.db.guilds.getPrefix(message.guild!.id);
		// 	if (!prefixes) prefixes = settings.prefix.join(', ');
		// 	if (Array.isArray(prefixes)) {
		// 		prefixes = prefixes.join(', ');
		// 	}
		return await message.reply(`My prefixes are ${settings.prefix.join(', ')}`);
		//}
		// if (
		// 	hasGuildPermissions(message.guildId, message.authorId, ['MANAGE_GUILD'])
		// ) {
		// 	if (option[0] == 'set') {
		// 		await this.db.guilds.setPrefix(message.guild!.id, option[1]);
		// 		return message.reply(`Set my prefix to ${option[1]}`);
		// 	} else if (option[0] == 'add') {
		// 		await this.db.guilds.addPrefix(message.guild!.id, option[1]);
		// 		return message.reply(`added prefix ${option[1]}`);
		// 	} else if (option[0] == 'delete' || option[0] == 'remove') {
		// 		await this.db.guilds.delPrefix(message.guild!.id, option[1]);
		// 		return message.reply(`removed prefix ${option[1]}`);
		// 	} else {
		// 		await this.db.guilds.setPrefix(message.guild!.id, option[0]);
		// 		return message.reply(`Set my prefix to ${option[0]}`);
		// 	}
		// } else {
		// 	message.reply(
		// 		'You need the permissions manage guild to use this command'
		// 	);
		// }

		//! is a fancy way
	}
}
