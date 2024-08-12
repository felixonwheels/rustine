<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="px-4 py-5 my-5 text-center">
	<h1 class="display-5 fw-bold text-body-emphasis">{data?.global?.title}</h1>

	<div class="col-lg-6 mx-auto">
		<p class="lead mb-4">{data?.global?.description}</p>
		<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
			<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
			<button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
		</div>
	</div>
</div>

<div class="container px-4 py-5" id="featured-3">
	<h2 class="pb-2 border-bottom">Columns with icons</h2>
	<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
			>
				<svg class="bi" width="1em" height="1em"><use xlink:href="#collection" /></svg>
			</div>
			<h3 class="fs-2 text-body-emphasis">Featured title</h3>
			<p>
				Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
				sentence and probably just keep going until we run out of words.
			</p>
			<a href="#" class="icon-link">
				Call to action
				<svg class="bi"><use xlink:href="#chevron-right" /></svg>
			</a>
		</div>
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
			>
				<svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle" /></svg>
			</div>
			<h3 class="fs-2 text-body-emphasis">Featured title</h3>
			<p>
				Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
				sentence and probably just keep going until we run out of words.
			</p>
			<a href="#" class="icon-link">
				Call to action
				<svg class="bi"><use xlink:href="#chevron-right" /></svg>
			</a>
		</div>
		<div class="feature col">
			<div
				class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
			>
				<svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2" /></svg>
			</div>
			<h3 class="fs-2 text-body-emphasis">Featured title</h3>
			<p>
				Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
				sentence and probably just keep going until we run out of words.
			</p>
			<a href="#" class="icon-link">
				Call to action
				<svg class="bi"><use xlink:href="#chevron-right" /></svg>
			</a>
		</div>
	</div>
</div>
