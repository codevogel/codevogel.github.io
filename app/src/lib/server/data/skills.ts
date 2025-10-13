type Skill = {
	name: string;
	href: string;
	logoPath: string;
};

export type SkillGroup = {
	name: string;
	items: Skill[];
};

export const skillGroups: SkillGroup[] = [
	{
		name: 'Game Engines',
		items: [
			{ name: 'Unity', href: 'https://unity.com/', logoPath: '/logos/svg/skills/logo-unity.svg' },
			{ name: 'Unreal Engine', href: 'https://www.unrealengine.com/', logoPath: '/logos/svg/skills/logo-unreal.svg' },
			{ name: 'Godot', href: 'https://godotengine.org/', logoPath: '/logos/svg/skills/logo-godot.svg' }
		]
	},
	{
		name: 'Design Tools',
		items: [
			{ name: 'Blender', href: 'https://www.blender.org/', logoPath: '/logos/svg/skills/logo-blender.svg' },
			{ name: 'MagicaVoxel', href: 'https://ephtracy.github.io/', logoPath: '/logos/svg/skills/logo-magicavoxel.svg' },
			{
				name: 'Material\nMaker',
				href: 'https://rodzilla.itch.io/material-maker',
				logoPath: '/logos/svg/skills/logo-material-maker.svg'
			},
			{ name: 'Figma', href: 'https://www.figma.com/', logoPath: '/logos/svg/skills/logo-figma.svg' },
			{
				name: 'Adobe\nIllustrator',
				href: 'https://www.adobe.com/products/illustrator.html',
				logoPath: '/logos/svg/skills/logo-illustrator.svg'
			},
			{
				name: 'Adobe\nPhotoshop',
				href: 'https://www.adobe.com/products/photoshop.html',
				logoPath: '/logos/svg/skills/logo-photoshop.svg'
			},
			{
				name: 'Adobe\nSubstance Painter',
				href: 'https://www.adobe.com/products/substance3d/apps/painter.html',
				logoPath: '/logos/svg/skills/logo-substance-painter.svg'
			},
			{
				name: 'Adobe\nLightroom',
				href: 'https://www.adobe.com/products/photoshop-lightroom.html',
				logoPath: '/logos/svg/skills/logo-lightroom.svg'
			}
		]
	},
	{
		name: 'Technologies',
		items: [
			{ name: 'React', href: 'https://react.dev/', logoPath: '/logos/svg/skills/logo-react.svg' },
			{ name: 'Svelte', href: 'https://svelte.dev/', logoPath: '/logos/svg/skills/logo-svelte.svg' },
			{ name: 'Vue', href: 'https://vuejs.org/', logoPath: '/logos/svg/skills/logo-vue.svg' },
			{ name: 'Tailwind\nCSS', href: 'https://tailwindcss.com/', logoPath: '/logos/svg/skills/logo-tailwind.svg' },
			{ name: 'Bootstrap', href: 'https://getbootstrap.com/', logoPath: '/logos/svg/skills/logo-bootstrap.svg' },
			{ name: 'Umbraco\nCMS', href: 'https://umbraco.com/', logoPath: '/logos/svg/skills/logo-umbraco.svg' },
			{
				name: 'Xamarin',
				href: 'https://dotnet.microsoft.com/en-us/apps/xamarin',
				logoPath: '/logos/svg/skills/logo-xamarin.svg'
			},
			{ name: 'MySQL', href: 'https://www.mysql.com/', logoPath: '/logos/svg/skills/logo-mysql.svg' },
			{ name: 'MongoDB', href: 'https://www.mongodb.com/', logoPath: '/logos/svg/skills/logo-mongodb.svg' },
			{ name: 'Drizzle', href: 'https://orm.drizzle.team/', logoPath: '/logos/svg/skills/logo-drizzle.svg' }
		]
	},
	{
		name: 'Programming Languages',
		items: [
			{ name: 'C', href: 'https://www.c-language.org/', logoPath: '/logos/svg/skills/logo-c.svg' },
			{ name: 'C++', href: 'https://isocpp.org/', logoPath: '/logos/svg/skills/logo-cplusplus.svg' },
			{ name: 'C#', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/', logoPath: '/logos/svg/skills/logo-csharp.svg' },
			{ name: 'Java', href: 'https://www.java.com/', logoPath: '/logos/svg/skills/logo-java.svg' },
			{ name: 'Kotlin', href: 'https://kotlinlang.org/', logoPath: '/logos/svg/skills/logo-kotlin.svg' },
			{ name: 'Python', href: 'https://www.python.org/', logoPath: '/logos/svg/skills/logo-python.svg' },
			{ name: 'Lua', href: 'https://www.lua.org/', logoPath: '/logos/svg/skills/logo-lua.svg' },
			{
				name: 'JavaScript',
				href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				logoPath: '/logos/svg/skills/logo-javascript.svg'
			},
			{ name: 'TypeScript', href: 'https://www.typescriptlang.org/', logoPath: '/logos/svg/skills/logo-typescript.svg' }
		]
	}
];
