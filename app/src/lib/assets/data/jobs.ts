export type Job = {
	company: string;
	position: string;
	location: string;
	startDate: Date;
	endDate: Date | 'Present';
	description: string;
	href: string;
	logoPath: string;
};

export const jobs: Job[] = [
	{
		company: 'GLU',
		position: 'Educator Creative\nSoftware Engineering',
		location: 'Utrecht, NL',
		startDate: new Date('2024-04-01'),
		endDate: 'Present',
		description:
			'I develop and teach a curriculum in creative software development, emphasizing Game, XR, and Web technologies used in modern studios.',
		href: 'https://www.glu.nl/',
		logoPath: '/logos/svg/logo-glu-square.svg'
	},
	{
		company: 'Superprof',
		position: 'Self-employed Tutor',
		location: 'Amsterdam, NL',
		startDate: new Date('2021-09-01'),
		endDate: 'Present',
		description:
			'I provide personalized tutoring in game development to students of various ages and educational levels.',
		href: 'https://www.super-prof.nl/s/programmeren,Amsterdam,52.3675734,4.9041389,1,1018954.html',
		logoPath: '/logos/svg/logo-superprof.svg'
	},
	{
		company: '&Ranj',
		position: 'Thesis Intern: AI generated\ndialogue for serious games',
		location: 'Rotterdam, NL',
		startDate: new Date('2023-09-01'),
		endDate: new Date('2024-02-01'),
		description:
			'Performed a study on how game designers can use large-language models to provide meaningful conversation in serious games, and built a proof-of-concept game',
		href: 'https://www.ranj.com/',
		logoPath: '/logos/svg/logo-ranj.svg'
	},
	{
		company: 'University of Amsterdam',
		position: 'Teaching Assistant: Minor Programming',
		location: 'Amsterdam, NL',
		startDate: new Date('2022-09-01'),
		endDate: new Date('2024-01-01'),
		description:
			'Assistant tutor of the Minor Programming at the University of Amsterdam. Organised and supervised a learning route for Game Development in Unity, and taught programming in C, C# & Python.',
		href: 'https://www.uva.nl/',
		logoPath: '/logos/svg/logo-uva.svg'
	},
	{
		company: 'Degoma',
		position: 'Intern game design, development, and porting',
		location: 'Amsterdam, NL',
		startDate: new Date('2021-09-01'),
		endDate: new Date('2022-02-01'),
		description:
			'Worked on content for ‘Reggie, his cousin, two scientists and most likely the end of the world’. Designing and implementing game mechanics for a boss, and studying how the IP should be ported to a mobile game.',
		href: 'https://degoma.games/',
		logoPath: '/logos/svg/logo-degoma.svg'
	}
];
