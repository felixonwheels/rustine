const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.BYYPvwGe.js',
			'../chunks/disclose-version.BeaculLB.js',
			'../chunks/runtime.DilaVa7n.js',
			'../chunks/wrench.u8TcwBjA.js',
			'../chunks/props.BY6uJeTk.js',
			'../chunks/index.Bmg8rQph.js',
			'../chunks/render.BxL60c5z.js',
			'../chunks/lifecycle.D2hKm4A6.js',
			'../chunks/i18n.COEalsOf.js',
			'../chunks/runtime.BB1J7FTS.js',
			'../chunks/entry.DG9UY6Zw.js',
			'../chunks/stores.DjS85lB-.js',
			'../chunks/store.DMuufVLb.js',
			'../chunks/about.wuY0A_JP.js',
			'../chunks/learn.CAJoXpab.js',
			'../chunks/fix.CXzj8-gX.js',
			'../assets/0.sU1d2Hsw.css',
			'../nodes/1.Dh2EnRXr.js',
			'../nodes/2.Blh5v-JL.js',
			'../chunks/index.jdzEjXFq.js',
			'../assets/2.DxV2IoH6.css',
			'../nodes/3.C6yYVuIG.js',
			'../nodes/4.DxqVmmU1.js',
			'../nodes/5.CcbbfSXF.js',
			'../nodes/6.DjhnKivq.js'
		])
) => i.map((i) => d[i]);
var U = (e) => {
	throw TypeError(e);
};
var F = (e, t, r) => t.has(e) || U('Cannot ' + r);
var u = (e, t, r) => (F(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	O = (e, t, r) =>
		t.has(e)
			? U('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, r),
	T = (e, t, r, i) => (F(e, t, 'write to private field'), i ? i.call(e, r) : t.set(e, r), r);
import { i as Q, a as A } from '../chunks/i18n.COEalsOf.js';
import {
	R as H,
	V as X,
	N as Z,
	O as $,
	T as tt,
	ap as et,
	a3 as rt,
	aC as st,
	j as z,
	a4 as nt,
	S as at,
	g as v,
	d as x,
	aD as ot,
	a8 as it,
	m as ct,
	h as S,
	aE as ut,
	e as G,
	p as lt,
	u as ft,
	f as w,
	a as dt,
	aF as mt,
	s as _t,
	w as D,
	c as ht,
	t as vt,
	r as gt,
	H as V
} from '../chunks/runtime.DilaVa7n.js';
import { f as yt, m as Et, u as bt, s as Pt } from '../chunks/render.BxL60c5z.js';
import { a as R, t as J, d as C, e as Rt } from '../chunks/disclose-version.BeaculLB.js';
import { p as I, a as kt } from '../chunks/props.BY6uJeTk.js';
function j(e, t, r) {
	H && X();
	var i = e,
		a,
		o;
	Z(() => {
		a !== (a = t()) && (o && (et(o), (o = null)), a && (o = $(() => r(i, a))));
	}),
		H && (i = tt);
}
function W(e, t) {
	return e === t || (e == null ? void 0 : e[at]) === t;
}
function B(e = {}, t, r, i) {
	return (
		rt(() => {
			var a, o;
			return (
				st(() => {
					(a = o),
						(o = []),
						z(() => {
							e !== r(...o) && (t(e, ...o), a && W(r(...a), e) && t(null, ...a));
						});
				}),
				() => {
					nt(() => {
						o && W(r(...o), e) && t(null, ...o);
					});
				}
			);
		}),
		e
	);
}
function wt(e) {
	return class extends xt {
		constructor(t) {
			super({ component: e, ...t });
		}
	};
}
var g, f;
class xt {
	constructor(t) {
		O(this, g);
		O(this, f);
		var o;
		var r = new Map(),
			i = (n, s) => {
				var d = ct(s);
				return r.set(n, d), d;
			};
		const a = new Proxy(
			{ ...(t.props || {}), $$events: {} },
			{
				get(n, s) {
					return v(r.get(s) ?? i(s, Reflect.get(n, s)));
				},
				has(n, s) {
					return v(r.get(s) ?? i(s, Reflect.get(n, s))), Reflect.has(n, s);
				},
				set(n, s, d) {
					return x(r.get(s) ?? i(s, d), d), Reflect.set(n, s, d);
				}
			}
		);
		T(
			this,
			f,
			(t.hydrate ? yt : Et)(t.component, {
				target: t.target,
				props: a,
				context: t.context,
				intro: t.intro ?? !1,
				recover: t.recover
			})
		),
			((o = t == null ? void 0 : t.props) != null && o.$$host) || ot(),
			T(this, g, a.$$events);
		for (const n of Object.keys(u(this, f)))
			n === '$set' ||
				n === '$destroy' ||
				n === '$on' ||
				it(this, n, {
					get() {
						return u(this, f)[n];
					},
					set(s) {
						u(this, f)[n] = s;
					},
					enumerable: !0
				});
		(u(this, f).$set = (n) => {
			Object.assign(a, n);
		}),
			(u(this, f).$destroy = () => {
				bt(u(this, f));
			});
	}
	$set(t) {
		u(this, f).$set(t);
	}
	$on(t, r) {
		u(this, g)[t] = u(this, g)[t] || [];
		const i = (...a) => r.call(this, ...a);
		return (
			u(this, g)[t].push(i),
			() => {
				u(this, g)[t] = u(this, g)[t].filter((a) => a !== i);
			}
		);
	}
	$destroy() {
		u(this, f).$destroy();
	}
}
(g = new WeakMap()), (f = new WeakMap());
function pt(e) {
	S === null && ut(),
		S.l !== null
			? Lt(S).m.push(e)
			: G(() => {
					const t = z(e);
					if (typeof t == 'function') return t;
				});
}
function Lt(e) {
	var t = e.l;
	return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Ot = 'modulepreload',
	Tt = function (e, t) {
		return new URL(e, t).href;
	},
	Y = {},
	b = function (t, r, i) {
		let a = Promise.resolve();
		if (r && r.length > 0) {
			const n = document.getElementsByTagName('link'),
				s = document.querySelector('meta[property=csp-nonce]'),
				d = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute('nonce'));
			a = Promise.allSettled(
				r.map((l) => {
					if (((l = Tt(l, i)), l in Y)) return;
					Y[l] = !0;
					const y = l.endsWith('.css'),
						p = y ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let m = n.length - 1; m >= 0; m--) {
							const h = n[m];
							if (h.href === l && (!y || h.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${l}"]${p}`)) return;
					const c = document.createElement('link');
					if (
						((c.rel = y ? 'stylesheet' : Ot),
						y || (c.as = 'script'),
						(c.crossOrigin = ''),
						(c.href = l),
						d && c.setAttribute('nonce', d),
						document.head.appendChild(c),
						y)
					)
						return new Promise((m, h) => {
							c.addEventListener('load', m),
								c.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${l}`)));
						});
				})
			);
		}
		function o(n) {
			const s = new Event('vite:preloadError', { cancelable: !0 });
			if (((s.payload = n), window.dispatchEvent(s), !s.defaultPrevented)) throw n;
		}
		return a.then((n) => {
			for (const s of n || []) s.status === 'rejected' && o(s.reason);
			return t().catch(o);
		});
	},
	At = Q.reroute(),
	Ht = {};
var St = J(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	Dt = J('<!> <!>', 1);
function Vt(e, t) {
	lt(t, !0);
	let r = I(t, 'components', 23, () => []),
		i = I(t, 'data_0', 3, null),
		a = I(t, 'data_1', 3, null);
	ft(() => t.stores.page.set(t.page)),
		G(() => {
			t.stores, t.page, t.constructors, r(), t.form, i(), a(), t.stores.page.notify();
		});
	let o = D(!1),
		n = D(!1),
		s = D(null);
	pt(() => {
		const E = t.stores.page.subscribe(() => {
			v(o) &&
				(x(n, !0),
				mt().then(() => {
					x(s, kt(document.title || 'untitled page'));
				}));
		});
		return x(o, !0), E;
	});
	const d = V(() => t.constructors[1]);
	var l = Dt(),
		y = w(l);
	A(
		y,
		() => t.constructors[1],
		(E) => {
			var c = C();
			const m = V(() => t.constructors[0]);
			var h = w(c);
			j(
				h,
				() => v(m),
				(P, L) => {
					B(
						L(P, {
							get data() {
								return i();
							},
							get form() {
								return t.form;
							},
							children: (_, Ct) => {
								var q = C(),
									K = w(q);
								j(
									K,
									() => v(d),
									(M, N) => {
										B(
											N(M, {
												get data() {
													return a();
												},
												get form() {
													return t.form;
												}
											}),
											(k) => (r()[1] = k),
											() => {
												var k;
												return (k = r()) == null ? void 0 : k[1];
											}
										);
									}
								),
									R(_, q);
							},
							$$slots: { default: !0 }
						}),
						(_) => (r()[0] = _),
						() => {
							var _;
							return (_ = r()) == null ? void 0 : _[0];
						}
					);
				}
			),
				R(E, c);
		},
		(E) => {
			var c = C();
			const m = V(() => t.constructors[0]);
			var h = w(c);
			j(
				h,
				() => v(m),
				(P, L) => {
					B(
						L(P, {
							get data() {
								return i();
							},
							get form() {
								return t.form;
							}
						}),
						(_) => (r()[0] = _),
						() => {
							var _;
							return (_ = r()) == null ? void 0 : _[0];
						}
					);
				}
			),
				R(E, c);
		}
	);
	var p = _t(y, 2);
	A(
		p,
		() => v(o),
		(E) => {
			var c = St(),
				m = ht(c);
			A(
				m,
				() => v(n),
				(h) => {
					var P = Rt();
					vt(() => Pt(P, v(s))), R(h, P);
				}
			),
				gt(c),
				R(E, c);
		}
	),
		R(e, l),
		dt();
}
const Wt = wt(Vt),
	Yt = [
		() =>
			b(
				() => import('../nodes/0.BYYPvwGe.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
				import.meta.url
			),
		() =>
			b(
				() => import('../nodes/1.Dh2EnRXr.js'),
				__vite__mapDeps([17, 1, 2, 6, 7, 12, 10, 11]),
				import.meta.url
			),
		() =>
			b(
				() => import('../nodes/2.Blh5v-JL.js'),
				__vite__mapDeps([18, 1, 2, 6, 5, 19, 7, 4, 3, 9, 20]),
				import.meta.url
			),
		() =>
			b(
				() => import('../nodes/3.C6yYVuIG.js'),
				__vite__mapDeps([21, 1, 2, 6, 13, 9, 19, 7, 4]),
				import.meta.url
			),
		() =>
			b(
				() => import('../nodes/4.DxqVmmU1.js'),
				__vite__mapDeps([22, 1, 2, 6, 19, 7, 15, 9]),
				import.meta.url
			),
		() =>
			b(
				() => import('../nodes/5.CcbbfSXF.js'),
				__vite__mapDeps([23, 1, 2, 6, 5, 19, 7, 14, 9]),
				import.meta.url
			),
		() => b(() => import('../nodes/6.DjhnKivq.js'), __vite__mapDeps([24, 1, 2]), import.meta.url)
	],
	zt = [],
	Gt = { '/': [-3], '/about': [-4], '/fix': [4], '/learn': [5], '/learn/tools': [6] },
	Jt = {
		handleError: ({ error: e }) => {
			console.error(e);
		},
		reroute: At || (() => {})
	};
export {
	Gt as dictionary,
	Jt as hooks,
	Ht as matchers,
	Yt as nodes,
	Wt as root,
	zt as server_loads
};
