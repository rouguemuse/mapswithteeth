/**
 * MAPS WITH TEETH — PHASE 2A UI ACCEPTANCE TEST SUITE
 * Evaluates the Intake -> Deterministic Matcher -> Explainable Results pipeline
 * across Acceptance Scenarios A through H and UI-to-matcher mappings.
 */

import { mapUiNeedsToCanonicalNeeds, INTAKE_PROBLEM_NEEDS } from "../src/domain/intake/needRegistry";
import { INTAKE_QUESTIONS, getTriggeredQuestions } from "../src/domain/intake/questionRegistry";
import { getClarificationPromptsForUnknowns } from "../src/domain/intake/questionDependencyMap";
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
console.log("MAPS WITH TEETH — PHASE 2A UI ACCEPTANCE SUITE");
console.log("==================================================\n");

// 1. NEED REGISTRY MAPPING TESTS
console.log("--- 1. NEED REGISTRY & QUESTION DISCLOSURE TESTS ---");
const testNeeds = ["housing-lease", "phone-plan", "work-food-beverage"];
const canonicalNeeds = mapUiNeedsToCanonicalNeeds(testNeeds);
assert(
  canonicalNeeds.includes("lease-escape") &&
    canonicalNeeds.includes("phone-separation") &&
    canonicalNeeds.includes("hospitality-relief"),
  "UI problem IDs correctly map to canonical primaryNeeds tokens."
);

const triggeredQuestions = getTriggeredQuestions(["housing-lease"]);
assert(
  triggeredQuestions.some((q) => q.survivorSituationField === "currentResidentialTenancyInTexas") &&
    triggeredQuestions.some((q) => q.survivorSituationField === "hasActiveLeaseInTexas"),
  "Selecting 'housing-lease' correctly triggers progressive tenancy questions."
);

const phoneQuestions = getTriggeredQuestions(["phone-plan"]);
assert(
  phoneQuestions.some((q) => q.survivorSituationField === "sharedCellularPlanWithAbuser") &&
    phoneQuestions.some((q) => q.survivorSituationField === "hasSafeConnectionsDocumentation"),
  "Selecting 'phone-plan' correctly triggers Safe Connections progressive questions."
);

// 2. SCENARIO A: DV + Texas lease + advocate documentation
console.log("\n--- 2. SCENARIO A: DV + Texas Lease + Advocate Documentation ---");
const situationA: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["housing-lease", "housing-rent"]),
  state: "TX",
  county: "Travis",
  domesticViolence: true,
  currentResidentialTenancyInTexas: true,
  hasActiveLeaseInTexas: true,
  hasWrittenResidentialLeaseInTexas: true,
  hasAdvocateVerificationLetter: true,
  reportedToLawEnforcement: false,
};
const outputA = matchSurvivorSituation(situationA);
const strongA = outputA.matchedRoutes.filter((r) => r.routeTier === "STRONG_ROUTE");
const leaseRoute = strongA.find((r) => r.resourceId === "tx-statute-lease-termination");
assert(leaseRoute !== undefined, "Texas Lease Termination appears in START HERE (STRONG_ROUTE) with advocate letter.");

const cvcRouteA = outputA.matchedRoutes.find((r) => r.resourceId === "tx-oag-cvc-relocation");
assert(
  cvcRouteA === undefined,
  "Texas CVC does NOT falsely appear confirmed when adult victim has no police report."
);

// 3. SCENARIO B: Shared phone plan + stalking
console.log("\n--- 3. SCENARIO B: Shared Phone Plan + Stalking (Missing Docs) ---");
const situationB: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["phone-plan", "phone-tracking"]),
  state: "TX",
  county: "Travis",
  stalking: true,
  sharedCellularPlanWithAbuser: true,
  hasSafeConnectionsDocumentation: "UNKNOWN",
};
const outputB = matchSurvivorSituation(situationB);
const phoneRouteB = outputB.possibleRoutes.find((r) => r.resourceId === "safe-connections-act-separation");
assert(phoneRouteB !== undefined, "Safe Connections Act route is surfaced in worth-checking/possible routes.");
assert(
  phoneRouteB?.readinessStatus === "MISSING_DOCUMENTATION",
  "Safe Connections shows missing documentation as readiness issue, not failed eligibility."
);

// 4. SCENARIO C: Food/beverage worker with 11 months tenure
console.log("\n--- 4. SCENARIO C: F&B Bartender with 11 Months Tenure ---");
const situationC: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["work-food-beverage", "money-immediate"]),
  state: "TX",
  county: "Travis",
  industry: "FOOD_AND_BEVERAGE",
  hospitalityWorkHistoryMonths: 11,
};
const outputC = matchSurvivorSituation(situationC);
const usbgC = outputC.matchedRoutes.find((r) => r.resourceId === "usbg-bartender-emergency-assistance");
assert(usbgC === undefined, "USBG BEAP does not appear as confirmed match for 11 months tenure.");
const blockedC = outputC.blockedRoutes.find((r) => r.resourceId === "usbg-bartender-emergency-assistance");
assert(
  blockedC !== undefined && blockedC.knownBlockers.some((b) => b.toLowerCase().includes("12-month") || b.toLowerCase().includes("12 month")),
  "USBG BEAP is clearly marked blocked explaining the 12-month tenure prerequisite."
);

// 5. SCENARIO D: Food/beverage worker with 12 months tenure
console.log("\n--- 5. SCENARIO D: F&B Bartender with 12 Months Tenure ---");
const situationD: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["work-food-beverage", "money-immediate"]),
  state: "TX",
  county: "Travis",
  industry: "FOOD_AND_BEVERAGE",
  hospitalityWorkHistoryMonths: 12,
};
const outputD = matchSurvivorSituation(situationD);
const usbgD = outputD.matchedRoutes.find((r) => r.resourceId === "usbg-bartender-emergency-assistance");
assert(
  usbgD !== undefined && usbgD.eligibilityStatus === "CONFIRMED",
  "USBG BEAP tenure prerequisite resolves CONFIRMED for 12 months."
);

// 6. SCENARIO E: All key fields UNKNOWN
console.log("\n--- 6. SCENARIO E: All Key Fields UNKNOWN ---");
const situationE: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["housing-lease", "money-immediate", "phone-plan"]),
  state: "UNKNOWN",
  county: "UNKNOWN",
  domesticViolence: "UNKNOWN",
  currentResidentialTenancyInTexas: "UNKNOWN",
  hasActiveLeaseInTexas: "UNKNOWN",
  sharedCellularPlanWithAbuser: "UNKNOWN",
  industry: "UNKNOWN",
};
const outputE = matchSurvivorSituation(situationE);
const strongE = outputE.matchedRoutes.filter((r) => r.routeTier === "STRONG_ROUTE");
assert(strongE.length === 0, "0 confirmed routes produced when all key facts are UNKNOWN.");
assert(outputE.possibleRoutes.length > 0, "Useful clarification routes surfaced without fake certainty.");

// 7. SCENARIO F: Out-of-scope need (Catalog Gap)
console.log("\n--- 7. SCENARIO F: Out-of-Scope Need (Catalog Gap) ---");
const situationF: SurvivorSituation = {
  primaryNeeds: ["commercial-contract-dispute", "vehicle-repair"],
  state: "TX",
  county: "Travis",
};
const outputF = matchSurvivorSituation(situationF);
assert(outputF.matchedRoutes.length === 0, "Zero fake resources invented for out-of-scope need.");
assert(
  outputF.catalogGaps.some((g) => g.unmetNeedOrBarrier.toLowerCase().includes("vehicle")),
  "Honest catalog gap surfaced for vehicle repair."
);

// 8. SCENARIO G: Directory Result
console.log("\n--- 8. SCENARIO G: Directory Result (Availability UNKNOWN) ---");
const situationG: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["pets-boarding"]),
  state: "TX",
  county: "Travis",
  hasPets: true,
  fleeingWithPets: true,
};
const outputG = matchSurvivorSituation(situationG);
const directoryRoute = [...outputG.matchedRoutes, ...outputG.possibleRoutes].find(
  (r) => r.resourceId === "safe-havens-for-pets"
);
assert(
  directoryRoute !== undefined && directoryRoute.availabilityStatus === "UNKNOWN",
  "Safe Havens for Pets directory is never presented as confirmed live availability (availabilityStatus === 'UNKNOWN')."
);

// 9. SCENARIO H: Temporarily Closed Resource
console.log("\n--- 9. SCENARIO H: Temporarily Closed Resource ---");
const situationH: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["work-arts-entertainment", "money-immediate"]),
  state: "TX",
  county: "Travis",
  industry: "CRAFT_ARTIST",
  isCraftArtistSubstantialIncome: true,
};
const outputH = matchSurvivorSituation(situationH);
const cerfRoute = [...outputH.matchedRoutes, ...outputH.possibleRoutes, ...outputH.blockedRoutes].find(
  (r) => r.resourceId === "cerf-plus-craft-emergency"
);
assert(cerfRoute !== undefined, "CERF+ Craft Emergency is visible when materially relevant.");
const startHereCerf = outputH.matchedRoutes.find(
  (r) => r.resourceId === "cerf-plus-craft-emergency" && r.routeTier === "STRONG_ROUTE"
);
assert(startHereCerf === undefined, "Temporarily closed resource is NEVER placed in START HERE.");

// 10. RESULTS-SIDE CLARIFICATION RE-RUN TEST
console.log("\n--- 10. RESULTS-SIDE CLARIFICATION RE-RUN TEST ---");
// Start with unknown tenure
const initialSituation: SurvivorSituation = {
  primaryNeeds: mapUiNeedsToCanonicalNeeds(["work-food-beverage", "money-immediate"]),
  state: "TX",
  county: "Travis",
  industry: "FOOD_AND_BEVERAGE",
  hospitalityWorkHistoryMonths: "UNKNOWN",
};
const initialOutput = matchSurvivorSituation(initialSituation);
const initialUsbg = initialOutput.possibleRoutes.find(
  (r) => r.resourceId === "usbg-bartender-emergency-assistance"
);
assert(initialUsbg !== undefined, "Initial state places USBG in possibleRoutes with UNKNOWN tenure.");

// User clarifies tenure to 12 months
const updatedSituation: SurvivorSituation = {
  ...initialSituation,
  hospitalityWorkHistoryMonths: 12,
};
const updatedOutput = matchSurvivorSituation(updatedSituation);
const updatedUsbg = updatedOutput.matchedRoutes.find(
  (r) => r.resourceId === "usbg-bartender-emergency-assistance"
);
assert(
  updatedUsbg !== undefined && updatedUsbg.eligibilityStatus === "CONFIRMED",
  "Answering 12 months updates SurvivorSituation, re-runs matcher, and promotes USBG to matchedRoutes deterministically."
);

// 11. INTAKE CROSS-SECTION CONFLICT RECONCILIATION TEST
console.log("\n--- 11. INTAKE CROSS-SECTION CONFLICT RECONCILIATION TEST ---");
const { reconcileIntakeState } = require("../src/domain/intake/reconciliation");

const conflictInputs = {
  selectedNeedIds: ["work-arts-entertainment"],
  location: { state: "TX", county: "Travis" },
  questionAnswers: { industry: "GENERAL" },
  clarificationAnswers: {},
};
const unreconciledOutput = reconcileIntakeState(conflictInputs);
assert(
  unreconciledOutput.hasBlockingConflicts === true,
  "Cross-section conflict detected before matching."
);
assert(
  unreconciledOutput.reconciledSituation.industry === "UNKNOWN",
  "Unreconciled conflict sets fact to UNKNOWN to protect route from false BLOCKED state."
);

const resolvedInputs = {
  ...conflictInputs,
  clarificationAnswers: { industry: "PERFORMING_ARTS" },
};
const resolvedRecon = reconcileIntakeState(resolvedInputs);
const resolvedMatch = matchSurvivorSituation(resolvedRecon.reconciledSituation);
const resolvedEcf = resolvedMatch.matchedRoutes.find((r: any) => r.resourceId === "entertainment-community-fund");
assert(resolvedEcf !== undefined, "Resolved arts industry promotes Entertainment Community Fund to matched routes.");

console.log("\n==================================================");
console.log(`UI ACCEPTANCE TEST SUMMARY: ${passedCount} passed, ${failedCount} failed.`);
console.log("==================================================");

if (failedCount > 0) {
  process.exit(1);
}
