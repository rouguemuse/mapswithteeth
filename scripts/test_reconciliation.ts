/**
 * MAPS WITH TEETH — DOMAIN RECONCILIATION TEST SUITE
 * Rigorous test coverage for cross-section intake conflict reconciliation.
 */

import { reconcileIntakeState } from "../src/domain/intake/reconciliation";
import { matchSurvivorSituation } from "../src/domain/matching/deterministicMatcher";

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
console.log("MAPS WITH TEETH — INTAKE RECONCILIATION SUITE");
console.log("==================================================");

// -------------------------------------------------------------
// 1. REPRODUCING THE EXACT BUG: Arts Need + General Industry
// -------------------------------------------------------------
console.log("\n--- 1. REPRODUCING BUG: Arts Need + General Industry ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-arts-entertainment"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      industry: "GENERAL",
    },
    clarificationAnswers: {},
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === true, "Conflict detected between arts need and general industry answer.");
  assert(output.activeConflicts.length === 1, "Exactly one active conflict flagged.");
  assert(output.activeConflicts[0].factKey === "industry", "Conflict is on industry fact.");
  assert(
    output.reconciledSituation.industry === "UNKNOWN",
    "Unresolved conflict defaults to UNKNOWN in reconciled situation to prevent false BLOCKED state."
  );

  // Matcher evaluation before clarification
  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const ecfRoute = [
    ...matchResult.matchedRoutes,
    ...matchResult.possibleRoutes,
    ...matchResult.blockedRoutes,
  ].find((r) => r.resourceId === "entertainment-community-fund");

  assert(
    ecfRoute?.eligibilityStatus === "POSSIBLE" || ecfRoute?.readinessStatus === "MISSING_INFORMATION",
    "Entertainment Community Fund is NOT prematurely marked BLOCKED prior to clarification."
  );
}

// -------------------------------------------------------------
// 2. CLARIFYING: User chooses "Arts / creative work"
// -------------------------------------------------------------
console.log("\n--- 2. CLARIFYING: User chooses 'Arts / creative work' ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-arts-entertainment"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      industry: "GENERAL",
    },
    clarificationAnswers: {
      industry: "PERFORMING_ARTS",
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Conflict resolved cleanly after clarification.");
  assert(output.reconciledSituation.industry === "PERFORMING_ARTS", "Reconciled industry is PERFORMING_ARTS.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const ecfRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "entertainment-community-fund");
  assert(ecfRoute !== undefined, "Entertainment Community Fund is evaluated and present in matched routes.");
}

// -------------------------------------------------------------
// 3. CLARIFYING: User chooses "General / other"
// -------------------------------------------------------------
console.log("\n--- 3. CLARIFYING: User chooses 'General / other' ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-arts-entertainment"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      industry: "GENERAL",
    },
    clarificationAnswers: {
      industry: "GENERAL",
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Conflict resolved cleanly.");
  assert(output.reconciledSituation.industry === "GENERAL", "Reconciled industry is GENERAL.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const ecfBlocked = matchResult.blockedRoutes.find((r) => r.resourceId === "entertainment-community-fund");
  assert(ecfBlocked !== undefined, "Entertainment Community Fund properly fails industry requirement when user confirmed GENERAL.");
}

// -------------------------------------------------------------
// 4. CLARIFYING: User chooses "Both apply"
// -------------------------------------------------------------
console.log("\n--- 4. CLARIFYING: User chooses 'Both apply' ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-arts-entertainment"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      industry: "GENERAL",
    },
    clarificationAnswers: {
      industry: "BOTH_ARTS_GENERAL",
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Conflict resolved cleanly.");
  assert(output.reconciledSituation.industry === "PERFORMING_ARTS", "Reconciled industry supports arts eligibility.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const ecfRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "entertainment-community-fund");
  assert(ecfRoute !== undefined, "Arts route evaluates as matched when both apply.");
}

// -------------------------------------------------------------
// 5. COMPATIBLE DUPLICATE ANSWERS: Housing Lease
// -------------------------------------------------------------
console.log("\n--- 5. COMPATIBLE DUPLICATE ANSWERS: Housing Lease ---");
{
  const rawInputs = {
    selectedNeedIds: ["housing-lease"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      hasActiveLeaseInTexas: true,
      currentResidentialTenancyInTexas: true,
      domesticViolence: true,
      hasAdvocateVerificationLetter: true,
    },
    clarificationAnswers: {},
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Zero conflicts on compatible answers.");
  assert(output.resolutions["hasActiveLeaseInTexas"]?.status === "COMPATIBLE_MERGED", "Lease fact status is COMPATIBLE_MERGED.");
  assert(output.reconciledSituation.hasActiveLeaseInTexas === true, "hasActiveLeaseInTexas confirmed true.");
}

// -------------------------------------------------------------
// 6. DIRECT ANSWER OVERRIDES WEAK INFERENCE
// -------------------------------------------------------------
console.log("\n--- 6. DIRECT ANSWER OVERRIDES WEAK INFERENCE ---");
{
  const rawInputs = {
    selectedNeedIds: ["transit-relocating"], // Weakly suggests recentRelocation
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      recentRelocation: false, // Direct answer says not relocating
    },
    clarificationAnswers: {},
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Zero conflicts when direct answer intentionally overrides inference.");
  assert(output.reconciledSituation.recentRelocation === false, "Direct answer wins: recentRelocation is false.");
  assert(output.resolutions["recentRelocation"]?.status === "DIRECT_OVERRIDE", "Status is DIRECT_OVERRIDE.");
}

// -------------------------------------------------------------
// 7. COMPATIBLE FOOD & BEVERAGE INDUSTRY
// -------------------------------------------------------------
console.log("\n--- 7. COMPATIBLE FOOD & BEVERAGE INDUSTRY ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-food-beverage"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      industry: "FOOD_AND_BEVERAGE",
      hospitalityWorkHistoryMonths: 12,
    },
    clarificationAnswers: {},
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Zero conflicts when food need and food industry answer align.");
  assert(output.reconciledSituation.industry === "FOOD_AND_BEVERAGE", "Industry confirmed FOOD_AND_BEVERAGE.");
  assert(output.resolutions["industry"]?.status === "COMPATIBLE_MERGED", "Industry status is COMPATIBLE_MERGED.");
}

// -------------------------------------------------------------
// 8. REAL MULTI-INDUSTRY: Restaurant Worker + Author
// -------------------------------------------------------------
console.log("\n--- 8. REAL MULTI-INDUSTRY: Restaurant Worker + Author ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-food-beverage", "money-immediate"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      hasQualifyingMedicalOrDisasterCrisis: true,
    },
    clarificationAnswers: {
      industry: ["FOOD_AND_BEVERAGE", "WRITING"],
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Zero conflicts on multi-industry resolution.");
  assert(output.reconciledSituation.industries?.includes("FOOD_AND_BEVERAGE") === true, "FOOD_AND_BEVERAGE present in industries array.");
  assert(output.reconciledSituation.industries?.includes("WRITING") === true, "WRITING present in industries array.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const gkRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "giving-kitchen-crisis-grants");
  const alfRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "authors-league-fund");

  assert(gkRoute !== undefined, "Giving Kitchen matched for food & beverage career.");
  assert(alfRoute !== undefined, "Authors League Fund matched concurrently for author career.");
}

// -------------------------------------------------------------
// 9. REAL MULTI-INDUSTRY: Performer + Bartender
// -------------------------------------------------------------
console.log("\n--- 9. REAL MULTI-INDUSTRY: Performer + Bartender ---");
{
  const rawInputs = {
    selectedNeedIds: ["work-arts-entertainment", "money-immediate"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      hasQualifyingMedicalOrDisasterCrisis: true,
    },
    clarificationAnswers: {
      industry: "BOTH_ARTS_FOOD",
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.hasBlockingConflicts === false, "Zero conflicts on arts+food composite resolution.");
  assert(output.reconciledSituation.industries?.includes("PERFORMING_ARTS") === true, "PERFORMING_ARTS present in industries array.");
  assert(output.reconciledSituation.industries?.includes("FOOD_AND_BEVERAGE") === true, "FOOD_AND_BEVERAGE present in industries array.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const ecfRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "entertainment-community-fund");
  const gkRoute = matchResult.matchedRoutes.find((r) => r.resourceId === "giving-kitchen-crisis-grants");

  assert(ecfRoute !== undefined, "Entertainment Community Fund matched for performing arts.");
  assert(gkRoute !== undefined, "Giving Kitchen matched concurrently for food & beverage.");
}

// -------------------------------------------------------------
// 10. TEXAS GEOGRAPHY WITHOUT TENANCY BOUNDARY
// -------------------------------------------------------------
console.log("\n--- 10. TEXAS GEOGRAPHY WITHOUT TENANCY BOUNDARY ---");
{
  const rawInputs = {
    selectedNeedIds: ["money-immediate"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {},
    clarificationAnswers: {},
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.reconciledSituation.state === "TX", "State is confirmed TX.");
  assert(output.reconciledSituation.county === "Travis", "County is confirmed Travis.");
  assert(
    output.reconciledSituation.currentResidentialTenancyInTexas === "UNKNOWN",
    "Texas location alone does NOT imply residential tenancy; tenancy remains UNKNOWN."
  );
  assert(
    output.reconciledSituation.hasActiveLeaseInTexas === "UNKNOWN",
    "Texas location alone does NOT imply an active lease; lease remains UNKNOWN."
  );
}

// -------------------------------------------------------------
// 11. EXPLICIT TENANCY FALSE OVERRIDES LOCATION
// -------------------------------------------------------------
console.log("\n--- 11. EXPLICIT TENANCY FALSE OVERRIDES LOCATION ---");
{
  const rawInputs = {
    selectedNeedIds: ["housing-lease"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      currentResidentialTenancyInTexas: false,
      hasActiveLeaseInTexas: false,
    },
    clarificationAnswers: {
      hasActiveLeaseInTexas: false,
      currentResidentialTenancyInTexas: false,
    },
  };

  const output = reconcileIntakeState(rawInputs);

  assert(output.reconciledSituation.state === "TX", "State is TX.");
  assert(output.reconciledSituation.currentResidentialTenancyInTexas === false, "Tenancy is explicitly false after clarification.");
  assert(output.reconciledSituation.hasActiveLeaseInTexas === false, "Active lease is explicitly false after clarification.");

  const matchResult = matchSurvivorSituation(output.reconciledSituation);
  const tx92Blocked = matchResult.blockedRoutes.find((r) => r.resourceId === "tx-statute-lease-termination");
  assert(tx92Blocked !== undefined, "Texas § 92.016 (tx-statute-lease-termination) is BLOCKED when tenancy is confirmed false.");
}

// -------------------------------------------------------------
// 12. DIRECT OCCUPATIONAL ASSERTIONS VS INDIRECT PROBLEM NEEDS
// -------------------------------------------------------------
console.log("\n--- 12. DIRECT OCCUPATIONAL ASSERTIONS VS INDIRECT PROBLEM NEEDS ---");
{
  const { collectAllFactEvidence } = require("../src/domain/intake/reconciliation/evidenceCollector");

  const directOccupationalNeeds = [
    "work-arts-entertainment",
    "work-food-beverage",
    "work-military",
  ];

  const indirectProblemNeeds = [
    "housing-lease",
    "housing-locks",
    "phone-plan",
    "pets-leaving",
    "kids-housing",
    "money-debt",
  ];

  const evidence = collectAllFactEvidence({
    selectedNeedIds: [...directOccupationalNeeds, ...indirectProblemNeeds],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {},
    clarificationAnswers: {},
  });

  for (const needId of directOccupationalNeeds) {
    const evForNeed = evidence.filter((e: any) => e.sourceNeedId === needId && e.strength === "DIRECT");
    assert(
      evForNeed.length > 0,
      `Step 1 occupational identity assertion '${needId}' produces DIRECT fact evidence.`
    );
  }

  for (const needId of indirectProblemNeeds) {
    const evForNeed = evidence.filter((e: any) => e.sourceNeedId === needId && e.strength === "INDIRECT");
    assert(
      evForNeed.length > 0,
      `Step 1 problem need '${needId}' produces INDIRECT fact evidence (allowing Step 3 question overrides).`
    );
  }
}

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log("\n==================================================");
console.log(`RECONCILIATION TEST SUMMARY: ${passedCount} passed, ${failedCount} failed.`);
console.log("==================================================");

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
