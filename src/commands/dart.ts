import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class dart extends Command {
	constructor() {
		super('dart', {
			name: 'dart',
			aliases: ['dart', 'flutter', '🐦'],
			examples: ['dart http'],
			description: 'Search for a 🐦 flutter package',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'dart',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		try {
			const pkg = await axiod(`https://pub.dev/api/search`, {
				method: 'GET',
				params: {
					q: args,
				},
			});

			if (!pkg.data.packages[0])
				return message.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			if (pkg.status == 404)
				return message.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			const data = await axiod(
				`https://pub.dev/api/packages/${pkg.data.packages[0].package}`
			);
			if (data.status == 404)
				return message.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			const result = data.data;
			const embed = this.handler
				.embed()
				.setColor('#FF0000')
				.setDescription(
					result.latest.pubspec.description || 'No description provided'
				)
				.addField(
					'❯ Homepage',
					result.latest.pubspec.homepage ||
						'This package doesnt have a homepage'
				)
				.addField('❯ Version', result.latest.pubspec.version) //dependencies

				.setTitle(
					`🐦 ${result.name}`,
					`https://pub.dev/packages/${result.name}`
				);
			let depsMessage = '';
			const deps = result.latest.pubspec.dependencies;

			const keys = Object.entries(deps);

			keys.forEach((key) => {
				depsMessage += `${key[0]} ${key[1]}\n`;
			});

			embed.addField(
				'❯ dependencies',
				depsMessage ?? 'this package doesnt have any dependencies'
			);

			message.channel?.send({
				embed,
			});
		} catch (e) {
			e;
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid dart package',
			});
		}
	}
	async execSlash(
		interaction: naticoInteraction,
		{ dart }: { dart: { value: string } }
	) {
		try {
			const pkg = await axiod(`https://pub.dev/api/search`, {
				method: 'GET',
				params: {
					q: dart.value,
				},
			});

			if (!pkg.data.packages[0])
				return interaction.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			if (pkg.data.status == 404)
				return interaction.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			const data = await axiod(
				`https://pub.dev/api/packages/${pkg.data.packages[0].package}`,
				{
					method: 'GET',
				}
			);
			if (data.data.status == 404)
				return interaction.reply({
					content:
						'<:no:838017092216946748> Please provide a valid dart package',
				});
			const result = data.data;
			const embed = this.handler
				.embed()
				.setColor('#FF0000')
				.setDescription(
					result.latest.pubspec.description || 'No description provided'
				)
				.addField(
					'❯ Homepage',
					result.latest.pubspec.homepage ||
						'This package doesnt have a homepage'
				)
				.addField('❯ Version', result.latest.pubspec.version) //dependencies

				.setTitle(
					`🦕 ${result.name}`,
					`https://pub.dev/packages${result.name}`
				);
			let depsMessage = '';
			const deps = result.latest.pubspec.dependencies;

			const keys = Object.entries(deps);

			keys.forEach((key) => {
				depsMessage += `${key[0]} ${key[1]}\n`;
			});

			embed.addField(
				'❯ dependencies',
				depsMessage || 'this package doesnt have any dependencies'
			);

			interaction.reply({ content: '', embeds: [embed] });
		} catch (e) {
			e;
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid dart package',
			});
		}
	}
}
