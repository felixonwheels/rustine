<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as m from '$lib/paraglide/messages.js';

	let items = [
		{
			title: 'Is it accessible?',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			title: 'Is it accessible? 2',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		},
		{
			title: 'Is it accessible? 3',
			description: 'Yes. It adheres to the WAI-ARIA design pattern.'
		}
	];
</script>

<div class="mt-16">
	<h2 class="m-auto max-w-lg text-4xl font-bold lg:text-center lg:text-5xl">
		{m.faq()}
	</h2>
</div>

<div class="m-2 flex flex-1 place-content-center md:m-6">
	<Accordion.Root class="min-w-full" type="multiple">
		{#each items as item (item.title)}
			<Accordion.Item value={item.title}>
				<Accordion.Trigger>{item.title}</Accordion.Trigger>
				<Accordion.Content>{item.description}</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
