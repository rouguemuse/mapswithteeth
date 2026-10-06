/**
 * MAPS WITH TEETH — DOMAIN: CONTINUITY INTERCHANGE SPECIFICATION
 * Minimal interoperable administrative event schema for cross-system continuity.
 *
 * This is NOT an API integration promise or automatic government data-exchange pipeline.
 * It is a minimal, portable administrative vocabulary and schema that can be generated,
 * retained, exported, acknowledged, or independently implemented across institutional boundaries.
 */

export type HandoffStatus =
  | "SENT"
  | "DELIVERY_CONFIRMED"
  | "RECEIPT_ACKNOWLEDGED"
  | "RESPONSIBILITY_ACCEPTED"
  | "DECLINED"
  | "REDIRECTED"
  | "UNKNOWN";

export type InterchangeReviewStatus =
  | "RECEIVED"
  | "ACCESSIBLE"
  | "REVIEWED"
  | "UNREVIEWED_REASON"
  | "UNAVAILABLE";

export type MaterialAvailabilityStatus =
  | "AVAILABLE"
  | "HELD_BY_THIRD_PARTY"
  | "RESTRICTED"
  | "UNAVAILABLE";

export type InterchangeEventType =
  | "TOUCHPOINT_RECORDED"
  | "MATERIAL_SUBMITTED"
  | "REFERRAL_DISPATCHED"
  | "REFERRAL_ACKNOWLEDGED"
  | "RESPONSIBILITY_TRANSFERRED"
  | "PRE_CLOSURE_AUDITED";

export interface MaterialManifestItem {
  label: string;
  source: string;
  sha256?: string; // Client-side SHA-256 digest where applicable
  availabilityStatus: MaterialAvailabilityStatus;
  reviewStatus?: InterchangeReviewStatus;
  omissionReason?: string;
}

export interface ContinuityInterchangeEvent {
  continuityId: string;
  matterId: string;
  relatedMatterIds?: string[]; // Preserves existence across silos without merging facts

  originatingEntity: {
    agencyName: string;
    departmentOrUnit?: string;
    roleOrHandlerId?: string;
    jurisdiction: string;
  };

  receivingEntity?: {
    agencyName: string;
    departmentOrUnit?: string;
    roleOrHandlerId?: string;
    jurisdiction: string;
  };

  eventType: InterchangeEventType;
  timestamp: string; // ISO 8601

  materialManifest: MaterialManifestItem[];

  handoffStatus: HandoffStatus;
  reviewStatus: InterchangeReviewStatus;

  nextAction?: string;
  nextDecisionOwner?: {
    agencyName: string;
    unitOrRole: string;
    targetDeadline?: string;
    acceptanceConfirmed: boolean;
  };

  followUpDate?: string; // ISO 8601 where applicable

  sourceOfRecord: "PARTICIPANT_HELD" | "AGENCY_INTAKE" | "ADVOCATE_ASSISTED" | "EXPORT_SPECIMEN";
  provenance: {
    creatorType: "PARTICIPANT" | "AGENCY_STAFF" | "PARTNER_NAVIGATOR";
    generatedAt: string;
    canonicalDigest?: string; // SHA-256 of canonical payload
  };
}

/**
 * Example specimen of a Continuity Interchange Event payload.
 */
export const SAMPLE_INTERCHANGE_EVENT: ContinuityInterchangeEvent = {
  continuityId: "MWT-CNT-2026-08842",
  matterId: "LE-2026-04192",
  relatedMatterIds: ["CPS-TX-88301", "DC-FAM-2026-0914"],
  originatingEntity: {
    agencyName: "Municipal Police Department",
    departmentOrUnit: "Victim Services Division",
    roleOrHandlerId: "Desk Intake Officer #412",
    jurisdiction: "Travis County, TX"
  },
  receivingEntity: {
    agencyName: "County District Attorney / Protective Order Division",
    departmentOrUnit: "Intake Screening Unit",
    jurisdiction: "Travis County, TX"
  },
  eventType: "REFERRAL_DISPATCHED",
  timestamp: "2026-10-06T14:30:00Z",
  materialManifest: [
    {
      label: "Offense Incident Narrative & Incident CAD Log",
      source: "Municipal Police RMS",
      sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      availabilityStatus: "AVAILABLE",
      reviewStatus: "REVIEWED"
    },
    {
      label: "Lease Agreement & § 92.016 Termination Notice Copy",
      source: "Participant Submitted",
      sha256: "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e",
      availabilityStatus: "AVAILABLE",
      reviewStatus: "RECEIVED"
    },
    {
      label: "911 Audio Dispatch Recordings (Cross-County)",
      source: "Adjacent County Sheriff",
      availabilityStatus: "HELD_BY_THIRD_PARTY",
      reviewStatus: "UNAVAILABLE",
      omissionReason: "Audio retention window expired at 90 days prior to formal request."
    }
  ],
  handoffStatus: "RECEIPT_ACKNOWLEDGED",
  reviewStatus: "REVIEWED",
  nextAction: "Evaluate qualifying statutory criteria for ex parte protective order under Tex. Fam. Code § 82.001.",
  nextDecisionOwner: {
    agencyName: "County District Attorney / Protective Order Division",
    unitOrRole: "Intake Screening Prosecutor",
    targetDeadline: "2026-10-08T17:00:00Z",
    acceptanceConfirmed: true
  },
  followUpDate: "2026-10-08T17:00:00Z",
  sourceOfRecord: "PARTICIPANT_HELD",
  provenance: {
    creatorType: "PARTICIPANT",
    generatedAt: "2026-10-06T14:30:00Z",
    canonicalDigest: "cbf574737f59d57b447dd020d5ad45a9094fe3d16ca0d8fbef4f85e4d1f2b604"
  }
};
