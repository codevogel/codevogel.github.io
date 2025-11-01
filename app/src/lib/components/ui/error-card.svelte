<script>
	import * as Card from '$lib/components/shadcn-svelte/ui/card';

	import { page } from '$app/state';

	const status = $derived(page.status);
	const errorMessage = $derived(page.error?.message ?? undefined);
</script>

<Card.Root>
	<Card.Header>
		<h1>Oops! 😦</h1>
		<p class="subscript">Something went wrong while trying to load this page.</p>
	</Card.Header>
	<Card.Content>
		<h2>
			{status}
		</h2>
		{#if errorMessage}
			<p>
				{errorMessage}
			</p>
		{/if}
	</Card.Content>
</Card.Root>
