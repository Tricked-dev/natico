import {
	Interaction,
	CreateGlobalApplicationCommand,
	DiscordenoMessage,
	InteractionApplicationCommandCallbackData,
	ApplicationCommandInteractionDataOptionString,
	DiscordenoMember,
} from '../deps.ts';

export interface values {
	value: string;
}
interface simpleOptions {
	value?: string;
	name?: string;
}
export interface naticoOptions {
	[name: string]: ApplicationCommandInteractionDataOptionString;
}
export interface execOptions {
	[args: string]: string;
}
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

export interface CollectMessagesOptions extends BaseCollectorCreateOptions {
	/** The channel Id where this is listening to */
	channelId: bigint;
	/** Function that will filter messages to determine whether to collect this message */
	filter: (message: DiscordenoMessage) => boolean;
}

export interface CollectButtonOptions extends BaseCollectorCreateOptions {
	/** The message Id where this is listening to */
	messageId: bigint;
	/** Function that will filter messages to determine whether to collect this message */
	filter: (message: DiscordenoMessage, member?: DiscordenoMember) => boolean;
}

export interface ButtonCollectorOptions extends BaseCollectorOptions {
	/** Function that will filter messages to determine whether to collect this message. Defaults to making sure the message is sent by the same member. */
	filter?: (message: DiscordenoMessage, member?: DiscordenoMember) => boolean;
}

export interface MessageCollectorOptions extends BaseCollectorOptions {
	/** Function that will filter messages to determine whether to collect this message. Defaults to making sure the message is sent by the same member. */
	filter?: (message: DiscordenoMessage) => boolean;
	/** The amount of messages to collect before resolving. Defaults to 1 */
	amount?: number;
	/** The amount of milliseconds this should collect for before expiring. Defaults to 5 minutes. */
	duration?: number;
}

export interface ButtonCollectorReturn {
	customId: string;
	interaction: Omit<Interaction, 'member'>;
	member?: DiscordenoMember;
}

export interface BaseCollectorOptions {
	/** The amount of messages to collect before resolving. Defaults to 1 */
	amount?: number;
	/** The amount of milliseconds this should collect for before expiring. Defaults to 5 minutes. */
	duration?: number;
}

export interface BaseCollectorCreateOptions {
	/** The unique key that will be used to get responses for this. Ideally, meant to be for member id. */
	key: bigint;
	/** The amount of messages to collect before resolving. */
	amount: number;
	/** The timestamp when this collector was created */
	createdAt: number;
	/** The duration in milliseconds how long this collector should last. */
	duration: number;
}
export interface ConvertedOptions {
	[name: string]: string;
}
export interface Events {
	[name: string]: (...args: any[]) => Promise<any> | any;
}
