import { Interaction, Message } from '../deps.ts';
export interface CommandInteraction extends Interaction {
	name: string;
}
export interface CommandInterface {
	name: string;
	description: string;
	enabled: boolean;
	slash: boolean;
	category: string;
	exec: (message: Message) => any;
	SlashData?: any;
	execSlash: (interaction: Interaction, reply: (stuff: any) => any) => any;
}
