<script lang="ts">
	import SvgLogo from './logo/svg-logo.svelte';

	// Game Engines
	import LogoUnity from './logo/svg/skills/logo-unity.svelte';
	import LogoUnreal from './logo/svg/skills/logo-unreal.svelte';
	import LogoGodot from './logo/svg/skills/logo-godot.svelte';

	// Design Tools
	import LogoBlender from './logo/svg/skills/logo-blender.svelte';
	import LogoFigma from './logo/svg/skills/logo-figma.svelte';
	import LogoIllustrator from './logo/svg/skills/logo-illustrator.svelte';
	import LogoPhotoshop from './logo/svg/skills/logo-photoshop.svelte';
	import LogoLightroom from './logo/svg/skills/logo-lightroom.svelte';
	import LogoMaterialMaker from './logo/svg/skills/logo-material-maker.svelte';

	// Web / UI Technologies
	import LogoReact from './logo/svg/skills/logo-react.svelte';
	import LogoSvelte from './logo/svg/skills/logo-svelte.svelte';
	import LogoVue from './logo/svg/skills/logo-vue.svelte';
	import LogoTailwind from './logo/svg/skills/logo-tailwind.svelte';
	import LogoBootstrap from './logo/svg/skills/logo-bootstrap.svelte';
	import LogoUmbraco from './logo/svg/skills/logo-umbraco.svelte';
	import LogoMongoDB from './logo/svg/skills/logo-mongodb.svelte';
	import LogoMySQL from './logo/svg/skills/logo-mysql.svelte';

	// Programming Languages
	import LogoC from './logo/svg/skills/logo-c.svelte';
	import LogoCSharp from './logo/svg/skills/logo-csharp.svelte';
	import LogoCpp from './logo/svg/skills/logo-cplusplus.svelte';
	import LogoJava from './logo/svg/skills/logo-java.svelte';
	import LogoKotlin from './logo/svg/skills/logo-kotlin.svelte';
	import LogoPython from './logo/svg/skills/logo-python.svelte';
	import LogoLua from './logo/svg/skills/logo-lua.svelte';
	import LogoJavascript from './logo/svg/skills/logo-javascript.svelte';
	import LogoTypescript from './logo/svg/skills/logo-typescript.svelte';
	import LogoXamarin from './logo/svg/skills/logo-xamarin.svelte';
	import type { Component } from 'svelte';
	import LogoMagicavoxel from './logo/svg/skills/logo-magicavoxel.svelte';
	import LogoSubstancePainter from './logo/svg/skills/logo-substance-painter.svelte';
	import LogoMongodb from './logo/svg/skills/logo-mongodb.svelte';
	import LogoDrizzle from './logo/svg/skills/logo-drizzle.svelte';

	type SkillItem = {
		name: string;
		href: string;
		logo: Component;
	};

	type SkillGroup = {
		name: string;
		items: SkillItem[];
	};

	let skills: SkillGroup[] = [
		{
			name: 'Game Engines',
			items: [
				{ name: 'Unity', href: 'https://unity.com/', logo: LogoUnity },
				{ name: 'Unreal Engine', href: 'https://www.unrealengine.com/', logo: LogoUnreal },
				{ name: 'Godot', href: 'https://godotengine.org/', logo: LogoGodot }
			]
		},
		{
			name: 'Design Tools',
			items: [
				{ name: 'Blender', href: 'https://www.blender.org/', logo: LogoBlender },
				{ name: 'MagicaVoxel', href: 'https://ephtracy.github.io/', logo: LogoMagicavoxel },
				{ name: 'Material\nMaker', href: 'https://rodzilla.itch.io/material-maker', logo: LogoMaterialMaker },
				{ name: 'Figma', href: 'https://www.figma.com/', logo: LogoFigma },
				{ name: 'Adobe\nIllustrator', href: 'https://www.adobe.com/products/illustrator.html', logo: LogoIllustrator },
				{ name: 'Adobe\nPhotoshop', href: 'https://www.adobe.com/products/photoshop.html', logo: LogoPhotoshop },
				{ name: 'Adobe\nSubstance Painter', href: 'https://www.adobe.com/products/substance3d/apps/painter.html', logo: LogoSubstancePainter },
				{ name: 'Adobe\nLightroom', href: 'https://www.adobe.com/products/photoshop-lightroom.html', logo: LogoLightroom },
			]
		},
		{
			name: 'Technologies',
			items: [
				{ name: 'React', href: 'https://react.dev/', logo: LogoReact },
				{ name: 'Svelte', href: 'https://svelte.dev/', logo: LogoSvelte },
				{ name: 'Vue', href: 'https://vuejs.org/', logo: LogoVue },
				{ name: 'Tailwind\nCSS', href: 'https://tailwindcss.com/', logo: LogoTailwind },
				{ name: 'Bootstrap', href: 'https://getbootstrap.com/', logo: LogoBootstrap },
				{ name: 'Umbraco\nCMS', href: 'https://umbraco.com/', logo: LogoUmbraco },
				{ name: 'Xamarin', href: 'https://dotnet.microsoft.com/en-us/apps/xamarin', logo: LogoXamarin },
				{ name: 'MySQL', href: 'https://www.mysql.com/', logo: LogoMySQL },
				{ name: 'MongoDB', href: 'https://www.mongodb.com/', logo: LogoMongodb },
				{ name: 'Drizzle', href: 'https://orm.drizzle.team/', logo: LogoDrizzle }
			]
		},
		{
			name: 'Programming Languages',
			items: [
				{ name: 'C', href: 'https://www.c-language.org/', logo: LogoC },
				{ name: 'C++', href: 'https://isocpp.org/', logo: LogoCpp },
				{ name: 'C#', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/', logo: LogoCSharp },
				{ name: 'Java', href: 'https://www.java.com/', logo: LogoJava },
				{ name: 'Kotlin', href: 'https://kotlinlang.org/', logo: LogoKotlin },
				{ name: 'Python', href: 'https://www.python.org/', logo: LogoPython },
				{ name: 'Lua', href: 'https://www.lua.org/', logo: LogoLua },
				{ name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', logo: LogoJavascript },
				{ name: 'TypeScript', href: 'https://www.typescriptlang.org/', logo: LogoTypescript },
			]
		}
	];
</script>

<div class="flex flex-col items-center justify-center gap-y-1">
	<h3 class="text-xl font-bold">Skills</h3>
	{#each skills as skill, i (i)}
		<h4 class="text-foreground/50 mb-2">{skill.name}</h4>
		<div class="flex flex-wrap justify-center gap-x-4 max-w-60">
			{#each skill.items as item, j (j)}
				<div class="flex flex-col items-center text-center">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={item.href} target="_blank" rel="noopener noreferrer">
						<SvgLogo scale={0.3}>
							<item.logo />
						</SvgLogo>
					</a>
				</div>
			{/each}
		</div>
	{/each}
</div>
