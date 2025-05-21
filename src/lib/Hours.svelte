<script lang="ts">
	let baseLd: Record<string, any> = $props();

	const today = new Date();
	const year = today.getFullYear();

	function getMemorialDay(y: number) {
		const d = new Date(y, 4, 31);
		const offset = (d.getDay() + 6) % 7;
		d.setDate(31 - offset);
		return d;
	}

	function getLaborDay(y: number) {
		const d = new Date(y, 8, 1);
		const offset = (8 - d.getDay()) % 7;
		d.setDate(1 + offset);
		return d;
	}

	const isSummer = today >= getMemorialDay(year) && today <= getLaborDay(year);
	const hours = isSummer
		? { opens: '11:00', closes: '19:00' }
		: { opens: '11:00', closes: '16:00' };

	function fmt(t: string) {
		const [h, m] = t.split(':').map(Number);
		const ampm = h >= 12 ? 'PM' : 'AM';
		const hh = ((h + 11) % 12) + 1;
		return `${hh}:${m.toString().padStart(2, '0')} ${ampm}`;
	}

	const display = `${fmt(hours.opens)} – ${fmt(hours.closes)}`;
	const openingHoursSpecification = [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
			opens: hours.opens,
			closes: hours.closes
		}
	];

	const ld = {
		...baseLd,
		openingHoursSpecification
	};
</script>

<svelte:head>
	<script type="application/ld+json">
    {JSON.stringify(ld)}
	</script>
</svelte:head>

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
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</div>
	<div>
		<h2 class="mb-1 font-semibold text-gray-800">Hours</h2>
		<p class="text-gray-600">Wednesday - Friday</p>
		<p class="text-gray-600">{display}</p>
	</div>
</div>
