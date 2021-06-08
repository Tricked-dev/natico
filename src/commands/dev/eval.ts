import { token } from '../../../deps.ts';
import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import Command from '../../../lib/commands/Command.ts';
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
			options: [
				{
					name: 'code',
					type: 6,
					description: 'Code you want to eval',
					required: true,
				},
			],
		});
	}
	async exec(message: NaticoMessage, { code }: { code: string }) {
		try {
			let response = Deno.inspect(await eval(code), {
				depth: 2,
			});
			response = response.replace(new RegExp(token, 'gi'), '[BOTTOKEN]');
			response = response.replace(
				new RegExp(this.client.librariesio, 'gi'),
				'[TOKEN]'
			);
			message.reply('```js\n' + response.slice(0, 1900) + '```');
		} catch (e) {
			message.reply(`${e}`);
		}
	}
}
