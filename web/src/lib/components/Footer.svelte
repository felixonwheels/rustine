<script>
	import { page } from '$app/stores';
	import GitlabLogo from '$lib/assets/gitlab-logo.svg?raw';
	import { flags } from '$lib/helpers/flags';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
</script>

<div class="container footer">
	<section>
		<nav>
			<a aria-label="gitlab logo" class="logo" href="https://gitlab.com/rustine/rustine">
				{@html GitlabLogo}
			</a>
		</nav>
	</section>

	<section>
		<details class="dropdown">
			<summary>{flags.get(languageTag())}</summary>
			<ul>
				{#each availableLanguageTags as lang}
					<li>
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
	</section>

	<section>
		<small>made with 🧡 by omni</small>
	</section>
</div>

<style>
	.logo {
		width: 5rem;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section > small {
		margin-bottom: calc(var(--pico-spacing) * 4);
	}
</style>
