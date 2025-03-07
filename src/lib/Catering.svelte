<script lang="ts">
	import Sardines from './Sardines.svelte';
</script>

<!-- Catering Section -->
<div class="relative z-10 w-full bg-teal-200 px-4 py-16 md:px-8" id="catering">
	<div class="mx-auto max-w-6xl">
		<div class="flex w-full justify-center">
			<Sardines />
		</div>
		<div class="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
			<!-- Left side: Image -->
			<div class="my-8 md:mb-0 md:w-1/2">
				<div class="relative h-0 overflow-hidden rounded-lg pb-[75%] shadow-xl">
					<enhanced:img
						src="/static/catering.jpg"
						alt="Seafood catering platter"
						class="absolute inset-0 h-full w-full object-cover"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
				</div>
			</div>

			<!-- Right side: Text content -->
			<div class="md:w-1/2">
				<h2 class="mb-6 text-3xl font-bold text-slate-900/90 md:text-4xl">Catering Services</h2>
				<div class="mb-6 h-1 w-16 rounded bg-cyan-600"></div>

				<p class="mb-6 text-lg text-gray-700">
					Elevate your next event with fresh seafood catering from Pier 303. We offer custom seafood
					platters, appetizers, and full-service catering options for any occasion.
				</p>

				<div class="mb-8 space-y-4">
					<div class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-1 mr-3 h-6 w-6 text-cyan-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p class="text-gray-700">Custom seafood platters and displays</p>
					</div>
					<div class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-1 mr-3 h-6 w-6 text-cyan-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p class="text-gray-700">Appetizer stations and passed hors d'oeuvres</p>
					</div>
					<div class="flex items-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-1 mr-3 h-6 w-6 text-cyan-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p class="text-gray-700">Full-service catering with professional staff</p>
					</div>
				</div>

				
			</div>
		</div>
	</div>
</div>
