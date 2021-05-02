import { HandlerMessage, CommandInteraction } from '../../deps.ts';
export default {
	name: 'test',
	description: 'test command used for official testing',
	enabled: true,
	slash: false,
	category: 'dev',
	async exec(message: HandlerMessage) {
		if (!message.guild)
			return message.reply('NO YOU CANT CHANGE THE PREFIX IN DMS STOP TRYING');
		await message.reply(`Anyone knows a good deno database?`);
	},
	SlashData: {},
	async execSlash(interaction: CommandInteraction) {
		await interaction.reply({ content: 'I need help finding a database' });
	},
};
