export type Project = {
	title: string;
	shortDescription: string;
	description: string;
	slug: string;
	hasGif?: boolean;
	wip?: boolean;
	youtubeURL?: string;
};

export const projects: Project[] = [
	{
		title: 'Detective Duck',
		shortDescription: 'Demonstrates use of LLMs in serious games.',
		description: 'A visual novel game where you play as a duck detective solving mysteries.',
		slug: 'detective-duck',
		youtubeURL: 'https://www.youtube.com/watch?v=e1HN3MVz4hs'
	},
	{
		title: 'Reggie: The Game',
		shortDescription: 'A gravity-bending platformer in which you travel through time',
		description: 'Control the direction of gravity as you, run, jump and explore in a time-traveling adventure.',
		slug: 'reggie',
		youtubeURL: 'https://www.youtube.com/watch?v=EsMAK-gHFMI'
	},
	{
		title: 'Look Out!',
		shortDescription: 'An eye-tracked horror game. Every glance could be your last.',
		description: 'A horror game that uses eye-tracking technology to create an immersive and terrifying experience.',
		slug: 'look-out'
	},
	{
		title: 'Ouija.TV',
		shortDescription: 'Play Ouija with your twitch chat. Let the spirits guide you.',
		description: 'Ouija.tv was an online multiplayer Ouija board that allowed streamers to ask questions to their viewers.',
		slug: 'ouija-tv'
	},
	{
		title: 'Robotlab VR',
		shortDescription: 'VR training simulator for industrial robots.',
		description: 'A virtual reality application that allows users to train operating with industrial robots in a safe environment.',
		slug: 'robotlab-vr',
		youtubeURL: 'https://www.youtube.com/watch?v=oIzACzUwmVM'
	},
	{
		title: 'Runic Roots',
		shortDescription: 'A farming game meets a deckbuilder.',
		description: 'Build out your deck by growing and harvesting magical plants, then use your deck to defeat enemies.',
		wip: true,
		slug: 'runic-roots'
	},
	{
		title: 'Pogo Peaks',
		shortDescription: 'Climb a mountain using a pogo stick.',
		description: 'A physics-based climbing game where you use a pogo stick to ascend challenging peaks.',
		hasGif: true,
		wip: true,
		slug: 'pogo-peaks'
	},
	{
		title: 'Liars',
		shortDescription: 'A physical card game about deception and deduction.',
		description: 'A social trivia game where players bluff, and try to catch others in their lies.',
		wip: true,
		slug: 'liars'
	}
	
];
