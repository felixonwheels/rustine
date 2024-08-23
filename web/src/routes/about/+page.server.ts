import type { PageLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);

	return {
		about: await directus.request(readItems('About'))
	};
};
