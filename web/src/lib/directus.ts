import { createDirectus, rest } from '@directus/sdk';
import type { ApiCollections } from '$lib/types/api-collection';
import { PUBLIC_APIURL } from '$env/static/public';
import { type LoadEvent } from '@sveltejs/kit';

function getDirectusInstance(fetch: LoadEvent['fetch']) {
	const options = { globals: { fetch } };

	const directus = createDirectus<ApiCollections>(PUBLIC_APIURL, options).with(rest());

	return directus;
}

export default getDirectusInstance;
