/**
 * MAPS WITH TEETH — DOMAIN: DETERMINISTIC QUALIFICATION MATCHER (HARDENED)
 * 
 * Strict deterministic matching against the canonical 47-resource registry.
 * 
 * 5 Independent Status Dimensions:
 * 1. relevanceStatus: RELEVANT | NOT_RELEVANT (with explicit reason codes)
 * 2. applicabilityStatus: CONFIRMED | POSSIBLE | FAILED | NOT_APPLICABLE
 * 3. eligibilityStatus: CONFIRMED | POSSIBLE | FAILED | NOT_APPLICABLE
 * 4. readinessStatus: READY | MISSING_INFORMATION | MISSING_DOCUMENTATION | NOT_APPLICABLE
 * 5. availabilityStatus: CONFIRMED_AVAILABLE | CONDITIONAL | UNKNOWN | CLOSED | NOT_APPLICABLE
 */

import { SurvivorSituation } from "../intake/types";
import { Resource } from "@/types/resource";
import { ALL_RESOURCES } from "@/data/resources/registry";
import {
  ResourceQualificationTrace,
  QualificationConditionTrace,
  ConditionResolution
} from "./types";
import {
  ContinuityReceipt,
  CatalogGap,
  DeterministicMatchOutput,
  RouteTier,
  MatchCategory,
  RelevanceStatus,
  ApplicabilityStatus,
  EligibilityStatus,
  ReadinessStatus,
  AvailabilityStatus,
  RelevanceReasonCode
} from "../continuity/types";
import { generateContinuityReceipt } from "../continuity/receiptGenerator";

interface RelevanceCheckResult {
  isRelevant: boolean;
  reasonCode: RelevanceReasonCode;
  reasonExplanation: string;
}

/**
 * Check whether a resource is relevant to any stated survivor needs / barriers with hardened reason codes.
 */
function checkResourceRelevance(resource: Resource, situation: SurvivorSituation): RelevanceCheckResult {
  const needs = (situation.primaryNeeds || []).map((n) => n.toLowerCase().trim());

  // 1. Specific Resource Guardrails & Tight Relevance Rules

  // A. IRS Innocent Spouse Relief
  if (resource.id === "irs-innocent-spouse-relief") {
    if (situation.hasCoercedTaxDebt === true || situation.jointTaxLiabilityCoercion === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor has documented joint tax liability, coerced filing, or IRS debt."
      };
    }
    if (needs.some((n) => n.includes("tax") || n.includes("irs") || n === "coerced-debt")) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor explicitly requested tax or IRS debt relief assistance."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No tax controversy, IRS debt, or coerced tax filing reported."
    };
  }

  // B. Texas Unemployment Family Violence Exception
  if (resource.id === "tx-twc-unemployment") {
    if (
      situation.employmentStatus === "EMPLOYED" &&
      situation.jobSeparationDueToViolence !== true &&
      !needs.some((n) => n.includes("unemployment") || n.includes("job-transition"))
    ) {
      return {
        isRelevant: false,
        reasonCode: "RELEVANCE_NOT_ESTABLISHED",
        reasonExplanation: "Survivor is currently employed with no job disruption or unemployment claim."
      };
    }
    if (needs.some((n) => n.includes("unemployment") || n.includes("job-transition"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor explicitly stated unemployment or job transition need."
      };
    }
    if (
      situation.jobSeparationDueToViolence === true ||
      situation.employmentStatus === "DISRUPTED" ||
      situation.employmentStatus === "UNEMPLOYED"
    ) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor experienced wage disruption, job separation, or leave due to domestic crisis."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No employment separation or unemployment need indicated."
    };
  }

  // C. Texas Residential Rekeying
  if (resource.id === "tx-statute-rekeying") {
    if (situation.currentResidentialTenancyInTexas === false && situation.hasActiveLeaseInTexas === false) {
      return {
        isRelevant: false,
        reasonCode: "RELEVANCE_NOT_ESTABLISHED",
        reasonExplanation: "Survivor has no current residential tenancy or lease in Texas."
      };
    }
    if (needs.some((n) => n.includes("rekey") || n.includes("lock") || n.includes("security") || n.includes("housing-safety"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor explicitly requested lock rekeying or home safety device installation."
      };
    }
    if (situation.currentResidentialTenancyInTexas === true || situation.hasActiveLeaseInTexas === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_STATUTORY_TRIGGER",
        reasonExplanation: "Survivor holds an active residential tenancy in Texas with statutory security device rights."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No residential tenancy or lock rekeying need identified."
    };
  }

  // D. Safe Connections Act Mobile Line Separation
  if (resource.id === "safe-connections-act-separation") {
    if (situation.sharedCellularPlanWithAbuser === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor shares a cellular telephone plan or account with the abusive party."
      };
    }
    if (needs.some((n) => n.includes("phone") || n.includes("cellular") || n.includes("mobile") || n.includes("telecom"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor explicitly requested mobile telephone line separation."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No shared telephone plan or line separation need reported."
    };
  }

  // E. Pet Safety & Emergency Foster
  if (resource.id === "redrover-relief-safe-escape" || resource.id === "safe-havens-for-pets") {
    if (situation.hasPets === true || situation.fleeingWithPets === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor is fleeing with companion animals or requires pet safe boarding."
      };
    }
    if (needs.some((n) => n.includes("pet") || n.includes("animal") || n.includes("dog") || n.includes("cat"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor explicitly requested emergency pet safety assistance."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No pets or companion animal safety needs reported."
    };
  }

  // F. Digital Tracker Detection
  if (resource.id === "airguard-ble-tracker-detection") {
    if (situation.suspectedBluetoothTracker === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor suspects stalking via unauthorized AirTag or Bluetooth tracker."
      };
    }
    if (needs.some((n) => n.includes("tracker") || n.includes("airtag") || n.includes("bluetooth") || n.includes("digital-safety"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested digital tracking detection utility."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No Bluetooth tracking or digital surveillance suspicion reported."
    };
  }

  // G. Reconstructive Facial Surgery
  if (resource.id === "face-to-face-reconstructive-surgery") {
    if (situation.hasPhysicalFacialInjuriesFromDV === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor sustained physical facial injuries caused by domestic abuse."
      };
    }
    if (needs.some((n) => n.includes("facial") || n.includes("surgery") || n.includes("reconstructive"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested facial reconstructive surgery aid."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No physical facial trauma from domestic abuse reported."
    };
  }

  // H. Dental Repair
  if (resource.id === "give-back-a-smile-dental") {
    if (situation.hasPhysicalDentalInjuriesFromDV === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor sustained physical dental damage caused by domestic violence."
      };
    }
    if (needs.some((n) => n.includes("dental") || n.includes("teeth") || n.includes("smile"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested emergency dental restoration."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No physical dental trauma from domestic abuse reported."
    };
  }

  // I. Trauma Tattoo Removal
  if (resource.id === "removery-ink-tattoo-removal") {
    if (situation.hasVisibleOrHateTattoo === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor has human trafficking brand, gang tattoo, or domestic violence mark."
      };
    }
    if (needs.some((n) => n.includes("tattoo") || n.includes("ink") || n.includes("brand"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested laser tattoo removal assistance."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No branding, hate tattoo, or intimate partner mark reported."
    };
  }

  // J. Native American Helpline
  if (resource.id === "stronghearts-native-helpline") {
    if (situation.isNativeAmericanOrAlaskaNative === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor is Native American / Alaska Native seeking culturally-centered advocacy."
      };
    }
    if (needs.some((n) => n.includes("tribal") || n.includes("native") || n.includes("indigenous"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested Native American tribal advocacy services."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "Culturally-specific Native American helpline not requested."
    };
  }

  // K. Industry Emergency Funds
  if (resource.category === "INDUSTRY_EMERGENCY_FUNDS") {
    if (situation.industry && situation.industry !== "GENERAL" && situation.industry !== "UNKNOWN") {
      const isFood = resource.id.includes("southern-smoke") || resource.id.includes("giving-kitchen") || resource.id.includes("core-children") || resource.id.includes("usbg");
      if (isFood && situation.industry === "FOOD_AND_BEVERAGE") {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor has verified food & beverage hospitality industry affiliation."
        };
      }
      const isMusic = resource.id === "musicares-emergency-financial";
      if (isMusic && situation.industry === "MUSIC") {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor has verified music industry career."
        };
      }
      const isWriting = resource.id === "authors-league-fund";
      if (isWriting && situation.industry === "WRITING") {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor has verified author/dramatist career."
        };
      }
      const isCraft = resource.id === "cerf-plus-craft-emergency";
      if (isCraft && situation.industry === "CRAFT_ARTIST") {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor has verified craft artist career."
        };
      }
      const isNursing = resource.id === "nurses-house-emergency-grants";
      if (isNursing && situation.industry === "HEALTHCARE") {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor is a registered nurse in healthcare."
        };
      }
      const isEnt = resource.id === "entertainment-community-fund";
      if (isEnt && (situation.industry === "PERFORMING_ARTS" || situation.industry === "DANCE")) {
        return {
          isRelevant: true,
          reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
          reasonExplanation: "Survivor has verified performing arts / dance career."
        };
      }
    }
  }

  // L. Military / Veteran Emergency Funds
  if (resource.id === "operation-homefront-cfa" || resource.id === "vfw-unmet-needs-grant" || resource.id === "dod-transitional-compensation") {
    if (situation.isVeteranOrMilitary === true) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_CONTEXTUAL_TRIGGER",
        reasonExplanation: "Survivor is a US military service member, veteran, or military dependent."
      };
    }
    if (needs.some((n) => n.includes("military") || n.includes("veteran") || n.includes("vfw"))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: "Survivor requested military/veteran relief grants."
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "No military service affiliation reported."
    };
  }

  // 2. Exact Primary Needs Mapping
  if (needs.length > 0) {
    if (resource.barrierCategories?.some((b) => needs.includes(b.toLowerCase().trim()))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: `Directly addresses stated barrier: ${resource.barrierCategories.filter(b => needs.includes(b.toLowerCase().trim())).join(", ")}.`
      };
    }
    if (resource.matchTags?.some((t) => needs.includes(t.toLowerCase().trim()))) {
      return {
        isRelevant: true,
        reasonCode: "RELEVANCE_EXPLICIT_NEED",
        reasonExplanation: `Matches explicit search tag: ${resource.matchTags.filter(t => needs.includes(t.toLowerCase().trim())).join(", ")}.`
      };
    }
    return {
      isRelevant: false,
      reasonCode: "RELEVANCE_NOT_ESTABLISHED",
      reasonExplanation: "Resource does not address any of the survivor's stated primary barriers."
    };
  }

  // If no primary needs provided, broad baseline evaluation
  return {
    isRelevant: true,
    reasonCode: "RELEVANCE_STATUTORY_TRIGGER",
    reasonExplanation: "General barrier assessment active."
  };
}

/**
 * Evaluate deterministic qualification conditions for a specific resource across 5 dimensions.
 */
function evaluateQualificationTrace(
  resource: Resource,
  situation: SurvivorSituation
): ResourceQualificationTrace {
  const traces: QualificationConditionTrace[] = [];
  const missingDocumentation: string[] = [];

  // 1. Relevance Check
  const relevance = checkResourceRelevance(resource, situation);
  if (!relevance.isRelevant) {
    return {
      resourceId: resource.id,
      resourceName: resource.name,
      resourceType: resource.resourceType,
      scope: resource.scope,
      relevanceStatus: "NOT_RELEVANT",
      relevanceReasonCode: relevance.reasonCode,
      relevanceReason: relevance.reasonExplanation,
      applicabilityStatus: "NOT_APPLICABLE",
      eligibilityStatus: "NOT_APPLICABLE",
      readinessStatus: "NOT_APPLICABLE",
      availabilityStatus: "NOT_APPLICABLE",
      routeTier: "BLOCKED",
      matchCategory: "NOT_RELEVANT",
      conditionTraces: [],
      confirmedFacts: [],
      unknownFacts: [],
      failedBlockers: [relevance.reasonExplanation],
      missingDocumentation: [],
      auditReason: relevance.reasonExplanation
    };
  }

  // 2. Availability Status Evaluation
  let availabilityStatus: AvailabilityStatus = "CONFIRMED_AVAILABLE";
  if (resource.resourceType === "DIRECTORY") {
    availabilityStatus = "UNKNOWN"; // Directory listings have unknown live capacity
  } else if (resource.id === "cerf-plus-craft-emergency") {
    availabilityStatus = "CONDITIONAL"; // Resumes Oct 1, 2026
  } else if (resource.id === "operation-homefront-cfa") {
    availabilityStatus = "CONDITIONAL"; // Monthly 1st-10th window
  } else if (resource.id === "salvation-army-service-extension-tx") {
    availabilityStatus = "CONDITIONAL"; // Rural committee discretion
  } else if (resource.id === "svdp-austin-microgrants") {
    availabilityStatus = "CONDITIONAL"; // Parish volunteer availability
  }

  // 3. Applicability Status Evaluation (Jurisdiction & Basic Framework)
  let applicabilityStatus: ApplicabilityStatus = "CONFIRMED";
  const stateVal = situation.state;
  const countyVal = situation.county ? situation.county.toLowerCase().replace(" county", "").trim() : undefined;

  // Geographic Scope Check
  if (resource.scope === "TEXAS_STATEWIDE" || resource.scope === "TEXAS_COUNTY" || resource.state === "TX") {
    if (stateVal === "TX") {
      if (resource.scope === "TEXAS_COUNTY") {
        const resCounty = resource.county?.toLowerCase().replace(" county", "").trim();
        if (countyVal && resCounty && countyVal === resCounty) {
          traces.push({
            conditionId: "geo-county",
            label: "County Residency",
            requiredFactKey: "county",
            resolution: "CONFIRMED",
            survivorFactValue: situation.county,
            auditExplanation: `Residency in ${resource.county} matches program service area.`
          });
        } else if (countyVal === undefined || countyVal === "unknown") {
          traces.push({
            conditionId: "geo-county",
            label: "County Residency",
            requiredFactKey: "county",
            resolution: "UNKNOWN",
            survivorFactValue: situation.county,
            auditExplanation: `Program requires residency in ${resource.county}; current county is unknown.`
          });
          applicabilityStatus = "POSSIBLE";
        } else {
          traces.push({
            conditionId: "geo-county",
            label: "County Residency",
            requiredFactKey: "county",
            resolution: "FAILED",
            survivorFactValue: situation.county,
            auditExplanation: `Residency in ${situation.county} does not match required service territory (${resource.county}).`
          });
          applicabilityStatus = "FAILED";
        }
      } else {
        traces.push({
          conditionId: "geo-state",
          label: "Texas State Residency / Jurisdiction",
          requiredFactKey: "state",
          resolution: "CONFIRMED",
          survivorFactValue: stateVal,
          auditExplanation: "Texas residency / jurisdiction confirmed."
        });
      }
    } else if (stateVal === "UNKNOWN" || stateVal === undefined) {
      traces.push({
        conditionId: "geo-state",
        label: "Texas State Residency / Jurisdiction",
        requiredFactKey: "state",
        resolution: "UNKNOWN",
        survivorFactValue: stateVal,
        auditExplanation: "Requires Texas location; state residency unknown."
      });
      applicabilityStatus = "POSSIBLE";
    } else {
      traces.push({
        conditionId: "geo-state",
        label: "Texas State Residency / Jurisdiction",
        requiredFactKey: "state",
        resolution: "FAILED",
        survivorFactValue: stateVal,
        auditExplanation: `Resource operates under Texas jurisdiction; survivor is in ${stateVal}.`
      });
      applicabilityStatus = "FAILED";
    }
  }

  // 4. Detailed Mandatory Condition Traces across all resources
  const isTraumaSpecific = resource.barrierCategories?.includes("emergency-shelter") ||
    resource.barrierCategories?.includes("legal-protective-order") ||
    resource.barrierCategories?.includes("address-confidentiality") ||
    resource.id.includes("dv") || resource.id.includes("safe") || resource.id.includes("hope") || resource.id.includes("hawc") || resource.id.includes("avda");

  if (isTraumaSpecific) {
    if (situation.domesticViolence === true || situation.stalking === true || situation.sexualViolence === true || situation.humanTrafficking === true) {
      traces.push({
        conditionId: "trauma-dv-exp",
        label: "Qualifying Victimization or Abuse Experience",
        requiredFactKey: "domesticViolence",
        resolution: "CONFIRMED",
        survivorFactValue: true,
        auditExplanation: "Qualifying domestic violence, stalking, sexual assault, or human trafficking confirmed."
      });
    } else if (situation.domesticViolence === "UNKNOWN" || situation.domesticViolence === undefined) {
      traces.push({
        conditionId: "trauma-dv-exp",
        label: "Qualifying Victimization or Abuse Experience",
        requiredFactKey: "domesticViolence",
        resolution: "UNKNOWN",
        survivorFactValue: situation.domesticViolence,
        auditExplanation: "Program requires qualifying domestic violence, stalking, or crime victimization; status unknown."
      });
    } else {
      traces.push({
        conditionId: "trauma-dv-exp",
        label: "Qualifying Victimization or Abuse Experience",
        requiredFactKey: "domesticViolence",
        resolution: "FAILED",
        survivorFactValue: false,
        auditExplanation: "Program is strictly restricted to survivors of qualifying domestic violence, sexual assault, or violent crime."
      });
    }
  }

  // Resource-Specific Traces
  switch (resource.id) {
    case "tx-puct-utility-waiver": {
      if (situation.hasTexasElectricAccount === true || situation.electricAccountInSurvivorName === true) {
        traces.push({
          conditionId: "puct-electric-account",
          label: "Texas Electric Utility Account",
          requiredFactKey: "hasTexasElectricAccount",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Retail electric account in Texas confirmed."
        });
      } else if (situation.hasTexasElectricAccount === "UNKNOWN" || situation.hasTexasElectricAccount === undefined) {
        traces.push({
          conditionId: "puct-electric-account",
          label: "Texas Electric Utility Account",
          requiredFactKey: "hasTexasElectricAccount",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasTexasElectricAccount,
          auditExplanation: "Requires retail electric account in Texas; account status unknown."
        });
      } else {
        traces.push({
          conditionId: "puct-electric-account",
          label: "Texas Electric Utility Account",
          requiredFactKey: "hasTexasElectricAccount",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "PUCT deposit waiver applies only to electric utility service accounts."
        });
      }

      if (situation.hasAdvocateVerificationLetter === true) {
        traces.push({
          conditionId: "puct-advocate-letter",
          label: "TCFV / Family Violence Advocate Letter",
          requiredFactKey: "hasAdvocateVerificationLetter",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Advocate verification letter for PUCT deposit waiver confirmed."
        });
      } else if (situation.hasAdvocateVerificationLetter === "UNKNOWN" || situation.hasAdvocateVerificationLetter === undefined) {
        traces.push({
          conditionId: "puct-advocate-letter",
          label: "TCFV / Family Violence Advocate Letter",
          requiredFactKey: "hasAdvocateVerificationLetter",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasAdvocateVerificationLetter,
          auditExplanation: "Requires TCFV victim advocate verification letter; letter status unknown."
        });
        missingDocumentation.push("TCFV victim advocate verification letter for electric deposit waiver");
      }
      break;
    }

    case "tx-oag-acp": {
      if (situation.domesticViolence === true || situation.stalking === true || situation.sexualViolence === true || situation.humanTrafficking === true) {
        traces.push({
          conditionId: "acp-dv",
          label: "Qualifying Victimization for ACP",
          requiredFactKey: "domesticViolence",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Qualifying domestic violence, sexual assault, trafficking, or stalking confirmed."
        });
      } else if (situation.domesticViolence === "UNKNOWN" || situation.domesticViolence === undefined) {
        traces.push({
          conditionId: "acp-dv",
          label: "Qualifying Victimization for ACP",
          requiredFactKey: "domesticViolence",
          resolution: "UNKNOWN",
          survivorFactValue: situation.domesticViolence,
          auditExplanation: "Requires qualifying victimization for Texas ACP; status unknown."
        });
      }
      break;
    }

    case "tx-statute-lease-termination": {
      if (situation.hasActiveLeaseInTexas === true || situation.currentResidentialTenancyInTexas === true) {
        traces.push({
          conditionId: "lease-active",
          label: "Active Texas Residential Lease",
          requiredFactKey: "hasActiveLeaseInTexas",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Active residential lease / tenancy in Texas confirmed."
        });
      } else if (situation.hasActiveLeaseInTexas === "UNKNOWN" || situation.hasActiveLeaseInTexas === undefined) {
        traces.push({
          conditionId: "lease-active",
          label: "Active Texas Residential Lease",
          requiredFactKey: "hasActiveLeaseInTexas",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasActiveLeaseInTexas,
          auditExplanation: "Requires residential lease in Texas; lease status unknown."
        });
      } else {
        traces.push({
          conditionId: "lease-active",
          label: "Active Texas Residential Lease",
          requiredFactKey: "hasActiveLeaseInTexas",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Statutory lease break applies only to active residential leases in Texas."
        });
      }

      if (situation.hasAdvocateVerificationLetter === true || situation.protectiveOrderActive === true) {
        traces.push({
          conditionId: "lease-doc",
          label: "Tex. Prop. Code § 92.016 Documentation",
          requiredFactKey: "hasAdvocateVerificationLetter",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Qualifying documentation (advocate letter or protective order) confirmed."
        });
      } else if (situation.hasAdvocateVerificationLetter === "UNKNOWN" || situation.hasAdvocateVerificationLetter === undefined) {
        traces.push({
          conditionId: "lease-doc",
          label: "Tex. Prop. Code § 92.016 Documentation",
          requiredFactKey: "hasAdvocateVerificationLetter",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasAdvocateVerificationLetter,
          auditExplanation: "Requires statutory documentation (protective order or advocate letter); availability unknown."
        });
        missingDocumentation.push("Advocate verification letter or temporary protective order");
      }
      break;
    }

    case "tx-oag-cvc-relocation": {
      if (situation.policeReportFiled === true || situation.policeReportNumberOrAgencyAvailable === true) {
        traces.push({
          conditionId: "cvc-police-report",
          label: "Law Enforcement Incident Report",
          requiredFactKey: "policeReportFiled",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Law enforcement incident report confirmed on file."
        });
      } else if (situation.policeReportFiled === "UNKNOWN" || situation.policeReportFiled === undefined) {
        traces.push({
          conditionId: "cvc-police-report",
          label: "Law Enforcement Incident Report",
          requiredFactKey: "policeReportFiled",
          resolution: "UNKNOWN",
          survivorFactValue: situation.policeReportFiled,
          auditExplanation: "Statute / program requires law enforcement reporting (or statutory minor/good cause exception); status unknown."
        });
        missingDocumentation.push("Police incident report number or LE agency verification");
      } else {
        traces.push({
          conditionId: "cvc-police-report",
          label: "Law Enforcement Incident Report",
          requiredFactKey: "policeReportFiled",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Texas CVC relocation assistance strictly requires a law enforcement report (Tex. Code Crim. Proc. Art. 56B)."
        });
      }
      break;
    }

    case "tx-statute-rekeying": {
      if (situation.currentResidentialTenancyInTexas === true || situation.hasActiveLeaseInTexas === true) {
        traces.push({
          conditionId: "rekey-tenancy",
          label: "Current Texas Residential Tenancy",
          requiredFactKey: "currentResidentialTenancyInTexas",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Current residential tenancy in Texas confirmed."
        });
      } else if (situation.currentResidentialTenancyInTexas === "UNKNOWN" || situation.currentResidentialTenancyInTexas === undefined) {
        traces.push({
          conditionId: "rekey-tenancy",
          label: "Current Texas Residential Tenancy",
          requiredFactKey: "currentResidentialTenancyInTexas",
          resolution: "UNKNOWN",
          survivorFactValue: situation.currentResidentialTenancyInTexas,
          auditExplanation: "Requires current residential tenancy in Texas; tenancy status unknown."
        });
      } else {
        traces.push({
          conditionId: "rekey-tenancy",
          label: "Current Texas Residential Tenancy",
          requiredFactKey: "currentResidentialTenancyInTexas",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Tex. Prop. Code § 92.153 applies only to residential tenants with current tenancy in Texas."
        });
      }
      break;
    }

    case "tx-twc-unemployment": {
      if (situation.jobSeparationDueToViolence === true || situation.employmentStatus === "DISRUPTED" || situation.employmentStatus === "UNEMPLOYED") {
        traces.push({
          conditionId: "twc-separation",
          label: "Job Separation / Disruption Due to Abuse",
          requiredFactKey: "jobSeparationDueToViolence",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Work separation or wage disruption caused by domestic violence confirmed."
        });
      } else if (situation.jobSeparationDueToViolence === "UNKNOWN" || situation.jobSeparationDueToViolence === undefined) {
        traces.push({
          conditionId: "twc-separation",
          label: "Job Separation / Disruption Due to Abuse",
          requiredFactKey: "jobSeparationDueToViolence",
          resolution: "UNKNOWN",
          survivorFactValue: situation.jobSeparationDueToViolence,
          auditExplanation: "Requires separation from employment caused by domestic crisis; status unknown."
        });
      } else {
        traces.push({
          conditionId: "twc-separation",
          label: "Job Separation / Disruption Due to Abuse",
          requiredFactKey: "jobSeparationDueToViolence",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "TWC family violence exception applies only when job separation or wage loss is caused by domestic violence."
        });
      }
      break;
    }

    case "giving-kitchen-crisis-grants": {
      if (situation.industry === "FOOD_AND_BEVERAGE") {
        traces.push({
          conditionId: "gk-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: situation.industry,
          auditExplanation: "Food and beverage hospitality employment confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "gk-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires food service / beverage hospitality industry employment; employment sector unknown."
        });
      } else {
        traces.push({
          conditionId: "gk-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to food service workers; survivor is in ${situation.industry}.`
        });
      }

      if (situation.hasQualifyingMedicalOrDisasterCrisis === true) {
        traces.push({
          conditionId: "gk-qualifying-crisis",
          label: "Documented Qualifying Medical/Disaster Crisis",
          requiredFactKey: "hasQualifyingMedicalOrDisasterCrisis",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Documented illness, injury, disaster, or housing crisis qualifying for direct financial grant confirmed."
        });
      } else {
        traces.push({
          conditionId: "gk-qualifying-crisis",
          label: "Documented Qualifying Medical/Disaster Crisis",
          requiredFactKey: "hasQualifyingMedicalOrDisasterCrisis",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasQualifyingMedicalOrDisasterCrisis,
          auditExplanation: "Direct financial assistance requires documented medical illness, injury, or disaster; general hardship routes to Stability Network referrals."
        });
        missingDocumentation.push("Medical doctor note, injury report, or disaster verification");
      }
      break;
    }

    case "core-children-of-restaurant-employees": {
      if (situation.industry === "FOOD_AND_BEVERAGE") {
        traces.push({
          conditionId: "core-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: situation.industry,
          auditExplanation: "Food and beverage hospitality employment confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "core-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires food and beverage industry employment; sector unknown."
        });
      } else {
        traces.push({
          conditionId: "core-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Restricted to food & beverage workers; survivor is in ${situation.industry}.`
        });
      }

      if (situation.hasChildren === true || (typeof situation.childrenCount === "number" && situation.childrenCount > 0)) {
        traces.push({
          conditionId: "core-children",
          label: "Dependent Children Requirement",
          requiredFactKey: "hasChildren",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Survivor has dependent children."
        });
      } else if (situation.hasChildren === "UNKNOWN" || situation.hasChildren === undefined) {
        traces.push({
          conditionId: "core-children",
          label: "Dependent Children Requirement",
          requiredFactKey: "hasChildren",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasChildren,
          auditExplanation: "CORE specifically requires dependent children; child custody/dependent status unknown."
        });
      } else {
        traces.push({
          conditionId: "core-children",
          label: "Dependent Children Requirement",
          requiredFactKey: "hasChildren",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "CORE grants are strictly restricted to food/beverage employees with dependent children."
        });
      }
      break;
    }

    case "musicares-emergency-financial": {
      if (situation.industry === "MUSIC") {
        traces.push({
          conditionId: "music-industry",
          label: "Music Industry Employment / Credits",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: situation.industry,
          auditExplanation: "Music industry career confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "music-industry",
          label: "Music Industry Employment / Credits",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires documented music industry career/credits; industry unknown."
        });
      } else {
        traces.push({
          conditionId: "music-industry",
          label: "Music Industry Employment / Credits",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to music professionals; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "authors-league-fund": {
      if (situation.industry === "WRITING" || situation.isAuthorOrDramatist === true) {
        traces.push({
          conditionId: "writing-industry",
          label: "Professional Author / Dramatist Career",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Professional author/dramatist career confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "writing-industry",
          label: "Professional Author / Dramatist Career",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires professional author/journalist/dramatist career; industry unknown."
        });
      } else {
        traces.push({
          conditionId: "writing-industry",
          label: "Professional Author / Dramatist Career",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to authors and dramatists; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "cerf-plus-craft-emergency": {
      if (situation.industry === "CRAFT_ARTIST" || situation.isCraftArtistSubstantialIncome === true) {
        traces.push({
          conditionId: "craft-artist",
          label: "Professional Craft Artist Career",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Professional craft artist career confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "craft-artist",
          label: "Professional Craft Artist Career",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires professional craft artist career; sector unknown."
        });
      } else {
        traces.push({
          conditionId: "craft-artist",
          label: "Professional Craft Artist Career",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to professional craft artists; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "nurses-house-emergency-grants": {
      if (situation.industry === "HEALTHCARE" || situation.isRegisteredNurse === true) {
        traces.push({
          conditionId: "nursing-license",
          label: "Registered Nurse (RN) Licensure",
          requiredFactKey: "isRegisteredNurse",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Registered nurse licensure confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "nursing-license",
          label: "Registered Nurse (RN) Licensure",
          requiredFactKey: "isRegisteredNurse",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires active/recent RN license; healthcare qualification unknown."
        });
      } else {
        traces.push({
          conditionId: "nursing-license",
          label: "Registered Nurse (RN) Licensure",
          requiredFactKey: "isRegisteredNurse",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to registered nurses; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "vfw-unmet-needs-grant": {
      if (situation.isVeteranOrMilitary === true) {
        traces.push({
          conditionId: "vfw-military",
          label: "Military Service Requirement",
          requiredFactKey: "isVeteranOrMilitary",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Military service affiliation confirmed."
        });
      } else if (situation.isVeteranOrMilitary === "UNKNOWN" || situation.isVeteranOrMilitary === undefined) {
        traces.push({
          conditionId: "vfw-military",
          label: "Military Service Requirement",
          requiredFactKey: "isVeteranOrMilitary",
          resolution: "UNKNOWN",
          survivorFactValue: situation.isVeteranOrMilitary,
          auditExplanation: "Requires military service discharge within 36 months or active duty; military status unknown."
        });
      } else {
        traces.push({
          conditionId: "vfw-military",
          label: "Military Service Requirement",
          requiredFactKey: "isVeteranOrMilitary",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Program is strictly for US military veterans or active duty service members."
        });
      }
      break;
    }

    case "operation-homefront-cfa": {
      if (situation.isVeteranOrMilitary === true) {
        const status = situation.militaryStatus;
        const rank = situation.militaryRank;
        const hasDeers = situation.hasDeersDependents;

        if (status === "WOUNDED_ILL_INJURED_POST_911" || situation.hasLineOfDutyDisability === true) {
          traces.push({
            conditionId: "cfa-wounded-pathway",
            label: "Post-9/11 Wounded/Ill/Injured Line-of-Duty Service (All Ranks)",
            requiredFactKey: "hasLineOfDutyDisability",
            resolution: "CONFIRMED",
            survivorFactValue: true,
            auditExplanation: "Post-9/11 line-of-duty illness, injury, or combat wound confirmed across all ranks."
          });
        } else if (status === "DEPLOYED") {
          const isE1E6 = rank === "E1_E6" || rank === "E1" || rank === "E2" || rank === "E3" || rank === "E4" || rank === "E5" || rank === "E6";
          const isAboveE6 = rank === "E7_E9" || rank === "OFFICER" || rank === "E7" || rank === "E8" || rank === "E9" || (typeof rank === "string" && (rank.startsWith("O") || rank.startsWith("W")));

          if (isAboveE6) {
            traces.push({
              conditionId: "cfa-deployed-rank",
              label: "Deployed Pathway Rank Limit (E-1 through E-6)",
              requiredFactKey: "militaryRank",
              resolution: "FAILED",
              survivorFactValue: rank,
              auditExplanation: `Deployed pathway is strictly limited to ranks E-1 through E-6; applicant rank is ${rank}.`
            });
          } else if (isE1E6) {
            traces.push({
              conditionId: "cfa-deployed-rank",
              label: "Deployed Pathway Rank Limit (E-1 through E-6)",
              requiredFactKey: "militaryRank",
              resolution: "CONFIRMED",
              survivorFactValue: rank,
              auditExplanation: `Rank (${rank}) satisfies E-1 through E-6 requirement for deployed pathway.`
            });

            if (hasDeers === true || situation.hasDependents === true || situation.hasChildren === true) {
              traces.push({
                conditionId: "cfa-deers-dependents",
                label: "DEERS-Eligible Legal Dependents",
                requiredFactKey: "hasDeersDependents",
                resolution: "CONFIRMED",
                survivorFactValue: true,
                auditExplanation: "DEERS-eligible legal dependents confirmed."
              });
            } else if (hasDeers === "UNKNOWN" || hasDeers === undefined) {
              traces.push({
                conditionId: "cfa-deers-dependents",
                label: "DEERS-Eligible Legal Dependents",
                requiredFactKey: "hasDeersDependents",
                resolution: "UNKNOWN",
                survivorFactValue: hasDeers,
                auditExplanation: "Requires DEERS-enrolled legal dependents for deployed pathway; dependent status unknown."
              });
            } else {
              traces.push({
                conditionId: "cfa-deers-dependents",
                label: "DEERS-Eligible Legal Dependents",
                requiredFactKey: "hasDeersDependents",
                resolution: "FAILED",
                survivorFactValue: false,
                auditExplanation: "Operation Homefront deployed pathway strictly requires DEERS-eligible legal dependents."
              });
            }
          } else {
            traces.push({
              conditionId: "cfa-deployed-rank",
              label: "Deployed Pathway Rank Limit (E-1 through E-6)",
              requiredFactKey: "militaryRank",
              resolution: "UNKNOWN",
              survivorFactValue: rank,
              auditExplanation: "Requires enlisted rank E-1 through E-6 for deployed pathway; rank unknown."
            });
          }
        } else if (status === "ACTIVE_DUTY_ENLISTED_E1_E6") {
          traces.push({
            conditionId: "cfa-active-duty-rank",
            label: "Active Duty Junior Enlisted Rank (E-1 through E-6)",
            requiredFactKey: "militaryStatus",
            resolution: "CONFIRMED",
            survivorFactValue: status,
            auditExplanation: "Active duty junior enlisted rank (E-1 through E-6) confirmed."
          });

          if (hasDeers === true || situation.hasDependents === true || situation.hasChildren === true) {
            traces.push({
              conditionId: "cfa-deers-dependents",
              label: "DEERS-Eligible Legal Dependents",
              requiredFactKey: "hasDeersDependents",
              resolution: "CONFIRMED",
              survivorFactValue: true,
              auditExplanation: "DEERS-eligible legal dependents confirmed."
            });
          } else if (hasDeers === "UNKNOWN" || hasDeers === undefined) {
            traces.push({
              conditionId: "cfa-deers-dependents",
              label: "DEERS-Eligible Legal Dependents",
              requiredFactKey: "hasDeersDependents",
              resolution: "UNKNOWN",
              survivorFactValue: hasDeers,
              auditExplanation: "Requires DEERS-enrolled legal dependents for active duty pathway; dependent status unknown."
            });
          } else {
            traces.push({
              conditionId: "cfa-deers-dependents",
              label: "DEERS-Eligible Legal Dependents",
              requiredFactKey: "hasDeersDependents",
              resolution: "FAILED",
              survivorFactValue: false,
              auditExplanation: "Operation Homefront active duty pathway strictly requires DEERS-eligible legal dependents."
            });
          }
        } else if (status === "UNKNOWN" || status === undefined) {
          traces.push({
            conditionId: "cfa-pathway",
            label: "Qualifying CFA Pathway (Active E1-E6, Deployed E1-E6, or Post-9/11 Wounded)",
            requiredFactKey: "militaryStatus",
            resolution: "UNKNOWN",
            survivorFactValue: status,
            auditExplanation: "Requires qualifying pathway (Active Duty E1-E6 w/ dependents, Deployed E1-E6 w/ dependents, or Post-9/11 Wounded all ranks); status unknown."
          });
        } else {
          traces.push({
            conditionId: "cfa-pathway",
            label: "Qualifying CFA Pathway (Active E1-E6, Deployed E1-E6, or Post-9/11 Wounded)",
            requiredFactKey: "militaryStatus",
            resolution: "FAILED",
            survivorFactValue: status,
            auditExplanation: `Military status (${status}) does not meet CFA Active Duty E1-E6, Deployed E1-E6, or Post-9/11 Wounded/Ill/Injured criteria.`
          });
        }
      } else if (situation.isVeteranOrMilitary === "UNKNOWN" || situation.isVeteranOrMilitary === undefined) {
        traces.push({
          conditionId: "military-service",
          label: "Military Service Requirement",
          requiredFactKey: "isVeteranOrMilitary",
          resolution: "UNKNOWN",
          survivorFactValue: situation.isVeteranOrMilitary,
          auditExplanation: "Requires US military service affiliation; military status unknown."
        });
      } else {
        traces.push({
          conditionId: "military-service",
          label: "Military Service Requirement",
          requiredFactKey: "isVeteranOrMilitary",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Program is strictly for active duty military or qualifying post-9/11 veterans."
        });
      }
      break;
    }

    case "greyhound-home-free": {
      if (situation.age !== undefined && situation.age !== "UNKNOWN") {
        if (situation.age >= 12 && situation.age <= 21) {
          traces.push({
            conditionId: "greyhound-age",
            label: "Youth Age Eligibility (12–21)",
            requiredFactKey: "age",
            resolution: "CONFIRMED",
            survivorFactValue: situation.age,
            auditExplanation: `Age (${situation.age}) is within the 12–21 runaway/youth reunification program window.`
          });
        } else {
          traces.push({
            conditionId: "greyhound-age",
            label: "Youth Age Eligibility (12–21)",
            requiredFactKey: "age",
            resolution: "FAILED",
            survivorFactValue: situation.age,
            auditExplanation: `Age (${situation.age}) is outside the 12–21 runaway youth reunification age limit.`
          });
        }
      } else {
        traces.push({
          conditionId: "greyhound-age",
          label: "Youth Age Eligibility (12–21)",
          requiredFactKey: "age",
          resolution: "UNKNOWN",
          survivorFactValue: situation.age,
          auditExplanation: "Greyhound Home Free is restricted to runaway/homeless youth aged 12–21; age unknown."
        });
      }
      break;
    }

    case "give-back-a-smile-dental": {
      if (situation.hasPhysicalDentalInjuriesFromDV === true) {
        traces.push({
          conditionId: "dental-injury",
          label: "Physical Dental Injury from Domestic Violence",
          requiredFactKey: "hasPhysicalDentalInjuriesFromDV",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Physical dental injury caused by domestic violence confirmed."
        });
      } else if (situation.hasPhysicalDentalInjuriesFromDV === "UNKNOWN" || situation.hasPhysicalDentalInjuriesFromDV === undefined) {
        traces.push({
          conditionId: "dental-injury",
          label: "Physical Dental Injury from Domestic Violence",
          requiredFactKey: "hasPhysicalDentalInjuriesFromDV",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasPhysicalDentalInjuriesFromDV,
          auditExplanation: "Requires physical dental trauma from domestic abuse; injury profile unknown."
        });
      } else {
        traces.push({
          conditionId: "dental-injury",
          label: "Physical Dental Injury from Domestic Violence",
          requiredFactKey: "hasPhysicalDentalInjuriesFromDV",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Give Back a Smile is strictly for restorative dental repair of injuries caused by domestic violence."
        });
      }
      break;
    }

    case "face-to-face-reconstructive-surgery": {
      if (situation.hasPhysicalFacialInjuriesFromDV === true) {
        traces.push({
          conditionId: "ftf-injury",
          label: "Physical Facial Trauma from Domestic Abuse",
          requiredFactKey: "hasPhysicalFacialInjuriesFromDV",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Physical facial trauma caused by domestic violence confirmed."
        });
      } else if (situation.hasPhysicalFacialInjuriesFromDV === "UNKNOWN" || situation.hasPhysicalFacialInjuriesFromDV === undefined) {
        traces.push({
          conditionId: "ftf-injury",
          label: "Physical Facial Trauma from Domestic Abuse",
          requiredFactKey: "hasPhysicalFacialInjuriesFromDV",
          resolution: "UNKNOWN",
          survivorFactValue: situation.hasPhysicalFacialInjuriesFromDV,
          auditExplanation: "Requires physical facial trauma resulting from domestic abuse; trauma profile unknown."
        });
      } else {
        traces.push({
          conditionId: "ftf-injury",
          label: "Physical Facial Trauma from Domestic Abuse",
          requiredFactKey: "hasPhysicalFacialInjuriesFromDV",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "FACE TO FACE is strictly for restorative facial surgery for injuries caused by domestic violence."
        });
      }

      if (typeof situation.separationDurationMonths === "number") {
        if (situation.separationDurationMonths >= 12) {
          traces.push({
            conditionId: "ftf-separation",
            label: "12-Month Physical Separation",
            requiredFactKey: "separationDurationMonths",
            resolution: "CONFIRMED",
            survivorFactValue: situation.separationDurationMonths,
            auditExplanation: `Separation duration (${situation.separationDurationMonths} months) meets the 12-month program safety requirement.`
          });
        } else {
          traces.push({
            conditionId: "ftf-separation",
            label: "12-Month Physical Separation",
            requiredFactKey: "separationDurationMonths",
            resolution: "FAILED",
            survivorFactValue: situation.separationDurationMonths,
            auditExplanation: `Separation duration (${situation.separationDurationMonths} months) is less than the mandatory 12-month safety window.`
          });
        }
      } else {
        traces.push({
          conditionId: "ftf-separation",
          label: "12-Month Physical Separation",
          requiredFactKey: "separationDurationMonths",
          resolution: "UNKNOWN",
          survivorFactValue: situation.separationDurationMonths,
          auditExplanation: "Requires survivor to be out of the abusive relationship for at least 12 months; separation duration unknown."
        });
      }
      break;
    }

    case "freefrom-coerced-debt-toolkit": {
      if (situation.coercedDebtOrFraudulentAccounts === true || situation.jointTaxLiabilityCoercion === true) {
        traces.push({
          conditionId: "coerced-debt",
          label: "Coerced Debt or Fraudulent Accounts",
          requiredFactKey: "coercedDebtOrFraudulentAccounts",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Coerced debt, fraudulent credit accounts, or tax coercion confirmed."
        });
      } else if (situation.coercedDebtOrFraudulentAccounts === "UNKNOWN" || situation.coercedDebtOrFraudulentAccounts === undefined) {
        traces.push({
          conditionId: "coerced-debt",
          label: "Coerced Debt or Fraudulent Accounts",
          requiredFactKey: "coercedDebtOrFraudulentAccounts",
          resolution: "UNKNOWN",
          survivorFactValue: situation.coercedDebtOrFraudulentAccounts,
          auditExplanation: "Requires coerced debt or fraudulent accounts created by abusive partner; debt status unknown."
        });
      } else {
        traces.push({
          conditionId: "coerced-debt",
          label: "Coerced Debt or Fraudulent Accounts",
          requiredFactKey: "coercedDebtOrFraudulentAccounts",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Toolkit is specifically designed for debt coerced by an intimate partner or family member."
        });
      }
      break;
    }

    case "hud-vawa-emergency-transfer": {
      if (situation.isSection8OrPublicHousingTenant === true) {
        traces.push({
          conditionId: "hud-tenancy",
          label: "Covered HUD Housing / Section 8 Tenancy",
          requiredFactKey: "isSection8OrPublicHousingTenant",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Covered HUD / Section 8 housing tenancy confirmed."
        });
      } else if (situation.isSection8OrPublicHousingTenant === "UNKNOWN" || situation.isSection8OrPublicHousingTenant === undefined) {
        traces.push({
          conditionId: "hud-tenancy",
          label: "Covered HUD Housing / Section 8 Tenancy",
          requiredFactKey: "isSection8OrPublicHousingTenant",
          resolution: "UNKNOWN",
          survivorFactValue: situation.isSection8OrPublicHousingTenant,
          auditExplanation: "VAWA Emergency Transfer applies to covered HUD/Section 8 programs; housing program status unknown."
        });
      } else {
        traces.push({
          conditionId: "hud-tenancy",
          label: "Covered HUD Housing / Section 8 Tenancy",
          requiredFactKey: "isSection8OrPublicHousingTenant",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "24 CFR § 5.2005(e) emergency transfers apply only to tenants in covered HUD housing assistance programs."
        });
      }
      break;
    }

    case "irs-ip-pin": {
      if (situation.domesticViolence === true || situation.stalking === true || situation.coercedDebtOrFraudulentAccounts === true) {
        traces.push({
          conditionId: "ip-pin-safety",
          label: "Survivor Identity Theft / Tax Fraud Protection",
          requiredFactKey: "domesticViolence",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Qualifying domestic violence, stalking, or coerced tax filing risk confirmed."
        });
      } else if (situation.domesticViolence === "UNKNOWN" || situation.domesticViolence === undefined) {
        traces.push({
          conditionId: "ip-pin-safety",
          label: "Survivor Identity Theft / Tax Fraud Protection",
          requiredFactKey: "domesticViolence",
          resolution: "UNKNOWN",
          survivorFactValue: situation.domesticViolence,
          auditExplanation: "Requires identity theft risk or survivor safety protection; status unknown."
        });
      }
      break;
    }

    case "modest-needs-self-sufficiency": {
      if (situation.isLowIncome === true) {
        traces.push({
          conditionId: "modest-dynamic-income",
          label: "Dynamic Regional Poverty Index Calculation",
          requiredFactKey: "isLowIncome",
          resolution: "UNKNOWN",
          survivorFactValue: situation.isLowIncome,
          auditExplanation: "Modest Needs applies dynamic regional cost-of-living calculations; income qualification is provisional pending paystub/lease verification."
        });
        missingDocumentation.push("Recent paystubs and active rental lease for dynamic FPL calculation");
      } else if (situation.isLowIncome === "UNKNOWN" || situation.isLowIncome === undefined) {
        traces.push({
          conditionId: "modest-dynamic-income",
          label: "Dynamic Regional Poverty Index Calculation",
          requiredFactKey: "isLowIncome",
          resolution: "UNKNOWN",
          survivorFactValue: situation.isLowIncome,
          auditExplanation: "Requires low-income employed deficit proof; income profile unknown."
        });
      }
      break;
    }

    case "salvation-army-service-extension-tx": {
      if (stateVal === "TX") {
        if (countyVal && countyVal !== "unknown") {
          const isMetro = ["travis", "harris", "dallas", "tarrant", "bexar", "el paso"].includes(countyVal);
          if (!isMetro) {
            traces.push({
              conditionId: "sa-rural",
              label: "Rural Texas Service Territory",
              requiredFactKey: "county",
              resolution: "UNKNOWN",
              survivorFactValue: situation.county,
              auditExplanation: `Rural Texas county (${situation.county}) served by Service Extension; exact county coverage requires local volunteer committee confirmation.`
            });
          } else {
            traces.push({
              conditionId: "sa-rural",
              label: "Rural Texas Service Territory",
              requiredFactKey: "county",
              resolution: "FAILED",
              survivorFactValue: situation.county,
              auditExplanation: `Metro county (${situation.county}) is served by standard Salvation Army physical centers rather than Service Extension.`
            });
          }
        } else {
          traces.push({
            conditionId: "sa-rural",
            label: "Rural Texas Service Territory",
            requiredFactKey: "county",
            resolution: "UNKNOWN",
            survivorFactValue: situation.county,
            auditExplanation: "Service Extension operates in rural Texas counties; specific county unknown."
          });
        }
      }
      break;
    }

    case "safe-connections-act-separation": {
      if (situation.sharedCellularPlanWithAbuser === true) {
        traces.push({
          conditionId: "sca-shared-line",
          label: "Shared Mobile Cellular Account",
          requiredFactKey: "sharedCellularPlanWithAbuser",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Shared mobile cellular telephone plan with abuser confirmed."
        });
      } else if (situation.sharedCellularPlanWithAbuser === "UNKNOWN" || situation.sharedCellularPlanWithAbuser === undefined) {
        traces.push({
          conditionId: "sca-shared-line",
          label: "Shared Mobile Cellular Account",
          requiredFactKey: "sharedCellularPlanWithAbuser",
          resolution: "UNKNOWN",
          survivorFactValue: situation.sharedCellularPlanWithAbuser,
          auditExplanation: "Requires shared cellular plan with abuser; telephone account status unknown."
        });
      } else {
        traces.push({
          conditionId: "sca-shared-line",
          label: "Shared Mobile Cellular Account",
          requiredFactKey: "sharedCellularPlanWithAbuser",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Safe Connections Act remedy applies to line separation on shared commercial cellular accounts."
        });
      }

      if (
        situation.hasSafeConnectionsDocumentation === true ||
        situation.hasAdvocateVerificationLetter === true ||
        situation.policeReportFiled === true ||
        situation.protectiveOrderActive === true
      ) {
        traces.push({
          conditionId: "sca-documentation",
          label: "Line Separation Statutory Evidence",
          requiredFactKey: "hasSafeConnectionsDocumentation",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Statutory documentation under 47 U.S.C. § 345 (advocate letter, police report, or court order) confirmed."
        });
      } else {
        traces.push({
          conditionId: "sca-documentation",
          label: "Line Separation Statutory Evidence",
          requiredFactKey: "hasSafeConnectionsDocumentation",
          resolution: "UNKNOWN",
          survivorFactValue: false,
          auditExplanation: "Federal law requires carrier submission of qualifying survivor documentation; document status in hand is pending."
        });
        missingDocumentation.push("Advocate verification letter, police report, or protective order for carrier submission");
      }
      break;
    }

    case "southern-smoke-foundation": {
      if (situation.industry === "FOOD_AND_BEVERAGE") {
        traces.push({
          conditionId: "ss-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: situation.industry,
          auditExplanation: "Food and beverage hospitality employment confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "ss-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires food service / beverage hospitality industry employment; employment sector unknown."
        });
      } else {
        traces.push({
          conditionId: "ss-industry",
          label: "Food & Beverage Industry Employment",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to food service workers; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "usbg-bartender-emergency-assistance": {
      if (situation.industry === "FOOD_AND_BEVERAGE") {
        const tenure = situation.hospitalityWorkHistoryMonths;
        if (typeof tenure === "number") {
          if (tenure >= 6) {
            traces.push({
              conditionId: "usbg-tenure",
              label: "6-Month Beverage Hospitality Work History",
              requiredFactKey: "hospitalityWorkHistoryMonths",
              resolution: "CONFIRMED",
              survivorFactValue: tenure,
              auditExplanation: `Work history (${tenure} months) satisfies the 6-month minimum threshold.`
            });
          } else {
            traces.push({
              conditionId: "usbg-tenure",
              label: "6-Month Beverage Hospitality Work History",
              requiredFactKey: "hospitalityWorkHistoryMonths",
              resolution: "FAILED",
              survivorFactValue: tenure,
              auditExplanation: `Tenure (${tenure} months) is below the required 6-month beverage hospitality threshold.`
            });
          }
        } else {
          traces.push({
            conditionId: "usbg-tenure",
            label: "6-Month Beverage Hospitality Work History",
            requiredFactKey: "hospitalityWorkHistoryMonths",
            resolution: "UNKNOWN",
            survivorFactValue: tenure,
            auditExplanation: "Requires at least 6 months of documented beverage service work; tenure unknown."
          });
        }
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "usbg-industry",
          label: "Beverage Hospitality Industry",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires beverage hospitality industry employment; sector unknown."
        });
      } else {
        traces.push({
          conditionId: "usbg-industry",
          label: "Beverage Hospitality Industry",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to beverage hospitality workers; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "entertainment-community-fund": {
      if (situation.industry === "PERFORMING_ARTS" || situation.industry === "DANCE") {
        traces.push({
          conditionId: "ecf-industry",
          label: "Performing Arts / Entertainment Career",
          requiredFactKey: "industry",
          resolution: "CONFIRMED",
          survivorFactValue: situation.industry,
          auditExplanation: "Performing arts / entertainment industry affiliation confirmed."
        });
      } else if (situation.industry === "UNKNOWN" || situation.industry === undefined) {
        traces.push({
          conditionId: "ecf-industry",
          label: "Performing Arts / Entertainment Career",
          requiredFactKey: "industry",
          resolution: "UNKNOWN",
          survivorFactValue: situation.industry,
          auditExplanation: "Requires performing arts or entertainment industry career; sector unknown."
        });
      } else {
        traces.push({
          conditionId: "ecf-industry",
          label: "Performing Arts / Entertainment Career",
          requiredFactKey: "industry",
          resolution: "FAILED",
          survivorFactValue: situation.industry,
          auditExplanation: `Program is restricted to performing arts and entertainment workers; survivor is in ${situation.industry}.`
        });
      }
      break;
    }

    case "irs-innocent-spouse-relief": {
      if (situation.jointTaxLiabilityCoercion === true || situation.hasCoercedTaxDebt === true) {
        traces.push({
          conditionId: "tax-coercion",
          label: "Coerced Joint Tax Liability",
          requiredFactKey: "jointTaxLiabilityCoercion",
          resolution: "CONFIRMED",
          survivorFactValue: true,
          auditExplanation: "Joint tax return filing and coerced tax liability confirmed."
        });
      } else if (situation.jointTaxLiabilityCoercion === "UNKNOWN" || situation.jointTaxLiabilityCoercion === undefined) {
        traces.push({
          conditionId: "tax-coercion",
          label: "Coerced Joint Tax Liability",
          requiredFactKey: "jointTaxLiabilityCoercion",
          resolution: "UNKNOWN",
          survivorFactValue: situation.jointTaxLiabilityCoercion,
          auditExplanation: "Requires joint tax return liability resulting from spouse abuse or erroneous items; status unknown."
        });
      } else {
        traces.push({
          conditionId: "tax-coercion",
          label: "Coerced Joint Tax Liability",
          requiredFactKey: "jointTaxLiabilityCoercion",
          resolution: "FAILED",
          survivorFactValue: false,
          auditExplanation: "Innocent spouse relief applies only to erroneous items or unpaid taxes from joint tax returns."
        });
      }
      break;
    }
  }

  // Compute Overall Dimensions from condition traces
  const hasFailed = traces.some((t) => t.resolution === "FAILED");
  const hasUnknown = traces.some((t) => t.resolution === "UNKNOWN");
  const confirmedTraces = traces.filter((t) => t.resolution === "CONFIRMED");

  let eligibilityStatus: EligibilityStatus;
  if (hasFailed) {
    eligibilityStatus = "FAILED";
  } else if (hasUnknown) {
    eligibilityStatus = "POSSIBLE";
  } else {
    eligibilityStatus = "CONFIRMED";
  }

  // 5. Readiness Status Evaluation
  let readinessStatus: ReadinessStatus = "READY";
  if (missingDocumentation.length > 0) {
    readinessStatus = "MISSING_DOCUMENTATION";
  } else if (hasUnknown) {
    readinessStatus = "MISSING_INFORMATION";
  } else if (resource.resourceType === "DIRECTORY" || resource.resourceType === "SELF_SERVICE_TOOL") {
    readinessStatus = "NOT_APPLICABLE";
  }

  // 6. Route Tier and Match Category Determination
  let matchCategory: MatchCategory;
  let routeTier: RouteTier;
  let auditReason: string;

  const confirmedFacts = confirmedTraces.map((t) => `${t.label}: ${t.auditExplanation}`);
  const unknownFacts = traces.filter((t) => t.resolution === "UNKNOWN").map((t) => `${t.label} (${t.auditExplanation})`);
  const failedBlockers = traces.filter((t) => t.resolution === "FAILED").map((t) => `${t.label}: ${t.auditExplanation}`);

  if (applicabilityStatus === "FAILED" || eligibilityStatus === "FAILED") {
    matchCategory = "BLOCKED";
    routeTier = "BLOCKED";
    auditReason = `Disqualified by condition(s): ${failedBlockers.join("; ")}`;
  } else if (applicabilityStatus === "POSSIBLE" || eligibilityStatus === "POSSIBLE" || readinessStatus === "MISSING_INFORMATION") {
    matchCategory = "POSSIBLE_MATCH";
    routeTier = "POSSIBLE_ROUTE";
    auditReason = `Potential match pending clarification of ${unknownFacts.length} unknown fact(s).`;
  } else {
    matchCategory = "CONFIRMED_MATCH";
    if (availabilityStatus === "CONDITIONAL" || availabilityStatus === "UNKNOWN") {
      routeTier = "CONDITIONAL_ROUTE";
      auditReason = `All mandatory qualifications confirmed; program operates under ${availabilityStatus.toLowerCase()} parameters.`;
    } else {
      routeTier = "STRONG_ROUTE";
      auditReason = "All mandatory eligibility criteria, jurisdiction, and prerequisites confirmed from verified facts.";
    }
  }

  return {
    resourceId: resource.id,
    resourceName: resource.name,
    resourceType: resource.resourceType,
    scope: resource.scope,
    relevanceStatus: "RELEVANT",
    relevanceReasonCode: relevance.reasonCode,
    relevanceReason: relevance.reasonExplanation,
    applicabilityStatus,
    eligibilityStatus,
    readinessStatus,
    availabilityStatus,
    routeTier,
    matchCategory,
    conditionTraces: traces,
    confirmedFacts,
    unknownFacts,
    failedBlockers,
    missingDocumentation,
    auditReason
  };
}

/**
 * Detect Catalog Gaps for unaddressed primary needs.
 */
function identifyCatalogGaps(
  situation: SurvivorSituation,
  matchedTraces: ResourceQualificationTrace[]
): CatalogGap[] {
  const gaps: CatalogGap[] = [];
  const coveredBarriers = new Set<string>();

  matchedTraces.forEach((t) => {
    if (t.matchCategory === "CONFIRMED_MATCH" || t.matchCategory === "POSSIBLE_MATCH") {
      const res = ALL_RESOURCES.find((r) => r.id === t.resourceId);
      res?.barrierCategories?.forEach((b) => coveredBarriers.add(b.toLowerCase()));
    }
  });

  situation.primaryNeeds?.forEach((need) => {
    const needLower = need.toLowerCase();
    const isCovered = Array.from(coveredBarriers).some((cb) => cb.includes(needLower) || needLower.includes(cb));

    if (!isCovered) {
      if (needLower.includes("vehicle") || needLower.includes("car-repair") || needLower.includes("transportation-rural")) {
        gaps.push({
          gapId: `gap-transportation-${Date.now()}`,
          unmetNeedOrBarrier: need,
          situationContext: `Survivor needs emergency vehicle repair / transportation aid in ${situation.county || situation.state || 'local area'}.`,
          reasonUnmetInRegistry: "The 47-resource canonical registry contains Greyhound long-distance youth tickets and local rural micro-aid, but lacks a verified direct emergency vehicle repair / title loan redemption fund.",
          suggestedAlternativeStatutoryOrInstitutionalLevers: [
            "Texas CVC relocation moving expense coverage (if relocating due to violent crime)",
            "McKinney-Vento school district transportation routing (if dependent children enrolled in public school)",
            "Salvation Army Texas Service Extension travel assistance (if in qualifying rural Texas county)"
          ]
        });
      } else if (needLower.includes("childcare") || needLower.includes("custody-escort")) {
        gaps.push({
          gapId: `gap-childcare-${Date.now()}`,
          unmetNeedOrBarrier: need,
          situationContext: `Survivor requires immediate emergency childcare / child crisis aid with childrenCount: ${situation.childrenCount || 'unknown'}.`,
          reasonUnmetInRegistry: "The current registry contains domestic violence shelter crisis advocacy and McKinney-Vento educational continuity, but does not currently feature a verified standalone pro bono emergency childcare network.",
          suggestedAlternativeStatutoryOrInstitutionalLevers: [
            "McKinney-Vento Homeless Assistance Act enrollment and meal assistance through school district liaison",
            "Emergency local domestic violence shelter on-site child advocacy and counseling services"
          ]
        });
      } else if (needLower.includes("commercial-dispute") || needLower.includes("unrelated-contract")) {
        gaps.push({
          gapId: `gap-nonqualifying-${Date.now()}`,
          unmetNeedOrBarrier: need,
          situationContext: "Non-victimization civil commercial matter.",
          reasonUnmetInRegistry: "Maps With Teeth is strictly structured for trauma, crime victimization, and survivor safety routes; commercial non-victimization disputes are out of scope.",
          suggestedAlternativeStatutoryOrInstitutionalLevers: [
            "State bar lawyer referral service or standard civil small claims court"
          ]
        });
      } else {
        gaps.push({
          gapId: `gap-${needLower}-${Date.now()}`,
          unmetNeedOrBarrier: need,
          situationContext: `Unaddressed primary barrier: ${need}`,
          reasonUnmetInRegistry: `No active verified pathway in the 47-resource canonical registry matches '${need}' for this geographic/demographic profile.`,
          suggestedAlternativeStatutoryOrInstitutionalLevers: [
            "Local 211 / municipal emergency social service intake",
            "National Domestic Violence Hotline (1-800-799-SAFE) referral network"
          ]
        });
      }
    }
  });

  return gaps;
}

/**
 * Execute Deterministic Matching against the 47 Canonical Resources.
 */
export function matchSurvivorSituation(situation: SurvivorSituation): DeterministicMatchOutput {
  const evaluatedTraces: ResourceQualificationTrace[] = [];

  ALL_RESOURCES.forEach((resource) => {
    const trace = evaluateQualificationTrace(resource, situation);
    evaluatedTraces.push(trace);
  });

  const matchedRoutes: ContinuityReceipt[] = [];
  const possibleRoutes: ContinuityReceipt[] = [];
  const blockedRoutes: ContinuityReceipt[] = [];
  const unresolvedQualifications: { resourceId: string; missingFacts: string[] }[] = [];

  let confirmedCount = 0;
  let possibleCount = 0;
  let blockedCount = 0;
  let notRelevantCount = 0;

  evaluatedTraces.forEach((trace) => {
    const resource = ALL_RESOURCES.find((r) => r.id === trace.resourceId)!;

    if (trace.matchCategory === "NOT_RELEVANT") {
      notRelevantCount++;
      return;
    }

    const receipt = generateContinuityReceipt(resource, trace);

    if (trace.matchCategory === "CONFIRMED_MATCH") {
      confirmedCount++;
      matchedRoutes.push(receipt);
    } else if (trace.matchCategory === "POSSIBLE_MATCH") {
      possibleCount++;
      possibleRoutes.push(receipt);
      unresolvedQualifications.push({
        resourceId: trace.resourceId,
        missingFacts: trace.unknownFacts
      });
    } else if (trace.matchCategory === "BLOCKED") {
      blockedCount++;
      blockedRoutes.push(receipt);
    }
  });

  const catalogGaps = identifyCatalogGaps(situation, evaluatedTraces);

  return {
    situationId: situation.situationId || `situation-${Date.now()}`,
    evaluatedAt: new Date().toISOString(),
    totalEvaluatedResources: ALL_RESOURCES.length,
    matchedRoutes,
    possibleRoutes,
    blockedRoutes,
    unresolvedQualifications,
    catalogGaps,
    auditSummary: {
      confirmedCount,
      possibleCount,
      blockedCount,
      notRelevantCount,
      catalogGapCount: catalogGaps.length
    }
  };
}
