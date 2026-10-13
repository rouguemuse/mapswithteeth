import assert from "node:assert";
import {
  policyEngagementRecords,
  oversightFailurePatterns,
  syntheticApplications
} from "../src/data/policy/engagementRegistry";

console.log("==================================================");
console.log("MAPS WITH TEETH — POLICY ENGAGEMENT & OVERSIGHT INTEGRITY QA");
console.log("==================================================");

// 1. Policy Engagement Records Verification
assert.strictEqual(
  policyEngagementRecords.length,
  5,
  "Must contain exactly the 5 authorized policy engagement records."
);
console.log("✅ [PASS] Registry contains exactly 5 engagement records.");

const pol001 = policyEngagementRecords.find((r) => r.id === "POL-001");
assert.ok(pol001, "POL-001 must exist.");
assert.strictEqual(pol001.status, "SUBMITTED", "POL-001 status must be SUBMITTED.");
assert.strictEqual(
  pol001.targetEntity,
  "Texas Sunset Advisory Commission",
  "POL-001 target must be Texas Sunset Advisory Commission."
);
assert.ok(
  !pol001.verifiedOutcome.includes("adopted") &&
    !pol001.verifiedOutcome.includes("endorsed"),
  "POL-001 must not claim adoption or endorsement."
);
console.log("✅ [PASS] POL-001 correctly documented as SUBMITTED with no false adoption claims.");

const ocaRecord = policyEngagementRecords.find((r) => r.id === "DFPS-OCA-ADM-01");
assert.ok(ocaRecord, "DFPS-OCA-ADM-01 must exist.");
assert.strictEqual(
  ocaRecord.status,
  "UNDER_REVIEW",
  "OCA filing status must be UNDER_REVIEW (confirmed Sept 3, 2026)."
);
assert.ok(
  ocaRecord.verifiedOutcome.includes("UNRESOLVED_OR_UNKNOWN"),
  "OCA substantive outcome must be explicitly marked UNRESOLVED_OR_UNKNOWN."
);
console.log("✅ [PASS] DFPS-OCA-ADM-01 correctly documented under review with unresolved outcome.");

// 2. Oversight Failure Patterns Verification
assert.strictEqual(
  oversightFailurePatterns.length,
  6,
  "Must contain exactly 6 oversight failure patterns."
);
console.log("✅ [PASS] Exactly 6 oversight breakdown mechanisms documented.");

oversightFailurePatterns.forEach((p) => {
  assert.ok(p.observedEvent.length > 20, `${p.id} must have observedEvent.`);
  assert.ok(p.administrativeResponse.length > 20, `${p.id} must have administrativeResponse.`);
  assert.ok(p.workingHypothesis.length > 20, `${p.id} must have workingHypothesis.`);
  assert.ok(p.proposedReform.length > 20, `${p.id} must have proposedReform.`);
  assert.ok(p.reviewTraceImplication.length > 20, `${p.id} must have reviewTraceImplication.`);
});
console.log("✅ [PASS] All 6 oversight patterns maintain the 4-tier analytical structure.");

// 3. Concrete Synthetic Applications Verification
assert.strictEqual(
  syntheticApplications.length,
  4,
  "Must contain exactly 4 concrete synthetic application scenarios."
);
console.log("✅ [PASS] Exactly 4 synthetic application scenarios present.");

syntheticApplications.forEach((app) => {
  assert.ok(
    app.withContinuityReceipt.participantView.length > 10,
    `${app.id} must define participantView.`
  );
  assert.ok(
    app.withContinuityReceipt.reviewTraceStatus.length > 10,
    `${app.id} must define reviewTraceStatus.`
  );
  assert.ok(
    app.withContinuityReceipt.decisionOwnerBound.length > 10,
    `${app.id} must define decisionOwnerBound.`
  );
});
console.log("✅ [PASS] All 4 synthetic applications define participant receipt and review trace views.");

// 4. Methodological Credibility Guards
policyEngagementRecords.forEach((r) => {
  const serialized = JSON.stringify(r);
  assert.ok(!serialized.includes("HIPAA compliant"), `${r.id} must not claim HIPAA compliance.`);
  assert.ok(!serialized.includes("CJIS certified"), `${r.id} must not claim CJIS certification.`);
  assert.ok(!serialized.includes("W3C approved"), `${r.id} must not claim W3C approval.`);
});
console.log("✅ [PASS] Zero unsubstantiated compliance/certification claims in engagement records.");

// 5. Domain Policy Engagement Registry Verification
import {
  TEXAS_POLICY_ENGAGEMENT_REGISTRY,
  OVERSIGHT_FAILURE_PATTERNS as DOMAIN_PATTERNS
} from "../src/domain/policy/engagementRegistry";
import { CONCRETE_APPLICATION_SCENARIOS as DOMAIN_SCENARIOS } from "../src/domain/policy/concreteApplications";

assert.ok(TEXAS_POLICY_ENGAGEMENT_REGISTRY.length >= 3, "Domain registry must contain at least 3 records.");
assert.ok(DOMAIN_PATTERNS.length >= 5, "Domain patterns must contain at least 5 mechanisms.");
assert.strictEqual(DOMAIN_SCENARIOS.length, 4, "Domain scenarios must contain exactly 4 concrete applications.");
console.log("✅ [PASS] Domain policy engagement registry and concrete applications verified.");

console.log("==================================================");
console.log("SUMMARY: ALL POLICY ENGAGEMENT INTEGRITY INVARIANTS PASSED");
console.log("==================================================");
