<script lang="ts">
	import ClipSvg from './logo/clip-svg.svelte';

	let logoScale = 0.5;
</script>

<div class="flex flex-col gap-y-4 text-center">
	<h1>Find me on</h1>
	<div class="flex flex-row justify-center gap-x-8">
		<a href="https://github.com/codevogel/">
			<ClipSvg path="/logos/svg/logo-github.svg" scale={logoScale} />
		</a>
		<a href="https://www.youtube.com/@codevogel_yt">
			<ClipSvg path="/logos/svg/logo-youtube.svg" scale={logoScale} />
		</a>
		<a href="https://www.linkedin.com/in/kamiel-de-visser/">
			<ClipSvg path="/logos/svg/logo-linkedin.svg" scale={logoScale} />
		</a>
	</div>
</div>
