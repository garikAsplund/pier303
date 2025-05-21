<script lang="ts">
	// You might want to put this in an env variable later
	const calendarUrl = import.meta.env.VITE_CALENDAR_URL;
</script>

<section id="specials" class="scroll-mt-12">
	<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
		<!-- <p class="leading-relaxed text-slate-700 dark:text-slate-300">
				Join us for upcoming events, including volunteer opportunities, educational programs, and
				community gatherings. You can add our calendar to your own Google Calendar by clicking the
				"+ Google Calendar" button in the bottom right.
			</p> -->
		<div class="mb-12 flex flex-col items-center">
			<!-- <div class="mb-4 h-32 w-32">
					<Shell />
				</div> -->
			<h2 class="font-poiret mb-3 text-center text-6xl font-bold text-gray-800">Weekly Specials</h2>
			<div class="mb-6 h-0.5 w-48 rounded bg-black"></div>
		</div>

		<!-- Calendar Container -->
		<!-- <div
			class="relative overflow-hidden rounded-lg"
		>
			<div class="aspect-3/2 w-full">
				<iframe
					src={calendarUrl}
					class="h-full w-full"
					frameborder="0"
					scrolling="no"
					title="Pier 303 Weekly Specials Calendar"
				></iframe>
			</div>
		</div> -->

		<iframe
			src="https://embed.styledcalendar.com/#bRNMAXL5VzXldoJ7NktS"
			title="Styled Calendar"
			class="styled-calendar-container"
			style="width: 100%; border: none;"
			data-cy="calendar-embed-iframe"
		></iframe>
		<script
			async
			type="module"
			src="https://embed.styledcalendar.com/assets/parent-window.js"
		></script>

		<!-- <p class="text-sm text-slate-600 dark:text-slate-400">
			Can't see the calendar? <a
				href={calendarUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:underline dark:text-blue-400"
			>
				View it directly on Google Calendar
			</a>
		</p> -->
	</div>
</section>
