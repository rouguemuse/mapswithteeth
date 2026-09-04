/**
 * MAPS WITH TEETH — DOMAIN: INTAKE FACT RECONCILIATION ENGINE
 * Reconciles multi-source fact evidence, detects direct-vs-direct contradictions,
 * builds survivor-friendly clarification prompts, and computes canonical SurvivorSituation
 * with full multi-industry support (`industries: IndustryId[]`).
 */

import { SurvivorSituation, IndustryId, Unknownable } from "../types";
import {
  FactEvidence,
  FactResolution,
  ReconciliationOutput,
  ConflictClarificationPrompt
} from "./types";
import { IntakeRawInputs, collectAllFactEvidence } from "./evidenceCollector";
import { mapUiNeedsToCanonicalNeeds } from "../needRegistry";

export function reconcileIntakeState(inputs: IntakeRawInputs): ReconciliationOutput {
  const allEvidence = collectAllFactEvidence(inputs);
  const resolutions: Record<string, FactResolution<any>> = {};
  const activeConflicts: FactResolution<any>[] = [];

  // Group evidence by factKey
  const evidenceByKey: Record<string, FactEvidence[]> = {};
  for (const ev of allEvidence) {
    const key = String(ev.factKey);
    if (!evidenceByKey[key]) evidenceByKey[key] = [];
    evidenceByKey[key].push(ev);
  }

  // Initial situation baseline
  const situation: SurvivorSituation = {
    primaryNeeds: mapUiNeedsToCanonicalNeeds(inputs.selectedNeedIds),
    state: inputs.location.state || "TX",
    county: inputs.location.county || "Travis",
    domesticViolence: "UNKNOWN",
    stalking: "UNKNOWN",
    currentResidentialTenancyInTexas: "UNKNOWN",
    hasActiveLeaseInTexas: "UNKNOWN",
    hasWrittenResidentialLeaseInTexas: "UNKNOWN",
    hasAdvocateVerificationLetter: "UNKNOWN",
    sharedCellularPlanWithAbuser: "UNKNOWN",
    hasSafeConnectionsDocumentation: "UNKNOWN",
    suspectedBluetoothTracker: "UNKNOWN",
    hasPets: "UNKNOWN",
    fleeingWithPets: "UNKNOWN",
    hasChildren: "UNKNOWN",
    childEnrolledInPublicSchool: "UNKNOWN",
    publicSchoolStudentLacksFixedResidence: "UNKNOWN",
    reportedToLawEnforcement: "UNKNOWN",
    isChildVictim: "UNKNOWN",
    cvcReportingExtensionStatus: "UNKNOWN",
    industries: [],
    industry: "UNKNOWN",
    hospitalityWorkHistoryMonths: "UNKNOWN",
    hasQualifyingMedicalOrDisasterCrisis: "UNKNOWN",
    militaryStatus: "UNKNOWN",
    hasCoercedTaxDebt: "UNKNOWN",
    separationDurationMonths: "UNKNOWN",
  };

  // -------------------------------------------------------------
  // 1. RECONCILE: Industry & Occupational Affiliations (Multi-Industry)
  // -------------------------------------------------------------
  const industryEvidence = evidenceByKey["industry"] || [];
  const resolvedIndustryEvidence = industryEvidence.find((e) => e.strength === "RESOLVED");
  const directIndustryEvidences = industryEvidence.filter((e) => e.strength === "DIRECT");

  if (resolvedIndustryEvidence) {
    const resVal = resolvedIndustryEvidence.value;
    if (Array.isArray(resVal)) {
      situation.industries = resVal;
      situation.industry = resVal[0] || "UNKNOWN";
      if (resVal.includes("WRITING")) {
        situation.isAuthorOrDramatist = true;
      }
      if (resVal.includes("CRAFT_ARTIST")) {
        situation.isCraftArtistSubstantialIncome = true;
      }
      if (resVal.includes("HEALTHCARE")) {
        situation.isRegisteredNurse = true;
      }
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: resVal[0] || "UNKNOWN",
        candidates: resVal,
        evidence: industryEvidence,
      };
    } else if (resVal === "BOTH_ARTS_GENERAL") {
      situation.industries = ["PERFORMING_ARTS", "GENERAL"];
      situation.industry = "PERFORMING_ARTS";
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: "PERFORMING_ARTS",
        candidates: ["PERFORMING_ARTS", "GENERAL"],
        evidence: industryEvidence,
      };
    } else if (resVal === "BOTH_ARTS_FOOD") {
      situation.industries = ["PERFORMING_ARTS", "FOOD_AND_BEVERAGE"];
      situation.industry = "PERFORMING_ARTS";
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: "PERFORMING_ARTS",
        candidates: ["PERFORMING_ARTS", "FOOD_AND_BEVERAGE"],
        evidence: industryEvidence,
      };
    } else if (resVal === "BOTH_FOOD_WRITING") {
      situation.industries = ["FOOD_AND_BEVERAGE", "WRITING"];
      situation.industry = "FOOD_AND_BEVERAGE";
      situation.isAuthorOrDramatist = true;
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: "FOOD_AND_BEVERAGE",
        candidates: ["FOOD_AND_BEVERAGE", "WRITING"],
        evidence: industryEvidence,
      };
    } else if (resVal === "NEITHER") {
      situation.industries = [];
      situation.industry = "UNKNOWN";
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: "UNKNOWN",
        candidates: ["UNKNOWN"],
        evidence: industryEvidence,
      };
    } else {
      situation.industries = [resVal];
      situation.industry = resVal;
      resolutions["industry"] = {
        factKey: "industry",
        status: "RESOLVED",
        resolvedValue: resVal,
        candidates: [resVal],
        evidence: industryEvidence,
      };
    }
  } else if (directIndustryEvidences.length >= 2) {
    // We have multiple direct assertions (e.g. Step 1 direct statement + Step 3 direct selection)
    const distinctDirectValues = Array.from(new Set(directIndustryEvidences.map((e) => e.value)));

    if (distinctDirectValues.length === 1) {
      // Both direct assertions say the exact same industry
      const val = distinctDirectValues[0];
      situation.industries = [val];
      situation.industry = val;
      resolutions["industry"] = {
        factKey: "industry",
        status: "COMPATIBLE_MERGED",
        resolvedValue: val,
        candidates: [val],
        evidence: industryEvidence,
      };
    } else {
      // DIRECT vs DIRECT CONTRADICTION
      const hasArts = distinctDirectValues.includes("PERFORMING_ARTS");
      const hasGeneral = distinctDirectValues.includes("GENERAL");
      const hasFood = distinctDirectValues.includes("FOOD_AND_BEVERAGE");

      let promptText = "Earlier you indicated that you work in one field, but later selected a different industry category. Which best describes your current or recent work?";
      if (hasArts && hasGeneral) {
        promptText = "Earlier you indicated that you work in an arts-related field, but later selected a general industry category. Which best describes your current or recent work?";
      } else if (hasFood && hasGeneral) {
        promptText = "Earlier you indicated that you work in restaurant or food & beverage hospitality, but later selected a general industry category. Which best describes your current or recent work?";
      } else if (hasArts && hasFood) {
        promptText = "You indicated experience in both performing arts and food & beverage hospitality. Which best describes your current or recent work?";
      }

      const prompt: ConflictClarificationPrompt = {
        id: "industry-conflict-clarification",
        factKey: "industry",
        title: "We need to clarify one thing",
        prompt: promptText,
        whyWeAsk:
          "Private charitable programs provide emergency grants specifically for arts and hospitality workers. We want to make sure we evaluate every route that might help without making false assumptions.",
        options: [
          {
            id: "opt-1",
            label: hasArts ? "Arts / entertainment / creative work" : hasFood ? "Food & beverage hospitality" : String(distinctDirectValues[0]),
            subtext: hasArts ? "Includes theater, dance, film, music, craft art, and backstage production." : undefined,
            resolvedValue: hasArts ? "PERFORMING_ARTS" : distinctDirectValues[0],
          },
          {
            id: "opt-2",
            label: hasGeneral ? "General / other" : String(distinctDirectValues[1]),
            subtext: "General employment or non-arts occupation.",
            resolvedValue: hasGeneral ? "GENERAL" : distinctDirectValues[1],
          },
          {
            id: "opt-both",
            label: "Both apply",
            subtext: "You work in multiple fields or have concurrent occupations.",
            resolvedValue: hasArts && hasFood ? "BOTH_ARTS_FOOD" : "BOTH_ARTS_GENERAL",
          },
          {
            id: "opt-neither",
            label: "Neither / I answered one incorrectly",
            subtext: "Neither category applies or you want to clarify.",
            resolvedValue: "NEITHER",
          },
        ],
      };

      // Set to UNKNOWN prior to clarification to protect against false BLOCKED route classification
      situation.industries = [];
      situation.industry = "UNKNOWN";

      const conflictRes: FactResolution<any> = {
        factKey: "industry",
        status: "CONFLICT",
        resolvedValue: "UNKNOWN",
        candidates: distinctDirectValues,
        evidence: industryEvidence,
        conflictExplanation: prompt.prompt,
        clarificationPrompt: prompt,
      };
      resolutions["industry"] = conflictRes;
      activeConflicts.push(conflictRes);
    }
  } else if (directIndustryEvidences.length === 1) {
    const val = directIndustryEvidences[0].value;
    situation.industries = val === "UNKNOWN" ? [] : [val];
    situation.industry = val;
    resolutions["industry"] = {
      factKey: "industry",
      status: "RESOLVED",
      resolvedValue: val,
      candidates: [val],
      evidence: industryEvidence,
    };
  }

  // -------------------------------------------------------------
  // 2. RECONCILE: Housing, Tenancy & Other Audited Fields
  // -------------------------------------------------------------
  const reconcileBooleanField = (
    fieldKey: keyof SurvivorSituation,
    evidenceList: FactEvidence[]
  ) => {
    if (!evidenceList || evidenceList.length === 0) return;

    const resolved = evidenceList.find((e) => e.strength === "RESOLVED");
    const directList = evidenceList.filter((e) => e.strength === "DIRECT");
    const derived = evidenceList.find((e) => e.strength === "DERIVED");
    const indirect = evidenceList.find((e) => e.strength === "INDIRECT");

    if (resolved) {
      situation[fieldKey] = resolved.value;
      resolutions[fieldKey as string] = {
        factKey: fieldKey,
        status: "RESOLVED",
        resolvedValue: resolved.value,
        candidates: [resolved.value],
        evidence: evidenceList,
      };
      return;
    }

    if (directList.length > 0) {
      const distinctDirect = Array.from(new Set(directList.map((d) => d.value)));
      if (distinctDirect.length === 1) {
        (situation as any)[fieldKey] = distinctDirect[0];
        const isDirectOverride = !!(indirect && indirect.value !== distinctDirect[0]);
        const isMerge = directList.length > 1 || !!(indirect && indirect.value === distinctDirect[0]);
        const status = isDirectOverride ? "DIRECT_OVERRIDE" : isMerge ? "COMPATIBLE_MERGED" : "RESOLVED";
        resolutions[fieldKey as string] = {
          factKey: fieldKey,
          status,
          resolvedValue: distinctDirect[0],
          candidates: [distinctDirect[0]],
          evidence: evidenceList,
        };
      } else {
        // Direct answers conflict
        (situation as any)[fieldKey] = "UNKNOWN";
        resolutions[fieldKey as string] = {
          factKey: fieldKey,
          status: "CONFLICT",
          resolvedValue: "UNKNOWN",
          candidates: distinctDirect,
          evidence: evidenceList,
        };
      }
      return;
    }

    if (derived) {
      (situation as any)[fieldKey] = derived.value;
      resolutions[fieldKey as string] = {
        factKey: fieldKey,
        status: "RESOLVED",
        resolvedValue: derived.value,
        candidates: [derived.value],
        evidence: evidenceList,
      };
      return;
    }

    if (indirect) {
      (situation as any)[fieldKey] = indirect.value;
      resolutions[fieldKey as string] = {
        factKey: fieldKey,
        status: "RESOLVED",
        resolvedValue: indirect.value,
        candidates: [indirect.value],
        evidence: evidenceList,
      };
      return;
    }
  };

  // Run generic reconciliation across all other audited boolean/scalar fields
  const allAuditedFields: (keyof SurvivorSituation)[] = [
    "hasActiveLeaseInTexas",
    "currentResidentialTenancyInTexas",
    "hasWrittenResidentialLeaseInTexas",
    "hasAdvocateVerificationLetter",
    "sharedCellularPlanWithAbuser",
    "hasSafeConnectionsDocumentation",
    "suspectedBluetoothTracker",
    "hasPets",
    "fleeingWithPets",
    "hasChildren",
    "childEnrolledInPublicSchool",
    "publicSchoolStudentLacksFixedResidence",
    "domesticViolence",
    "stalking",
    "reportedToLawEnforcement",
    "isChildVictim",
    "cvcReportingExtensionStatus",
    "hospitalityWorkHistoryMonths",
    "hasQualifyingMedicalOrDisasterCrisis",
    "militaryStatus",
    "hasCoercedTaxDebt",
    "separationDurationMonths",
    "recentRelocation",
    "isVeteranOrMilitary"
  ];

  for (const field of allAuditedFields) {
    if (field === "industry" || field === "industries") continue;
    const evList = evidenceByKey[field as string] || [];
    reconcileBooleanField(field, evList);
  }

  return {
    reconciledSituation: situation,
    resolutions,
    activeConflicts,
    hasBlockingConflicts: activeConflicts.length > 0,
    allEvidence,
  };
}
