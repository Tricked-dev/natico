import { Interaction } from '../deps.ts';
export interface CommandInteraction extends Interaction {
	name: string;
}
