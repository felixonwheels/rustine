import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);

	return {
		global: await directus.request(readItems('Global'))
	};
};
