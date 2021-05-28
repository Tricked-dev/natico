import {
	naticoMessage,
	naticoInteraction,
	naticoOptions,
	execOptions,
	CreateEmbedsButtonsPagination,
} from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/commands/Command.ts';
export default class deno extends Command {
	constructor() {
		super('deno', {
			name: 'deno',
			aliases: ['deno'],
			examples: ['deno discorddeno'],
			description: 'Search for a deno package',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'deno',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`);
	}
	pages(results) {
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(this.makeEmbed(result).setFooter(`${i}/${results.length}`));
			i++;
		}
		return pages;
	}
	async exec(message: naticoMessage, { args }: execOptions) {
		const pkg = await axiod(`https://api.deno.land/modules`, {
			method: 'GET',
			params: {
				limit: 50,
				query: args.replace('discordeno', 'discorddeno'), // its discorddeno not discord-eno
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

		const pages = this.pages(pkg.data.data.results);
		CreateEmbedsButtonsPagination(
			message.id,
			message.channelId,
			message.authorId,
			pages
		);
	}
	async execSlash(interaction: naticoInteraction, { deno }: naticoOptions) {
		const pkg = await axiod(`https://api.deno.land/modules/`, {
			method: 'GET',
			params: {
				limit: 50,
				query: deno.value,
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

		const embed = this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`);
		interaction.reply({ content: 'deno', embeds: [embed] });
	}
}
