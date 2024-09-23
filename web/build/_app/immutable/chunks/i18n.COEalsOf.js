import {
	R as b,
	V as H,
	N as K,
	am as X,
	an as Y,
	Z as q,
	ac as D,
	ao as F,
	O as W,
	ap as C,
	T as Q,
	a0 as Z
} from './runtime.DilaVa7n.js';
import { r as G } from './runtime.BB1J7FTS.js';
import './disclose-version.BeaculLB.js';
import { b as w, g as J } from './entry.DG9UY6Zw.js';
import { p as V } from './stores.DjS85lB-.js';
function Pe(e, t, n, a = null, c = !1) {
	b && H();
	var s = e,
		i = null,
		o = null,
		r = null,
		u = c ? Z : 0;
	K(() => {
		if (r === (r = !!t())) return;
		let f = !1;
		if (b) {
			const l = s.data === X;
			r === l && ((s = Y()), q(s), D(!1), (f = !0));
		}
		r
			? (i ? F(i) : (i = W(() => n(s))),
				o &&
					C(o, () => {
						o = null;
					}))
			: (o ? F(o) : a && (o = W(() => a(s))),
				i &&
					C(i, () => {
						i = null;
					})),
			f && D(!0);
	}, u),
		b && (s = Q);
}
function ee(e, t) {
	if (e === '') return '';
	const n = new URL(e, t).pathname;
	return n.endsWith('/') ? n.slice(0, -1) : n;
}
function T(e, t) {
	const n = re(e),
		a = te(n, t),
		[c, s] = ne(a);
	return [c, s];
}
const O = (e, t, n) => [t, e, n ?? ''].filter((a) => a !== '/').join('') || '/';
function te(e, t) {
	const n = e.replace(t, '');
	return n.startsWith('/') ? n : `/${n}`;
}
function ne(e) {
	const n = ['/.html__data.json', '/__data.json'].find((a) => e.endsWith(a));
	return n ? [e.slice(0, -n.length) || '/', n] : [e, void 0];
}
function re(e) {
	try {
		return decodeURI(e);
	} catch {
		return e;
	}
}
const ae =
	(e) =>
	({ url: t }) => {
		try {
			const [n, a] = T(t.pathname, w),
				c = e.getLanguageFromLocalisedPath(n);
			if (!c) return t.pathname;
			const s = e.getCanonicalPath(n, c);
			return O(s, w, a);
		} catch {
			return t.pathname;
		}
	};
function se(e) {
	return `/${e.split('/').filter(Boolean).join('/')}`;
}
function ie(e) {
	const t = e.map((n) => (typeof n == 'string' ? (a) => a === n : (a) => n.test(a)));
	return (n) => t.some((a) => a(se(n)));
}
const L = 'rtl',
	E = 'ltr';
function ce(e) {
	try {
		const t = new Intl.Locale(e);
		return 'textInfo' in t
			? t.textInfo.direction === L
				? L
				: E
			: t.getTextInfo().direction === L
				? L
				: E;
	} catch {
		return E;
	}
}
function oe(e) {
	const t = e.map((n) => [n, ce(n)]);
	return Object.fromEntries(t);
}
const ue = 0,
	A = 1,
	y = 2,
	fe = 4,
	_ = 0,
	v = 1,
	$ = 2;
function le(e) {
	const t = he(me);
	return e.sort((n, a) => {
		var c, s, i, o, r, u;
		const f = N(n).map(t),
			l = N(a).map(t);
		for (let h = 0; h < Math.max(f.length, l.length); h += 1) {
			const g = f[h],
				p = l[h];
			if (!g) return -1;
			if (!p) return 1;
			for (let x = 0; x < Math.max(g.length, p.length); x += 1) {
				const m = g[x],
					d = p[x];
				if ((m == null ? void 0 : m[_]) || (d == null ? void 0 : d[_])) {
					if (!m) return -1;
					if (!d) return 1;
					const R =
							((c = g[x + 1]) == null ? void 0 : c[v]) ||
							((i = (s = f[h + 1]) == null ? void 0 : s[0]) == null ? void 0 : i[v]),
						S =
							((o = p[x + 1]) == null ? void 0 : o[v]) ||
							((u = (r = l[h + 1]) == null ? void 0 : r[0]) == null ? void 0 : u[v]),
						U = R && S,
						P = R && !S,
						B = !R && S;
					if ((m[_] && d[_]) === y) {
						if (U) continue;
						if (P) return -1;
						if (B) return 1;
					}
					if (m[_] === y) return P ? -1 : 1;
					if (d[_] === y) return B ? 1 : -1;
					if (m[$] !== d[$]) return (-1) ** +m[$];
					if (m[_] !== d[_]) return (-1) ** +(m[_] > d[_]);
				} else if ((m == null ? void 0 : m[v]) !== (d == null ? void 0 : d[v]))
					return de(m[v], d[v]);
			}
		}
		return n < a ? 1 : -1;
	});
}
function he(e) {
	const t = new Map();
	return (n) => (t.has(n) || t.set(n, e(n)), t.get(n));
}
function me(e) {
	const t = [];
	let n = 0;
	for (; n <= e.length; ) {
		const a = e.indexOf('[', n),
			c = a === -1;
		if ((t.push([ue, e.slice(n, c ? void 0 : a), !1]), c)) break;
		const s = e[a + 1] === '[' ? A : e[a + 1] === '.' ? y : fe,
			i = s === A ? ']]' : ']',
			o = e.indexOf(i, a);
		if (o === -1) throw new Error(`Invalid route definition ${e}`);
		const r = e.slice(a, (n = o + i.length));
		t.push([s, r, r.includes('=')]);
	}
	return t;
}
const N = (e) =>
	e
		.replace(/\[\[[^\]]+\]\](?!$)/g, '')
		.split('/')
		.filter(Boolean);
function de(e, t) {
	if (e === t) return 0;
	let n = 0;
	for (; e[n] === t[n]; ) n++;
	return e[n] ? (t[n] ? (e[n] < t[n] ? -1 : 1) : -1) : 1;
}
const ge = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function _e(e) {
	const t = [];
	return {
		pattern:
			e === '/'
				? /^\/$/
				: new RegExp(
						`^${M(e)
							.map((a) => {
								const c = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
								if (c)
									return (
										t.push({ name: c[1], matcher: c[2], optional: !1, rest: !0, chained: !0 }),
										'(?:/(.*))?'
									);
								const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);
								if (s)
									return (
										t.push({ name: s[1], matcher: s[2], optional: !0, rest: !1, chained: !0 }),
										'(?:/([^/]+))?'
									);
								if (!a) return;
								const i = a.split(/\[(.+?)\](?!\])/);
								return (
									'/' +
									i
										.map((r, u) => {
											if (u % 2) {
												if (r.startsWith('x+'))
													return j(String.fromCharCode(parseInt(r.slice(2), 16)));
												if (r.startsWith('u+'))
													return j(
														String.fromCharCode(
															...r
																.slice(2)
																.split('-')
																.map((x) => parseInt(x, 16))
														)
													);
												const f = ge.exec(r);
												if (!f) throw new Error(`Invalid param: ${r}`);
												const [, l, h, g, p] = f;
												return (
													t.push({
														name: g,
														matcher: p,
														optional: !!l,
														rest: !!h,
														chained: h ? u === 1 && i[0] === '' : !1
													}),
													h ? '(.*?)' : l ? '([^/]*)?' : '([^/]+?)'
												);
											}
											return j(r);
										})
										.join('')
								);
							})
							.join('')}/?$`
					),
		params: t
	};
}
function pe(e, t, n) {
	const a = {},
		c = e.slice(1),
		s = c.filter((o) => o !== void 0);
	let i = 0;
	for (const [o, r] of t.entries()) {
		let u = c[o - i];
		if (
			(r.chained &&
				r.rest &&
				i &&
				((u = c
					.slice(o - i, o + 1)
					.filter((l) => l)
					.join('/')),
				(i = 0)),
			u === void 0)
		) {
			r.rest && (a[r.name] = '');
			continue;
		}
		if (r.matcher && !n[r.matcher]) return;
		if ((n[r.matcher] ?? (() => !0))(u)) {
			a[r.name] = u;
			const l = t[o + 1],
				h = c[o + 1];
			l && !l.rest && l.optional && h && r.chained && (i = 0),
				!l && !h && Object.keys(a).length === s.length && (i = 0);
			continue;
		}
		if (r.optional && r.chained) {
			i++;
			continue;
		}
		return;
	}
	if (!i) return a;
}
function j(e) {
	return e
		.normalize()
		.replace(/[[\]]/g, '\\$&')
		.replace(/%/g, '%25')
		.replace(/\//g, '%2[Ff]')
		.replace(/\?/g, '%3[Ff]')
		.replace(/#/g, '%23')
		.replace(/[.*+?^${}()|\\]/g, '\\$&');
}
const xe = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;
function k(e, t) {
	return (
		'/' +
		M(e)
			.map((n) =>
				n.replace(xe, (a, c, s, i) => {
					const o = t[i];
					if (!o) {
						if (c || (s && o !== void 0)) return '';
						throw new Error(`Missing parameter '${i}' in route ${e}`);
					}
					if (o[0] == '/' || o.endsWith('/'))
						throw new Error(`Parameter '${i}' in route ${e} cannot start or end with a slash`);
					return o;
				})
			)
			.filter(Boolean)
			.join('/')
	);
}
function z(e, t, n) {
	const a = le(t);
	for (const c of a) {
		const s = _e(c),
			i = s.pattern.exec(ve(e));
		if (!i) continue;
		const o = pe(i, s.params, n);
		if (o) return { params: o, id: c };
	}
}
const ve = (e) => (e.endsWith('/') ? e.slice(0, -1) : e),
	M = (e) => e.slice(1).split('/'),
	we = (e, t) =>
		Object.fromEntries(Object.entries(e).map(([n, a]) => [n, typeof a == 'object' ? a : Le(a, t)])),
	Le = (e, t) => Object.fromEntries(t.map((n) => [n, e({}, { languageTag: n })]));
function Te(e, t, n, a, c) {
	function s(r) {
		const f = r.split('/')[1];
		if (e.includes(f) && (c === 'always' || f !== t)) return f;
		if (c === 'never') return t;
	}
	function i(r, u) {
		const f = r.endsWith('/') && r !== '/';
		r = f ? r.slice(0, -1) : r;
		let l = Re(r, u, n, a);
		return f && (l += '/'), (c === 'always' || u !== t) && (l = `/${u}${l}`), l;
	}
	function o(r, u) {
		const f = r.endsWith('/') && r !== '/';
		(c === 'always' || u !== t) && (r = r.replace(`/${u}`, '') || '/');
		const l = f;
		r = l ? r.slice(0, -1) : r;
		let h = ye(r, u, n, a);
		return l && (h += '/'), h;
	}
	return { getLanguageFromLocalisedPath: s, getLocalisedPath: i, getCanonicalPath: o };
}
function ye(e, t, n, a) {
	for (const [c, s] of Object.entries(n)) {
		if (!(t in s)) continue;
		const i = s[t];
		if (!i) continue;
		const o = z(e, [i], a);
		if (o) return k(c, o.params);
	}
	return e;
}
function Re(e, t, n, a) {
	const c = z(e, Object.keys(n), a);
	if (!c) return e;
	const s = n[c.id];
	if (!s) return e;
	const i = s[t];
	return i ? k(i, c.params) : e;
}
function Se(e, t) {
	var o;
	const n = t != null && t.pathnames ? we(t.pathnames, e.availableLanguageTags) : {},
		a = (t == null ? void 0 : t.exclude) ?? [],
		c = (t == null ? void 0 : t.defaultLanguageTag) ?? e.sourceLanguageTag,
		s = {
			defaultLanguageTag: c,
			runtime: e,
			translations: n,
			matchers: (t == null ? void 0 : t.matchers) ?? {},
			exclude: ie(a),
			prefixDefaultLanguage: t == null ? void 0 : t.prefixDefaultLanguage,
			textDirection: (t == null ? void 0 : t.textDirection) ?? oe(e.availableLanguageTags),
			seo: {
				noAlternateLinks:
					((o = t == null ? void 0 : t.seo) == null ? void 0 : o.noAlternateLinks) ?? !1
			}
		},
		i = Te(e.availableLanguageTags, c, s.translations, s.matchers, s.prefixDefaultLanguage);
	return (
		Object.freeze(n),
		Object.freeze(s),
		{
			config: s,
			strategy: i,
			reroute: () => ae(i),
			handle: () => {
				throw new Error('');
			},
			getLanguageFromUrl(r) {
				const u = I(w),
					[f] = T(r.pathname, u);
				return s.exclude(f)
					? s.defaultLanguageTag
					: i.getLanguageFromLocalisedPath(f) || s.defaultLanguageTag;
			},
			resolveRoute(r, u = void 0) {
				if (s.exclude(r)) return r;
				const f = I(w),
					[l, h] = T(r, f);
				if (((u = u ?? e.languageTag()), !r.startsWith(f))) return r;
				const g = i.getLocalisedPath(l, u);
				return O(g, f, h);
			},
			route(r) {
				const u = I(w),
					[f, l] = T(r, u),
					g = i.getLanguageFromLocalisedPath(f) || s.defaultLanguageTag,
					p = i.getCanonicalPath(f, g);
				return O(p, u, l);
			}
		}
	);
}
function I(e) {
	return e === '' ? '' : e.startsWith('/') ? e : ee(e, new URL(J(V).url));
}
const Be = Se(G, {
	pathnames: {
		'/learn': { en: '/learn', fr: '/apprendre' },
		'/fix': { en: '/fix', fr: '/réparer' },
		'/about': { en: '/about', fr: '/a-propos' }
	},
	prefixDefaultLanguage: 'always'
});
export { Pe as a, Be as i, ee as n, T as p, O as s };
