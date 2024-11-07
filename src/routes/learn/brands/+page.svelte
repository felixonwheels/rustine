<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{m.brands()}</title>
	<meta content="brands" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold" in:fly>{m.brands()}</h1>

<section class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each data.brands as brand, _}
		<Card.Root class="transition hover:shadow-md">
			<Card.Header>
				<Card.Title>{brand.name}</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<AspectRatio class="bg-muted" ratio={16 / 9}>
					<img alt="..." class="rounded-md object-cover" src={brand.logo} />
				</AspectRatio>
			</Card.Content>
			<Card.Footer class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</section>
