import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../../lib/commands/Command.ts';
export default class golang extends Command {
	constructor() {
		super('golang', {
			name: 'golang',
			aliases: ['go', 'golang'],
			examples: ['go http'],
			description: 'Search for a golang module',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'module',
					description: 'The module you want to search for',
					required: true,
				},
			],
		});
	}
	async fetch(q: string): Promise<Result[]> {
		const res = await axiod(`https://api.godoc.org/search`, {
			method: 'GET',
			params: {
				q,
			},
		});
		const filtered = res.data.results.filter((e: Result) => !e.fork);
		return filtered as Result[];
	}
	pages(results) {
		results = results.slice(0, 20);
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(this.makeEmbed(result).setFooter(`${i}/${results.length}`));
			i++;
		}
		return pages;
	}
	makeEmbed(result: Result) {
		return this.handler
			.embed()
			.setColor('#FF0000')
			.addField('❯ Stars', `${result.stars || 0}`)
			.addField('❯ Imports', `${result.import_count || 0}`)
			.addField('❯ synopsis', `${result.synopsis || '..'}`)
			.addField('❯ score', `${result.score?.toFixed(3) || '..'}`)
			.setTitle(
				`🦫 ${result.name || 'nameless'}`,
				`https://pkg.go.dev/${result.path}`
			);
	}
	async exec(message: NaticoMessage, { module }: { module: string }) {
		const pkg = await this.fetch(module);

		if (!pkg[0])
			return message.reply({
				content:
					'<:no:838017092216946748> Please provide a valid golang package',
			});

		const pages = this.pages(pkg);
		if (message.isSlash) return message.reply(pages[0]);
		return message.CreateEmbedsButtonsPagination(pages);
	}
}
export interface GoDoc {
	results: Result[];
}

export interface Result {
	name: string;
	path: string;
	import_count: number;
	synopsis: string;
	stars?: number;
	score: number;
	fork?: boolean;
}
