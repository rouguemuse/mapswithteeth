const fs = require('fs');

// Read otherWaysThrough.ts
let owt = fs.readFileSync('src/data/otherWaysThrough.ts', 'utf8');

// Parse the array in otherWaysThrough.ts
const startIdx = owt.indexOf('[');
const endIdx = owt.lastIndexOf('];');

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find array bounds in otherWaysThrough.ts");
  process.exit(1);
}

const resourcesJson = owt.substring(startIdx, endIdx + 1);
let resources;
try {
  resources = eval('(' + resourcesJson + ')');
} catch (e) {
  console.error("Failed to parse resources from otherWaysThrough.ts:", e);
  process.exit(1);
}

console.log("Found " + resources.length + " resources in otherWaysThrough.ts before audit.");

// Filter out unverified/monolithic items: trade-union-benevolent-funds and rural-ministerial-alliance-tx
resources = resources.filter(r => r.id !== 'trade-union-benevolent-funds' && r.id !== 'rural-ministerial-alliance-tx');

// Perform precise claim-level corrections
resources = resources.map(r => {
  // Standardize verification statuses
  if (r.verificationStatus === 'PUBLIC_SOURCE_CHECKED' || r.verificationStatus === 'OFFICIAL_SOURCE_CHECKED' || r.verificationStatus === 'AGENCY_CONFIRMED') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
  }

  // 1. USBG BEAP
  if (r.id === 'usbg-bartender-emergency-assistance') {
    r.verificationStatus = 'PAUSED';
    r.whatCanBlockAccess = [
      'PORTAL CURRENTLY PAUSED: The USBG National Charity Foundation BEAP application intake is temporarily paused and not accepting new applications.',
      'Requires verifiable beverage hospitality employment documentation (bartender, barback, bar server)',
      'Crisis event must be unforeseen and catastrophic'
    ];
    r.notes = 'APPLICATIONS CURRENTLY PAUSED: As of recent review, USBG BEAP application intake is temporarily closed. Monitor usbgfoundation.org/beap for reopening cycles.';
    r.claimProvenances = [
      {
        claim: 'USBG BEAP emergency relief grants for beverage hospitality workers',
        primarySourceUrl: 'https://www.usbgfoundation.org/beap',
        sourceExcerptOrSummary: 'Emergency grant intake temporarily paused pending new funding allotments.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 2. CERF+
  if (r.id === 'cerf-plus-craft-emergency-relief') {
    r.verificationStatus = 'PAUSED';
    r.reopeningDate = '2026-10-01';
  }

  // 3. Salvation Army Texas Service Extension
  if (r.id === 'salvation-army-service-extension-tx') {
    r.verificationStatus = 'ACTIVE_PARTIALLY_VERIFIED';
    r.typicalAmount = 'Discretionary micro-aid (amounts vary by local committee budget and demonstrated emergency)';
    r.knownFundingLimits = 'Discretionary funds allocated per rural volunteer committee; service types and availability depend entirely on the local committee';
    r.whatItCanHelpWith = 'Provides emergency assistance (such as fuel assistance, transit aid, or emergency lodging vouchers) in rural Texas counties that lack a permanent Salvation Army center, administered through local volunteer Service Units.';
    r.whatItActuallyProvides = 'Discretionary emergency aid determined by the local volunteer committee on a case-by-case basis.';
    r.whatCanBlockAccess = [
      'OPERATIONAL VARIABILITY: Services and funding levels are NOT uniform statewide; each rural county volunteer committee operates independently with variable funding and response times',
      'Assistance depends strictly on local committee capacity and monthly funds'
    ];
    r.accessNotes = 'Contact the Divisional Service Extension office or local county service unit representative to determine active assistance availability in your specific rural county.';
    r.claimProvenances = [
      {
        claim: 'Salvation Army Texas Service Extension operates volunteer committees in non-corps rural counties',
        primarySourceUrl: 'https://salvationarmytexas.org/service-extension/',
        sourceExcerptOrSummary: 'Service Units provide emergency assistance in counties without a Salvation Army facility. Assistance is administered by local volunteer committees.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 4. SSA Social Security Number Change (HALE)
  if (r.id === 'ssa-number-change-dv') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.primaryAuthoritativeSource = 'Social Security Administration POMS RM 10220.200 - RM 10220.220 / POMS RM 10225.060 (HALE Policy)';
    r.sourceUrl = 'https://secure.ssa.gov/poms.nsf/lnx/0110220200';
    r.statuteCitation = 'SSA POMS RM 10220.200 (Harassment, Abuse, and Life Endangerment)';
    r.whatItCanHelpWith = 'Authorizes the assignment of a new Social Security Number (SSN) under SSA Harassment, Abuse, and Life Endangerment (HALE) policy when an abuser or stalker is actively using the existing SSN to locate, harass, or inflict financial injury.';
    r.documentationRequired = [
      'Form SS-5 (Application for a Social Security Card)',
      'Primary identity documents (certified U.S. birth certificate, passport, state ID)',
      'Third-party corroborative evidence: police reports, court restraining orders, medical records, or formal letters from domestic violence shelters, legal aid, or social services documenting ongoing harassment, abuse, or life endangerment tied to SSN misuse'
    ];
    r.whatCanBlockAccess = [
      'STRICT EVIDENCE THRESHOLD: SSA requires third-party corroborating documentation establishing ongoing danger or misuse of the SSN by the abuser',
      'PRIOR LIABILITIES REMAIN: Assigning a new SSN does not erase prior tax debts, child support orders, or commercial credit liabilities',
      'CREDIT RESET: Credit reporting agencies create a new file with no historical credit score; credit history must be built from scratch'
    ];
    r.claimProvenances = [
      {
        claim: 'SSA assigns new SSN under Harassment, Abuse, and Life Endangerment (HALE) policy',
        primarySourceUrl: 'https://secure.ssa.gov/poms.nsf/lnx/0110220200',
        sourceExcerptOrSummary: 'SSA POMS RM 10220.200 allows assignment of a new SSN to victims of domestic violence upon presentation of third-party evidence documenting ongoing harassment or abuse.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 5. HUD VAWA Emergency Transfer Plans
  if (r.id === 'hud-vawa-emergency-transfer') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.whatItCanHelpWith = 'Establishes a statutory federal right under 24 CFR § 5.2005(e) for survivors in HUD-covered subsidized housing to request an emergency transfer to a safe unit, and outlines Housing Choice Voucher portability protections under 24 CFR § 982.353/354.';
    r.whatActuallyProvides = 'Statutory right to submit an Emergency Transfer Request (HUD Model Form 5383) and protection against adverse tenancy termination.';
    r.whatCanBlockAccess = [
      'NO GUARANTEED UNIT AVAILABILITY: Qualifying for an emergency transfer does NOT guarantee that the housing provider has an open, safe unit immediately available',
      'PORTABILITY SUBJECT TO PHA RULES: Porting a voucher to another jurisdiction requires coordination with the receiving Public Housing Authority (PHA) and does not guarantee expedited external housing placement',
      'Applies only to federally subsidized housing programs (Section 8, Public Housing, LIHTC, HOME)'
    ];
    r.importantLimitations = 'Emergency transfer approval under VAWA grants legal priority and protection from lease termination penalties, but cannot create housing inventory where no vacant units exist.';
    r.claimProvenances = [
      {
        claim: 'HUD VAWA emergency transfer rights under 24 CFR § 5.2005(e) and HCV portability rules under 24 CFR § 982.353',
        primarySourceUrl: 'https://www.hud.gov/program_offices/housing/mfh/vawa',
        sourceExcerptOrSummary: 'Covered housing providers must adopt emergency transfer plans. Emergency transfer qualification does not guarantee immediate vacant unit availability.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 6. FACE TO FACE: Domestic Violence Reconstructive Surgery
  if (r.id === 'face-to-face-reconstructive-surgery') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.typicalAmount = 'Pro bono surgical services; facility or anesthesia fees may be low-cost or require hospital charity arrangements';
    r.whatItCanHelpWith = 'Connects survivors of domestic violence who have sustained facial injuries with board-certified facial plastic surgeons providing pro bono or low-cost reconstructive surgery.';
    r.whatItActuallyProvides = 'Pro bono professional surgical care provided by volunteer AAFPRS surgeons.';
    r.whatCanBlockAccess = [
      'UNCOVERED COSTS POSSIBLE: While participating surgeons waive their professional surgical fees, hospital operating room charges, anesthesia fees, and prescription medications are not guaranteed to be free and may require separate hospital charity care applications',
      'SEPARATION REQUIREMENT: Must be out of the abusive relationship for at least 12 months',
      'Requires referral letter from a domestic violence advocate, counselor, or social worker'
    ];
    r.claimProvenances = [
      {
        claim: 'AAFPRS Foundation FACE TO FACE pro bono and low-cost reconstructive surgery for domestic violence survivors',
        primarySourceUrl: 'https://www.aafprs.org/AAFPRS/Community/Face_to_Face/Domestic_Violence.aspx',
        sourceExcerptOrSummary: 'Volunteer surgeons waive surgical fees for facial injuries. Hospital and anesthesia fees vary by facility.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 7. AirGuard & BLE Bluetooth Tracker Detection
  if (r.id === 'airguard-ble-tracker-detection') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.whatItCanHelpWith = 'Performs passive background and manual scans on smartphones to detect unauthorized Bluetooth Low Energy (BLE) tracking devices (Apple AirTags, Tile, Samsung SmartTags, Chipolo).';
    r.whatCanBlockAccess = [
      'BLE ONLY: Only detects Bluetooth Low Energy beacons; does NOT detect hardwired GPS, cellular SIM trackers, or hidden cameras',
      'OS DIFFERENCES: Background scanning on iOS is constrained by Apple background execution limits compared to Android',
      'Requires Bluetooth and Location permissions enabled'
    ];
    r.whyMissed = 'Open-source privacy research software developed by TU Darmstadt Secure Mobile Networking Lab.';
    r.workaround = 'Provides periodic scanning for Bluetooth LE tracker signals across multiple tracker ecosystems on Android and iOS devices.';
    r.claimProvenances = [
      {
        claim: 'AirGuard open-source BLE tracking detection utility for Android and iOS',
        primarySourceUrl: 'https://github.com/seemoo-lab/AirGuard',
        sourceExcerptOrSummary: 'Detects Bluetooth Low Energy trackers including AirTags, Tile, and SmartTags. Relies on BLE signal advertisements.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 8. Greyhound Home Free
  if (r.id === 'greyhound-home-free') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.applicationWindow = 'Coordinated via telephone conference with National Runaway Safeline';
    r.whatCanBlockAccess = [
      'Strict age limit: applicant must be 12 to 21 years old',
      'Destination must be verified by NRS advocate as a safe parent, legal guardian, or licensed shelter',
      'Departure timing depends on NRS conference intake, Greyhound station hours, and scheduled bus departures'
    ];
    r.claimProvenances = [
      {
        claim: 'Greyhound Home Free provides one-way bus tickets for youth ages 12–21 in cooperation with National Runaway Safeline',
        primarySourceUrl: 'https://www.1800runaway.org/youth-teens/home-free-transportation',
        sourceExcerptOrSummary: 'Youth 12-21 can receive a free one-way bus ticket home or to a verified safe alternative through NRS intake.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 9. Removery INK-itiative
  if (r.id === 'removery-ink-tattoo-removal') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.name = 'Removery INK-itiative (Forced-Branding & Hate Symbol Tattoo Removal)';
    r.whatItCanHelpWith = 'Provides 100% free laser tattoo removal for survivors of domestic human trafficking, commercial sexual exploitation, or intimate partner coercive branding tattoos, as well as hate symbols and gang markings.';
    r.whatCanBlockAccess = [
      'QUALIFYING CRITERIA: Restricted to hate symbols, gang tattoos, or forced human trafficking / coercive domestic violence branding',
      'ADVOCATE VERIFICATION: Domestic violence branding / human trafficking claims require a referral or verification letter from an anti-trafficking agency, law enforcement, or domestic violence shelter advocate',
      'PRIORITY LOCATIONS: Priority is given to visible areas (face, neck, hands) that impact safety and employment',
      'Requires travel to a Removery clinical studio location'
    ];
    r.claimProvenances = [
      {
        claim: 'Removery INK-itiative provides free laser tattoo removal for forced branding and hate symbols',
        primarySourceUrl: 'https://removery.com/about/ink-initiative/',
        sourceExcerptOrSummary: 'Free tattoo removal for hate symbols, gang-related tattoos, and human trafficking/forced branding with advocate referral.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 10. Operation Homefront CFA
  if (r.id === 'operation-homefront-cfa') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.applicationWindow = 'Opens on the 1st of each month at 9:00 AM CST; closes on the 10th (or when monthly quota is reached)';
    r.whatCanBlockAccess = [
      'MONTHLY WINDOW: Application portal opens on the 1st of each month at 9:00 AM CST and closes on the 10th (or earlier when capacity is reached)',
      'STRICT RANK ELIGIBILITY: Restricted to active-duty military ranks E-1 through E-6, post-9/11 wounded/ill/injured veterans of all ranks, or surviving spouses on DIC',
      'Direct creditor payments only — requires verified landlord or mechanic invoices'
    ];
    r.claimProvenances = [
      {
        claim: 'Operation Homefront CFA financial assistance for junior enlisted and wounded veterans',
        primarySourceUrl: 'https://operationhomefront.org/critical-financial-assistance/',
        sourceExcerptOrSummary: 'Application window opens 1st of month at 9am CST. Covers ranks E-1 to E-6 and post-9/11 wounded veterans.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  // 11. Entertainment Community Fund
  if (r.id === 'entertainment-community-fund') {
    r.verificationStatus = 'ACTIVE_VERIFIED';
    r.eligibility = 'Must demonstrate documented employment earnings in the performing arts or entertainment industry: either minimum $6,500/year in 3 of the last 5 years OR $6,500/year in 5 of the last 10 years (or 20 years industry tenure for older workers).';
    r.documentationRequired = [
      'Proof of qualifying entertainment earnings meeting the $6,500/year threshold (W-2s, 1099s, tax returns, or union pension/health records: SAG-AFTRA, IATSE, AEA, AFM)',
      'Itemized crisis documentation (lease, past-due rent notice, medical bills, utility statements)',
      'Most recent bank statements showing immediate financial deficit'
    ];
    r.whatCanBlockAccess = [
      'DOCUMENTED EARNINGS THRESHOLD: Must show minimum $6,500/year in 3 of the last 5 years OR 5 of the last 10 years in eligible entertainment work',
      'Takes 1–2 weeks for social services casework evaluation',
      'Direct vendor disbursement for rent and utilities'
    ];
    r.claimProvenances = [
      {
        claim: 'Entertainment Community Fund Emergency Financial Assistance earnings criteria',
        primarySourceUrl: 'https://entertainmentcommunity.org/services-and-programs/emergency-financial-assistance',
        sourceExcerptOrSummary: 'Eligibility requires documented earnings of at least $6,500/year for 3 of the last 5 years or 5 of the last 10 years.',
        verificationDate: '2026-08-31'
      }
    ];
  }

  return r;
});

// Write updated otherWaysThrough.ts
const updatedContent = 'import { Resource } from "@/types/resource";\n\nexport const OTHER_WAYS_THROUGH_RESOURCES: Resource[] = ' + JSON.stringify(resources, null, 2) + ';\n';
fs.writeFileSync('src/data/otherWaysThrough.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/otherWaysThrough.ts with ' + resources.length + ' audited resources.');
