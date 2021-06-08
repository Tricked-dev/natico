import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../../lib/commands/Command.ts';
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
	async exec(message: NaticoMessage, { crate }: { crate: string }) {
		const pkg = await axiod(`https://crates.io/api/v1/crates`, {
			method: 'GET',
			params: {
				q: crate,
			},
			headers: {},
		});
		if (!pkg?.data?.crates[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a message',
			});

		const pages = this.pages(pkg.data.crates);
		if (message.isSlash) return message.reply(pages[0]);
		message.CreateEmbedsButtonsPagination(pages);
	}

	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#3B6837')
			.setDescription(result.description || 'No description provided')
			.addField(
				'❯ repository',
				`[${result?.repository?.replace('https://', '') || 'No repository'}](${
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
	}
	pages(results: any) {
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(this.makeEmbed(result).setFooter(`${i}/${results.length}`));
			i++;
		}
		return pages;
	}
}
