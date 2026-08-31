const { ALL_RESOURCES } = require('../../src/data/resources/index.ts');

console.log("==================================================");
console.log("AUDITING FOR DUPLICATE RESOURCE IDENTIFIERS & CLAIMS");
console.log("==================================================\n");

const seenIds = new Set();
const duplicateIds = [];

ALL_RESOURCES.forEach((r) => {
  if (seenIds.has(r.id)) {
    duplicateIds.push(r.id);
  }
  seenIds.add(r.id);
});

if (duplicateIds.length > 0) {
  console.error("FAIL: Duplicate resource IDs detected:", duplicateIds);
  process.exit(1);
} else {
  console.log(`PASS: 0 duplicate resource IDs detected across ${ALL_RESOURCES.length} canonical records.`);
}
