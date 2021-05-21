import {
	Interaction,
	CreateGlobalApplicationCommand,
	DiscordenoMessage,
	InteractionApplicationCommandCallbackData,
} from '../deps.ts';

/**
 * Extending the interaction so i can get types on the reply/handler
 */
export interface naticoInteraction extends Interaction {
	edit: (content: any) => Promise<void>;
	reply: (content: any) => Promise<void>;
}

/**
 * Interface created so i can pass the handler through
 */
export interface naticoMessage extends DiscordenoMessage {}
export interface naticoSlashOptions extends CreateGlobalApplicationCommand {}
/**
 * Gives the client user object
 */
export interface naticoUser {}

/**
 *
 * @param data - Slash command data to be send in the reply
 * @returns - Void
 */
export type naticoReply = (
	data: InteractionApplicationCommandCallbackData
) => Promise<void>;
export type naticoEdit = (data: any) => Promise<void>;
