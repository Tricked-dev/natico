import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class apt extends Command {
	constructor() {
		super('apt', {
			name: 'apt',
			aliases: ['apt', 'ubuntu', 'apt', 'mint', 'debian'],
			examples: ['apt neofetch'],
			description:
				'Searches the apt repositorys for some juicy arch :thumbsup: packages',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await data(args);

		if (!pkg.data.entries[0])
			return message.reply({
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
		message.channel?.send({
			embed: this.handler
				.embed()
				.setColor('#0080ff')
				.addField('❯ Version', result.source_package_version || 'no version')
				.addField(
					'❯ Maintainer',
					result.package_maintainer_link.split('/').reverse()[0] ||
						'no Maintainer'
				)
				.setDescription(result.Description || 'No description provided')
				.setTitle(`${emoji} ${result.display_name}`, `${url}`),
		});
	}
	async execSlash(
		interaction: naticoInteraction,
		{ apt }: { apt: { value: string } }
	) {
		const pkg = await data(apt.value);

		if (!pkg.data.entries[0])
			return interaction.reply({
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

		interaction.edit({ content: 'python', embeds: [embed] });
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
