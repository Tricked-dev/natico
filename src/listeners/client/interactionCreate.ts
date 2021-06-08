import {
	DiscordInteractionTypes,
	naticoInteraction,
	Interaction,
	DiscordenoMember,
} from '../../../deps.ts';
import Listener from '../../../lib/listeners/Listener.ts';
export default class interactionCreate extends Listener {
	constructor() {
		super('interactionCreate', {
			emitter: 'client',
			event: 'interactionCreate',
		});
	}

	async exec(data: Interaction, member: DiscordenoMember) {
		if (data.type === DiscordInteractionTypes.ApplicationCommand) {
			this.client.commandHandler.handleCommand(
				data as unknown as naticoInteraction
			);
		}
		if (data.type === DiscordInteractionTypes.Button) {
			await this.client.util.processButtonCollectors(data, member);
		}
	}
}
