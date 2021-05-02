import {
	HandlerMessage,
	CommandInteraction,
	cache,
	settings,
} from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'suggest',
	description: 'Search for a npm package',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
		if (!message.args)
			return message.reply({
				content:
					'<:no:838017092216946748> Please provide a suggestion for limited',
			});
		const channel = cache.channels.get(settings.channels.suggestions);
		if (channel) channel.send(message.args);
		return await message.channel.send('Suggestion has been left ');
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'suggestion',
				description: 'What you want to suggest to add to the bot',
				required: true,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		const suggestion = interaction?.data?.options[0]?.value;
		const channel = cache.channels.get(settings.channels.suggestions);
		if (channel) channel.send(suggestion);
		return await interaction.reply({ content: 'Suggestion has been left' });
	},
};
