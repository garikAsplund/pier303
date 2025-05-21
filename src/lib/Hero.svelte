<script lang="ts">
	import Hours from './Hours.svelte';
	import Logo from './logo.svelte';
	import baseLd from '$lib/ld.json';
</script>

<section id="#contact">
	<div class="relative">
		<!-- Hero Image -->
		<div class="relative h-[75vh] w-full md:h-[87vh]">
			<!-- Blue gradient overlay (top to bottom) -->
			<div class="absolute inset-0 z-40 bg-gradient-to-b from-blue-300/70 to-black/30"></div>
			<enhanced:img
				src="/static/hero.jpeg"
				alt="Fresh seafood for Wallowa County, Oregon"
				class="h-full w-full object-cover object-top xl:object-[center_10%]"
				fetchpriority="high"
				loading="eager"
			/>

			<!-- Hero Content -->
			<div
				class="absolute inset-0 z-40 flex flex-col items-center justify-center px-4 text-center text-white drop-shadow-xl md:-translate-y-4"
			>
				<Logo />
				<h1
					class="text-shadow-lg font-poiret mb-6 text-4xl leading-snug font-bold md:text-5xl lg:text-6xl"
				>
					Fresh Seafood in Wallowa County
				</h1>
			</div>
		</div>

		<!-- Info Bar -->
		<div class="relative z-40 w-full bg-white py-6 shadow-md" id="contact">
			<div class="container mx-auto px-4 md:px-6">
				<div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left">
					<!-- Hours -->
					<!-- <div class="flex flex-col items-center gap-3 md:flex-row md:items-start">
						<div class="rounded-full bg-cyan-100 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-cyan-600"
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
						</div>
						<div>
							<h2 class="mb-1 font-semibold text-gray-800">Hours</h2>
							<p class="text-gray-600">Wednesday - Friday</p>
							<p class="text-gray-600">11:00 AM - 4:00 PM</p>
						</div>
					</div> -->
					<Hours {baseLd}/>

					<!-- Location -->
					<div class="flex flex-col items-center gap-3 md:flex-row md:items-start">
						<div class="rounded-full bg-cyan-100 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-cyan-600"
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
						</div>
						<div>
							<h2 class="mb-1 font-semibold text-gray-800">Location</h2>
							<a
								href="https://maps.google.com/?q=303+NW+Garfield+St,+Enterprise,+OR+97828"
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-600 transition-colors hover:text-cyan-600"
							>
								<p>303 NW Garfield St,</p>
								<p>Enterprise, OR 97828</p>
							</a>
						</div>
					</div>

					<!-- Contact -->
					<div class="flex flex-col items-center gap-3 md:flex-row md:items-start">
						<div class="rounded-full bg-cyan-100 p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-cyan-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div>
							<h2 class="mb-1 font-semibold text-gray-800">Contact Us</h2>
							<p class="hidden text-gray-600 md:block">(541) 426-2677</p>
							<a href="tel:5414262677" class="block text-gray-600 md:hidden">(541) 426-2677</a>
							<p class="text-gray-600 select-all">pier303seafood@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
