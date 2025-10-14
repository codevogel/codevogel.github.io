export type Tool = {
	title: string;
	shortDescription: string;
	description: string;
	slug: string;
	hasGif?: boolean;
	wip?: boolean;
	youtubeURL?: string;
};

export const tools: Tool[] = [
	{
		title: 'Godot Doctor',
		shortDescription: 'A plugin that helps you validate your scenes in Godot.',
		description:
			'A powerful validation plugin for Godot that catches errors before they reach runtime. Validate scenes, nodes, and resources using a declarative, test-driven approach. No @tool required!',
		slug: 'godot-doctor'
	},
	{
		title: 'Perspective Shader',
		shortDescription: 'A shader that creates a faux 3D perspective effect in Godot.',
		description:
			'A versatile shader for Godot that simulates a faux 3D perspective effect. Perfect for creating depth and immersion in 2D games, this shader can be easily customized to fit your art style and game design needs.',
		slug: 'faux-3d-perspective-shader',
		hasGif: true,
	},
	{
		title: 'mkp5',
		shortDescription: 'Creates p5.js projects from the command line.',
		description:
			'A command-line tool that streamlines the creation of p5.js projects. With mkp5, you can quickly set up a new p5.js project with a single command.',
		slug: 'mkp5',
	},
	{
		title: 'pls',
		shortDescription: 'pls centralize aliases! Unify your workflow with context-aware alias management.',
		description:
			'Project Level Shortcuts (pls) is a command-line tool that allows you to create, manage, and execute custom context-aware aliases for frequently used commands using portable .pls.yml files.',
		slug: 'pls',
	},
	{
		title: 'Circuit Patch Converter',
		shortDescription: 'Converts patches between different formats for the Novation Circuit.',
		description:
			'Converts patches from the old Novation Circuit format to the new Circuit format, bringing back backwards compatability.',
		slug: 'circuit-patch-converter',
	}
];
