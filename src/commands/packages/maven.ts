import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../../lib/commands/Command.ts';
export default class maven extends Command {
	constructor() {
		super('maven', {
			name: 'maven',
			aliases: ['maven', 'java', 'kotlin'],
			examples: ['maven http'],
			description: 'Search for maven packages to use in your projects',
			enabled: false,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'maven',
					description: 'The maven you want to search for',
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
				languages: 'java',
				q: terms,
				api_key: apiKey,
			},
		});
	}
	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#3c7abd')
			.addField('❯ Version', result.latest_release_number || 'no Version')
			.addField('❯ Homepage', result.homepage || 'no Homepage')
			.addField('❯ Stars', `${result.stars}` || 'no Stars')
			.addField('❯ Forks', `${result.forks}` || 'no Forks')
			.addField('❯ license', `${result.licenses}` || 'no licenses')
			.setDescription(result.description || 'No description provided')
			.setTitle(
				`<:java:850370699440947240> ${result.name}`,
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
	async exec(message: NaticoMessage, { maven }: { maven: string }) {
		const pkg = await this.fetch(maven);
		if (!pkg || !pkg?.data)
			return message.reply(
				'<:no:838017092216946748> Please provide a valid maven package'
			);
		const pages = this.pages(pkg.data);
		if (message.isSlash) return message.reply(pages[0]);
		message.CreateEmbedsButtonsPagination(pages);
	}
}
