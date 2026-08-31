export interface TexasStatute {
  id: string;
  name: string;
  citation: string;
  shortSummary: string;
  remedyType: string;
  costToInvoke: string;
  documentationRequired: string[];
  timing: string;
  accessFriction: string[];
  statuteUrl: string;
}

export const TEXAS_STATUTES: TexasStatute[] = [
  {
    id: "tx-early-lease-break",
    name: "Early Lease Termination for Family Violence",
    citation: "Tex. Prop. Code § 92.016",
    shortSummary: "Allows tenants experiencing family violence to terminate residential leases early without liability for future rent.",
    remedyType: "STATUTORY_LEASE_TERMINATION",
    costToInvoke: "$0 statutory fee; tenant remains liable for delinquent unpaid rent accrued prior to vacating",
    documentationRequired: [
      "Temporary injunction or protective order under Tex. Fam. Code Title 4",
      "OR Magistrate's order for emergency protection under Tex. Code Crim. Proc. Art. 17.292",
      "OR Documentation of family violence from a licensed healthcare provider, mental health provider, or family violence center advocate meeting Tex. Prop. Code § 92.016(c-1)"
    ],
    timing: "Immediate upon providing statutory documentation and 30-day written notice of lease termination",
    accessFriction: [
      "WRITTEN_NOTICE_REQUIRED",
      "STATUTORY_DOCUMENTATION_REQUIRED",
      "LIABILITY_FOR_PAST_RENT"
    ],
    statuteUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016"
  },
  {
    id: "tx-rekeying-mandate",
    name: "Security Device & Lock Rekeying Mandate",
    citation: "Tex. Prop. Code § 92.164",
    shortSummary: "Requires landlords to rekey or replace residential security devices upon request by a domestic violence survivor.",
    remedyType: "STATUTORY_SECURITY_REKEYING",
    costToInvoke: "Landlord may charge tenant for rekeying unless the excluded party is not a tenant on the lease",
    documentationRequired: [
      "Court protective order excluding perpetrator from the residence or copy of criminal complaint"
    ],
    timing: "Landlord must perform rekeying within reasonable time (typically within 72 hours of written request)",
    accessFriction: [
      "WRITTEN_REQUEST_REQUIRED",
      "COURT_ORDER_OR_COMPLAINT_REQUIRED",
      "TENANT_REIMBURSEMENT_POSSIBLE"
    ],
    statuteUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.164"
  },
  {
    id: "tx-puct-electric-deposit-waiver",
    name: "PUCT Electric Utility Deposit Waiver",
    citation: "16 TAC § 25.478(a)(3)(D)",
    shortSummary: "Prohibits retail electric providers from requiring a security deposit from domestic violence victims.",
    remedyType: "ADMINISTRATIVE_FEE_WAIVER",
    costToInvoke: "$0 deposit required with qualifying advocate certification letter",
    documentationRequired: [
      "Standardized Texas Council on Family Violence (TCFV) / PUCT certification letter signed by an accredited family violence shelter director or advocate"
    ],
    timing: "Effective upon submission of certification letter to retail electric provider",
    accessFriction: [
      "ADVOCATE_CERTIFICATION_LETTER_REQUIRED",
      "APPLIES_ONLY_TO_COMPETITIVE_ELECTRIC_AREAS"
    ],
    statuteUrl: "https://www.puc.texas.gov/agency/rulesnlaws/subrules/electric/25.478/25.478.pdf"
  },
  {
    id: "tx-twc-unemployment-dv-exception",
    name: "TWC Unemployment Benefits Good Cause Exception for Family Violence",
    citation: "Tex. Lab. Code § 207.045(d)(1)",
    shortSummary: "Provides that leaving employment due to medically verified or documented family violence does not disqualify a worker from Texas unemployment benefits.",
    remedyType: "STATUTORY_BENEFIT_PROTECTION",
    costToInvoke: "$0 application fee",
    documentationRequired: [
      "Active or recently issued protective order",
      "OR Police report documenting domestic violence",
      "OR Medical records from treating physician",
      "OR Written statement from a licensed family violence counselor or shelter advocate"
    ],
    timing: "Standard TWC claim processing timeline (typically 3–4 weeks)",
    accessFriction: [
      "STANDARD_TWC_WAGE_CREDIT_REQUIREMENTS_APPLY",
      "MUST_BE_ABLE_AND_AVAILABLE_FOR_WORK"
    ],
    statuteUrl: "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045"
  }
];
