import {
	HandlerMessage,
	LimitedCommand,
	CommandInteraction,
} from '../../deps.ts';
export default {
	name: 'help',
	description: 'Limited help command',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
		const embed = message
			.embed()
			.setTitle('Help')
			.setFooter('Use -help <command> to see more info');

		const commands = [...message.handler.commands.values()]
			.map((c: LimitedCommand) => `\`${c.name}\``)
			.join(' ');
		embed.addField('commands', commands, false);
		await message.channel?.send({ embed });
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'command',
				description: 'Command you want help for',
				default: false,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		if (interaction?.data?.options) {
			const found = interaction.handler.commands.find(
				(i) => i.name == interaction?.data?.options[0]?.value
			);
			if (found)
				return interaction.reply({
					content: 'Limited help',
					embeds: [
						interaction
							.embed()
							.setDescription(
								`**${found.name}**\n\n**Description**: ${found.description}`
							),
					],
				});
		}

		const embed = interaction
			.embed()
			.setTitle('Help')
			.setFooter('Use l!help <command> to see more info');

		const commands = [...interaction.handler.commands.values()]
			.map((c: LimitedCommand) => `\`${c.name}\``)
			.join(' ');
		embed.addField('commands', commands, false);
		await interaction.reply({
			embeds: [embed],
			content: 'Limited help',
		});
	},
};
