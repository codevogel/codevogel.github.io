<script lang="ts">
   import ToolCard from '$lib/components/ui/card/ToolCard.svelte';

   // Loads the data from ./+page.server.ts -> load()
   export let data;
</script>

<div class="flex w-full justify-center">
   <div
      class="grid max-w-screen-lg flex-grow grid-cols-1 items-center gap-x-12 gap-y-6 p-8 sm:grid-cols-2"
   >
      {#each data.posts as post}
         <ToolCard {post} />
      {/each}
   </div>
</div>
