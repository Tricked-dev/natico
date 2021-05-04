export const denodoc = [
	{
		name: 'handleInternalGuildRoleCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/roles.ts',
			line: 10,
		},
	},
	{
		name: 'handleInternalGuildRoleDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/roles.ts',
			line: 24,
		},
	},
	{
		name: 'handleInternalGuildRoleUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/roles.ts',
			line: 51,
		},
	},
	{
		name: 'createRole',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/role.ts',
			line: 70,
		},
	},
	{
		name: 'Role',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/role.ts',
			line: 87,
		},
	},
	{
		name: 'deleteMessageByID',
		kind: 'function',
		jsDoc: 'Delete a message with the channel id and message id only.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 17,
		},
	},
	{
		name: 'deleteMessage',
		kind: 'function',
		jsDoc: 'Delete a message',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 37,
		},
	},
	{
		name: 'pin',
		kind: 'function',
		jsDoc:
			'Pin a message in a channel. Requires MANAGE_MESSAGES. Max pins allowed in a channel = 50.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 66,
		},
	},
	{
		name: 'unpin',
		kind: 'function',
		jsDoc: 'Unpin a message in a channel. Requires MANAGE_MESSAGES.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 85,
		},
	},
	{
		name: 'addReaction',
		kind: 'function',
		jsDoc:
			'Create a reaction for the message. Reaction takes the form of **name:id** for custom guild emoji, or...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 104,
		},
	},
	{
		name: 'addReactions',
		kind: 'function',
		jsDoc:
			'Adds multiple reactions to a message. If `ordered` is true(default is false), it will add the reacti...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 146,
		},
	},
	{
		name: 'removeReaction',
		kind: 'function',
		jsDoc:
			'Removes a reaction from the bot on this message. Reaction takes the form of **name:id** for custom g...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 164,
		},
	},
	{
		name: 'removeUserReaction',
		kind: 'function',
		jsDoc:
			'Removes a reaction from the specified user on this message. Reaction takes the form of **name:id** f...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 187,
		},
	},
	{
		name: 'removeAllReactions',
		kind: 'function',
		jsDoc: 'Removes all reactions for all emojis on this message.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 220,
		},
	},
	{
		name: 'removeReactionEmoji',
		kind: 'function',
		jsDoc:
			'Removes all reactions for a single emoji on this message. Reaction takes the form of **name:id** for...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 239,
		},
	},
	{
		name: 'getReactions',
		kind: 'function',
		jsDoc: 'Get a list of users that reacted with this emoji.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 268,
		},
	},
	{
		name: 'editMessage',
		kind: 'function',
		jsDoc: 'Edit the message.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 285,
		},
	},
	{
		name: 'publishMessage',
		kind: 'function',
		jsDoc: 'Crosspost a message in a News Channel to following channels.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/message.ts',
			line: 331,
		},
	},
	{
		name: 'handleInternalGuildBanAdd',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/bans.ts',
			line: 5,
		},
	},
	{
		name: 'handleInternalGuildBanRemove',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/bans.ts',
			line: 16,
		},
	},
	{
		name: 'handleInternalReady',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the ready event. Users can override this with controllers ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 23,
		},
	},
	{
		name: 'handleInternalPresenceUpdate',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the presence update event. Users can override this with co...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 82,
		},
	},
	{
		name: 'handleInternalTypingStart',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the typings event. Users can override this with controller...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 93,
		},
	},
	{
		name: 'handleInternalUserUpdate',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the user update event. Users can override this with contro...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 99,
		},
	},
	{
		name: 'handleInternalVoiceStateUpdate',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the voice state update event. Users can override this with...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 118,
		},
	},
	{
		name: 'handleInternalWebhooksUpdate',
		kind: 'function',
		jsDoc:
			'This function is the internal handler for the webhooks update event. Users can override this with co...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 171,
		},
	},
	{
		name: 'handleInternalIntegrationCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 181,
		},
	},
	{
		name: 'handleInternalIntegrationUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 209,
		},
	},
	{
		name: 'handleInternalIntegrationDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 235,
		},
	},
	{
		name: 'handleInternalInviteCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 251,
		},
	},
	{
		name: 'handleInternalInviteDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/misc.ts',
			line: 277,
		},
	},
	{
		name: 'getApplicationInformation',
		kind: 'function',
		jsDoc: "Returns the bot's OAuth2 application object without `flags`.",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/oauth.ts',
			line: 6,
		},
	},
	{
		name: 'TableName',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/cache.ts',
			line: 8,
		},
	},
	{
		name: 'cacheHandlers',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/cache.ts',
			line: 120,
		},
	},
	{
		name: 'handleInternalGuildMemberAdd',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/members.ts',
			line: 14,
		},
	},
	{
		name: 'handleInternalGuildMemberRemove',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/members.ts',
			line: 31,
		},
	},
	{
		name: 'handleInternalGuildMemberUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/members.ts',
			line: 48,
		},
	},
	{
		name: 'handleInternalGuildMembersChunk',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/members.ts',
			line: 105,
		},
	},
	{
		name: 'Channel',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/channel.ts',
			line: 119,
		},
	},
	{
		name: 'Message',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/message.ts',
			line: 182,
		},
	},
	{
		name: 'Guild',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/guild.ts',
			line: 214,
		},
	},
	{
		name: 'Template',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/template.ts',
			line: 46,
		},
	},
	{
		name: 'Member',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/member.ts',
			line: 130,
		},
	},
	{
		name: 'structures',
		kind: 'variable',
		jsDoc:
			'This is the placeholder where the structure creation functions are kept.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/mod.ts',
			line: 9,
		},
	},
	{
		name: 'Structures',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/mod.ts',
			line: 18,
		},
	},
	{
		name: 'updateStructures',
		kind: 'function',
		jsDoc:
			'This function is used to update/reload/customize the internal structures of Discordeno.\n\n ⚠️ **ADVAN...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/mod.ts',
			line: 25,
		},
	},
	{
		name: 'rawAvatarURL',
		kind: 'function',
		jsDoc:
			"The users custom avatar or the default avatar if you don't have a member object.",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 24,
		},
	},
	{
		name: 'avatarURL',
		kind: 'function',
		jsDoc: 'The users custom avatar or the default avatar',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 37,
		},
	},
	{
		name: 'addRole',
		kind: 'function',
		jsDoc: 'Add a role to the member',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 52,
		},
	},
	{
		name: 'removeRole',
		kind: 'function',
		jsDoc: 'Remove a role from the member',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 87,
		},
	},
	{
		name: 'sendDirectMessage',
		kind: 'function',
		jsDoc:
			'Send a message to a users DM. Note: this takes 2 API calls. 1 is to fetch the users dm channel. 2 is...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 123,
		},
	},
	{
		name: 'kick',
		kind: 'function',
		jsDoc: 'Kick a member from the server',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 147,
		},
	},
	{
		name: 'editMember',
		kind: 'function',
		jsDoc: 'Edit the member',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 171,
		},
	},
	{
		name: 'moveMember',
		kind: 'function',
		jsDoc:
			'Move a member from a voice channel to another.\n@param guildID the id of the guild which the channel ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 241,
		},
	},
	{
		name: 'kickFromVoiceChannel',
		kind: 'function',
		jsDoc: 'Kicks a member from a voice channel',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 250,
		},
	},
	{
		name: 'editBotProfile',
		kind: 'function',
		jsDoc:
			"Modifies the bot's username or avatar.\nNOTE: username: if changed may cause the bot's discriminator ...",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 257,
		},
	},
	{
		name: 'editBotNickname',
		kind: 'function',
		jsDoc: 'Edit the nickname of the bot in this guild',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/member.ts',
			line: 289,
		},
	},
	{
		name: 'handleInternalChannelCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/channels.ts',
			line: 10,
		},
	},
	{
		name: 'handleInternalChannelDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/channels.ts',
			line: 21,
		},
	},
	{
		name: 'handleInternalChannelUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/channels.ts',
			line: 56,
		},
	},
	{
		name: 'allowNextShard',
		kind: 'function',
		jsDoc:
			'This function is meant to be used on the ready event to alert the library to start the next shard.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard_manager.ts',
			line: 24,
		},
	},
	{
		name: 'spawnShards',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard_manager.ts',
			line: 28,
		},
	},
	{
		name: 'handleDiscordPayload',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard_manager.ts',
			line: 74,
		},
	},
	{
		name: 'requestAllMembers',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard_manager.ts',
			line: 94,
		},
	},
	{
		name: 'sendGatewayCommand',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard_manager.ts',
			line: 112,
		},
	},
	{
		name: 'BasicShard',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 22,
		},
	},
	{
		name: 'createShard',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 38,
		},
	},
	{
		name: 'requestGuildMembers',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 279,
		},
	},
	{
		name: 'botGatewayStatusRequest',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 386,
		},
	},
	{
		name: 'sendWS',
		kind: 'function',
		jsDoc:
			'Enqueues the specified data to be transmitted to the server over the WebSocket connection,',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 406,
		},
	},
	{
		name: 'closeWS',
		kind: 'function',
		jsDoc: 'Closes the WebSocket connection or connection attempt',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/ws/shard.ts',
			line: 417,
		},
	},
	{
		name: 'handleInternalGuildCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/guilds.ts',
			line: 14,
		},
	},
	{
		name: 'handleInternalGuildDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/guilds.ts',
			line: 39,
		},
	},
	{
		name: 'handleInternalGuildUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/guilds.ts',
			line: 67,
		},
	},
	{
		name: 'handleInternalGuildEmojisUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/guilds.ts',
			line: 110,
		},
	},
	{
		name: 'authorization',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 12,
		},
	},
	{
		name: 'restAuthorization',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 13,
		},
	},
	{
		name: 'botID',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 14,
		},
	},
	{
		name: 'applicationID',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 15,
		},
	},
	{
		name: 'eventHandlers',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 17,
		},
	},
	{
		name: 'botGatewayData',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 19,
		},
	},
	{
		name: 'proxyWSURL',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 20,
		},
	},
	{
		name: 'identifyPayload',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 22,
		},
	},
	{
		name: 'IdentifyPayload',
		kind: 'interface',
		jsDoc: '@deprecated Use "DiscordIdentify" instead',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 35,
		},
	},
	{
		name: 'startBot',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 47,
		},
	},
	{
		name: 'updateEventHandlers',
		kind: 'function',
		jsDoc:
			'Allows you to dynamically update the event handlers by passing in new eventHandlers',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 69,
		},
	},
	{
		name: 'setBotID',
		kind: 'function',
		jsDoc:
			'INTERNAL LIB function used to set the bot ID once the READY event is sent by Discord.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 77,
		},
	},
	{
		name: 'setApplicationID',
		kind: 'function',
		jsDoc:
			'INTERNAL LIB function used to set the application ID once the READY event is sent by Discord.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 82,
		},
	},
	{
		name: 'startBigBrainBot',
		kind: 'function',
		jsDoc:
			'This function should be used only by bot developers whose bots are in over 25,000 servers.\nPlease be...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 94,
		},
	},
	{
		name: 'BigBrainBotConfig',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/bot.ts',
			line: 127,
		},
	},
	{
		name: 'CacheData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/cache.ts',
			line: 5,
		},
	},
	{
		name: 'cache',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/cache.ts',
			line: 24,
		},
	},
	{
		name: 'Collection',
		kind: 'class',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/collection.ts',
			line: 3,
		},
	},
	{
		name: 'startRESTServer',
		kind: 'function',
		jsDoc: 'Begins an http server that will handle incoming requests.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/server.ts',
			line: 8,
		},
	},
	{
		name: 'restCache',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/cache.ts',
			line: 3,
		},
	},
	{
		name: 'processQueue',
		kind: 'function',
		jsDoc:
			'Processes the queue by looping over each path separately until the queues are empty.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/queue.ts',
			line: 7,
		},
	},
	{
		name: 'cleanupQueues',
		kind: 'function',
		jsDoc:
			'Cleans up the queues by checking if there is nothing left and removing it.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/queue.ts',
			line: 160,
		},
	},
	{
		name: 'checkRateLimits',
		kind: 'function',
		jsDoc: 'Check the rate limits for a url or a bucket.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/queue.ts',
			line: 172,
		},
	},
	{
		name: 'processRequest',
		kind: 'function',
		jsDoc:
			'Processes a request and assigns it to a queue or creates a queue if none exists for it.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/request.ts',
			line: 12,
		},
	},
	{
		name: 'createRequestBody',
		kind: 'function',
		jsDoc:
			'Creates the request body and headers that are necessary to send a request. Will handle different typ...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/request.ts',
			line: 46,
		},
	},
	{
		name: 'processRequestHeaders',
		kind: 'function',
		jsDoc:
			'Processes the rate limit headers and determines if it needs to be ratelimited and returns the bucket...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/rest/request.ts',
			line: 93,
		},
	},
	{
		name: 'createServer',
		kind: 'function',
		jsDoc:
			'Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event. This endp...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 47,
		},
	},
	{
		name: 'deleteServer',
		kind: 'function',
		jsDoc:
			'Delete a guild permanently. User must be owner. Returns 204 No Content on success. Fires a Guild Del...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 58,
		},
	},
	{
		name: 'categoryChildrenIDs',
		kind: 'function',
		jsDoc:
			'Gets an array of all the channels ids that are the children of this category.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 65,
		},
	},
	{
		name: 'guildIconURL',
		kind: 'function',
		jsDoc:
			'The full URL of the icon from Discords CDN. Undefined when no icon is set.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 73,
		},
	},
	{
		name: 'guildSplashURL',
		kind: 'function',
		jsDoc:
			'The full URL of the splash from Discords CDN. Undefined if no splash is set.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 84,
		},
	},
	{
		name: 'guildBannerURL',
		kind: 'function',
		jsDoc:
			'The full URL of the banner from Discords CDN. Undefined if no banner is set.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 99,
		},
	},
	{
		name: 'createGuildChannel',
		kind: 'function',
		jsDoc:
			'Create a channel in your server. Bot needs MANAGE_CHANNEL permissions in the server.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 114,
		},
	},
	{
		name: 'deleteChannel',
		kind: 'function',
		jsDoc:
			'Delete a channel in your server. Bot needs MANAGE_CHANNEL permissions in the server.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 148,
		},
	},
	{
		name: 'getChannels',
		kind: 'function',
		jsDoc:
			'Returns a list of guild channel objects.\n\n⚠️ **If you need this, you are probably doing something wr...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 184,
		},
	},
	{
		name: 'getChannel',
		kind: 'function',
		jsDoc:
			'Fetches a single channel object from the api.\n\n⚠️ **If you need this, you are probably doing somethi...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 203,
		},
	},
	{
		name: 'swapChannels',
		kind: 'function',
		jsDoc:
			'Modify the positions of channels on the guild. Requires MANAGE_CHANNELS permisison.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 217,
		},
	},
	{
		name: 'editChannelOverwrite',
		kind: 'function',
		jsDoc:
			'Edit the channel permission overwrites for a user or role in this channel. Requires `MANAGE_ROLES` p...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 234,
		},
	},
	{
		name: 'deleteChannelOverwrite',
		kind: 'function',
		jsDoc:
			'Delete the channel permission overwrites for a user or role in this channel. Requires `MANAGE_ROLES`...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 261,
		},
	},
	{
		name: 'getMember',
		kind: 'function',
		jsDoc:
			'Returns a guild member object for the specified user.\n\n⚠️ **ADVANCED USE ONLY: Your members will be ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 285,
		},
	},
	{
		name: 'getMembersByQuery',
		kind: 'function',
		jsDoc:
			'Returns guild member objects for the specified user by their nickname/username.\n\n⚠️ **ADVANCED USE O...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 308,
		},
	},
	{
		name: 'createEmoji',
		kind: 'function',
		jsDoc:
			'Create an emoji in the server. Emojis and animated emojis have a maximum file size of 256kb. Attempt...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 322,
		},
	},
	{
		name: 'editEmoji',
		kind: 'function',
		jsDoc: 'Modify the given emoji. Requires the MANAGE_EMOJIS permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 347,
		},
	},
	{
		name: 'deleteEmoji',
		kind: 'function',
		jsDoc:
			'Delete the given emoji. Requires the MANAGE_EMOJIS permission. Returns 204 No Content on success.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 369,
		},
	},
	{
		name: 'emojiURL',
		kind: 'function',
		jsDoc: 'Creates a url to the emoji from the Discord CDN.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 388,
		},
	},
	{
		name: 'getEmojis',
		kind: 'function',
		jsDoc:
			'Returns a list of emojis for the given guild.\n\n⚠️ **If you need this, you are probably doing somethi...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 397,
		},
	},
	{
		name: 'getEmoji',
		kind: 'function',
		jsDoc:
			'Returns an emoji for the given guild and emoji ID.\n\n⚠️ **If you need this, you are probably doing so...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 417,
		},
	},
	{
		name: 'createGuildRole',
		kind: 'function',
		jsDoc:
			'Create a new role for the guild. Requires the MANAGE_ROLES permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 441,
		},
	},
	{
		name: 'editRole',
		kind: 'function',
		jsDoc: 'Edit a guild role. Requires the MANAGE_ROLES permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 469,
		},
	},
	{
		name: 'deleteRole',
		kind: 'function',
		jsDoc: 'Delete a guild role. Requires the MANAGE_ROLES permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 490,
		},
	},
	{
		name: 'getRoles',
		kind: 'function',
		jsDoc:
			'Returns a list of role objects for the guild.\n\n⚠️ **If you need this, you are probably doing somethi...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 505,
		},
	},
	{
		name: 'swapRoles',
		kind: 'function',
		jsDoc:
			'Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 517,
		},
	},
	{
		name: 'getPruneCount',
		kind: 'function',
		jsDoc:
			'Check how many members would be removed from the server in a prune operation. Requires the KICK_MEMB...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 532,
		},
	},
	{
		name: 'pruneMembers',
		kind: 'function',
		jsDoc:
			"Begin a prune operation. Requires the KICK_MEMBERS permission. Returns an object with one 'pruned' k...",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 556,
		},
	},
	{
		name: 'fetchMembers',
		kind: 'function',
		jsDoc:
			'⚠️ BEGINNER DEVS!! YOU SHOULD ALMOST NEVER NEED THIS AND YOU CAN GET FROM cache.members.get()\n\nADVAN...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 588,
		},
	},
	{
		name: 'getMembers',
		kind: 'function',
		jsDoc:
			'⚠️ BEGINNER DEVS!! YOU SHOULD ALMOST NEVER NEED THIS AND YOU CAN GET FROM cache.members.get()\n\nADVAN...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 614,
		},
	},
	{
		name: 'getAuditLogs',
		kind: 'function',
		jsDoc:
			'Returns the audit logs for the guild. Requires VIEW AUDIT LOGS permission',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 674,
		},
	},
	{
		name: 'getEmbed',
		kind: 'function',
		jsDoc:
			'Returns the guild embed object. Requires the MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 697,
		},
	},
	{
		name: 'editEmbed',
		kind: 'function',
		jsDoc:
			'Modify a guild embed object for the guild. Requires the MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 709,
		},
	},
	{
		name: 'getVanityURL',
		kind: 'function',
		jsDoc:
			'Returns the code and uses of the vanity url for this server if it is enabled. Requires the MANAGE_GU...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 728,
		},
	},
	{
		name: 'getIntegrations',
		kind: 'function',
		jsDoc:
			'Returns a list of integrations for the guild. Requires the MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 735,
		},
	},
	{
		name: 'editIntegration',
		kind: 'function',
		jsDoc:
			'Modify the behavior and settings of an integration object for the guild. Requires the MANAGE_GUILD p...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 749,
		},
	},
	{
		name: 'deleteIntegration',
		kind: 'function',
		jsDoc:
			'Delete the attached integration object for the guild with this id. Requires MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 768,
		},
	},
	{
		name: 'syncIntegration',
		kind: 'function',
		jsDoc: 'Sync an integration. Requires the MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 782,
		},
	},
	{
		name: 'getBans',
		kind: 'function',
		jsDoc:
			'Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permiss...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 796,
		},
	},
	{
		name: 'getBan',
		kind: 'function',
		jsDoc:
			'Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 812,
		},
	},
	{
		name: 'ban',
		kind: 'function',
		jsDoc:
			'Ban a user from the guild and optionally delete previous messages sent by the user. Requires the BAN...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 826,
		},
	},
	{
		name: 'unban',
		kind: 'function',
		jsDoc: 'Remove the ban for a user. Requires BAN_MEMBERS permission',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 841,
		},
	},
	{
		name: 'getGuildPreview',
		kind: 'function',
		jsDoc:
			'Returns the guild preview object for the given id. If the bot is not in the guild, then the guild mu...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 853,
		},
	},
	{
		name: 'editGuild',
		kind: 'function',
		jsDoc: 'Modify a guilds settings. Requires the MANAGE_GUILD permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 860,
		},
	},
	{
		name: 'getInvites',
		kind: 'function',
		jsDoc:
			'Get all the invites for this guild. Requires MANAGE_GUILD permission',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 887,
		},
	},
	{
		name: 'leaveGuild',
		kind: 'function',
		jsDoc: 'Leave a guild',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 899,
		},
	},
	{
		name: 'getAvailableVoiceRegions',
		kind: 'function',
		jsDoc:
			'Returns an array of voice regions that can be used when creating servers.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 906,
		},
	},
	{
		name: 'getVoiceRegions',
		kind: 'function',
		jsDoc:
			'Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 913,
		},
	},
	{
		name: 'getWebhooks',
		kind: 'function',
		jsDoc:
			'Returns a list of guild webhooks objects. Requires the MANAGE_WEBHOOKs permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 920,
		},
	},
	{
		name: 'getUser',
		kind: 'function',
		jsDoc:
			'This function will return the raw user payload in the rare cases you need to fetch a user directly f...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 935,
		},
	},
	{
		name: 'getGuild',
		kind: 'function',
		jsDoc:
			'⚠️ **If you need this, you are probably doing something wrong. Always use cache.guilds.get()\n\nAdvanc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 950,
		},
	},
	{
		name: 'getTemplate',
		kind: 'function',
		jsDoc: 'Returns the guild template if it exists',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 960,
		},
	},
	{
		name: 'getGuildTemplate',
		kind: 'function',
		jsDoc:
			'Returns the guild template if it exists\n@deprecated will get removed in v11 use `getTemplate` instea...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 973,
		},
	},
	{
		name: 'createGuildFromTemplate',
		kind: 'function',
		jsDoc:
			'Create a new guild based on a template\nNOTE: This endpoint can be used only by bots in less than 10 ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 984,
		},
	},
	{
		name: 'getGuildTemplates',
		kind: 'function',
		jsDoc:
			'Returns an array of templates.\nRequires the `MANAGE_GUILD` permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 1010,
		},
	},
	{
		name: 'deleteGuildTemplate',
		kind: 'function',
		jsDoc:
			'Deletes a template from a guild.\nRequires the `MANAGE_GUILD` permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 1025,
		},
	},
	{
		name: 'createGuildTemplate',
		kind: 'function',
		jsDoc:
			'Creates a template for the guild.\nRequires the `MANAGE_GUILD` permission.\n@param name name of the te...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 1045,
		},
	},
	{
		name: 'syncGuildTemplate',
		kind: 'function',
		jsDoc:
			"Syncs the template to the guild's current state.\nRequires the `MANAGE_GUILD` permission.",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 1075,
		},
	},
	{
		name: 'editGuildTemplate',
		kind: 'function',
		jsDoc:
			"Edit a template's metadata.\nRequires the `MANAGE_GUILD` permission.",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/guild.ts',
			line: 1090,
		},
	},
	{
		name: 'createChannel',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/channel.ts',
			line: 80,
		},
	},
	{
		name: 'sleep',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 10,
		},
	},
	{
		name: 'BotStatusRequest',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 14,
		},
	},
	{
		name: 'editBotsStatus',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 22,
		},
	},
	{
		name: 'chooseRandom',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 30,
		},
	},
	{
		name: 'urlToBase64',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 34,
		},
	},
	{
		name: 'createNewProp',
		kind: 'function',
		jsDoc:
			'Allows easy way to add a prop to a base object when needing to use complicated getters solution.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 43,
		},
	},
	{
		name: 'delay',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 47,
		},
	},
	{
		name: 'formatImageURL',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 55,
		},
	},
	{
		name: 'camelKeysToSnakeCase',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 83,
		},
	},
	{
		name: 'snakeKeysToCamelCase',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/utils.ts',
			line: 101,
		},
	},
	{
		name: 'handleInternalMessageReactionAdd',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/reactions.ts',
			line: 11,
		},
	},
	{
		name: 'handleInternalMessageReactionRemove',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/reactions.ts',
			line: 65,
		},
	},
	{
		name: 'handleInternalMessageReactionRemoveAll',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/reactions.ts',
			line: 121,
		},
	},
	{
		name: 'handleInternalMessageReactionRemoveEmoji',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/reactions.ts',
			line: 138,
		},
	},
	{
		name: 'createWebhook',
		kind: 'function',
		jsDoc:
			'Create a new webhook. Requires the MANAGE_WEBHOOKS permission. Returns a webhook object on success. ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 33,
		},
	},
	{
		name: 'editWebhook',
		kind: 'function',
		jsDoc:
			'Edit a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated webhook object on suc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 68,
		},
	},
	{
		name: 'editWebhookWithToken',
		kind: 'function',
		jsDoc: 'Edit a webhook. Returns the updated webhook object on success.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 92,
		},
	},
	{
		name: 'deleteWebhook',
		kind: 'function',
		jsDoc:
			'Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns a undefined on succ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 106,
		},
	},
	{
		name: 'deleteWebhookWithToken',
		kind: 'function',
		jsDoc: 'Delete a webhook permanently. Returns a undefined on success',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 123,
		},
	},
	{
		name: 'getWebhook',
		kind: 'function',
		jsDoc: 'Returns the new webhook object for the given id.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 135,
		},
	},
	{
		name: 'getWebhookWithToken',
		kind: 'function',
		jsDoc:
			'Returns the new webhook object for the given id, this call does not require authentication and retur...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 142,
		},
	},
	{
		name: 'executeWebhook',
		kind: 'function',
		jsDoc: 'Execute a webhook with webhook ID and webhook token',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 151,
		},
	},
	{
		name: 'editWebhookMessage',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 209,
		},
	},
	{
		name: 'deleteWebhookMessage',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 263,
		},
	},
	{
		name: 'createSlashCommand',
		kind: 'function',
		jsDoc:
			'There are two kinds of Slash Commands: global commands and guild commands. Global commands are avail...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 362,
		},
	},
	{
		name: 'getSlashCommand',
		kind: 'function',
		jsDoc:
			'Fetchs the global command for the given ID. If a guildID is provided, the guild command will be fetc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 378,
		},
	},
	{
		name: 'getSlashCommands',
		kind: 'function',
		jsDoc: 'Fetch all of the global commands for your application.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 389,
		},
	},
	{
		name: 'upsertSlashCommand',
		kind: 'function',
		jsDoc:
			'Edit an existing slash command. If this command did not exist, it will create it.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 403,
		},
	},
	{
		name: 'upsertSlashCommands',
		kind: 'function',
		jsDoc:
			'Bulk edit existing slash commands. If a command does not exist, it will create it.\n\n**NOTE:** Any sl...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 429,
		},
	},
	{
		name: 'editSlashCommand',
		kind: 'function',
		jsDoc:
			'Edit an existing slash command. \n@deprecated This function will be removed in v11. Use `upsertSlashC...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 450,
		},
	},
	{
		name: 'deleteSlashCommand',
		kind: 'function',
		jsDoc: 'Deletes a slash command.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 480,
		},
	},
	{
		name: 'executeSlashCommand',
		kind: 'function',
		jsDoc:
			'Send a response to a users slash command. The command data will have the id and token necessary to r...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 495,
		},
	},
	{
		name: 'deleteSlashResponse',
		kind: 'function',
		jsDoc:
			'To delete your response to a slash command. If a message id is not provided, it will default to dele...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 533,
		},
	},
	{
		name: 'editSlashResponse',
		kind: 'function',
		jsDoc:
			'To edit your response to a slash command. If a messageID is not provided it will default to editing ...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/webhook.ts',
			line: 551,
		},
	},
	{
		name: 'createMember',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/member.ts',
			line: 75,
		},
	},
	{
		name: 'initialMemberLoadQueue',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/guild.ts',
			line: 36,
		},
	},
	{
		name: 'createGuild',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/guild.ts',
			line: 110,
		},
	},
	{
		name: 'CleanVoiceState',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/guild.ts',
			line: 348,
		},
	},
	{
		name: 'handleInternalMessageCreate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/messages.ts',
			line: 11,
		},
	},
	{
		name: 'handleInternalMessageDelete',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/messages.ts',
			line: 51,
		},
	},
	{
		name: 'handleInternalMessageDeleteBulk',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/messages.ts',
			line: 66,
		},
	},
	{
		name: 'handleInternalMessageUpdate',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/messages.ts',
			line: 82,
		},
	},
	{
		name: 'ChannelEditOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 4,
		},
	},
	{
		name: 'BaseChannelCreate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 25,
		},
	},
	{
		name: 'DMChannelCreatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 50,
		},
	},
	{
		name: 'ChannelCreatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 68,
		},
	},
	{
		name: 'ChannelType',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 77,
		},
	},
	{
		name: 'ChannelTypes',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 79,
		},
	},
	{
		name: 'MessageContent',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 96,
		},
	},
	{
		name: 'FileContent',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 125,
		},
	},
	{
		name: 'AllowedMentions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 130,
		},
	},
	{
		name: 'GetMessages',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 139,
		},
	},
	{
		name: 'GetMessagesAfter',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 144,
		},
	},
	{
		name: 'GetMessagesBefore',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 149,
		},
	},
	{
		name: 'GetMessagesAround',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 154,
		},
	},
	{
		name: 'CreateInviteOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 160,
		},
	},
	{
		name: 'FollowedChannelPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/channel.ts',
			line: 171,
		},
	},
	{
		name: 'ClientStatusPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/presence.ts',
			line: 3,
		},
	},
	{
		name: 'ImageSize',
		kind: 'typeAlias',
		jsDoc: '@deprecated Use DiscordImageSize',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/cdn.ts',
			line: 3,
		},
	},
	{
		name: 'ImageFormats',
		kind: 'typeAlias',
		jsDoc: '@deprecated Use DiscordImageFormat',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/cdn.ts',
			line: 6,
		},
	},
	{
		name: 'DiscordPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 11,
		},
	},
	{
		name: 'DiscordBotGatewayData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 61,
		},
	},
	{
		name: 'DiscordHeartbeatPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 82,
		},
	},
	{
		name: 'GatewayOpcode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 86,
		},
	},
	{
		name: 'GatewayCloseEventCode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 100,
		},
	},
	{
		name: 'VoiceOpcode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 114,
		},
	},
	{
		name: 'VoiceCloseEventCode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 128,
		},
	},
	{
		name: 'HttpResponseCode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 142,
		},
	},
	{
		name: 'JSONErrorCode',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 157,
		},
	},
	{
		name: 'Properties',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 212,
		},
	},
	{
		name: 'Emoji',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 218,
		},
	},
	{
		name: 'StatusTypes',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 224,
		},
	},
	{
		name: 'StatusType',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 232,
		},
	},
	{
		name: 'Status',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 234,
		},
	},
	{
		name: 'WebhookUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 239,
		},
	},
	{
		name: 'PresenceUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 244,
		},
	},
	{
		name: 'TypingStartPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 257,
		},
	},
	{
		name: 'VoiceStateUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 270,
		},
	},
	{
		name: 'ReadyPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 295,
		},
	},
	{
		name: 'UnavailableGuildPayload',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 312,
		},
	},
	{
		name: 'IntegrationCreateUpdateEvent',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 317,
		},
	},
	{
		name: 'IntegrationDeleteEvent',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 322,
		},
	},
	{
		name: 'InviteCreateEvent',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#invite-create',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 332,
		},
	},
	{
		name: 'InviteDeleteEvent',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#invite-delete',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/discord.ts',
			line: 358,
		},
	},
	{
		name: 'GuildRolePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 10,
		},
	},
	{
		name: 'GuildRoleDeletePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 17,
		},
	},
	{
		name: 'GuildMemberChunkPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 24,
		},
	},
	{
		name: 'GuildMemberUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 41,
		},
	},
	{
		name: 'GuildMemberAddPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 56,
		},
	},
	{
		name: 'GuildEmojisUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 60,
		},
	},
	{
		name: 'GuildBanPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 65,
		},
	},
	{
		name: 'GuildDeletePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 72,
		},
	},
	{
		name: 'UpdateGuildPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 79,
		},
	},
	{
		name: 'CreateGuildPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 148,
		},
	},
	{
		name: 'GuildFeatures',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 165,
		},
	},
	{
		name: 'VoiceRegion',
		kind: 'interface',
		jsDoc: '@deprecated Use DiscordVoiceRegion',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 181,
		},
	},
	{
		name: 'BanOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 196,
		},
	},
	{
		name: 'BannedUser',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 203,
		},
	},
	{
		name: 'PositionSwap',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 210,
		},
	},
	{
		name: 'GuildEditOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 217,
		},
	},
	{
		name: 'EditIntegrationOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 244,
		},
	},
	{
		name: 'Integration',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 253,
		},
	},
	{
		name: 'IntegrationExpireBehaviors',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 286,
		},
	},
	{
		name: 'Account',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 291,
		},
	},
	{
		name: 'UserPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 298,
		},
	},
	{
		name: 'PartialUser',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 325,
		},
	},
	{
		name: 'UserFlags',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 352,
		},
	},
	{
		name: 'NitroTypes',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 366,
		},
	},
	{
		name: 'VanityInvite',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 371,
		},
	},
	{
		name: 'GuildEmbed',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 376,
		},
	},
	{
		name: 'GetAuditLogsOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 381,
		},
	},
	{
		name: 'AuditLogType',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 392,
		},
	},
	{
		name: 'AuditLogs',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 429,
		},
	},
	{
		name: 'Overwrite',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 467,
		},
	},
	{
		name: 'OverwriteType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 478,
		},
	},
	{
		name: 'RawOverwrite',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 483,
		},
	},
	{
		name: 'PermissionOverwrite',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 494,
		},
	},
	{
		name: 'ChannelCreateOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 500,
		},
	},
	{
		name: 'CreateEmojisOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 523,
		},
	},
	{
		name: 'EditEmojisOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 530,
		},
	},
	{
		name: 'CreateRoleOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 537,
		},
	},
	{
		name: 'PrunePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 545,
		},
	},
	{
		name: 'PruneOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 549,
		},
	},
	{
		name: 'VoiceState',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 588,
		},
	},
	{
		name: 'Presence',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 615,
		},
	},
	{
		name: 'FetchMembersOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 630,
		},
	},
	{
		name: 'GetMemberOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 641,
		},
	},
	{
		name: 'CreateServerOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 648,
		},
	},
	{
		name: 'GuildTemplate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 674,
		},
	},
	{
		name: 'CreateGuildFromTemplate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 699,
		},
	},
	{
		name: 'CreateGuildTemplate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 706,
		},
	},
	{
		name: 'EditGuildTemplate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/guild.ts',
			line: 713,
		},
	},
	{
		name: 'MentionedUser',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 6,
		},
	},
	{
		name: 'MentionedChannel',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 11,
		},
	},
	{
		name: 'Attachment',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 22,
		},
	},
	{
		name: 'Embed',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 39,
		},
	},
	{
		name: 'EmbedFooter',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 68,
		},
	},
	{
		name: 'EmbedImage',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 77,
		},
	},
	{
		name: 'EmbedThumbnail',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 88,
		},
	},
	{
		name: 'EmbedVideo',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 99,
		},
	},
	{
		name: 'EmbedProvider',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 110,
		},
	},
	{
		name: 'EmbedAuthor',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 117,
		},
	},
	{
		name: 'EmbedField',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 128,
		},
	},
	{
		name: 'Reaction',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 137,
		},
	},
	{
		name: 'MessageTypes',
		kind: 'enum',
		jsDoc: '@deprecated Use DiscordMessageTypes',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 148,
		},
	},
	{
		name: 'ActivityTypes',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 170,
		},
	},
	{
		name: 'Activity',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 177,
		},
	},
	{
		name: 'Application',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 184,
		},
	},
	{
		name: 'Reference',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 201,
		},
	},
	{
		name: 'DiscordReferencePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 216,
		},
	},
	{
		name: 'MessageFlags',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 222,
		},
	},
	{
		name: 'EmojiReaction',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 230,
		},
	},
	{
		name: 'ReactionPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 247,
		},
	},
	{
		name: 'MessageCreateOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 256,
		},
	},
	{
		name: 'BaseMessageDeletePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 312,
		},
	},
	{
		name: 'MessageDeletePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 319,
		},
	},
	{
		name: 'MessageDeleteBulkPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 324,
		},
	},
	{
		name: 'MessageUpdatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 329,
		},
	},
	{
		name: 'BaseMessageReactionPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 336,
		},
	},
	{
		name: 'MessageReactionPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 345,
		},
	},
	{
		name: 'MessageReactionUncachedPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 354,
		},
	},
	{
		name: 'MessageReactionRemoveEmojiPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 360,
		},
	},
	{
		name: 'PartialMessage',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 366,
		},
	},
	{
		name: 'MessageSticker',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 371,
		},
	},
	{
		name: 'MessageStickerFormat',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/message.ts',
			line: 390,
		},
	},
	{
		name: 'RoleData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/role.ts',
			line: 1,
		},
	},
	{
		name: 'RoleTags',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/role.ts',
			line: 22,
		},
	},
	{
		name: 'WebhookPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 6,
		},
	},
	{
		name: 'WebhookType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 25,
		},
	},
	{
		name: 'WebhookCreateOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 32,
		},
	},
	{
		name: 'WebhookEditOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 39,
		},
	},
	{
		name: 'ExecuteWebhookOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 48,
		},
	},
	{
		name: 'EditWebhookMessageOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 74,
		},
	},
	{
		name: 'CreateSlashCommandOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 80,
		},
	},
	{
		name: 'SlashCommand',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 91,
		},
	},
	{
		name: 'SlashCommandOption',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 104,
		},
	},
	{
		name: 'SlashCommandOptionChoice',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 124,
		},
	},
	{
		name: 'SlashCommandOptionType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 131,
		},
	},
	{
		name: 'Interaction',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 142,
		},
	},
	{
		name: 'SlashCommandInteractionData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 159,
		},
	},
	{
		name: 'SlashCommandInteractionDataOption',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 168,
		},
	},
	{
		name: 'InteractionResponse',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 178,
		},
	},
	{
		name: 'SlashCommandCallbackData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 185,
		},
	},
	{
		name: 'InteractionResponseType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 198,
		},
	},
	{
		name: 'EditSlashCommandOptions',
		kind: 'interface',
		jsDoc: '@deprecated Use `UpsertSlashCommandOptions` instead',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 213,
		},
	},
	{
		name: 'ExecuteSlashCommandOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 222,
		},
	},
	{
		name: 'SlashCommandResponseOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 227,
		},
	},
	{
		name: 'EditSlashResponseOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 233,
		},
	},
	{
		name: 'UpsertSlashCommandOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 238,
		},
	},
	{
		name: 'UpsertSlashCommandsOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/webhook.ts',
			line: 247,
		},
	},
	{
		name: 'Errors',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/errors.ts',
			line: 1,
		},
	},
	{
		name: 'RequestMethods',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/fetch.ts',
			line: 1,
		},
	},
	{
		name: 'Permission',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/permission.ts',
			line: 1,
		},
	},
	{
		name: 'Permissions',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/permission.ts',
			line: 3,
		},
	},
	{
		name: 'DiscordChannelTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#channel-object-channel-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordChannel',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#channel-object-channel-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 22,
		},
	},
	{
		name: 'DiscordFollowedChannel',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-struc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 62,
		},
	},
	{
		name: 'DiscordModifyChannelParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#modify-channel-json-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 70,
		},
	},
	{
		name: 'DiscordEditChannelPermissions',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 94,
		},
	},
	{
		name: 'DiscordFollowNewsChannelParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#follow-news-channel-json-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/channel.ts',
			line: 104,
		},
	},
	{
		name: 'DiscordIntegration',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#integration-object-integration-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 70,
		},
	},
	{
		name: 'DiscordIntegrationExpireBehavior',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 38,
		},
	},
	{
		name: 'DiscordIntegrationAccount',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#integration-account-object',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 104,
		},
	},
	{
		name: 'DiscordIntegrationApplication',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#integration-application-object',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 112,
		},
	},
	{
		name: 'DiscordCreateGuildIntegrationParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#create-guild-integration',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 130,
		},
	},
	{
		name: 'DiscordModifyGuildIntegration',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-integration',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/integration.ts',
			line: 138,
		},
	},
	{
		name: 'DiscordAuditLogPayload',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-object',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 10,
		},
	},
	{
		name: 'DiscordAuditLogEntry',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-struc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 22,
		},
	},
	{
		name: 'DiscordAuditLogEvent',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 40,
		},
	},
	{
		name: 'DiscordOptionalAuditEntryInfoParam',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 79,
		},
	},
	{
		name: 'DiscordAuditLogChange',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-str...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 99,
		},
	},
	{
		name: 'DiscordAuditLogChangeValue',
		kind: 'typeAlias',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-str...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 109,
		},
	},
	{
		name: 'DiscordGetGuildAuditLogParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-parameters',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 192,
		},
	},
	{
		name: 'DiscordGetAuditLogsOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/auditlog.ts',
			line: 203,
		},
	},
	{
		name: 'DiscordInvite',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/invite#invite-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/invite.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordInviteTargetUserTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/invite#invite-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/invite.ts',
			line: 24,
		},
	},
	{
		name: 'DiscordInviteMetadata',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/invite#invite-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/invite.ts',
			line: 29,
		},
	},
	{
		name: 'DiscordGetInviteURLParams',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/invite#get-invite',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/invite.ts',
			line: 43,
		},
	},
	{
		name: 'DiscordGuild',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/guild#guild-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 14,
		},
	},
	{
		name: 'DiscordDefaultMessageNotificationLevel',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 108,
		},
	},
	{
		name: 'DiscordExplicitContentFilterLevel',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 114,
		},
	},
	{
		name: 'DiscordMFALevel',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-mfa-level',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 121,
		},
	},
	{
		name: 'DiscordVerificationLevel',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-verification-level',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 127,
		},
	},
	{
		name: 'DiscordPremiumTier',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-premium-tier',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 136,
		},
	},
	{
		name: 'DiscordSystemChannelFlags',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 144,
		},
	},
	{
		name: 'DiscordGuildFeatures',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-object-guild-features',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 150,
		},
	},
	{
		name: 'DiscordUnavailableGuild',
		kind: 'typeAlias',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#unavailable-guild-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 169,
		},
	},
	{
		name: 'DiscordGuildPreview',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-preview-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 172,
		},
	},
	{
		name: 'DiscordGuildWidget',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 196,
		},
	},
	{
		name: 'DiscordBan',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/guild#ban-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 204,
		},
	},
	{
		name: 'DiscordMembershipScreening',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 211,
		},
	},
	{
		name: 'DiscordMembershipScreeningField',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 220,
		},
	},
	{
		name: 'DiscordMembershipScreeningFieldTypes',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 231,
		},
	},
	{
		name: 'DiscordCreateGuildParams',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/guild#create-guild',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 237,
		},
	},
	{
		name: 'DiscordGetGuildParams',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/guild#get-guild',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 263,
		},
	},
	{
		name: 'DiscordModifyGuildParams',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/guild#modify-guild',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 269,
		},
	},
	{
		name: 'DiscordCreateGuildChannelParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#create-guild-channel',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 303,
		},
	},
	{
		name: 'DiscordModifyGuildChannelPositionsParam',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 327,
		},
	},
	{
		name: 'DiscordListGuildMembersParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#list-guild-members',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 335,
		},
	},
	{
		name: 'DiscordAddGuildMemberParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#add-guild-member',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 343,
		},
	},
	{
		name: 'DiscordModifyGuildMemberParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-member',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 357,
		},
	},
	{
		name: 'DiscordModifyCurrentUserNickParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-current-user-nick',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 371,
		},
	},
	{
		name: 'DiscordCreateGuildBan',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#create-guild-ban',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 377,
		},
	},
	{
		name: 'DiscordCreateGuildRoleParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#create-guild-role',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 385,
		},
	},
	{
		name: 'DiscordModifyGuildRolePositionsParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-role-positions',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 399,
		},
	},
	{
		name: 'DiscordModifyGuildRoleParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-role',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 407,
		},
	},
	{
		name: 'DiscordGetGuildPruneCountParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#get-guild-prune-count',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 421,
		},
	},
	{
		name: 'DiscordBeginGuildPruneParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#begin-guild-prune',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 429,
		},
	},
	{
		name: 'DiscordGetGuildWidgetImageParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-integration',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 439,
		},
	},
	{
		name: 'DiscordGetGuildWidgetImageStyleOptions',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#modify-guild-integration',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 445,
		},
	},
	{
		name: 'DiscordModifyGuildMembershipScreeningFormParams',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/guild.ts',
			line: 458,
		},
	},
	{
		name: 'DiscordMessage',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 11,
		},
	},
	{
		name: 'DiscordMessageTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 67,
		},
	},
	{
		name: 'DiscordMessageActivity',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 90,
		},
	},
	{
		name: 'DiscordMessageApplication',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-application-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 98,
		},
	},
	{
		name: 'DiscordMessageReference',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 112,
		},
	},
	{
		name: 'DiscordMessageActivityTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-activity-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 122,
		},
	},
	{
		name: 'DiscordMessageFlags',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-flags',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 130,
		},
	},
	{
		name: 'DiscordMessageSticker',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 144,
		},
	},
	{
		name: 'DiscordMessageStickerFormatTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 164,
		},
	},
	{
		name: 'DiscordReaction',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 171,
		},
	},
	{
		name: 'DiscordAttachment',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 181,
		},
	},
	{
		name: 'DiscordChannelMention',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structu...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 199,
		},
	},
	{
		name: 'AllowedMentionTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 211,
		},
	},
	{
		name: 'DiscordAllowedMentions',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-struc...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 221,
		},
	},
	{
		name: 'DiscordGetChannelMessagesParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 233,
		},
	},
	{
		name: 'DiscordCreateMessageParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#create-message-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 245,
		},
	},
	{
		name: 'DiscordGetReactionsParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 265,
		},
	},
	{
		name: 'DiscordEditMessageParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#edit-message-json-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 275,
		},
	},
	{
		name: 'DiscordBulkDeleteMessagesParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#bulk-delete-messages-json-params',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/message.ts',
			line: 287,
		},
	},
	{
		name: 'DiscordRole',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/permissions#role-object-role-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/role.ts',
			line: 2,
		},
	},
	{
		name: 'DiscordRoleTags',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/role.ts',
			line: 24,
		},
	},
	{
		name: 'DiscordEmbed',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 2,
		},
	},
	{
		name: 'EmbedTypes',
		kind: 'typeAlias',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-types\n@deprecated',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 35,
		},
	},
	{
		name: 'DiscordEmbedThumbnail',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 44,
		},
	},
	{
		name: 'DiscordEmbedVideo',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 56,
		},
	},
	{
		name: 'DiscordEmbedImage',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 68,
		},
	},
	{
		name: 'DiscordEmbedProvider',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 80,
		},
	},
	{
		name: 'DiscordEmbedAuthor',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 88,
		},
	},
	{
		name: 'DiscordEmbedFooter',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 100,
		},
	},
	{
		name: 'DiscordEmbedField',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/embed.ts',
			line: 110,
		},
	},
	{
		name: 'DiscordTeam',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/teams#data-models-team-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/teams.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordTeamMembers',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/teams#data-models-team-members-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/teams.ts',
			line: 16,
		},
	},
	{
		name: 'DiscordMembershipState',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/teams.ts',
			line: 28,
		},
	},
	{
		name: 'DiscordGateway',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#payloads',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 43,
		},
	},
	{
		name: 'DiscordGatewayDTypes',
		kind: 'typeAlias',
		jsDoc: 'GatewayPayload event data type list',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 55,
		},
	},
	{
		name: 'DiscordGatewayTTypes',
		kind: 'typeAlias',
		jsDoc: 'GatewayPayload event name list',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 98,
		},
	},
	{
		name: 'DiscordGatewayURLParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#connecting-to-the-gateway',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 147,
		},
	},
	{
		name: 'DiscordGatewayIntents',
		kind: 'enum',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#gateway-intents',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 157,
		},
	},
	{
		name: 'DiscordIdentify',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#identify',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 248,
		},
	},
	{
		name: 'DiscordIdentifyConnectionProps',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 268,
		},
	},
	{
		name: 'DiscordResume',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#resume',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 278,
		},
	},
	{
		name: 'DiscordRequestGuildMembers',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#request-guild-members',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 288,
		},
	},
	{
		name: 'DiscordUpdateVoiceState',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#update-voice-state',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 304,
		},
	},
	{
		name: 'DiscordUpdateStatus',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#update-status',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 316,
		},
	},
	{
		name: 'DiscordStatusTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#update-status-status-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 328,
		},
	},
	{
		name: 'DiscordClientStatus',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#client-status-object',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 337,
		},
	},
	{
		name: 'DiscordActivity',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#activity-object',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 347,
		},
	},
	{
		name: 'DiscordActivityButton',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 388,
		},
	},
	{
		name: 'DiscordActivityTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-types',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 396,
		},
	},
	{
		name: 'DiscordActivityTimestamps',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 410,
		},
	},
	{
		name: 'DiscordActivityEmoji',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 418,
		},
	},
	{
		name: 'DiscordActivityParty',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-party',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 428,
		},
	},
	{
		name: 'DiscordActivityAssets',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 436,
		},
	},
	{
		name: 'DiscordActivitySecrets',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 448,
		},
	},
	{
		name: 'DiscordActivityFlags',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 458,
		},
	},
	{
		name: 'DiscordGetGatewayBot',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 468,
		},
	},
	{
		name: 'DiscordSessionStartLimit',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-st...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/gateway.ts',
			line: 478,
		},
	},
	{
		name: 'DiscordInteractionCommand',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 8,
		},
	},
	{
		name: 'DiscordInteractionType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 27,
		},
	},
	{
		name: 'DiscordInteractionData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 34,
		},
	},
	{
		name: 'DiscordApplicationCommandInteractionDataResolved',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 45,
		},
	},
	{
		name: 'DiscordInteractionDataOption',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 59,
		},
	},
	{
		name: 'DiscordApplicationCommand',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommand',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 71,
		},
	},
	{
		name: 'DiscordApplicationCommandOption',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 85,
		},
	},
	{
		name: 'DiscordApplicationCommandOptionType',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#Discordapplicationcommandoptiontype',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 103,
		},
	},
	{
		name: 'DiscordApplicationCommandOptionChoice',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 115,
		},
	},
	{
		name: 'DiscordApplicationCommandEvent',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/interaction.ts',
			line: 122,
		},
	},
	{
		name: 'DiscordApplication',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/oauth2#get-current-application-information',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/oauth2.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordRateLimitResponse',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/ratelimits.ts',
			line: 2,
		},
	},
	{
		name: 'DiscordEmoji',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/emoji.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordCreateGuildEmojiParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/emoji#create-guild-emoji',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/emoji.ts',
			line: 24,
		},
	},
	{
		name: 'DiscordModifyGuildEmojiParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/emoji#modify-guild-emoji',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/emoji.ts',
			line: 34,
		},
	},
	{
		name: 'DiscordGatewayOpcodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#opcodes-and-status-codes',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 2,
		},
	},
	{
		name: 'DiscordGatewayCloseEventCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#opcodes-and-status-codes',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 17,
		},
	},
	{
		name: 'DiscordVoiceOpcodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 35,
		},
	},
	{
		name: 'DiscordVoiceCloseEventCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 50,
		},
	},
	{
		name: 'DiscordHTTPResponseCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#http',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 66,
		},
	},
	{
		name: 'DiscordJsonErrorCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#json',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 81,
		},
	},
	{
		name: 'DiscordRpcErrorCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 161,
		},
	},
	{
		name: 'DiscordRpcCloseEventCodes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/code.ts',
			line: 181,
		},
	},
	{
		name: 'DiscordImageSize',
		kind: 'typeAlias',
		jsDoc: 'https://discord.com/developers/docs/reference#image-formatting',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/image.ts',
			line: 2,
		},
	},
	{
		name: 'DiscordImageFormat',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/image.ts',
			line: 3,
		},
	},
	{
		name: 'DiscordTemplate',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/template#template-resource',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/template.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordCreateGuildFromTemplateParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/template#create-guild-from-template',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/template.ts',
			line: 30,
		},
	},
	{
		name: 'DiscordCreateGuildTemplateParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/template#create-guild-template',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/template.ts',
			line: 38,
		},
	},
	{
		name: 'DiscordModifyGuildTemplateParams',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/template#modify-guild-template',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/template.ts',
			line: 46,
		},
	},
	{
		name: 'DiscordOverwrite',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/permission.ts',
			line: 1,
		},
	},
	{
		name: 'DiscordWebhook',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/webhook#webhook-resource',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/webhook.ts',
			line: 4,
		},
	},
	{
		name: 'DiscordWebhookTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/webhook#webhook-resource',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/api/webhook.ts',
			line: 26,
		},
	},
	{
		name: 'DiscordHelloEvent',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#hello',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 15,
		},
	},
	{
		name: 'DiscordReadyEvent',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#ready',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 21,
		},
	},
	{
		name: 'DiscordChannelPinsUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#channel-pins-update-channel-pins-update-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 39,
		},
	},
	{
		name: 'DiscordGuildBanAddEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 49,
		},
	},
	{
		name: 'DiscordGuildBanRemoveEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 57,
		},
	},
	{
		name: 'DiscordGuildEmojisUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-emojis-update-guild-emojis-update-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 65,
		},
	},
	{
		name: 'DiscordGuildIntegrationsUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-integrations-update-guild-integrations-upda...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 73,
		},
	},
	{
		name: 'DiscordGuildMemberAddExtra',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-member-add-guild-member-add-extra-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 79,
		},
	},
	{
		name: 'DiscordGuildMemberRemoveEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 85,
		},
	},
	{
		name: 'DiscordGuildMemberUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-member-update-guild-member-update-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 93,
		},
	},
	{
		name: 'DiscordGuildMembersChunkEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-members-chunk-guild-members-chunk-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 109,
		},
	},
	{
		name: 'DiscordGuildRoleCreateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-role-create-guild-role-create-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 127,
		},
	},
	{
		name: 'DiscordGuildRoleUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-role-update-guild-role-update-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 135,
		},
	},
	{
		name: 'DiscordGuildRoleDeleteEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#guild-role-delete-guild-role-delete-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 143,
		},
	},
	{
		name: 'DiscordIntegrationCreate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 151,
		},
	},
	{
		name: 'DiscordIntegrationUpdate',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 156,
		},
	},
	{
		name: 'DiscordIntegrationDelete',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 161,
		},
	},
	{
		name: 'DiscordInviteCreateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#invite-create-invite-create-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 171,
		},
	},
	{
		name: 'DiscordInviteDeleteEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#invite-delete-invite-delete-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 197,
		},
	},
	{
		name: 'DiscordMessageDeleteEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-delete-message-delete-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 207,
		},
	},
	{
		name: 'DiscordMessageDeleteBulkEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-delete-bulk-message-delete-bulk-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 217,
		},
	},
	{
		name: 'DiscordMessageReactionAddEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-reaction-add-message-reaction-add-event-f...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 227,
		},
	},
	{
		name: 'DiscordMessageReactionRemoveEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-reaction-remove-message-reaction-remove-e...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 243,
		},
	},
	{
		name: 'DiscordMessageReactionRemoveAllEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all-message-reaction-remo...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 257,
		},
	},
	{
		name: 'DiscordMessageReactionRemoveEmoji',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji-message-reaction-re...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 267,
		},
	},
	{
		name: 'DiscordPresenceUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 279,
		},
	},
	{
		name: 'DiscordTypingStartEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#typing-start-typing-start-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 293,
		},
	},
	{
		name: 'DiscordVoiceServerUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#voice-server-update-voice-server-update-event-fie...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 307,
		},
	},
	{
		name: 'DiscordWebhooksUpdateEvent',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/topics/gateway#webhooks-update-webhook-update-event-fields',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 317,
		},
	},
	{
		name: 'DiscordVoiceStateUpdateEvent',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/voice#voice-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/event.ts',
			line: 325,
		},
	},
	{
		name: 'DiscordBaseUser',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 1,
		},
	},
	{
		name: 'DiscordUser',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/user#users-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 13,
		},
	},
	{
		name: 'DiscordUserFlags',
		kind: 'enum',
		jsDoc: 'https://discord.com/developers/docs/resources/user#users-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 43,
		},
	},
	{
		name: 'DiscordPremiumTypes',
		kind: 'enum',
		jsDoc: 'https://discord.com/developers/docs/resources/user#users-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 61,
		},
	},
	{
		name: 'DiscordBaseMember',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 68,
		},
	},
	{
		name: 'DiscordMember',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/member.ts',
			line: 86,
		},
	},
	{
		name: 'DiscordVoiceRegion',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/api/voice.ts',
			line: 1,
		},
	},
	{
		name: 'InteractionCommandPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 3,
		},
	},
	{
		name: 'InteractionType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 20,
		},
	},
	{
		name: 'InteractionData',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 27,
		},
	},
	{
		name: 'InteractionDataOption',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 36,
		},
	},
	{
		name: 'ApplicationCommand',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommand',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 46,
		},
	},
	{
		name: 'ApplicationCommandOption',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 60,
		},
	},
	{
		name: 'ApplicationCommandOptionType',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 78,
		},
	},
	{
		name: 'ApplicationCommandOptionChoice',
		kind: 'interface',
		jsDoc:
			'https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 90,
		},
	},
	{
		name: 'ApplicationCommandEvent',
		kind: 'typeAlias',
		jsDoc: '@deprecated Use DiscordApplicationCommandEvent',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/types/interactions.ts',
			line: 99,
		},
	},
	{
		name: 'InvitePayload',
		kind: 'interface',
		jsDoc: 'https://discord.com/developers/docs/resources/invite#invite-object',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/invite.ts',
			line: 6,
		},
	},
	{
		name: 'InviteTargetUserTypes',
		kind: 'enum',
		jsDoc:
			'https://discord.com/developers/docs/resources/invite#invite-resource',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/invite.ts',
			line: 26,
		},
	},
	{
		name: 'EditMemberOptions',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/member.ts',
			line: 3,
		},
	},
	{
		name: 'MemberCreatePayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/member.ts',
			line: 17,
		},
	},
	{
		name: 'GuildMember',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/member.ts',
			line: 38,
		},
	},
	{
		name: 'InteractionMember',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/member.ts',
			line: 55,
		},
	},
	{
		name: 'ActivityPayload',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 1,
		},
	},
	{
		name: 'ActivityType',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 18,
		},
	},
	{
		name: 'ActivityTimestamps',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 31,
		},
	},
	{
		name: 'ActivityEmoji',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 36,
		},
	},
	{
		name: 'ActivityParty',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 42,
		},
	},
	{
		name: 'ActivityAssets',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 47,
		},
	},
	{
		name: 'ActivitySecrets',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 54,
		},
	},
	{
		name: 'ActivityFlags',
		kind: 'enum',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/activity.ts',
			line: 60,
		},
	},
	{
		name: 'BotConfig',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 35,
		},
	},
	{
		name: 'GuildUpdateChange',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 42,
		},
	},
	{
		name: 'OldMessage',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 48,
		},
	},
	{
		name: 'DebugArg',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 57,
		},
	},
	{
		name: 'EventHandlers',
		kind: 'interface',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 97,
		},
	},
	{
		name: 'Intents',
		kind: 'enum',
		jsDoc: 'https://discord.com/developers/docs/topics/gateway#list-of-intents',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/types/options.ts',
			line: 244,
		},
	},
	{
		name: 'memberIDHasPermission',
		kind: 'function',
		jsDoc:
			'Checks if the member has this permission. If the member is an owner or has admin perms it will alway...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 7,
		},
	},
	{
		name: 'memberHasPermission',
		kind: 'function',
		jsDoc:
			'Checks if the member has this permission. If the member is an owner or has admin perms it will alway...',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 26,
		},
	},
	{
		name: 'botHasPermission',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 51,
		},
	},
	{
		name: 'botHasChannelPermissions',
		kind: 'function',
		jsDoc: 'Checks if the bot has the permissions in a channel',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 83,
		},
	},
	{
		name: 'hasChannelPermissions',
		kind: 'function',
		jsDoc: 'Checks if a user has permissions in a channel.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 91,
		},
	},
	{
		name: 'calculatePermissions',
		kind: 'function',
		jsDoc: 'This function converts a bitwise string to permission strings',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 196,
		},
	},
	{
		name: 'calculateBits',
		kind: 'function',
		jsDoc:
			'This function converts an array of permissions into the bitwise string.',
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 204,
		},
	},
	{
		name: 'highestRole',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 211,
		},
	},
	{
		name: 'higherRolePosition',
		kind: 'function',
		jsDoc: null,
		location: {
			filename: 'https://deno.land/x/discordeno@10.5.0/src/util/permissions.ts',
			line: 236,
		},
	},
	{
		name: 'channelOverwriteHasPermission',
		kind: 'function',
		jsDoc:
			'Checks if a channel overwrite for a user id or a role id has permission in this channel',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 30,
		},
	},
	{
		name: 'getMessage',
		kind: 'function',
		jsDoc:
			'Fetch a single message from the server. Requires VIEW_CHANNEL and READ_MESSAGE_HISTORY',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 51,
		},
	},
	{
		name: 'getMessages',
		kind: 'function',
		jsDoc:
			'Fetches between 2-100 messages. Requires VIEW_CHANNEL and READ_MESSAGE_HISTORY',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 83,
		},
	},
	{
		name: 'getPins',
		kind: 'function',
		jsDoc: 'Get pinned messages in this channel.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 122,
		},
	},
	{
		name: 'startTyping',
		kind: 'function',
		jsDoc:
			'Trigger a typing indicator for the specified channel. Generally bots should **NOT** implement this r...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 135,
		},
	},
	{
		name: 'sendMessage',
		kind: 'function',
		jsDoc: 'Send a message to the channel. Requires SEND_MESSAGES permission.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 166,
		},
	},
	{
		name: 'deleteMessages',
		kind: 'function',
		jsDoc:
			'Delete messages from the channel. 2-100. Requires the MANAGE_MESSAGES permission',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 282,
		},
	},
	{
		name: 'getChannelInvites',
		kind: 'function',
		jsDoc: 'Gets the invites for this channel. Requires MANAGE_CHANNEL',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 318,
		},
	},
	{
		name: 'createInvite',
		kind: 'function',
		jsDoc:
			'Creates a new invite for this channel. Requires CREATE_INSTANT_INVITE',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 335,
		},
	},
	{
		name: 'getInvite',
		kind: 'function',
		jsDoc: 'Returns an invite for the given code.',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 372,
		},
	},
	{
		name: 'deleteInvite',
		kind: 'function',
		jsDoc:
			'Deletes an invite for the given code. Requires `MANAGE_CHANNELS` or `MANAGE_GUILD` permission',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 381,
		},
	},
	{
		name: 'getChannelWebhooks',
		kind: 'function',
		jsDoc: 'Gets the webhooks for this channel. Requires MANAGE_WEBHOOKS',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 409,
		},
	},
	{
		name: 'editChannel',
		kind: 'function',
		jsDoc:
			"Update a channel's settings. Requires the `MANAGE_CHANNELS` permission for the guild.",
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 474,
		},
	},
	{
		name: 'followChannel',
		kind: 'function',
		jsDoc:
			'Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permissio...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 546,
		},
	},
	{
		name: 'isChannelSynced',
		kind: 'function',
		jsDoc:
			'Checks whether a channel is synchronized with its parent/category channel or not.\n@param channelID T...',
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/handlers/channel.ts',
			line: 575,
		},
	},
	{
		name: 'controllers',
		kind: 'variable',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/mod.ts',
			line: 59,
		},
	},
	{
		name: 'Controllers',
		kind: 'typeAlias',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/mod.ts',
			line: 101,
		},
	},
	{
		name: 'updateControllers',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/controllers/mod.ts',
			line: 103,
		},
	},
	{
		name: 'createMessage',
		kind: 'function',
		jsDoc: null,
		location: {
			filename:
				'https://deno.land/x/discordeno@10.5.0/src/api/structures/message.ts',
			line: 136,
		},
	},
];
