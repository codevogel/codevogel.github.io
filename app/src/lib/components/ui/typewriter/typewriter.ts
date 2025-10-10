export type Message = {
	lines: MessageLine[];
	class?: string;
	style?: string;
};

export type MessageLine = {
	chunks: MessageLineChunk[];
	delay?: number;
	class?: string;
	style?: string;
}

export type MessageLineChunk = {
	text: string;
	delay?: number;
	class?: string;
	style?: string;
	href?: string;
}
