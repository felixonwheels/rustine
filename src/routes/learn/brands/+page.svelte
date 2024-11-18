<script lang="ts">
	import { PUBLIC_APIURL } from '$env/static/public';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { i18n } from '$lib/i18n.js';
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{m.brands()}</title>
	<meta content="brands" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.brands()}</h1>

<section class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
	{#each data.brands as brand}
		<a href="/learn/brands/{brand.id}">
			<Card.Root class="transition hover:shadow-md">
				<Card.Content class="flex flex-col px-6 py-4">
					<div class="flex flex-row items-center justify-between">
						<Card.Title>{brand.name}</Card.Title>
						<Avatar.Root>
							<Avatar.Image
								alt={brand.logo_alt ?? ''}
								class="bg-slate-300 object-contain"
								src={`${PUBLIC_APIURL}/assets/${brand.logo}`}
							/>
							<Avatar.Fallback>{brand.name?.[0].toUpperCase() ?? '-'}</Avatar.Fallback>
						</Avatar.Root>
					</div>
					<Card.Description>Deploy your new project in one-click.</Card.Description>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</section>
