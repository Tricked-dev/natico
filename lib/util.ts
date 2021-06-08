import { Embed } from './embed.ts';
import {
	deleteMessage,
	deleteMessages,
	DiscordButtonStyles,
	DiscordMessageComponentTypes,
	editWebhookMessage,
	snowflakeToBigint,
	MessageComponents,
	sendInteractionResponse,
	sendMessage,
	DiscordenoMessage,
	DiscordenoMember,
	Interaction,
	structures,
} from '../deps.ts';
import {
	ButtonCollectorReturn,
	MessageCollectorOptions,
	ButtonCollectorOptions,
	CollectButtonOptions,
	CollectMessagesOptions,
} from './interfaces.ts';
enum Milliseconds {
	WEEK = 1000 * 60 * 60 * 24 * 7,
	DAY = 1000 * 60 * 60 * 24,
	HOUR = 1000 * 60 * 60,
	MINUTE = 1000 * 60,
	SECOND = 1000,
}

import { NaticoClient } from '../src/client.ts';

export class NaticoUtil {
	bot: NaticoClient;
	constructor(client: NaticoClient) {
		this.bot = client;
	}
	async CreateEmbedsButtonsPagination(
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
			const collectedButton = await this.needButton(authorId, messageId, {
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
					const answer = await this.needMessage(authorId, channelId);
					await deleteMessages(channelId, [question.id, answer.id]).catch(
						console.error
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
			).catch(console.error);
		}
	}
	async needButton(
		memberId: bigint,
		messageId: bigint,
		options: ButtonCollectorOptions & { amount?: 1 }
	): Promise<ButtonCollectorReturn>;
	async needButton(
		memberId: bigint,
		messageId: bigint,
		options: ButtonCollectorOptions & { amount?: number }
	): Promise<ButtonCollectorReturn[]>;
	async needButton(
		memberId: bigint,
		messageId: bigint
	): Promise<ButtonCollectorReturn>;
	async needButton(
		memberId: bigint,
		messageId: bigint,
		options?: ButtonCollectorOptions
	) {
		const buttons = await this.collectButtons({
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
	collectButtons(
		options: CollectButtonOptions
	): Promise<ButtonCollectorReturn[]> {
		return new Promise((resolve, reject) => {
			this.bot.buttonCollectors.get(options.key);

			this.bot.buttonCollectors.set(options.key, {
				...options,
				buttons: [] as ButtonCollectorReturn[],
				resolve,
				reject,
			});
		});
	}
	async needMessage(
		memberId: bigint,
		channelId: bigint,
		options: MessageCollectorOptions & { amount?: 1 }
	): Promise<DiscordenoMessage>;
	async needMessage(
		memberId: bigint,
		channelId: bigint,
		options: MessageCollectorOptions & { amount?: number }
	): Promise<DiscordenoMessage[]>;
	async needMessage(
		memberId: bigint,
		channelId: bigint
	): Promise<DiscordenoMessage>;
	async needMessage(
		memberId: bigint,
		channelId: bigint,
		options?: MessageCollectorOptions
	) {
		const messages = await this.collectMessages({
			key: memberId,
			channelId,
			createdAt: Date.now(),
			filter: options?.filter || ((msg) => memberId === msg.authorId),
			amount: options?.amount || 1,
			duration: options?.duration || Milliseconds.MINUTE * 5,
		});

		return (options?.amount || 1) > 1 ? messages : messages[0];
	}
	collectMessages(
		options: CollectMessagesOptions
	): Promise<DiscordenoMessage[]> {
		return new Promise((resolve, reject) => {
			this.bot.messageCollectors
				.get(options.key)
				?.reject(
					'A new collector began before the user responded to the previous one.'
				);

			this.bot.messageCollectors.set(options.key, {
				...options,
				messages: [],
				resolve,
				reject,
			});
		});
	}
	public async processButtonCollectors(
		data: Omit<Interaction, 'member'>,
		member?: DiscordenoMember
	) {
		// All buttons will require a message
		if (!data.message) return;

		// If this message is not pending a button response, we can ignore
		const collector = this.bot.buttonCollectors.get(
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
			this.bot.buttonCollectors.delete(snowflakeToBigint(data.message.id));
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
	/**
	 * @returns a sneaky embed
	 */
	embed() {
		return new Embed().setColor('#934a19').setTimestamp();
	}
}
