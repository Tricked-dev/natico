export * from 'https://deno.land/x/discordeno@11.0.0-rc.4/mod.ts';
export { join } from 'https://deno.land/std@0.95.0/path/mod.ts';
export { sprintf } from 'https://deno.land/std/fmt/printf.ts';
export * from 'https://deno.land/std@0.95.0/fmt/colors.ts';
export * from 'https://deno.land/std@0.97.0/fs/mod.ts';
export * from './lib/interfaces.ts';
export * from 'https://deno.land/x/powerlog/mod.ts';
export * from './settings.ts';
export { embed, Embed } from './lib/embed.ts';
import config from './settings.ts';

export const { token, settings, credentials } = config;
