import CommandHandler from '../lib/commands/commandHandler.ts';
import TaskHandler from '../lib/tasks/taskHandler.ts';
import ListenerHandler from '../lib/listeners/listenerHandler.ts';
import { join, settings, startBot, token, Collection } from '../deps.ts';
import { MessageCollector, ButtonCollector } from '../lib/interfaces.ts';
import { NaticoUtil } from '../lib/util.ts';
import { cache, botId } from '../deps.ts';
export class NaticoClient {
	cache: typeof cache;
	id: bigint;
	events: any;
	librariesio: string;
	buttonCollectors: Collection<bigint, ButtonCollector>;
	messageCollectors: Collection<bigint, MessageCollector>;
	util: NaticoUtil;
	constructor() {
		this.librariesio = settings.librariesio;
		this.cache = cache;
		this.id = botId;
		this.events = {};
		this.buttonCollectors = new Collection<bigint, ButtonCollector>();
		this.messageCollectors = new Collection<bigint, MessageCollector>();
		this.util = new NaticoUtil(this);
	}
	taskHandler: TaskHandler = new TaskHandler(this, {
		directory: join(Deno.cwd(), 'src', 'tasks'),
	});
	listenerHandler: ListenerHandler = new ListenerHandler(this, {
		directory: join(Deno.cwd(), 'src', 'listeners'),
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
	async start() {
		//-----------------------
		//------Loaders----------
		//-----------------------
		await this.commandHandler.loadALL();
		await this.taskHandler.loadALL();
		await this.listenerHandler.loadALL();
		//-----------------------
		//------Starters---------
		//-----------------------
		this.taskHandler.startAll();
		this.listenerHandler.startAll();

		await this.login();
	}
	async login() {
		await startBot({
			token,
			intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates'],
			eventHandlers: this.events,
		});
	}
}
//{
// 	interactionCreate(data: Interaction, member) {
// 		if (data.type === DiscordInteractionTypes.ApplicationCommand) {
// 			commandHandler.runSlash(data as unknown as naticoInteraction);
// 		}
// 		if (data.type === DiscordInteractionTypes.Button) {
// 			processButtonCollectors(data, member);
// 		}
// 	},
// 	ready() {
// 		taskHandler.startAll();
// 		// if (settings.dev == true) {
// 		// 	await commandHandler.enableSlash(settings.testserver);
// 		// }

// 		editBotStatus({
// 			activities: [
// 				{
// 					name: 'deno packages',
// 					type: DiscordActivityTypes.Competing,
// 					createdAt: Date.now(),
// 				},
// 			],
// 			status: 'online',
// 		});
// 		console.log(white('[i]'), yellow('Bot succesfully started'));
// 	},
// 	messageCreate(message: DiscordenoMessage) {
// 		commandHandler.handleCommand(message as naticoMessage);
// 	},
// 	messageUpdate(message: DiscordenoMessage) {
// 		commandHandler.handleCommand(message as naticoMessage);
// 	},
// },
