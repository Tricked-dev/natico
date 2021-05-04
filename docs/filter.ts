import { denodoc } from './discorddeno.ts';

Deno.writeTextFile(
	'ddoc.ts',
	Deno.inspect(await denodoc.nodes.filter((i) => i.kind !== 'import'), {
		depth: 400,
	})
);
