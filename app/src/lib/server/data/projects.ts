export type Project = {
	title: string;
	shortDescription: string;
	description: string;
	slug: string;
	youtubeURL?: string;
};

export const projects: Project[] = [
	{
		title: 'Detective Duck',
		shortDescription: 'Demonstrates use of LLMs in serious games.',
		description: 'A visual novel game where you play as a duck detective solving mysteries.',
		slug: 'detective-duck',
		youtubeURL: 'https://www.youtube.com/watch?v=e1HN3MVz4hs'
	}
];
