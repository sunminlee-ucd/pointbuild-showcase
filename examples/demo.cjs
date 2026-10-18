const { createTargetId } = require('./target-identity.cjs');
console.log('PointBuild identity excerpt — synthetic selection context');
for (const item of ['item-a', 'item-b']) {
  console.log(JSON.stringify({ item, targetId: createTargetId({ route: '/catalog', sourceId: 'ProductCard:button', strategy: 'instance-key', identityHint: item }) }));
}
console.log('This excerpt does not implement source mapping, editing, approval, or Undo.');
