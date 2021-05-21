import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class npm extends Command {
	constructor() {
		super('npm', {
			name: 'npm',
			aliases: ['npm', 'node', 'nodejs', 'yarn', 'bloat'],
			examples: ['npm discord.js'],
			description: 'Search for a npm package',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await axiod(`https://api.npms.io/v2/search`, {
			method: 'GET',
			params: {
				q: args,
				size: '1',
			},
			headers: {},
		});
		if (!pkg?.data?.results[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a message',
			});
		const result = pkg.data.results[0].package;
		message.channel?.send({
			embed: this.handler
				.embed()
				.setColor('#FF0000')
				.setDescription(result.description || 'No description provided')
				.addField('❯ Author', result.author.name)
				.addField('❯ Created', result.date)
				.addField('❯ Scoped', `${result.scoped || 'No'}`)
				.addField('❯ Version', `${result.version || 'Unspecified'}`)
				.setFooter(
					` Tags: ${result.keywords[0] || 'none'}, ${
						result.keywords[1] || 'none'
					}, ${result.keywords[3] || 'none'}`
				)
				.setTitle(`<:npm:838350149725061169> ${result.name}`, result.links.npm),
		});
	}
	async execSlash(interaction: naticoInteraction) {
		const query = interaction?.data?.options[0]?.value;
		const pkg = await axiod(`https://api.npms.io/v2/search`, {
			method: 'GET',
			params: {
				q: query,
				size: '1',
			},
			headers: {},
		});
		if (!pkg?.data?.results[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Package not found',
			});
		const result = pkg.data.results[0].package;
		const embed = this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.addField('❯ Author', result.author.name)
			.addField('❯ Created', result.date)
			.addField('❯ Scoped', `${result.scoped || 'No'}`)
			.addField('❯ Version', `${result.version || 'Unspecified'}`)
			.setFooter(
				` Tags: ${result.keywords[0] || 'none'}, ${
					result.keywords[1] || 'none'
				}, ${result.keywords[3] || 'none'}`
			)
			.setTitle(`<:npm:838350149725061169> ${result.name}`, result.links.npm);
		interaction.reply({ content: 'npm', embeds: [embed] });
	}
}
