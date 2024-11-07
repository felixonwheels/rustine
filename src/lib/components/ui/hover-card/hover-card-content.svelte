<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { LinkPreview as HoverCardPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		align = 'center',
		sideOffset = 4,
		...restProps
	}: HoverCardPrimitive.ContentProps = $props();
</script>

<HoverCardPrimitive.Content
	{align}
	bind:ref
	class={cn(
		'z-50 mt-3 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
		className
	)}
	{sideOffset}
	{...restProps}
/>
