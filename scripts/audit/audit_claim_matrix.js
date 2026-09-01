const {
  ALL_RESOURCES,
  PUBLIC_RESOURCES,
  ACTIVE_USABLE_RESOURCES,
  getVisibilityMetrics
} = require('../../src/data/resources/registry.ts');

console.log("==================================================");
console.log("MAPS WITH TEETH — RESOURCE VISIBILITY & CLAIM MATRIX");
console.log("==================================================\n");

const metrics = getVisibilityMetrics();

console.log("RESOURCE VISIBILITY METRICS:");
console.log(`Total canonical resources:       ${metrics.totalCanonical}`);
console.log(`Publicly visible:                ${metrics.publiclyVisible}`);
console.log(`Active usable:                   ${metrics.activeUsable}`);
console.log(`Paused visible:                  ${metrics.pausedVisible}`);
console.log(`Temporarily closed visible:      ${metrics.temporarilyClosedVisible}`);
console.log(`Research-only leads:             ${metrics.researchOnlyLeads}`);
console.log("--------------------------------------------------\n");

const matrix = {
  PRIMARY_STATUTE: [],
  OFFICIAL_PROGRAM_SOURCE: [],
  DIRECTLY_CONFIRMED: [],
  QUALIFIED_DISCRETIONARY: [],
  NEEDS_REVERIFICATION: [],
  QUARANTINED: []
};

ALL_RESOURCES.forEach(r => {
  const prov = r.provenance;
  const status = r.verificationStatus;

  if (status === 'RESEARCHING' || status === 'FIELD_REPORTED_UNCONFIRMED' || status === 'CLOSED') {
    matrix.QUARANTINED.push(r);
  } else if (status === 'NEEDS_REVERIFICATION' || status === 'STALE') {
    matrix.NEEDS_REVERIFICATION.push(r);
  } else if (status === 'ACTIVE_PARTIALLY_VERIFIED' || status === 'PAUSED' || status === 'TEMPORARILY_CLOSED') {
    matrix.QUALIFIED_DISCRETIONARY.push(r);
  } else if (r.isStatutoryRight || prov?.sourceType === 'PRIMARY_STATUTE') {
    matrix.PRIMARY_STATUTE.push(r);
  } else if (prov?.verificationMethod === 'DIRECT_AGENCY_INTERVIEW') {
    matrix.DIRECTLY_CONFIRMED.push(r);
  } else {
    matrix.OFFICIAL_PROGRAM_SOURCE.push(r);
  }
});

console.log("FACTUAL AUDIT BY SOURCE TYPE:");
console.log(`VERIFIED AGAINST PRIMARY SOURCE:                 ${matrix.PRIMARY_STATUTE.length}`);
console.log(`VERIFIED AGAINST CURRENT OFFICIAL PROGRAM SOURCE: ${matrix.OFFICIAL_PROGRAM_SOURCE.length}`);
console.log(`DIRECTLY CONFIRMED WITH PROVENANCE:               ${matrix.DIRECTLY_CONFIRMED.length}`);
console.log(`QUALIFIED / DISCRETIONARY (LOCAL/SEASONAL):       ${matrix.QUALIFIED_DISCRETIONARY.length}`);
console.log(`NEEDS REVERIFICATION:                            ${matrix.NEEDS_REVERIFICATION.length}`);
console.log(`QUARANTINED (NON-PUBLIC LEADS):                  ${matrix.QUARANTINED.length}`);
console.log("--------------------------------------------------\n");
