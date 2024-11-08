<script lang="ts">
	import { PUBLIC_APIURL } from '$env/static/public';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$lib/paraglide/messages.js';	import { DateRangeField } from 'bits-ui';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name}</title>
	<meta content={data.name} name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{data.name}</h1>

<p>{@html data.translations[0].description}</p>

<!-- <section class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each data.brands as brand}
		<a href="/learn/brands/{brand.id}">
			<Card.Root class="transition hover:shadow-md">
				<Card.Header class="flex flex-col">
					<div class="flex flex-row items-center justify-between">
						<Card.Title>{brand.name}</Card.Title>
						<Avatar.Root>
							<Avatar.Image
								src={`${PUBLIC_APIURL}/assets/${brand.logo}`}
								alt={brand.logo_alt ?? ''}
								class="object-contain"
							/>
							<Avatar.Fallback>{brand.name[0].toUpperCase()}</Avatar.Fallback>
						</Avatar.Root>
					</div>
					<Card.Description>Deploy your new project in one-click.</Card.Description>
				</Card.Header>
				<Card.Content></Card.Content>
				<Card.Footer class="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Deploy</Button>
				</Card.Footer>
			</Card.Root>
		</a>
	{/each}
</section> -->
