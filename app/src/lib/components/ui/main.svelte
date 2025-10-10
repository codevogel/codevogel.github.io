<script lang="ts">
	let { children } = $props();
</script>

<main class="[&>:last-child]:min-h-page-without-header-and-footer">
	{@render children?.()}
</main>
