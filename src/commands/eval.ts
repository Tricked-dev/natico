import {
	Message,
	createSlashCommand,
	Interaction,
	executeSlashCommand,
} from '../../deps.ts';
export default {
	name: 'eval',
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: true,
	category: 'general',
	ownerOnly: true,
	async exec(message: Message, args: string) {
		//console.log(args);
		const response = await eval(args);
		//console.log(response);
		message.reply('```js\n' + response + '```');
	},
};
