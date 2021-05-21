import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class repo extends Command {
	constructor() {
		super('repo', {
			name: 'repo',
			aliases: ['repo'],
			examples: ['repo skyblockdev/natico'],
			description: 'Gets info about a github repository',
			enabled: true,
			slash: false,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
		return await message.reply(
			'Currently no clue how to use github api to find a repo'
		);
		const user = await fetch(`https://api.github.com/users/${message.args}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${message.api}`,
			},
		}).then((response) => response.json());
	}
	async execSlash(interaction: naticoInteraction) {
		return await interaction.reply({
			content: 'Currently no clue how to find a repo by name',
		});
	}
}
