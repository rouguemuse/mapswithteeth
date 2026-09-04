/**
 * MAPS WITH TEETH — DOMAIN: INTAKE EVIDENCE COLLECTOR
 * Harvests structured fact evidence with full provenance across all intake sections.
 * Distinguishes direct factual assertions (e.g. "I work in arts...") from indirect need requests.
 */

import { SurvivorSituation } from "../types";
import { FactEvidence } from "./types";
import { INTAKE_QUESTIONS, getTriggeredQuestions } from "../questionRegistry";

export interface IntakeRawInputs {
  selectedNeedIds: string[];
  location: {
    state?: string;
    county?: string;
  };
  questionAnswers: Record<string, any>;
  clarificationAnswers: Record<string, any>;
}

export function collectAllFactEvidence(inputs: IntakeRawInputs): FactEvidence[] {
  const evidenceList: FactEvidence[] = [];
  const now = Date.now();

  // 1. Evidence from Step 1: Stated Needs & Direct Problem Assertions
  for (const needId of inputs.selectedNeedIds) {
    switch (needId) {
      // Direct occupational statement: "I work in performing arts, theater, dance, music, or craft arts"
      case "work-arts-entertainment":
        evidenceList.push({
          factKey: "industry",
          value: "PERFORMING_ARTS",
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "DIRECT",
          rawLabel: "Selected: I work in performing arts, theater, dance, music, or craft arts",
          timestamp: now,
        });
        break;

      // Direct occupational statement: "I work (or recently worked) in restaurants, bars, or food & beverage"
      case "work-food-beverage":
        evidenceList.push({
          factKey: "industry",
          value: "FOOD_AND_BEVERAGE",
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "DIRECT",
          rawLabel: "Selected: I work (or recently worked) in restaurants, bars, or food & beverage",
          timestamp: now,
        });
        break;

      // Direct military assertion: "I or a family member served in the military or armed forces"
      case "work-military":
        evidenceList.push({
          factKey: "isVeteranOrMilitary",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "DIRECT",
          rawLabel: "Selected: I or a family member served in the military or armed forces",
          timestamp: now,
        });
        break;

      // Direct residential lease assertion: "I need to leave a residential lease agreement early"
      case "housing-lease":
        evidenceList.push({
          factKey: "hasActiveLeaseInTexas",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I need to leave a residential lease agreement early",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "currentResidentialTenancyInTexas",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I need to leave a residential lease agreement early",
          timestamp: now,
        });
        break;

      // Direct home tenancy assertion: "I need locks, deadbolts, or security changed on my home"
      case "housing-locks":
        evidenceList.push({
          factKey: "currentResidentialTenancyInTexas",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I need locks, deadbolts, or security changed on my home",
          timestamp: now,
        });
        break;

      // Direct phone plan assertion: "Someone controls or shares my cellular phone plan"
      case "phone-plan":
        evidenceList.push({
          factKey: "sharedCellularPlanWithAbuser",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: Someone controls or shares my cellular phone plan",
          timestamp: now,
        });
        break;

      // Direct tracking assertion: "I think someone may be digitally tracking my location or vehicle"
      case "phone-tracking":
        evidenceList.push({
          factKey: "suspectedBluetoothTracker",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I think someone may be digitally tracking my location or vehicle",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "stalking",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected digital / tracker screening need",
          timestamp: now,
        });
        break;

      // Direct pet ownership assertion: "I cannot leave safely without my pet"
      case "pets-leaving":
        evidenceList.push({
          factKey: "hasPets",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I cannot leave safely without my pet",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "fleeingWithPets",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I cannot leave safely without my pet",
          timestamp: now,
        });
        break;

      case "pets-boarding":
        evidenceList.push({
          factKey: "hasPets",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: I need safe emergency boarding or housing for a pet",
          timestamp: now,
        });
        break;

      // Direct children assertion: "We do not have a fixed, regular nighttime place to stay with kids"
      case "kids-housing":
        evidenceList.push({
          factKey: "hasChildren",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: We do not have a fixed, regular nighttime place to stay with kids",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "publicSchoolStudentLacksFixedResidence",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: We do not have a fixed, regular nighttime place to stay with kids",
          timestamp: now,
        });
        break;

      case "kids-school":
        evidenceList.push({
          factKey: "hasChildren",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: My child's school enrollment or transport is unstable",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "childEnrolledInPublicSchool",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: My child's school enrollment or transport is unstable",
          timestamp: now,
        });
        break;

      // Direct coerced debt assertion: "Debt, credit cards, or tax filings were coerced or controlled by someone else"
      case "money-debt":
        evidenceList.push({
          factKey: "hasCoercedTaxDebt",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: Debt, credit cards, or tax filings were coerced or controlled by someone else",
          timestamp: now,
        });
        evidenceList.push({
          factKey: "coercedDebtOrFraudulentAccounts",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected: Debt, credit cards, or tax filings were coerced or controlled by someone else",
          timestamp: now,
        });
        break;

      // Crime victim compensation context: "I reported a violent crime/DV or need Texas Crime Victims' Compensation"
      case "legal-crime-victim":
        evidenceList.push({
          factKey: "reportedToLawEnforcement",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected crime victim compensation / reporting need",
          timestamp: now,
        });
        break;

      // Indirect relocation transit signal: "I need transportation or bus tickets while relocating to family/safety"
      case "transit-relocating":
        evidenceList.push({
          factKey: "recentRelocation",
          value: true,
          sourceNeedId: needId,
          sourceSection: "needs",
          strength: "INDIRECT",
          rawLabel: "Selected relocation transit need",
          timestamp: now,
        });
        break;
    }
  }

  // 2. Evidence from Step 2: Location (Establishes geography/jurisdiction ONLY, never tenancy)
  if (inputs.location.state) {
    evidenceList.push({
      factKey: "state",
      value: inputs.location.state,
      sourceSection: "location",
      strength: "DIRECT",
      rawLabel: `State selected: ${inputs.location.state}`,
      timestamp: now,
    });
  }

  if (inputs.location.county) {
    evidenceList.push({
      factKey: "county",
      value: inputs.location.county,
      sourceSection: "location",
      strength: "DIRECT",
      rawLabel: `County selected: ${inputs.location.county}`,
      timestamp: now,
    });
  }

  // 3. Evidence from Step 3: Context Questions (DIRECT answers for currently triggered questions)
  const activeNeedIds = new Set(inputs.selectedNeedIds);
  const indClarif = inputs.clarificationAnswers?.industry;
  if (indClarif === "BOTH_ARTS_FOOD" || (Array.isArray(indClarif) && indClarif.includes("FOOD_AND_BEVERAGE"))) {
    activeNeedIds.add("work-food-beverage");
  }
  if (indClarif === "BOTH_ARTS_FOOD" || (Array.isArray(indClarif) && indClarif.includes("PERFORMING_ARTS"))) {
    activeNeedIds.add("work-arts-entertainment");
  }

  const activeQuestions = getTriggeredQuestions(Array.from(activeNeedIds));
  const activeFields = new Set<string>(activeQuestions.map((q) => q.survivorSituationField));
  
  // Also include any facts actively emitted by Step 1 needs so direct overrides can resolve
  for (const ev of evidenceList) {
    if (ev.sourceSection === "needs") {
      activeFields.add(ev.factKey);
    }
  }

  for (const [fieldKey, val] of Object.entries(inputs.questionAnswers)) {
    if (val !== undefined && val !== null && activeFields.has(fieldKey as keyof SurvivorSituation)) {
      const q = activeQuestions.find((item) => item.survivorSituationField === fieldKey);
      evidenceList.push({
        factKey: fieldKey as keyof SurvivorSituation,
        value: val,
        sourceQuestionId: q?.id,
        sourceSection: "context_questions",
        strength: "DIRECT",
        rawLabel: q ? `Answer to: ${q.plainLanguagePrompt}` : `Field: ${fieldKey}`,
        timestamp: now,
      });
    }
  }

  // 4. Evidence from Step 4: Clarification Answers (RESOLVED / highest strength)
  for (const [factKey, resolvedVal] of Object.entries(inputs.clarificationAnswers)) {
    if (resolvedVal !== undefined && resolvedVal !== null) {
      evidenceList.push({
        factKey: factKey as keyof SurvivorSituation,
        value: resolvedVal,
        sourceSection: "clarification",
        strength: "RESOLVED",
        rawLabel: `Clarification resolved for ${factKey}`,
        timestamp: now + 1,
      });
    }
  }

  return evidenceList;
}
