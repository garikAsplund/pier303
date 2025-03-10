<script lang="ts">
	import Watermark from './Watermark.svelte';
</script>

<footer class="relative mt-auto w-full bg-teal-200 py-8">
	<div class="container mx-auto px-4">
		<!-- Back to top button -->
		<div class="absolute -top-6 right-4 md:right-8"></div>

		<!-- Contact information -->
		<div
			class="mb-4 flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4"
		>
			<p class="text-gray-700 select-all">pier303seafood@gmail.com</p>
			<span class="hidden text-gray-500 md:block">|</span>
			<a
				href="https://maps.google.com/?q=303+NW+Garfield+St,+Enterprise,+OR+97828"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-700 transition-colors hover:text-cyan-700"
			>
				<p class="text-center">303 NW Garfield St, Enterprise, OR 97828</p>
			</a>
			<span class="hidden text-gray-500 md:block">|</span>
			<p class="hidden text-gray-700 select-all md:block">(541) 426-2677</p>
			<a href="tel:5414262677" class="block text-gray-700 md:hidden">(541) 426-2677</a>
		</div>

		<!-- Watermark -->
		<div class="flex justify-center">
			<Watermark />
		</div>
	</div>
</footer>
