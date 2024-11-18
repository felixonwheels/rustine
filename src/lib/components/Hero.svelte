<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let { name, title } = $props();
</script>

<h1
	class="mx-auto inline-block bg-gradient-to-r from-primary to-rustine-indigo bg-clip-text px-2 text-center font-[Pacifico] text-5xl font-bold text-primary text-transparent md:text-6xl xl:text-7xl"
>
	{name}
</h1>

<h2 class="mt-6 text-center text-xl font-bold md:mt-12 md:text-2xl xl:text-3xl">{title}</h2>

<h3
	class="md:text-md text-center text-sm font-bold italic text-slate-500 dark:text-slate-400 xl:text-xl"
>
	{m.titleStart()}<mark
		class="bg-gradient-to-r from-rustine-orange to-rustine-indigo bg-clip-text not-italic text-transparent"
		>{m.titleMark()}</mark
	>{m.titleEnd()}
</h3>
