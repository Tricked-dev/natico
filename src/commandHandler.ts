import {
	Message,
	Collection,
	executeSlashCommand,
	SlashCommandCallbackData,
	createSlashCommand,
	CreateSlashCommandOptions,
	settings,
	CommandInteraction,
	CommandInterface,
	HandlerMessage,
	addReaction,
} from '../deps.ts';
export default class CommandHandler {
	commands: Collection<string, CommandInterface>;
	cooldowns: Set<string>;
	dir: string;
	IgnoreCD: string[];
	owners: string[];
	cooldown: number;
	rateLimit: number;
	superusers: string[];

	prefix: (msg: Message) => Promise<string[]>;
	constructor({
		dir,
		prefix,
		IgnoreCD = [],
		owners = [],
		cooldown = 5000,
		rateLimit = 3,
		superusers = [],
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
	}) {
		this.dir = dir;
		this.prefix = prefix;
		this.IgnoreCD = IgnoreCD;
		this.owners = owners;
		this.cooldown = cooldown;
		this.rateLimit = rateLimit;
		this.superusers = [...owners, ...superusers];
		this.cooldowns = new Set();
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
	public async runCommand(command: string, message: Message, args: string) {
		const Command = this.commands.get(command);
		if (!Command) return;

		if (Command.ownerOnly)
			if (!this.owners.includes(message.author.id))
				return message.reply('This command is only for owners');

		if (Command.superUserOnly)
			if (!this.superusers.includes(message.author.id))
				return message.reply('This command is only for superusers');

		if (this.cooldowns.has(message.author.id))
			return addReaction(
				message.channelID,
				message.id,
				'no:838017092216946748'
			);

		(message as HandlerMessage)['handler'] = this;
		(message as HandlerMessage)['args'] = args;
		try {
			await Command.exec(message as HandlerMessage);
			/**
			 * Adding the user to a set and deleting them later!
			 */
			this.cooldowns.add(message.author.id);
			setTimeout(
				() => this.cooldowns.delete(message.author.id),
				Command.cooldown || this.cooldown
			);
		} catch (e) {
			message.reply(e.stack);
		}
	}
	/**
	 *
	 * @param interaction - Needed for data
	 * @returns - What the ran command returned
	 */
	public runSlash(interaction: CommandInteraction) {
		if (!interaction.data) return console.log('Empty interaction');
		/**
		 *
		 * @param data - Slash command data to be send in the reply
		 * @returns - Idk? message object
		 */
		const reply = async (data: SlashCommandCallbackData): Promise<void> => {
			return await executeSlashCommand(interaction.id, interaction.token, {
				type: 4,
				data,
			});
		};

		//Make a alias to the name
		interaction['name'] = interaction.data.name;
		interaction['reply'] = reply;
		const command = this.commands.get(interaction.name);
		if (!command) return;
		return command.execSlash(interaction);
	}

	/**
	 *
	 * @param message - Message needed to find the command to run
	 * @returns - What Run Command returns
	 */
	public async handleCommand(message: Message) {
		/**
		 * Allowing pings to be used as prefix!
		 */
		if (message.content.startsWith(`<@!${settings.clientid}>`)) {
			const command = message.content
				.slice(`<@!${settings.clientid}>`.length)
				.trim()
				.split(' ')[0];
			if (this.commands.has(command)) {
				const args = message.content
					.slice(`<@!${settings.clientid}>`.length)
					.trim()
					.slice(command.length)
					.trim();
				return this.runCommand(command, message, args);
			}
		}

		const prefixes = await this.prefix(message);

		for await (const prefix of prefixes) {
			if (message.content.startsWith(prefix)) {
				const command = message.content
					.slice(prefix.length)
					.trim()
					.split(' ')[0];
				if (this.commands.has(command)) {
					const args = message.content
						.slice(prefix.length)
						.trim()
						.slice(command.length)
						.trim();
					return this.runCommand(command, message, args);
				} else continue;
			}
		}
	}
	/**
	 * Check if commands have slash data and if they do it will activete it
	 * be carefull to no accidentally enable them globally
	 * @param guildID - Specific guild to enable slash commands on
	 * @returns - List of enabled commands
	 */
	public async EnableSlash(guildID?: string) {
		const list: any[] /** Anyone any idea what to put instead of any? */ = [];
		await this.commands.forEach(async (command: CommandInterface) => {
			if (command.SlashData) {
				if (guildID) command.SlashData['guildID'] = guildID;
				const SlashData = command.SlashData as CreateSlashCommandOptions;
				list.push(await createSlashCommand(SlashData));
			}
		});
		return list;
	}
	/**
	 * Does nothing :kek:
	 */
	public handleSlash() {}
	/**
	 * Used to load all commands
	 */
	public async loadALL() {
		for await (const Command of Deno.readDir(this.dir)) {
			const command = (await import(`${this.dir}/${Command.name}`)).default;
			if (command?.slash && command.SlashData) {
				command.SlashData['name'] = command.name;
				command.SlashData['description'] = command.description;
			}

			this.commands.set(Command.name.replace('.ts', ''), command);
		}
	}
}
