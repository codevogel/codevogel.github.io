<script lang="ts">
	import ClipSvg from '$lib/components/ui/logo/clip-svg.svelte';

	let { skills } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<h3 class="text-xl font-bold">Skills</h3>
	{#each skills as skill, i (i)}
		<h4 class="text-md my-2 text-foreground/50">{skill.name}</h4>
		<div class="flex max-w-60 flex-wrap justify-center gap-x-4 gap-y-2">
			{#each skill.items as item, j (j)}
				<div class="flex flex-col items-center text-center">
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={item.href}>
						<ClipSvg path={item.logoPath} scale={0.3} />
					</a>
				</div>
			{/each}
		</div>
	{/each}
</div>
