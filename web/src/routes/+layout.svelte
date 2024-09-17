<script lang="ts">
	import '@picocss/pico/css/pico.pumpkin.min.css';
	import '@picocss/pico/css/pico.colors.min.css';
	import '../app.css';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<div class="app">
	<Header />

	<main class="container">
		<slot />
	</main>

	<Footer />
</div>
