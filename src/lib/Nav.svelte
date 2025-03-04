<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import { page } from '$app/state';
	
	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	
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
  
<nav class="{page.url.pathname === '/' ? 'fixed' : 'sticky'} top-0 w-full z-50  {scrolled ? 'bg-white shadow-md transition-all duration-800' : 'bg-transparent md:transition-all md:duration-800'} {isMenuOpen ? 'bg-white shadow-md transition-none' : 'bg-transparent'}">
	<div class="container mx-auto px-4 md:px-6">
	  <!-- Desktop Navigation -->
	  <div class="hidden md:flex items-center justify-center relative">
	    <div class="flex-1 flex justify-end mr-12">
	      <!-- Left Navigation Links -->
	      <div class="flex space-x-10 items-center">
	        <a href="/catering" class="text-gray-800 hover:text-gray-600 transition text-lg font-bold">Catering</a>
	        <a href="/farmers-market" class="text-gray-800 hover:text-gray-600 transition text-lg font-bold whitespace-nowrap">Farmers Market</a>
	      </div>
	    </div>
	    
	    <!-- Centered Logo -->
	    <div class="flex-shrink-0 lg:px-24 px-12">
	      <a href="/" class="inline-block hover:opacity-80">
	        <Logo />
	      </a>
	    </div>
	    
	    <div class="flex-1 flex justify-start ml-12">
	      <!-- Right Navigation Links -->
	      <div class="flex space-x-10 items-center">
	        <a href="/about" class="text-gray-800 hover:text-gray-600 transition text-lg font-bold whitespace-nowrap">About Us</a>
	      
	        <a href="https://www.instagram.com/pier303seafood/" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-pink-600 transition" aria-label="Instagram">
	          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
	            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
	          </svg>
	        </a>
	      </div>
	    </div>
	  </div>

	  <!-- Mobile Navigation -->
	  <div class="md:hidden flex justify-between items-center">
	    <!-- Empty div to maintain flex spacing -->
	    <div class="w-6"></div>
	    
	    <!-- Centered Mobile Logo -->
	    <div class="flex justify-center">
	      <a href="/" class="inline-block">
	        <Logo />
	      </a>
	    </div>
	    
	    <!-- Mobile Menu Button -->
	    <button class="text-gray-800" onclick={toggleMenu}>
	      {#if isMenuOpen}
	        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
	        </svg>
	      {:else}
	        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
	        </svg>
	      {/if}
	    </button>
	  </div>
	  
	  <!-- Mobile Menu -->
	  {#if isMenuOpen}
	    <div class="md:hidden pt-4 pb-4">
	      <div class="flex flex-col space-y-4 items-center">
	        <a href="/catering" class="text-gray-800 hover:text-gray-600 transition text-xl font-medium">Catering</a>
	        <a href="/farmers-market" class="text-gray-800 hover:text-gray-600 transition text-xl font-medium">Farmers Market</a>
	        <a href="/about" class="text-gray-800 hover:text-gray-600 transition text-xl font-medium">About Us</a>
	        <a href="https://www.instagram.com/pier303seafood/" class="text-gray-800 hover:text-pink-600 transition flex items-center text-xl font-medium" aria-label="Instagram">
	          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
	            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
	          </svg>
	        </a>
	      </div>
	    </div>
	  {/if}
	</div>
</nav>