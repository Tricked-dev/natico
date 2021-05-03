import { naticoMessage } from '../../deps.ts';
export default {
	name: 'eval',
	aliases: ['eval', 'ev'],
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: false,
	category: 'dev',
	ownerOnly: true,
	async exec(message: naticoMessage) {
		try {
			const response = await eval(message.args);
			message.reply('```js\n' + response + '```');
		} catch (e) {
			message.reply(`${e}`);
		}
	},
};
