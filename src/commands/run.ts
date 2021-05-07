import { naticoMessage, token } from '../../deps.ts';
let decoder = new TextDecoder();
export default {
	name: 'run',
	aliases: ['run', 'exec', 'sh'],
	examples: ['eval message'],
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: false,
	required: true,
	category: 'dev',
	ownerOnly: true,
	async exec(message: naticoMessage) {
		try {
			let out = await Deno.run({
				cmd: message.args.split(' '),
				stdout: 'piped',
				stderr: 'piped',
			});
			const rawOutput = await out.output();
			return message.reply(
				'out\n```bash\n' + new TextDecoder().decode(rawOutput) || '\n' + '\n```'
			);
		} catch (e) {
			message.reply(`${e}`);
		}
	},
};
