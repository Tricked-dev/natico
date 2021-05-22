import { naticoMessage, naticoInteraction } from '../../deps.ts';
import Command from '../../lib/Command.ts';
export default class github extends Command {
	constructor() {
		super('github', {
			name: 'github',
			aliases: ['github', 'githubuser'],
			examples: ['github skyblockdev'],
			description: 'Sends some stats about a user github profile',
			enabled: true,
			slash: true,
			required: true,
			category: 'general',
			options: [
				{
					type: 3,
					name: 'user',
					description: 'github user you want to see the stats of',
					required: true,
				},
			],
		});
	}
	async exec(message: naticoMessage, { args }: { args: string }) {
		const user = await fetch(`https://api.github.com/users/${args}`, {
			method: 'GET',
			// headers: {
			// 	Authorization: `token ${message.api}`,
			// },
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
		stats += `**Following** ${user.following}`;
		const embed = this.handler
			.embed()
			.setTitle(user.login, user.html_url)
			.addField('➥ Info', info)
			.addField('➥ Stats', stats)
			.setThumbnail(user.avatar_url);
		message.channel?.send({ embed });
	}
	async execSlash(
		interaction: naticoInteraction,
		{ user }: { user: { value: string } }
	) {
		const req = await fetch(`https://api.github.com/users/${user}`).then(
			(response) => response.json()
		);
		if (req?.message) return interaction.reply({ content: 'User not found' });

		let info = '';
		if (req.email) info += `**email:** ${req.email}\n`;
		info += `**hireable:** ${req.hireable ? 'YES' : 'no'}\n`;
		if (req.blog) info += `**blog:** ${req.blog}\n`;
		if (req.location) info += `**location:** ${req.location}\n`;
		if (req.name) info += `**NickName:** ${req.name}\n`;
		if (req.bio) info += `**bio:** ${req.bio}\n`;
		let stats = '';
		stats += `**Joined at** ${req.created_at}\n`; //need help trying to format this
		stats += `**[Public repos](${req.repos_url})** ${
			req.public_repos || 'none'
		}\n`;
		stats += `**[Public gists](${req.gists_url})** ${
			req.public_gists || 'none'
		}\n`;
		stats += `**[Followers](${req.followers_url})** ${req.followers}\n`;
		stats += `**[Following](${req.following_url})** ${req.following}`;
		const embed = this.handler
			.embed()
			.setTitle(req.login, req.html_url)
			.addField('➥ Info', info)
			.addField('➥ Stats', stats)
			.setThumbnail(req.avatar_url);
		interaction.reply({ content: 'Github', embeds: [embed] });
	}
}
