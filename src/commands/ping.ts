import { Message, Interaction, Reply } from '../../deps.ts';
export default {
	name: 'ping',
	description: 'What to ping next?',
	enabled: true,
	slash: true,
	category: 'general',
	exec(message: Message) {
		message.reply('ping');
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'yes',
				description: 'no?',
				default: false,
			},
		],
	},
	execSlash(interaction: Interaction, reply: Reply) {
		reply({ content: 'Hello world' });
	},
};
