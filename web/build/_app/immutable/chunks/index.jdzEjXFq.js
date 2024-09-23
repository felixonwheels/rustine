import {
	n as C,
	a0 as g,
	a1 as j,
	a2 as z,
	a3 as B,
	y as K,
	j as P,
	K as U,
	a4 as S,
	a5 as D,
	a6 as G,
	a7 as H
} from './runtime.DilaVa7n.js';
import { a as J } from './render.BxL60c5z.js';
const M = typeof window < 'u',
	Q = M ? requestAnimationFrame : C,
	V = M ? () => performance.now() : () => Date.now(),
	w = { tick: (e) => Q(e), now: () => V(), tasks: new Set() };
function k(e) {
	w.tasks.forEach((t) => {
		t.c(e) || (w.tasks.delete(t), t.f());
	}),
		w.tasks.size !== 0 && w.tick(k);
}
function W(e) {
	let t;
	return (
		w.tasks.size === 0 && w.tick(k),
		{
			promise: new Promise((n) => {
				w.tasks.add((t = { c: e, f: n }));
			}),
			abort() {
				w.tasks.delete(t);
			}
		}
	);
}
function F(e, t) {
	e.dispatchEvent(new CustomEvent(t));
}
function X(e) {
	const t = e.split('-');
	return t.length === 1
		? t[0]
		: t[0] +
				t
					.slice(1)
					.map((n) => n[0].toUpperCase() + n.slice(1))
					.join('');
}
function b(e) {
	const t = {},
		n = e.split(';');
	for (const u of n) {
		const [r, f] = u.split(':');
		if (!r || f === void 0) break;
		const v = X(r.trim());
		t[v] = f.trim();
	}
	return t;
}
const Y = (e) => e;
function at(e, t, n, u) {
	var r = (e & G) !== 0,
		f = (e & H) !== 0,
		v = r && f,
		c = (e & D) !== 0,
		E = v ? 'both' : r ? 'in' : 'out',
		d,
		N = t.inert,
		a,
		s,
		l;
	function y() {
		return d ?? (d = n()(t, u == null ? void 0 : u(), { direction: E }));
	}
	var p = {
			is_global: c,
			in() {
				(t.inert = N),
					s == null || s.abort(),
					a == null || a.abort(),
					r
						? (F(t, 'introstart'),
							(a = x(
								t,
								y(),
								s,
								1,
								() => {
									F(t, 'introend'), a == null || a.abort(), (a = d = void 0);
								},
								v
									? void 0
									: () => {
											a = d = void 0;
										}
							)))
						: l == null || l();
			},
			out(i) {
				s == null || s.abort(),
					f
						? ((t.inert = !0),
							F(t, 'outrostart'),
							(s = x(
								t,
								y(),
								a,
								0,
								() => {
									F(t, 'outroend'), (s = d = void 0), i == null || i();
								},
								v
									? void 0
									: () => {
											s = d = void 0;
										}
							)),
							(l = s.reset))
						: i == null || i();
			},
			stop: () => {
				a == null || a.abort(), s == null || s.abort();
			}
		},
		m = K;
	if (((m.transitions ?? (m.transitions = [])).push(p), r && J)) {
		let i = c;
		if (!i) {
			for (var T = m.parent; T && T.f & g; ) for (; (T = T.parent) && !(T.f & j); );
			i = !T || (T.f & z) !== 0;
		}
		i &&
			B(() => {
				P(() => p.in());
			});
	}
}
function x(e, t, n, u, r, f) {
	var v = u === 1;
	if (U(t)) {
		var c,
			E = !1;
		return (
			S(() => {
				if (!E) {
					var o = t({ direction: v ? 'in' : 'out' });
					c = x(e, o, n, u, r, f);
				}
			}),
			{
				abort: () => {
					(E = !0), c == null || c.abort();
				},
				deactivate: () => c.deactivate(),
				reset: () => c.reset(),
				t: (o) => c.t(o)
			}
		);
	}
	if ((n == null || n.deactivate(), !(t != null && t.duration)))
		return r == null || r(), { abort: C, deactivate: C, reset: C, t: () => u };
	const { delay: d = 0, css: N, tick: a, easing: s = Y } = t;
	var l = w.now() + d,
		y = (n == null ? void 0 : n.t(l)) ?? 1 - u,
		p = u - y,
		m = t.duration * Math.abs(p),
		T = l + m,
		i,
		A;
	return (
		N
			? S(() => {
					var o = [],
						_ = Math.ceil(m / 16.666666666666668);
					if (v && d > 0) {
						let $ = Math.ceil(d / 16.666666666666668),
							L = b(N(0, 1));
						for (let R = 0; R < $; R += 1) o.push(L);
					}
					for (var I = 0; I <= _; I += 1) {
						var O = y + p * s(I / _),
							q = N(O, 1 - O);
						o.push(b(q));
					}
					(i = e.animate(o, {
						delay: v ? 0 : d,
						duration: m + (v ? d : 0),
						easing: 'linear',
						fill: 'forwards'
					})),
						i.finished
							.then(() => {
								r == null || r(), u === 1 && i.cancel();
							})
							.catch(($) => {
								if (i.startTime !== null && i.currentTime !== null) throw $;
							});
				})
			: (y === 0 && (a == null || a(0, 1)),
				(A = W((o) => {
					if (o >= T) return a == null || a(u, 1 - u), r == null || r(), !1;
					if (o >= l) {
						var _ = y + p * s((o - l) / m);
						a == null || a(_, 1 - _);
					}
					return !0;
				}))),
		{
			abort: () => {
				i && (i.cancel(), (i.effect = null)),
					A == null || A.abort(),
					f == null || f(),
					(r = void 0),
					(f = void 0);
			},
			deactivate: () => {
				(r = void 0), (f = void 0);
			},
			reset: () => {
				u === 0 && (a == null || a(1, 0));
			},
			t: (o) => {
				var _ = y + p * s((o - l) / m);
				return Math.min(1, Math.max(0, _));
			}
		}
	);
}
function Z(e) {
	const t = e - 1;
	return t * t * t + 1;
}
function h(e) {
	const t = typeof e == 'string' && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return t ? [parseFloat(t[1]), t[2] || 'px'] : [e, 'px'];
}
function rt(
	e,
	{ delay: t = 0, duration: n = 400, easing: u = Z, x: r = 0, y: f = 0, opacity: v = 0 } = {}
) {
	const c = getComputedStyle(e),
		E = +c.opacity,
		d = c.transform === 'none' ? '' : c.transform,
		N = E * (1 - v),
		[a, s] = h(r),
		[l, y] = h(f);
	return {
		delay: t,
		duration: n,
		easing: u,
		css: (p, m) => `
			transform: ${d} translate(${(1 - p) * a}${s}, ${(1 - p) * l}${y});
			opacity: ${E - N * m}`
	};
}
export { rt as f, at as t };
