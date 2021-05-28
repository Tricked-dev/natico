import CommandHandler from '../lib/commands/commandHandler.ts';
import TaskHandler from '../lib/tasks/taskHandler.ts';
import { join, settings, startBot, token } from '../deps.ts';
import {
	Interaction,
	naticoInteraction,
	naticoMessage,
	yellow,
	editBotStatus,
	DiscordActivityTypes,
	white,
	DiscordenoMessage,
	DiscordInteractionTypes,
	processButtonCollectors,
	cache,
	botId,
} from '../deps.ts';
export class NaticoClient {
	cache: typeof cache;
	id: bigint;
	constructor() {
		this.cache = cache;
		this.id = botId;
	}
	taskHandler: TaskHandler = new TaskHandler(this, {
		directory: join(Deno.cwd(), 'src', 'tasks'),
	});
	commandHandler: CommandHandler = new CommandHandler(this, {
		directory: join(Deno.cwd(), 'src', 'commands'),
		cooldown: 5000, // 5 seconds
		guildonly: true,
		prefix: () => {
			return settings.prefix;
		},
		owners: settings.ids.owner,
	});
	start() {
		this.commandHandler.loadALL();
		this.taskHandler.loadALL();
		this.login();
	}
	login() {
		const commandHandler = this.commandHandler;
		const taskHandler = this.taskHandler;
		startBot({
			token,
			intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates'],
			eventHandlers: {
				interactionCreate(data: Interaction, member) {
					if (data.type === DiscordInteractionTypes.ApplicationCommand) {
						commandHandler.runSlash(data as unknown as naticoInteraction);
					}
					if (data.type === DiscordInteractionTypes.Button) {
						processButtonCollectors(data, member);
					}
				},
				ready() {
					taskHandler.startAll();
					// if (settings.dev == true) {
					// 	await commandHandler.enableSlash(settings.testserver);
					// }

					editBotStatus({
						activities: [
							{
								name: 'deno packages',
								type: DiscordActivityTypes.Competing,
								createdAt: Date.now(),
							},
						],
						status: 'online',
					});
					console.log(white('[i]'), yellow('Bot succesfully started'));
				},
				messageCreate(message: DiscordenoMessage) {
					commandHandler.handleCommand(message as naticoMessage);
				},
				messageUpdate(message: DiscordenoMessage) {
					commandHandler.handleCommand(message as naticoMessage);
				},
			},
		});
	}
}
