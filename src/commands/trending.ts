import { HandlerMessage, CommandInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'ping',
	description: 'What to ping next?',
	enabled: true,
	slash: false,
	category: 'dev',
	async exec(message: HandlerMessage) {
		return await message.reply('Soon:tm:');
		/*
		var date = new Date(Date.now() - 604800000);

		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		console.log(`${year}-${month}-${day}`);

		const user = await axiod(
			`https://api.github.com/search/repositories?q=language:java`,
			{
				method: 'GET',
				params: {
					q: `created:>${year}-${month}-${day}`,
					sort: 'stars',
					order: 'desc',
				},
				headers: {
					Authorization: `token ${message.api}`,
					Accept: 'application/vnd.github.v3+json',
				},
			}
		).catch((e) => {
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
			console.log(e);
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
			console.log('!!!!!ERROR!!!!');
		}); //<:github:824673035499733022>

		console.log(user);

		return message.channel.send('HI');
		*/
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'yes',
				description: 'no?',
				default: false,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		await interaction.reply({
			content: 'Currently no clue how to find trending github pages',
		});
	},
};
