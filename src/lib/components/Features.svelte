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

<h2 class="m-auto mt-16 max-w-lg text-4xl font-bold lg:text-center lg:text-5xl">
	{subtitle}
</h2>

<p class="m-auto mt-4 max-w-lg text-lg text-slate-500 dark:text-slate-400 lg:text-center">
	{subtitle_description}
</p>

<div class="flex place-content-center content-center items-center">
	<div class="my-4 columns-1 gap-2 sm:columns-2 md:my-8 xl:columns-4">
		{#each features as feature (feature.title)}
			<a href={feature.href}>
				<Card.Root class="my-4 flex break-inside-avoid transition-shadow hover:shadow-md sm:m-4">
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
