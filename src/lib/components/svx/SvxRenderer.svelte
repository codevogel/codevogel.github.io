<script lang="ts">
   import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
   import { loadSvx } from '$lib/loadSvx';
   import { fade } from 'svelte/transition';

   export let slug: string;
   let contentVisible = false;
</script>

{#await loadSvx(slug)}
   <div
      class="m-8 grid grid-rows-1 justify-center"
      transition:fade
      on:outroend={() => (contentVisible = true)}
   >
      <Spinner />
   </div>
{:then svx}
   {#if contentVisible}
      <div class="flex w-full flex-grow flex-col items-center gap-y-4" transition:fade>
         <div class="post-container">
            <h1>{svx.meta.title}</h1>
            <svelte:component this={svx.content} />
         </div>
      </div>
   {/if}
{/await}

<style lang="scss">
   :global {
      .post-container {
         @apply mb-[-6rem] flex w-[100%] max-w-[64ch] flex-grow flex-col border-2 border-accent bg-background-950 px-8 pb-[7rem];

         img {
            @apply my-4;
         }

         h1 {
            @apply my-4 py-4 first:mt-0;
         }

         h2 {
            @apply my-2 py-2;
         }

         .toc {
            @apply max-w-[65%] rounded-3xl border-[2px] border-accent/70 bg-gradient-to-t from-accent/50 to-background-900/50 px-4 py-4;
         }

         .toc::before {
            content: 'Table of Contents';
            @apply text-xl font-extrabold;
         }

         .toc ol {
            @apply list-inside list-[">_"] text-primary;
         }

         ol {
            @apply mx-4 list-outside list-decimal p-0;
         }

         ol li {
            @apply my-2 pl-2;
         }

         ol li ::marker {
            @apply m-8 block px-2;
         }

         ul {
            @apply ms-4 list-outside list-disc;
         }

         ul ul {
            @apply ps-8;
         }

         ul li {
            @apply mx-4 my-2;
         }

         ::marker {
            @apply px-4 text-red-500;
         }

         .toc-item {
            @apply text-justify;
            line-height: 100%;
         }

         .toc-link {
            @apply underline hover:rounded-sm hover:bg-primary hover:text-black;
         }

         .toc-item:last-child {
            @apply border-b-0;
         }

         .shiki {
            @apply my-2 overflow-x-scroll py-2;
         }

         a {
            @apply text-primary underline;
         }

         p {
            @apply my-2;
         }

         table {
            @apply m-2 border-4 bg-accent/50;
         }
         td {
            @apply p-2;
         }

         .shiki code {
            @apply bg-none;
            counter-reset: step;
            counter-increment: step calc(var(--start, 1) - 1);

            .line::before {
               content: counter(step);
               counter-increment: step;
               width: 1rem;
               margin-right: 1.5rem;
               display: inline-block;
               text-align: right;
               color: rgba(115, 138, 148, 0.4);
            }
         }

         code:not(.shiki code) {
            @apply rounded-sm bg-accent px-2 py-1;
         }
      }
   }
</style>
