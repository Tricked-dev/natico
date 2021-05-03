import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'deno',
	aliases: ['deno'],
	description: 'Search for a deno package',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: naticoMessage) {
		if (!message.args)
			return message.reply({
				content: '<:no:838017092216946748> Please provide a message',
			});
		const pkg = await axiod(`https://api.deno.land/modules/`, {
			method: 'GET',
			params: {
				limit: 1,
				query: message.args,
			},
		});

		if (!pkg.data.success)
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid deno package',
			});

		if (!pkg.data?.data?.results[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid deno package',
			});

		const result = pkg.data.data.results[0];

		message.channel?.send({
			embed: message
				.embed()
				.setColor('#FF0000')
				.setDescription(result.description || 'No description provided')
				.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`),
		});
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'package',
				description: 'The package you want to search for',
				required: true,
			},
		],
	},
	async execSlash(interaction: naticoInteraction) {
		const query = interaction?.data?.options[0]?.value;

		const pkg = await axiod(`https://api.deno.land/modules/`, {
			method: 'GET',
			params: {
				limit: 1,
				query: query,
			},
		});

		if (!pkg.data.success)
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid deno package',
			});
		if (!pkg.data?.data?.results[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid deno package',
			});

		const result = pkg.data.data.results[0];

		const embed = interaction
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`);
		interaction.reply({ content: 'deno', embeds: [embed] });
	},
};
