import {
	a4 as B,
	a8 as C,
	B as H,
	a9 as O,
	N as Y,
	aa as q,
	R as w,
	ab as I,
	W as S,
	ac as g,
	Z as b,
	T as _,
	_ as V,
	ad as k,
	Y as A,
	V as F,
	ae as P,
	X as $,
	af as z,
	ag as G,
	ah as U,
	ai as X,
	O as Z,
	p as j,
	y as J,
	a as K,
	h as Q
} from './runtime.DilaVa7n.js';
import { b as x } from './disclose-version.BeaculLB.js';
const M = new Set(),
	L = new Set();
function ue(e, t, a, n) {
	function o(r) {
		if ((n.capture || m.call(t, r), !r.cancelBubble)) return a.call(this, r);
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? B(() => {
					t.addEventListener(e, o, n);
				})
			: t.addEventListener(e, o, n),
		o
	);
}
function de(e) {
	for (var t = 0; t < e.length; t++) M.add(e[t]);
	for (var a of L) a(e);
}
function m(e) {
	var D;
	var t = this,
		a = t.ownerDocument,
		n = e.type,
		o = ((D = e.composedPath) == null ? void 0 : D.call(e)) || [],
		r = o[0] || e.target,
		l = 0,
		h = e.__root;
	if (h) {
		var c = o.indexOf(h);
		if (c !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var f = o.indexOf(t);
		if (f === -1) return;
		c <= f && (l = c);
	}
	if (((r = o[l] || e.target), r !== t)) {
		C(e, 'currentTarget', {
			configurable: !0,
			get() {
				return r || a;
			}
		});
		try {
			for (var p, s = []; r !== null; ) {
				var d = r.parentNode || r.host || null;
				try {
					var i = r['__' + n];
					if (i !== void 0 && !r.disabled)
						if (H(i)) {
							var [E, ...v] = i;
							E.apply(r, [e, ...v]);
						} else i.call(r, e);
				} catch (T) {
					p ? s.push(T) : (p = T);
				}
				if (e.cancelBubble || d === t || d === null) break;
				r = d;
			}
			if (p) {
				for (let T of s)
					queueMicrotask(() => {
						throw T;
					});
				throw p;
			}
		} finally {
			(e.__root = t), (r = t);
		}
	}
}
let u;
function ee() {
	u = void 0;
}
function le(e) {
	let t = null,
		a = w;
	var n;
	if (w) {
		for (
			t = _, u === void 0 && (u = V(document.head));
			u !== null && (u.nodeType !== 8 || u.data !== I);

		)
			u = S(u);
		u === null ? g(!1) : (u = b(S(u)));
	}
	w || (n = document.head.appendChild(O()));
	try {
		Y(() => e(n), q);
	} finally {
		a && (g(!0), (u = _), b(t));
	}
}
function ce(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const te = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function fe(e) {
	return te.includes(e);
}
const re = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly'
};
function _e(e) {
	return (e = e.toLowerCase()), re[e] ?? e;
}
const ae = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
function ne(e) {
	return ae.includes(e);
}
let N = !0;
function he(e) {
	N = e;
}
function pe(e, t) {
	t !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = t), (e.nodeValue = t == null ? '' : t + ''));
}
function oe(e, t) {
	const a = t.anchor ?? t.target.appendChild(O());
	return W(e, { ...t, anchor: a });
}
function ye(e, t) {
	k(), (t.intro = t.intro ?? !1);
	const a = t.target,
		n = w,
		o = _;
	try {
		for (var r = V(a); r && (r.nodeType !== 8 || r.data !== I); ) r = S(r);
		if (!r) throw A;
		g(!0), b(r), F();
		const l = W(e, { ...t, anchor: r });
		if (_ === null || _.nodeType !== 8 || _.data !== P) throw ($(), A);
		return g(!1), l;
	} catch (l) {
		if (l === A) return t.recover === !1 && z(), k(), G(a), g(!1), oe(e, t);
		throw l;
	} finally {
		g(n), b(o), ee();
	}
}
const y = new Map();
function W(e, { target: t, anchor: a, props: n = {}, events: o, context: r, intro: l = !0 }) {
	k();
	var h = new Set(),
		c = (s) => {
			for (var d = 0; d < s.length; d++) {
				var i = s[d];
				if (!h.has(i)) {
					h.add(i);
					var E = ne(i);
					t.addEventListener(i, m, { passive: E });
					var v = y.get(i);
					v === void 0
						? (document.addEventListener(i, m, { passive: E }), y.set(i, 1))
						: y.set(i, v + 1);
				}
			}
		};
	c(U(M)), L.add(c);
	var f = void 0,
		p = X(
			() => (
				Z(() => {
					if (r) {
						j({});
						var s = Q;
						s.c = r;
					}
					o && (n.$$events = o),
						w && x(a, null),
						(N = l),
						(f = e(a, n) || {}),
						(N = !0),
						w && (J.nodes_end = _),
						r && K();
				}),
				() => {
					for (var s of h) {
						t.removeEventListener(s, m);
						var d = y.get(s);
						--d === 0 ? (document.removeEventListener(s, m), y.delete(s)) : y.set(s, d);
					}
					L.delete(c), R.delete(f);
				}
			)
		);
	return R.set(f, p), f;
}
let R = new WeakMap();
function ge(e) {
	const t = R.get(e);
	t == null || t();
}
export {
	N as a,
	fe as b,
	ue as c,
	de as d,
	he as e,
	ye as f,
	le as h,
	ce as i,
	oe as m,
	_e as n,
	pe as s,
	ge as u
};
