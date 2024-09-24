<script>
	import GitlabLogo from '$lib/assets/gitlab-logo.svg?raw';

	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	import { flags } from '$lib/helpers/flags';
</script>

<footer>
	<div class="container footer">
		<section>
			<nav>
				<a class="logo" href="https://gitlab.com/rustine/rustine" aria-label="gitlab logo">
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
								href={i18n.route($page.url.pathname)}
								hreflang={lang}
								aria-current={lang === languageTag() ? 'page' : undefined}
							>
								{flags.get(lang)}
							</a>
						</li>
					{/each}
				</ul>
			</details>
		</section>

		<section class="love">
			<small>made with 🧡 by omni</small>
		</section>
	</div>
</footer>

<style>
	.logo {
		width: 5rem;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.love {
		margin-bottom: calc(var(--pico-spacing) * 4);
	}
</style>
