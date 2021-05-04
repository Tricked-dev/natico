import { naticoMessage, naticoCommand, naticoInteraction } from '../../deps.ts';
export default {
	name: 'help',
	aliases: ['ls', 'h'],
	examples: ['help', 'help help'],
	description: 'natico help command',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: naticoMessage) {
		if (message.args) {
			const found = message.handler.FindCommand(message.args);

			if (found)
				return message?.channel?.send({
					embed: message
						.embed()
						.addField('Description »', found.description || 'No description')
						.addField(
							'aliases »',
							found.aliases.map((x) => `\`${x}\``).join(' | ')
						)

						.addField(
							'examples »',
							found.examples.map((x) => `\`${x}\``).join(' | ')
						)
						.addField('category »', found.category || 'No category'),
				});
		}
		const embed = message
			.embed()
			.setTitle('Help')
			.setFooter('Use `l!help` <command> to see more info')
			.setDescription(
				'[support](https://discord.com/invite/mY8zTARu4g) - [github](https://skyblockdev.github.io/natico) - [terms](https://skyblockdev.github.io/naticosite/terms.html) - [privacy](https://skyblockdev.github.io/naticosite/privacy.html)'
			);
		const commands = [...message.handler.commands.values()]
			.map((c: naticoCommand) => {
				if (c.category == 'dev') return;
				else return `\`${c.name}\``;
			})
			.join(' ');
		embed.addField('commands', commands, false);
		return await message.channel?.send({ embed });
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
	async execSlash(interaction: naticoInteraction) {
		if (interaction?.data?.options) {
			const found = interaction.handler.FindCommand(
				interaction?.data?.options[0].value
			);

			if (found)
				return interaction.reply({
					content: 'natico help',
					embeds: [
						interaction
							.embed()
							.addField('Description »', found.description || 'No description')
							.addField(
								'aliases »',
								found.aliases.map((x) => `\`${x}\``).join(' | ')
							)

							.addField(
								'examples »',
								found.examples.map((x) => `\`${x}\``).join(' | ')
							)
							.addField('category »', found.category || 'No category'),
					],
				});
		}

		const embed = interaction
			.embed()
			.setTitle('Help')
			.setFooter('Use `l!help` <command> to see more info')
			.setDescription(
				'[support](https://discord.com/invite/mY8zTARu4g) - [website](https://skyblockdev.github.io/natico) - [terms](https://malilbot.github.io/tos) - [privacy](https://malilbot.github.io/privacy)'
			);
		const commands = [...interaction.handler.commands.values()]
			.map((c: naticoCommand) => {
				if (c.category == 'dev') return;
				else return `\`${c.name}\``;
			})
			.join(' ');
		embed.addField('commands', commands, false);
		return await interaction.reply({
			embeds: [embed],
			content: 'natico help',
		});
	},
};
