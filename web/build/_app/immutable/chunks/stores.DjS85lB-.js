import { a as e } from './entry.DG9UY6Zw.js';
const r = () => {
		const s = e;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	b = {
		subscribe(s) {
			return r().page.subscribe(s);
		}
	};
export { b as p };
