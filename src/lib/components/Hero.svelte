<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as m from '$lib/paraglide/messages.js';

	let { title } = $props();
</script>

<div
	class="aspect-square mx-auto flex size-24 animate-[spin_1.5s_ease-out_1_0.5s] drop-shadow-2xl md:size-28 xl:size-36"
>
	{@html RustineLogo}
</div>

<h1
	class="mx-auto mt-6 inline-block bg-gradient-to-r from-primary to-rustine-indigo bg-clip-text px-2 text-center font-[Pacifico] text-5xl font-bold text-primary text-transparent drop-shadow-md md:text-7xl xl:text-8xl"
>
	{title}
</h1>

<h2
	class="mt-6 text-center text-xl font-bold text-slate-500 dark:text-slate-400 md:text-2xl xl:text-3xl"
>
	{m.titleStart()}<mark
		class="bg-gradient-to-r from-rustine-orange to-rustine-indigo bg-clip-text not-italic text-transparent"
		>{m.titleMark()}</mark
	>{m.titleEnd()}
</h2>

<div class="mt-6 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-6">
	<Button class="text-md flex items-center justify-center gap-1 rounded-full" href="/fix"
		>{m.fixButton()}</Button
	>
	<Button
		class="text-md flex items-center justify-center gap-1 rounded-full"
		href="/learn"
		variant="outline">{m.learnButton()}</Button
	>
</div>
