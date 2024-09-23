import { l as r } from './runtime.BB1J7FTS.js';
const n = () => 'learn',
	e = () => 'apprendre',
	o = (l = {}, a = {}) => ({ en: n, fr: e })[a.languageTag ?? r()]();
export { o as l };
