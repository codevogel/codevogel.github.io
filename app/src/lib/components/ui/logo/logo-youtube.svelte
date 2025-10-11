<script>
	let { scale = 1, fill = '#000', fillBg = '#fff'  } = $props();

	const baseSize = 100;

	let width = $derived(baseSize * scale);
	let height = $derived(baseSize * scale);
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="{fillBg}" {width} {height} viewBox="0 0 512 512"><rect height="512" rx="15%" width="512"/><path d="M427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174" fill="{fill}"/><path d="M220 203v106l93-53"/></svg>

