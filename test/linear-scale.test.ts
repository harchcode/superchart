import test from 'ava';
import { linearScale } from '../src/linear-scale';

test('linear scale returns correct scale with default width', t => {
  const ls = linearScale(0, 100);

  const v = ls(50);
  const v2 = ls(75);
  const v3 = ls(0);

  t.is(v, 0.5);
  t.is(v2, 0.75);
  t.is(v3, 0);
});

test('linear scale returns correct scale with specified width', t => {
  const ls = linearScale(0, 100, 1000);

  const v = ls(50);
  const v2 = ls(75);
  const v3 = ls(0);

  t.is(v, 500);
  t.is(v2, 750);
  t.is(v3, 0);
});
