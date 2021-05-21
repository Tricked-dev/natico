import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Fuse from 'https://deno.land/x/fuse/dist/fuse.esm.min.js';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class ddoc extends Command {
	constructor() {
		super('ddoc', {
			name: 'ddoc',
			aliases: ['ddoc', 'discorddeno', 'discordeno', 'ddocs'],
			examples: ['ddoc message'],
			description: 'Searches the discord deno docs', //docs were obtained via https://doc.deno.land/api/docs?entrypoint=https://deno.land/x/discordeno/mod.ts
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'query',
					description: 'query',
					required: true,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const denodoc = await axiod(
			'https://gist.githubusercontent.com/SkyBlockDev/aa24237591b296c528a322d4a352199f/raw/5d365841be7611f046315653bd5555eabade6d65/denodocs.json',
			{ method: 'get' }
		);

		const fuse = new Fuse(denodoc.data, { keys: ['name'] });

		const result = fuse.search(args)[0].item;

		if (!result) return await message.reply('Docs not found');
		const srcUrl = `${result.location.filename}#L${result.location.line}`;

		message.channel?.send({
			embed: this.handler
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
	}
	async execSlash(
		interaction: naticoInteraction,
		{ query }: { query: { value: string } }
	) {
		const denodoc = await axiod(
			'https://gist.githubusercontent.com/SkyBlockDev/aa24237591b296c528a322d4a352199f/raw/5d365841be7611f046315653bd5555eabade6d65/denodocs.json',
			{ method: 'get' }
		);

		const fuse = new Fuse(denodoc.data, { keys: ['name'] });

		const result = fuse.search(query)[0].item;

		if (!result) return await interaction.reply({ content: 'Docs not found' });
		const srcUrl = `${result.location.filename}#L${result.location.line}`;

		const embed = this.handler
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
		interaction.reply({ content: '', embeds: [embed] });
	}
}
