import {
	S as E,
	o as q,
	q as B,
	v as M,
	w as I,
	d as b,
	U as v,
	x as S,
	g as c,
	y as U,
	z as Y,
	A as z,
	B as C,
	C as G,
	L as Z,
	P as T,
	D as $,
	E as F,
	F as H,
	G as J,
	j as V,
	H as L,
	I as Q,
	J as N,
	K as D,
	M as W,
	m as X
} from './runtime.DilaVa7n.js';
function g(e, r = null, s) {
	if (typeof e != 'object' || e === null || E in e) return e;
	const f = z(e);
	if (f !== q && f !== B) return e;
	var a = new Map(),
		w = C(e),
		m = I(0),
		h;
	return new Proxy(e, {
		defineProperty(u, n, i) {
			(!('value' in i) || i.configurable === !1 || i.enumerable === !1 || i.writable === !1) && M();
			var t = a.get(n);
			return t === void 0 ? ((t = I(i.value)), a.set(n, t)) : b(t, g(i.value, h)), !0;
		},
		deleteProperty(u, n) {
			var i = a.get(n),
				t = i !== void 0 ? i.v !== v : n in u;
			return i !== void 0 && b(i, v), t && K(m), t;
		},
		get(u, n, i) {
			var _;
			if (n === E) return e;
			var t = a.get(n),
				d = n in u;
			if (
				(t === void 0 &&
					(!d || ((_ = S(u, n)) != null && _.writable)) &&
					((t = I(g(d ? u[n] : v, h))), a.set(n, t)),
				t !== void 0)
			) {
				var l = c(t);
				return l === v ? void 0 : l;
			}
			return Reflect.get(u, n, i);
		},
		getOwnPropertyDescriptor(u, n) {
			var i = Reflect.getOwnPropertyDescriptor(u, n);
			if (i && 'value' in i) {
				var t = a.get(n);
				t && (i.value = c(t));
			} else if (i === void 0) {
				var d = a.get(n),
					l = d == null ? void 0 : d.v;
				if (d !== void 0 && l !== v)
					return { enumerable: !0, configurable: !0, value: l, writable: !0 };
			}
			return i;
		},
		has(u, n) {
			var l;
			if (n === E) return !0;
			var i = a.get(n),
				t = (i !== void 0 && i.v !== v) || Reflect.has(u, n);
			if (i !== void 0 || (U !== null && (!t || ((l = S(u, n)) != null && l.writable)))) {
				i === void 0 && ((i = I(t ? g(u[n], h) : v)), a.set(n, i));
				var d = c(i);
				if (d === v) return !1;
			}
			return t;
		},
		set(u, n, i, t) {
			var R;
			var d = a.get(n),
				l = n in u;
			if (
				(d === void 0
					? (!l || ((R = S(u, n)) != null && R.writable)) &&
						((d = I(void 0)), b(d, g(i, h)), a.set(n, d))
					: ((l = d.v !== v), b(d, g(i, h))),
				w && n === 'length')
			)
				for (var _ = i; _ < u.length; _ += 1) {
					var O = a.get(_ + '');
					O !== void 0 && b(O, v);
				}
			var P = Reflect.getOwnPropertyDescriptor(u, n);
			if ((P != null && P.set && P.set.call(t, i), !l)) {
				if (w && typeof n == 'string') {
					var y = a.get('length');
					if (y !== void 0) {
						var p = Number(n);
						Number.isInteger(p) && p >= y.v && b(y, p + 1);
					}
				}
				K(m);
			}
			return !0;
		},
		ownKeys(u) {
			c(m);
			var n = Reflect.ownKeys(u).filter((d) => {
				var l = a.get(d);
				return l === void 0 || l.v !== v;
			});
			for (var [i, t] of a) t.v !== v && !(i in u) && n.push(i);
			return n;
		},
		setPrototypeOf() {
			Y();
		}
	});
}
function K(e, r = 1) {
	b(e, e.v + r);
}
const k = {
	get(e, r) {
		if (!e.exclude.includes(r)) return c(e.version), r in e.special ? e.special[r]() : e.props[r];
	},
	set(e, r, s) {
		return (
			r in e.special ||
				(e.special[r] = re(
					{
						get [r]() {
							return e.props[r];
						}
					},
					r,
					T
				)),
			e.special[r](s),
			N(e.version),
			!0
		);
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	deleteProperty(e, r) {
		return e.exclude.includes(r) ? !1 : (e.exclude.push(r), N(e.version), !0);
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function ie(e, r) {
	return new Proxy({ props: e, exclude: r, special: {}, version: I(0) }, k);
}
const ee = {
	get(e, r) {
		let s = e.props.length;
		for (; s--; ) {
			let f = e.props[s];
			if ((D(f) && (f = f()), typeof f == 'object' && f !== null && r in f)) return f[r];
		}
	},
	getOwnPropertyDescriptor(e, r) {
		let s = e.props.length;
		for (; s--; ) {
			let f = e.props[s];
			if ((D(f) && (f = f()), typeof f == 'object' && f !== null && r in f)) {
				const a = S(f, r);
				return a && !a.configurable && (a.configurable = !0), a;
			}
		}
	},
	has(e, r) {
		for (let s of e.props) if ((D(s) && (s = s()), s != null && r in s)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let s of e.props) {
			D(s) && (s = s());
			for (const f in s) r.includes(f) || r.push(f);
		}
		return r;
	}
};
function te(...e) {
	return new Proxy({ props: e }, ee);
}
function re(e, r, s, f) {
	var R;
	var a = (s & F) !== 0,
		w = (s & H) !== 0,
		m = (s & J) !== 0,
		h = (s & W) !== 0,
		u = e[r],
		n = (R = S(e, r)) == null ? void 0 : R.set,
		i = f,
		t = !0,
		d = () => (h && t && ((t = !1), (i = V(f))), i);
	u === void 0 && f !== void 0 && (n && w && G(), (u = d()), n && n(u));
	var l;
	if (w)
		l = () => {
			var o = e[r];
			return o === void 0 ? d() : ((t = !0), o);
		};
	else {
		var _ = (a ? L : Q)(() => e[r]);
		(_.f |= Z),
			(l = () => {
				var o = c(_);
				return o !== void 0 && (i = void 0), o === void 0 ? i : o;
			});
	}
	if (!(s & T)) return l;
	if (n) {
		var O = e.$$legacy;
		return function (o, x) {
			return arguments.length > 0 ? ((!w || !x || O) && n(x ? l() : o), o) : l();
		};
	}
	var P = !1,
		y = X(u),
		p = L(() => {
			var o = l(),
				x = c(y);
			return P ? ((P = !1), x) : (y.v = o);
		});
	return (
		a || (p.equals = $),
		function (o, x) {
			var j = c(p);
			if (arguments.length > 0) {
				const A = x ? c(p) : w && m ? g(o) : o;
				return p.equals(A) || ((P = !0), b(y, A), c(p)), o;
			}
			return j;
		}
	);
}
export { g as a, ie as l, re as p, te as s };
