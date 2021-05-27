import { Collection } from './deps.ts';
import {
	ButtonCollector,
	MessageCollector,
	ReactionCollector,
} from './lib/Pagination.ts';
export const bot = {
	fullyReady: false,
	activeGuildIDs: new Set<bigint>(),
	dispatchedGuildIDs: new Set<bigint>(),
	dispatchedChannelIDs: new Set<bigint>(),

	guildPrefixes: new Collection<bigint, string>(),
	guildLanguages: new Collection<bigint, string>(),
	messageCollectors: new Collection<bigint, MessageCollector>(),
	reactionCollectors: new Collection<bigint, ReactionCollector>(),
	buttonCollectors: new Collection<bigint, ButtonCollector>(),
};
