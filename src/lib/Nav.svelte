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

	$effect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 h-12 w-full transition-all md:h-auto
    {scrolled ? 'backdrop-blur-md md:bg-white/30 md:shadow' : 'bg-transparent'}"
>
	<div class="flex w-full items-center justify-between px-4 py-4">
		<!-- desktop -->
		<ul class="hidden w-full items-center justify-center space-x-8 md:flex">
			{#each links as [href, label]}
				<li><a {href} class="text-lg font-bold hover:text-gray-600">{label}</a></li>
			{/each}
		</ul>
		<!-- hamburger / close -->
		<button
			class="absolute top-2 right-4 z-60 text-2xl md:hidden"
			onclick={() => (isMenuOpen = !isMenuOpen)}
		>
			{isMenuOpen ? '✕' : '☰'}
		</button>
	</div>

	<!-- mobile overlay -->
	<div
		class="mobile-menu-overlay fixed inset-0 z-50 h-screen transform
         transition-transform duration-300 will-change-transform
         md:hidden"
		style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
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

<style>
	.mobile-menu-overlay {
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-perspective: 1000;
		perspective: 1000;
	}
</style>
