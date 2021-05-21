import commandHandler from './commandHandler.ts';
import { naticoMessage, naticoInteraction } from '../deps.ts';
export default class Command {
	handler: commandHandler;
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
	options: any | any[];
	constructor(
		id: string,
		{
			name,
			aliases,
			examples,
			description,
			enabled,
			slash,
			required,
			category,
			ownerOnly,
			superUserOnly,
			options,
		}: {
			options?: any | any[];
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
		}
	) {
		this.options = options;
		this.superUserOnly = superUserOnly;
		this.enabled = enabled;
		this.slash = slash;
		this.description = description;
		this.required = required;
		this.ownerOnly = ownerOnly;
		this.name = name?.toLowerCase() || id.toLowerCase();
		this.examples = examples || [`${name}`];
		/**
		 * ID of the module.
		 * @type {string}
		 */
		this.id = id;
		// sneaky function to prevent multiple of the same things
		this.aliases = Array.from(
			new Set([
				...aliases.map((name: string) => name.toLowerCase()),
				id.toLowerCase(),
				name.toLowerCase(),
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
}
