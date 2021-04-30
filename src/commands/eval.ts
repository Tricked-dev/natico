import {
	Message,
	createSlashCommand,
	Interaction,
	executeSlashCommand,
} from '../../deps.ts';
export default {
	name: 'ping',
	description: 'What to ping next?',
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
