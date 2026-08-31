const fs = require('fs');
const content = fs.readFileSync('src/data/masterReconciliationLedger.ts', 'utf8');
const published = (content.match(/status:\s*"PUBLISHED"/g) || []).length;
const needsEntry = (content.match(/status:\s*"VERIFIED_NEEDS_ENTRY"/g) || []).length;
const researching = (content.match(/status:\s*"RESEARCHING"/g) || []).length;
const conditional = (content.match(/status:\s*"CONDITIONAL"/g) || []).length;
const tempClosed = (content.match(/status:\s*"TEMPORARILY_CLOSED"/g) || []).length;
const stale = (content.match(/status:\s*"STALE"/g) || []).length;
const concepts = (content.match(/status:\s*"PROGRAM_CONCEPT_NOT_RESOURCE"/g) || []).length;

console.log({
  total: published + needsEntry + researching + conditional + tempClosed + stale + concepts,
  published,
  needsEntry,
  researching,
  conditional,
  tempClosed,
  stale,
  concepts
});
