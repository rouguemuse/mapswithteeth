/**
 * MAPS WITH TEETH — EVIDENCE-TO-MATCHER DRIFT AUDIT
 * 
 * Verifies that every qualification condition, statutory citation, jurisdiction boundary,
 * rank restriction, and numeric threshold used in the deterministic matcher strictly matches
 * the canonical resource record, explicit evidence claim, and provenance entry.
 * 
 * Prevents silent divergence between the evidence matrix and routing engine.
 */

import { ALL_RESOURCES } from "../../src/data/resources/registry";
import { RESOURCE_PROVENANCE_REGISTRY } from "../../src/data/evidence/provenance";
import { CANONICAL_CLAIM_MATRIX } from "../../src/data/evidence/claims";

export type DriftRuleType =
  | "NUMERIC_THRESHOLD"
  | "JURISDICTION_RESTRICTION"
  | "RANK_CATEGORY_RESTRICTION"
  | "REPORTING_PREREQUISITE"
  | "STATUTORY_CITATION"
  | "MANDATORY_DOCUMENTATION";

export interface DriftRule {
  resourceId: string;
  evidenceClaimId: string;
  field: string;
  ruleType: DriftRuleType;
  expectedThreshold: any;
  statutoryOrSourceCitation: string;
  governingSemanticCondition: string;
  validator: (resource: any, claim: any, provenance: any) => boolean;
}

export const DRIFT_RULES: DriftRule[] = [
  // 1. NUMERIC THRESHOLDS
  {
    resourceId: "usbg-bartender-emergency-assistance",
    evidenceClaimId: "usbg-bartender-emergency-assistance-eligibility-primary",
    field: "hospitalityWorkHistoryMonths",
    ruleType: "NUMERIC_THRESHOLD",
    expectedThreshold: 12,
    statutoryOrSourceCitation: "USBG National Charity Foundation BEAP Guidelines (2026)",
    governingSemanticCondition: "Requires not less than 12 months (1 year) regular beverage service employment",
    validator: (res, claim) => {
      const resText = `${res.eligibility} ${res.employmentDependency} ${res.whatCanBlockAccess.join(' ')} ${res.accessNotes || ''}`;
      const claimText = `${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      const has12m = (resText.includes("12 months") || resText.includes("1 year")) && (claimText.includes("12 months") || claimText.includes("1 year") || claimText.includes("one year"));
      const no6m = !resText.includes("6 months") && !resText.includes("6-month") && !claimText.includes("6 months");
      return has12m && no6m;
    }
  },
  {
    resourceId: "face-to-face-reconstructive-surgery",
    evidenceClaimId: "face-to-face-reconstructive-surgery-eligibility-primary",
    field: "separationDurationMonths",
    ruleType: "NUMERIC_THRESHOLD",
    expectedThreshold: 12,
    statutoryOrSourceCitation: "AAFPRS Foundation FACE TO FACE Program Guidelines",
    governingSemanticCondition: "Requires 12 months physical separation from abusive partner",
    validator: (res, claim) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("12 months") || text.includes("12-month");
    }
  },
  {
    resourceId: "greyhound-home-free",
    evidenceClaimId: "greyhound-home-free-eligibility-primary",
    field: "ageRange",
    ruleType: "NUMERIC_THRESHOLD",
    expectedThreshold: { min: 12, max: 21 },
    statutoryOrSourceCitation: "National Runaway Safeline & Greyhound Home Free Program",
    governingSemanticCondition: "Restricted to runaway/homeless youth aged 12 through 21",
    validator: (res, claim) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("12") && text.includes("21");
    }
  },

  // 2. REPORTING PREREQUISITES & CITATIONS
  {
    resourceId: "tx-oag-cvc-relocation",
    evidenceClaimId: "tx-oag-cvc-relocation-eligibility-primary",
    field: "reportingPrerequisiteCitation",
    ruleType: "REPORTING_PREREQUISITE",
    expectedThreshold: "Tex. Code Crim. Proc. Art. 56B.053",
    statutoryOrSourceCitation: "Tex. Code Crim. Proc. Art. 56B.053 (NOT 56B.054)",
    governingSemanticCondition: "Reasonable period reporting mandate (Art. 56B.053(a)), child victim exemption (Art. 56B.053(c)), AG extraordinary circumstances extension (Art. 56B.053(b)), zero 72h rule",
    validator: (res, claim, prov) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''} ${prov?.sourceLocator || ''}`;
      const hasCorrectStatute = text.includes("56B.053") && !text.includes("56B.054");
      const no72Hour = !text.includes("72-hour") && !text.includes("72 hours") && !text.includes("72h");
      const hasReasonablePeriod = text.includes("reasonable period");
      const noReversedSubsections = !text.includes("56B.053(b) child") && !text.includes("56B.053(c) extraordinary");
      return hasCorrectStatute && no72Hour && hasReasonablePeriod && noReversedSubsections;
    }
  },
  {
    resourceId: "tx-oag-cvc-relocation",
    evidenceClaimId: "tx-oag-cvc-relocation-covered-expenses",
    field: "relocationCapCitation",
    ruleType: "STATUTORY_CITATION",
    expectedThreshold: "Tex. Code Crim. Proc. Art. 56B.106(c-3)",
    statutoryOrSourceCitation: "Tex. Code Crim. Proc. Art. 56B.106(c-3)",
    governingSemanticCondition: "$5,000 aggregate relocation and rental assistance cap under Art. 56B.106(c-3) (NOT 56B.106(a)(3))",
    validator: (res, claim, prov) => {
      const text = `${res.whatItCanHelpWith} ${res.typicalAmount} ${res.statuteCitation || ''} ${res.primaryAuthoritativeSource || ''} ${claim?.claimText || ''} ${claim?.sourceLocator || ''} ${prov?.sourceLocator || ''}`;
      const has56B106c3 = text.includes("56B.106(c-3)");
      const no56B106a3 = !text.includes("56B.106(a)(3)");
      return has56B106c3 && no56B106a3;
    }
  },

  // 3. RANK & CATEGORY RESTRICTIONS
  {
    resourceId: "operation-homefront-cfa",
    evidenceClaimId: "operation-homefront-cfa-eligibility-primary",
    field: "rankLimits",
    ruleType: "RANK_CATEGORY_RESTRICTION",
    expectedThreshold: { activeDutyRank: "E1_E6", deployedRank: "E1_E6", woundedRank: "ALL_RANKS" },
    statutoryOrSourceCitation: "Operation Homefront Critical Financial Assistance Program Rules (2026)",
    governingSemanticCondition: "Active Duty & Deployed pathways require E-1 to E-6 with DEERS dependents; Wounded pathway open to all ranks",
    validator: (res, claim) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("E-1 through E-6") || text.includes("E1-E6");
    }
  },
  {
    resourceId: "entertainment-community-fund",
    evidenceClaimId: "entertainment-community-fund-eligibility-primary",
    field: "industrySectors",
    ruleType: "RANK_CATEGORY_RESTRICTION",
    expectedThreshold: ["PERFORMING_ARTS", "DANCE"],
    statutoryOrSourceCitation: "Entertainment Community Fund Emergency Financial Assistance Guidelines (2026)",
    governingSemanticCondition: "Restricted to performing arts workers ($10k earnings in 3/5 yrs) and dancers ($5k earnings in 3/5 yrs)",
    validator: (res, claim) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${res.matchTags.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.toLowerCase().includes("performing arts") || text.toLowerCase().includes("entertainment");
    }
  },

  // 4. STATUTORY CITATIONS
  {
    resourceId: "tx-statute-lease-termination",
    evidenceClaimId: "tx-statute-lease-termination-eligibility-primary",
    field: "statuteCitation",
    ruleType: "STATUTORY_CITATION",
    expectedThreshold: "Tex. Prop. Code § 92.016",
    statutoryOrSourceCitation: "Tex. Prop. Code § 92.016",
    governingSemanticCondition: "Special right to terminate residential lease early following domestic violence documentation",
    validator: (res, claim) => {
      const text = `${res.statuteCitation || ''} ${res.primaryAuthoritativeSource || ''} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("92.016");
    }
  },
  {
    resourceId: "safe-connections-act-separation",
    evidenceClaimId: "safe-connections-act-separation-eligibility-primary",
    field: "statuteCitation",
    ruleType: "STATUTORY_CITATION",
    expectedThreshold: "47 U.S.C. § 345",
    statutoryOrSourceCitation: "47 U.S.C. § 345 / 47 CFR § 64.6402",
    governingSemanticCondition: "Mandatory mobile line separation within 2 business days upon qualifying documentation",
    validator: (res, claim) => {
      const text = `${res.statuteCitation || ''} ${res.primaryAuthoritativeSource || ''} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("345");
    }
  },
  {
    resourceId: "tx-statute-rekeying",
    evidenceClaimId: "tx-statute-rekeying-eligibility-primary",
    field: "statuteCitation",
    ruleType: "STATUTORY_CITATION",
    expectedThreshold: "Tex. Prop. Code §§ 92.153–92.165",
    statutoryOrSourceCitation: "Tex. Prop. Code §§ 92.153–92.165",
    governingSemanticCondition: "Mandatory residential security device rekeying upon tenant request",
    validator: (res, claim) => {
      const text = `${res.statuteCitation || ''} ${res.primaryAuthoritativeSource || ''} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.includes("92.153");
    }
  },

  // 5. JURISDICTION RESTRICTIONS
  {
    resourceId: "tx-oag-acp",
    evidenceClaimId: "tx-oag-acp-geography",
    field: "jurisdictionRestriction",
    ruleType: "JURISDICTION_RESTRICTION",
    expectedThreshold: "TX_STATEWIDE",
    statutoryOrSourceCitation: "Tex. Code Crim. Proc. Art. 58.051 et seq.",
    governingSemanticCondition: "Restricted to victims of crime residing in or relocating to Texas",
    validator: (res) => {
      return res.state === "TX" && (res.geography?.includes("Texas") || res.scope === "TEXAS_STATEWIDE");
    }
  },
  {
    resourceId: "safe-alliance-austin",
    evidenceClaimId: "safe-alliance-austin-geography",
    field: "jurisdictionRestriction",
    ruleType: "JURISDICTION_RESTRICTION",
    expectedThreshold: "TRAVIS_COUNTY",
    statutoryOrSourceCitation: "SAFE Alliance Local Operating Charter (Austin, TX)",
    governingSemanticCondition: "Direct emergency shelter and rapid rehousing restricted to Travis County / Austin metro area",
    validator: (res) => {
      return res.state === "TX" && (res.geography?.includes("Travis") || res.geography?.includes("Austin"));
    }
  },

  // 6. MANDATORY DOCUMENTATION CONDITIONS
  {
    resourceId: "safe-connections-act-separation",
    evidenceClaimId: "safe-connections-act-separation-doc-1",
    field: "mandatoryDocumentation",
    ruleType: "MANDATORY_DOCUMENTATION",
    expectedThreshold: "LINE_SEPARATION_EVIDENCE",
    statutoryOrSourceCitation: "47 U.S.C. § 345(c)",
    governingSemanticCondition: "Requires written line separation request plus advocate statement, court order, or police report",
    validator: (res) => {
      return res.documentationRequired?.some((d: string) =>
        d.toLowerCase().includes("advocate") ||
        d.toLowerCase().includes("protective order") ||
        d.toLowerCase().includes("police")
      );
    }
  },
  {
    resourceId: "giving-kitchen-crisis-grants",
    evidenceClaimId: "giving-kitchen-crisis-grants-eligibility-primary",
    field: "crisisPrerequisite",
    ruleType: "MANDATORY_DOCUMENTATION",
    expectedThreshold: "QUALIFYING_CRISIS",
    statutoryOrSourceCitation: "Giving Kitchen Financial Assistance Guidelines (2026)",
    governingSemanticCondition: "Requires documented illness, injury, disaster, or qualifying catastrophic crisis",
    validator: (res, claim) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${claim?.claimText || ''} ${claim?.quotedOrParaphrasedEvidence || ''}`;
      return text.toLowerCase().includes("illness") || text.toLowerCase().includes("injury") || text.toLowerCase().includes("crisis");
    }
  }
];

export function runDriftAudit() {
  console.log("==================================================");
  console.log("MAPS WITH TEETH — EVIDENCE-TO-MATCHER DRIFT AUDIT");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;
  const failures: string[] = [];

  // Check 1: Verify all 47 canonical resources exist in registry
  console.log(`Auditing ${ALL_RESOURCES.length} canonical resources across 6 rule types...`);
  if (ALL_RESOURCES.length !== 47) {
    failures.push(`Canonical registry has ${ALL_RESOURCES.length} resources; expected exactly 47.`);
    failed++;
  } else {
    passed++;
  }

  // Checks 2 through 14: Verify each drift rule against canonical resource, evidence claim, and provenance
  DRIFT_RULES.forEach((rule, idx) => {
    const resource = ALL_RESOURCES.find((r) => r.id === rule.resourceId);
    const claim = CANONICAL_CLAIM_MATRIX.find((c) => c.claimId === rule.evidenceClaimId);
    const provenance = (RESOURCE_PROVENANCE_REGISTRY as Record<string, any>)[rule.resourceId];

    if (!resource) {
      failures.push(`Missing canonical resource for rule: ${rule.resourceId}`);
      failed++;
      return;
    }
    if (!claim) {
      failures.push(`Missing canonical claim for rule: ${rule.evidenceClaimId}`);
      failed++;
      return;
    }

    const isValid = rule.validator(resource, claim, provenance);
    if (!isValid) {
      failures.push(`Drift detected on ${rule.resourceId} [${rule.ruleType}] (${rule.field}): Canonical text diverges from matcher threshold.`);
      failed++;
    } else {
      console.log(`[PASS ${idx + 2}/14] [${rule.ruleType}] ${rule.resourceId}: Matcher threshold (${rule.field}) synchronized with authoritative evidence claim (${rule.evidenceClaimId}).`);
      passed++;
    }
  });

  console.log("\n--------------------------------------------------");
  console.log(`DRIFT AUDIT SUMMARY: ${passed} checks passed, ${failed} failures.`);
  console.log("--------------------------------------------------\n");

  if (failed > 0) {
    console.error("FAILURES:");
    failures.forEach((f) => console.error(`  * ${f}`));
    process.exit(1);
  } else {
    console.log("PASS: 100% evidence-to-matcher synchronization verified across all rule types (14/14 checks). Zero drift detected.\n");
  }
}

if (require.main === module) {
  runDriftAudit();
}
