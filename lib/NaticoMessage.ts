import {
	DiscordenoMessage,
	naticoInteraction,
	InteractionApplicationCommandCallbackData,
	sendInteractionResponse,
	GuildMember,
	DiscordenoMember,
	Embed,
	Attachment,
	Interaction,
	DiscordenoChannel,
	ApplicationCommandInteractionData,
	CreateEmbedsButtonsPagination,
} from '../deps.ts';
import { NaticoClient } from '../src/client.ts';
export class NaticoMessage {
	isSlash: boolean;
	data: ApplicationCommandInteractionData | undefined;
	client: NaticoClient;
	type: number | undefined;
	id: string | undefined;
	guildId: string | undefined;
	channelId: string | undefined;
	member: DiscordenoMember | undefined;
	authorId: string | undefined;
	tag: string;
	isBot: boolean;
	timestamp: string | number | undefined;
	embeds: string | Embed | undefined | string | Embed[] | any;
	attachments: Attachment | undefined | any;
	content: string | undefined;
	flags: number | undefined;
	message: DiscordenoMessage | undefined;
	interaction: Interaction | undefined;
	token: string | undefined;
	name: string | undefined;
	channel: DiscordenoChannel | undefined;
	constructor({
		client,
		message,
		interaction,
	}: {
		client: NaticoClient;
		message?: DiscordenoMessage;
		interaction?: naticoInteraction;
	}) {
		this.isSlash = interaction ? true : false;
		this.data = interaction?.data || undefined;
		this.client = client;
		this.type = message?.type || interaction?.type;
		this.id = message?.id.toString() || interaction?.id;
		this.guildId = message?.guildId!.toString() || interaction?.guildId;
		this.channelId = message?.channelId!.toString() || interaction?.channelId;
		this.member = message?.member || interaction?.member;
		this.data = interaction?.data;
		this.authorId = message?.authorId?.toString() || interaction?.user?.id;
		this.tag = `${this!.member!.username}#${this!.member!.discriminator}`;
		this.isBot = message?.isBot || false;
		this.timestamp = message?.timestamp || undefined;
		this.embeds = message?.embeds || undefined;
		this.attachments = message?.attachments || undefined;
		this.content = message?.content || undefined;
		this.flags = message?.flags || undefined;
		this.message = message || undefined;
		this.interaction = interaction || undefined;
		this.token = interaction?.token || undefined;
		this.name = interaction?.data?.name || undefined;
		this.channel =
			message?.channel ||
			client.cache.channels.get(
				BigInt(interaction?.channelId || '815328569051971595')
			);
	}
	reply(...args) {
		if (this.message) return this.message.reply(...args);
		if (this.interaction) {
			if (args[0].embed) {
				args[0].embeds = [args[0].embed];
				delete args[0].embed;
			}

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
		return CreateEmbedsButtonsPagination(
			BigInt(this.id),
			BigInt(this.channelId),
			BigInt(this.authorId),
			pages,
			...args
		);
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
