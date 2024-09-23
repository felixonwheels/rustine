import {
	a9 as l,
	_ as f,
	y as v,
	aj as p,
	ak as h,
	R as i,
	T as s,
	V as E,
	Z as T
} from './runtime.DilaVa7n.js';
function m(r) {
	var t = document.createElement('template');
	return (t.innerHTML = r), t.content;
}
function n(r, t) {
	var e = v;
	e.nodes_start === null && ((e.nodes_start = r), (e.nodes_end = t));
}
function w(r, t) {
	var e = (t & p) !== 0,
		_ = (t & h) !== 0,
		a,
		d = !r.startsWith('<!>');
	return () => {
		if (i) return n(s, null), s;
		a === void 0 && ((a = m(d ? r : '<!>' + r)), e || (a = f(a)));
		var o = _ ? document.importNode(a, !0) : a.cloneNode(!0);
		if (e) {
			var c = f(o),
				u = o.lastChild;
			n(c, u);
		} else n(o, o);
		return o;
	};
}
function N(r, t, e = 'svg') {
	var _ = !r.startsWith('<!>'),
		a = `<${e}>${_ ? r : '<!>' + r}</${e}>`,
		d;
	return () => {
		if (i) return n(s, null), s;
		if (!d) {
			var o = m(a),
				c = f(o);
			d = f(c);
		}
		var u = d.cloneNode(!0);
		return n(u, u), u;
	};
}
function M(r = '') {
	if (!i) {
		var t = l(r + '');
		return n(t, t), t;
	}
	var e = s;
	return e.nodeType !== 3 && (e.before((e = l())), T(e)), n(e, e), e;
}
function x() {
	if (i) return n(s, null), s;
	var r = document.createDocumentFragment(),
		t = document.createComment(''),
		e = l();
	return r.append(t, e), n(t, e), r;
}
function L(r, t) {
	if (i) {
		(v.nodes_end = s), E();
		return;
	}
	r !== null && r.before(t);
}
const g = '5';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(g);
export { L as a, n as b, m as c, x as d, M as e, N as n, w as t };
