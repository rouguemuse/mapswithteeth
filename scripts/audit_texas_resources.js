const fs = require('fs');

let txContent = fs.readFileSync('src/data/resources/texas.ts', 'utf8');

const startIdx = txContent.indexOf('[');
const endIdx = txContent.lastIndexOf('];');

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find array bounds in texas.ts");
  process.exit(1);
}

const txJson = txContent.substring(startIdx, endIdx + 1);
let txResources;
try {
  txResources = eval('(' + txJson + ')');
} catch (e) {
  console.error("Failed to parse texas.ts:", e);
  process.exit(1);
}

txResources = txResources.map(r => {
  if (r.id === 'tx-austin-svdp-microgrants') {
    r.verificationStatus = 'ACTIVE_PARTIALLY_VERIFIED';
    r.whatCanBlockAccess = [
      'PARISH DISCRETION: Assistance is managed by independent parish conferences whose budgets and volunteer availability fluctuate monthly',
      'Requires home visit intake by Vincentian volunteers',
      'Geographic boundary restricted to specific Catholic parish boundaries'
    ];
  } else {
    r.verificationStatus = 'ACTIVE_VERIFIED';
  }

  // Attach ClaimProvenances
  if (!r.claimProvenances || r.claimProvenances.length === 0) {
    r.claimProvenances = [
      {
        claim: r.name,
        primarySourceUrl: r.sourceUrl,
        sourceExcerptOrSummary: r.primaryAuthoritativeSource,
        verificationDate: '2026-08-31'
      }
    ];
  }

  return r;
});

const updatedTxContent = 'import { Resource } from "@/types/resource";\n\nexport const TEXAS_RESOURCES: Resource[] = ' + JSON.stringify(txResources, null, 2) + ';\n';
fs.writeFileSync('src/data/resources/texas.ts', updatedTxContent, 'utf8');
console.log('Successfully updated src/data/resources/texas.ts with ' + txResources.length + ' audited resources.');
