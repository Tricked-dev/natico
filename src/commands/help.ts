import { NaticoMessage } from '../../lib/NaticoMessage.ts';
import { ApplicationCommandOption, DiscordenoMessage } from '../../deps.ts';
import Command from '../../lib/commands/Command.ts';
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
				},
			],
		});
	}
	async exec(
		message: NaticoMessage,
		{ command }: { command: string }
	): Promise<DiscordenoMessage | undefined | void> {
		if (command) {
			const found = this.handler.findCommand(command);

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
				if (found.options) {
					embed.addField(
						'args »',
						(found.options as ApplicationCommandOption[])
							.map((x) => {
								if (x.name && x.description)
									return `**${x.name}**: ${x.description}`;
								else return null;
							})
							.join('\n')
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
		const commands = [...this.handler.modules.values()]
			.map((c) => {
				if (c.category == 'dev') return;
				if (!c.enabled) return;
				else return `\`${c.name}\``;
			})
			.join(' ');
		embed.addField('commands', commands, false);
		return await message.reply({ embed });
	}
}
