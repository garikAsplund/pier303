<!-- +page.svelte -->
<script lang="ts">
	import About from '$lib/About.svelte';
	import FarmersMarket from '$lib/FarmersMarket.svelte';
	import Hero from '$lib/Hero.svelte';
	import SpecialsCalendar from '$lib/SpecialsCalendar.svelte';
	import Vendors from '$lib/Vendors.svelte';
	import Map from '$lib/Map.svelte';
</script>

<div class="relative w-full">
	<Hero />
	<SpecialsCalendar />
	<About />
	<enhanced:img src="/static/divider.jpeg" alt="Grilling" class="h-[600px] w-full object-cover" />
	<Vendors />
	<enhanced:img src="/static/lobster.jpg" alt="Lobster" class="h-[600px] w-full object-cover" />
	<FarmersMarket />
	<enhanced:img src="/static/divider2.jpeg" alt="Salmon" class="h-[600px] w-full object-cover" />
	<Map />
</div>
