import { a as r, t as s } from '../chunks/disclose-version.BeaculLB.js';
import {
	p as x,
	f as y,
	t as o,
	a as A,
	$ as F,
	c as l,
	r as p,
	s as c
} from '../chunks/runtime.DilaVa7n.js';
import { h as T, s as $ } from '../chunks/render.BxL60c5z.js';
import { g as q, e as S, i as V, s as j } from '../chunks/index.Bmg8rQph.js';
import { t as m, f as _ } from '../chunks/index.jdzEjXFq.js';
import { i as w } from '../chunks/lifecycle.D2hKm4A6.js';
import { l as z } from '../chunks/learn.CAJoXpab.js';
var B = s('<meta name="description" content="learn about bike maintenance">'),
	C = s(
		`<article><h5 class="card-title">Tools</h5> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a class="btn btn-primary stretched-link">Visit tools</a></article>`
	),
	D = s('<h1> </h1> <!>', 1);
function N(d, f) {
	x(f, !1);
	const u = q(),
		[h, E] = u;
	w();
	var i = D();
	T((e) => {
		var n = B();
		(F.title = 'learn'), r(e, n);
	});
	var t = y(i),
		b = l(t);
	o(() => $(b, z())), p(t);
	var v = c(t, 2);
	S(
		v,
		0,
		() => [...Array(100).keys()],
		V,
		(e, n, k) => {
			var a = C(),
				g = c(l(a), 4);
			o(() => j(g, 'href', h('/learn/tools', void 0))),
				p(a),
				m(
					5,
					a,
					() => _,
					() => ({ duration: 120, delay: k * 100 })
				),
				r(e, a);
		}
	),
		m(1, t, () => _),
		r(d, i),
		A();
}
export { N as component };
