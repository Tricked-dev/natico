import axiod from 'https://deno.land/x/axiod/mod.ts';
import i from '../settings.ts';
export const github = axiod.create({
	baseURL: 'https://api.github.com/',
	timeout: 1000,
	headers: {
		'User-Agent': 'Malil',
		'Authorization': `token ${i.credentials.github}`,
	},
});
