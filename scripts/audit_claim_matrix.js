const fs = require('fs');

const { ALL_RESOURCES, PUBLIC_RESOURCES } = require('../src/data/resources/index.ts');

console.log("Total resources:", ALL_RESOURCES.length);
console.log("Public resources:", PUBLIC_RESOURCES.length);

const matrix = {
  PRIMARY_STATUTE: [],
  OFFICIAL_PROGRAM_SOURCE: [],
  DIRECTLY_CONFIRMED: [],
  QUALIFIED_DISCRETIONARY: [],
  PAUSED: [],
  UNCONFIRMED_QUARANTINED: []
};

PUBLIC_RESOURCES.forEach(r => {
  if (r.verificationStatus === 'PAUSED' || r.verificationStatus === 'TEMPORARILY_CLOSED') {
    matrix.PAUSED.push(r);
  } else if (r.verificationStatus === 'ACTIVE_PARTIALLY_VERIFIED' || r.verificationStatus === 'CONDITIONAL') {
    matrix.QUALIFIED_DISCRETIONARY.push(r);
  } else if (r.isStatutoryRight) {
    matrix.PRIMARY_STATUTE.push(r);
  } else if (r.provenance?.verificationMethod === 'DIRECT_AGENCY_INTERVIEW') {
    matrix.DIRECTLY_CONFIRMED.push(r);
  } else {
    matrix.OFFICIAL_PROGRAM_SOURCE.push(r);
  }
});

console.log("\n--- AUDIT SUMMARY ---");
console.log("Primary Statute / Regulatory Mandate:", matrix.PRIMARY_STATUTE.length);
console.log("Current Official Program Source (501c3/Gov):", matrix.OFFICIAL_PROGRAM_SOURCE.length);
console.log("Directly Confirmed with Agency Provenance:", matrix.DIRECTLY_CONFIRMED.length);
console.log("Qualified / Discretionary (Local Variance):", matrix.QUALIFIED_DISCRETIONARY.length);
console.log("Paused / Suspended (With Advisory):", matrix.PAUSED.length);
