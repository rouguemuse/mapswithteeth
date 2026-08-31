import { VerificationProvenance } from "@/types/resource";

export const RESOURCE_PROVENANCE_REGISTRY: Record<string, VerificationProvenance> = {
  "tx-oag-cvc-relocation": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Code of Criminal Procedure Chapter 56B / Texas OAG",
    criteriaConfirmed: [
      "Up to $5,000 relocation cap for offenses post-Aug 31, 2023",
      "Reimbursement payer-of-last-resort mandate",
      "Police report requirement with trauma exceptions"
    ],
    verificationNotes: "Verified against Texas Code of Criminal Procedure Chapter 56B and current Texas OAG CVC guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "tx-oag-acp": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Office of the Texas Attorney General - Crime Victims' Services Division",
    criteriaConfirmed: [
      "Self-application permitted via mail/portal",
      "Advocate assistance recommended but not mandatory",
      "Mandatory government/school acceptance under Tex. Code Crim. Proc. Art. 58.052"
    ],
    verificationNotes: "Re-audited against current Texas OAG ACP published administrative guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "tx-statute-lease-termination": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Legislature / Texas Property Code § 92.016",
    criteriaConfirmed: [
      "Statutory right to terminate residential lease without penalty",
      "Cotenant 30-day notice waiver under § 92.016(c-1)",
      "Advocate/medical documentation qualification"
    ],
    verificationNotes: "Verified against official Texas Property Code § 92.016 statutory text.",
    nextScheduledReviewDate: "2026-11-30"
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
    nextScheduledReviewDate: "2026-11-30"
  },
  "tx-statute-rekeying": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Texas Property Code Chapter 92 Subchapter D (§§ 92.153–92.165)",
    criteriaConfirmed: [
      "Mandatory security devices and keyless deadbolts",
      "Landlord installation duty",
      "7-day compliance timeline"
    ],
    verificationNotes: "Verified against Texas Property Code Subchapter D statutory text.",
    nextScheduledReviewDate: "2026-11-30"
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
    nextScheduledReviewDate: "2026-11-30"
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
    nextScheduledReviewDate: "2026-11-30"
  },
  "travis-county-family-support": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "GOVERNMENT_PORTAL",
    confirmingEntity: "Travis County Health and Human Services (HHS)",
    criteriaConfirmed: [
      "Emergency rent/utility assistance up to $1,800",
      "Income ≤ 200% FPL",
      "Strict Travis County residency"
    ],
    verificationNotes: "Verified against Travis County Health and Human Services 2026 published community center guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "safe-alliance-austin": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "The SAFE Alliance (Austin, TX)",
    confirmingRole: "Published 24/7 SAFEline & Emergency Shelter Standards",
    criteriaConfirmed: [
      "24/7 SAFEline operational status",
      "Campus emergency shelter intake criteria",
      "Travis County geographic prioritization"
    ],
    verificationNotes: "Re-verified against published SAFE Alliance 2026 operating guidelines and SAFEline intake criteria. Downgraded from AGENCY_CONFIRMED to PUBLIC_SOURCE_CHECKED pending direct staff interview provenance audit.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "hope-alliance-wilco": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Hope Alliance (Williamson County, TX)",
    confirmingRole: "Published 24/7 Crisis Hotline & Shelter Standards",
    criteriaConfirmed: [
      "24/7 crisis hotline operational status",
      "Williamson County emergency shelter eligibility",
      "Protective order court advocacy intake"
    ],
    verificationNotes: "Re-verified against published Hope Alliance 2026 emergency shelter standards. Downgraded from AGENCY_CONFIRMED to PUBLIC_SOURCE_CHECKED pending direct staff interview provenance audit.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "owbc-community-action-wilco": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Opportunities for Williamson & Burnet Counties (OWBC)",
    criteriaConfirmed: [
      "CEAP utility assistance up to $2,400",
      "Income ≤ 150% FPL",
      "Williamson & Burnet County residency"
    ],
    verificationNotes: "Verified against TDHCA CEAP and OWBC published 2026 program guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "the-caring-place-georgetown": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "The Caring Place (Georgetown, TX)",
    criteriaConfirmed: [
      "Direct rent and utility payments $200–$1,000",
      "Service area restricted to Northern Williamson County",
      "Itemized billing verification"
    ],
    verificationNotes: "Verified against The Caring Place 2026 published client assistance guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "avda-houston-legal-aid": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Aid to Victims of Domestic Abuse (AVDA Houston)",
    criteriaConfirmed: [
      "Free family court representation in Harris County",
      "Income ≤ 200% FPL",
      "Protective order and divorce intake"
    ],
    verificationNotes: "Verified against AVDA Houston legal advocacy standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "hawc-houston-crisis": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Houston Area Women's Center (HAWC)",
    criteriaConfirmed: [
      "24/7 hotline operational",
      "Residential safe shelter capacity rules",
      "Greater Houston geographic prioritization"
    ],
    verificationNotes: "Verified against HAWC 2026 published crisis and residential program guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "cca-central-texas": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Combined Community Action (CCA)",
    criteriaConfirmed: [
      "CEAP and CSBG emergency assistance",
      "Service area: Bastrop, Fayette, Colorado, Lee counties",
      "Income ≤ 150% FPL"
    ],
    verificationNotes: "Verified against CCA Central Texas 2026 published program standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "svdp-austin-microgrants": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Society of St. Vincent de Paul - Diocesan Council of Austin",
    criteriaConfirmed: [
      "Discretionary micro-aid $50–$500",
      "Parish boundary residency rule",
      "Home/virtual volunteer intake"
    ],
    verificationNotes: "Verified against SVdP Austin Council published helpline standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "southern-smoke-foundation": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Southern Smoke Foundation",
    criteriaConfirmed: [
      "Direct vendor emergency relief ($500–$3,000)",
      "6+ months @ 30+ hrs/wk food & beverage employment verification",
      "Crisis within past 6 months"
    ],
    verificationNotes: "Verified against Southern Smoke Foundation 2026 published emergency relief guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "giving-kitchen-crisis-grants": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Giving Kitchen",
    criteriaConfirmed: [
      "Direct financial grants prioritized in GA, TN, NC, SC",
      "Nationwide Stability Network case referral",
      "6+ months foodservice employment"
    ],
    verificationNotes: "Verified against Giving Kitchen 2026 published grantmaking guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "core-children-of-restaurant-employees": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "CORE Gives",
    criteriaConfirmed: [
      "Direct grants ($1,000–$4,000) for food/beverage workers with legal dependent children",
      "Qualifying crisis within 90 days",
      "One lifetime grant per family"
    ],
    verificationNotes: "Verified against CORE Gives 2026 published crisis relief guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "cerf-plus-craft-emergency": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "CERF+ (Craft Emergency Relief Fund)",
    criteriaConfirmed: [
      "Temporarily closed July 23, 2026 – Sept 30, 2026",
      "Planned reopening Oct 1, 2026",
      "Restricted to professional craft artists"
    ],
    verificationNotes: "Verified against CERF+ official July 23, 2026 program hiatus announcement.",
    nextScheduledReviewDate: "2026-10-01"
  },
  "musicares-emergency-financial": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "MusiCares / Recording Academy",
    criteriaConfirmed: [
      "Direct emergency grants ($500–$3,000)",
      "5+ years music employment or 6+ commercial releases",
      "Paid directly to creditors/vendors"
    ],
    verificationNotes: "Verified against MusiCares 2026 published assistance standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "authors-league-fund": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "The Authors League Fund",
    criteriaConfirmed: [
      "Interest-free emergency grants/loans ($1,000–$4,000)",
      "Professional published authors, dramatists, and journalists",
      "Rolling board review cycle"
    ],
    verificationNotes: "Verified against Authors League Fund published relief guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "redrover-relief-safe-escape": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "RedRover Relief",
    criteriaConfirmed: [
      "Up to 45 days paid pet boarding",
      "DV shelter advocate application required",
      "Direct payment to licensed boarding/vet vendors"
    ],
    verificationNotes: "Verified against RedRover Relief Safe Escape published guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "safe-havens-for-pets": {
    verificationDate: "2026-08-31",
    verificationMethod: "PUBLIC_RECORD_AUDIT",
    sourceType: "PUBLIC_AUDIT",
    confirmingEntity: "Animal Welfare Institute (AWI)",
    criteriaConfirmed: [
      "National directory of pet-accommodating DV shelters",
      "Individual shelter pet policy variation"
    ],
    verificationNotes: "Verified against Safe Havens for Pets national database.",
    nextScheduledReviewDate: "2026-11-30"
  },
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
    nextScheduledReviewDate: "2026-11-30"
  },
  "nnedv-techsafety-clinic": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "National Network to End Domestic Violence (NNEDV) Safety Net Project",
    criteriaConfirmed: [
      "Free digital safety and stalkerware assessment toolkits",
      "Educational guidance (no hardware purchasing)"
    ],
    verificationNotes: "Verified against NNEDV TechSafety published resources.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "irs-ip-pin": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "GOVERNMENT_PORTAL",
    confirmingEntity: "Internal Revenue Service (IRS)",
    criteriaConfirmed: [
      "6-digit confidential electronic filing lock",
      "Mandatory PIN on all future tax returns once enrolled"
    ],
    verificationNotes: "Verified against IRS Identity Protection PIN official guidelines and IRM standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "irs-innocent-spouse-relief": {
    verificationDate: "2026-08-31",
    verificationMethod: "PRIMARY_STATUTE",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Internal Revenue Service / 26 U.S.C. § 6015",
    criteriaConfirmed: [
      "IRC § 6015 equitable relief from coerced/fraudulent spousal tax debt",
      "Rev. Proc. 2013-34 domestic abuse factor",
      "Spouse notification statutory mandate"
    ],
    verificationNotes: "Verified against 26 U.S.C. § 6015 and IRS Publication 971.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "give-back-a-smile-dental": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "American Academy of Cosmetic Dentistry Charitable Foundation (AACDCF)",
    criteriaConfirmed: [
      "Pro bono dental restoration for front visible smile-zone teeth",
      "Must be separated from abuser for at least 1 continuous year",
      "Advocate/counselor verification required"
    ],
    verificationNotes: "Verified against Give Back a Smile official foundation standards.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "modest-needs-self-sufficiency": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_501C3_STANDARDS",
    sourceType: "501C3_STANDARDS",
    confirmingEntity: "Modest Needs Foundation",
    criteriaConfirmed: [
      "Direct vendor emergency grants ($500–$1,500)",
      "Employed or fixed disability/retirement income requirement",
      "Crowdfunded review cycle"
    ],
    verificationNotes: "Verified against Modest Needs 2026 published grantmaking guidelines.",
    nextScheduledReviewDate: "2026-11-30"
  },
  "ssa-number-change-dv": {
    verificationDate: "2026-08-31",
    verificationMethod: "OFFICIAL_GOVERNMENT_PORTAL",
    sourceType: "PRIMARY_STATUTE",
    confirmingEntity: "Social Security Administration (SSA)",
    criteriaConfirmed: [
      "20 CFR § 422.103(e)(2) domestic violence and harassment authority",
      "POMS RM 10225.065 & RM 10225.066 procedure requirements",
      "Credit and administrative continuity complications explicitly qualified"
    ],
    verificationNotes: "Re-verified against current SSA POMS RM 10225.065 (Domestic Violence) and SSA Publication No. 05-10093.",
    nextScheduledReviewDate: "2026-11-30"
  }
};

export function getVerificationProvenance(resourceId: string): VerificationProvenance | undefined {
  return RESOURCE_PROVENANCE_REGISTRY[resourceId];
}