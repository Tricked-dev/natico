import {
	Interaction,
	Message,
	SlashCommandCallbackData,
	CreateSlashCommandOptions,
	embed,
	EditSlashResponseOptions,
} from '../deps.ts';
/**
 * Needed to add types to message extender and interaction
 */
import naticoCommandHandler from './commandHandler.ts';

/**
 * Interface for the commands that shall be made
 */
export interface naticoCommand {
	/**
	 * Name of the command
	 */
	name: string;
	/**
	 * Other names that can be used to trigger the command
	 */
	aliases: string[];
	description: string;
	enabled: boolean;
	slash: boolean;
	category: string;
	ownerOnly: boolean;
	superUserOnly: boolean;
	cooldown: number;
	/**
	 * Runs the normal version of the command not the slash one!
	 */
	exec: (
		message: HandlerMessage
	) => Promise<void | Message | HandlerMessage | string | string[]>;
	SlashData?: CreateSlashCommandOptions;
	/**
	 * Runs the slash command
	 */
	execSlash: (
		interaction: Interaction
	) => Promise<void | Message | HandlerMessage | string | string[]>;
}

/**
 * Extending the interaction so i can get types on the reply/handler
 */
export interface naticoInteraction extends Interaction {
	api: string;
	name: string;
	reply: Reply;
	edit: Edit;
	handler: naticoCommandHandler;
	embed: typeof embed;
}

/**
 * Interface created so i can pass the handler through
 */
export interface naticoMessage extends Message {
	api: string;
	handler: naticoCommandHandler;
	args: string;
	embed: typeof embed;
}
export interface naticoSlashOptions {
	id: string;
	application_id: string;
	name: string;
	description: string;
	version: string;
	default_permission: boolean;
	options: any;
}
/**
 *
 * @param data - Slash command data to be send in the reply
 * @returns - Void
 */
export type naticoReply = (data: SlashCommandCallbackData) => Promise<void>;
export type naticoEdit = (data: EditSlashResponseOptions) => Promise<void>;
