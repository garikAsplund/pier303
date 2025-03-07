<script lang="ts">
	import Shell from './Shell.svelte';
</script>

<div class="relative z-10 w-full bg-violet-100 px-4 py-16 md:px-8" id="farmers-market">
	<div class="mx-auto max-w-6xl">
		<!-- Header with Sardines SVG and title -->
		<div class="mb-12 flex flex-col items-center">
			<div class="mb-4 h-32 w-32">
				<Shell />
			</div>
			<h2 class="mb-3 text-center text-4xl font-bold text-gray-800">Farmers Market</h2>
			<div class="mb-6 h-1 w-24 rounded bg-violet-900"></div>
		</div>

		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- Left side: Information -->
			<div>
				<!-- Market Details Card -->
				<div class="mb-8 rounded-lg bg-white p-8 shadow-md">
					<h3 class="mb-6 text-2xl font-semibold text-gray-700">Find Us at the Market</h3>

					<!-- Hours -->
					<div class="mb-6">
						<h4 class="mb-3 flex items-center text-lg font-medium text-gray-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5 text-violet-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							Market Hours
						</h4>
						<div class="pl-7">
							<p class="mb-1 text-gray-700">Saturdays</p>
							<p class="font-medium text-gray-700">9:00 AM - 2:00 PM</p>
							<p class="mt-1 text-sm text-gray-600">Memorial Day through October</p>
						</div>
					</div>

					<!-- Location -->
					<div class="mb-6">
						<h4 class="mb-3 flex items-center text-lg font-medium text-gray-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5 text-violet-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							Market Location
						</h4>
						<a
							href="https://maps.app.goo.gl/Z7zpPZSzoLryYyb78"
							aria-label="Farmers Market Location"
							class="hover:opacity-75"
						>
							<div class="pl-7">
								<p class="mb-1 text-gray-700">E 1st St</p>
								<p class="text-gray-700">Joseph, Oregon</p>
							</div></a
						>
					</div>

					<!-- What We Offer -->
					<div>
						<h4 class="mb-3 flex items-center text-lg font-medium text-gray-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="mr-2 h-5 w-5 text-violet-800"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							What We Offer
						</h4>
						<div class="pl-7">
							<p class="mb-2 text-gray-700">
								Visit our booth for fresh seafood, special market-only items, and cooking tips from
								our team!
							</p>
							<p class="text-gray-700">
								Pre-orders welcome for pickup at the market. Contact us by Thursday for Saturday
								pickup.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right side: Photos -->
			<div class="grid grid-cols-2 gap-4">
				<!-- Photo 1 -->
				<div class="col-span-2 overflow-hidden rounded-lg shadow-md">
					<enhanced:img
						src="/static/clams.jpg"
						alt="Our farmers market booth"
						class="h-96 w-full object-cover"
						loading="lazy"
					/>
				</div>

				<!-- Photo 2 -->
				<div class="overflow-hidden rounded-lg shadow-md">
					<enhanced:img
						src="/static/sangria.jpg"
						alt="Fresh seafood display at market"
						class="aspect-square w-full object-cover object-bottom"
						loading="lazy"
					/>
				</div>

				<!-- Photo 3 -->
				<div class="overflow-hidden rounded-lg shadow-md">
					<enhanced:img
						src="/static/taco.jpg"
						alt="Customers at our market booth"
						class="aspect-square w-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
