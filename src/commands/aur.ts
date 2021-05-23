import { naticoMessage, naticoInteraction, naticoOptions } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
import Command from '../../lib/Command.ts';
export default class aur extends Command {
	constructor() {
		super('aur', {
			name: 'aur',
			aliases: ['aur', 'arch', 'paru'],
			examples: ['aur neofetch'],
			description: 'Find aur packages for you',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'arch',
					description: 'The package you want to search for',
					required: true,
				},
			],
		});
	}
	async fetch(q: string) {
		return await axiod(`https://aur.archlinux.org/rpc/`, {
			method: 'GET',
			params: {
				v: 5,
				type: 'search',
				arg: q,
			},
		});
	}
	makeEmbed(result: any) {
		return this.handler
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result.Version || 'no version')
			.addField('❯ Maintainer', result.Maintainer || 'no Maintainer')
			.addField(
				'❯ Popularity',
				`${result.Popularity}, no clue but its on the api` || 'no Maintainer'
			)
			.setDescription(result.Description || 'No description provided')
			.setTitle(
				`<:arch:844981756246622209> ${result.Name}`,
				result.URL ?? 'https://duckduckgo.com'
			);
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const pkg = await this.fetch(args);
		if (!pkg || !pkg?.data?.results[0])
			return message.reply(
				'<:no:838017092216946748> Please provide a valid AUR package'
			);

		const embed = this.makeEmbed(pkg.data.results[0]);

		message.channel?.send({
			embed,
		});
	}

	async execSlash(interaction: naticoInteraction, { arch }: naticoOptions) {
		const pkg = await this.fetch(arch.value);

		if (!pkg || !pkg.data.results[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid AUR package',
			});

		const embed = this.makeEmbed(pkg.data.results[0]);
		interaction.reply({ content: '', embeds: [embed] });
	}
}
