<!-- +page.svelte -->
<script lang="ts">
	import About from '$lib/About.svelte';
	import Catering from '$lib/Catering.svelte';
	import FarmersMarket from '$lib/FarmersMarket.svelte';
	import Hero from '$lib/Hero.svelte';
</script>

<div class="relative w-full">
	<Hero />
	<About />
	<enhanced:img src="/static/lobster.jpg" alt="Lobster" class="h-[600px] w-full object-cover" />
	<FarmersMarket />
	<enhanced:img src="/static/divider.jpeg" alt="Grilling" class="h-[600px] w-full object-cover" />
	<Catering />
	<enhanced:img src="/static/divider2.jpeg" alt="Salmon" class="h-[600px] w-full object-cover" />
</div>
