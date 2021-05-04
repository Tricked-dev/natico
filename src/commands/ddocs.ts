import { naticoMessage, naticoInteraction } from '../../deps.ts';
import { denodoc } from '../../docs/discorddeno.ts';
export default {
	name: 'ddoc',
	aliases: ['ddoc', 'discorddeno', 'discordeno', 'ddocs'],
	description: 'Searches the discord deno docs', //docs were obtained via https://doc.deno.land/api/docs?entrypoint=https://deno.land/x/discordeno/mod.ts
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: naticoMessage) {
		if (!message.args)
			return message.reply({
				content: '<:no:838017092216946748> Please provide a search',
			});

		const result = denodoc.find(
			(p) =>
				p.name.toLowerCase() == message.args.toLowerCase() &&
				p.kind !== 'import'
		);
		if (!result) return await message.reply('Docs not found');
		const srcUrl = `${result.location.filename}#L${result.location.line}`;
		message.channel?.send({
			embed: message
				.embed()
				.setColor('#FF0000')
				.setDescription(
					result.jsDoc || `This ${result.kind} doesnt seem to have any jsdoc`
				)
				.addField(
					'❯ src',
					`[${result.location.filename.replace('https://', '')}](${srcUrl})`
				)
				.addField(
					'❯ doc link',
					`[doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name}](https://doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name})`
				)
				.setTitle(
					`<:dd:838835648106201118> ${result.name}`,
					`https://doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name}`
				)
				.setColor('#1F85DE'),
		});
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'query',
				description: 'query',
				required: true,
			},
		],
	},
	async execSlash(interaction: naticoInteraction) {
		const query = interaction?.data?.options[0]?.value;

		const result = denodoc.nodes.find(
			(p) => p.name.toLowerCase() == query.toLowerCase() && p.kind !== 'import'
		);
		if (!result) return await interaction.reply({ content: 'Docs not found' });
		const srcUrl = `${result.location.filename}#L${result.location.line}`;
		const embed = interaction
			.embed()
			.setColor('#FF0000')
			.setDescription(
				result.jsDoc || `This ${result.kind} doesnt seem to have any jsdoc`
			)
			.addField(
				'❯ src',
				`[${result.location.filename.replace('https://', '')}](${srcUrl})`
			)
			.addField(
				'❯ doc link',
				`[doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name}](https://doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name})`
			)
			.setTitle(
				`<:dd:838835648106201118> ${result.name}`,
				`https://doc.deno.land/https/deno.land/x/discordeno/mod.ts#${result.name}`
			)
			.setColor('#1F85DE');
		interaction.reply({ content: 'Deno docs', embeds: [embed] });
	},
};
