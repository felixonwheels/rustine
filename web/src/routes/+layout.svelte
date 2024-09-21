<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '@picocss/pico/css/pico.pumpkin.min.css';
	import '@picocss/pico/css/pico.colors.min.css';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<ParaglideJS {i18n}>
	<div class="app">
		<Header />

		<main class="container">
			<slot />
		</main>

		<Footer />
	</div>
</ParaglideJS>

<style>
	.container {
		margin-top: var(--pico-spacing);
		margin-bottom: var(--pico-spacing);
	}
</style>
