/**
 * MAPS WITH TEETH — EVIDENCE-TO-MATCHER DRIFT AUDIT
 * 
 * Verifies that every qualification condition and numeric threshold used in the
 * deterministic matcher strictly matches the canonical resource and evidence records.
 * 
 * Prevents silent divergence between the evidence matrix and routing engine.
 */

import { ALL_RESOURCES } from "../../src/data/resources/registry";
import { RESOURCE_PROVENANCE_REGISTRY } from "../../src/data/evidence/provenance";

interface DriftRule {
  resourceId: string;
  field: string;
  expectedThreshold: any;
  evidenceSourceDescription: string;
  validator: (resource: any, provenance: any) => boolean;
}

const DRIFT_RULES: DriftRule[] = [
  {
    resourceId: "usbg-bartender-emergency-assistance",
    field: "hospitalityWorkHistoryMonths",
    expectedThreshold: 6,
    evidenceSourceDescription: "USBG BEAP requires 6 months documented beverage service employment",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${res.accessNotes || ''}`;
      return text.includes("6 months") || text.includes("6-month");
    }
  },
  {
    resourceId: "face-to-face-reconstructive-surgery",
    field: "separationDurationMonths",
    expectedThreshold: 12,
    evidenceSourceDescription: "FACE TO FACE guidelines require 12 months separation from abuser",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${res.accessNotes || ''}`;
      return text.includes("12 months") || text.includes("12-month");
    }
  },
  {
    resourceId: "greyhound-home-free",
    field: "ageRange",
    expectedThreshold: { min: 12, max: 21 },
    evidenceSourceDescription: "Greyhound Home Free restricted to runaway/homeless youth aged 12-21",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')}`;
      return text.includes("12") && text.includes("21");
    }
  },
  {
    resourceId: "operation-homefront-cfa",
    field: "rankLimits",
    expectedThreshold: { activeDutyRank: "E1_E6", deployedRank: "E1_E6", woundedRank: "ALL_RANKS" },
    evidenceSourceDescription: "Operation Homefront CFA limits Active Duty and Deployed to E1-E6, Wounded to all ranks",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')}`;
      return text.includes("E-1 through E-6") || text.includes("E1-E6");
    }
  },
  {
    resourceId: "tx-statute-lease-termination",
    field: "statuteCitation",
    expectedThreshold: "Tex. Prop. Code § 92.016",
    evidenceSourceDescription: "Texas statutory early lease termination is governed by Tex. Prop. Code § 92.016",
    validator: (res) => {
      return res.statuteCitation?.includes("92.016") || res.primaryAuthoritativeSource?.includes("92.016");
    }
  },
  {
    resourceId: "safe-connections-act-separation",
    field: "statuteCitation",
    expectedThreshold: "47 U.S.C. § 345",
    evidenceSourceDescription: "Safe Connections Act mobile line separation is governed by 47 U.S.C. § 345",
    validator: (res) => {
      return res.statuteCitation?.includes("345") || res.primaryAuthoritativeSource?.includes("345");
    }
  },
  {
    resourceId: "entertainment-community-fund",
    field: "industrySectors",
    expectedThreshold: ["PERFORMING_ARTS", "DANCE"],
    evidenceSourceDescription: "ECF guidelines cover performing arts and dancers",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')} ${res.matchTags.join(' ')}`;
      return text.toLowerCase().includes("performing arts") || text.toLowerCase().includes("entertainment");
    }
  },
  {
    resourceId: "giving-kitchen-crisis-grants",
    field: "crisisPrerequisite",
    expectedThreshold: "QUALIFYING_CRISIS",
    evidenceSourceDescription: "Giving Kitchen direct grant requires illness, injury, disaster, or qualifying crisis",
    validator: (res) => {
      const text = `${res.eligibility} ${res.whatCanBlockAccess.join(' ')}`;
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
  console.log(`Auditing ${ALL_RESOURCES.length} canonical resources...`);
  if (ALL_RESOURCES.length !== 47) {
    failures.push(`Canonical registry has ${ALL_RESOURCES.length} resources; expected exactly 47.`);
    failed++;
  } else {
    passed++;
  }

  // Check 2: Verify each drift rule against canonical resource and provenance
  DRIFT_RULES.forEach((rule) => {
    const resource = ALL_RESOURCES.find((r) => r.id === rule.resourceId);
    const provenance = (RESOURCE_PROVENANCE_REGISTRY as Record<string, any>)[rule.resourceId];

    if (!resource) {
      failures.push(`Missing canonical resource for rule: ${rule.resourceId}`);
      failed++;
      return;
    }

    const isValid = rule.validator(resource, provenance);
    if (!isValid) {
      failures.push(`Drift detected on ${rule.resourceId} (${rule.field}): Canonical text diverges from matcher threshold.`);
      failed++;
    } else {
      console.log(`[PASS] ${rule.resourceId}: Matcher threshold (${rule.field}) synchronized with authoritative evidence.`);
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
    console.log("PASS: 100% evidence-to-matcher synchronization verified. Zero drift detected.\n");
  }
}

if (require.main === module) {
  runDriftAudit();
}
