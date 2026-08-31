const fs = require('fs');

let ledger = fs.readFileSync('src/data/masterReconciliationLedger.ts', 'utf8');

// 1. USBG
ledger = ledger.replace(
  /id:\s*["']lead-usbg-charity-foundation["'][\s\S]*?nextAction:\s*["'].*?["']/g,
  `id: "lead-usbg-charity-foundation",
    leadName: "USBG Bartender Emergency Assistance Program (BEAP)",
    category: "EMPLOYMENT_INDUSTRY_RELIEF",
    categoryLabel: "Employment & Industry Relief",
    status: "PAUSED",
    isVerified: true,
    isLiveOnSite: true,
    whyNotOrNotes: "APPLICATIONS TEMPORARILY PAUSED: USBG National Charity Foundation BEAP application portal is currently closed pending new funding allocations. Retained on site with PAUSED status badge.",
    targetAudienceOrGeography: "Nationwide (Beverage / Bar Hospitality Workers)",
    authoritativeSource: "USBG National Charity Foundation (usbgfoundation.org/beap)",
    nextAction: "Monitor quarterly for application portal reopening."`
);

// 2. Ministerial Alliance
ledger = ledger.replace(
  /id:\s*["']lead-ministerial-alliance-funds["'][\s\S]*?nextAction:\s*["'].*?["']/g,
  `id: "lead-ministerial-alliance-funds",
    leadName: "Rural Central Texas Ministerial Alliance Discretionary Micro-Aid",
    category: "HYPERLOCAL_MICRO_AID",
    categoryLabel: "Hyperlocal Micro-Aid",
    status: "FIELD_REPORTED_UNCONFIRMED",
    isVerified: false,
    isLiveOnSite: false,
    whyNotOrNotes: "FIELD REPORTED / UNCONFIRMED: Discovered through local caseworker interviews, but informal pastor pool lacks unified corporate entity or published contact. Withdrawn from public directory until each specific town alliance (Bastrop, Lockhart, Elgin) is individually verified.",
    targetAudienceOrGeography: "Central Texas Rural Counties (Bastrop, Caldwell, Hays, East Travis)",
    authoritativeSource: "Field Caseworker & Pastoral Interviews",
    nextAction: "Directly contact and verify specific municipal ministerial alliances with dedicated point-of-contact phone numbers before re-publishing."`
);

// 3. Trade Unions
ledger = ledger.replace(
  /id:\s*["']lead-union-benevolent-funds["'][\s\S]*?nextAction:\s*["'].*?["']/g,
  `id: "lead-union-benevolent-funds",
    leadName: "Trade Union Emergency Hardship & Benevolent Funds (AFL-CIO / Building Trades)",
    category: "EMPLOYMENT_INDUSTRY_RELIEF",
    categoryLabel: "Employment & Industry Relief",
    status: "CONDITIONAL",
    isVerified: true,
    isLiveOnSite: false,
    whyNotOrNotes: "ACCESS INTELLIGENCE ONLY: Union benevolent funds are governed strictly by individual Local Union bylaws (IBEW, LiUNA, UBC, SMART). Converted from a monolithic public resource into intake discovery guidance.",
    targetAudienceOrGeography: "Nationwide / Texas Union Locals",
    authoritativeSource: "AFL-CIO Community Services Standards / Union Local Bylaws",
    nextAction: "Provide as contextual guidance within the intake engine rather than a standalone general resource card."`
);

// 4. Salvation Army Service Extension
ledger = ledger.replace(
  /id:\s*["']lead-salvation-army-service-extension["'][\s\S]*?nextAction:\s*["'].*?["']/g,
  `id: "lead-salvation-army-service-extension",
    leadName: "Salvation Army Texas Service Extension (Rural Non-Corps Counties)",
    category: "HYPERLOCAL_MICRO_AID",
    categoryLabel: "Hyperlocal Micro-Aid",
    status: "CONDITIONAL",
    isVerified: true,
    isLiveOnSite: true,
    whyNotOrNotes: "PARTIALLY VERIFIED / LOCAL VARIABILITY: Service Units operate across rural Texas counties without corps buildings. Services (travel vouchers, micro-aid) and budgets are decided independently by each volunteer committee.",
    targetAudienceOrGeography: "Texas Statewide (Rural & Suburban Counties)",
    authoritativeSource: "Salvation Army Texas Divisional Service Extension (salvationarmytexas.org/service-extension/)",
    nextAction: "Maintain county-level contact lookup guidance; flag local budget variability on card."`
);

fs.writeFileSync('src/data/masterReconciliationLedger.ts', ledger, 'utf8');
console.log('Successfully updated src/data/masterReconciliationLedger.ts');
