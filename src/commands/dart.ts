import { naticoMessage, naticoInteraction, naticoRes } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'dart',
	aliases: ['dart', 'flutter', '🐦'],
	examples: ['dart http'],
	description: 'Search for a 🐦 flutter package',
	enabled: true,
	slash: true,
	required: true,
	category: 'general',
	async exec(message: naticoMessage) {
		try {
			const pkg = await axiod(`https://pub.dev/api/search`, {
				method: 'GET',
				params: {
					q: message.args,
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
			const embed = message
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
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid dart package',
			});
		}
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'package',
				description: 'The package you want to search for',
				required: true,
			},
		],
	},
	async execSlash(interaction: naticoInteraction) {
		try {
			const query = interaction?.data?.options[0]?.value;

			const pkg = await axiod(`https://pub.dev/api/search`, {
				method: 'GET',
				params: {
					q: query,
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
			const embed = interaction
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
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid dart package',
			});
		}
	},
};
