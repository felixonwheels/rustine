import type { PageServerLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);

	return {
		global: await directus.request(readItems('Global'))
	};
};
