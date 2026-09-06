import {
  ContinuityContactRecord,
  ContinuityContactRecordCanonicalPayload,
  MANDATORY_NON_IMPLICATION_CODES,
  PresentedMaterialItem,
  VerificationLevel,
} from "./types";
import { createCounterpartPair } from "./contactRecord";
import { SurvivorSituation } from "../intake/types";

export interface BuildContactRecordOptions {
  organizationName: string;
  departmentOrUnit?: string;
  intakeChannel?: "IN_PERSON" | "PHONE" | "ONLINE_PORTAL" | "EMAIL" | "WRITTEN_CORRESPONDENCE";
  incidentReferenceNumbers?: string[];
  presentedMaterials?: PresentedMaterialItem[];
  suggestedRouteTitle?: string;
  suggestedRouteReason?: string;
  verificationLevel?: VerificationLevel;
  situation?: SurvivorSituation;
}

/**
 * Builds a compliant ContinuityContactRecord counterpart pair adhering to the 12 institutional risk safeguards.
 */
export function buildContinuityContactRecord(
  options: BuildContactRecordOptions
): {
  participantCopy: ContinuityContactRecord;
  receivingOrganizationCopy: ContinuityContactRecord;
} {
  const timestamp = new Date().toISOString();
  const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
  const recordId = `CCR-${new Date().getFullYear()}-${randomSuffix}`;

  // Default presented materials based on situation if none explicitly provided
  const materials: PresentedMaterialItem[] = options.presentedMaterials || [];
  if (materials.length === 0 && options.situation) {
    if (options.situation.hasAdvocateVerificationLetter === true) {
      materials.push({
        itemId: "mat-advocate-letter",
        label: "Advocate Verification Letter (Family Violence / Sexual Assault)",
        itemType: "DOCUMENT",
        format: "DIGITAL_PDF",
        handlingStatus: "PRESENTED_NOT_ACCEPTED",
      });
    }
    if (options.situation.hasActiveLeaseInTexas === true) {
      materials.push({
        itemId: "mat-lease-agreement",
        label: "Residential Lease Agreement",
        itemType: "LEASE",
        format: "PHYSICAL_PAPER",
        handlingStatus: "PRESENTED_NOT_ACCEPTED",
      });
    }
    if (options.situation.policeReportFiled === true) {
      materials.push({
        itemId: "mat-police-incident",
        label: "Law Enforcement Incident / Report Documentation",
        itemType: "INCIDENT_REPORT",
        format: "PHYSICAL_PAPER",
        handlingStatus: "PRESENTED_NOT_ACCEPTED",
      });
    }
  }

  // Ensure at least one material item is present for standard demonstration
  if (materials.length === 0) {
    materials.push({
      itemId: "mat-intake-summary",
      label: "Self-Reported Resource Assessment & Qualification Summary",
      itemType: "CORRESPONDENCE",
      format: "DIGITAL_PDF",
      handlingStatus: "PRESENTED_NOT_ACCEPTED",
    });
  }

  const canonicalPayload: ContinuityContactRecordCanonicalPayload = {
    recordId,
    contactTimestamp: timestamp,
    organizationName: options.organizationName || "Service Provider / Agency Intake",
    departmentOrUnit: options.departmentOrUnit || "Intake & Assessment Office",
    intakeChannel: options.intakeChannel || "IN_PERSON",
    incidentReferenceNumbers: options.incidentReferenceNumbers || [],

    // 8 Segregated Dimensions
    presentedMaterials: materials,
    identityVerification: {
      status: "NOT_REQUESTED",
      notes: "Participant-held record; external identity verification not requested.",
    },
    jurisdictionScope: {
      status: "WITHIN_JURISDICTION",
      statedBoundaryOrRule: "Participant presented within operational geographic catchment area.",
      determinationTimestamp: timestamp,
    },
    substantiveAssessment: {
      status: "NOT_ASSESSED",
      notice: "A non-service or routing decision is never a merits finding.",
    },
    actionTaken: {
      actionCode: "INFORMATION_AND_REFERRAL_ONLY",
      actionDescription: "Intake context and lateral statutory qualification evaluation generated.",
    },
    declineOrRerouteReason: {
      reasonCode: "CAPACITY_CONSTRAINTS",
      summary: "Direct shelter beds or immediate slots unavailable; routing to lateral alternatives.",
    },
    suggestedNextRoute: options.suggestedRouteTitle
      ? {
          organizationName: options.suggestedRouteTitle,
          department: "Emergency Resource or Legal Statutory Application",
          suggestionSource: "VERIFIED_RESOURCE_GRAPH",
          acceptanceConfirmed: false, // Invariant: must default to false
        }
      : undefined,

    // Mandatory Governance Codes
    nonImplicationCodes: [...MANDATORY_NON_IMPLICATION_CODES],
  };

  const level = options.verificationLevel || "PARTICIPANT_RECORDED";
  return createCounterpartPair(level, canonicalPayload);
}
