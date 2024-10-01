<script lang="ts">
	import { page } from '$app/stores';
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import { flags } from '$lib/helpers/flags';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { BookOpenText, CircleHelp, Wrench, Menu } from 'lucide-svelte';

	let width: number;

	let headerRef: HTMLDetailsElement;

	function closeMainNav() {
		headerRef.removeAttribute('open');
	}
</script>

<svelte:window bind:innerWidth={width} />

<div class="container">
	<nav>
		<ul>
			<li class="logo">
				<a aria-label="rustine logo" class="rustine-logo" href="/">
					{@html RustineLogo}
				</a>
				<a aria-label="rustine text logo" href="/">
					<h1 class="title">rustine</h1>
				</a>
			</li>
		</ul>
		<ul>
			{#if width > 768}
				<li><strong><a class="contrast" href="/fix"><Wrench /> {m.fix()}</a></strong></li>
				<li><strong><a class="contrast" href="/learn"><BookOpenText /> {m.learn()}</a></strong></li>
				<li><strong><a class="contrast" href="/about"><CircleHelp /> {m.about()}</a></strong></li>
				<li>
					{@render languageSelect()}
				</li>
			{:else}
				<li>
					<details bind:this={headerRef} class="dropdown">
						<summary><Menu size={20} /></summary>

						<ul dir="rtl">
							<li>
								<strong
									><a class="contrast" href="/fix" onclick={closeMainNav}>{m.fix()} <Wrench /></a
									></strong
								>
							</li>
							<li>
								<strong
									><a class="contrast" href="/learn" onclick={closeMainNav}
										>{m.learn()} <BookOpenText /></a
									></strong
								>
							</li>
							<li>
								<strong
									><a class="contrast" href="/about" onclick={closeMainNav}
										>{m.about()} <CircleHelp /></a
									></strong
								>
							</li>
							<li>{@render languageSelect()}</li>
						</ul>
					</details>
				</li>
			{/if}
		</ul>
	</nav>
</div>

{#snippet languageSelect()}
	<details
		class="dropdown"
		data-placement="bottom"
		data-tooltip={m.footerLanguageSelect({ lang: languageTag() })}
	>
		<summary>{flags.get(languageTag())}</summary>
		<ul>
			{#each availableLanguageTags as lang}
				<li data-tooltip={lang}>
					<a
						aria-current={lang === languageTag() ? 'page' : undefined}
						href={i18n.route($page.url.pathname)}
						hreflang={lang}
					>
						{flags.get(lang)}
					</a>
				</li>
			{/each}
		</ul>
	</details>
{/snippet}

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

		background: linear-gradient(to right, var(--pico-primary), var(--pico-color-pumpkin-300));
		background-clip: text;
		color: transparent;
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}
	}
</style>
