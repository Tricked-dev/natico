import {
	naticoMessage,
	naticoInteraction,
	CreateEmbedsButtonsPagination,
} from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/commands/Command.ts';
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
			options: [
				{
					type: 3,
					name: 'module',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	makeEmbed(result) {
		return this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.addField('❯ Author', result?.author?.name || 'No author')
			.addField('❯ Created', result.date)
			.addField('❯ Scoped', `${result.scoped || 'No'}`)
			.addField('❯ Version', `${result.version || 'Unspecified'}`)

			.setTitle(`<:npm:838350149725061169> ${result.name}`, result.links.npm);
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await axiod(`https://api.npms.io/v2/search`, {
			method: 'GET',
			params: {
				q: args,
				size: '50',
			},
			headers: {},
		});
		if (!pkg?.data?.results[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a message',
			});
		const pages = this.pages(pkg.data.results);
		CreateEmbedsButtonsPagination(
			message.id,
			message.channelId,
			message.authorId,
			pages
		);
	}
	pages(results) {
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(
				this.makeEmbed(result.package).setFooter(`${i}/${results.length}`)
			);
			i++;
		}
		return pages;
	}
	async execSlash(interaction: naticoInteraction, { module }: naticoOptions) {
		const pkg = await axiod(`https://api.npms.io/v2/search`, {
			method: 'GET',
			params: {
				q: module.value,
				size: '50',
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

			.setTitle(`<:npm:838350149725061169> ${result.name}`, result.links.npm);
		interaction.reply({ content: 'npm', embeds: [embed] });
	}
}
