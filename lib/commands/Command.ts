import commandHandler from './commandHandler.ts';
import { NaticoModule } from '../base/baseModule.ts';
import { NaticoClient } from '../../src/client.ts';
import {
	PermissionStrings,
	CreateGlobalApplicationCommand,
	EditGlobalApplicationCommand,
	ApplicationCommandOption,
	naticoOptions,
	execOptions,
	naticoInteraction,
} from '../../deps.ts';
import { NaticoMessage } from '../NaticoMessage.ts';
//import { db } from './db.ts';
export default class Command extends NaticoModule {
	handler: commandHandler;
	client!: NaticoClient;
	id: string;
	category: string | undefined;
	aliases: string[] | undefined;
	name: string;
	examples: string[] | undefined;
	ownerOnly: boolean | undefined;
	required: boolean | undefined;
	description: string | undefined;
	slash: boolean | undefined;
	enabled: boolean | undefined;
	superUserOnly: boolean | undefined;
	options:
		| CreateGlobalApplicationCommand[]
		| EditGlobalApplicationCommand[]
		| ApplicationCommandOption[]
		| undefined[];
	permissions: PermissionStrings[] | undefined;
	//	db: typeof db;
	constructor(
		id: string,
		{
			name,
			aliases,
			examples,
			description,
			enabled = true,
			slash,
			required,
			category,
			ownerOnly,
			superUserOnly,
			options,
			permissions,
		}: {
			options?:
				| CreateGlobalApplicationCommand[]
				| EditGlobalApplicationCommand[]
				| ApplicationCommandOption[]
				| undefined[];
			name?: string;
			aliases?: string[];
			examples?: string[];
			description?: string;
			enabled?: boolean;
			slash?: boolean;
			required?: boolean;
			category?: string;
			ownerOnly?: boolean;
			superUserOnly?: boolean;
			permissions?: PermissionStrings[];
		}
	) {
		super(id);
		this.options = options;
		this.superUserOnly = superUserOnly;
		this.enabled = enabled;
		this.slash = slash;
		this.description = description;
		this.required = required;
		this.ownerOnly = ownerOnly;
		this.name = name?.toLowerCase() || id.toLowerCase();
		this.examples = examples || [`${name}`];
		this.permissions = permissions;
		/**
		 * ID of the module.
		 * @type {string}
		 */
		this.id = id;

		// sneaky function to prevent multiple of the same things
		this.aliases = Array.from(
			new Set([
				...aliases!.map((name: string) => name.toLowerCase()),
				id.toLowerCase(),
				name!.toLowerCase(),
			])
		);
		/**
		 * ID of the category this belongs to.
		 * @type {string}
		 */
		this.category = category || 'general';

		/**
		 * The handler.
		 * @type {AkairoHandler}
		 */
	}
	exec(_message: NaticoMessage, _options: execOptions): any | Promise<any> {}
}
