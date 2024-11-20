<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import ModeSwitcher from '$lib/components/ModeSwitcher.svelte';
	import NavMain from '$lib/components/nav-main.svelte';
	import NavSecondary from '$lib/components/nav-secondary.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<Sidebar.Root collapsible="icon" variant="inset">
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="group gap-0" size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div
								class="aspect-square hidden size-8 truncate text-center group-data-[collapsible=icon]:inline-block"
							>
								{@html RustineLogo}
							</div>
							<div class="flex-1 truncate text-center group-data-[collapsible=icon]:hidden">
								<h1
									class="group-hover:duration-400 mx-2 pr-2 font-[Pacifico] text-4xl font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-rustine-indigo group-hover:bg-clip-text group-hover:text-transparent group-hover:transition-colors group-hover:ease-in-out"
								>
									Rustine
								</h1>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain />
		<NavSecondary />
	</Sidebar.Content>
	<footer>
		<Sidebar.Footer>
			<LanguageSwitcher />
			<ModeSwitcher />
		</Sidebar.Footer>
	</footer>
	<Sidebar.Rail />
</Sidebar.Root>
