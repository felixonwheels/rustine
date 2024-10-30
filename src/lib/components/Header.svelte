<script lang="ts">
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench, Menu } from 'lucide-svelte';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<div class="bg-gray-800">
		<nav class="container mx-auto py-8 px-6 md:flex md:items-center md:justify-between">
			<div class="flex items-center justify-between">
				<a class="text-xl font-bold text-gray-100 hover:text-blue-400 md:text-2xl" href="/home"
					>Logo
				</a>
				<!-- Mobile menu button -->
				<div class="flex md:hidden">
					<button
						type="button"
						class="text-gray-100 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
						onclick={toggleNavbar}
					>
						<Menu />
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="mt-8 flex-col space-y-4 duration-300 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a class="text-gray-100 hover:text-blue-400" href="/home">Home</a>
				<a class="text-gray-100 hover:text-blue-400" href="/blog">Blogs</a>
				<a class="text-gray-100 hover:text-blue-400" href="/contact">Contact US</a>
				<a class="text-gray-100 hover:text-blue-400" href="/about">About Us</a>
				<div class="space-y-2">
					<a
						href="/login"
						class="block rounded-md border bg-white py-3 px-4 text-center text-gray-800 hover:text-indigo-600 lg:inline lg:border-0"
					>
						Login
					</a>
					<a
						href="/signup"
						class="block rounded-md bg-indigo-600 py-3 px-4 text-center text-white shadow hover:bg-indigo-700 lg:inline"
					>
						Sign Up
					</a>
				</div>
			</div>
		</nav>
	</div>
</div>

<!-- <nav class="flex">
	<div class="logo">
		<a aria-label="rustine logo" class="rustine-logo" href="/">
			{@html RustineLogo}
		</a>
		<a aria-label="rustine text logo" href="/">
			<h1 class="title">rustine</h1>
		</a>
	</div>
	<div class="flex">
		<a class="contrast" href="/fix"><Wrench /> {m.fix()}</a>
		<a class="contrast" href="/learn"><BookOpenText /> {m.learn()}</a>
		<a class="contrast" href="/about"><CircleHelp /> {m.about()}</a>
	</div>
</nav> -->

<style>
	.rustine-logo {
		width: 4rem;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.title {
		font-family: 'Roboto', sans-serif;
		font-size: 2rem;
		font-style: italic;
		font-weight: 900;
		margin: auto 0.5rem;

		background: linear-gradient(to right, var(--color-rustine-orange), var(--color-rustine-indigo));
		background-clip: text;
		color: transparent;
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}
	}
</style>
