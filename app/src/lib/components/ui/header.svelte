<script lang="ts">
	import MainNav from '$lib/components/ui/navigation/main-nav.svelte';
	import LogoCodevogelText from '$lib/components/ui/logo/logo-codevogel-header.svelte';
	import WaveBorder from '$lib/components/ui/wave-border.svelte';
</script>

<header class="flex h-header flex-col items-center overflow-x-clip bg-accent/30 ">
	<div class="flex flex-col p-2">
		<LogoCodevogelText />
		<MainNav />
	</div>
	<WaveBorder flipY={true} className="place-self-start z-50 h-12 " />
</header>
