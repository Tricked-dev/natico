import {
	Message,
	Collection,
	createSlashCommand,
	settings,
	sendInteractionResponse,
	getUser,
	naticoInteraction,
	naticoCommand,
	naticoMessage,
	cache,
	naticoUser,
	getSlashCommands,
	upsertSlashCommand,
	yellow,
	naticoSlashOptions,
	deleteSlashCommand,
	credentials,
	embed,
	ApplicationCommandOptionChoice,
	DiscordenoCreateApplicationCommand,
	green,
	blue,
	botId,
} from '../deps.ts';
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
	prefix: (msg: Message) => Promise<string[]>;
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
		prefix: (msg: Message) => Promise<string[]>;
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
		const no = '<:no:838017092216946748>';
		if (this.cooldowns.has(message.authorId.toString()))
			if (!this.IgnoreCD.includes(message.authorId.toString()))
				return message.addReaction('no:838017092216946748');

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
		message['api'] = credentials.github;
		message['handler'] = this;
		message['embed'] = embed;
		/**
		 * Just want to import message and not having (message, args, aything)
		 */
		message['args'] = args;
		/**
		 * I like to use me to get the id etc without having to import stuff
		 */
		//message['me'] =
		//	(cache.members.get(botId) as naticoUser) || (await getUser(botId));

		try {
			/**
			 * Executes the command
			 */
			await command.exec(message);
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
				command.cooldown || this.cooldown
			);
		} catch (e) {
			console.log(e);
			message.channel?.send(`<:no:838017092216946748> Try again`);
		}
	}
	/**
	 *
	 * @param interaction - Needed for data
	 * @returns - What the ran command returned
	 */
	public async runSlash(interaction: naticoInteraction) {
		if (!interaction.data) return console.log('Empty interaction');
		else if (!interaction.data.name) return;
		/**
		 *
		 * @param data - Slash command data to be send in the reply
		 * @returns Idk? message object
		 */
		const reply = async (data: any): Promise<void> => {
			return await sendInteractionResponse(interaction.id, interaction.token, {
				type: 4,
				data,
			});
		};
		const edit = async (data: any): Promise<void> => {
			return await sendInteractionResponse(
				interaction.id,
				interaction.token,
				data
			);
		};

		//Make a alias to the name
		interaction['name'] = interaction.data.name;
		interactionApplicationCommandOptionChoice['reply'] = reply;
		interaction['edit'] = edit;
		interaction['api'] = credentials.github;
		interaction['embed'] = embed;
		interaction['handler'] = this;
		interaction['me'] =
			(cache.members.get(botId) as naticoUser) || (await getUser(botId));

		const command = this.commands.get(interaction.name);
		if (!command) return;
		try {
			console.info(
				yellow('[!]'),
				green(`slash ran`),
				blue(command.name),
				green(`user`),
				blue(`${interaction?.user?.username} ${interaction?.user?.id}`)
			);

			return command.execSlash(interaction);
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
		const Enabled = guildID
			? await getSlashCommands(guildID)
			: await getSlashCommands();

		/**
		 * Goes over the commands and checks if it still exists
		 */
		for (const command of Enabled) {
			/**
			 * "finds" the command
			 */
			if (!this.commands.find((cmd) => cmd.name == command.name)) {
				if (guildID) await deleteSlashCommand(command.id, guildID);
				else await deleteSlashCommand(command.id);
			}
		}
		/**
		 * Updates the slash command data or creates a slash command
		 */
		this.commands.forEach(async (command: naticoCommand) => {
			if (command.slash && command.SlashData) {
				const found = Enabled.find(
					(i: naticoSlashOptions) => i.name == command.name
				);

				/**
				 * If the commands exists edit it
				 */
				if (found?.id) {
					const SlashData = command.SlashData as naticoSlashOptions;
					// Cant really compare options
					if (SlashData.description !== found.description) {
						await upsertSlashCommand(found.id, SlashData, guildID);
					}

					/**
					 * If it doesnt create it
					 */
				} else {
					if (guildID) command.SlashData['guildID'] = guildID;
					const SlashData = command.SlashData as naticoSlashOptions;
					//console.log(SlashData);
					await createSlashCommand(SlashData);
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
		for await (const Command of Deno.readDir(this.dir)) {
			const command = (await import(`${this.dir}/${Command.name}`)).default;
			/**
			 * Pretty much copy the stuff over for easier slash command registering
			 */
			if (command?.slash && command.SlashData) {
				command.SlashData['name'] = command.name;
				command.SlashData['description'] = command.description;
			}

			this.commands.set(Command.name.replace('.ts', ''), command);
		}
		return true;
	}
}
