import {
	naticoMessage,
	naticoInteraction,
	naticoOptions,
	CreateEmbedsButtonsPagination,
} from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/commands/Command.ts';
export default class apt extends Command {
	constructor() {
		super('apt', {
			name: 'apt',
			aliases: ['apt', 'ubuntu', 'apt', 'mint', 'debian'],
			examples: ['apt neofetch'],
			description: 'Searches the apt repositorys for apt packages',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'apt',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await data(args);

		if (!pkg.data.entries[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid APT package',
			});

		const pages = this.pagination(pkg.data.entries);
		//console.log(pages);
		CreateEmbedsButtonsPagination(
			message.id,
			message.channelId,
			message.authorId,
			pages
		);
	}
	pagination(result) {
		const pages = [];
		for (const page of result) {
			const user =
				result.distro_series_link?.split('/')?.reverse()[0] || 'no thing';
			const url = encodeURI(
				'https://packages.ubuntu.com/' + user + '/' + result.source_package_name
			);
			const emoji =
				Math.floor(Math.random() * 2) + 1 == 1
					? '<:ubuntu:844997080883134505>'
					: '<:debian:844997118901092443>';
			pages.push(
				this.handler
					.embed()
					.setColor('#0080ff')
					.addField('❯ Version', page.source_package_version || 'no version')
					.addField(
						'❯ Maintainer',
						page.package_maintainer_link.split('/').reverse()[0] ||
							'no Maintainer'
					)
					.setDescription(page.Description || 'No description provided')
					.setTitle(`${emoji} ${page.display_name}`, `${url}`)
			);
		}
		return pages;
	}
	async execSlash(interaction: naticoInteraction, { apt }: naticoOptions) {
		interaction.reply('Fetching');
		const pkg = await data(apt.value);

		if (!pkg.data.entries[0])
			return interaction.edit({
				content: '<:no:838017092216946748> Please provide a valid APT package',
			});

		const result = pkg.data.entries[0];

		const user =
			result.distro_series_link.split('/').reverse()[0] || 'no thing';
		const url =
			'https://packages.ubuntu.com/' + user + '/' + result.source_package_name;

		const emoji =
			Math.floor(Math.random() * 2) + 1 == 1
				? '<:ubuntu:844997080883134505>'
				: '<:debian:844997118901092443>';

		const embed = this.handler
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result.source_package_version || 'no version')
			.addField(
				'❯ Maintainer',
				result.package_maintainer_link.split('/').reverse()[0] ||
					'no Maintainer'
			)
			.setDescription(result.Description || 'No description provided')
			.setTitle(`${emoji} ${result.display_name}`, `${url}`);

		interaction.edit({ content: '', embeds: [embed] });
	}
}
function data(q: string) {
	return axiod(
		`https://api.launchpad.net/1.0/ubuntu/+archive/primary?ws.op=getPublishedSources`,
		{
			method: 'GET',
			params: {
				source_name: q,
			},
		}
	);
}
