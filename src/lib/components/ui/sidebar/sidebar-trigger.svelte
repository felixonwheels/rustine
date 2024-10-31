<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import PanelLeft from 'lucide-svelte/icons/panel-left';

	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	class={cn('h-7 w-7', className)}
	data-sidebar="trigger"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	size="icon"
	type="button"
	variant="ghost"
	{...restProps}
>
	<PanelLeft />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
