import {
	naticoMessage,
	naticoInteraction,
	naticoOptions,
	CreateEmbedsButtonsPagination,
} from '../../deps.ts';
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
	async fetch(q: string) {
		const denodoc = await axiod(
			'https://gist.githubusercontent.com/SkyBlockDev/aa24237591b296c528a322d4a352199f/raw/5d365841be7611f046315653bd5555eabade6d65/denodocs.json',
			{ method: 'get' }
		);
		const fuse = new Fuse(denodoc.data, { keys: ['name'] });

		return await fuse.search(q);
	}
	makeEmbed(result: any) {
		const srcUrl = `${result.location.filename}#L${result.location.line}`;
		return this.handler
			.embed()
			.setColor('#FF0000')
			.setDescription(result.jsDoc || `No jsdoc`)
			.addField(
				'❯ src',
				`[${result.location.filename.replace('https://', '')}](${srcUrl})`
			)
			.addField(
				'❯ doc link',
				`[doc.deno.land/https/raw.githubusercontent.com%2Fdiscordeno%2Fdiscordeno%2Fmain%2Fmod.ts#${result.name}](https://doc.deno.land/https/raw.githubusercontent.com%2Fdiscordeno%2Fdiscordeno%2Fmain%2Fmod.ts#${result.name})`
			)
			.setTitle(
				`<:dd:847527964208005160>  ${result.name}`,
				`https://doc.deno.land/https/raw.githubusercontent.com%2Fdiscordeno%2Fdiscordeno%2Fmain%2Fmod.ts#${result.name}`
			)
			.setColor('#1F85DE');
	}
	pages(results) {
		const pages = [];
		let i = 1;
		for (const result of results) {
			pages.push(
				this.makeEmbed(result.item).setFooter(`${i}/${results.length}`)
			);
			i++;
		}
		return pages.slice(0, 50);
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const result = await this.fetch(args);

		if (!result) return await message.reply('Docs not found');

		const pages = this.pages(result);
		CreateEmbedsButtonsPagination(
			message.id,
			message.channelId,
			message.authorId,
			pages
		);
	}
	async execSlash(interaction: naticoInteraction, { query }: naticoOptions) {
		const result = await this.fetch(query.value);

		if (!result) return await interaction.reply({ content: 'Docs not found' });
		const embed = this.makeEmbed(result);
		interaction.reply({ content: '', embeds: [embed] });
	}
}
