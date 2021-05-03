import { HandlerMessage, CommandInteraction, settings } from '../../deps.ts';
export default {
	name: 'oss',
	description: 'Sends to repository for the source code of the bot',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
		await message.channel?.send({
			content:
				'Yes im opensource you can find my source code at ' + settings.repo,
		});
	},
	SlashData: {},
	async execSlash(interaction: CommandInteraction) {
		return await interaction.reply({
			content:
				'Yes im opensource you can find my source code at ' + settings.repo,
		});
	},
};
