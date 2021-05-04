import { Collection } from '../deps.ts';
import axiod from 'https://deno.land/x/axiod/mod.ts';
const denodoc = await axiod(
	'https://doc.deno.land/api/docs?entrypoint=https://deno.land/x/discordeno/mod.ts',
	{
		method: 'get',
	}
);
const iss = denodoc.data.nodes.filter((i) => i.kind !== 'import');
const uniqueChars = [...new Set(iss)];
const functions = new Collection();
uniqueChars.forEach((i) => {
	if (i.name) {
		functions.set(i.name, {
			name: i.name,
			kind: i.kind,
			jsDoc: i.jsDoc,
			location: {
				filename: i.location.filename,
				line: i.location.line,
			},
		});
	}
});
const array = Array.from(functions, ([name, value]) => value);
const encoder = new TextEncoder();
for (const i in array) {
	const str = encoder.encode(`${Deno.inspect(array[i], { depth: 3 })},`);

	await Deno.writeFile('file.txt', str, { append: true });
}
