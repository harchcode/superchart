import test from 'ava';
import { add } from '../src';

test('add() returns addition of the 2 params', t => {
  const r = add(1, 2);

  t.is(r, 3);
});
