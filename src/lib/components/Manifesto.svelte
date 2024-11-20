<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import LockOpen from 'lucide-svelte/icons/lock-open';

	let { manifesto_title, manifesto_description } = $props();

	let features = [
		{
			icon: LockOpen,
			href: '/',
			title: 'manifestoOpenTitle',
			subtitle: 'manifestoOpenSubtitle'
		}
	];
</script>

<h2 class="m-auto mt-16 max-w-lg text-4xl font-bold lg:text-center lg:text-5xl">
	{manifesto_title}
</h2>

<p class="m-auto mt-4 max-w-lg text-lg text-slate-500 dark:text-slate-400 lg:text-center">
	{manifesto_description}
</p>

<div class="flex place-content-center content-center items-center">
	<div class="my-4 grow columns-1 gap-2 sm:columns-2 md:my-8 xl:columns-4">
		{#each features as feature (feature.title)}
			<a href={feature.href}>
				<Card.Root class="my-4 flex  break-inside-avoid transition-shadow hover:shadow-md sm:m-4">
					<Card.Content>
						<div
							class="h-10 w-10 place-content-center rounded-md bg-primary p-2 text-primary-foreground shadow"
						>
							<feature.icon class="h-full w-full" />
						</div>
						<h3 class="text-md mt-2 font-semibold md:text-lg">
							{m[feature.title as keyof typeof m]()}
						</h3>
						<Card.Description class="mt-4">
							{m[feature.subtitle as keyof typeof m]()}
						</Card.Description>
					</Card.Content>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>
