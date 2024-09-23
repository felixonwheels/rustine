import { a as _, t as h } from '../chunks/disclose-version.BeaculLB.js';
import {
	p as H,
	f as L,
	t as m,
	a as N,
	$ as R,
	c as t,
	r as e,
	s as i
} from '../chunks/runtime.DilaVa7n.js';
import { h as U, s as u } from '../chunks/render.BxL60c5z.js';
import { g as V, e as j, i as w, s as z } from '../chunks/index.Bmg8rQph.js';
import { t as P, f as k } from '../chunks/index.jdzEjXFq.js';
import { i as B } from '../chunks/lifecycle.D2hKm4A6.js';
import { p as E } from '../chunks/props.BY6uJeTk.js';
import { W as I } from '../chunks/wrench.u8TcwBjA.js';
import { l as S } from '../chunks/runtime.BB1J7FTS.js';
const J = (a) => `Greetings ${a.name}.`,
	K = (a) => `Salut ${a.name}.`,
	O = (a, n = {}) => ({ en: J, fr: K })[n.languageTag ?? S()](a);
var Q = h('<meta name="description" content="Rustine">'),
	X =
		h(`<article><h3><!></h3> <h2>Tools</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
					tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
					diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
					orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
					Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
					Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
					augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
					ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
					Maecenas adipiscing ante non diam sodales hendrerit.</p> <p><a>Navigate to tools</a></p></article>`),
	Y = h(
		'<h1> </h1> <h1> </h1> <section class="hero svelte-1m4ormo"><h1 class="title svelte-1m4ormo"> </h1> <p> </p> <button class="btn btn-primary">Get Started</button></section> <section><div class="grid svelte-1m4ormo"></div></section>',
		1
	);
function me(a, n) {
	H(n, !1);
	let f = E(n, 'data', 8);
	const T = V(),
		[$, Z] = T;
	B();
	var b = Y();
	U((s) => {
		var r = Q();
		(R.title = 'Home'), _(s, r);
	});
	var c = L(b),
		A = t(c);
	m(() => u(A, S())), e(c);
	var p = i(c, 2),
		C = t(p);
	m(() => u(C, O({ name: 'Félix' }))), e(p);
	var o = i(p, 2),
		d = t(o),
		F = t(d);
	e(d);
	var g = i(d, 2),
		M = t(g);
	e(g), i(g, 2), e(o);
	var x = i(o, 2),
		q = t(x);
	j(
		q,
		4,
		() => [...Array(8).keys()],
		w,
		(s, r, D) => {
			var l = X(),
				v = t(l),
				G = t(v);
			I(G, {}), e(v);
			var y = i(v, 6),
				W = t(y);
			m(() => z(W, 'href', $('/learn/tools', void 0))),
				e(y),
				e(l),
				P(
					5,
					l,
					() => k,
					() => ({ duration: 120, delay: D * 100 })
				),
				_(s, l);
		}
	),
		e(q),
		e(x),
		m(() => {
			var s, r;
			u(F, (s = f().global) == null ? void 0 : s.title),
				u(M, (r = f().global) == null ? void 0 : r.description);
		}),
		P(1, o, () => k),
		_(a, b),
		N();
}
export { me as component };
