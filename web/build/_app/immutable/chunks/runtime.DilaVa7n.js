var dn = Array.isArray,
	En = Array.from,
	yn = Object.defineProperty,
	nt = Object.getOwnPropertyDescriptor,
	jt = Object.getOwnPropertyDescriptors,
	wn = Object.prototype,
	Tn = Array.prototype,
	Bt = Object.getPrototypeOf;
function mn(t) {
	return typeof t == 'function';
}
const An = () => {};
function In(t) {
	return t();
}
function Ut(t) {
	for (var n = 0; n < t.length; n++) t[n]();
}
const A = 2,
	it = 4,
	R = 8,
	ft = 16,
	d = 32,
	X = 64,
	I = 128,
	Y = 256,
	h = 512,
	w = 1024,
	C = 2048,
	O = 4096,
	D = 8192,
	Gt = 16384,
	_t = 32768,
	gn = 65536,
	Vt = 1 << 18,
	rt = Symbol('$state'),
	Sn = Symbol('');
function ct(t) {
	return t === this.v;
}
function $t(t, n) {
	return t != t
		? n == n
		: t !== n || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function vt(t) {
	return !$t(t, this.v);
}
function Kt(t) {
	throw new Error('effect_in_teardown');
}
function Zt() {
	throw new Error('effect_in_unowned_derived');
}
function zt(t) {
	throw new Error('effect_orphan');
}
function Wt() {
	throw new Error('effect_update_depth_exceeded');
}
function xn() {
	throw new Error('hydration_failed');
}
function On(t) {
	throw new Error('props_invalid_value');
}
function Nn() {
	throw new Error('state_descriptors_fixed');
}
function Rn() {
	throw new Error('state_prototype_fixed');
}
function Xt() {
	throw new Error('state_unsafe_mutation');
}
function Jt(t) {
	let n = A | w;
	_ === null && (n |= I);
	const r = {
		deps: null,
		deriveds: null,
		equals: ct,
		f: n,
		first: null,
		fn: t,
		last: null,
		reactions: null,
		v: null,
		version: 0
	};
	if (f !== null && f.f & A) {
		var e = f;
		e.deriveds === null ? (e.deriveds = [r]) : e.deriveds.push(r);
	}
	return r;
}
function Cn(t) {
	const n = Jt(t);
	return (n.equals = vt), n;
}
function pt(t) {
	Q(t);
	var n = t.deriveds;
	if (n !== null) {
		t.deriveds = null;
		for (var r = 0; r < n.length; r += 1) Qt(n[r]);
	}
}
function ht(t) {
	var n;
	pt(t), (n = Lt(t));
	var r = (g || t.f & I) && t.deps !== null ? C : h;
	p(t, r), t.equals(n) || ((t.v = n), (t.version = Pt()));
}
function Qt(t) {
	pt(t), F(t, 0), p(t, D), (t.first = t.last = t.deps = t.reactions = t.fn = null);
}
function dt(t) {
	return { f: 0, v: t, reactions: null, equals: ct, version: 0 };
}
function Dn(t) {
	var r;
	const n = dt(t);
	return (n.equals = vt), l !== null && l.l !== null && ((r = l.l).s ?? (r.s = [])).push(n), n;
}
function Et(t, n) {
	return (
		f !== null && z() && f.f & A && Xt(),
		t.equals(n) ||
			((t.v = n),
			(t.version = Pt()),
			yt(t, w),
			z() &&
				_ !== null &&
				_.f & h &&
				!(_.f & d) &&
				(c !== null && c.includes(t) ? (p(_, w), V(_)) : y === null ? ln([t]) : y.push(t))),
		n
	);
}
function yt(t, n) {
	var r = t.reactions;
	if (r !== null)
		for (var e = z(), s = r.length, o = 0; o < s; o++) {
			var a = r[o],
				u = a.f;
			u & w || (!e && a === _) || (p(a, n), u & (h | I) && (u & A ? yt(a, C) : V(a)));
		}
}
const kn = 1,
	Pn = 2,
	Ln = 4,
	Mn = 8,
	qn = 16,
	Fn = 1,
	bn = 2,
	Hn = 4,
	Yn = 8,
	jn = 16,
	Bn = 1,
	Un = 2,
	Gn = 4,
	Vn = 1,
	$n = 2,
	tn = '[',
	nn = '[!',
	rn = ']',
	wt = {},
	Kn = Symbol(),
	Zn = 'http://www.w3.org/2000/svg';
function Tt(t) {
	console.warn('hydration_mismatch');
}
let N = !1;
function zn(t) {
	N = t;
}
let E;
function j(t) {
	if (t === null) throw (Tt(), wt);
	return (E = t);
}
function Wn() {
	return j(k(E));
}
function Xn(t) {
	if (N) {
		if (k(E) !== null) throw (Tt(), wt);
		E = t;
	}
}
function Jn() {
	for (var t = 0, n = E; ; ) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === rn) {
				if (t === 0) return n;
				t -= 1;
			} else (r === tn || r === nn) && (t += 1);
		}
		var e = k(n);
		n.remove(), (n = e);
	}
}
var et, en, mt, At;
function Qn() {
	if (et === void 0) {
		(et = window), (en = document);
		var t = Element.prototype,
			n = Node.prototype;
		(mt = nt(n, 'firstChild').get),
			(At = nt(n, 'nextSibling').get),
			(t.__click = void 0),
			(t.__className = ''),
			(t.__attributes = null),
			(t.__e = void 0),
			(Text.prototype.__t = void 0);
	}
}
function It(t = '') {
	return document.createTextNode(t);
}
function K(t) {
	return mt.call(t);
}
function k(t) {
	return At.call(t);
}
function tr(t) {
	if (!N) return K(t);
	var n = K(E);
	return n === null && (n = E.appendChild(It())), j(n), n;
}
function nr(t, n) {
	if (!N) {
		var r = K(t);
		return r instanceof Comment && r.data === '' ? k(r) : r;
	}
	return E;
}
function rr(t, n = 1, r = !1) {
	let e = N ? E : t;
	for (; n--; ) e = k(e);
	if (!N) return e;
	var s = e.nodeType;
	if (r && s !== 3) {
		var o = It();
		return e == null || e.before(o), j(o), o;
	}
	return j(e), e;
}
function er(t) {
	t.textContent = '';
}
function gt(t) {
	_ === null && f === null && zt(), f !== null && f.f & I && Zt(), J && Kt();
}
function st(t, n) {
	var r = n.last;
	r === null ? (n.last = n.first = t) : ((r.next = t), (t.prev = r), (n.last = t));
}
function P(t, n, r, e = !0) {
	var s = (t & X) !== 0,
		o = _,
		a = {
			ctx: l,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | w,
			first: null,
			fn: n,
			last: null,
			next: null,
			parent: s ? null : o,
			prev: null,
			teardown: null,
			transitions: null,
			version: 0
		};
	if (r) {
		var u = S;
		try {
			ot(!0), b(a), (a.f |= Gt);
		} catch (T) {
			throw (G(a), T);
		} finally {
			ot(u);
		}
	} else n !== null && V(a);
	var i = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null;
	return !i && !s && e && (o !== null && st(a, o), f !== null && f.f & A && st(a, f)), a;
}
function sr(t) {
	const n = P(R, null, !1);
	return p(n, h), (n.teardown = t), n;
}
function or(t) {
	gt();
	var n = _ !== null && (_.f & R) !== 0 && l !== null && !l.m;
	if (n) {
		var r = l;
		(r.e ?? (r.e = [])).push(t);
	} else {
		var e = St(t);
		return e;
	}
}
function ar(t) {
	return gt(), U(t);
}
function ur(t) {
	const n = P(X, t, !0);
	return () => {
		G(n);
	};
}
function St(t) {
	return P(it, t, !1);
}
function lr(t, n) {
	var r = l,
		e = { effect: null, ran: !1 };
	r.l.r1.push(e),
		(e.effect = U(() => {
			t(), !e.ran && ((e.ran = !0), Et(r.l.r2, !0), vn(n));
		}));
}
function ir() {
	var t = l;
	U(() => {
		if (Ht(t.l.r2)) {
			for (var n of t.l.r1) {
				var r = n.effect;
				L(r) && b(r), (n.ran = !1);
			}
			t.l.r2.v = !1;
		}
	});
}
function U(t) {
	return P(R, t, !0);
}
function fr(t) {
	return U(t);
}
function _r(t, n = 0) {
	return P(R | ft | n, t, !0);
}
function cr(t, n = !0) {
	return P(R | d, t, !0, n);
}
function xt(t) {
	var n = t.teardown;
	if (n !== null) {
		const r = J,
			e = f;
		at(!0), ut(null);
		try {
			n.call(null);
		} finally {
			at(r), ut(e);
		}
	}
}
function G(t, n = !0) {
	var r = !1;
	if ((n || t.f & Vt) && t.nodes_start !== null) {
		for (var e = t.nodes_start, s = t.nodes_end; e !== null; ) {
			var o = e === s ? null : k(e);
			e.remove(), (e = o);
		}
		r = !0;
	}
	Q(t, n && !r), F(t, 0), p(t, D);
	var a = t.transitions;
	if (a !== null) for (const i of a) i.stop();
	xt(t);
	var u = t.parent;
	u !== null && t.f & d && u.first !== null && Ot(t),
		(t.next =
			t.prev =
			t.teardown =
			t.ctx =
			t.deps =
			t.parent =
			t.fn =
			t.nodes_start =
			t.nodes_end =
				null);
}
function Ot(t) {
	var n = t.parent,
		r = t.prev,
		e = t.next;
	r !== null && (r.next = e),
		e !== null && (e.prev = r),
		n !== null && (n.first === t && (n.first = e), n.last === t && (n.last = r));
}
function vr(t, n) {
	var r = [];
	Nt(t, r, !0),
		sn(r, () => {
			G(t), n && n();
		});
}
function sn(t, n) {
	var r = t.length;
	if (r > 0) {
		var e = () => --r || n();
		for (var s of t) s.out(e);
	} else n();
}
function Nt(t, n, r) {
	if (!(t.f & O)) {
		if (((t.f ^= O), t.transitions !== null))
			for (const a of t.transitions) (a.is_global || r) && n.push(a);
		for (var e = t.first; e !== null; ) {
			var s = e.next,
				o = (e.f & _t) !== 0 || (e.f & d) !== 0;
			Nt(e, n, o ? r : !1), (e = s);
		}
	}
}
function pr(t) {
	Rt(t, !0);
}
function Rt(t, n) {
	if (t.f & O) {
		(t.f ^= O), L(t) && b(t);
		for (var r = t.first; r !== null; ) {
			var e = r.next,
				s = (r.f & _t) !== 0 || (r.f & d) !== 0;
			Rt(r, s ? n : !1), (r = e);
		}
		if (t.transitions !== null) for (const o of t.transitions) (o.is_global || n) && o.in();
	}
}
let B = !1,
	Z = [];
function Ct() {
	B = !1;
	const t = Z.slice();
	(Z = []), Ut(t);
}
function hr(t) {
	B || ((B = !0), queueMicrotask(Ct)), Z.push(t);
}
function on() {
	B && Ct();
}
function an(t) {
	throw new Error('lifecycle_outside_component');
}
const Dt = 0,
	un = 1;
let H = Dt,
	q = !1,
	S = !1,
	J = !1;
function ot(t) {
	S = t;
}
function at(t) {
	J = t;
}
let m = [],
	x = 0,
	f = null;
function ut(t) {
	f = t;
}
let _ = null,
	c = null,
	v = 0,
	y = null;
function ln(t) {
	y = t;
}
let kt = 0,
	g = !1,
	l = null;
function Pt() {
	return kt++;
}
function z() {
	return l !== null && l.l === null;
}
function L(t) {
	var a, u;
	var n = t.f;
	if (n & w) return !0;
	if (n & C) {
		var r = t.deps,
			e = (n & I) !== 0;
		if (r !== null) {
			var s;
			if (n & Y) {
				for (s = 0; s < r.length; s++) ((a = r[s]).reactions ?? (a.reactions = [])).push(t);
				t.f ^= Y;
			}
			for (s = 0; s < r.length; s++) {
				var o = r[s];
				if ((L(o) && ht(o), o.version > t.version)) return !0;
				e &&
					!g &&
					!((u = o == null ? void 0 : o.reactions) != null && u.includes(t)) &&
					(o.reactions ?? (o.reactions = [])).push(t);
			}
		}
		e || p(t, h);
	}
	return !1;
}
function fn(t, n, r) {
	throw t;
}
function Lt(t) {
	var T;
	var n = c,
		r = v,
		e = y,
		s = f,
		o = g;
	(c = null), (v = 0), (y = null), (f = t.f & (d | X) ? null : t), (g = !S && (t.f & I) !== 0);
	try {
		var a = (0, t.fn)(),
			u = t.deps;
		if (c !== null) {
			var i;
			if ((F(t, v), u !== null && v > 0))
				for (u.length = v + c.length, i = 0; i < c.length; i++) u[v + i] = c[i];
			else t.deps = u = c;
			if (!g) for (i = v; i < u.length; i++) ((T = u[i]).reactions ?? (T.reactions = [])).push(t);
		} else u !== null && v < u.length && (F(t, v), (u.length = v));
		return a;
	} finally {
		(c = n), (v = r), (y = e), (f = s), (g = o);
	}
}
function _n(t, n) {
	let r = n.reactions;
	if (r !== null) {
		var e = r.indexOf(t);
		if (e !== -1) {
			var s = r.length - 1;
			s === 0 ? (r = n.reactions = null) : ((r[e] = r[s]), r.pop());
		}
	}
	r === null && n.f & A && (p(n, C), n.f & (I | Y) || (n.f ^= Y), F(n, 0));
}
function F(t, n) {
	var r = t.deps;
	if (r !== null) for (var e = n; e < r.length; e++) _n(t, r[e]);
}
function Q(t, n = !1) {
	var r = t.first;
	for (t.first = t.last = null; r !== null; ) {
		var e = r.next;
		G(r, n), (r = e);
	}
}
function b(t) {
	var n = t.f;
	if (!(n & D)) {
		p(t, h);
		var r = t.ctx,
			e = _,
			s = l;
		(_ = t), (l = r);
		try {
			n & ft || Q(t), xt(t);
			var o = Lt(t);
			(t.teardown = typeof o == 'function' ? o : null), (t.version = kt);
		} catch (a) {
			fn(a);
		} finally {
			(_ = e), (l = s);
		}
	}
}
function Mt() {
	x > 1e3 && ((x = 0), Wt()), x++;
}
function qt(t) {
	var n = t.length;
	if (n !== 0) {
		Mt();
		var r = S;
		S = !0;
		try {
			for (var e = 0; e < n; e++) {
				var s = t[e];
				if (s.first === null && !(s.f & d)) lt([s]);
				else {
					var o = [];
					Ft(s, o), lt(o);
				}
			}
		} finally {
			S = r;
		}
	}
}
function lt(t) {
	var n = t.length;
	if (n !== 0)
		for (var r = 0; r < n; r++) {
			var e = t[r];
			!(e.f & (D | O)) &&
				L(e) &&
				(b(e),
				e.deps === null &&
					e.first === null &&
					e.nodes_start === null &&
					(e.teardown === null ? Ot(e) : (e.fn = null)));
		}
}
function cn() {
	if (((q = !1), x > 1001)) return;
	const t = m;
	(m = []), qt(t), q || (x = 0);
}
function V(t) {
	H === Dt && (q || ((q = !0), queueMicrotask(cn)));
	for (var n = t; n.parent !== null; ) {
		n = n.parent;
		var r = n.f;
		if (r & d) {
			if (!(r & h)) return;
			p(n, C);
		}
	}
	m.push(n);
}
function Ft(t, n) {
	var r = t.first,
		e = [];
	t: for (; r !== null; ) {
		var s = r.f,
			o = (s & (D | O)) === 0,
			a = (s & d) !== 0,
			u = (s & h) !== 0,
			i = r.first;
		if (o && (!a || !u)) {
			if ((a && p(r, h), s & R)) {
				if ((!a && L(r) && (b(r), (i = r.first)), i !== null)) {
					r = i;
					continue;
				}
			} else if (s & it)
				if (a || u) {
					if (i !== null) {
						r = i;
						continue;
					}
				} else e.push(r);
		}
		var T = r.next;
		if (T === null) {
			let M = r.parent;
			for (; M !== null; ) {
				if (t === M) break t;
				var tt = M.next;
				if (tt !== null) {
					r = tt;
					continue t;
				}
				M = M.parent;
			}
		}
		r = T;
	}
	for (var $ = 0; $ < e.length; $++) (i = e[$]), n.push(i), Ft(i, n);
}
function bt(t) {
	var n = H,
		r = m;
	try {
		Mt();
		const s = [];
		(H = un), (m = s), (q = !1), qt(r);
		var e = t == null ? void 0 : t();
		return on(), (m.length > 0 || s.length > 0) && bt(), (x = 0), e;
	} finally {
		(H = n), (m = r);
	}
}
async function dr() {
	await Promise.resolve(), bt();
}
function Ht(t) {
	var n = t.f;
	if (n & D) return t.v;
	if (f !== null) {
		var r = f.deps;
		c === null && r !== null && r[v] === t ? v++ : c === null ? (c = [t]) : c.push(t),
			y !== null && _ !== null && _.f & h && !(_.f & d) && y.includes(t) && (p(_, w), V(_));
	}
	if (n & A) {
		var e = t;
		L(e) && ht(e);
	}
	return t.v;
}
function vn(t) {
	const n = f;
	try {
		return (f = null), t();
	} finally {
		f = n;
	}
}
const pn = ~(w | C | h);
function p(t, n) {
	t.f = (t.f & pn) | n;
}
function Er(t) {
	return Yt().get(t);
}
function yr(t, n) {
	return Yt().set(t, n), n;
}
function Yt(t) {
	return l === null && an(), l.c ?? (l.c = new Map(hn(l) || void 0));
}
function hn(t) {
	let n = t.p;
	for (; n !== null; ) {
		const r = n.c;
		if (r !== null) return r;
		n = n.p;
	}
	return null;
}
function wr(t, n = 1) {
	var r = +Ht(t);
	return Et(t, r + n), r;
}
function Tr(t, n = !1, r) {
	(l = { p: l, c: null, e: null, m: !1, s: t, x: null, l: null }),
		n || (l.l = { s: null, u: null, r1: [], r2: dt(!1) });
}
function mr(t) {
	const n = l;
	if (n !== null) {
		const e = n.e;
		if (e !== null) {
			n.e = null;
			for (var r = 0; r < e.length; r++) St(e[r]);
		}
		(l = n.p), (n.m = !0);
	}
	return {};
}
function Ar(t) {
	if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
		if (rt in t) W(t);
		else if (!Array.isArray(t))
			for (let n in t) {
				const r = t[n];
				typeof r == 'object' && r && rt in r && W(r);
			}
	}
}
function W(t, n = new Set()) {
	if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
		n.add(t), t instanceof Date && t.getTime();
		for (let e in t)
			try {
				W(t[e], n);
			} catch {}
		const r = Bt(t);
		if (
			r !== Object.prototype &&
			r !== Array.prototype &&
			r !== Map.prototype &&
			r !== Set.prototype &&
			r !== Date.prototype
		) {
			const e = jt(r);
			for (let s in e) {
				const o = e[s].get;
				if (o)
					try {
						o.call(t);
					} catch {}
			}
		}
	}
}
export {
	en as $,
	Bt as A,
	dn as B,
	On as C,
	vt as D,
	Fn as E,
	bn as F,
	Yn as G,
	Jt as H,
	Cn as I,
	wr as J,
	mn as K,
	gn as L,
	jn as M,
	_r as N,
	cr as O,
	Hn as P,
	G as Q,
	N as R,
	rt as S,
	E as T,
	Kn as U,
	Wn as V,
	k as W,
	Tt as X,
	wt as Y,
	j as Z,
	K as _,
	mr as a,
	_t as a0,
	ft as a1,
	Gt as a2,
	St as a3,
	hr as a4,
	Gn as a5,
	Bn as a6,
	Un as a7,
	yn as a8,
	It as a9,
	yr as aA,
	Er as aB,
	U as aC,
	bt as aD,
	an as aE,
	dr as aF,
	$t as aG,
	lr as aH,
	ir as aI,
	Vt as aa,
	tn as ab,
	zn as ac,
	Qn as ad,
	rn as ae,
	xn as af,
	er as ag,
	En as ah,
	ur as ai,
	Vn as aj,
	$n as ak,
	Ln as al,
	nn as am,
	Jn as an,
	pr as ao,
	vr as ap,
	O as aq,
	kn as ar,
	Pn as as,
	qn as at,
	Nt as au,
	sn as av,
	Mn as aw,
	Sn as ax,
	jt as ay,
	Zn as az,
	sr as b,
	tr as c,
	Et as d,
	or as e,
	nr as f,
	Ht as g,
	l as h,
	Ut as i,
	vn as j,
	In as k,
	Ar as l,
	Dn as m,
	An as n,
	wn as o,
	Tr as p,
	Tn as q,
	Xn as r,
	rr as s,
	fr as t,
	ar as u,
	Nn as v,
	dt as w,
	nt as x,
	_ as y,
	Rn as z
};
