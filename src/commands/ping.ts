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
	exec(message: Message) {
		createSlashCommand({
			guildID: '748956745409232945',
			name: 'ping',
			description: 'what to ping next',
			options: [
				{
					type: 3,
					name: 'yes',
					description: 'some description',
				},
			],
		});
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
	execSlash(interaction: Interaction, reply) {
		interaction;
		reply({ content: 'Enabled the slash commands' });
	},
};
/*
{
  "name": "ping",
  "description": "what to ping next?",
  "options": [
    {
      "type": 3,
      "name": "yes?",
      "description": "some description",
      "default": false,
      "required": false
    }
  ]
}
*/
