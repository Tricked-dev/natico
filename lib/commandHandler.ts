import {
	Message,
	Collection,
	createSlashCommand,
	settings,
	sendInteractionResponse,
	naticoInteraction,
	naticoMessage,
	getSlashCommands,
	upsertSlashCommand,
	yellow,
	naticoSlashOptions,
	deleteSlashCommand,
	DiscordenoCreateApplicationCommand,
	green,
	blue,
	botId,
	join,
	Embed,
} from '../deps.ts';
import naticoCommand from './Command.ts';
export default class CommandHandler {
	commands: Collection<string, naticoCommand>;
	cooldowns: Set<string>;
	dir: string;
	IgnoreCD: string[];
	owners: string[];
	cooldown: number;
	rateLimit: number;
	superusers: string[];
	guildonly: boolean;
	prefix: (
		msg: Message
	) => Promise<string[]> | string | string[] | Promise<string> | string;
	constructor({
		dir,
		prefix,
		IgnoreCD = [],
		owners = [],
		cooldown = 5000,
		rateLimit = 3,
		superusers = [],
		guildonly = false,
	}: {
		dir: string;
		prefix: (
			msg: Message
		) => Promise<string[]> | string | string[] | Promise<string> | string;
		IgnoreCD?: string[];
		owners?: string[];
		/**
		 * cooldown in millieseconds
		 */
		cooldown?: number;
		rateLimit?: number;
		superusers?: string[];
		/**
		 * Commands will only work in guild channels with this on
		 */
		guildonly: boolean;
	}) {
		this.dir = dir;
		this.prefix = prefix;
		this.owners = owners;
		this.cooldown = cooldown;
		this.rateLimit = rateLimit;
		this.superusers = [...owners, ...superusers];
		this.IgnoreCD = [...IgnoreCD, ...this.superusers];
		this.cooldowns = new Set();
		this.guildonly = guildonly;
		/**
		 * Commands are stored here!
		 */
		this.commands = new Collection();
	}
	/**
	 * @returns a sneaky embed
	 */
	embed() {
		return new Embed();
	}
	/**
	 *
	 * @param command - Command that gets executed
	 * @param message - Message object to be passed through
	 * @param args - arguments to be passed though
	 * @returns - What the ran command returned
	 */
	public async runCommand(
		command: naticoCommand,
		message: naticoMessage,
		args: string
	) {
		if (!command) return;
		/*"no" */
		const no = '<:no:838017092216946748>';

		if (!command.enabled)
			if (!this.superusers.includes(message.authorId.toString()))
				return message.reply(`${no} This command is currently disabled`);

		if (this.cooldowns.has(message.authorId.toString()))
			if (!this.IgnoreCD.includes(message.authorId.toString()))
				return message.addReaction(`${no}`);

		if (this.guildonly)
			if (!this.superusers.includes(message.authorId.toString()))
				if (!message.guildId) return;

		if (command.ownerOnly)
			if (!this.owners.includes(message.authorId.toString()))
				return message.reply(`${no} This command is only for owners`);

		if (command.superUserOnly)
			if (!this.superusers.includes(message.authorId.toString()))
				return message.reply(`${no} This command is only for superusers`);

		if (command.required)
			if (!args)
				return message.reply(`${no} ${command.name} requires arguments`);

		try {
			/**
			 * Executes the command
			 */
			/*@ts-ignore*/
			await command.exec(message, { args });
			/**
			 * Log usage to prevent abuse
			 */
			console.info(
				yellow('[!]'),
				green(`command ran`),
				blue(command.name),
				green(`user`),
				blue(`${message.tag} ${message.authorId.toString()}`)
			);
			/**
			 * Adding the user to a set and deleting them later!
			 */
			this.cooldowns.add(message.authorId.toString());
			setTimeout(
				() => this.cooldowns.delete(message.authorId.toString()),
				this.cooldown
			);
		} catch (e) {
			console.log(e);
			if (e?.response?.status && e?.response?.status !== 200)
				return message.reply(
					`${no} Something went wrong with this api request theres most likely something wrong on their end`
				);
			if (message.channel)
				message.channel.send(`${no} A error occurred, Try again`);
			else message.reply(`${no} A error occurred, Try again`);
		}
	}
	/**
	 *
	 * @param interaction - Needed for data
	 * @returns - What the ran command returned
	 */
	async runSlash(interaction: naticoInteraction) {
		if (!interaction.data) return console.log('Empty interaction');
		else if (!interaction.data.name) return;
		/**
		 *
		 * @param data - Slash command data to be send in the reply
		 * @returns Idk? message object
		 */
		const reply = async (data: any): Promise<void> => {
			return await sendInteractionResponse(
				interaction.id as unknown as bigint,
				interaction.token,
				{
					type: 4,
					data,
				}
			);
		};
		const edit = async (data: any): Promise<void> => {
			return await sendInteractionResponse(
				interaction.id as unknown as bigint,
				interaction.token,
				data
			);
		};
		interaction['edit'] = edit;
		interaction['reply'] = reply;
		const command = this.FindCommand(interaction.data.name);
		if (!command) return;
		try {
			console.info(
				yellow('[!]'),
				green(`slash ran`),
				blue(command.name),
				green(`user`),
				blue(`${interaction?.user?.username} ${interaction?.user?.id}`)
			);
			const convertedOptions: any = {};
			if (interaction.data.options)
				for (const option of interaction.data.options) {
					convertedOptions[option.name] = option;
				}
			/*@ts-ignore*/
			await command.execSlash(interaction, convertedOptions);
		} catch (e) {
			console.log(e);
			interaction.reply({ content: `<:no:838017092216946748> Try again` });
		}
	}

	/**
	 *
	 * @param message - Message needed to find the command to run
	 * @returns - What Run Command returns
	 */
	public async handleCommand(message: naticoMessage) {
		if (!message?.content) return;
		if (message.isBot) return;
		if (message.content == `<@!${botId}>`) {
			return await message.reply(
				`Hello my prefix is ${settings.prefix.join(', ')}`
			);
		}
		/**
		 * Allowing pings to be used as prefix!
		 */
		if (message.content.startsWith(`<@!${botId}>`)) {
			const command = message.content
				.toLowerCase()
				.slice(`<@!${botId}>`.length)
				.trim()
				.split(' ')[0];
			const Command = this.FindCommand(command);

			if (Command) {
				const args = message.content
					.slice(`<@!${botId}>`.length)
					.trim()
					.slice(command.length)
					.trim();

				return this.runCommand(Command, message, args);
			}
		}

		const prefixes = await this.prefix(message);

		for await (const prefix of prefixes) {
			if (message.content.toLowerCase().startsWith(prefix)) {
				const command = message.content
					.toLowerCase()
					.slice(prefix.length)
					.trim()
					.split(' ')[0];
				const Command = this.FindCommand(command);

				if (Command) {
					const args = message.content
						.slice(prefix.length)
						.trim()
						.slice(command.length)
						.trim();
					return this.runCommand(Command, message, args);
				} else continue;
			}
		}
	}
	/**
	 * Simple function to find a command could be useful outside of the handler
	 * @param command - Command you want to search for
	 * @returns Command object or undefined
	 */
	public FindCommand(command: string) {
		this.commands.find((cmd) => {
			if (cmd.name == command) {
				return true;
			}
			if (cmd.aliases) {
				if (cmd.aliases.includes(command)) {
					return true;
				}
			} else return false;
		});
		return (
			this.commands.find((handler) => handler.aliases.includes(command)) ||
			this.commands.get(command)
		);
	}
	/**
	 * Check if commands have slash data and if they do it will activete it
	 * be carefull to no accidentally enable them globally,
	 * first searches if the command is already enabled and if it changed since and edit it accordingly otherwise creates a command
	 * also deletes unused slash commands
	 * @param guildID - Specific guild to enable slash commands on
	 * @returns - List of enabled commands
	 */
	public async enableSlash(guildID?: bigint) {
		const enabled = guildID
			? await getSlashCommands(guildID)
			: await getSlashCommands();
		/**
		 * Goes over the commands and checks if it still exists
		 */
		enabled.map(async (command) => {
			if (!this.commands.find((cmd) => cmd.name == command.name)) {
				if (guildID) {
					await deleteSlashCommand(command.id, [guildID]);
					return command.id;
				} else {
					await deleteSlashCommand(command.id);
					return command.id;
				}
			} else {
				return false;
			}
		});

		/**
		 * Updates the slash command data or creates a slash command
		 */
		this.commands.forEach(async (command: naticoCommand) => {
			if (command.enabled && command.slash && command.options) {
				const found = enabled.find(
					(i: naticoSlashOptions) => i.name == command.name
				);
				/**
				 * If the commands exists edit it
				 */
				const slashData = {
					name: command.name || command.id,
					description: command.description || 'no description',
					options: command.options,
				};

				if (found?.id) {
					// Cant really compare options
					if (slashData.description !== found.description) {
						await upsertSlashCommand(found.id, slashData, [guildID]);
					}
					/**
					 * If it doesnt create it
					 */
				} else {
					await createSlashCommand(slashData, [guildID]);
				}
			}
		});
		return true;
	}
	public async deleteAllSlash(guildID?: string) {
		const SlashCommands = await getSlashCommands(guildID);
		for (const command of SlashCommands) {
			await deleteSlashCommand(command.id, guildID).catch((e) => {
				return e;
			});
		}
		return true;
	}

	/**
	 * Enables all slash command on the specified server no check used or anything
	 * @param guildID ID of the guild
	 *
	 */
	public forceSlash(guildID?: string) {
		this.commands.forEach(async (command: naticoCommand) => {
			if (command.slash && command.SlashData) {
				if (guildID) command.SlashData['guildID'] = guildID;
				const SlashData =
					command.SlashData as DiscordenoCreateApplicationCommand;
				await createSlashCommand(SlashData).catch((e) => {
					return e;
				});
			}
		});
		return true;
	}

	/**
	 * Does nothing :kek:
	 */
	public handleSlash() {
		return false;
	}
	/**
	 * Used to load all commands
	 */
	public async loadALL() {
		const filepaths = this.readdirRecursive(this.dir);
		for (let filepath of filepaths) {
			filepath = join(filepath);
			if (filepath) await this.load(filepath);
		}
		console.log(
			blue('[:]'),
			yellow(`Loaded`),
			green(`${this.commands.size}`),
			yellow('commands,'),
			blue('slashed'),
			green(
				`${
					this.commands.filter((command) => {
						if (command.slash) return true;
						else return false;
					}).size
				},`
			),
			blue('disabled'),
			green(
				`${
					this.commands.filter((command) => {
						if (!command.enabled) return true;
						else return false;
					}).size
				}`
			)
		);
		return this;
	}

	public async load(thing: string) {
		//if (!isClass && !this.extensions.has(Deno.extname(thing))) return undefined;

		let mod = await import('file://' + thing);
		mod = new mod.default();

		/*
		if (mod) {
			mod = new mod(this); // eslint-disable-line new-cap
		} else {
			if (!isClass) delete require.cache[require.resolve(thing)];
			return undefined;
		}
*/
		this.register(mod, thing);

		return mod;
	}
	readdirRecursive(directory: string) {
		const result = [];

		(function read(dir) {
			const files = Deno.readDirSync(dir);

			for (const file of files) {
				const filepath = join(dir, `${file.name}`);

				if (file.isDirectory) {
					read(filepath);
				} else {
					result.push(filepath);
				}
			}
		})(directory);

		return result;
	}
	register(mod, filepath: string) {
		mod.filepath = filepath;
		mod.handler = this;
		this.commands.set(mod.id, mod);
	}
}
