import { NaticoMessage } from '../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/commands/Command.ts';
export default class aur extends Command {
	constructor() {
		super('hackage', {
			name: 'hackage',
			aliases: ['hackage', 'haskell'],
			examples: ['aur neofetch'],
			description: 'Find aur packages for you',
			enabled: false,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'arch',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	async fetch(terms: string) {
		return await axiod(`https://hackage.haskell.org/packages/search`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
			params: {
				terms,
			},
		});
	}
	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result.Version || 'no version')
			.addField('❯ Maintainer', result.Maintainer || 'no Maintainer')
			.addField(
				'❯ Popularity',
				`${result.Popularity}, no clue but its on the api` || 'no Maintainer'
			)
			.setDescription(result.Description || 'No description provided')
			.setTitle(
				`<:arch:844981756246622209> ${result.Name}`,
				result.URL ?? 'https://duckduckgo.com'
			);
	}
	pages(results: any[]) {
		let i = 1;
		const pages = [];
		for (const result of results) {
			pages.push(this.makeEmbed(result).setFooter(`${i}/${results.length}`));
			i++;
		}
		return pages;
	}
	async exec(message: NaticoMessage, { arch }: { arch: string }) {
		const pkg = await this.fetch(arch);
		return console.log(pkg);
		if (!pkg || !pkg?.data?.results[0])
			return message.reply(
				'<:no:838017092216946748> Please provide a valid AUR package'
			);
		const pages = this.pages(pkg.data.results);
		if (message.isSlash) return message.reply(pages[0]);
		message.CreateEmbedsButtonsPagination(pages);
	}
}
