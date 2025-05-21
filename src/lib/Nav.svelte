<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import { page } from '$app/state';

	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let { scrollY } = $props();

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 z-50 w-full {scrolled
		? 'bg-white/30 shadow-sm backdrop-blur-md transition-all duration-800'
		: 'bg-transparent md:transition-all md:duration-800'}"
>
	<div class="container mx-auto px-4 py-4 md:px-6">
		<div class="relative flex items-center justify-center">
			<!-- Left Navigation Links -->
			<div class="flex items-center gap-4 md:space-x-10">
				<a
					href="#top"
					class="text-sm font-normal text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>Contact</a
				>
				<a
					href="#specials"
					class="text-sm font-normal whitespace-nowrap text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>Specials</a
				>
				<a
					href="#about"
					class="text-sm font-normal whitespace-nowrap text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>About Us</a
				>
				<a
					href="#vendors"
					class="text-sm font-normal text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>Our Vendors</a
				>
				<a
					href="#farmers-market"
					class="text-sm font-normal whitespace-nowrap text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>Farmers Market</a
				>
				<a
					href="#map"
					class="text-sm font-normal whitespace-nowrap text-gray-900 transition hover:text-gray-600 md:text-lg md:font-bold"
					>Find Us</a
				>
				<!-- <a
					href="https://www.instagram.com/pier303seafood/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-800 transition hover:text-pink-600 md:hidden"
					aria-label="Instagram"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-4 w-4 md:h-6 md:w-6"
					>
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
						/>
					</svg>
				</a> -->
			</div>
			<!-- <div class="absolute right-0 hidden md:block">
				<a
					href="https://www.instagram.com/pier303seafood/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-800 transition hover:text-pink-600"
					aria-label="Instagram"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-4 w-4 md:h-6 md:w-6"
					>
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
						/>
					</svg>
				</a>
			</div> -->
		</div>
	</div>
</nav>
