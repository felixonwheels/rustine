<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import {
		transition_delay_start,
		transition_delay_step,
		transition_fade_duration,
		transition_slide_duration,
		transition_easing
	} from '$lib/constants';
	import * as m from '$lib/paraglide/messages.js';
	import BriefcaseMedical from 'lucide-svelte/icons/briefcase-medical';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import Hammer from 'lucide-svelte/icons/hammer';
	import LibraryBig from 'lucide-svelte/icons/library-big';
	import ListCheck from 'lucide-svelte/icons/list-check';
	import Shapes from 'lucide-svelte/icons/shapes';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	const timelineItems = $state([
		{
			title: m.vocab(),
			url: '/learn/vocab',
			icon: Shapes,
			description: m.featuresLearnSubtitle() // TODO: to change
		},
		{
			title: m.symptoms(),
			url: '/learn/symptoms',
			icon: BriefcaseMedical,
			description: m.featuresLearnSubtitle() // TODO: to change
		},
		{
			title: m.issues(),
			url: '/learn/issues',
			icon: CircleAlert,
			description: m.featuresLearnSubtitle() // TODO: to change
		},
		{
			title: m.procedures(),
			url: '/learn/procedures',
			icon: ListCheck,
			description: m.featuresLearnSubtitle() // TODO: to change
		},
		{
			title: m.tools(),
			url: '/learn/tools',
			icon: Hammer,
			description: m.featuresLearnSubtitle() // TODO: to change
		},
		{
			title: m.resources(),
			url: '/learn/resources',
			icon: LibraryBig,
			description: m.featuresLearnSubtitle() // TODO: to change
		}
	]);

	let visible = $state(false);

	onMount(() => (visible = true));
</script>

<svelte:head>
	<title>{m.learn()}</title>
	<meta content="learn about bike maintenance" name="description" />
</svelte:head>

<h1 class="text-2xl font-bold">{m.learn()}</h1>

{#if visible}
	<div
		class="relative space-y-4 pb-24 pt-6 before:absolute before:inset-0 before:ml-3 before:h-full before:w-1 before:-translate-x-px before:bg-muted md:-space-y-6 md:before:mx-auto md:before:translate-x-0"
	>
		{#each timelineItems as item, i}
			<div
				class="is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
				in:fade|global={{
					delay: transition_delay_start + i * transition_delay_step,
					duration: transition_fade_duration
				}}
			>
				<div
					class="h-6 w-6 shrink-0 rounded-full bg-muted text-card-foreground md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
				></div>
				<a
					class="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)]"
					href={item.url}
					in:slide|global={{
						delay: transition_delay_start + i * transition_delay_step,
						axis: 'y',
						duration: transition_slide_duration,
						easing: transition_easing
					}}
				>
					<Card.Root
						class="rounded-lg border p-1 shadow transition-shadow duration-300 hover:shadow-md md:p-2"
					>
						<Card.Header>
							<Card.Title
								class="h-10 w-10 place-content-center rounded-md bg-primary p-2 text-primary-foreground shadow"
							>
								<item.icon class="h-full w-full" />
							</Card.Title>
							<Card.Title class="mt-2 text-lg">{item.title}</Card.Title>
						</Card.Header>
						<Card.Content class="p-6 pt-3">
							<div class="text-md text-muted-foreground">{item.description}</div>
						</Card.Content>
					</Card.Root>
				</a>
			</div>
		{/each}
	</div>
{/if}
