import { a as e, t as p } from '../chunks/disclose-version.BeaculLB.js';
import {
	p as d,
	f as u,
	t as v,
	a as b,
	$ as _,
	c as i,
	r as m,
	s as g
} from '../chunks/runtime.DilaVa7n.js';
import { h as x, s as A } from '../chunks/render.BxL60c5z.js';
import { h as y, a as j } from '../chunks/about.wuY0A_JP.js';
import { t as k, f as q } from '../chunks/index.jdzEjXFq.js';
import { i as w } from '../chunks/lifecycle.D2hKm4A6.js';
import { p as z } from '../chunks/props.BY6uJeTk.js';
var B = p('<meta name="description" content="About this app">'),
	C = p('<h1> </h1> <article><!></article>', 1);
function K(f, r) {
	d(r, !1);
	let n = z(r, 'data', 8);
	w();
	var o = C();
	x((a) => {
		var h = B();
		(_.title = 'About'), e(a, h);
	});
	var t = u(o),
		l = i(t);
	v(() => A(l, j())), m(t);
	var s = g(t, 2),
		c = i(s);
	y(c, () => {
		var a;
		return (a = n().about) == null ? void 0 : a.status;
	}),
		m(s),
		k(1, t, () => q),
		e(f, o),
		b();
}
export { K as component };
