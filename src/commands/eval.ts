import { naticoMessage, token } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class evalC extends Command {
	constructor() {
		super('eval', {
			name: 'eval',
			aliases: ['eval', 'ev'],
			examples: ['eval message'],
			description: 'Eval some super javascript deno code',
			enabled: true,
			slash: false,
			required: true,
			category: 'dev',
			ownerOnly: true,
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		try {
			let response = Deno.inspect(await eval(args), {
				depth: 2,
			});
			response = response.replace(new RegExp(token, 'gi'), '[BOTTOKEN]');
			message.reply('```js\n' + response + '```');
		} catch (e) {
			message.reply(`${e}`);
		}
	}
}
