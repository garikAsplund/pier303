<script>
	import Seafood from './Seafood.svelte';
</script>

<div class="relative z-10 w-full  bg-amber-100 py-16 px-4 md:px-8" id="about">
	<div class="max-w-6xl mx-auto">
		<!-- Header with Seafood SVG -->
		<div class="flex flex-col items-center mb-12">
			<div class=" flex justify-center mb-8">
				<Seafood />
			</div>
			<h1 class="text-4xl md:text-5xl font-bold text-teal-800 mb-4 text-center">About Us</h1>
			<div class="w-24 h-1 bg-teal-500 rounded mb-8"></div>
			
			<!-- About Us Blurb -->
			<div class="max-w-3xl text-center mb-16">
				<p class="text-lg text-gray-700 mb-4">
					At Pier 303, we're passionate about bringing the freshest seafood to Wallowa County. Our journey began with a simple mission: to connect our mountain community with exceptional seafood sourced sustainably from the coast.
				</p>
				<p class="text-lg text-gray-700">
					Every week, we carefully select and prepare our offerings to ensure you experience the ocean's finest flavors, right here in Enterprise!
				</p>
			</div>
			
			<!-- Photo Gallery -->
			<h2 class="text-3xl font-semibold text-teal-800 mb-8 text-center">Our Fares</h2>
			
			<!-- Photo Grid - Flex on desktop, Grid on mobile -->
			<div class="w-full md:flex md:space-x-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
				<!-- Photo 1 -->
				<div class="bg-white p-3 rounded-lg shadow-md flex-1">
					<enhanced:img 
						src="/static/tuna.jpg" 
						alt="Fresh seafood display" 
						class="w-full h-64 object-cover rounded-md mb-4 rotate-180"
						loading="lazy"
					/>
					<h3 class="font-medium text-lg text-teal-700 mb-2">Fresh Fish</h3>
					<p class="text-gray-600">The finest seafood carefully selected each week.</p>
				</div>
				
				<!-- Photo 2 -->
				<div class="bg-white p-3 rounded-lg shadow-md flex-1">
					<enhanced:img 
						src="/static/grabbag.jpg" 
						alt="Our storefront" 
						class="w-full h-64 object-cover rounded-md mb-4"
						loading="lazy"
					/>
					<h3 class="font-medium text-lg text-teal-700 mb-2">Our Market</h3>
					<p class="text-gray-600">Take your larder to the next level with our premium offerings.</p>
				</div>
				
				<!-- Photo 3 -->
				<div class="bg-white p-3 rounded-lg shadow-md flex-1">
					<enhanced:img 
						src="/static/shrimp.jpg" 
						alt="Preparing seafood" 
						class="w-full h-64 object-cover rounded-md mb-4"
						loading="lazy"
					/>
					<h3 class="font-medium text-lg text-teal-700 mb-2">Grab and Go</h3>
					<p class="text-gray-600">Eat your heart out.</p>
				</div>
			</div>
		</div>
	</div>
</div>