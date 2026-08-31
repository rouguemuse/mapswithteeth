const fs = require('fs');

const { OTHER_WAYS_THROUGH_RESOURCES } = require('../src/data/otherWaysThrough.ts');

console.log("Total resources in OTHER_WAYS_THROUGH_RESOURCES:", OTHER_WAYS_THROUGH_RESOURCES.length);

const categories = {};
const statuses = {};

OTHER_WAYS_THROUGH_RESOURCES.forEach((r, idx) => {
  categories[r.category] = (categories[r.category] || 0) + 1;
  statuses[r.verificationStatus] = (statuses[r.verificationStatus] || 0) + 1;
  console.log(`${idx + 1}. [${r.verificationStatus}] [${r.category}] ${r.id} - ${r.name}`);
});

console.log("\nCategories breakdown:", categories);
console.log("Statuses breakdown:", statuses);
