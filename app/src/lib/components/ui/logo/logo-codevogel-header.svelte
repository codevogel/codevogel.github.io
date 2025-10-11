<script lang="ts">
	import SvgLogo from './svg-logo.svelte';
	import LogoCodevogelText from './svg/logo-codevogel-text.svelte';

	let logoWrapper: HTMLDivElement;

	let logoHover = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="mx-auto max-h-24"
	bind:this={logoWrapper}
	onmouseenter={() => (logoHover = true)}
	onmouseleave={() => (logoHover = false)}
>
	<SvgLogo scale={logoHover ? 1.05 : 1} baseWidth={300}>
		<LogoCodevogelText />
	</SvgLogo>
</div>
