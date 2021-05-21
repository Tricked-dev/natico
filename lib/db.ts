// import { Sabr, SabrTable } from '../deps.ts';
// import { GuildSchema } from './schemas.ts';
// class naticoGuildDb extends SabrTable<GuildSchema> {
// 	async getPrefix(guildId: BigInt) {
// 		if (!this.has(guildId.toString())) return;
// 		const guilddata = await this.get(guildId.toString());
// 		if (guilddata && guilddata.prefix) return guilddata.prefix;
// 	}
// 	setPrefix(guildId: BigInt, prefix: string) {
// 		prefix = prefix.toLowerCase().trim();
// 		return this.update(guildId.toString(), { prefix });
// 	}
// 	async addPrefix(guildId: BigInt, prefix: string) {
// 		prefix = prefix.toLowerCase().trim();
// 		const prefixes = await this.getPrefix(guildId);
// 		if (prefixes && Array.isArray(prefixes)) {
// 			prefixes.push(prefix);
// 			await this.update(guildId.toString(), { prefix: prefixes });
// 		}
// 		if (prefixes && typeof prefix == 'string') {
// 			await this.update(guildId.toString(), {
// 				prefix: Array.from(new Set([...prefix, ...prefixes])),
// 			});
// 		} else await this.update(guildId.toString(), { prefix });

// 		const guilddata = await this.get(guildId.toString());
// 		if (guilddata && guilddata.prefix) return guilddata.prefix;
// 	}
// 	async delPrefix(guildId: BigInt, prefix: string) {
// 		prefix = prefix.toLowerCase().trim();
// 		const prefixes = await this.getPrefix(guildId);
// 		if (prefixes && typeof prefixes !== 'string') {
// 			for (let i = 0; i < prefixes.length; i++) {
// 				if (prefixes[i] === prefix) prefixes.splice(i, 1);
// 			}
// 			return this.update(guildId.toString(), { prefix: prefixes });
// 		}
// 	}
// }
// // Create the database class
// const sabr = new Sabr();

// export const db = {
// 	// This will allow us to access table methods easily as we will see below.
// 	sabr,
// 	guilds: new naticoGuildDb(sabr, 'guilds'),
// };

// // This is important as it prepares all the tables.
// await sabr.init();
