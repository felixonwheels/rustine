<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as m from '$lib/paraglide/messages.js';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import SunMoon from 'lucide-svelte/icons/sun-moon';
	import { resetMode, setMode } from 'mode-watcher';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="w-full">
		<Button class="w-full" size="icon" variant="outline">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="center">
		<DropdownMenu.Item onclick={() => setMode('light')}>
			<Sun class="mr-2 size-4" />
			<span>{m.themeLight()}</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')}>
			<Moon class="mr-2 size-4" />
			<span>{m.themeDark()}</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>
			<SunMoon class="mr-2 size-4" />
			<span>{m.themeSystem()}</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
