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
				<Sidebar.MenuButton class="gap-0" size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div class="aspect-square flex size-10 items-center justify-center rounded-lg">
								{@html RustineLogo}
							</div>
							<div class="flex-1 truncate text-center">
								<h1 class="mx-2 font-[Pacifico] text-3xl font-black md:text-4xl">Rustine</h1>
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
