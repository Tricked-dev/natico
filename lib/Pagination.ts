import {
	cache,
	deleteMessage,
	deleteMessages,
	DiscordButtonStyles,
	DiscordMessageComponentTypes,
	editMessage,
	editWebhookMessage,
	fetchMembers,
	getMember,
	botId,
	Emoji,
	snowflakeToBigint,
	structures,
	MessageComponents,
	removeReaction,
	sendInteractionResponse,
	sendMessage,
	ws,
	ApplicationCommandOption,
	Collection,
	DiscordenoChannel,
	DiscordenoGuild,
	DiscordenoMember,
	DiscordenoMessage,
	DiscordenoRole,
	Interaction,
	Permission,
} from '../deps.ts';
import { bot } from '../bot.ts';
import { Embed } from './embed.ts';
import { log } from './logger.ts';

enum Milliseconds {
	WEEK = 1000 * 60 * 60 * 24 * 7,
	DAY = 1000 * 60 * 60 * 24,
	HOUR = 1000 * 60 * 60,
	MINUTE = 1000 * 60,
	SECOND = 1000,
}

/** This function allows to create a pagination using embeds and buttons. **/
export async function CreateEmbedsButtonsPagination(
	messageId: bigint,
	channelId: bigint,
	authorId: bigint,
	embeds: Embed[],
	defaultPage = 1,
	buttonTimeout = Milliseconds.SECOND * 30
) {
	if (embeds.length === 0) return;

	let currentPage = defaultPage;

	const createComponents = (): MessageComponents => [
		{
			type: DiscordMessageComponentTypes.ActionRow,
			components: [
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Previous',
					customId: `${messageId}-Previous`,
					style: DiscordButtonStyles.Primary,
					disabled: currentPage === 1,
					emoji: { name: '⬅️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Jump',
					customId: `${messageId}-Jump`,
					style: DiscordButtonStyles.Primary,
					disabled: embeds.length <= 2,
					emoji: { name: '↗️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Next',
					customId: `${messageId}-Next`,
					style: DiscordButtonStyles.Primary,
					disabled: currentPage >= embeds.length,
					emoji: { name: '➡️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Delete',
					customId: `${messageId}-Delete`,
					style: DiscordButtonStyles.Danger,
					emoji: { name: '🗑️' },
				},
			],
		},
	];

	const embedMessage = await sendMessage(channelId, {
		embed: embeds[currentPage - 1],
		components: createComponents(),
	});

	if (!embedMessage) return;

	if (embeds.length <= 1) return;

	while (true) {
		const collectedButton = await needButton(authorId, messageId, {
			duration: buttonTimeout,
		});

		if (
			!collectedButton ||
			!collectedButton.customId.startsWith(messageId.toString())
		) {
			return;
		}

		const action = collectedButton.customId.split('-')[1];

		switch (action) {
			case 'Next':
				currentPage += 1;
				break;
			// deno-lint-ignore no-case-declarations
			case 'Jump':
				await sendInteractionResponse(
					snowflakeToBigint(collectedButton.interaction.id),
					collectedButton.interaction.token,
					{
						type: 6,
					}
				);

				const question = await sendMessage(
					channelId,
					'To what page would you like to jump? Say `cancel` or `0` to cancel the prompt.'
				);
				const answer = await needMessage(authorId, channelId);
				await deleteMessages(channelId, [question.id, answer.id]).catch(
					log.error
				);

				const newPageNumber = Math.ceil(Number(answer.content));

				if (
					isNaN(newPageNumber) ||
					newPageNumber < 1 ||
					newPageNumber > embeds.length
				) {
					await sendMessage(channelId, 'This is not a valid number!');
					continue;
				}

				currentPage = newPageNumber;

				editWebhookMessage(
					snowflakeToBigint(collectedButton.interaction.applicationId),
					collectedButton.interaction.token,
					{
						messageId: embedMessage.id,
						embeds: [embeds[currentPage - 1]],
						components: createComponents(),
					}
				);

				continue;
			case 'Previous':
				currentPage -= 1;
				break;
			case 'Delete':
				deleteMessage(channelId, embedMessage.id);
				return;
		}

		if (currentPage < 0) {
			currentPage = 0;
		}

		if (currentPage > embeds.length) {
			currentPage = embeds.length - 1;
		}

		await sendInteractionResponse(
			snowflakeToBigint(collectedButton.interaction.id),
			collectedButton.interaction.token,
			{
				type: 7,
				data: {
					embeds: [embeds[currentPage - 1]],
					components: createComponents(),
				},
			}
		).catch(log.error);
	}
}

/** This function should be used when you want to convert milliseconds to a human readable format like 1d5h. */
export function humanizeMilliseconds(milliseconds: number) {
	// Gets ms into seconds
	const time = milliseconds / 1000;
	if (time < 1) return '1s';

	const days = Math.floor(time / 86400);
	const hours = Math.floor((time % 86400) / 3600);
	const minutes = Math.floor(((time % 86400) % 3600) / 60);
	const seconds = Math.floor(((time % 86400) % 3600) % 60);

	const dayString = days ? `${days}d ` : '';
	const hourString = hours ? `${hours}h ` : '';
	const minuteString = minutes ? `${minutes}m ` : '';
	const secondString = seconds ? `${seconds}s ` : '';

	return `${dayString}${hourString}${minuteString}${secondString}`;
}

/** This function helps convert a string like 1d5h to milliseconds. */
export function stringToMilliseconds(text: string) {
	const matches = text.match(/(\d+[w|d|h|m|s]{1})/g);
	if (!matches) return;

	let total = 0;

	for (const match of matches) {
		// Finds the first of these letters
		const validMatch = /(w|d|h|m|s)/.exec(match);
		// if none of them were found cancel
		if (!validMatch) return;
		// Get the number which should be before the index of that match
		const number = match.substring(0, validMatch.index);
		// Get the letter that was found
		const [letter] = validMatch;
		if (!number || !letter) return;

		let multiplier = Milliseconds.SECOND;
		switch (letter.toLowerCase()) {
			case `w`:
				multiplier = Milliseconds.WEEK;
				break;
			case `d`:
				multiplier = Milliseconds.DAY;
				break;
			case `h`:
				multiplier = Milliseconds.HOUR;
				break;
			case `m`:
				multiplier = Milliseconds.MINUTE;
				break;
		}

		const amount = number ? parseInt(number, 10) : undefined;
		if (!amount) return;

		total += amount * multiplier;
	}

	return total;
}

/** Use this function to send an embed with ease. */
export function sendEmbed(channelId: bigint, embed: Embed, content?: string) {
	return sendMessage(channelId, { content, embed });
}

/** Use this function to edit an embed with ease. */
export function editEmbed(
	message: DiscordenoMessage,
	embed: Embed,
	content?: string
) {
	return editMessage(message, { content, embed });
}

// Very important to make sure files are reloaded properly
let uniqueFilePathCounter = 0;
let paths: string[] = [];

/** This function allows reading all files in a folder. Useful for loading/reloading commands, monitors etc */
export async function importDirectory(path: string) {
	path = path.replaceAll('\\', '/');
	const files = Deno.readDirSync(Deno.realPathSync(path));
	const folder = path.substring(path.indexOf('/src/') + 5);

	if (!folder.includes('/')) log.info(`Loading ${folder}...`);

	for (const file of files) {
		if (!file.name) continue;

		const currentPath = `${path}/${file.name}`;
		if (file.isFile) {
			if (!currentPath.endsWith('.ts')) continue;
			paths.push(
				`import "${Deno.mainModule.substring(
					0,
					Deno.mainModule.lastIndexOf('/')
				)}/${currentPath.substring(
					currentPath.indexOf('src/')
				)}#${uniqueFilePathCounter}";`
			);
			continue;
		}

		await importDirectory(currentPath);
	}

	uniqueFilePathCounter++;
}

/** Imports all everything in fileloader.ts */
export async function fileLoader() {
	await Deno.writeTextFile(
		'fileloader.ts',
		paths.join('\n').replaceAll('\\', '/')
	);
	await import(
		`${Deno.mainModule.substring(
			0,
			Deno.mainModule.lastIndexOf('/')
		)}/fileloader.ts#${uniqueFilePathCounter}`
	);
	paths = [];
}

export function getTime() {
	const now = new Date();
	const hours = now.getHours();
	const minute = now.getMinutes();

	let hour = hours;
	let amOrPm = `AM`;
	if (hour > 12) {
		amOrPm = `PM`;
		hour = hour - 12;
	}

	return `${hour >= 10 ? hour : `0${hour}`}:${
		minute >= 10 ? minute : `0${minute}`
	} ${amOrPm}`;
}

export function getCurrentLanguage(guildId: bigint) {
	return (
		bot.guildLanguages.get(guildId) ||
		cache.guilds.get(guildId)?.preferredLocale ||
		'en_US'
	);
}

/** This function allows to create a pagination using embeds and reactions Requires GUILD_MESSAGE_REACTIONS intent **/
export async function createEmbedsPagination(
	channelId: bigint,
	authorId: bigint,
	embeds: Embed[],
	defaultPage = 1,
	reactionTimeout = Milliseconds.SECOND * 30,
	reactions: {
		[emoji: string]: (
			setPage: (newPage: number) => void,
			currentPage: number,
			pageCount: number,
			deletePagination: () => void
		) => Promise<unknown>;
	} = {
		// deno-lint-ignore require-await
		'◀️': async (setPage, currentPage) => setPage(Math.max(currentPage - 1, 1)),
		'↗️': async (setPage) => {
			const question = await sendMessage(
				channelId,
				'To what page would you like to jump? Say `cancel` or `0` to cancel the prompt.'
			);
			const answer = await needMessage(authorId, channelId);
			await deleteMessages(channelId, [question.id, answer.id]).catch(
				log.error
			);

			const newPageNumber = Math.ceil(Number(answer.content));

			if (isNaN(newPageNumber)) {
				return await sendMessage(channelId, 'This is not a valid number!');
			}

			if (newPageNumber < 1 || newPageNumber > embeds.length) {
				return await sendMessage(channelId, `This is not a valid page!`);
			}

			setPage(newPageNumber);
		},
		// deno-lint-ignore require-await
		'▶️': async (setPage, currentPage, pageCount) =>
			setPage(Math.min(currentPage + 1, pageCount)),
		// deno-lint-ignore require-await
		'🗑️': async (_setPage, _currentPage, _pageCount, deletePagination) =>
			deletePagination(),
	}
) {
	if (embeds.length === 0) return;

	let currentPage = defaultPage;
	const embedMessage = await sendEmbed(channelId, embeds[currentPage - 1]);

	if (!embedMessage) return;

	if (embeds.length <= 1) return;

	await embedMessage
		.addReactions(Object.keys(reactions), true)
		.catch(log.error);

	let isEnded = false;

	while (!isEnded) {
		if (!embedMessage) return;

		const reaction = await needReaction(authorId, embedMessage.id, {
			duration: reactionTimeout,
		});
		if (!reaction) return;

		if (embedMessage.guildId) {
			await removeReaction(embedMessage.channelId, embedMessage.id, reaction, {
				userId: authorId,
			}).catch(log.error);
		}

		if (reactions[reaction]) {
			await reactions[reaction](
				(newPage) => {
					currentPage = newPage;
				},
				currentPage,
				embeds.length,
				async () => {
					isEnded = true;
					await embedMessage.delete().catch(log.error);
				}
			);
		}

		if (
			isEnded ||
			!embedMessage ||
			!(await editEmbed(embedMessage, embeds[currentPage - 1]).catch(log.error))
		) {
			return;
		}
	}
}

/** This function allows to create a pagination using embeds and buttons. **/
export async function createEmbedsButtonsPagination(
	messageId: bigint,
	channelId: bigint,
	authorId: bigint,
	embeds: Embed[],
	defaultPage = 1,
	buttonTimeout = Milliseconds.SECOND * 30
) {
	if (embeds.length === 0) return;

	let currentPage = defaultPage;

	const createComponents = (): MessageComponents => [
		{
			type: DiscordMessageComponentTypes.ActionRow,
			components: [
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Previous',
					customId: `${messageId}-Previous`,
					style: DiscordButtonStyles.Primary,
					disabled: currentPage === 1,
					emoji: { name: '⬅️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Jump',
					customId: `${messageId}-Jump`,
					style: DiscordButtonStyles.Primary,
					disabled: embeds.length <= 2,
					emoji: { name: '↗️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Next',
					customId: `${messageId}-Next`,
					style: DiscordButtonStyles.Primary,
					disabled: currentPage >= embeds.length,
					emoji: { name: '➡️' },
				},
				{
					type: DiscordMessageComponentTypes.Button,
					label: 'Delete',
					customId: `${messageId}-Delete`,
					style: DiscordButtonStyles.Danger,
					emoji: { name: '🗑️' },
				},
			],
		},
	];

	const embedMessage = await sendMessage(channelId, {
		embed: embeds[currentPage - 1],
		components: createComponents(),
	});

	if (!embedMessage) return;

	if (embeds.length <= 1) return;

	let isEnded = false;

	while (!isEnded) {
		if (!embedMessage) {
			isEnded = true;
			break;
		}

		const collectedButton = await needButton(authorId, embedMessage.channelId, {
			duration: buttonTimeout,
		});

		if (
			!collectedButton ||
			!collectedButton.customId.startsWith(messageId.toString())
		) {
			return;
		}

		const action = collectedButton.customId.split('-')[1];

		switch (action) {
			case 'Next':
				currentPage += 1;
				break;
			// deno-lint-ignore no-case-declarations
			case 'Jump':
				await sendInteractionResponse(
					snowflakeToBigint(collectedButton.interaction.id),
					collectedButton.interaction.token,
					{
						type: 6,
					}
				);

				const question = await sendMessage(
					channelId,
					'To what page would you like to jump? Say `cancel` or `0` to cancel the prompt.'
				);
				const answer = await needMessage(authorId, channelId);
				await deleteMessages(channelId, [question.id, answer.id]).catch(
					log.error
				);

				const newPageNumber = Math.ceil(Number(answer.content));

				if (
					isNaN(newPageNumber) ||
					newPageNumber < 1 ||
					newPageNumber > embeds.length
				) {
					await sendMessage(channelId, 'This is not a valid number!');
					continue;
				}

				currentPage = newPageNumber;

				editWebhookMessage(
					snowflakeToBigint(collectedButton.interaction.applicationId),
					collectedButton.interaction.token,
					{
						messageId: embedMessage.id,
						embeds: [embeds[currentPage - 1]],
						components: createComponents(),
					}
				);

				continue;
			case 'Previous':
				currentPage -= 1;
				break;
			case 'Delete':
				deleteMessage(channelId, embedMessage.id);
				isEnded = true;
				break;
		}

		if (
			isEnded ||
			!embedMessage ||
			!(await sendInteractionResponse(
				snowflakeToBigint(collectedButton.interaction.id),
				collectedButton.interaction.token,
				{
					type: 7,
					data: {
						embeds: [embeds[currentPage - 1]],
						components: createComponents(),
					},
				}
			).catch(log.error))
		) {
			return;
		}
	}
}

export function emojiUnicode(emoji: Emoji) {
	return emoji.animated || emoji.id
		? `<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>`
		: emoji.name || '';
}

export async function fetchMember(guildId: bigint, id: bigint | string) {
	const userId =
		typeof id === 'string'
			? id.startsWith('<@')
				? BigInt(id.substring(id.startsWith('<@!') ? 3 : 2, id.length - 1))
				: BigInt(id)
			: id;

	const guild = cache.guilds.get(guildId);
	if (!guild) return;

	const cachedMember = cache.members.get(userId);
	if (cachedMember) return cachedMember;

	const shardId = calculateShardId(guildId);

	const shard = ws.shards.get(shardId);
	// When gateway is dying
	if (shard?.queueCounter && shard.queueCounter > 110) {
		return getMember(guildId, userId).catch(() => undefined);
	}

	// Fetch from gateway as it is much better than wasting limited HTTP calls.
	const member = await fetchMembers(guildId, shardId, {
		userIds: [userId],
		limit: 1,
	}).catch(() => undefined);

	return member?.first();
}

export function calculateShardId(guildId: bigint) {
	if (ws.maxShards === 1) return 0;

	return Number((guildId >> 22n) % BigInt(ws.maxShards - 1));
}

export async function needMessage(
	memberId: bigint,
	channelId: bigint,
	options: MessageCollectorOptions & { amount?: 1 }
): Promise<DiscordenoMessage>;
export async function needMessage(
	memberId: bigint,
	channelId: bigint,
	options: MessageCollectorOptions & { amount?: number }
): Promise<DiscordenoMessage[]>;
export async function needMessage(
	memberId: bigint,
	channelId: bigint
): Promise<DiscordenoMessage>;
export async function needMessage(
	memberId: bigint,
	channelId: bigint,
	options?: MessageCollectorOptions
) {
	const messages = await collectMessages({
		key: memberId,
		channelId,
		createdAt: Date.now(),
		filter: options?.filter || ((msg) => memberId === msg.authorId),
		amount: options?.amount || 1,
		duration: options?.duration || Milliseconds.MINUTE * 5,
	});

	return (options?.amount || 1) > 1 ? messages : messages[0];
}

export function collectMessages(
	options: CollectMessagesOptions
): Promise<DiscordenoMessage[]> {
	return new Promise((resolve, reject) => {
		bot.messageCollectors
			.get(options.key)
			?.reject(
				'A new collector began before the user responded to the previous one.'
			);

		bot.messageCollectors.set(options.key, {
			...options,
			messages: [],
			resolve,
			reject,
		});
	});
}

export async function needReaction(
	memberId: bigint,
	messageId: bigint,
	options: ReactionCollectorOptions & { amount?: 1 }
): Promise<string>;
export async function needReaction(
	memberId: bigint,
	messageId: bigint,
	options: ReactionCollectorOptions & { amount?: number }
): Promise<string[]>;
export async function needReaction(
	memberId: bigint,
	messageId: bigint
): Promise<string>;
export async function needReaction(
	memberId: bigint,
	messageId: bigint,
	options?: ReactionCollectorOptions
) {
	const reactions = await collectReactions({
		key: memberId,
		messageId,
		createdAt: Date.now(),
		filter: options?.filter || ((userId) => memberId === userId),
		amount: options?.amount || 1,
		duration: options?.duration || Milliseconds.MINUTE * 5,
	});

	return (options?.amount || 1) > 1 ? reactions : reactions[0];
}

export function collectReactions(
	options: CollectReactionsOptions
): Promise<string[]> {
	return new Promise((resolve, reject) => {
		bot.reactionCollectors
			.get(options.key)
			?.reject(
				'A new collector began before the user responded to the previous one.'
			);
		bot.reactionCollectors.set(options.key, {
			...options,
			reactions: [] as string[],
			resolve,
			reject,
		});
	});
}

export function processReactionCollectors(
	message: DiscordenoMessage | { id: string },
	emoji: Partial<Emoji>,
	userId: bigint
) {
	// Ignore bot reactions
	if (userId === botId) return;

	const emojiName = emoji.id || emoji.name;
	if (!emojiName) return;

	const collector = bot.reactionCollectors.get(userId);
	if (!collector) return;

	// This user has no collectors pending or the message is in a different channel
	if (!collector || message.id !== collector.messageId) return;
	// This message is a response to a collector. Now running the filter function.
	if (!collector.filter(userId, emojiName, message)) return;

	// If the necessary amount has been collected
	if (
		collector.amount === 1 ||
		collector.amount === collector.reactions.length + 1
	) {
		// Remove the collector
		bot.reactionCollectors.delete(userId);
		// Resolve the collector
		return collector.resolve([...collector.reactions, emojiName]);
	}

	// More reactions still need to be collected
	collector.reactions.push(emojiName);
}

// BUTTONS

export async function needButton(
	memberId: bigint,
	messageId: bigint,
	options: ButtonCollectorOptions & { amount?: 1 }
): Promise<ButtonCollectorReturn>;
export async function needButton(
	memberId: bigint,
	messageId: bigint,
	options: ButtonCollectorOptions & { amount?: number }
): Promise<ButtonCollectorReturn[]>;
export async function needButton(
	memberId: bigint,
	messageId: bigint
): Promise<ButtonCollectorReturn>;
export async function needButton(
	memberId: bigint,
	messageId: bigint,
	options?: ButtonCollectorOptions
) {
	const buttons = await collectButtons({
		key: memberId,
		messageId,
		createdAt: Date.now(),
		filter:
			options?.filter ||
			((_msg, member) => (member ? memberId === member.id : true)),
		amount: options?.amount || 1,
		duration: options?.duration || Milliseconds.MINUTE * 5,
	});

	return (options?.amount || 1) > 1 ? buttons : buttons[0];
}

export function collectButtons(
	options: CollectButtonOptions
): Promise<ButtonCollectorReturn[]> {
	return new Promise((resolve, reject) => {
		bot.buttonCollectors
			.get(options.key)
			?.reject(
				'A new collector began before the user responded to the previous one.'
			);
		bot.buttonCollectors.set(options.key, {
			...options,
			buttons: [] as ButtonCollectorReturn[],
			resolve,
			reject,
		});
	});
}

export async function processButtonCollectors(
	data: Omit<Interaction, 'member'>,
	member?: DiscordenoMember
) {
	// All buttons will require a message
	if (!data.message) return;

	// If this message is not pending a button response, we can ignore
	const collector = bot.buttonCollectors.get(
		member ? member.id : snowflakeToBigint(data.message.id)
	);
	if (!collector) return;

	// This message is a response to a collector. Now running the filter function.
	if (
		!collector.filter(
			await structures.createDiscordenoMessage(data.message),
			member
		)
	) {
		return;
	}

	// If the necessary amount has been collected
	if (
		collector.amount === 1 ||
		collector.amount === collector.buttons.length + 1
	) {
		// Remove the collector
		bot.buttonCollectors.delete(snowflakeToBigint(data.message.id));
		// Resolve the collector
		return collector.resolve([
			...collector.buttons,
			{
				customId:
					data.data?.customId || `No customId provided for this button.`,
				interaction: data,
				member,
			},
		]);
	}

	// More buttons still need to be collected
	collector.buttons.push({
		customId: data.data?.customId || `No customId provided for this button.`,
		interaction: data,
		member,
	});
}

export interface BaseCollectorOptions {
	/** The amount of messages to collect before resolving. Defaults to 1 */
	amount?: number;
	/** The amount of milliseconds this should collect for before expiring. Defaults to 5 minutes. */
	duration?: number;
}

export interface MessageCollectorOptions extends BaseCollectorOptions {
	/** Function that will filter messages to determine whether to collect this message. Defaults to making sure the message is sent by the same member. */
	filter?: (message: DiscordenoMessage) => boolean;
	/** The amount of messages to collect before resolving. Defaults to 1 */
	amount?: number;
	/** The amount of milliseconds this should collect for before expiring. Defaults to 5 minutes. */
	duration?: number;
}

export interface ReactionCollectorOptions extends BaseCollectorOptions {
	/** Function that will filter messages to determine whether to collect this message. Defaults to making sure the message is sent by the same member. */
	filter?: (
		userId: bigint,
		reaction: string,
		message: DiscordenoMessage | { id: string }
	) => boolean;
}

export interface BaseCollectorCreateOptions {
	/** The unique key that will be used to get responses for this. Ideally, meant to be for member id. */
	key: bigint;
	/** The amount of messages to collect before resolving. */
	amount: number;
	/** The timestamp when this collector was created */
	createdAt: number;
	/** The duration in milliseconds how long this collector should last. */
	duration: number;
}

export interface CollectMessagesOptions extends BaseCollectorCreateOptions {
	/** The channel Id where this is listening to */
	channelId: bigint;
	/** Function that will filter messages to determine whether to collect this message */
	filter: (message: DiscordenoMessage) => boolean;
}

export interface CollectReactionsOptions extends BaseCollectorCreateOptions {
	/** The message Id where this is listening to */
	messageId: bigint;
	/** Function that will filter messages to determine whether to collect this message */
	filter: (
		userId: bigint,
		reaction: string,
		message: DiscordenoMessage | { id: string }
	) => boolean;
}

export interface MessageCollector extends CollectMessagesOptions {
	resolve: (
		value: DiscordenoMessage[] | PromiseLike<DiscordenoMessage[]>
	) => void;
	// deno-lint-ignore no-explicit-any
	reject: (reason?: any) => void;
	/** Where the messages are stored if the amount to collect is more than 1. */
	messages: DiscordenoMessage[];
}

export interface ReactionCollector extends CollectReactionsOptions {
	resolve: (value: string[] | PromiseLike<string[]>) => void;
	// deno-lint-ignore no-explicit-any
	reject: (reason?: any) => void;
	/** Where the reactions are stored if the amount to collect is more than 1. */
	reactions: string[];
}

export interface CollectButtonOptions extends BaseCollectorCreateOptions {
	/** The message Id where this is listening to */
	messageId: bigint;
	/** Function that will filter messages to determine whether to collect this message */
	filter: (message: DiscordenoMessage, member?: DiscordenoMember) => boolean;
}

export interface ButtonCollector extends CollectButtonOptions {
	resolve: (
		value: ButtonCollectorReturn[] | PromiseLike<ButtonCollectorReturn[]>
	) => void;
	// deno-lint-ignore no-explicit-any
	reject: (reason?: any) => void;
	/** Where the buttons are stored if the amount to collect is more than 1. */
	buttons: ButtonCollectorReturn[];
}

export interface ButtonCollectorOptions extends BaseCollectorOptions {
	/** Function that will filter messages to determine whether to collect this message. Defaults to making sure the message is sent by the same member. */
	filter?: (message: DiscordenoMessage, member?: DiscordenoMember) => boolean;
}

export interface ButtonCollectorReturn {
	customId: string;
	interaction: Omit<Interaction, 'member'>;
	member?: DiscordenoMember;
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;

type Identity<T> = { [P in keyof T]: T[P] };

// Define each of the types here
type BaseDefinition = {
	missing?: (message: DiscordenoMessage) => unknown;
	lowercase?: boolean;
	minimum?: number;
	maximum?: number;
	defaultValue?: unknown;
};
type BooleanArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'boolean';
};
type BooleanOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'boolean';
		required: false;
	};
type StringArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'string' | '...strings' | 'subcommand' | 'snowflake';
};
type StringOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'string' | '...strings' | 'subcommand' | 'snowflake';
		required: false;
	};
type MultiStringArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: '...snowflake';
	};
type MultiStringOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: '...snowflake';
		required: false;
	};
type NumberArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'number' | 'duration';
};
type NumberOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'number' | 'duration';
		required: false;
	};
type EmojiArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'emoji';
};
type EmojiOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'emoji';
		required: false;
	};
type MultiEmojiArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: '...emojis';
	};
type MultiEmojiOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: '...emojis';
		required: false;
	};
type MemberArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'member';
};
type MemberOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'member';
		required: false;
	};
type RoleArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'role';
};
type RoleOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'role';
		required: false;
	};
type MultiRoleArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: '...roles';
};
type MultiRoleOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: '...roles';
		required: false;
	};
type ChannelArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type:
		| 'categorychannel'
		| 'newschannel'
		| 'textchannel'
		| 'guildtextchannel'
		| 'voicechannel';
};
type ChannelOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type:
			| 'categorychannel'
			| 'newschannel'
			| 'textchannel'
			| 'guildtextchannel'
			| 'voicechannel';
		required: false;
	};
type CommandArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'command' | 'nestedcommand';
};
type CommandOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'command' | 'nestedcommand';
		required: false;
	};
type GuildArgumentDefinition<N extends string = string> = BaseDefinition & {
	name: N;
	type: 'guild';
};
type GuildOptionalArgumentDefinition<N extends string = string> =
	BaseDefinition & {
		name: N;
		type: 'guild';
		required: false;
	};

// Add each of known ArgumentDefinitions to this union.
export type ArgumentDefinition =
	| BooleanArgumentDefinition
	| StringArgumentDefinition
	| StringOptionalArgumentDefinition
	| MultiStringArgumentDefinition
	| MultiStringOptionalArgumentDefinition
	| NumberArgumentDefinition
	| EmojiArgumentDefinition
	| MultiEmojiArgumentDefinition
	| EmojiOptionalArgumentDefinition
	| MultiEmojiOptionalArgumentDefinition
	| MemberArgumentDefinition
	| RoleArgumentDefinition
	| MultiRoleArgumentDefinition
	| RoleOptionalArgumentDefinition
	| MultiRoleOptionalArgumentDefinition
	| ChannelOptionalArgumentDefinition
	| ChannelArgumentDefinition
	| CommandArgumentDefinition
	| GuildArgumentDefinition;

// OPTIONALS MUST BE FIRST!!!
export type ConvertArgumentDefinitionsToArgs<
	T extends readonly ArgumentDefinition[]
> = Identity<
	UnionToIntersection<
		{
			[P in keyof T]: T[P] extends BooleanOptionalArgumentDefinition<infer N>
				? { [_ in N]?: boolean }
				: T[P] extends BooleanArgumentDefinition<infer N>
				? { [_ in N]: boolean }
				: T[P] extends StringOptionalArgumentDefinition<infer N>
				? { [_ in N]?: string }
				: T[P] extends StringArgumentDefinition<infer N>
				? { [_ in N]: string }
				: T[P] extends MultiStringOptionalArgumentDefinition<infer N>
				? { [_ in N]?: string[] }
				: T[P] extends MultiStringArgumentDefinition<infer N>
				? { [_ in N]: string[] }
				: T[P] extends NumberOptionalArgumentDefinition<infer N>
				? { [_ in N]?: number }
				: T[P] extends NumberArgumentDefinition<infer N>
				? { [_ in N]: number }
				: T[P] extends EmojiOptionalArgumentDefinition<infer N>
				? { [_ in N]?: string }
				: T[P] extends EmojiArgumentDefinition<infer N>
				? { [_ in N]: string }
				: T[P] extends MultiEmojiOptionalArgumentDefinition<infer N>
				? { [_ in N]?: string[] }
				: T[P] extends MultiEmojiArgumentDefinition<infer N>
				? { [_ in N]: string[] }
				: T[P] extends MemberOptionalArgumentDefinition<infer N>
				? { [_ in N]?: DiscordenoMember }
				: T[P] extends MemberArgumentDefinition<infer N>
				? { [_ in N]: DiscordenoMember }
				: T[P] extends RoleOptionalArgumentDefinition<infer N>
				? { [_ in N]?: DiscordenoRole }
				: T[P] extends RoleArgumentDefinition<infer N>
				? { [_ in N]: DiscordenoRole }
				: T[P] extends MultiRoleOptionalArgumentDefinition<infer N>
				? { [_ in N]?: DiscordenoRole[] }
				: T[P] extends MultiRoleArgumentDefinition<infer N>
				? { [_ in N]: DiscordenoRole[] }
				: T[P] extends ChannelOptionalArgumentDefinition<infer N>
				? { [_ in N]?: DiscordenoChannel }
				: T[P] extends ChannelArgumentDefinition<infer N>
				? { [_ in N]: DiscordenoChannel }
				: T[P] extends CommandOptionalArgumentDefinition<infer N>
				? { [_ in N]?: Command<T> }
				: T[P] extends CommandArgumentDefinition<infer N>
				? { [_ in N]: Command<T> }
				: T[P] extends GuildOptionalArgumentDefinition<infer N>
				? { [_ in N]?: DiscordenoGuild }
				: T[P] extends GuildArgumentDefinition<infer N>
				? { [_ in N]: DiscordenoGuild }
				: never;
		}[number]
	>
>;

export interface Command<T extends readonly ArgumentDefinition[]> {
	/** The name of the command */
	name: string;
	/** The aliases for the command */
	aliases?: string[];
	/** Whether the command should only be available in dms. Default: false */
	dmOnly?: boolean;
	/** Whether the command should only be available in guilds. Default: false */
	guildOnly?: boolean;
	/** Whether the command shouly only be available in nsfw Channels. Default: false (DMs are not nsfw) */
	nsfw?: boolean;
	permissionLevels?:
		| PermissionLevels[]
		| ((
				message: DiscordenoMessage,
				command: Command<T>
		  ) => boolean | Promise<boolean>);
	botServerPermissions?: Permission[];
	botChannelPermissions?: Permission[];
	userServerPermissions?: Permission[];
	userChannelPermissions?: Permission[];
	/** The description of the command */
	description?: string;
	/** The command usage */
	usage?: string | string[];
	/** Whether the command should have a cooldown */
	cooldown?: {
		/** How long the user needs to wait after the first execution until he can use the command again */
		seconds: number;
		/** How often the user is allowed to use the command until he is in cooldown */
		allowedUses?: number;
	};
	/** The arguments for this command */
	arguments?: T;
	/** The subcommands for this command */
	subcommands?: Collection<string, Command<T>>;
	/** The slash command functionality for this command */
	slash?: DiscordenoSlashCommand;
	/** The function which will be executed by the command */
	execute?: (
		message: DiscordenoMessage,
		args: ConvertArgumentDefinitionsToArgs<T>,
		guild?: DiscordenoGuild
	) => unknown | Promise<unknown>;
}

export interface Argument {
	name: string;
	execute<T extends readonly ArgumentDefinition[]>(
		arg: CommandArgument,
		parameter: string[],
		message: DiscordenoMessage,
		command: Command<T>
	): unknown;
}

export interface CommandArgument {
	/** The name of the argument. Useful for when you need to alert the user X arg is missing. */
	name: string;
	/** The type of the argument you would like. Defaults to string. */
	type?:
		| 'number'
		| 'emoji'
		| '...emojis'
		| 'string'
		| '...strings'
		| 'boolean'
		| 'subcommand'
		| 'member'
		| 'role'
		| '...roles'
		| 'categorychannel'
		| 'newschannel'
		| 'textchannel'
		| 'guildtextchannel'
		| 'voicechannel'
		| 'command'
		| 'duration'
		| 'guild'
		| 'snowflake'
		| '...snowflake'
		| 'nestedcommand';
	/** The function that runs if this argument is required and is missing. */
	missing?: (message: DiscordenoMessage) => unknown;
	/** Whether or not this argument is required. Defaults to true. */
	required?: boolean;
	/** If the type is string, this will force this argument to be lowercase. */
	lowercase?: boolean;
	/** If the type is string or subcommand you can provide literals. The argument MUST be exactly the same as the literals to be accepted. For example, you can list the subcommands here to make sure it matches. */
	literals?: string[];
	/** The default value for this argument/subcommand. */
	defaultValue?: string | boolean | number;
	/** If the type is number set the minimum amount. By default the minimum is 0 */
	minimum?: number;
	/** If the type is a number set the maximum amount. By default this is disabled. */
	maximum?: number;
	/** If the type is a number, you can use this to allow/disable non-integers. By default this is false. */
	allowDecimals?: boolean;
}

export enum PermissionLevels {
	MEMBER,
	MODERATOR,
	ADMIN,
	SERVER_OWNER,
	BOT_SUPPORT,
	BOT_DEVS,
	BOT_OWNER,
}

export interface DiscordenoSlashCommand {
	/** Whether or not this slash command should be enabled right now. Defaults to true. */
	enabled?: boolean;
	/** Whether this slash command should be created per guild. Defaults to true. */
	guild?: boolean;
	/** Whether this slash command should be created once globally and allowed in DMs. Defaults to false. */
	global?: boolean;
	/** Whether or not to use the Advanced mode. Defaults to true. */
	advanced?: boolean;
	/** The slash command options for this command. */
	options?: ApplicationCommandOption[];
	execute: (
		data: Omit<Interaction, 'member'>,
		member?: DiscordenoMember
	) => unknown;
}
