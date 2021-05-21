import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
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
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await axiod(`https://api.deno.land/modules`, {
			method: 'GET',
			params: {
				limit: 1,
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

		const result = pkg.data.data.results[0];

		message.channel?.send({
			embed: this.handler
				.embed()
				.setColor('#FF0000')
				.setDescription(result.description || 'No description provided')
				.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`),
		});
	}
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

		const embed = this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.description || 'No description provided')
			.setTitle(`🦕 ${result.name}`, `https://deno.land/x/${result.name}`);
		interaction.reply({ content: 'deno', embeds: [embed] });
	}
}
