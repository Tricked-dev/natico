import { naticoMessage, naticoInteraction, naticoOptions } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class crate extends Command {
	constructor() {
		super('crate', {
			name: 'crate',
			aliases: ['crate', 'cargo'],
			examples: ['crate serde'],
			description: 'Search for a crate package',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'crate',
					description: 'The crate you want to search for',
					required: true,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await axiod(`https://crates.io/api/v1/crates`, {
			method: 'GET',
			params: {
				q: args,
				max: '1',
			},
			headers: {},
		});
		if (!pkg?.data?.crates[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a message',
			});
		const result = pkg.data.crates[0];
		message.channel?.send({
			embed: this.handler
				.embed()
				.setColor('#3B6837')
				.setDescription(result.description || 'No description provided')
				.addField(
					'❯ repository',
					`[${result.repository.replace('https://', '')}](${
						result.repository
					})` || 'This crate doesnt seem to have a repository'
				)

				.addField('❯ Version', `${result.newest_version || 'Unspecified'}`)
				.addField('❯ Install', `\`cargo install ${result.id}\``)
				.addField(
					'❯ Downloads',
					`Total \`${result.downloads}\`\nRecent \`${result.recent_downloads}\``
				)
				.setTitle(
					`<:cargo:838484116768292905> ${result.name}`,
					`https://crates.io/crates/${result.id}`
				),
		});
	}
	async execSlash(interaction: naticoInteraction, { crate }: naticoOptions) {
		const pkg = await axiod(`https://crates.io/api/v1/crates`, {
			method: 'GET',
			params: {
				q: crate.value,
				max: '1',
			},
			headers: {},
		});
		if (!pkg?.data?.crates[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid crate',
			});
		const result = pkg.data.crates[0];

		const embed = this.handler
			.embed()
			.setColor('#3B6837')
			.setDescription(result.description || 'No description provided')
			.addField(
				'❯ repository',
				`[${result.repository.replace('https://', '')}](${
					result.repository
				})` || 'This crate doesnt seem to have a repository'
			)

			.addField('❯ Version', `${result.newest_version || 'Unspecified'}`)
			.addField('❯ Install', `\`cargo install ${result.id}\``)
			.addField(
				'❯ Downloads',
				`Total \`${result.downloads}\`\nRecent \`${result.recent_downloads}\``
			)
			.setTitle(
				`<:cargo:838484116768292905> ${result.name}`,
				`https://crates.io/crates/${result.id}`
			);
		interaction.reply({ content: 'crates', embeds: [embed] });
	}
}
