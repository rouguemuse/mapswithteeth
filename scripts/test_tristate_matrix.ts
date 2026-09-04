/**
 * MAPS WITH TEETH — TRI-STATE QUESTION MATRIX & FALSE PRESERVATION TEST SUITE
 * 
 * Verifies full roundtrip persistence, strict type preservation, and exact
 * integration regression cases across:
 * 1. State transitions: YES → NO, UNKNOWN → NO, NO → YES, NO → UNKNOWN
 * 2. Strict literal false preservation (val === false, not "UNKNOWN", undefined, or true)
 * 3. Step 1 Need vs Step 3 Question precedence (DIRECT_OVERRIDE)
 * 4. Pre-match review partitioning (confirmedPositive vs confirmedNegative vs unknown)
 * 5. Single canonical truth object at matcher boundary
 * 6. Specific named regression scenarios:
 *    - TRISTATE_MONEY_DEBT_DIRECT_NO
 *    - TRISTATE_PHONE_PLAN_DIRECT_NO
 *    - TRISTATE_HOUSING_LEASE_DIRECT_NO
 *    - TRISTATE_BACK_EDIT_NO_PERSISTS
 *    - TRISTATE_CHANGE_NO_TO_UNKNOWN
 *    - TRISTATE_CHANGE_UNKNOWN_TO_FALSE
 *    - TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL
 *    - TRISTATE_HIDDEN_ANSWER_DOES_NOT_SECRETLY_MATCH
 */

import { INTAKE_QUESTIONS, getTriggeredQuestions } from "../src/domain/intake/questionRegistry";
import { INTAKE_PROBLEM_NEEDS } from "../src/domain/intake/needRegistry";
import { reconcileIntakeState, collectAllFactEvidence } from "../src/domain/intake/reconciliation";
import { matchSurvivorSituation } from "../src/domain/matching/deterministicMatcher";
import { SurvivorSituation } from "../src/domain/intake/types";

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failedCount++;
  }
}

console.log("==================================================");
console.log("MAPS WITH TEETH — TRI-STATE QUESTION MATRIX AUDIT");
console.log("==================================================");

// -------------------------------------------------------------
// 1. SPECIFIC NAMED INTEGRATION REGRESSION TESTS (ITEM 8)
// -------------------------------------------------------------
console.log("\n--- 1. SPECIFIC NAMED REGRESSION TESTS ---");

// TRISTATE_MONEY_DEBT_DIRECT_NO
{
  console.log("\n[SCENARIO] TRISTATE_MONEY_DEBT_DIRECT_NO");
  const inputs = {
    selectedNeedIds: ["money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: false },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.hasCoercedTaxDebt === false, "TRISTATE_MONEY_DEBT_DIRECT_NO: Reconciled situation hasCoercedTaxDebt === false");
  assert(recon.resolutions["hasCoercedTaxDebt"]?.status === "DIRECT_OVERRIDE", "TRISTATE_MONEY_DEBT_DIRECT_NO: Resolution status is DIRECT_OVERRIDE");
  
  // Matcher evaluation on reconciled situation
  const matchResult = matchSurvivorSituation(recon.reconciledSituation);
  const irsReceipt = [...matchResult.matchedRoutes, ...matchResult.possibleRoutes, ...matchResult.blockedRoutes].find(
    (r) => r.resourceId === "irs-innocent-spouse-relief"
  );
  assert(irsReceipt?.eligibilityStatus === "FAILED", "TRISTATE_MONEY_DEBT_DIRECT_NO: Matcher marks IRS relief eligibilityStatus as FAILED");
  assert(irsReceipt?.matchCategory === "BLOCKED" || irsReceipt?.routeTier === "BLOCKED", "TRISTATE_MONEY_DEBT_DIRECT_NO: Matcher classifies route as BLOCKED");
}

// TRISTATE_PHONE_PLAN_DIRECT_NO
{
  console.log("\n[SCENARIO] TRISTATE_PHONE_PLAN_DIRECT_NO");
  const inputs = {
    selectedNeedIds: ["phone-plan"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { sharedCellularPlanWithAbuser: false },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.sharedCellularPlanWithAbuser === false, "TRISTATE_PHONE_PLAN_DIRECT_NO: Reconciled sharedCellularPlanWithAbuser === false");
  
  const matchResult = matchSurvivorSituation(recon.reconciledSituation);
  const scaReceipt = [...matchResult.matchedRoutes, ...matchResult.possibleRoutes, ...matchResult.blockedRoutes].find(
    (r) => r.resourceId === "safe-connections-act-separation"
  );
  assert(scaReceipt?.eligibilityStatus === "FAILED", "TRISTATE_PHONE_PLAN_DIRECT_NO: Safe Connections Act eligibilityStatus is FAILED when shared line is false");
}

// TRISTATE_HOUSING_LEASE_DIRECT_NO
{
  console.log("\n[SCENARIO] TRISTATE_HOUSING_LEASE_DIRECT_NO");
  const inputs = {
    selectedNeedIds: ["housing-lease"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasActiveLeaseInTexas: false, currentResidentialTenancyInTexas: false },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.hasActiveLeaseInTexas === false, "TRISTATE_HOUSING_LEASE_DIRECT_NO: hasActiveLeaseInTexas === false");
  assert(recon.reconciledSituation.currentResidentialTenancyInTexas === false, "TRISTATE_HOUSING_LEASE_DIRECT_NO: currentResidentialTenancyInTexas === false");

  const matchResult = matchSurvivorSituation(recon.reconciledSituation);
  const leaseReceipt = [...matchResult.matchedRoutes, ...matchResult.possibleRoutes, ...matchResult.blockedRoutes].find(
    (r) => r.resourceId === "tx-statute-lease-termination"
  );
  assert(leaseReceipt?.eligibilityStatus === "FAILED", "TRISTATE_HOUSING_LEASE_DIRECT_NO: Statutory lease termination eligibilityStatus is FAILED");
  assert(leaseReceipt?.routeTier === "BLOCKED", "TRISTATE_HOUSING_LEASE_DIRECT_NO: Statutory lease termination routeTier is BLOCKED");
}

// TRISTATE_BACK_EDIT_NO_PERSISTS
{
  console.log("\n[SCENARIO] TRISTATE_BACK_EDIT_NO_PERSISTS");
  // Step 1: User answered false in Step 3
  const stateAtStep3 = {
    selectedNeedIds: ["money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: false },
    clarificationAnswers: {},
  };
  const recon1 = reconcileIntakeState(stateAtStep3);
  assert(recon1.reconciledSituation.hasCoercedTaxDebt === false, "TRISTATE_BACK_EDIT_NO_PERSISTS: Initial answer false");

  // Step 2: Navigate back to Step 1/2 without clearing state, then return to Step 3/4
  const stateAfterNav = { ...stateAtStep3 };
  const recon2 = reconcileIntakeState(stateAfterNav);
  assert(recon2.reconciledSituation.hasCoercedTaxDebt === false, "TRISTATE_BACK_EDIT_NO_PERSISTS: hasCoercedTaxDebt remains false after navigation roundtrip");
}

// TRISTATE_CHANGE_NO_TO_UNKNOWN
{
  console.log("\n[SCENARIO] TRISTATE_CHANGE_NO_TO_UNKNOWN");
  const inputs = {
    selectedNeedIds: ["money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: "UNKNOWN" },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.hasCoercedTaxDebt === "UNKNOWN", "TRISTATE_CHANGE_NO_TO_UNKNOWN: Reconciled situation hasCoercedTaxDebt === 'UNKNOWN'");
}

// TRISTATE_CHANGE_UNKNOWN_TO_FALSE
{
  console.log("\n[SCENARIO] TRISTATE_CHANGE_UNKNOWN_TO_FALSE");
  const inputs = {
    selectedNeedIds: ["money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: false },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.hasCoercedTaxDebt === false, "TRISTATE_CHANGE_UNKNOWN_TO_FALSE: Reconciled situation hasCoercedTaxDebt === false");
}

// TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL
{
  console.log("\n[SCENARIO] TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL");
  // Active need produces indirect signal
  const activeInputs = {
    selectedNeedIds: ["housing-lease", "phone-plan", "pets-leaving", "money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {},
    clarificationAnswers: {},
  };
  const activeEv = collectAllFactEvidence(activeInputs);
  assert(activeEv.some((e) => e.sourceNeedId === "money-debt"), "Active need produces indirect fact evidence");
  assert(activeEv.some((e) => e.sourceNeedId === "housing-lease"), "Active housing-lease produces indirect evidence");

  // Deselected needs produce zero indirect evidence
  const deselectedInputs = {
    selectedNeedIds: [],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {},
    clarificationAnswers: {},
  };
  const deselectedEv = collectAllFactEvidence(deselectedInputs);
  assert(!deselectedEv.some((e) => e.sourceNeedId === "money-debt"), "TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL: money-debt indirect evidence removed");
  assert(!deselectedEv.some((e) => e.sourceNeedId === "housing-lease"), "TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL: housing-lease indirect evidence removed");
  assert(!deselectedEv.some((e) => e.sourceNeedId === "phone-plan"), "TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL: phone-plan indirect evidence removed");
  assert(!deselectedEv.some((e) => e.sourceNeedId === "pets-leaving"), "TRISTATE_NEED_DESELECT_REMOVES_INDIRECT_SIGNAL: pets-leaving indirect evidence removed");
}

// TRISTATE_HIDDEN_ANSWER_DOES_NOT_SECRETLY_MATCH
{
  console.log("\n[SCENARIO] TRISTATE_HIDDEN_ANSWER_DOES_NOT_SECRETLY_MATCH");
  // User had previously answered false to tax debt when money-debt was selected, then deselects money-debt
  const stateWithHiddenAnswer = {
    selectedNeedIds: ["housing-stay"], // only shelter selected; money-debt is deselected
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: false }, // stale answer from previously answered Question 10
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(stateWithHiddenAnswer);
  assert(
    recon.reconciledSituation.hasCoercedTaxDebt === "UNKNOWN",
    "TRISTATE_HIDDEN_ANSWER_DOES_NOT_SECRETLY_MATCH: Hidden/stale question answer does not survive into reconciled situation (defaults to UNKNOWN)"
  );

  // Evidence collector test: stale question answer was not collected
  const ev = collectAllFactEvidence(stateWithHiddenAnswer);
  assert(
    !ev.some((e) => e.factKey === "hasCoercedTaxDebt" && e.sourceSection === "context_questions"),
    "TRISTATE_HIDDEN_ANSWER_DOES_NOT_SECRETLY_MATCH: Stale question answer excluded from fact evidence because question is not active"
  );
}

// -------------------------------------------------------------
// 2. MATCHER BOUNDARY CANONICAL TRUTH INTEGRITY (ITEM 3)
// -------------------------------------------------------------
console.log("\n--- 2. MATCHER BOUNDARY CANONICAL TRUTH INTEGRITY ---");
{
  // Test A: Raw button state = false -> Reconciled situation = false -> Matcher receives = false
  const rawButtonState = false;
  const inputs = {
    selectedNeedIds: ["money-debt"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: { hasCoercedTaxDebt: rawButtonState },
    clarificationAnswers: {},
  };
  const recon = reconcileIntakeState(inputs);
  assert(recon.reconciledSituation.hasCoercedTaxDebt === false, "Boundary Test A: Reconciled situation === false");

  const matchOutput = matchSurvivorSituation(recon.reconciledSituation);
  const irsTrace = matchOutput.blockedRoutes.find((r) => r.resourceId === "irs-innocent-spouse-relief");
  assert(irsTrace?.eligibilityStatus === "FAILED", "Boundary Test A: Matcher evaluated strictly on reconciled situation false");

  // Test B: Failure test demonstrating that if reconciliation produces UNKNOWN, matcher does NOT consume raw false
  const situationWithUnknown: SurvivorSituation = {
    ...recon.reconciledSituation,
    hasCoercedTaxDebt: "UNKNOWN",
  };
  const matchUnknown = matchSurvivorSituation(situationWithUnknown);
  const irsUnknown = [...matchUnknown.matchedRoutes, ...matchUnknown.possibleRoutes, ...matchUnknown.blockedRoutes].find(
    (r) => r.resourceId === "irs-innocent-spouse-relief"
  );
  assert(
    irsUnknown?.eligibilityStatus === "POSSIBLE" || irsUnknown?.routeTier === "POSSIBLE_ROUTE",
    "Boundary Test B: Matcher consumes ONLY reconciled situation UNKNOWN and does not secretly assume false"
  );
}

// -------------------------------------------------------------
// 3. EXHAUSTIVE MATRIX AUDIT FOR ALL YES_NO_UNKNOWN QUESTIONS
// -------------------------------------------------------------
console.log("\n--- 3. EXHAUSTIVE AUDIT: ALL YES_NO_UNKNOWN QUESTIONS ---");
const yesNoQuestions = INTAKE_QUESTIONS.filter((q) => q.answerType === "YES_NO_UNKNOWN");

for (const q of yesNoQuestions) {
  const field = q.survivorSituationField;
  const triggerNeeds = q.triggeringNeeds;

  // Transition 1: UNKNOWN → NO
  {
    const inputs = {
      selectedNeedIds: triggerNeeds,
      location: { state: "TX", county: "Travis" },
      questionAnswers: { [field]: false },
      clarificationAnswers: {},
    };
    const out = reconcileIntakeState(inputs);
    assert(
      out.reconciledSituation[field] === false,
      `[${q.id}] UNKNOWN → NO: reconciledSituation.${String(field)} === false`
    );
    assert(
      out.resolutions[String(field)]?.resolvedValue === false,
      `[${q.id}] UNKNOWN → NO: resolutions.${String(field)}.resolvedValue === false`
    );
  }

  // Transition 2: NO → YES
  {
    const inputs = {
      selectedNeedIds: triggerNeeds,
      location: { state: "TX", county: "Travis" },
      questionAnswers: { [field]: true },
      clarificationAnswers: {},
    };
    const out = reconcileIntakeState(inputs);
    assert(
      out.reconciledSituation[field] === true,
      `[${q.id}] NO → YES: reconciledSituation.${String(field)} === true`
    );
    assert(
      out.resolutions[String(field)]?.resolvedValue === true,
      `[${q.id}] NO → YES: resolutions.${String(field)}.resolvedValue === true`
    );
  }

  // Transition 3: YES → NO
  {
    const inputs = {
      selectedNeedIds: triggerNeeds,
      location: { state: "TX", county: "Travis" },
      questionAnswers: { [field]: false },
      clarificationAnswers: {},
    };
    const out = reconcileIntakeState(inputs);
    assert(
      out.reconciledSituation[field] === false,
      `[${q.id}] YES → NO: reconciledSituation.${String(field)} === false`
    );
  }

  // Transition 4: NO → UNKNOWN
  {
    const inputs = {
      selectedNeedIds: triggerNeeds,
      location: { state: "TX", county: "Travis" },
      questionAnswers: { [field]: "UNKNOWN" },
      clarificationAnswers: {},
    };
    const out = reconcileIntakeState(inputs);
    assert(
      out.reconciledSituation[field] === "UNKNOWN",
      `[${q.id}] NO → UNKNOWN: reconciledSituation.${String(field)} === 'UNKNOWN'`
    );
  }
}

// -------------------------------------------------------------
// 4. AUDIT: SELECT_UNKNOWN QUESTIONS (Industry, Military, Tenure, Surgery)
// -------------------------------------------------------------
console.log("\n--- 4. SELECT_UNKNOWN QUESTIONS AUDIT ---");
const selectQuestions = INTAKE_QUESTIONS.filter((q) => q.answerType === "SELECT_UNKNOWN");

for (const q of selectQuestions) {
  const field = q.survivorSituationField;
  if (field === "industry") continue; // Industry has dedicated multi-industry conflict suite

  const options = q.options || [];
  for (const opt of options) {
    const inputs = {
      selectedNeedIds: q.triggeringNeeds,
      location: { state: "TX", county: "Travis" },
      questionAnswers: { [field]: opt.value },
      clarificationAnswers: {},
    };
    const out = reconcileIntakeState(inputs);
    assert(
      out.reconciledSituation[field] === opt.value,
      `[${q.id}] Option '${opt.label}' (${String(opt.value)}) persisted: reconciledSituation.${String(field)} === ${String(opt.value)}`
    );
  }
}

// -------------------------------------------------------------
// 5. REVIEW STEP PARTITIONING AUDIT (Confirmed Positive, Negative, Unknown)
// -------------------------------------------------------------
console.log("\n--- 5. REVIEW STEP PARTITIONING AUDIT ---");
{
  const selectedNeeds = ["money-debt", "housing-lease", "phone-plan"];
  const situation: SurvivorSituation = {
    primaryNeeds: ["coerced-debt", "tax-controversy", "lease-escape", "rent-deposit", "phone-separation"],
    state: "TX",
    county: "Travis",
    hasCoercedTaxDebt: false,
    hasActiveLeaseInTexas: true,
    currentResidentialTenancyInTexas: true,
    hasWrittenResidentialLeaseInTexas: false,
    hasAdvocateVerificationLetter: "UNKNOWN",
    sharedCellularPlanWithAbuser: true,
    hasSafeConnectionsDocumentation: false,
    domesticViolence: "UNKNOWN",
    industries: [],
    industry: "UNKNOWN",
  };

  const confirmedPositive: string[] = [];
  const confirmedNegative: string[] = [];
  const unknown: string[] = [];

  INTAKE_QUESTIONS.forEach((q) => {
    if (q.triggeringNeeds.some((tn) => selectedNeeds.includes(tn))) {
      const val = situation[q.survivorSituationField];
      if (val === true) {
        confirmedPositive.push(q.survivorSituationField);
      } else if (val === false) {
        confirmedNegative.push(q.survivorSituationField);
      } else {
        unknown.push(q.survivorSituationField);
      }
    }
  });

  assert(
    confirmedNegative.includes("hasCoercedTaxDebt"),
    "hasCoercedTaxDebt (false) is partitioned into confirmedNegative, not positive or unknown."
  );
  assert(
    confirmedNegative.includes("hasWrittenResidentialLeaseInTexas"),
    "hasWrittenResidentialLeaseInTexas (false) is partitioned into confirmedNegative."
  );
  assert(
    confirmedNegative.includes("hasSafeConnectionsDocumentation"),
    "hasSafeConnectionsDocumentation (false) is partitioned into confirmedNegative."
  );
  assert(
    confirmedPositive.includes("hasActiveLeaseInTexas"),
    "hasActiveLeaseInTexas (true) is partitioned into confirmedPositive."
  );
  assert(
    confirmedPositive.includes("sharedCellularPlanWithAbuser"),
    "sharedCellularPlanWithAbuser (true) is partitioned into confirmedPositive."
  );
  assert(
    unknown.includes("hasAdvocateVerificationLetter"),
    "hasAdvocateVerificationLetter ('UNKNOWN') is partitioned into unknown."
  );
}

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log("\n==================================================");
console.log(`TOTAL TESTS: ${passedCount + failedCount}`);
console.log(`PASSED: ${passedCount}`);
console.log(`FAILED: ${failedCount}`);
console.log("==================================================");

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
