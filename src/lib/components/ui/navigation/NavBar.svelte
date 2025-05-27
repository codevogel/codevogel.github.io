<script lang="ts">
   import WordLogo from '$lib/components/ui/polish/logo/WordLogo.svelte';
   import { page } from '$app/stores';
   import NavButton from './NavButton.svelte';

   // The routes to be displayed in the navbar.
   const routes = [
      { name: 'Home', href: '/', hovered: false },
      { name: 'Projects', href: '/projects/', hovered: false },
      { name: 'Tools', href: '/tools/', hovered: false },
      { name: 'Contact', href: '/contact/', hovered: false }
   ];

   $: navButtonColor = (route: any) => {
      if (route.hovered) return 'text-primary';
      const active = $page.url.pathname === route.href;
      if (active) {
         const noOtherRouteHovered = routes
            .filter((route) => route.href !== $page.url.pathname) // Exclude the current page
            .every((route) => !route.hovered);
         if (noOtherRouteHovered) return 'text-primary';
      }
      return 'text-primary/75';
   };

   let className = '';
   export { className as class };
</script>

<nav class="{className} flex w-full flex-col items-center">
   <a href="/" class="mt-2">
      <img class="w-[20rem]" src="/logos/logo-codevogel-text.svg" />
   </a>
   <div class="grid grid-flow-col-dense grid-rows-1 items-start justify-center gap-x-8">
      {#each routes as route}
         <NavButton
            class="{navButtonColor(
               route
            )} underline decoration-transparent transition-colors duration-500 hover:decoration-primary"
            name={route.name}
            href={route.href}
            bind:hovered={route.hovered}
         />
      {/each}
   </div>
</nav>
