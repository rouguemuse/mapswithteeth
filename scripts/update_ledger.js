const fs = require('fs');

let ledgerContent = fs.readFileSync('src/data/masterReconciliationLedger.ts', 'utf8');

// List of converted lead IDs to mark as PUBLISHED and isLiveOnSite: true
const convertedIds = [
  'lead-greyhound-home-free',
  'lead-salvation-army-service-extension',
  'lead-usbg-charity-foundation',
  'lead-entertainment-community-fund',
  'lead-nurses-house',
  'lead-union-benevolent-funds',
  'lead-dod-transitional-comp',
  'lead-vfw-unmet-needs',
  'lead-operation-homefront',
  'lead-hud-vawa-emergency-transfer',
  'lead-ssa-number-change',
  'lead-freefrom-coerced-debt',
  'lead-airguard-ble-tracker-detection',
  'lead-uscis-vawa-self-petition',
  'lead-u-visa-t-visa',
  'lead-stronghearts-native-helpline',
  'lead-face-to-face-surgery',
  'lead-removery-ink-tattoo-removal',
  'lead-ministerial-alliance-funds'
];

convertedIds.forEach(id => {
  // Find item block
  const idRegex = new RegExp(`id:\\s*["']${id}["'][\\s\\S]*?authoritativeSource:[\\s\\S]*?},`, 'g');
  ledgerContent = ledgerContent.replace(idRegex, (match) => {
    let updated = match.replace(/status:\s*["']VERIFIED_NEEDS_ENTRY["']/, 'status: "PUBLISHED"');
    updated = updated.replace(/isLiveOnSite:\s*false/, 'isLiveOnSite: true');
    updated = updated.replace(/nextAction:\s*["'].*?["']/, 'nextAction: "Published live in Resource Graph. Maintain quarterly staleness review."');
    return updated;
  });
});

fs.writeFileSync('src/data/masterReconciliationLedger.ts', ledgerContent, 'utf8');
console.log('Successfully updated src/data/masterReconciliationLedger.ts');
