import { HandlerMessage, CommandInteraction } from '../../deps.ts';
export default {
	name: 'repo',
	description: 'Gets info about a github repository',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
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
		console.log(await interaction.reply({ content: 'Hello world' }));
	},
};
