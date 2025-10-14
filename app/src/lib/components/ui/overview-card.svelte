<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';

	let { href, title, shortDescription, wip } = $props()
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={href}
	class="no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20"
>
	<Card.Root class="py-1 gap-y-0">
		<Card.Header>
			<Card.Title class="hover-altered font-extrabold text-[.74rem]">{title}{wip ? " [WIP]" : ""}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col px-0 text-[.625rem] text-foreground/50">
			{shortDescription}
		</Card.Content>
	</Card.Root>
</a>
