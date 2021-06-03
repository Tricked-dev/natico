import { naticoMessage, naticoInteraction } from '../../deps.ts';
//import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/commands/Command.ts';
export default class trending extends Command {
	constructor() {
		super('trending', {
			name: 'trending',
			aliases: ['trending'],
			examples: ['trending'],
			description: 'What to ping next?',
			enabled: false,
			slash: false,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
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
	}
}
