import { HandlerMessage } from '../../deps.ts';
export default {
	name: 'enableslash',
	description: 'Slash commands i hear?',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: HandlerMessage /*, args: string*/) {
		if (!message.guild) return await message.handler.EnableSlash();
		else await message.handler.EnableSlash(message.guild.id);
	},
};
