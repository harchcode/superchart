import test from 'ava';
import { bandScale } from '../src';

test('band scale returns correct values with default options', t => {
  const bs = bandScale(['a', 'b', 'c']);

  const { a, b, c } = bs;

  t.is(a.start, 0);
  t.is(a.end, 1 / 3);
  t.is(a.mid, (a.start + a.end) / 2);

  t.is(b.start, 1 / 3);
  t.is(b.end, 2 / 3);
  t.is(b.mid, (b.start + b.end) / 2);

  t.is(c.start, 2 / 3);
  t.is(c.end, 1);
  t.is(c.mid, (c.start + c.end) / 2);
});

test('band scale returns correct values with specified width', t => {
  const bs = bandScale(['a', 'b', 'c'], {
    width: 900
  });

  const { a, b, c } = bs;

  t.is(a.start, 0);
  t.is(a.end, 300);
  t.is(a.mid, 150);

  t.is(b.start, 300);
  t.is(b.end, 600);
  t.is(b.mid, 450);

  t.is(c.start, 600);
  t.is(c.end, 900);
  t.is(c.mid, 750);
});
