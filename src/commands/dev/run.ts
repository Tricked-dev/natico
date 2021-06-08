import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import Command from '../../../lib/commands/Command.ts';
export default class run extends Command {
	constructor() {
		super('run', {
			name: 'run',
			aliases: ['run', 'exec', 'sh'],
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
			const out = Deno.run({
				cmd: code.split(' '),
				stdout: 'piped',
				stderr: 'piped',
			});
			const rawOutput = await out.output();
			return message.reply(
				'out\n```bash\n' + new TextDecoder().decode(rawOutput) + '\n```'
			);
		} catch (e) {
			message.reply(`${e}`);
		}
	}
}
