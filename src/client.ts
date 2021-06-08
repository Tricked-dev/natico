import CommandHandler from '../lib/commands/commandHandler.ts';
import TaskHandler from '../lib/tasks/taskHandler.ts';
import ListenerHandler from '../lib/listeners/listenerHandler.ts';
import {
	join,
	settings,
	startBot,
	token,
	Collection,
	Events,
} from '../deps.ts';
import { MessageCollector, ButtonCollector } from '../lib/interfaces.ts';
import { EventEmitter } from '../lib/EventEmitter.ts';
import { NaticoUtil } from '../lib/util.ts';
import { cache, botId } from '../deps.ts';
export class NaticoClient extends EventEmitter {
	public cache: typeof cache;
	public id: bigint;
	public events: Events;
	public librariesio: string;
	public buttonCollectors: Collection<bigint, ButtonCollector>;
	public messageCollectors: Collection<bigint, MessageCollector>;
	public util: NaticoUtil;
	constructor() {
		super();
		this.librariesio = settings.librariesio;
		this.cache = cache;
		this.id = botId;
		this.events = {};
		this.buttonCollectors = new Collection<bigint, ButtonCollector>();
		this.messageCollectors = new Collection<bigint, MessageCollector>();
		this.util = new NaticoUtil(this);
	}
	addEvent(event: string) {
		this.events[event] = (...args) => this.emit(event, args);
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
		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
		});
		//-----------------------
		//------Loaders----------
		//-----------------------
		await this.commandHandler.loadALL();
		await this.taskHandler.loadALL();
		await this.listenerHandler.loadALL();
		//-----------------------
		//------Starters---------
		//-----------------------
		return this.login();
	}
	login() {
		return startBot({
			token,
			intents: ['Guilds', 'GuildMessages', 'GuildVoiceStates'],
			eventHandlers: this.events,
		});
	}
}
