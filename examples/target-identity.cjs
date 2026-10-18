// Source-derived excerpt: createTargetId and its hash function.
// TypeScript annotations removed; source instrumentation and DOM lookup omitted.
function stableHash(value) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function createTargetId(input) {
  return `pbt-${stableHash(
    [input.route, input.sourceId, input.strategy, input.identityHint].join('|')
  )}`;
}

module.exports = { createTargetId };
