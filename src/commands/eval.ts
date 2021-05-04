import { naticoMessage, token } from '../../deps.ts';
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
			let response = Deno.inspect(await eval(message.args), {
				depth: 2,
			});
			response = response
				.replace(new RegExp(message.api, 'gi'), '[GITHUBTOKEN]')
				.replace(new RegExp(token, 'gi'), '[BOTTOKEN]');
			message.reply('```js\n' + response + '```');
		} catch (e) {
			message.reply(`${e}`);
		}
	},
};
