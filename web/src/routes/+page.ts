// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import type { PageLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ fetch }) => {
	const url = `http://localhost:8055/items/Global`;

	const response = await fetch(url);

	console.log('PLOFDOFUOISDUIOFUDSOUFOIUSDOIUFIODSU');

	console.log(await response.json());

	const directus = getDirectusInstance(fetch);

	return {
		global: await directus.request(readItems('Global'))
	};
};
