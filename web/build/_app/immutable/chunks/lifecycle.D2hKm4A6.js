import { u as r, e, h as c, i as a, j as i, k as l, g as u, l as _ } from './runtime.DilaVa7n.js';
function g() {
	const s = c,
		n = s.l.u;
	n &&
		(n.b.length &&
			r(() => {
				f(s), a(n.b);
			}),
		e(() => {
			const o = i(() => n.m.map(l));
			return () => {
				for (const t of o) typeof t == 'function' && t();
			};
		}),
		n.a.length &&
			e(() => {
				f(s), a(n.a);
			}));
}
function f(s) {
	if (s.l.s) for (const n of s.l.s) u(n);
	_(s.s);
}
export { g as i };
