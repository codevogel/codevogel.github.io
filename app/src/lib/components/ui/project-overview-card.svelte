<script lang="ts">
	import * as Card from '$lib/components/shadcn-svelte/ui/card/index.js';
	import type { Project } from '$lib/server/data/projects';

	import { page } from '$app/state';

	let { project }: { project: Project } = $props();

	let url = $derived(page.url.pathname + '#' + project.slug);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={url}
	class="no-underline [&:hover_.hover-altered]:text-primary [&>:first-child:hover]:border-foreground/20"
>
	<Card.Root class="py-2 gap-0">
		<Card.Header>
			<Card.Title class="hover-altered text-xs">{project.title}</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-y-4 px-0 text-xxs">
			{project.shortDescription}
		</Card.Content>
	</Card.Root>
</a>
