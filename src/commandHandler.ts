import {
	Message,
	Collection,
	executeSlashCommand,
	SlashCommandCallbackData,
	Guild,createSlashCommand
} from '../deps.ts';
import { CommandInteraction,CommandInterface } from './interfaces.ts';
export default class CommandHandler {
	commands: any;
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
	public async runCommand(command: string, message: Message, args: string) {
		const Command = await this.commands.get(command);

		if (Command.ownerOnly)
			if (!this.owners.includes(message.author.id))
				return message.reply('This command is only for owners');

		if (Command.superUserOnly)
			if (!this.superusers.includes(message.author.id))
				return message.reply('This command is only for superusers');

		message['handler'] = this;
		Command.exec(message, args);
	}
	public runSlash(interaction: CommandInteraction) {
		//easier way to reply
		const reply = (data: SlashCommandCallbackData) =>
			executeSlashCommand(interaction.id, interaction.token, {
				type: 4,
				data,
			});
		//Make a alias to the name //@deno-ignore //when?
		interaction['name'] = interaction.data.name;
		this.commands.get(interaction.name).execSlash(interaction, reply);
	}

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
	public EnableSlash(guild?: Guild) {
		this.commands.forEach((command: CommandInterface) => {
			if (command.SlashData) {
				if(guild) command.SlashData["guildID"] = guild.id
				createSlashCommand({(command as any).SlashData})
			}
		});
	}
	public handleSlash() {}
	public async loadALL() {
		//console.log(this.dir);
		for await (const Command of Deno.readDir(this.dir)) {
			const command = (await import(`${this.dir}/${Command.name}`)).default;
			console.log(command);
			if (command?.slash && command.SlashData) {
				console.log('EEE');
				command.SlashData['name'] = command.name;
				command.SlashData['description'] = command.description;
			}

			this.commands.set(Command.name.replace('.ts', ''), command);
		}
	}
}
