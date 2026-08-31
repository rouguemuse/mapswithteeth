const fs = require('fs');

console.log("Starting comprehensive source-level evidence hardening pass...");

// =========================================================================
// 1. HARDEN texas.ts
// =========================================================================
let txContent = fs.readFileSync('src/data/resources/texas.ts', 'utf8');

// A. Correct Texas CVC Relocation
txContent = txContent.replace(
  /"id":\s*"tx-oag-cvc-relocation"[\s\S]*?"id":\s*"tx-oag-acp"/,
  `"id": "tx-oag-cvc-relocation",
    "name": "Texas Crime Victims' Compensation (CVC) Relocation Assistance",
    "organization": "Office of the Texas Attorney General (OAG)",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "VICTIM_COMPENSATION",
    "barrierCategories": [
      "rent-deposit",
      "money-now",
      "furniture-household",
      "medical-dental",
      "gas-travel",
      "utility-deposit",
      "pets"
    ],
    "matchTags": [
      "TEXAS",
      "CASH",
      "RENT",
      "RELOCATION",
      "PET_DEPOSIT",
      "UTILITY",
      "STORAGE",
      "MOVING",
      "MEDICAL",
      "COUNSELING",
      "POLICE_REPORT_REQUIRED"
    ],
    "whatItCanHelpWith": "Up to $5,000 aggregate relocation and rental assistance for qualifying violent crimes occurring after August 31, 2023 under Tex. Code Crim. Proc. Art. 56B.106(a)(3). Limited to one move per claim, with relocation occurring within 3 years of the crime date. Eligible expenses include rental deposits, rent, moving truck rental, commercial movers, storage units, utility connection/transfer fees, relocation travel, and qualifying temporary emergency lodging.",
    "whatItActuallyProvides": "Up to $5,000 aggregate relocation and rental assistance for qualifying crimes post-Aug 31, 2023. Payer of last resort; requires itemized documentation.",
    "assistanceShapes": [
      "REIMBURSEMENT",
      "VENDOR_PAYMENT",
      "RENT",
      "RENT_DEPOSIT",
      "PET_DEPOSIT",
      "STORAGE",
      "MOVING",
      "UTILITY_PAYMENT",
      "MEDICAL",
      "COUNSELING"
    ],
    "paymentMethod": "REIMBURSEMENT",
    "typicalAmount": "Up to $5,000 aggregate relocation assistance (post-Aug 31, 2023 offenses; based on verified documented expenses, not automatic flat grant) + up to $700/week lost wages",
    "knownFundingLimits": "Up to $5,000 aggregate relocation cap for post-Aug 31, 2023 offenses ($2,000 for pre-Sept 1, 2023 crimes). One move per incident within 3 years. Payer of last resort.",
    "eligibility": "Victims of qualifying violent crime or domestic violence in Texas who reported the incident to law enforcement (or qualify under statutory good-cause/minor exceptions in Art. 56B.054) and incurred expenses directly resulting from the crime.",
    "documentationRequired": [
      "Law enforcement incident report or formal report identifier",
      "Itemized lease agreement, utility receipts, storage invoices, or moving/truck receipts",
      "Employer wage verification form if claiming lost income"
    ],
    "referralRequirement": "None required (self-application online via OAG portal permitted; victim advocate assistance recommended)",
    "shelterConnectionRequired": false,
    "policeReportRequired": true,
    "incomeRestriction": "None (eligibility is based on victimization, not poverty threshold)",
    "employmentDependency": "None for relocation benefits (employment proof needed only for lost wage claims)",
    "applicationWindow": "Relocation must occur within 3 years of the crime date",
    "whatCanBlockAccess": [
      "Police report or law enforcement incident identifier required (statutory reporting exceptions in Art. 56B.054 apply for minors and good cause)",
      "Payer of last resort: collateral sources (such as insurance) must be applied first",
      "Direct vendor payment or claimant reimbursement only: not an upfront cash disbursement",
      "Processing time varies: Priority processing may be requested for qualifying urgent relocation needs"
    ],
    "accessFrictions": [
      "POLICE_REPORT_REQUIRED",
      "APPLICATION_REQUIRED",
      "WAITLIST_POSSIBLE"
    ],
    "whatToDoNext": "Apply online through the Texas OAG Crime Victims' Portal (texasattorneygeneral.gov) or meet with a hospital/shelter victim witness counselor. Request priority processing if relocation is imminent.",
    "howToApply": "Apply online through the Texas OAG Crime Victims' Portal or meet with a hospital/shelter victim witness counselor.",
    "sourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
    "primaryAuthoritativeSource": "Texas Code of Criminal Procedure Chapter 56B (Art. 56B.106(a)(3)) / Texas OAG CVC Guidelines",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "PRIMARY_STATUTE",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Texas Code of Criminal Procedure Chapter 56B / Texas OAG",
      "criteriaConfirmed": [
        "Up to $5,000 aggregate relocation cap for post-Aug 31, 2023 offenses (Art. 56B.106(a)(3))",
        "One move per claim limitation within 3 years of offense",
        "Itemized reimbursement / vendor-direct payer-of-last-resort mandate",
        "Variable processing time with priority expedited review mechanism"
      ],
      "verificationNotes": "Verified against Tex. Code Crim. Proc. Chapter 56B and current Texas OAG CVC published rules.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Code Crim. Proc. Art. 56B.106(a)(3)",
    "notes": "Aggregate relocation assistance cap is $5,000 for post-Aug 31, 2023 offenses ($2,000 for pre-Sept 1, 2023 crimes). Processing time varies; expedited priority review may be requested.",
    "importantLimitations": "Assistance is paid against itemized qualifying expenses up to the statutory cap. One move per claim within 3 years.",
    "claimProvenances": [
      {
        "claim": "Texas Crime Victims' Compensation (CVC) Relocation Assistance ($5,000 cap post-Aug 31, 2023)",
        "primarySourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
        "sourceExcerptOrSummary": "Tex. Code Crim. Proc. Art. 56B.106(a)(3) authorizes up to $5,000 for relocation expenses for crimes occurring after August 31, 2023.",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-oag-acp"`
);

// B. Correct Texas ACP Mail Delay
txContent = txContent.replace(
  /"Mail forwarding introduces 5–10 day delivery delay for forwarded standard mail"/g,
  '"Mail forwarding introduces approximately a 3–4 day delivery delay for forwarded first-class mail (per Texas OAG ACP guidelines)"'
);

// C. Correct Texas Rekeying
txContent = txContent.replace(
  /"id":\s*"tx-statute-rekeying"[\s\S]*?"id":\s*"tx-twc-unemployment"/,
  `"id": "tx-statute-rekeying",
    "name": "Residential Rekeying & Security Device Protections",
    "organization": "State of Texas / Justice of the Peace Courts",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "HOUSING",
    "barrierCategories": [
      "lease-escape",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "HOUSING",
      "REKEYING",
      "SECURITY_DEVICES",
      "STATUTORY_RIGHT"
    ],
    "whatItCanHelpWith": "Establishes specific residential security device and rekeying rights under Texas Property Code Chapter 92, Subchapter D (§§ 92.153–92.165): (1) Landlord-paid turnover rekeying (§ 92.156(a)) within 7 days of tenant turnover; (2) Tenant-requested rekeying during tenancy (§ 92.156(b)) generally at tenant expense; (3) Landlord duty to comply with tenant written request within a reasonable time, presumed to be within 7 days (§ 92.161); and (4) Statutory tenant remedies for non-compliance (§ 92.164).",
    "whatItActuallyProvides": "Statutory rights regarding required security devices (keyless deadbolts, pin locks), landlord turnover rekeying, and tenant-requested rekeying timelines under Texas Property Code Chapter 92.",
    "assistanceShapes": [
      "LEGAL_INFORMATION",
      "LEGAL_SERVICE"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Statutory landlord security compliance obligations",
    "knownFundingLimits": "Statutory rights: Landlord pays turnover rekeying between tenants (§ 92.156(a)); tenant pays requested rekeying during lease (§ 92.156(b)) unless landlord breached device duties.",
    "eligibility": "All residential tenants in Texas.",
    "documentationRequired": [
      "Written notice sent via certified mail, tracked delivery, or hand delivery requesting lock rekeying/installation"
    ],
    "referralRequirement": "None (self-executed via formal written notice to landlord)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Landlord presumed non-compliant if failing to act within 7 days of written notice (§ 92.161)",
    "whatCanBlockAccess": [
      "DISTINGUISH REKEYING RIGHTS: Landlord pays for mandatory turnover rekeying at start of lease (§ 92.156(a)); rekeying requested by tenant during an ongoing lease is generally at tenant expense (§ 92.156(b))",
      "7-DAY TIMELINE IS COMPLIANCE PRESUMPTION: § 92.161 establishes 7 days after written notice as a rebuttable presumption of reasonable compliance time",
      "REMEDIES REQUIRE FORMAL WRITTEN NOTICE: Tenant remedies under § 92.164 (unilateral lock change + rent deduction, or lease termination) require proper prior written notice and statutory cure period"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Send formal written notice to landlord requesting rekeying under Tex. Prop. Code § 92.156(b). If court protective order with kick-out is in place, attach copy demanding exclusion of abuser.",
    "howToApply": "Send formal written notice to landlord requesting rekeying under Tex. Prop. Code § 92.156(b).",
    "sourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
    "primaryAuthoritativeSource": "Texas Property Code Chapter 92, Subchapter D (§§ 92.153–92.165)",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Prop. Code §§ 92.153–92.165",
    "notes": "Distinguishes landlord-paid turnover rekeying (§ 92.156(a)) from tenant-requested mid-lease rekeying (§ 92.156(b)) and 7-day reasonable-time presumption (§ 92.161).",
    "claimProvenances": [
      {
        "claim": "Residential Rekeying & Security Device Protections (Tex. Prop. Code §§ 92.153–92.165)",
        "primarySourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
        "sourceExcerptOrSummary": "Tex. Prop. Code §§ 92.153–92.165 governs mandatory security devices, turnover rekeying, tenant mid-lease requests, and 7-day compliance presumption.",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-twc-unemployment"`
);

fs.writeFileSync('src/data/resources/texas.ts', txContent, 'utf8');
console.log("Successfully hardened src/data/resources/texas.ts");

// =========================================================================
// 2. HARDEN otherWaysThrough.ts (SSA SSN Authority)
// =========================================================================
let owtContent = fs.readFileSync('src/data/otherWaysThrough.ts', 'utf8');

// Replace all occurrences of 20 CFR § 422.103(e)(2) and RM 10225 in SSA SSN record
owtContent = owtContent.replace(
  /"id":\s*"ssa-number-change-dv"[\s\S]*?"id":\s*"freefrom-coerced-debt-toolkit"/,
  `"id": "ssa-number-change-dv",
    "name": "SSA Social Security Number Change for Domestic Violence Survivors",
    "organization": "Social Security Administration (SSA)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "identity-coerced-debt",
      "device-car-tracking"
    ],
    "matchTags": [
      "SSA",
      "SSN",
      "IDENTITY",
      "STALKING",
      "CREDIT",
      "PRIVACY",
      "LEGAL",
      "STATUTE"
    ],
    "whatItCanHelpWith": "Authorizes the assignment of a new Social Security Number (SSN) under SSA Harassment, Abuse, and Life Endangerment (HALE) policy when an abuser or stalker is actively using the existing SSN to locate, harass, or inflict financial injury.",
    "whatItActuallyProvides": "Assignment of a different Social Security Number by SSA for qualifying domestic violence or endangerment cases. (Note: Does not erase past records or guarantee a fresh credit identity).",
    "assistanceShapes": [
      "DOCUMENT_REPLACEMENT",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Free official federal identity reissuance",
    "knownFundingLimits": "Administrative federal remedy under SSA POMS RM 10220.200 - RM 10220.240 and SSA Publication No. 05-10093",
    "eligibility": "Must provide third-party evidence documenting ongoing domestic violence, harassment, abuse, or life endangerment linked to the abuser's misuse or knowledge of the existing SSN.",
    "documentationRequired": [
      "Form SS-5 (Application for a Social Security Card)",
      "Primary identity and citizenship documents (certified U.S. birth certificate, passport, state ID)",
      "Third-party corroborative evidence: police reports, court restraining orders, medical records, or formal letters from domestic violence shelters, legal aid, or social services documenting ongoing harassment, abuse, or life endangerment tied to SSN misuse"
    ],
    "referralRequirement": "In-person SSA Field Office interview with comprehensive documentation packet",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Ongoing administrative evaluation",
    "whatCanBlockAccess": [
      "STRICT EVIDENCE THRESHOLD: SSA requires third-party corroborating documentation establishing ongoing danger, harassment, or misuse of the SSN by the abuser (police reports, court restraining orders, medical records, or shelter advocate affidavits)",
      "PRIOR RECORDS & LIABILITIES PERSIST: A new SSN does not erase prior tax debts, child support obligations, or legal records associated with the former number; records may continue to exist under both numbers",
      "CREDIT & CONTINUITY COMPLICATIONS: A new SSN does not create a clean or fresh financial identity. Prior financial, medical, employment, and government records remain associated with the former identity/SSN, and cross-matching complications can occur with credit bureaus, banks, employers, and state agencies"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "IDENTITY_DOCUMENTS",
      "WALK_IN"
    ],
    "whatToDoNext": "Gather your primary identity documents and third-party evidence packet. Make an in-person appointment at your local Social Security Administration Field Office and request an SSN change under SSA POMS RM 10220.200 (HALE Policy).",
    "howToApply": "Schedule an appointment at a local SSA Field Office with Form SS-5 and evidence packet.",
    "sourceUrl": "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
    "primaryAuthoritativeSource": "Social Security Administration POMS RM 10220.200 - RM 10220.240 / SSA Publication No. 05-10093 (New Social Security Numbers for Domestic Violence Victims)",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "OFFICIAL_GOVERNMENT_PORTAL",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Social Security Administration (SSA)",
      "criteriaConfirmed": [
        "SSA POMS RM 10220.200 - RM 10220.240 HALE authority",
        "SSA Publication No. 05-10093 domestic violence procedures",
        "Credit and administrative continuity complications explicitly qualified"
      ],
      "verificationNotes": "Re-verified against current SSA POMS RM 10220.200 (Harassment, Abuse, or Life Endangerment - HALE) and SSA Publication No. 05-10093.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "SSA POMS RM 10220.200 (HALE Policy) / SSA Pub. No. 05-10093",
    "whyMissed": "SSA does not advertise this route publicly on general consumer pages; it is an internal administrative procedure governed by POMS RM 10220.200.",
    "workaround": "While SSA generally prohibits changing SSNs, SSA POMS RM 10220.200 explicitly authorizes assignment of a different Social Security Number when evidence proves an abuser or stalker is using the existing SSN to locate, harass, or endanger the survivor.",
    "accessNotes": "Schedule in-person appointment at local SSA Field Office. Bring Form SS-5, birth certificate/passport, and third-party corroborating documentation (protective orders, advocate letters, or medical records). Major Access Friction: A new SSN does not create a clean credit identity and can create severe administrative and record-linking complications.",
    "notes": "Governed by SSA POMS RM 10220.200 and SSA Publication No. 05-10093. An administrative remedy requiring extensive third-party documentation and creating significant credit and record-linking complications.",
    "claimProvenances": [
      {
        "claim": "SSA assigns new SSN under Harassment, Abuse, and Life Endangerment (HALE) policy",
        "primarySourceUrl": "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
        "sourceExcerptOrSummary": "SSA POMS RM 10220.200 allows assignment of a new SSN to victims of domestic violence upon presentation of third-party evidence documenting ongoing harassment, abuse, or endangerment.",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "freefrom-coerced-debt-toolkit"`
);

fs.writeFileSync('src/data/otherWaysThrough.ts', owtContent, 'utf8');
console.log("Successfully hardened src/data/otherWaysThrough.ts");

// =========================================================================
// 3. HARDEN texasData.ts
// =========================================================================
let txData = fs.readFileSync('src/data/texasData.ts', 'utf8');

// CVC Relocation in texasData
txData = txData.replace(
  /"id":\s*"tx-cvc"[\s\S]*?"id":\s*"tx-puct-utility"/,
  `"id": "tx-cvc",
    "title": "Crime Victims' Compensation (CVC) Relocation & Assistance",
    "citation": "Tex. Code Crim. Proc. Chapter 56B (Art. 56B.106(a)(3)) / OAG CVC Rules",
    "legalCode": "Texas Code of Criminal Procedure Chapter 56B",
    "category": "VICTIM_COMPENSATION",
    "summary": "State fund reimbursing and assisting victims of violent crime with relocation costs, rent, moving expenses, lost wages, medical/counseling costs, and residential security repairs.",
    "keyRights": [
      "UP TO $5,000 AGGREGATE RELOCATION BENEFIT: For qualifying violent crimes occurring AFTER August 31, 2023, CVC may cover up to $5,000 aggregate for qualifying relocation deposits, moving expenses, and rent (Art. 56B.106(a)(3)).",
      "ONE MOVE LIMITATION: Relocation assistance is limited to one move per claim/incident and must occur within 3 years of the crime date.",
      "COVERED EXPENSES: Eligible expenses include rent, security deposits, commercial movers, moving truck rental, storage units, utility connection/transfer fees, relocation travel, and qualifying temporary emergency lodging.",
      "LOST WAGES & MEDICAL: Up to $700/week in lost wages (statutory maximum) and up to $50,000 total medical/counseling benefit cap.",
    ],
    "nuancesAndExceptions": [
      "Payer of last resort: CVC only covers expenses not reimbursed by insurance, Medicaid, or other collateral sources.",
      "Police report requirement: Must be reported to law enforcement, with statutory exceptions under Art. 56B.054 for child victims, incapacity, or good cause shown.",
      "Processing time: Processing time varies. Priority processing may be requested for qualifying urgent relocation needs.",
      "Payment mechanics: Direct-to-vendor payment or claimant reimbursement depending on invoice timing.",
    ],
    "requiredDocumentation": [
      "Police report, law enforcement incident number, or qualifying statutory good-cause statement.",
      "Itemized lease agreement, utility connection invoices, moving receipts, or storage contract.",
      "Employer verification form for lost wage claims.",
      "Licensed mental health provider billing forms for counseling claims.",
    ],
    "procedureSteps": [
      "1. Apply online via the Texas OAG Crime Victims' Portal or through a hospital/shelter victim advocate.",
      "2. Submit police report or law enforcement incident identifier (or statutory exception documentation).",
      "3. Provide itemized relocation or medical/wage documentation.",
      "4. Request priority processing if immediate safety relocation is in progress.",
    ],
    "authoritativeSourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
    "administeringAgency": "Office of the Texas Attorney General (OAG)",
    "lastLegalAuditDate": "2026-08-31",
  },
  {
    "id": "tx-puct-utility"`
);

// ACP Mail Delay in texasData
txData = txData.replace(
  /"Mail forwarding introduces 5–10 day delivery delay for forwarded standard mail"/g,
  '"Mail forwarding introduces approximately a 3–4 day delivery delay for forwarded first-class mail (per Texas OAG ACP guidelines)"'
);

// Rekeying in texasData
txData = txData.replace(
  /"id":\s*"tx-rekeying-locks"[\s\S]*?"id":\s*"tx-twc-unemployment"/,
  `"id": "tx-rekeying-locks",
    "title": "Residential Rekeying & Security Devices",
    "citation": "Tex. Prop. Code Chapter 92, Subchapter D (§§ 92.153–92.165)",
    "legalCode": "Texas Property Code Chapter 92, Subchapter D",
    "category": "HOUSING",
    "summary": "Sets statutory requirements for landlord installation of door locks, keyless deadbolts, door viewers, turnover rekeying, and tenant mid-lease rekeying requests.",
    "keyRights": [
      "TURNOVER REKEYING (§ 92.156(a)): Landlord must rekey security devices at landlord expense not later than 7 days after tenant turnover (each new tenant move-in).",
      "TENANT-REQUESTED REKEYING (§ 92.156(b)): Tenant has the right to request lock rekeying during an ongoing lease, generally at tenant expense.",
      "7-DAY COMPLIANCE PRESUMPTION (§ 92.161): Landlord must comply with tenant written request within a reasonable time, presumed to be within 7 days of written notice.",
      "STATUTORY REMEDIES (§ 92.164): If landlord fails to rekey after written notice, tenant may rekey unilaterally and deduct cost from rent, terminate lease without penalty, or pursue civil statutory penalties.",
    ],
    "nuancesAndExceptions": [
      "Subchapter D distinguishes landlord-paid turnover rekeying (§ 92.156(a)) from tenant-requested mid-lease rekeying (§ 92.156(b)).",
      "Payment responsibility: Mid-lease rekeying is generally paid by the tenant unless the landlord breached statutory security device requirements.",
      "Notice formality: Exercising remedies under § 92.164 requires written notice delivered in compliance with Property Code rules.",
    ],
    "requiredDocumentation": [
      "Written notice sent via certified mail, tracked delivery, or hand delivery requesting lock rekeying/security replacement.",
    ],
    "procedureSteps": [
      "1. Send formal written request to landlord specifying the need for lock rekeying under § 92.156(b).",
      "2. If an emergency protective order with kick-out is in place, attach copy demanding exclusion of perpetrator.",
      "3. If landlord fails to comply within 7 days, tenant may exercise statutory unilateral rekey/repair or lease termination remedies under § 92.164.",
    ],
    "authoritativeSourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
    "administeringAgency": "Texas Justice of the Peace Courts / Municipal Housing Authorities",
    "lastLegalAuditDate": "2026-08-31",
  },
  {
    "id": "tx-twc-unemployment"`
);

fs.writeFileSync('src/data/texasData.ts', txData, 'utf8');
console.log("Successfully hardened src/data/texasData.ts");

// =========================================================================
// 4. HARDEN masterReconciliationLedger.ts
// =========================================================================
let ledger = fs.readFileSync('src/data/masterReconciliationLedger.ts', 'utf8');

// Replace SSA SSN citations in masterReconciliationLedger
ledger = ledger.replace(/20 CFR § 422\.103\(e\)\(2\)/g, 'SSA POMS RM 10220.200 / SSA Pub. No. 05-10093');
ledger = ledger.replace(/POMS RM 10225\.065[\s\S]*?RM 10225\.066/g, 'POMS RM 10220.200 - RM 10220.240');

fs.writeFileSync('src/data/masterReconciliationLedger.ts', ledger, 'utf8');
console.log("Successfully hardened src/data/masterReconciliationLedger.ts");
