<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import Hammer from 'lucide-svelte/icons/hammer';
	import Users from 'lucide-svelte/icons/users';
	import Wrench from 'lucide-svelte/icons/wrench';

	let { subtitle, subtitle_description } = $props();

	let features = [
		{
			icon: Wrench,
			href: '/fix',
			title: 'featuresFixTitle',
			subtitle: 'featuresFixSubtitle'
		},
		{
			icon: BookOpenText,
			href: '/learn',
			title: 'featuresLearnTitle',
			subtitle: 'featuresLearnSubtitle'
		},
		{
			icon: Users,
			href: '/',
			title: 'featuresRepairCafeTitle',
			subtitle: 'featuresRepairCafeSubtitle'
		},
		{
			icon: Hammer,
			href: '/learn/tools',
			title: 'featuresToolsTitle',
			subtitle: 'featuresToolsSubtitle'
		}
	];
</script>

<div class="mt-16">
	<h2 class="m-auto max-w-lg text-4xl font-bold lg:text-center lg:text-5xl">
		{subtitle}
	</h2>
	<p class="m-auto mt-4 max-w-lg text-lg text-slate-500 dark:text-slate-400 lg:text-center">
		{subtitle_description}
	</p>
</div>

<div class="mx-auto mt-16 grid gap-4 sm:grid-cols-2 md:gap-16 xl:grid-cols-3">
	{#each features as feature (feature.title)}
		<a href={feature.href}>
			<Card.Root class="flex transition hover:shadow-md">
				<Card.Content>
					<div class="flex items-center gap-4">
						<div
							class="place-content-center rounded-md bg-primary p-2 text-primary-foreground shadow"
						>
							<feature.icon />
						</div>
						<h3 class="text-md font-semibold md:text-lg">
							{m[feature.title as keyof typeof m]()}
						</h3>
					</div>
					<Card.Description class="mt-4">{m[feature.subtitle as keyof typeof m]()}</Card.Description
					>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>
