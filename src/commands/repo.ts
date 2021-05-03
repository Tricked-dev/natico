import { HandlerMessage, CommandInteraction } from '../../deps.ts';
export default {
	name: 'repo',
	aliases: ['repo'],
	description: 'Gets info about a github repository',
	enabled: true,
	slash: false,
	category: 'dev',
	async exec(message: HandlerMessage) {
		return await message.reply(
			'Currently no clue how to use github api to find a repo'
		);
		const user = await fetch(`https://api.github.com/users/${message.args}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${message.api}`,
			},
		}).then((response) => response.json());
		console.log(user);
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'repo',
				description: 'repository you want to get info about',
				default: false,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		return await interaction.reply({
			content: 'Currently no clue how to find a repo by name',
		});
	},
};
