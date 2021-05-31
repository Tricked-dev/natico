import {
	Collection,
	settings,
	sendInteractionResponse,
	naticoInteraction,
	naticoMessage,
	yellow,
	EditGlobalApplicationCommand,
	green,
	blue,
	botId,
	join,
	Embed,
	hasGuildPermissions,
	upsertSlashCommands,
	naticoOptions,
	DiscordenoInteractionResponse,
	InteractionApplicationCommandCallbackData,
	ApplicationCommandInteractionDataOptionString,
} from '../../deps.ts';
import { NaticoClient } from '../../src/client.ts';
import { NaticoHandler } from '../base/baseHandler.ts';
import { NaticoMessage } from '../NaticoMessage.ts';
import naticoCommand from './Command.ts';
export default class CommandHandler extends NaticoHandler {
	declare modules: Collection<string, naticoCommand>;
	cooldowns: Set<string>;
	IgnoreCD: string[];
	owners: string[];
	cooldown: number;
	rateLimit: number;
	superusers: string[];
	guildonly: boolean;
	prefix: (
		msg: naticoMessage
	) => Promise<string[]> | string | string[] | Promise<string> | string;
	constructor(
		client: NaticoClient,
		{
			directory,
			prefix,
			IgnoreCD = [],
			owners = [],
			cooldown = 5000,
			rateLimit = 3,
			superusers = [],
			guildonly = false,
		}: {
			directory: string;
			prefix: (
				msg: naticoMessage
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
		}
	) {
		super(client, {
			directory,
		});
		this.prefix = prefix;
		this.owners = owners;
		this.cooldown = cooldown;
		this.rateLimit = rateLimit;
		this.superusers = [...owners, ...superusers];
		this.IgnoreCD = [...IgnoreCD, ...this.superusers];
		this.cooldowns = new Set();
		this.guildonly = guildonly;
		this.modules = new Collection();

		/**
		 * Commands are stored here!
		 */
	}
	/**
	 * @returns a sneaky embed
	 */
	embed() {
		return new Embed();
	}
	commandChecks(command: naticoCommand, message: NaticoMessage, args: string) {
		const no = '<:no:838017092216946748>';

		if (!command.enabled)
			if (!this.superusers.includes(message.authorId!))
				return message.reply(`${no} This command is currently disabled`);

		if (this.cooldowns.has(message.authorId!))
			if (!this.IgnoreCD.includes(message.authorId!))
				return message.reply(`${no}`);

		if (this.guildonly)
			if (!this.superusers.includes(message.authorId!))
				if (!message.guildId) return;

		if (command.ownerOnly)
			if (!this.owners.includes(message.authorId!))
				return message.reply(`${no} This command is only for owners`);

		if (command.superUserOnly)
			if (!this.superusers.includes(message.authorId!))
				return message.reply(`${no} This command is only for superusers`);

		if (command.required)
			if (!message.isSlash)
				if (!args)
					return message.reply(`${no} ${command.name} requires arguments`);
		if (command.permissions)
			if (!this.superusers.includes(message.authorId!))
				if (
					!hasGuildPermissions(
						BigInt(message!.guildId),
						BigInt(message.authorId),
						command.permissions
					)
				)
					return message.reply(
						`${no} You dont have enough permissions to run this command`
					);
		return false;
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
		message: NaticoMessage,
		args?: string
	) {
		if (!command) return;
		const convertedOptions = {};
		if (message.isSlash && message?.data?.options) {
			for (const option of message.data?.options) {
				convertedOptions[option.name] = option.value;
			}
		}

		const no = '<:no:838017092216946748>';
		/*"no" */
		if (this.commandChecks(command, message, args)) return console.log('HI(');

		try {
			const data = message.isSlash
				? convertedOptions
				: this.generateArgs(command, args);
			await command.exec(message, data);

			/**
			 * Log usage to prevent abuse
			 */
			console.info(
				yellow('[!]'),
				green(`command ran`),
				blue(command.name),
				green(`user`),
				blue(`${message.tag} ${message.authorId}`)
			);
			/**
			 * Adding the user to a set and deleting them later!
			 */
			this.cooldowns.add(message.authorId);
			setTimeout(() => this.cooldowns.delete(message.authorId), this.cooldown);
		} catch (e) {
			console.log(e);
			if (e?.response?.status && e?.response?.status !== 200)
				return message.reply(
					`${no} response status: ${
						e?.response?.status ?? 200
					} Something went wrong with this api request theres most likely something wrong on their end`
				);
			if (message.channel)
				message.channel.send(`${no} A error occurred, Try again`);
			else message.reply(`${no} A error occurred, Try again`);
		}
	}
	generateArgs(
		command: naticoCommand,
		//message: NaticoMessage,
		content: string
	) {
		let args = {};
		if (command.options) {
			for (const option of command.options) {
				option.type == 3;
				args[option.name] = content;
			}
		}
		return args;
	}

	/**
	 *
	 * @param interaction - Needed for data
	 * @returns - What the ran command returned
	 */
	async runSlash(i: naticoInteraction) {
		if (!i.data) return console.log('Empty interaction');
		const interaction = new NaticoMessage({
			client: this.client,
			interaction: i,
		});
		//else if (!interaction.data.name) return;

		/**
		 *
		 * @param data - Slash command data to be send in the reply
		 * @returns Idk? message object
		 */
		const edit = async (data: DiscordenoInteractionResponse): Promise<void> => {
			return await sendInteractionResponse(
				interaction.id as unknown as bigint,
				interaction.token,
				data
			);
		};
		interaction['edit'] = edit;
		const command = this.findCommand(interaction.name);
		if (!command) return;

		try {
			console.info(
				yellow('[!]'),
				green(`slash ran`),
				blue(command.name),
				green(`user`),
				blue(`${interaction?.user?.username} ${interaction?.user?.id}`)
			);
			const convertedOptions: naticoOptions = {};
			if (interaction.data.options)
				for (const option of interaction.data.options) {
					convertedOptions[option.name] =
						option as ApplicationCommandInteractionDataOptionString;
				}

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
	public async handleCommand(m) {
		if (m.token) {
			const message = new NaticoMessage({
				client: this.client,
				interaction: m,
			});
			const command = this.findCommand(message!.name);
			if (command) return this.runCommand(command, message);
		}
		const message = new NaticoMessage({
			client: this.client,
			message: m,
		});
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
			const Command = this.findCommand(command);

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
				const Command = this.findCommand(command);

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
	public findCommand(command: string | undefined): naticoCommand | undefined {
		return this.modules.find((cmd) => {
			if (cmd.name == command) {
				return true;
			}
			if (cmd.aliases) {
				if (cmd.aliases.includes(<string>command)) {
					return true;
				}
			}
			return false;
		});
	}
	/**
	 * Check if commands have slash data and if they do it will activete it
	 * be carefull to no accidentally enable them globally,
	 * first searches if the command is already enabled and if it changed since and edit it accordingly otherwise creates a command
	 * also deletes unused slash commands
	 * @param guildID - Specific guild to enable slash commands on
	 * @returns - List of enabled commands
	 */
	async enableSlash(guildID?: bigint) {
		const slashed = this.slashed();
		await upsertSlashCommands(slashed, guildID);
		return slashed;
	}
	slashed() {
		const commands: EditGlobalApplicationCommand[] = [];
		const data = this.modules.filter(
			(command) => (command.enabled && command.slash) || false
		);
		data.forEach((command: naticoCommand) => {
			const slashdata: EditGlobalApplicationCommand = {
				name: command.name || command.id,
				description: command.description || 'no description',
			};
			//@ts-ignore - types are a lie
			if (command.options) slashdata['options'] = command.options;
			commands.push(slashdata);
		});
		return commands;
	}

	/**
	 * Does nothing :kek:
	 */
	// public handleSlash() {
	// 	return false;
	// }
	/**
	 * Used to load all commands
	 */
	public async loadALL() {
		const filepaths = this.readdirRecursive(this.directory);
		for (let filepath of filepaths) {
			filepath = join(filepath);
			if (filepath) await this.load(filepath);
		}
		console.log(
			blue('[:]'),
			yellow(`Loaded`),
			green(`${this.modules.size}`),
			yellow('commands,'),
			blue('slashed'),
			green(
				`${
					this.modules.filter((command) => {
						if (command.slash) return true;
						else return false;
					}).size
				},`
			),
			blue('disabled'),
			green(
				`${
					this.modules.filter((command) => {
						if (!command.enabled) return true;
						else return false;
					}).size
				}`
			)
		);
		return this;
	}
}
