<script lang="ts">
	import ClipSvg from './logo/clip-svg.svelte';

	let logoScale = 0.5;

	let { topLevel = true } = $props();
</script>

<div class="flex flex-col gap-y-4 text-center">
	{#if topLevel}
		<h1>Find me on</h1>
	{:else}
		<h2>Find me on</h2>
	{/if}
	<div class="flex flex-row justify-center gap-x-8 {topLevel ? 'md:gap-x-12' : ''}">
		<a href="https://github.com/codevogel/" class={topLevel ? 'md:scale-125' : ''}>
			<ClipSvg path="/logos/svg/logo-github.svg" scale={logoScale} />
		</a>
		<a href="https://www.youtube.com/@codevogel_yt" class={topLevel ? 'md:scale-125' : ''}>
			<ClipSvg path="/logos/svg/logo-youtube.svg" scale={logoScale} />
		</a>
		<a
			href="https://www.linkedin.com/in/kamiel-de-visser/"
			class={topLevel ? 'md:scale-125' : ''}
		>
			<ClipSvg path="/logos/svg/logo-linkedin.svg" scale={logoScale} />
		</a>
	</div>
</div>
