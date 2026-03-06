import test from 'node:test';
import assert from 'node:assert';
import { cn } from './utils.ts';

test('cn utility function', async (t) => {
  await t.test('merges simple class names', () => {
    assert.strictEqual(cn('px-2', 'py-1'), 'px-2 py-1');
  });

  await t.test('handles conditional classes', () => {
    assert.strictEqual(cn('px-2', { 'py-1': true, 'mt-4': false }), 'px-2 py-1');
  });

  await t.test('handles arrays of classes', () => {
    assert.strictEqual(cn(['px-2', 'py-1']), 'px-2 py-1');
  });

  await t.test('resolves tailwind class conflicts', () => {
    assert.strictEqual(cn('px-2', 'px-4'), 'px-4');
    assert.strictEqual(cn('p-2 px-4', 'p-4'), 'p-4');
  });

  await t.test('ignores null and undefined', () => {
    assert.strictEqual(cn('px-2', null, undefined, 'py-1'), 'px-2 py-1');
  });
});
