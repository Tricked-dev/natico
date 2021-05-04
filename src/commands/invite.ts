import { naticoMessage, botID } from '../../deps.ts';
export default {
	name: 'invite',
	aliases: ['invite', 'inv'],
	examples: ['invite'],
	description: 'Eval some super javascript deno code',
	enabled: true,
	slash: false,
	category: 'dev',
	ownerOnly: false,
	async exec(message: naticoMessage) {
		return await message.reply(
			`https://discord.com/oauth2/authorize?client_id=${botID}&permissions=117824&scope=bot%20applications.commands`
		);
	},
};
