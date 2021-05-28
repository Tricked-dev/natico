import {
	processButtonCollectors,
	DiscordInteractionTypes,
	naticoInteraction,
	Interaction,
	DiscordenoMember,
} from '../../deps.ts';
import Listener from '../../lib/listeners/Listener.ts';
export default class interactionCreate extends Listener {
	constructor() {
		super('interactionCreate', {
			event: 'interactionCreate',
		});
	}

	exec(data: Interaction, member: DiscordenoMember) {
		if (data.type === DiscordInteractionTypes.ApplicationCommand) {
			this.client.commandHandler.runSlash(data as unknown as naticoInteraction);
		}
		if (data.type === DiscordInteractionTypes.Button) {
			processButtonCollectors(data, member);
		}
	}
}
