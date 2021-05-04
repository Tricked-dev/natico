import { naticoMessage, naticoInteraction, settings } from '../../deps.ts';
export default {
	name: 'prefix',
	aliases: ['prefix', 'pf'],
	examples: ['prefix'],
	description: 'Set the prefix of natico',
	enabled: true,
	slash: false,
	required: true,
	category: 'dev',
	async exec(message: naticoMessage) {
		return await message.reply(`My prefixes are ${settings.prefix.join(', ')}`);
		if (!message.guild)
			return message.reply('NO YOU CANT CHANGE THE PREFIX IN DMS STOP TRYING');
		await message.reply(`Anyone knows a good deno database?`);
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'newprefix',
				description: 'What should the new prefix be?',
				default: false,
			},
		],
	},
	async execSlash(interaction: naticoInteraction) {
		await interaction.reply({ content: 'I need help finding a database' });
	},
};
