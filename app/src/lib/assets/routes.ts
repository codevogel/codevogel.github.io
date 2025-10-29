export type Page = {
	name: string;
	path: string;
	icon?: string;
	showInNav?: boolean;
};

export const pages: Page[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Games', path: '/games' },
	{ name: 'Tools', path: '/tools' },
	{ name: 'Contact', path: '/contact' }
];
