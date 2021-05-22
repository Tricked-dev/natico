import axiod from 'https://deno.land/x/axiod/mod.ts';
const denodoc = await axiod(
	'https://doc.deno.land/api/docs?entrypoint=https://raw.githubusercontent.com/discordeno/discordeno/main/mod.ts',
	{
		method: 'get',
	}
);
interface fn {
	kind: string;
	name: string;
	jsDoc: string;
	location: {
		filename: string;
		line: string;
	};
}
const iss = denodoc.data.nodes.filter(
	(i: fn) => i.kind !== 'import' && i.kind !== 'interface'
);
const data = new Set();
iss.forEach((i: fn) => {
	if (i.name) {
		data.add({
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
const array = Array.from(data);
const encoder = new TextEncoder();
for (const i in array) {
	const str = encoder.encode(`${Deno.inspect(array[i], { depth: 3 })},`);

	await Deno.writeFile('docs/ddocs.json', str, { append: true });
}
