import { botID, cache, cacheHandlers, cyan, gray } from '../../deps.ts';
// original code from https://github.com/discordeno/template/blob/master/src/tasks/sweeper.ts
// slightly stripped down
const MESSAGE_LIFETIME = 600000; //10 minutes
export default {
	name: 'sweep',
	delay: 600000, // 10 mins
	exec() {
		console.log(cyan('[$]'), gray('Sweeping cache'));
		const now = Date.now();

		cacheHandlers.clear('presences');

		cacheHandlers.forEach('guilds', (guild) => {
			guild.presences.clear();

			guild.members.forEach((member) => {
				if (member.id === botID) return;

				if (guild.voiceStates.has(member.id)) return;

				cache.members.delete(member.id);
			});
		});

		cacheHandlers.forEach('messages', (message) => {
			if (now - message.timestamp > MESSAGE_LIFETIME) {
				cache.messages.delete(message.id);
			}
		});
	},
};
