import { test, describe } from 'node:test';
import { strict as assert } from 'node:assert';

describe('Basic functionality', () => {
  test('basic test', () => {
    assert.equal(1 + 1, 2);
  });

  test('environment variables are accessible', () => {
    assert.ok(typeof process.env === 'object');
  });
});

describe('Error handling', () => {
  test('Error.cause is supported in Node 22', () => {
    const originalError = new Error('Original error');
    const wrappedError = new Error('Wrapped error', { cause: originalError });

    assert.ok(wrappedError.cause);
    assert.equal(wrappedError.cause, originalError);
  });
});
