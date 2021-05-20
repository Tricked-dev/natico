export * from 'https://raw.githubusercontent.com/discordeno/discordeno/main/mod.ts';
export { join } from 'https://deno.land/std@0.95.0/path/mod.ts';
export * from 'https://deno.land/std@0.95.0/fmt/colors.ts';
export * from './lib/interfaces.ts';
export { Embed, embed } from './lib/embed.ts';
import config from './settings.ts';
export const { token, settings, credentials } = config;
