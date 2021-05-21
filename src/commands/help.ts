import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class help extends Command {
	constructor() {
		super('help', {
			name: 'help',
			aliases: ['ls', 'h'],
			examples: ['help', 'help help'],
			description: 'natico help command',
			enabled: true,
			slash: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'command',
					description: 'Command you want help for',
					default: false,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		if (args) {
			const found = this.handler.FindCommand(args);

			if (found) {
				const embed = this.handler
					.embed()
					.addField('Description »', found.description || 'No description')
					.addField('category »', found.category || 'No category');
				if (found.aliases) {
					embed.addField(
						'aliases »',
						found.aliases.map((x) => `\`${x}\``).join(' | ')
					);
				}

				if (found.examples) {
					embed.addField(
						'examples »',
						found.examples.map((x) => `\`${x}\``).join(' | ')
					);
				}

				return message?.channel?.send({
					embed,
				});
			}
		}
		const embed = this.handler
			.embed()
			.setTitle('Help')
			.setFooter('Use `l!help` <command> to see more info')
			.setDescription(
				'[support](https://discord.com/invite/mY8zTARu4g) - [github](https://skyblockdev.github.io/natico) - [terms](https://skyblockdev.github.io/naticosite/terms.html) - [privacy](https://skyblockdev.github.io/naticosite/privacy.html)'
			);
		const commands = [...this.handler.commands.values()]
			.map((c) => {
				if (c.category == 'dev') return;
				else return `\`${c.name}\``;
			})
			.join(' ');
		embed.addField('commands', commands, false);
		return await message.channel?.send({ embed });
	}
	async execSlash(
		interaction: naticoInteraction,
		{ command }: { command: { value: string } }
	) {
		if (command) {
			const found = this.handler.FindCommand(command.value);

			if (found) {
				const embed = this.handler
					.embed()
					.addField('Description »', found.description || 'No description')
					.addField('category »', found.category || 'No category');
				if (found.aliases) {
					embed.addField(
						'aliases »',
						found.aliases.map((x) => `\`${x}\``).join(' | ')
					);
				}

				if (found.examples) {
					embed.addField(
						'examples »',
						found.examples.map((x) => `\`${x}\``).join(' | ')
					);
				}

				return interaction.reply({
					content: 'natico help',
					embeds: [embed],
				});
			}
		}

		const embed = this.handler
			.embed()
			.setTitle('Help')
			.setFooter('Use `l!help` <command> to see more info')
			.setDescription(
				'[support](https://discord.com/invite/mY8zTARu4g) - [website](https://skyblockdev.github.io/natico) - [terms](https://malilbot.github.io/tos) - [privacy](https://malilbot.github.io/privacy)'
			);
		const commands = [...this.handler.commands.values()]
			.map((c) => {
				if (c.category == 'dev') return;
				else return `\`${c.name}\``;
			})
			.join(' ');
		embed.addField('commands', commands, false);
		return await interaction.reply({
			embeds: [embed],
			content: 'natico help',
		});
	}
}
