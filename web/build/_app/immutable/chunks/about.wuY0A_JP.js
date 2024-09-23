import {
	N as _,
	O as m,
	Q as d,
	R as u,
	T as l,
	V as g,
	W as c,
	X as b,
	Y as p,
	Z as v,
	_ as y
} from './runtime.DilaVa7n.js';
import { b as f, c as R } from './disclose-version.BeaculLB.js';
import { l as T } from './runtime.BB1J7FTS.js';
function D(e, s, k, N, Y) {
	var n = e,
		r = '',
		t;
	_(() => {
		r !== (r = s()) &&
			(t && (d(t), (t = null)),
			r !== '' &&
				(t = m(() => {
					if (u) {
						l.data;
						for (var a = g(), i = a; a !== null && (a.nodeType !== 8 || a.data !== ''); )
							(i = a), (a = c(a));
						if (a === null) throw (b(), p);
						f(l, i), (n = v(a));
						return;
					}
					var h = r + '',
						o = R(h);
					f(y(o), o.lastChild), n.before(o);
				})));
	});
}
const w = () => 'about',
	O = () => 'à propos',
	E = (e = {}, s = {}) => ({ en: w, fr: O })[s.languageTag ?? T()]();
export { E as a, D as h };
