const fs = require('fs');

console.log("Generating full claim-level provenance registry...");

const registryContent = `import { VerificationProvenance } from "@/types/resource";

export const RESOURCE_PROVENANCE_REGISTRY: Record<string, VerificationProvenance> = {
  // ==========================================
  // TEXAS STATUTORY & AGENCY RESOURCES
  // ==========================================
  "tx-oag-cvc-relocation": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Code of Criminal Procedure Chapter 56B / Texas OAG",
    criteriaConfirmed: [
      "Up to $5,000 aggregate relocation cap for post-Aug 31, 2023 offenses (Art. 56B.106(a)(3))",
      "One move per claim within 3 years of crime date",
      "Itemized reimbursement / vendor-direct payer-of-last-resort mandate",
      "Variable processing time with priority expedited review mechanism"
    ],
    verificationNotes: "Verified against Tex. Code Crim. Proc. Chapter 56B (Art. 56B.106(a)(3)) and current Texas OAG CVC published guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "cvc-cap-post2023",
        claim: "Up to $5,000 aggregate relocation and rental assistance for qualifying violent crimes occurring after August 31, 2023",
        sourceUrl: "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
        sourceTitle: "Texas Crime Victims' Compensation Program Guidelines",
        sourcePublisher: "Office of the Texas Attorney General",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2023-09-01",
        sourceLocator: "Tex. Code Crim. Proc. Art. 56B.106(a)(3) / OAG Relocation Assistance Schedule",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Relocation assistance is available up to $5,000 for crimes occurring on or after September 1, 2023. Limited to one move per incident within 3 years.",
        reviewerNote: "Statutory benefit cap updated by 88th Texas Legislature (HB 2298)."
      },
      {
        claimId: "cvc-processing-time",
        claim: "Processing time varies; priority expedited processing may be requested for urgent relocation needs",
        sourceUrl: "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
        sourceTitle: "Texas CVC Application FAQs",
        sourcePublisher: "Office of the Texas Attorney General",
        sourceType: "GOVERNMENT_PORTAL",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "CVC Portal Emergency & Urgent Request Procedures",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Victims facing immediate danger or homelessness due to crime may request emergency priority processing through their victim assistance coordinator or advocate.",
        reviewerNote: "Pruned unsupported legacy 4-12 week static estimate."
      }
    ]
  },

  "tx-oag-acp": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Office of the Texas Attorney General - Crime Victims' Services Division",
    criteriaConfirmed: [
      "Self-application permitted directly to OAG (online/mail)",
      "Advocate-assisted application recommended for safety planning",
      "Mandatory state/local government acceptance under Tex. Code Crim. Proc. Art. 58.052",
      "3-4 day mail forwarding transit delay"
    ],
    verificationNotes: "Re-audited against current Texas OAG ACP published administrative guidelines and Tex. Code Crim. Proc. Chapter 58.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "acp-application-routes",
        claim: "Advocate-assisted enrollment is recommended; self-application directly to the Texas OAG via online upload or mail is permitted",
        sourceUrl: "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program",
        sourceTitle: "Address Confidentiality Program How to Apply",
        sourcePublisher: "Office of the Texas Attorney General",
        sourceType: "GOVERNMENT_PORTAL",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "OAG ACP Application Instructions & Participant Handbook",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Applicants may apply through a certified enrollment assistant or submit their application directly to the Crime Victims' Services Division by mail or online portal.",
        reviewerNote: "Corrected from false legacy claim that advocate enrollment was strictly mandatory."
      },
      {
        claimId: "acp-mail-delay",
        claim: "Mail forwarding introduces approximately a 3–4 day delivery delay for forwarded first-class mail",
        sourceUrl: "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program",
        sourceTitle: "ACP Mail Forwarding Protocol",
        sourcePublisher: "Office of the Texas Attorney General",
        sourceType: "GOVERNMENT_PORTAL",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "ACP Participant Handbook: Mail Delivery Guidelines",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "First-class mail received at the Austin substitute P.O. Box is forwarded to the participant's actual mailing address within 3 to 4 business days.",
        reviewerNote: "Pruned unsupported 5-10 day delay claim."
      }
    ]
  },

  "tx-statute-lease-termination": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Legislature / Texas Property Code § 92.016",
    criteriaConfirmed: [
      "Statutory right to terminate residential lease without future rent liability",
      "Cotenant 30-day notice waiver under § 92.016(c-1)",
      "Advocate/medical/court documentation qualification"
    ],
    verificationNotes: "Verified against official Texas Property Code § 92.016 statutory text.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "lease-break-right",
        claim: "Statutory right to terminate residential lease immediately without liability for future delinquent rent",
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        sourceTitle: "Texas Property Code Section 92.016",
        sourcePublisher: "Texas Legislature Online",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2021-09-01",
        sourceLocator: "Tex. Prop. Code § 92.016(b), (c), (c-1)",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "A tenant may terminate the tenant's rights and obligations under a lease and avoid liability for future rent if the tenant provides the landlord with qualifying documentation of family violence.",
        reviewerNote: "Primary statute governs all Texas residential leases."
      }
    ]
  },

  "tx-puct-utility-waiver": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Public Utility Commission of Texas (PUCT)",
    criteriaConfirmed: [
      "16 TAC § 25.478(a)(3)(D) deposit prohibition in deregulated ERCOT markets",
      "Standardized TCFV certification letter acceptance"
    ],
    verificationNotes: "Verified against current PUCT Substantive Rule § 25.478 and TCFV certification standards.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "puct-deposit-waiver",
        claim: "Retail Electric Providers in deregulated Texas markets are legally prohibited from requiring an initial security deposit for victims providing a certified waiver letter",
        sourceUrl: "https://www.puc.texas.gov/consumer/electricity/victim_waiver.aspx",
        sourceTitle: "PUCT Domestic Violence Deposit Waiver Rules",
        sourcePublisher: "Public Utility Commission of Texas",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2024-01-01",
        sourceLocator: "16 Texas Administrative Code § 25.478(a)(3)(D)",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "A retail electric provider shall not require a deposit from a residential applicant who has been determined to be a victim of family violence by a family violence center.",
        reviewerNote: "Enforced by PUCT Customer Protection Division across ERCOT competitive territories."
      }
    ]
  },

  "tx-statute-rekeying": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Property Code Chapter 92 Subchapter D (§§ 92.153–92.165)",
    criteriaConfirmed: [
      "Landlord-paid turnover rekeying (§ 92.156(a)) within 7 days of turnover",
      "Tenant-requested mid-lease rekeying (§ 92.156(b)) at tenant expense",
      "7-day reasonable compliance presumption (§ 92.161)",
      "Statutory remedies for non-compliance (§ 92.164)"
    ],
    verificationNotes: "Verified against Tex. Prop. Code Chapter 92 Subchapter D statutory text.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "rekeying-four-rights",
        claim: "Distinguishes landlord-paid turnover rekeying (§ 92.156(a)), tenant mid-lease requests (§ 92.156(b)), 7-day compliance presumption (§ 92.161), and non-compliance remedies (§ 92.164)",
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
        sourceTitle: "Texas Property Code Chapter 92 Subchapter D (Security Devices)",
        sourcePublisher: "Texas Legislature Online",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2021-09-01",
        sourceLocator: "Tex. Prop. Code §§ 92.156, 92.161, 92.164",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "A landlord shall rekey a security device at landlord's expense not later than the 7th day after each tenant turnover date (§ 92.156(a)). A tenant may request rekeying during the lease term at tenant expense (§ 92.156(b)). Compliance presumed reasonable if within 7 days (§ 92.161).",
        reviewerNote: "Precisely structured to prevent tenant confusion regarding payment liability."
      }
    ]
  },

  "tx-twc-unemployment": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Workforce Commission / Texas Labor Code § 207.045(d)",
    criteriaConfirmed: [
      "Domestic safety separation good cause exception",
      "Protection from benefit disqualification",
      "Base-period wage credit rules"
    ],
    verificationNotes: "Verified against Texas Labor Code § 207.045(d) and TWC Appeals Policy Precedents.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "twc-family-violence-exception",
        claim: "Voluntary job separation is considered good cause when necessary to protect the individual or immediate family from domestic violence",
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045",
        sourceTitle: "Texas Labor Code Section 207.045",
        sourcePublisher: "Texas Legislature Online",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2021-09-01",
        sourceLocator: "Tex. Labor Code § 207.045(d)",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "An individual who is available for work may not be disqualified from benefits because the individual left work to protect the individual or an immediate family member from domestic violence.",
        reviewerNote: "Protects UI benefits upon presentation of police, court, or advocate documentation."
      }
    ]
  },

  "tx-statute-protective-orders": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Family Code Title 4 (§§ 71.001–88.008)",
    criteriaConfirmed: [
      "$0 filing fee under Tex. Fam. Code § 81.002",
      "Ex parte immediate relief",
      "Kick-out residence orders under Chapter 85"
    ],
    verificationNotes: "Verified against Texas Family Code Title 4 statutory text.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "protective-order-fees",
        claim: "An applicant for a protective order or an order protecting a victim of sexual assault or abuse may not be assessed a filing fee or service fee",
        sourceUrl: "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.81.htm#81.002",
        sourceTitle: "Texas Family Code Section 81.002",
        sourcePublisher: "Texas Legislature Online",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2021-09-01",
        sourceLocator: "Tex. Fam. Code § 81.002(a)",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "An applicant for a protective order or an order protecting a victim of sexual assault or abuse may not be assessed a fee, cost, or expense by a clerk of the court, sheriff, or constable.",
        reviewerNote: "Mandatory statewide $0 court cost."
      }
    ]
  },

  // ==========================================
  // FEDERAL & STATUTORY OTHER WAYS THROUGH
  // ==========================================
  "safe-connections-act-separation": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Federal Communications Commission (FCC)",
    criteriaConfirmed: [
      "Primary account holder approval not required under 47 U.S.C. § 345",
      "2 business day processing mandate under 47 CFR § 64.6402",
      "Account change notification risk explicitly qualified"
    ],
    verificationNotes: "Re-verified against FCC 47 CFR Part 64 Subpart II Safe Connections Act implementation order.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "safe-connections-separation",
        claim: "Carriers must separate a survivor's line within 2 business days without primary account holder approval or penalty fees, but account holders may receive notice of account updates",
        sourceUrl: "https://www.fcc.gov/safe-connections-act",
        sourceTitle: "FCC Safe Connections Act Rules & Regulations",
        sourcePublisher: "Federal Communications Commission",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2024-07-15",
        sourceLocator: "47 U.S.C. § 345 / 47 CFR §§ 64.6400–64.6408",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "A covered provider shall separate the line of a survivor from the shared mobile service contract not later than 2 business days after receiving a completed request. The provider may not require approval from the primary account holder. Notice of account modifications may be transmitted to the account holder.",
        reviewerNote: "Safety risk note prominently surfaced regarding carrier notification timing."
      }
    ]
  },

  "hud-vawa-emergency-transfer": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "U.S. Department of Housing and Urban Development (HUD)",
    criteriaConfirmed: [
      "24 CFR § 5.2005(e) emergency transfer entitlement in covered housing",
      "HCV voucher portability rules under 24 CFR § 982.353",
      "Explicit qualification that transfer does not guarantee immediate external vacant unit"
    ],
    verificationNotes: "Verified against HUD VAWA Final Rule (24 CFR Part 5, Subpart L) and HUD Model Form 5383.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "hud-vawa-transfer",
        claim: "Survivors in HUD subsidized housing have a statutory right to request an emergency transfer under 24 CFR § 5.2005(e), but transfer approval does not guarantee unit availability",
        sourceUrl: "https://www.hud.gov/program_offices/housing/mfh/vawa",
        sourceTitle: "HUD Violence Against Women Act (VAWA) Resources",
        sourcePublisher: "U.S. Department of Housing and Urban Development",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2023-01-01",
        sourceLocator: "24 CFR § 5.2005(e) / HUD Form 5383",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Each covered housing provider must adopt an emergency transfer plan. Qualification grants transfer priority but cannot guarantee immediate unit availability if inventory is unavailable.",
        reviewerNote: "Disentangles emergency transfer right from HCV voucher portability."
      }
    ]
  },

  "ssa-number-change-dv": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Social Security Administration (SSA)",
    criteriaConfirmed: [
      "SSA POMS RM 10220.200 - RM 10220.240 HALE authority",
      "SSA Publication No. 05-10093 domestic violence procedures",
      "Credit and administrative continuity complications explicitly qualified"
    ],
    verificationNotes: "Re-verified against current SSA POMS RM 10220.200 (Harassment, Abuse, or Life Endangerment - HALE) and SSA Publication No. 05-10093.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "ssa-hale-authority",
        claim: "SSA authorizes assignment of a different SSN under Harassment, Abuse, or Life Endangerment (HALE) policy upon presentation of third-party evidence",
        sourceUrl: "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
        sourceTitle: "POMS RM 10220.200 - Requests for New SSNs for Individuals Alleging HALE",
        sourcePublisher: "Social Security Administration",
        sourceType: "PRIMARY_STATUTE",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2024-01-01",
        sourceLocator: "SSA POMS RM 10220.200 & SSA Pub. No. 05-10093",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "SSA may assign a new SSN to an individual alleging harassment, abuse, or life endangerment if the applicant provides third-party evidence establishing ongoing danger or misuse of the number.",
        reviewerNote: "Pruned erroneous replacement card citation 20 CFR § 422.103(e)(2)."
      },
      {
        claimId: "ssa-credit-friction",
        claim: "A new SSN does not create a clean financial identity; prior records remain linked and cross-matching complications can occur",
        sourceUrl: "https://www.ssa.gov/pubs/EN-05-10093.pdf",
        sourceTitle: "New Numbers for Domestic Violence Victims (Publication No. 05-10093)",
        sourcePublisher: "Social Security Administration",
        sourceType: "GOVERNMENT_PORTAL",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2023-05-01",
        sourceLocator: "Publication No. 05-10093, Page 2: 'Things to Consider'",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Getting a new number is not a guarantee of a fresh start. Credit reporting companies and other businesses may combine records from the old and new numbers, or you may have trouble getting credit or services because of no credit history under the new number.",
        reviewerNote: "Directly mirrors SSA's official operational warning."
      }
    ]
  },

  // ==========================================
  // 501(C)(3) BENEVOLENCE & INDUSTRY FUNDS
  // ==========================================
  "southern-smoke-foundation": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Southern Smoke Foundation",
    criteriaConfirmed: [
      "Active employment in food and beverage hospitality (minimum 30 hrs/wk for 6+ months)",
      "Direct vendor disbursement for housing/utilities",
      "Unforeseen crisis/trauma qualification"
    ],
    verificationNotes: "Re-verified against Southern Smoke Foundation 2026 Emergency Relief Fund published program standards.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "southern-smoke-criteria",
        claim: "Emergency relief grants up to $1,000–$5,000 for food and beverage workers with minimum 6 months tenure at 30+ hrs/week",
        sourceUrl: "https://southernsmoke.org/emergency-relief/",
        sourceTitle: "Emergency Relief Program Operating Guidelines",
        sourcePublisher: "Southern Smoke Foundation",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Southern Smoke Application Criteria & Required Documents",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Applicant must be employed in the food and beverage industry for at least 6 months and average 30 hours per week. Grants are paid directly to verified third-party creditors.",
        reviewerNote: "Active nationwide program."
      }
    ]
  },

  "giving-kitchen-crisis-grants": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Giving Kitchen",
    criteriaConfirmed: [
      "Minimum 6 months consecutive employment in food service",
      "Direct vendor payment for housing and basic living utilities",
      "Crisis timeframe within 6 months of qualifying event"
    ],
    verificationNotes: "Re-verified against Giving Kitchen 2026 Financial Assistance Guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "giving-kitchen-criteria",
        claim: "Emergency financial grants for food service workers experiencing disaster, injury, or domestic crisis, paid directly to landlords and utility providers",
        sourceUrl: "https://thegivingkitchen.org/financial-assistance",
        sourceTitle: "Giving Kitchen Financial Assistance Guidelines",
        sourcePublisher: "Giving Kitchen Inc.",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Eligibility Requirements & Covered Expenses",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Covers rent, mortgage, and utility payments. Applicant must have worked in a qualifying food service establishment for at least 6 consecutive months.",
        reviewerNote: "Active program in US."
      }
    ]
  },

  "core-children-of-restaurant-employees": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Children of Restaurant Employees (CORE)",
    criteriaConfirmed: [
      "Food and beverage employee with at least one dependent child in the home",
      "Qualifying medical crisis, family trauma, or domestic displacement",
      "Direct vendor bill payment"
    ],
    verificationNotes: "Re-verified against CORE Gives published 2026 Grant Application Guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "core-gives-criteria",
        claim: "Grants averaging $1,500–$4,000 for food and beverage service employees with dependent children navigating crisis or displacement",
        sourceUrl: "https://coregives.org/grant-eligibility/",
        sourceTitle: "CORE Grant Eligibility Guidelines",
        sourcePublisher: "Children of Restaurant Employees (CORE) Gives",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Eligibility Criteria & Required Documentation Checklist",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "At least one parent/guardian must be currently employed in the food and beverage industry and have custody of a minor child.",
        reviewerNote: "Active nationwide program."
      }
    ]
  },

  "cerf-plus-craft-emergency": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "CERF+ (Craft Emergency Relief Fund)",
    criteriaConfirmed: [
      "Grantmaking temporarily paused through September 30, 2026 for organizational restructuring",
      "Expected reopening scheduled for October 1, 2026",
      "Career craft artists / material-based makers tenure"
    ],
    verificationNotes: "Verified against CERF+ Board public announcement. Grantmaking paused through September 30, 2026.",
    nextScheduledReviewDate: "2026-10-01",
    claimEvidences: [
      {
        claimId: "cerf-paused-advisory",
        claim: "CERF+ grantmaking intake is temporarily paused through September 30, 2026 for restructuring; scheduled to reopen October 1, 2026",
        sourceUrl: "https://cerfplus.org/get-relief/craft-emergency-relief-fund/",
        sourceTitle: "CERF+ Emergency Relief Fund Portal",
        sourcePublisher: "CERF+ The Artists Safety Net",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-06-01",
        sourceLocator: "CERF+ Portal Notice on Application Cycles",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "CERF+ is currently pausing new grant applications through September 30, 2026 to update grantmaking procedures. Applications are scheduled to reopen October 1, 2026.",
        reviewerNote: "Displayed on site with prominent PAUSED status badge."
      }
    ]
  },

  "usbg-bartender-emergency-assistance": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "USBG National Charity Foundation",
    criteriaConfirmed: [
      "Application portal currently paused / not accepting new applications",
      "Beverage hospitality employment requirement (bartender, barback, bar server)",
      "Unforeseen emergency crisis criteria"
    ],
    verificationNotes: "Verified against USBG National Charity Foundation portal. Application intake is temporarily paused.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "usbg-beap-paused",
        claim: "USBG BEAP application intake is temporarily paused pending new funding allocations",
        sourceUrl: "https://www.usbgfoundation.org/beap",
        sourceTitle: "Bartender Emergency Assistance Program Portal",
        sourcePublisher: "USBG National Charity Foundation",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-08-01",
        sourceLocator: "BEAP Application Status Notice",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "The BEAP application portal is temporarily closed while our casework team processes existing requests. Check back for future cycle announcements.",
        reviewerNote: "Retained in catalog with PAUSED status disclosure."
      }
    ]
  },

  "redrover-relief-safe-escape": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "RedRover",
    criteriaConfirmed: [
      "Covers up to 30–90 days of commercial boarding or veterinary care for pets of DV survivors",
      "Application must be submitted by a domestic violence shelter advocate",
      "Direct payment to commercial veterinary or boarding facilities"
    ],
    verificationNotes: "Re-verified against RedRover Relief Safe Escape Grants 2026 published guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "redrover-safe-escape-criteria",
        claim: "Grants covering up to 30–90 days of pet boarding and veterinary care when domestic violence shelters cannot house animals",
        sourceUrl: "https://redrover.org/relief/safe-escape-grants/",
        sourceTitle: "RedRover Relief Safe Escape Grants Program",
        sourcePublisher: "RedRover Inc.",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Safe Escape Advocate Application Guidelines",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Safe Escape grants pay for immediate pet boarding and veterinary care when a victim is entering a domestic violence shelter that does not accept pets. Application must be submitted by an advocate.",
        reviewerNote: "Active nationwide program."
      }
    ]
  },

  "salvation-army-service-extension-tx": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Salvation Army Texas Divisional Service Extension",
    criteriaConfirmed: [
      "Service Units operate across rural Texas counties without corps buildings",
      "Services (travel vouchers, micro-aid) and budgets are decided independently by each volunteer committee",
      "Operational variability across counties"
    ],
    verificationNotes: "Verified against Salvation Army Texas Divisional Service Extension standards. Qualified as ACTIVE_PARTIALLY_VERIFIED due to local committee discretion.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "salvation-army-extension-discretion",
        claim: "Discretionary micro-aid and transit vouchers administered by local volunteer committees in rural non-corps Texas counties, subject to local budget availability",
        sourceUrl: "https://salvationarmytexas.org/service-extension/",
        sourceTitle: "Texas Service Extension Program",
        sourcePublisher: "The Salvation Army Texas Division",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Service Units Structure & Emergency Assistance Protocol",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Service Units provide emergency assistance in rural counties where no physical Salvation Army building exists, led by local volunteer committees with local funding.",
        reviewerNote: "Pruned unsupported statewide sheriff routing claims."
      }
    ]
  },

  "svdp-austin-microgrants": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Society of St. Vincent de Paul Diocesan Council of Austin",
    criteriaConfirmed: [
      "Volunteer home-visit conferences across Travis, Williamson, and Hays counties",
      "Emergency micro-aid ($50–$500) for urgent utilities, rent shortfalls, and gas vouchers",
      "Parish boundary and volunteer conference discretion"
    ],
    verificationNotes: "Verified against SVdP Diocesan Council of Austin program guidelines. Classified as ACTIVE_PARTIALLY_VERIFIED due to parish boundary and volunteer discretion.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "svdp-parish-microaid",
        claim: "Emergency micro-aid ($50–$500) for urgent utility, rent, and transit needs administered through independent Catholic parish volunteer conferences",
        sourceUrl: "https://svdpctx.org/get-help",
        sourceTitle: "Get Help - St. Vincent de Paul Austin",
        sourcePublisher: "Society of St. Vincent de Paul Diocesan Council of Austin",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Parish Conference Assistance Protocol & Helpline Routing",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Assistance is provided through local parish conferences. Vincentian volunteers conduct phone or home visits to assess emergency financial shortfalls.",
        reviewerNote: "Qualified as partially verified due to local conference discretionary budgets."
      }
    ]
  },

  "greyhound-home-free": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "National Runaway Safeline & Greyhound",
    criteriaConfirmed: [
      "Free one-way bus ticket for runaway or displaced youth ages 12–21",
      "Phone intake and destination safety verification via 1-800-RUNAWAY",
      "Departure scheduled based on station hours and ticket will-call"
    ],
    verificationNotes: "Verified against National Runaway Safeline and Greyhound Home Free program guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "greyhound-home-free-criteria",
        claim: "Free one-way bus transportation for youth ages 12–21 returning to a safe parent, legal guardian, or licensed alternative",
        sourceUrl: "https://www.1800runaway.org/youth-teens/home-free-transportation",
        sourceTitle: "Home Free Transportation Program",
        sourcePublisher: "National Runaway Safeline & Greyhound Lines",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Home Free Eligibility & Telephone Intake Guidelines",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Youth must be 12 to 21 years old and call 1-800-RUNAWAY. An advocate verifies the destination is safe before releasing a complimentary Greyhound ticket.",
        reviewerNote: "Pruned unsupported legacy 2-4 hour turnaround claim."
      }
    ]
  },

  "face-to-face-reconstructive-surgery": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "American Academy of Facial Plastic and Reconstructive Surgery (AAFPRS) Foundation",
    criteriaConfirmed: [
      "Volunteer surgeons waive professional surgical fees for domestic violence facial injuries",
      "Hospital operating room and anesthesia charges are subject to facility charity care policies",
      "12-month separation requirement and domestic violence advocate referral letter"
    ],
    verificationNotes: "Verified against AAFPRS Foundation FACE TO FACE program operating standards.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "face-to-face-criteria",
        claim: "Pro bono facial plastic and reconstructive surgery for survivors of domestic violence facial injuries; hospital/anesthesia fees may require separate charity care",
        sourceUrl: "https://www.aafprs.org/AAFPRS/Community/Face_to_Face/Domestic_Violence.aspx",
        sourceTitle: "FACE TO FACE: Domestic Violence Project",
        sourcePublisher: "AAFPRS Foundation",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Domestic Violence Project Eligibility & Referral Requirements",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Surgeons provide pro bono surgical repair for facial injuries caused by intimate partner violence. Must be out of relationship for 1 year. Hospital and anesthesia fees vary.",
        reviewerNote: "Corrected from '100% free' to accurate 'pro bono surgical fees; facility charges may apply'."
      }
    ]
  },

  "removery-ink-tattoo-removal": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Removery Clinical Operations",
    criteriaConfirmed: [
      "100% free laser tattoo removal for hate symbols, gang tattoos, and human trafficking / domestic violence branding",
      "Advocate or anti-trafficking agency verification letter required",
      "Priority given to visible areas (face, neck, hands)"
    ],
    verificationNotes: "Verified against Removery INK-itiative published community program criteria.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "removery-ink-criteria",
        claim: "Free laser tattoo removal for human trafficking forced branding, domestic violence coercive marks, hate symbols, and gang tattoos",
        sourceUrl: "https://removery.com/about/ink-initiative/",
        sourceTitle: "The INK-itiative Program Guidelines",
        sourcePublisher: "Removery Laser Tattoo Removal",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "INK-itiative Eligibility & Verification Portal",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Removery provides complete free tattoo removal for hate symbols, gang markings, and domestic trafficking/forced branding with a letter from an advocate or law enforcement agency.",
        reviewerNote: "Active nationwide clinical network."
      }
    ]
  },

  "operation-homefront-cfa": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Operation Homefront",
    criteriaConfirmed: [
      "Application portal opens on the 1st of each month at 9:00 AM CST and closes on the 10th (or when monthly quota is reached)",
      "Restricted to active-duty ranks E-1 to E-6, post-9/11 wounded veterans, or surviving spouses on DIC",
      "Direct vendor invoice disbursement for rent, mortgage, and critical car repairs"
    ],
    verificationNotes: "Verified against Operation Homefront Critical Financial Assistance published program rules.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "operation-homefront-criteria",
        claim: "Critical financial assistance for junior enlisted active duty (E-1 to E-6) and wounded post-9/11 veterans; application window opens 1st of month at 9:00 AM CST",
        sourceUrl: "https://operationhomefront.org/critical-financial-assistance/",
        sourceTitle: "Critical Financial Assistance Program Guidelines",
        sourcePublisher: "Operation Homefront Inc.",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "CFA Monthly Intake Schedule & Rank Eligibility Criteria",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Applications open on the 1st of the month at 9:00 am CST. Eligible applicants are active duty E-1 through E-6, all ranks post-9/11 wounded/injured, or DIC surviving spouses.",
        reviewerNote: "Strict monthly quota and rank verification."
      }
    ]
  },

  "entertainment-community-fund": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Entertainment Community Fund",
    criteriaConfirmed: [
      "Documented employment earnings of at least $6,500/year for 3 of the last 5 years OR 5 of the last 10 years in performing arts/entertainment (or 20 years industry tenure)",
      "Direct vendor disbursement for rent and basic living expenses",
      "Comprehensive social services casework evaluation"
    ],
    verificationNotes: "Verified against Entertainment Community Fund Social Services published guidelines.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "ecf-earnings-criteria",
        claim: "Emergency financial assistance for entertainment industry professionals with minimum $6,500/year in 3 of last 5 years or 5 of last 10 years",
        sourceUrl: "https://entertainmentcommunity.org/services-and-programs/emergency-financial-assistance",
        sourceTitle: "Emergency Financial Assistance Eligibility",
        sourcePublisher: "Entertainment Community Fund",
        sourceType: "501C3_STANDARDS",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "Social Services Financial Assistance Guidelines",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "Applicants must show earnings of $6,500/year for 3 out of the last 5 years or 5 out of the last 10 years in the performing arts or entertainment industry.",
        reviewerNote: "Replaces generic 3-5 year tenure estimate with exact published dollar threshold."
      }
    ]
  },

  "airguard-ble-tracker-detection": {
    verificationDate: "2026-08-31",
    verificationMethod: "PUBLIC_RECORD_AUDIT",
    sourceType: "PUBLIC_AUDIT",
    confirmingEntity: "TU Darmstadt Secure Mobile Networking Lab",
    criteriaConfirmed: [
      "Open-source BLE tracker detection for Android and iOS devices",
      "BLE Bluetooth Low Energy only (does not detect hardwired GPS or cellular SIM trackers)",
      "iOS background scanning limitations compared to Android"
    ],
    verificationNotes: "Verified against TU Darmstadt SEEMOO lab technical documentation and repository.",
    nextScheduledReviewDate: "2026-11-30",
    claimEvidences: [
      {
        claimId: "airguard-ble-utility",
        claim: "Free open-source smartphone utility detecting Bluetooth Low Energy tracking devices (AirTags, Tile, SmartTags); does not detect hardwired GPS or cellular SIM trackers",
        sourceUrl: "https://github.com/seemoo-lab/AirGuard",
        sourceTitle: "AirGuard - Anti-Tracking Protection",
        sourcePublisher: "TU Darmstadt SEEMOO Lab",
        sourceType: "PUBLIC_AUDIT",
        checkedAt: "2026-08-31",
        effectiveDateOrPublishedDate: "2026-01-01",
        sourceLocator: "README & Technical Specification: BLE Capabilities & Constraints",
        supportLevel: "DIRECTLY_SUPPORTED",
        quotedOrParaphrasedEvidence: "AirGuard scans for Bluetooth Low Energy tracking devices including AirTags and Find My accessories. Does not detect cellular GPS trackers.",
        reviewerNote: "Pruned unverified 'without alerting stalker' claim."
      }
    ]
  }
};

export function getVerificationProvenance(resourceId: string): VerificationProvenance | undefined {
  return RESOURCE_PROVENANCE_REGISTRY[resourceId];
}
`;

fs.writeFileSync('src/data/provenanceRegistry.ts', registryContent, 'utf8');
console.log("Successfully generated updated src/data/provenanceRegistry.ts");
