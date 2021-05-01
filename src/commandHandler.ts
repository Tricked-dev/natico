import {
	Message,
	Collection,
	executeSlashCommand,
	SlashCommandCallbackData,
	createSlashCommand,
	CreateSlashCommandOptions,
} from '../deps.ts';
import {
	CommandInteraction,
	CommandInterface,
	HandlerMessage,
} from './interfaces.ts';
export default class CommandHandler {
	commands: Collection<string, CommandInterface>;
	dir: string;
	IgnoreCD: string[];
	owners: string[];
	cooldown: number;
	rateLimit: number;
	superusers: string[];
	prefix: (msg: Message) => string[];
	constructor({
		dir,
		prefix,
		IgnoreCD = [],
		owners = [],
		cooldown = 50,
		rateLimit = 3,
		superusers = [],
	}: {
		dir: string;
		prefix: (msg: Message) => string[];
		IgnoreCD?: string[];
		owners?: string[];
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
		const Command = await this.commands.get(command);
		if (!Command) return;

		if (Command.ownerOnly)
			if (!this.owners.includes(message.author.id))
				return message.reply('This command is only for owners');

		if (Command.superUserOnly)
			if (!this.superusers.includes(message.author.id))
				return message.reply('This command is only for superusers');

		(message as HandlerMessage)['handler'] = this;
		return Command.exec(message as HandlerMessage, args);
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
		const reply = (data: SlashCommandCallbackData) =>
			executeSlashCommand(interaction.id, interaction.token, {
				type: 4,
				data,
			});
		//Make a alias to the name
		interaction['name'] = interaction.data.name;
		const command = this.commands.get(interaction.name);
		if (!command) return;
		return command.execSlash(interaction, reply);
	}
	/**
	 *
	 * @param message - Message needed to find the command to run
	 * @returns - What Run Command returns
	 */
	public async handleCommand(message: Message) {
		const prefixes = this.prefix(message);

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
					//.split(/ +/)
					//.join(' ');

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
		const list: any[] = [];
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
	 * Doesnt nothing :kek:
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
