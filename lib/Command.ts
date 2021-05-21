import commandHandler from './commandHandler.ts';
export default class Command {
	handler: commandHandler | null;
	id: string;
	category: string;
	aliases: string[];
	name: string;
	examples: string[];
	ownerOnly: boolean;
	required: boolean;
	description: string | undefined;
	slash: boolean | undefined;
	enabled: boolean | undefined;
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
		}: {
			name?: string;
			aliases?: string[];
			examples?: string[];
			description?: string;
			enabled?: boolean;
			slash?: boolean;
			required?: boolean;
			category?: string;
			ownerOnly?: boolean;
		}
	) {
		this.enabled = enabled;
		this.slash = slash;
		this.description = description;
		this.required = required || false;
		this.ownerOnly = ownerOnly || false;
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
		this.handler = null;
	}
}
