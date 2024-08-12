import { createDirectus, rest } from '@directus/sdk';

import { PUBLIC_APIURL } from '$env/static/public';

// import { createItem, deleteItem, readItem, readItems, updateItem, updateUser } from '@directus/sdk';

function getDirectusInstance(fetch) {
	const options = fetch ? { globals: { fetch } } : {};

	console.log(
		'☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️'
	);

	console.log(PUBLIC_APIURL);

	const directus = createDirectus(PUBLIC_APIURL, options).with(rest());

	return directus;
}

export default getDirectusInstance;
