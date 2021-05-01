import {
	Interaction,
	Message,
	SlashCommandCallbackData,
	CreateSlashCommandOptions,
} from '../deps.ts';
import CommandHandler from './commandHandler.ts';
export interface CommandInteraction extends Interaction {
	name: string;
}
/**
 * Interface for the commands that shall be made
 */
export interface CommandInterface {
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
	/**
	 * Runs the normal version of the command not the slash one!
	 */
	exec: (
		message: HandlerMessage,
		args: string
	) => void | Message | HandlerMessage | string | string[];
	SlashData?: CreateSlashCommandOptions;
	/**
	 * Runs the slash command
	 */
	execSlash: (
		interaction: Interaction,
		reply: Reply
	) => void | Message | HandlerMessage | string | string[];
}
export interface HandlerMessage extends Message {
	handler: CommandHandler;
}
/**
 *
 * @param data - Slash command data to be send in the reply
 * @returns - Idk? message object
 */
export type Reply = (
	data: SlashCommandCallbackData
) => void | Message | HandlerMessage | string | string[];
