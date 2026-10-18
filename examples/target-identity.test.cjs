const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createTargetId } = require('./target-identity.cjs');
const base = { route: '/catalog', sourceId: 'ProductCard:button', strategy: 'instance-key', identityHint: 'item-a' };

test('repeated component instances receive separate edit targets', () => {
  assert.notEqual(createTargetId(base), createTargetId({ ...base, identityHint: 'item-b' }));
});

test('the same component on another route does not reuse the target ID', () => {
  assert.notEqual(createTargetId(base), createTargetId({ ...base, route: '/saved' }));
});

test('separate source locations remain distinct for the same item', () => {
  assert.notEqual(createTargetId(base), createTargetId({ ...base, sourceId: 'ProductCard:title' }));
});

test('a rerender with unchanged identity context preserves the selected target', () => {
  const before = createTargetId(base);
  const reconstructedContext = JSON.parse(JSON.stringify(base));
  assert.equal(createTargetId(reconstructedContext), before);
});
