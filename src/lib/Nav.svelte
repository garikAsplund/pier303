<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		window.addEventListener('scroll', () => (scrolled = window.scrollY > 50));
	});

	const links = [
		['#top', 'Contact'],
		['#specials', 'Specials'],
		['#about', 'About Us'],
		['#vendors', 'Our Vendors'],
		['#farmers-market', 'Farmers Market'],
		['#map', 'Find Us']
	];
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 w-full h-12 md:h-auto transition-all
    {scrolled ? 'md:bg-white/30 md:shadow backdrop-blur-md' : 'bg-transparent'}"
>
	<div class="flex w-full items-center justify-between px-4 py-4">
		<!-- desktop -->
		<ul class="hidden w-full items-center justify-center space-x-8 md:flex">
			{#each links as [href, label]}
				<li><a {href} class="text-lg font-bold hover:text-gray-600">{label}</a></li>
			{/each}
		</ul>
		<!-- hamburger / close -->
		<button class="md:hidden absolute top-2 right-4 text-2xl z-60" onclick={() => (isMenuOpen = !isMenuOpen)}>
			{isMenuOpen ? '✕' : '☰'}
		</button>
	</div>

	<!-- mobile overlay -->
	<div
		class="fixed inset-0 z-50 h-screen transform bg-white/20
         backdrop-blur-lg transition-transform duration-300 md:hidden"
		class:translate-x-0={isMenuOpen}
		class:translate-x-full={!isMenuOpen}
	>
		<ul
			class="flex h-screen flex-col items-center justify-center
             space-y-6 overflow-auto text-xl"
		>
			{#each links as [href, label]}
				<li>
					<a {href} onclick={() => (isMenuOpen = false)} class="block px-4 py-2">
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
