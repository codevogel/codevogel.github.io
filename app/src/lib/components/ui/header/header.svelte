<script lang="ts">
	import MainNav from '$lib/components/ui/header/navigation/main-nav.svelte';
	import LogoCodevogelText from '$lib/components/ui/header/logo/logo-codevogel-text.svelte';
	import WaveBorder from '$lib/components/ui/header/waveborder/wave-border.svelte';
</script>

<header class="flex flex-col overflow-x-clip bg-accent/30 items-center h-navbar">
	<div class="flex flex-col p-2">
		<LogoCodevogelText />
		<MainNav />
	</div>
	<WaveBorder
		flipY={true}
		className="place-self-start z-50 h-12 "
	/>
</header>
