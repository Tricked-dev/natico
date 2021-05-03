import {
	HandlerMessage,
	CommandInteraction,
	getUser,
	settings,
} from '../../deps.ts';

export default {
	name: 'github',
	description: 'Sends some stats about a user github profile',
	enabled: true,
	slash: true,
	category: 'general',
	async exec(message: HandlerMessage) {
		const user = await fetch(`https://api.github.com/users/${message.args}`, {
			method: 'GET',
			headers: {
				Authorization: `token ${message.api}`,
			},
		}).then((response) => response.json());
		if (user?.message) return message.reply('User not found');

		let info = '';
		if (user.email) info += `**email:** ${user.email}\n`;
		info += `**hireable:** ${user.hireable ? 'YES' : 'no'}\n`;
		if (user.blog) info += `**blog:** ${user.blog}\n`;
		if (user.location) info += `**location:** ${user.location}\n`;
		if (user.name) info += `**NickName:** ${user.name}\n`;
		if (user.bio) info += `**bio:** ${user.bio}\n`;
		let stats = '';
		stats += `**Joined at** ${user.created_at}\n`; //need help trying to format this
		stats += `**Public repos** ${user.public_repos || 'none'}\n`;
		stats += `**Public gists** ${user.public_gists || 'none'}\n`;
		stats += `**Followers** ${user.followers}\n`;
		stats += `**following** ${user.following}`;
		const embed = message
			.embed()
			.setTitle(user.login, user.html_url)
			.addField('➥ Info', info)
			.addField('➥ Stats', stats)
			.setThumbnail(user.avatar_url || (await getUser(settings.clientid)));
		message.channel?.send({ embed });
	},
	SlashData: {
		options: [
			{
				type: 3,
				name: 'user',
				description: 'github user you want to see the stats of',
				required: true,
			},
		],
	},
	async execSlash(interaction: CommandInteraction) {
		if (!interaction.data?.options[0]?.value)
			return interaction.reply({ content: 'Please provide a user' });
		const user = await fetch(
			`https://api.github.com/users/${interaction.data?.options[0]?.value}`
		).then((response) => response.json());
		if (user?.message) return interaction.reply({ content: 'User not found' });

		let info = '';
		if (user.email) info += `**email:** ${user.email}\n`;
		info += `**hireable:** ${user.hireable ? 'YES' : 'no'}\n`;
		if (user.blog) info += `**blog:** ${user.blog}\n`;
		if (user.location) info += `**location:** ${user.location}\n`;
		if (user.name) info += `**NickName:** ${user.name}\n`;
		if (user.bio) info += `**bio:** ${user.bio}\n`;
		let stats = '';
		stats += `**Joined at** ${user.created_at}\n`; //need help trying to format this
		stats += `**[Public repos](${user.repos_url})** ${
			user.public_repos || 'none'
		}\n`;
		stats += `**[Public gists](${user.gists_url})** ${
			user.public_gists || 'none'
		}\n`;
		stats += `**[Followers](${user.followers_url})** ${user.followers}\n`;
		stats += `**[following](${user.following_url})** ${user.following}`;
		const embed = interaction
			.embed()
			.setTitle(user.login, user.html_url)
			.addField('➥ Info', info)
			.addField('➥ Stats', stats)
			.setThumbnail(user.avatar_url || (await getUser(settings.clientid)));
		interaction.reply({ content: 'Github', embeds: [embed] });
	},
};
