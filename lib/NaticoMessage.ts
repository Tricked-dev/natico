import {
	DiscordenoMessage,
	naticoInteraction,
	InteractionApplicationCommandCallbackData,
	sendInteractionResponse,
	DiscordenoMember,
	Embed,
	Attachment,
	Interaction,
	DiscordenoChannel,
	ApplicationCommandInteractionData,
	DiscordenoGuild,
	InteractionGuildMember,
	structures,
} from '../deps.ts';
import { NaticoClient } from '../src/client.ts';
export class NaticoMessage {
	isSlash!: boolean;
	data!: ApplicationCommandInteractionData;
	client!: NaticoClient;
	type!: number;
	id!: string;
	guildId!: string;
	channelId!: string;
	member!: DiscordenoMember;
	authorId!: string;
	tag!: string;
	isBot!: boolean;
	timestamp!: string | number;
	embeds!: string | Embed | undefined | string | Embed[] | any;
	attachments!: Attachment | undefined | any;
	content!: string;
	flags!: number;
	message!: DiscordenoMessage;
	interaction!: Interaction;
	token!: string;
	name!: string;
	channel!: DiscordenoChannel;
	guild!: DiscordenoGuild;
	constructor({
		client,
		message,
		interaction,
	}: {
		client: NaticoClient;
		message?: DiscordenoMessage;
		interaction?: Interaction;
	}) {
		this.isSlash = interaction ? true : false;
		this.type = message?.type || interaction?.type!;
		this.client = client;
		if (interaction) {
			this.interaction = interaction;
			this.data = interaction?.data!;
			this.id = interaction?.id;
			this.guild = this.client.cache.guilds.get(BigInt(interaction?.guildId!))!;
			this.guildId = interaction?.guildId!;
			this.channelId = interaction?.channelId!;
			/* Note to get member use the initialize function */
			this.authorId = interaction?.user?.id!;
			this.tag = `${interaction?.member!.user.username}#${
				interaction?.member!.user.discriminator
			}`;
			this.token = interaction?.token || undefined!;
			this.name = interaction?.data?.name || undefined!;
		}
		if (message) {
			this.message = message;
			this.isBot = message.isBot;
			this.id = message?.id.toString();
			this.guild = message.guild!;
			this.guildId = message?.guildId!.toString();
			this.channelId = message?.channelId!.toString();
			this.member = message.member!;
			this.authorId = message?.authorId?.toString();
			this.timestamp = message?.timestamp;
			this.tag = message.tag;
			this.embeds = message.embeds;
			this.attachments = message?.attachments;
			this.content = message?.content;
			this.flags = message?.flags!;
			this.channel = message?.channel!;
		}
	}
	reply(...args: any[]) {
		if (!this.isSlash) return this.message.reply(...args);
		if (this.isSlash) {
			if (args[0].embed) {
				args[0].embeds = [args[0].embed];
				delete args[0].embed;
			}
			if (args[0] instanceof Embed) args[0] = { embeds: [args[0]] };
			return this.replyInteraction(...args);
		}
	}
	async replyInteraction(
		data: InteractionApplicationCommandCallbackData
	): Promise<void> {
		return await sendInteractionResponse(BigInt(this.id), this!.token!, {
			type: 4,
			data,
		});
	}
	CreateEmbedsButtonsPagination(pages: any, ...args: any): Promise<void> {
		return this.client.util.CreateEmbedsButtonsPagination(
			BigInt(this.id),
			BigInt(this.channelId),
			BigInt(this.authorId),
			pages,
			...args
		);
	}
	async initialize() {
		this.member = await structures.createDiscordenoMember(
			this.interaction.member!,
			BigInt(this.interaction.guildId)
		);
		this.tag = this.member.tag;
	}
}

/*


/** Id of the interaction */
//   id: string;
//   /** Id of the application this interaction is for */
//   applicationId: string;
//   /** The type of interaction */
//   type: DiscordInteractionTypes;
//   /** The command data payload */
//   data?: ApplicationCommandInteractionData;
//   /** The guild it was sent from */
//   guildId?: string;
//   /** The channel it was sent from */
//   channelId?: string;
//   /** Guild member data for the invoking user, including permissions */
//   member?: InteractionGuildMember;
//   /** User object for the invoking user, if invoked in a DM */
//   user?: User;
//   /** A continuation token for responding to the interaction */
//   token: string;
//   /** Read-only property, always `1` */
//   version: 1;
//   /** For the message the button was attached to */
//   message?: Message;
/*

{
  type: 0,
  timestamp: 1622383703685,
  referencedMessage: null,
  nonce: "848563498337173504",
  id: 848563498900127764n,
  flags: 0,
  embeds: [],
  content: "<@!838065056096059463> eval message",
  components: [],
  channelId: 811240979918618634n,
  attachments: [],
  authorId: 336465356304678913n,
  isBot: false,
  tag: "tricked#3777",
  guildId: 748956745409232945n,
  mentionedUserIds: [ 838065056096059463n ],
  mentionedRoleIds: [],
  mentionedChannelIds: [],
  editedTimestamp: undefined,
  messageReference: undefined,
  bitfield: 0n
}
COPY





*/
