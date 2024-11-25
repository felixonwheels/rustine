<script lang="ts">
	import { page } from '$app/stores';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import { i18n } from '$lib/i18n.js';
	import * as m from '$lib/paraglide/messages.js';
	import BookOpenText from 'lucide-svelte/icons/book-open-text';
	import BriefcaseMedical from 'lucide-svelte/icons/briefcase-medical';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import Hammer from 'lucide-svelte/icons/hammer';
	import House from 'lucide-svelte/icons/house';
	import LibraryBig from 'lucide-svelte/icons/library-big';
	import ListCheck from 'lucide-svelte/icons/list-check';
	import Shapes from 'lucide-svelte/icons/shapes';
	import Users from 'lucide-svelte/icons/users';
	import Wrench from 'lucide-svelte/icons/wrench';

	const sidebar = useSidebar();

	const navMainItems = $state([
		{
			title: m.home(),
			url: '/',
			icon: House,
			items: []
		},
		{
			title: m.fix(),
			url: '/fix',
			icon: Wrench,
			items: [],
			isActive: true
		},
		{
			title: m.learn(),
			url: '/learn',
			icon: BookOpenText,
			items: [
				{
					title: m.vocab(),
					url: '/learn/vocab',
					icon: Shapes
				},
				{
					title: m.symptoms(),
					url: '/learn/symptoms',
					icon: BriefcaseMedical
				},
				{
					title: m.issues(),
					url: '/learn/issues',
					icon: CircleAlert
				},
				{
					title: m.procedures(),
					url: '/learn/procedures',
					icon: ListCheck
				},
				{
					title: m.tools(),
					url: '/learn/tools',
					icon: Hammer
				},
				{
					title: m.usefulResources(),
					url: '/learn/resources',
					icon: LibraryBig
				}
			],
			isActive: true
		},
		{
			title: m.repairCafe(),
			url: '/auto-repair',
			icon: Users,
			items: [],
			isActive: true
		}
	]);
</script>

<Sidebar.Group>
	{#each navMainItems as mainItem (mainItem.title)}
		<Sidebar.GroupContent class="mb-4">
			<Sidebar.Menu>
				<Collapsible.Root open={mainItem.isActive}>
					{#snippet child({ props })}
						<Sidebar.MenuItem {...props}>
							<Sidebar.MenuButton
								isActive={i18n.route($page.url.pathname) === mainItem.url}
								onclick={() => sidebar.setOpenMobile(false)}
							>
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
													onclick={() => sidebar.setOpenMobile(false)}
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
			</Sidebar.Menu>
		</Sidebar.GroupContent>
	{/each}
</Sidebar.Group>
