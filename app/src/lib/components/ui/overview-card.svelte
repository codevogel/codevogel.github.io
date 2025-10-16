<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';

	let { href, title, shortDescription, wip } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="flex no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20"
>
	<Card.Root class="gap-y-0 py-1">
		<Card.Header>
			<Card.Title class="hover-altered text-[.74rem] font-extrabold"
				>{title}{wip ? ' [WIP]' : ''}</Card.Title
			>
		</Card.Header>
		<Card.Content class="flex flex-col px-0 text-[.625rem] text-foreground/50">
			{shortDescription}
		</Card.Content>
	</Card.Root>
</a>
