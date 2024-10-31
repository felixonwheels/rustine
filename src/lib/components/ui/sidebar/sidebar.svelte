<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { cn } from '$lib/utils.js';

	import { SIDEBAR_WIDTH_MOBILE } from './constants.js';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		side = 'left',
		variant = 'sidebar',
		collapsible = 'offcanvas',
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		side?: 'left' | 'right';
		variant?: 'sidebar' | 'floating' | 'inset';
		collapsible?: 'offcanvas' | 'icon' | 'none';
	} = $props();

	const sidebar = useSidebar();
</script>

{#if collapsible === 'none'}
	<div
		bind:this={ref}
		class={cn(
			'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{:else if sidebar.isMobile}
	<Sheet.Root
		controlledOpen
		onOpenChange={sidebar.setOpenMobile}
		open={sidebar.openMobile}
		{...restProps}
	>
		<Sheet.Content
			class="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
			data-mobile="true"
			data-sidebar="sidebar"
			{side}
			style="--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"
		>
			<div class="flex h-full w-full flex-col">
				{@render children?.()}
			</div>
		</Sheet.Content>
	</Sheet.Root>
{:else}
	<div
		bind:this={ref}
		class="group peer hidden text-sidebar-foreground md:block"
		data-collapsible={sidebar.state === 'collapsed' ? collapsible : ''}
		data-side={side}
		data-state={sidebar.state}
		data-variant={variant}
	>
		<!-- This is what handles the sidebar gap on desktop -->
		<div
			class={cn(
				'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
				'group-data-[collapsible=offcanvas]:w-0',
				'group-data-[side=right]:rotate-180',
				variant === 'floating' || variant === 'inset'
					? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
					: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
			)}
		></div>
		<div
			class={cn(
				'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
				side === 'left'
					? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
					: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
				// Adjust the padding for floating and inset variants.
				variant === 'floating' || variant === 'inset'
					? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
					: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
				className
			)}
			{...restProps}
		>
			<div
				class="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
				data-sidebar="sidebar"
			>
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
