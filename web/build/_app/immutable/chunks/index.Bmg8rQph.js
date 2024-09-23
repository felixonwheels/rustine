import {
	a9 as ta,
	N as sa,
	al as Z,
	R as N,
	Z as M,
	V as ia,
	B as fa,
	ah as J,
	am as ua,
	an as k,
	ac as D,
	T as O,
	ao as j,
	O as m,
	ap as la,
	aq as oa,
	a4 as H,
	y as K,
	ar as x,
	d as q,
	as as G,
	at as ca,
	m as _a,
	w as z,
	au as va,
	ag as da,
	av as ha,
	Q as ga,
	_ as Aa,
	ae as Ea,
	aw as pa,
	W as Ta,
	A as X,
	ax as Na,
	ay as Ia,
	az as ba,
	aA as Ca,
	aB as wa
} from './runtime.DilaVa7n.js';
import { i as Oa, c as F, d as La, n as Ra, b as ya } from './render.BxL60c5z.js';
let R = null;
function ka(a) {
	R = a;
}
function Ka(a, e) {
	return e;
}
function Sa(a, e, r, n) {
	for (var t = [], _ = e.length, s = 0; s < _; s++) va(e[s].e, t, !0);
	var T = _ > 0 && t.length === 0 && r !== null;
	if (T) {
		var g = r.parentNode;
		da(g), g.append(r), n.clear(), b(a, e[0].prev, e[_ - 1].next);
	}
	ha(t, () => {
		for (var E = 0; E < _; E++) {
			var p = e[E];
			T || (n.delete(p.k), b(a, p.prev, p.next)), ga(p.e, !T);
		}
	});
}
function qa(a, e, r, n, t, _ = null) {
	var s = a,
		T = { flags: e, items: new Map(), first: null },
		g = (e & Z) !== 0;
	if (g) {
		var E = a;
		s = N ? M(Aa(E)) : E.appendChild(ta());
	}
	N && ia();
	var p = null;
	sa(() => {
		var l = r(),
			A = fa(l) ? l : l == null ? [] : J(l),
			c = A.length;
		let v = !1;
		if (N) {
			var d = s.data === ua;
			d !== (c === 0) && ((s = k()), M(s), D(!1), (v = !0));
		}
		if (N) {
			for (var u = null, o, h = 0; h < c; h++) {
				if (O.nodeType === 8 && O.data === Ea) {
					(s = O), (v = !0), D(!1);
					break;
				}
				var i = A[h],
					f = n(i, h);
				(o = aa(O, T, u, null, i, f, h, t, e)), T.items.set(f, o), (u = o);
			}
			c > 0 && M(k());
		}
		N || Ma(A, T, s, t, e, n),
			_ !== null &&
				(c === 0
					? p
						? j(p)
						: (p = m(() => _(s)))
					: p !== null &&
						la(p, () => {
							p = null;
						})),
			v && D(!0);
	}),
		N && (s = O);
}
function Ma(a, e, r, n, t, _) {
	var P, V, Y, $;
	var s = (t & pa) !== 0,
		T = (t & (x | G)) !== 0,
		g = a.length,
		E = e.items,
		p = e.first,
		l = p,
		A,
		c = null,
		v,
		d = [],
		u = [],
		o,
		h,
		i,
		f;
	if (s)
		for (f = 0; f < g; f += 1)
			(o = a[f]),
				(h = _(o, f)),
				(i = E.get(h)),
				i !== void 0 && ((P = i.a) == null || P.measure(), (v ?? (v = new Set())).add(i));
	for (f = 0; f < g; f += 1) {
		if (((o = a[f]), (h = _(o, f)), (i = E.get(h)), i === void 0)) {
			var L = l ? l.e.nodes_start : r;
			(c = aa(L, e, c, c === null ? e.first : c.next, o, h, f, n, t)),
				E.set(h, c),
				(d = []),
				(u = []),
				(l = c.next);
			continue;
		}
		if (
			(T && Da(i, o, f, t),
			i.e.f & oa &&
				(j(i.e), s && ((V = i.a) == null || V.unfix(), (v ?? (v = new Set())).delete(i))),
			i !== l)
		) {
			if (A !== void 0 && A.has(i)) {
				if (d.length < u.length) {
					var C = u[0],
						I;
					c = C.prev;
					var B = d[0],
						y = d[d.length - 1];
					for (I = 0; I < d.length; I += 1) Q(d[I], C, r);
					for (I = 0; I < u.length; I += 1) A.delete(u[I]);
					b(e, B.prev, y.next),
						b(e, c, B),
						b(e, y, C),
						(l = C),
						(c = y),
						(f -= 1),
						(d = []),
						(u = []);
				} else
					A.delete(i),
						Q(i, l, r),
						b(e, i.prev, i.next),
						b(e, i, c === null ? e.first : c.next),
						b(e, c, i),
						(c = i);
				continue;
			}
			for (d = [], u = []; l !== null && l.k !== h; )
				(A ?? (A = new Set())).add(l), u.push(l), (l = l.next);
			if (l === null) continue;
			i = l;
		}
		d.push(i), (c = i), (l = i.next);
	}
	if (l !== null || A !== void 0) {
		for (var w = A === void 0 ? [] : J(A); l !== null; ) w.push(l), (l = l.next);
		var S = w.length;
		if (S > 0) {
			var na = t & Z && g === 0 ? r : null;
			if (s) {
				for (f = 0; f < S; f += 1) (Y = w[f].a) == null || Y.measure();
				for (f = 0; f < S; f += 1) ($ = w[f].a) == null || $.fix();
			}
			Sa(e, w, na, E);
		}
	}
	s &&
		H(() => {
			var U;
			if (v !== void 0) for (i of v) (U = i.a) == null || U.apply();
		}),
		(K.first = e.first && e.first.e),
		(K.last = c && c.e);
}
function Da(a, e, r, n) {
	n & x && q(a.v, e), n & G ? q(a.i, r) : (a.i = r);
}
function aa(a, e, r, n, t, _, s, T, g) {
	var E = R;
	try {
		var p = (g & x) !== 0,
			l = (g & ca) === 0,
			A = p ? (l ? _a(t) : z(t)) : t,
			c = g & G ? z(s) : s,
			v = { i: c, v: A, k: _, a: null, e: null, prev: r, next: n };
		return (
			(R = v),
			(v.e = m(() => T(a, A, c), N)),
			(v.e.prev = r && r.e),
			(v.e.next = n && n.e),
			r === null ? (e.first = v) : ((r.next = v), (r.e.next = v.e)),
			n !== null && ((n.prev = v), (n.e.prev = v.e)),
			v
		);
	} finally {
		R = E;
	}
}
function Q(a, e, r) {
	for (
		var n = a.next ? a.next.e.nodes_start : r, t = e ? e.e.nodes_start : r, _ = a.e.nodes_start;
		_ !== n;

	) {
		var s = Ta(_);
		t.before(_), (_ = s);
	}
}
function b(a, e, r) {
	e === null ? (a.first = r) : ((e.next = r), (e.e.next = r && r.e)),
		r !== null && ((r.prev = e), (r.e.prev = e && e.e));
}
function Ha(a, e) {
	if (e) {
		const r = document.body;
		(a.autofocus = !0),
			H(() => {
				document.activeElement === r && a.focus();
			});
	}
}
function ea(a, e, r, n) {
	r = r == null ? null : r + '';
	var t = a.__attributes ?? (a.__attributes = {});
	(N && ((t[e] = a.getAttribute(e)), e === 'src' || e === 'href' || e === 'srcset')) ||
		(t[e] !== (t[e] = r) &&
			(e === 'loading' && (a[Na] = r), r === null ? a.removeAttribute(e) : a.setAttribute(e, r)));
}
function xa(a, e, r) {
	if (e in a) {
		var n = a[e],
			t = typeof n == 'boolean' && r === '' ? !0 : r;
		(typeof n != 'object' || n !== t) && (a[e] = t);
	} else ea(a, e, r);
}
function Ga(a, e, r, n, t = !1, _) {
	var s = e || {},
		T = a.tagName === 'OPTION';
	for (var g in e) g in r || (r[g] = null);
	var E = W.get(a.nodeName);
	E || W.set(a.nodeName, (E = Pa(a)));
	var p = a.__attributes ?? (a.__attributes = {}),
		l = [];
	for (const u in r) {
		let o = r[u];
		if (T && u === 'value' && o == null) {
			(a.value = a.__value = ''), (s[u] = o);
			continue;
		}
		var A = s[u];
		if (o !== A) {
			s[u] = o;
			var c = u[0] + u[1];
			if (c !== '$$')
				if (c === 'on') {
					const h = {},
						i = '$$' + u;
					let f = u.slice(2);
					var v = ya(f);
					if ((Oa(f) && ((f = f.slice(0, -7)), (h.capture = !0)), !v && A)) {
						if (o != null) continue;
						a.removeEventListener(f, s[i], h), (s[i] = null);
					}
					if (o != null)
						if (v) (a[`__${f}`] = o), La([f]);
						else {
							let L = function (C) {
								s[u].call(this, C);
							};
							e ? (s[i] = F(f, a, L, h)) : l.push([u, o, () => (s[i] = F(f, a, L, h))]);
						}
				} else if (o == null) (p[u] = null), a.removeAttribute(u);
				else if (u === 'style') a.style.cssText = o + '';
				else if (u === 'autofocus') Ha(a, !!o);
				else if (u === '__value' || u === 'value') a.value = a[u] = a.__value = o;
				else {
					var d = u;
					t || (d = Ra(d)),
						E.includes(d)
							? (N && (d === 'src' || d === 'href' || d === 'srcset')) || (a[d] = o)
							: typeof o != 'function' && ea(a, d, o);
				}
		}
	}
	return (
		e ||
			H(() => {
				if (a.isConnected) for (const [u, o, h] of l) s[u] === o && h();
			}),
		s
	);
}
function za(a, e, r, n) {
	if (a.tagName.includes('-')) {
		for (var t in e) t in r || (r[t] = null);
		for (t in r) xa(a, t, r[t]);
		return r;
	}
	return Ga(a, e, r, n, a.namespaceURI !== ba);
}
var Ba = ['width', 'height', 'draggable'],
	W = new Map();
function Pa(a) {
	for (var e = [], r, n = X(a); n.constructor.name !== 'Element'; ) {
		r = Ia(n);
		for (var t in r) r[t].set && !Ba.includes(t) && e.push(t);
		n = X(n);
	}
	return e;
}
const Va = 'data-no-translate',
	Xa = 'paraglide:lang',
	Fa = 'paraglide:lang',
	ra = {},
	Ya = () => wa(ra),
	Qa = (a) => {
		Ca(ra, a);
	};
function Wa() {
	const a = Ya();
	function e(n, t) {
		return typeof n != 'string' || !a ? n : a.translateHref(n, t);
	}
	function r(n, t) {
		if (n[Va]) return n;
		for (const { attribute_name: _, lang_attribute_name: s } of t)
			if (_ in n) {
				const T = n[_],
					g = s ? n[s] : void 0;
				n[_] = e(T, typeof g == 'string' ? g : void 0);
			}
		return n;
	}
	return [e, r];
}
export {
	Fa as L,
	ka as a,
	Ga as b,
	R as c,
	za as d,
	qa as e,
	Qa as f,
	Wa as g,
	Xa as h,
	Ka as i,
	ea as s
};
