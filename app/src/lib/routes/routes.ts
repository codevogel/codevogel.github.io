export type Page = {
	name: string;
	path: string;
	icon?: string;
	showInNav?: boolean;
};

export const pages: Page[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Tools', path: '/tools' },
	{ name: 'Contact', path: '/contact' }
];
