<script lang="ts">
	import ClipSvg from '$lib/components/ui/logo/clip-svg.svelte';
	import type { SkillGroup } from '$lib/assets/data/skills';

	let { skillGroups }: { skillGroups: SkillGroup[] } = $props();
</script>

<div class="flex flex-col items-center justify-center md:gap-y-4">
	<h1>Skills</h1>
	{#each skillGroups as skill, i (i)}
		<h4 class="text-md my-2 text-foreground/50 md:text-lg">{skill.name}</h4>
		<div
			class="flex max-w-60 flex-wrap justify-center gap-x-4 gap-y-2 md:max-w-96 md:gap-x-8 md:gap-y-6"
		>
			{#each skill.items as item, j (j)}
				<div class="flex flex-col items-center text-center">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={item.href} class="md:scale-125">
						<ClipSvg path={item.logoPath} scale={0.3} />
					</a>
				</div>
			{/each}
		</div>
	{/each}
</div>
