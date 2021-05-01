import { Message } from '../../deps.ts';
export default {
	name: 'eval',
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: Message, args: string) {
		const response = await eval(args);
		message.reply('```js\n' + response + '```');
	},
};
