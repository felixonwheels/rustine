// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// import getDirectusInstance from '$lib/directus';
// import { readItems } from '@directus/sdk';

// export async function load({ fetch }) {
// 	console.log(
// 		'☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️ 1 ☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️'
// 	);

// 	const directus = getDirectusInstance(fetch);

// 	return {
// 		global: await directus.request(readItems('Global'))
// 	};
// }

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`http://localhost:8055/items/Global`);
	const item = await res.json();

	console.log(item);

	return { item };
};
