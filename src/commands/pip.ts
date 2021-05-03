import { HandlerMessage, CommandInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'pip',
	aliases: ['pip', 'python'],
	description: 'Search for a pip package',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
		if (!message.args)
			return message.reply({
				content: '<:no:838017092216946748> Please provide a package',
			});
		const pkg = await axiod(`https://api.anaconda.org/search`, {
			method: 'GET',
			params: {
				limit: 1,
				name: message.args,
			},
		});

		if (!pkg.data[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid pip package',
			});

		const result = pkg.data[0];

		message.channel?.send({
			embed: message
				.embed()
				.setColor('#0080ff')
				.addField('❯ Version', result.versions[0])
				.setDescription(result.summary || 'No description provided')
				.setTitle(
					`🐍 ${result.name}`,
					`https://pypi.org/project/${result.name}`
				),
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
	async execSlash(interaction: CommandInteraction) {
		const query = interaction?.data?.options[0]?.value;
		interaction.reply({ content: 'searching' });
		const pkg = await axiod(`https://api.anaconda.org/search`, {
			method: 'GET',
			params: {
				limit: 1,
				name: query,
			},
		});

		if (!pkg.data[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid pip package',
			});

		const result = pkg.data[0];

		const embed = interaction
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result.versions[0])
			.setDescription(result.summary || 'No description provided')
			.setTitle(`🐍 ${result.name}`, `https://pypi.org/project/${result.name}`);

		interaction.edit({ content: 'python', embeds: [embed] });
	},
};
