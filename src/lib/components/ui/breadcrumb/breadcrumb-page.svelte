<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
	aria-current="page"
	aria-disabled="true"
	bind:this={ref}
	class={cn('font-normal text-foreground', className)}
	role="link"
	{...restProps}
>
	{@render children?.()}
</span>
