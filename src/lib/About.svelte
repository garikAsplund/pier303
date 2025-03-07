<script>
	import Seafood from './Seafood.svelte';

	const brandCategories = [
		{
			title: 'Specialty Brands',
			type: 'grid',
			brands: [
				'Momofuku',
				'Mina',
				'Masienda',
				'Xilli',
				'Fishwife',
				'Matiz',
				'Zach&Zoe',
				'Chico Rice',
				'Garza',
				'Mementa',
				'Ginger People',
				'Toadfish',
				'Food To Live',
				'Patagonia',
				'Bokksu',
				'Siesta Co.',
				'Ekone',
				'River Wave Foods',
				'MOB',
				'La Bonnemer',
				'Tiny Fish Co',
				'Rustic Bakery',
				'La Monarca',
				'Pure Indian Foods',
				'Rumi',
				'Maxi Masa',
				'San Juan Sea Salt',
				'Jacobsen Co',
				'Verve Culture',
				'Son',
				'Wok Mei',
				'Bianco',
				'Coca Cola',
				'Di Bruno Bros.',
				'Morenita',
				'Sierra Nevada',
				"Eichten's Cheese",
				'ThaiFusions Co',
				'Los Roasts',
				"Mama Lil's",
				'Paladini',
				'Sea Change Seafoods',
				'Occo',
				'Made by Mama',
				'School of Wok',
				'Hop Water',
				'Charity Leaf',
				'Nueats',
				'Real Conserva',
				'Mantova',
				'Valente Market',
				'Fischer & Wieser'
			]
		},
		{
			title: 'Premium Seafood Partners',
			type: 'list',
			brands: [
				'Taylor Shellfish Seafood',
				'Hawaiian Fresh Seafood',
				'Peterson Plus',
				'Santa Monica Seafood',
				"Luke's Lobster"
			],
			iconColor: 'text-cyan-600'
		},
		{
			title: 'Local Partnerships',
			type: 'list',
			description: 'We proudly source from local farms and producers to support our community:',
			brands: ['Park Street Farmette', 'Lazy Mule Farm', 'Alder Slope Nursery'],
			iconColor: 'text-green-600'
		}
	];
</script>

<section id="about">
	<div class="relative z-10 w-full bg-amber-100 px-4 py-16 md:px-8">
		<div class="mx-auto max-w-6xl">
			<!-- Header with Seafood SVG -->
			<div class="mb-12 flex flex-col items-center">
				<div class=" mb-8 flex justify-center">
					<Seafood />
				</div>
				<h1 class="mb-4 text-center text-4xl font-bold text-teal-800 md:text-5xl">About Us</h1>
				<div class="mb-8 h-1 w-24 rounded bg-teal-500"></div>

				<!-- About Us Blurb -->
				<div class="mb-16 max-w-3xl text-center">
					<p class="mb-4 text-lg text-gray-700">
						At Pier 303, we're passionate about bringing the freshest seafood to Wallowa County. Our
						journey began with a simple mission: to connect our mountain community with exceptional
						seafood sourced sustainably from the coast.
					</p>
					<p class="text-lg text-gray-700">
						Every week, we carefully select and prepare our offerings to ensure you experience the
						ocean's finest flavors, right here in Enterprise!
					</p>
				</div>

				<!-- Photo Gallery -->
				<h2 class="mb-8 text-center text-3xl font-semibold text-teal-800">Our Fares</h2>

				<!-- Photo Grid - Flex on desktop, Grid on mobile -->
				<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:flex md:space-x-6">
					<!-- Photo 1 -->
					<div class="flex-1 rounded-lg bg-white p-3 shadow-md">
						<enhanced:img
							src="/static/tuna.jpg"
							alt="Fresh seafood display"
							class="mb-4 h-64 w-full rotate-180 rounded-md object-cover"
							loading="lazy"
						/>
						<h3 class="mb-2 text-lg font-medium text-teal-700">Fresh Fish</h3>
						<p class="text-gray-600">The finest seafood carefully selected each week.</p>
					</div>

					<!-- Photo 2 -->
					<div class="flex-1 rounded-lg bg-white p-3 shadow-md">
						<enhanced:img
							src="/static/grabbag.jpg"
							alt="Our storefront"
							class="mb-4 h-64 w-full rounded-md object-cover"
							loading="lazy"
						/>
						<h3 class="mb-2 text-lg font-medium text-teal-700">Our Market</h3>
						<p class="text-gray-600">
							Take your larder to the next level with our premium offerings.
						</p>
					</div>

					<!-- Photo 3 -->
					<div class="flex-1 rounded-lg bg-white p-3 shadow-md">
						<enhanced:img
							src="/static/shrimp.jpg"
							alt="Preparing seafood"
							class="mb-4 h-64 w-full rounded-md object-cover"
							loading="lazy"
						/>
						<h3 class="mb-2 text-lg font-medium text-teal-700">Grab and Go</h3>
						<p class="text-gray-600">Eat your heart out.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex w-full justify-center bg-sky-300">
		<div class="mt-16 flex max-w-4xl flex-col items-center">
			<h3 class="mb-8 text-center text-2xl font-bold text-slate-900">Our Curated Brands</h3>

			<div class="mb-16 grid gap-12">
				{#each brandCategories as category}
					<div>
						<h4 class="mb-4 border-b border-gray-600/60 pb-2 text-xl font-semibold text-cyan-900">
							{category.title}
						</h4>

						<div class="mt-4 columns-1 gap-x-6 sm:columns-2 md:columns-3 lg:columns-4">
							{#each category.brands as brand}
								<div class="mb-2 break-inside-avoid">
									<span class="text-gray-700">{brand}</span>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
