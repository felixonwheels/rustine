<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.tools()}</title>
	<meta content="tools" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.tools()}</h1>

<section class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each [...Array(4).keys()] as _, i}
		<Card.Root class="transition hover:shadow-md">
			<Card.Header>
				<Card.Title>Tool {i + 1}</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<div>plouf</div>
			</Card.Content>
			<Card.Footer class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</section>
