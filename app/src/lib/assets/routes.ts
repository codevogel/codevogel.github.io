export type Page = {
	name: string;
	path: string;
	title: string;
	icon?: string;
	showInNav?: boolean;
};

export const baseTitle = 'codevogel 🐦';

export const pages: Page[] = [
	{ name: 'Home', path: '/', title: `Home | ${baseTitle}` },
	{ name: 'Games', path: '/games', title: `Games | ${baseTitle}`},
	{ name: 'Tools', path: '/tools', title: `Tools | ${baseTitle}` },
	{ name: 'Contact', path: '/contact', title: `Contact | ${baseTitle}` },
];
