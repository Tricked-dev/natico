import { HandlerMessage } from '../../deps.ts';
export default {
	name: 'enableslash',
	aliases: ['enableslash', 'enslash'],
	description: 'Slash commands i hear?',
	enabled: true,
	slash: true,
	category: 'dev',
	ownerOnly: true,
	async exec(message: HandlerMessage) {
		if (message.args == 'global') return await message.handler.EnableSlash();
		else return await message.handler.EnableSlash(message.guild?.id);
	},
};
