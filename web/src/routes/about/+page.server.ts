import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends('paraglide:lang');

	const directus = getDirectusInstance(fetch);

	return {
		about: await directus.request(readItems('about'))
	};
};
