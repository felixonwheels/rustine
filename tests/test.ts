import { assertEquals } from 'jsr:@std/assert';

Deno.test('simple test', () => {
	const x = 1 + 2;
	assertEquals(x, 3);
});
