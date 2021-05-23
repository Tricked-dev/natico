import {
	naticoMessage,
	naticoInteraction,
	naticoOptions,
	execOptions,
} from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
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
				limit: 1,
				q,
			},
		});
		const filtered = res.data.results.filter((e: Result) => !e.fork);
		return filtered as Result[];
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
	async exec(message: naticoMessage, { args }: execOptions) {
		const pkg = await this.fetch(args);

		if (!pkg[0])
			return message.reply({
				content:
					'<:no:838017092216946748> Please provide a valid golang package',
			});

		const embed = this.makeEmbed(pkg[0]);
		message.channel?.send({
			embed,
		});
	}
	async execSlash(interaction: naticoInteraction, { module }: naticoOptions) {
		const pkg = await this.fetch(module.value);
		if (!pkg[0])
			return interaction.reply({
				content:
					'<:no:838017092216946748> Please provide a valid golang package',
			});

		const embed = this.makeEmbed(pkg[0]);
		interaction.reply({ content: '', embeds: [embed] });
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
