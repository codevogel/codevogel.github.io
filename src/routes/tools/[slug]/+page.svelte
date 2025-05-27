<script lang="ts">
   import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
   import { page } from '$app/stores';
   import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';

   async function getImageSource(slug: string) {
      const path = `/tools/${slug}/${slug}`;
      const gifPath = `${path}.gif`;
      const pngPath = `${path}.png`;

      // Check if the gif exists

      const gifExists = await fetch(gifPath)
         .then((res) => res.ok)
         .catch(() => false);

      if (gifExists) return gifPath;
      return pngPath;
   }
</script>

<div class="flex flex-row justify-center">
   {#await getImageSource($page.params.slug)}
      <Spinner />
   {:then source}
      <img
         src={source}
         alt={$page.params.slug}
         class="flex h-64 w-full max-w-[64ch] justify-self-center object-cover"
      />
   {/await}
</div>
<SvxRenderer slug={$page.params.slug} />
