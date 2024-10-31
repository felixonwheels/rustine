<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		...restProps
	}: TooltipPrimitive.ContentProps = $props();
</script>

<TooltipPrimitive.Content
	bind:ref
	class={cn(
		'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
		className
	)}
	{sideOffset}
	{...restProps}
/>
