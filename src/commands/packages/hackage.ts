import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../../lib/commands/Command.ts';
export default class hackage extends Command {
	constructor() {
		super('hackage', {
			name: 'hackage',
			aliases: ['hackage', 'haskell'],
			examples: ['hackage http'],
			description: 'Search for haskell packages to use in your projects',
			enabled: false,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'hackage',
					description: 'The hackage you want to search for',
					required: true,
				},
			],
		});
	}
	async fetch(terms: string) {
		const apiKey = this.client.librariesio;
		return await axiod(`https://libraries.io/api/search`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
			params: {
				languages: 'haskell',
				q: terms,
				api_key: apiKey,
			},
		});
	}
	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#e07f18')
			.addField('❯ Version', result.latest_release_number || 'no Version')
			.addField('❯ Homepage', result.homepage || 'no Homepage')
			.addField('❯ Stars', `${result.stars}` || 'no Stars')
			.addField('❯ Forks', `${result.forks}` || 'no Forks')
			.addField('❯ license', `${result.licenses}` || 'no licenses')
			.setDescription(result.description || 'No description provided')
			.setTitle(
				`<:haskell:850367977412755460> ${result.name}`,
				result.package_manager_url ?? 'https://duckduckgo.com'
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
	async exec(message: NaticoMessage, { hackage }: { hackage: string }) {
		const pkg = await this.fetch(hackage);
		if (!pkg || !pkg?.data)
			return message.reply(
				'<:no:838017092216946748> Please provide a valid Hackage package'
			);
		const pages = this.pages(pkg.data);
		if (message.isSlash) return message.reply(pages[0]);
		message.CreateEmbedsButtonsPagination(pages);
	}
}
