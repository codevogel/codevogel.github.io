<script lang="ts">

	let { children } = $props();

</script>


<div
	class="max-h-page-without-header snap-y snap-mandatory overflow-y-scroll [&>:last-child]:min-h-0 [&>:last-child]:snap-align-none [&>main>*]:flex [&>main>*]:min-h-page-without-header [&>main>*]:snap-start [&>main>*]:flex-col [&>main>*]:justify-center"
>
	{@render children?.()}
</div>
