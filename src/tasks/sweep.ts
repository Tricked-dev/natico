import { botId, cache, cacheHandlers, cyan, gray } from '../../deps.ts';
import Task from '../../lib/tasks/Task.ts';
// original code from https://github.com/discordeno/template/blob/master/src/tasks/sweeper.ts
// slightly stripped down
const MESSAGE_LIFETIME = 600000; //10 minutes
export default class invite extends Task {
	constructor() {
		super('sweep', {
			delay: 600000, //10 minutes
		});
	}

	exec() {
		const now = Date.now();

		cacheHandlers.clear('presences');

		cacheHandlers.forEach('guilds', (guild) => {
			guild.presences.clear();

			guild.members.forEach((member) => {
				if (member.id === botId) return;

				if (guild.voiceStates.has(member.id)) return;

				cache.members.delete(member.id);
			});
		});

		cacheHandlers.forEach('messages', (message) => {
			if (now - message.timestamp > MESSAGE_LIFETIME) {
				cache.messages.delete(message.id);
			}
		});
	}
}
