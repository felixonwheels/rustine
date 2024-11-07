<script lang="ts">
	import { page } from '$app/stores';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { i18n } from '$lib/i18n.js';
	import * as m from '$lib/paraglide/messages.js';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import Hammer from 'lucide-svelte/icons/hammer';
	import House from 'lucide-svelte/icons/house';
	import Tag from 'lucide-svelte/icons/tag';
	import Wrench from 'lucide-svelte/icons/wrench';

	let items = [
		{
			title: m.home(),
			url: '/',
			icon: House,
			items: []
		},
		{
			title: m.learn(),
			url: '/learn',
			icon: BookOpenText,
			items: [
				{
					title: m.tools(),
					url: '/learn/tools',
					icon: Hammer
				},
				{
					title: m.brands(),
					url: '/learn/brands',
					icon: Tag
				}
			],
			isActive: true
		},
		{
			title: m.fix(),
			url: '/fix',
			icon: Wrench,
			items: [],
			isActive: true
		}
	];
</script>

<Sidebar.Group>
	<Sidebar.Menu>
		{#each items as mainItem (mainItem.title)}
			<Collapsible.Root open={mainItem.isActive}>
				{#snippet child({ props })}
					<Sidebar.MenuItem {...props}>
						<Sidebar.MenuButton isActive={i18n.route($page.url.pathname) === mainItem.url}>
							{#snippet tooltipContent()}
								{mainItem.title}
							{/snippet}
							{#snippet child({ props })}
								<a href={mainItem.url} {...props}>
									<mainItem.icon strokeWidth={1} />
									<span>{mainItem.title}</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						{#if mainItem.items?.length}
							<Collapsible.Trigger>
								{#snippet child({ props })}
									<Sidebar.MenuAction {...props} class="data-[state=open]:rotate-90">
										<ChevronRight />
										<span class="sr-only">Toggle</span>
									</Sidebar.MenuAction>
								{/snippet}
							</Collapsible.Trigger>
							<Collapsible.Content>
								<Sidebar.MenuSub>
									{#each mainItem.items as subItem (subItem.title)}
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton
												href={subItem.url}
												isActive={i18n.route($page.url.pathname) === subItem.url}
											>
												<div class="flex items-center">
													<subItem.icon class="mr-2 size-4" strokeWidth={1} />
													<span>{subItem.title}</span>
												</div>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									{/each}
								</Sidebar.MenuSub>
							</Collapsible.Content>
						{/if}
					</Sidebar.MenuItem>
				{/snippet}
			</Collapsible.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
