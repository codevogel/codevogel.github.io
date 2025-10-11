<script lang="ts">
	let {
		children,
		fgColor = 'var(--foreground)',
		bgColor = 'var(--background)',
		hoverFgColor = 'var(--primary)',
		hoverBgColor = 'var(--background)',
		baseWidth = 100,
		baseHeight = 100,
		scale = 1
	} = $props();

	let width = $derived(baseWidth * scale);
	let height = $derived(baseHeight * scale);
</script>

<div
	class="svg-wrapper"
	style:--fg-color={fgColor}
	style:--bg-color={bgColor}
	style:--hover-fg-color={hoverFgColor}
	style:--hover-bg-color={hoverBgColor}
	style:width="{width}px"
	style:height="{height}px"
>
	{@render children?.()}
</div>

<style>
	.svg-wrapper {
		display: inline-block;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.svg-wrapper :global(svg) {
		width: 100%;
		height: 100%;
	}

	.svg-wrapper :global(.fg) {
		fill: var(--fg-color);
		transition: fill 0.2s ease;
	}

	.svg-wrapper :global(.bg) {
		fill: var(--bg-color);
		transition: fill 0.2s ease;
	}

	.svg-wrapper:hover :global(.fg) {
		fill: var(--hover-fg-color);
	}

	.svg-wrapper:hover :global(.bg) {
		fill: var(--hover-bg-color);
	}
</style>
