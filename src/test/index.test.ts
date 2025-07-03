import { test } from 'node:test';
import { strict as assert } from 'node:assert';

test('basic test', () => {
  assert.equal(1 + 1, 2);
});

test('environment variables are accessible', () => {
  assert.ok(typeof process.env === 'object');
});
