import { HandlerMessage } from '../../deps.ts';
export default {
	name: 'enableslash',
	description: 'Slash commands i hear?',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: HandlerMessage /*, args: string*/) {
		console.log(await message.handler.EnableSlash(message.guild));
	},
};
