import { s as t } from './entry.yZf3JTNA.js';
import { b as c, m as b, n as o, g as f, d as a } from './runtime.DilaVa7n.js';
function p(s, e, r) {
	const u = r[e] ?? (r[e] = { store: null, source: b(void 0), unsubscribe: o });
	if (u.store !== s)
		if ((u.unsubscribe(), (u.store = s ?? null), s == null))
			(u.source.v = void 0), (u.unsubscribe = o);
		else {
			var n = !0;
			(u.unsubscribe = t(s, (i) => {
				n ? (u.source.v = i) : a(u.source, i);
			})),
				(n = !1);
		}
	return f(u.source);
}
function g() {
	const s = {};
	return (
		c(() => {
			for (var e in s) s[e].unsubscribe();
		}),
		s
	);
}
export { p as a, g as s };
