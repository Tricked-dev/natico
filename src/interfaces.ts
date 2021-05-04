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
	/**
	 * Wheater or not args are required
	 */
	required: boolean;
	category: string;
	ownerOnly: boolean;
	superUserOnly: boolean;
	cooldown: number;
	examples: string[];
	/**
	 * Runs the normal version of the command not the slash one!
	 */
	exec: (
		message: naticoMessage
	) => Promise<void | Message | naticoMessage | string | string[]>;
	SlashData?: CreateSlashCommandOptions;
	/**
	 * Runs the slash command
	 */
	execSlash: (
		interaction: Interaction
	) => Promise<void | Message | naticoMessage | string | string[]>;
}

/**
 * Extending the interaction so i can get types on the reply/handler
 */
export interface naticoInteraction extends Interaction {
	me: naticoUser;
	api: string;
	name: string;
	reply: naticoReply;
	edit: naticoEdit;
	handler: naticoCommandHandler;
	embed: typeof embed;
}

/**
 * Interface created so i can pass the handler through
 */
export interface naticoMessage extends Message {
	me: naticoUser;
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
	author: {
		name: string;
	};
	links: {
		npm: string;
	};
}
/**
 * Gives the client user object
 */
export interface naticoUser {
	id: string;
	username: string;
	avatar?: string;
	discriminator: string;
	public_flags?: number;
	bot?: boolean;
}
export interface naticoRes {
	description: string;
	repository: string;
	newest_version: string;
	downloads: string | number;
	recent_downloads: number | string;
	id: string;
	name: string;
	date: string;
	scoped: string;
	version: string;
	keywords: string[];
	versions: string[];
	summary: string;
}
/**
 *
 * @param data - Slash command data to be send in the reply
 * @returns - Void
 */
export type naticoReply = (data: SlashCommandCallbackData) => Promise<void>;
export type naticoEdit = (data: EditSlashResponseOptions) => Promise<void>;
