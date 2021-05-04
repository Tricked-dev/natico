import { naticoMessage, naticoInteraction, settings } from '../../deps.ts';
export default {
	name: 'oss',
	aliases: ['oss'],
	examples: ['oss'],
	description: 'Sends to repository for the source code of the bot',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: naticoMessage) {
		await message.channel?.send({
			content:
				'Yes im opensource you can find my source code at ' + settings.repo,
		});
	},
	SlashData: {},
	async execSlash(interaction: naticoInteraction) {
		return await interaction.reply({
			content:
				'Yes im opensource you can find my source code at ' + settings.repo,
		});
	},
};
