<script lang="ts">
	import GitlabLogo from '$lib/assets/gitlab-logo.svg?raw';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="container footer">
	<section>
		<nav>
			<a
				aria-label="gitlab logo"
				class="logo"
				data-tooltip={m.footerGitlab()}
				href="https://gitlab.com/rustine/rustine"
			>
				{@html GitlabLogo}
			</a>
		</nav>
	</section>

	<section>
		<small>made with <strong data-tooltip={m.footerLove()}>🧡</strong> by omni</small>
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
