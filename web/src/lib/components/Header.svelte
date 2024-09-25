<script>
	import RustineLogo from '$lib/assets/rustine-logo.svg?raw';
	import * as m from '$lib/paraglide/messages.js';
	import { BookOpenText, CircleHelp, Wrench } from 'lucide-svelte';
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a aria-label="rustine logo" class="rustine-logo" href="/">
					{@html RustineLogo}
				</a>
			</li>
		</ul>
		<ul>
			<li><strong><a class="contrast" href="/fix"><Wrench /> {m.fix()}</a></strong></li>
			<li><strong><a class="contrast" href="/learn"><BookOpenText /> {m.learn()}</a></strong></li>
			<li><strong><a class="contrast" href="/about"><CircleHelp /> {m.about()}</a></strong></li>
		</ul>
	</nav>
</div>

<style>
	.rustine-logo {
		width: 4rem;
	}

	@media (max-width: 576px) {
		.rustine-logo {
			width: 5rem;
		}

		nav {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
