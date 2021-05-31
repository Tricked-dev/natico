import { NaticoMessage } from '../../lib/NaticoMessage.ts';
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
	async exec(message: NaticoMessage, { apt }: { apt: string }) {
		const pkg = await data(apt);

		if (!pkg.data.entries[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid APT package',
			});

		const pages = this.pagination(pkg.data.entries);
		if (this.slash) return message.reply(pages[0]);
		return message.CreateEmbedsButtonsPagination(pages);
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
