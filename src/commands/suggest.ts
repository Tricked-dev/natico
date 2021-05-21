import {
	naticoMessage,
	naticoInteraction,
	cache,
	settings,
} from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class suggest extends Command {
	constructor() {
		super('suggest', {
			name: 'suggest',
			aliases: ['suggest'],
			examples: ['suggest add maven repositorys'],
			description: 'Search for a npm package',
			enabled: true,
			slash: false,
			required: true,
			category: 'dev',
		});
	}
	async exec(message: naticoMessage) {
		// const channel = cache.channels.get(settings.channels.suggestions);
		// if (channel) channel.send(message.args);
		// return await message.channel?.send('Suggestion has been left ');
	}
	async execSlash(interaction: naticoInteraction) {
		// const suggestion = interaction?.data?.options[0]?.value;
		// const channel = cache.channels.get(settings.channels.suggestions);
		// if (channel) channel.send(suggestion);
		// return await interaction.reply({ content: 'Suggestion has been left' });
	}
}
