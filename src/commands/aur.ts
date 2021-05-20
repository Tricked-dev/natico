import { naticoMessage, naticoInteraction } from '../../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
export default {
	name: 'aur',
	aliases: ['aur', 'arch', 'paru'],
	examples: ['aur neofetch'],
	description:
		'Searches the aur repositorys for some juicy arch :thumbsup: packages',
	enabled: true,
	slash: true,
	required: true,
	category: 'general',
	async exec(message: naticoMessage) {
		const pkg = await data(message.args);

		if (!pkg.data.results[0])
			return message.reply({
				content: '<:no:838017092216946748> Please provide a valid AUR package',
			});

		const result = pkg.data.results[0];

		message.channel?.send({
			embed: message
				.embed()
				.setColor('#0080ff')
				.addField('❯ Version', result.Version || 'no version')
				.addField('❯ Maintainer', result.Maintainer || 'no Maintainer')
				.addField(
					'❯ Popularity',
					`${result.Popularity}, no clue but its on the api` || 'no Maintainer'
				)
				.setDescription(result.Description || 'No description provided')
				.setTitle(`<:arch:844981756246622209> ${result.Name}`, `${result.URL}`),
		});
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'arch',
				description: 'The package you want to search for',
				required: true,
			},
		],
	},
	async execSlash(interaction: naticoInteraction, { arch }) {
		const pkg = await data(arch.value);

		if (!pkg.data.results[0])
			return interaction.reply({
				content: '<:no:838017092216946748> Please provide a valid AUR package',
			});

		const result = pkg.data.results[0];

		const embed = interaction
			.embed()
			.setColor('#0080ff')
			.addField('❯ Version', result.Version || 'no version')
			.addField('❯ Maintainer', result.Maintainer || 'no Maintainer')
			.addField(
				'❯ Popularity',
				`${result.Popularity}, no clue but its on the api` || 'no Maintainer'
			)
			.setDescription(result.Description || 'No description provided')
			.setTitle(`<:arch:844981756246622209> ${result.Name}`, `${result.URL}`);

		interaction.edit({ content: 'python', embeds: [embed] });
	},
};
function data(q) {
	return axiod(`https://aur.archlinux.org/rpc/`, {
		method: 'GET',
		params: {
			v: 5,
			type: 'search',
			arg: q,
		},
	});
}
