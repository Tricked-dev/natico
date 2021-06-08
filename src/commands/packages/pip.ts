import { NaticoMessage } from '../../../lib/NaticoMessage.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../../lib/commands/Command.ts';
export default class pip extends Command {
	constructor() {
		super('pip', {
			name: 'pip',
			aliases: ['pip', 'python'],
			examples: ['pip discord.py'],
			description: 'Search for a pip package',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'pip',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	makeEmbed(result) {
		return this.handler
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result?.versions[0] || 'No version')
			.setDescription(result?.summary || 'No description provided')
			.setTitle(
				`🐍 ${result?.name}`,
				`https://pypi.org/project/${result.name}`
			);
	}
	pages(results) {
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(this.makeEmbed(result).setFooter(`${i}/${results.length}`));
			i++;
		}
		return pages;
	}
	async exec(message: NaticoMessage, { pip }: { pip: string }) {
		const pkg = await axiod(`https://api.anaconda.org/search`, {
			method: 'GET',
			params: {
				limit: 1,
				name: pip,
			},
		});

		if (!pkg.data[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid pip package',
			});
		const pages = this.pages(pkg.data);
		if (message.isSlash) return message.reply(pages[0]);
		return message.CreateEmbedsButtonsPagination(pages);
	}
}
