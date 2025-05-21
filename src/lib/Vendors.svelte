<script lang="ts">
	import Sardines from './Sardines.svelte';
	const brandCategories = [
		{
			title: 'Specialty Brands',
			type: 'grid',
			brands: [
				{ name: 'Momofuku', link: 'https://momofuku.com/' },
				{ name: 'Mina', link: 'https://mina.co/' },
				{ name: 'Masienda', link: 'https://masienda.com/' },
				{ name: 'Xilli', link: 'https://www.xillinyc.com/' },
				{ name: 'Fishwife', link: 'https://eatfishwife.com/' },
				{ name: 'Matiz', link: 'https://culinarycollective.com/collections/matiz' },
				{ name: 'Zach&Zoe', link: 'https://zachandzoe.co/' },
				{ name: 'Chico Rice', link: 'https://www.chicorice.com/' },
				{ name: 'Graza', link: 'https://www.graza.co/' },
				{ name: 'Mementa', link: 'https://www.mementa.net/' },
				{ name: 'Ginger People', link: 'https://gingerpeople.com/' },
				{ name: 'Toadfish', link: 'https://toadfish.com/' },
				{ name: 'Food To Live', link: 'https://foodtolive.com/' },
				{ name: 'Patagonia Provisions', link: 'https://www.patagoniaprovisions.com/' },
				{ name: 'Bokksu', link: 'https://www.bokksu.com/' },
				{ name: 'Siesta Co.', link: 'https://siesta-co.com/' },
				{ name: 'Ekone', link: 'https://ekoneseafood.com/' },
				{ name: 'River Wave Foods', link: 'https://www.riverwavefoods.com/' },
				{ name: 'MOB', link: 'https://www.mob.co.uk/' },
				{ name: 'La Bonne Mer' },
				{ name: 'Tiny Fish Co', link: 'https://thetinyfishco.com/' },
				{ name: 'Rustic Bakery', link: 'https://rusticbakery.com/' },
				{ name: 'La Monarca', link: 'https://lamonarcabakery.com/' },
				{ name: 'Pure Indian Foods', link: 'https://www.pureindianfoods.com/' },
				{ name: 'Rumi Spice', link: 'https://www.rumispice.com/' },
				{ name: 'Masi Masa', link: 'https://masimasa.com/' },
				{ name: 'San Juan Island Sea Salt', link: 'https://sanjuanislandseasalt.com/' },
				{ name: 'Jacobsen Salt Co.', link: 'https://jacobsensalt.com/' },
				{ name: 'Verve Culture', link: 'https://verveculture.com/' },
				{ name: 'Son Fish Sauce', link: 'https://sonfishsauce.com/' },
				{ name: 'Wok Mei', link: 'https://wokmei.com/' },
				{ name: 'Bianco', link: 'https://shopbianco.com/' },
				{ name: 'Coca-Cola', link: 'https://www.coca-cola.com/us/en/brands/coca-cola' },
				{ name: 'Di Bruno Bros.', link: 'https://dibruno.com/' },
				{ name: 'Morenita Chips', link: 'https://www.morenitachips.com/' },
				{ name: 'Sierra Nevada Brewing Co.', link: 'https://sierranevada.com/' },
				{ name: "Eichten's Cheese", link: 'https://eichtenscheese.com/' },
				{ name: 'Thaifusions Co.', link: 'https://www.thaifusions.com/' },
				{ name: 'Los Roast', link: 'https://www.losroast.com/' },
				{ name: "Mama Lil's", link: 'https://mamalils.com/' },
				{ name: 'Paladini', link: 'https://www.paladini.com.ar/en/home/' },
				{ name: 'Sea Change Seafoods', link: 'https://seachangeseafoods.ca/' },
				{ name: 'Occo', link: 'https://www.eatocco.com/' },
				{ name: 'Made by Mama', link: 'https://madebymama.us/' },
				{ name: 'School of Wok', link: 'https://schoolofwok.co.uk/' },
				{ name: 'HOPWTR', link: 'https://hopwtr.com/' },
				{ name: 'Charity Leaf', link: 'https://charityleaf.com/' },
				{ name: 'Nueats', link: 'https://nueats.co/' },
				{ name: 'Real Conserva', link: 'https://realconservera.com/en/?v=75bd8c82f05b' },
				{ name: 'Mantova', link: 'https://mantovafood.com/' },
				{ name: 'Valente Market', link: 'https://valentepasta.com/' },
				{ name: 'Fischer & Wieser', link: 'https://fwfarmstead.com/' },
				{ name: 'Aneto Natural', link: 'https://www.anetobroth.com/' }
			]
		},
		{
			title: 'Premium Seafood Partners',
			type: 'list',
			brands: [
				{ name: 'Taylor Shellfish Farms', link: 'https://www.taylorshellfishfarms.com/' },
				{ name: 'Hawaiian Fresh Seafood', link: 'https://www.hawaiianfreshseafood.com/' },
				{ name: 'Peterson Plus', link: 'https://petersonplus.com/' },
				{ name: 'Santa Monica Seafood', link: 'https://santamonicaseafood.com/' },
				{ name: "Luke's Lobster", link: 'https://lukeslobster.com/' }
			],
			iconColor: 'text-cyan-600'
		},
		{
			title: 'Local Partnerships',
			type: 'list',
			description: 'We proudly source from local farms and producers to support our community:',
			brands: [
				{ name: 'Park Street Farmette', link: 'https://parkstreetfarmette.com/' },
				{ name: 'Lazy Mule Farm', link: 'https://www.lazymulefarm.com/' },
				{ name: 'Alder Slope Nursery', link: 'https://alderslopenursery.com/' },
				{ name: 'NP Ranch Honey' }
			],
			iconColor: 'text-green-600'
		}
	];
</script>

<section id="vendors">
	<div class="flex w-full justify-center bg-sky-300">
		<div class="mt-16 flex max-w-4xl flex-col items-center">
			<div class="mb-12 flex flex-col items-center">
				<div class="flex w-full justify-center">
					<Sardines />
				</div>
				<h2 class="font-poiret mb-3 text-center text-6xl font-bold text-gray-800">
					Our Vendors
				</h2>
				<div class="mb-6 h-0.5 w-48 rounded bg-sky-900"></div>
			</div>
			<div class="mb-16 grid gap-12">
				{#each brandCategories as category}
					<div>
						<h4 class="mb-4 border-b border-gray-600/60 pb-2 text-xl font-semibold text-cyan-900">
							{category.title}
						</h4>
						<div class="mt-4 columns-1 gap-x-6 sm:columns-2 md:columns-3 lg:columns-4">
							{#each category.brands as brand}
								<div class="mb-2 break-inside-avoid">
									{#if brand.link}
										<a
											href={brand.link}
											class="text-gray-700 hover:text-cyan-700 hover:underline"
											rel="noopener noreferrer"
											target="_blank"
										>
											{brand.name}
										</a>
									{:else}
										<span class="text-gray-700">{brand.name}</span>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
