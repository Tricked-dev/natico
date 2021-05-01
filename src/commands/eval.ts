import { HandlerMessage } from '../../deps.ts';
export default {
	name: 'eval',
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: HandlerMessage) {
		const response = await eval(message.args);
		message.reply('```js\n' + response + '```');
	},
};
