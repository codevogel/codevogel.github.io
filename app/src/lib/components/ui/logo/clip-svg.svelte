<script lang="ts">
	let { path, scale = 1, class: className = 'bg-foreground hover:bg-primary' } = $props();

	const baseSize = 100;

	let height = $derived(`${baseSize * scale}px`);
	let width = $derived(`${baseSize * scale}px`);
</script>

<div class={className} style="mask:url({path}) no-repeat center">
	<img src={path} class="aspect-square opacity-0" {height} {width} alt="logo for {path}" />
</div>
