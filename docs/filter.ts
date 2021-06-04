import axiod from 'https://deno.land/x/axiod/mod.ts';
const denodoc = await axiod(
	'https://doc.deno.land/api/docs?entrypoint=https://deno.land/x/discordeno@11.0.0-rc.5/mod.ts',
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
let str = JSON.stringify(array);
await Deno.writeFile('docs/ddocs.json', new TextEncoder().encode(str), {
	append: false,
});
