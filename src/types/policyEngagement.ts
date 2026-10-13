/**
 * Policy Engagement & Oversight Tracking Types
 *
 * Distinct from the canonical 9-status operational Review Trace (which governs
 * casework intake handling). These engagement statuses track institutional policy
 * submissions, legislative proposals, and administrative oversight filings.
 */

export type EngagementTrackingStatus =
  | "PROPOSAL_DRAFTED"
  | "SUBMITTED"
  | "RECEIPT_ACKNOWLEDGED"
  | "UNDER_REVIEW"
  | "RESPONSE_RECEIVED"
  | "OUTCOME_DOCUMENTED"
  | "UNRESOLVED_OR_UNKNOWN";

export type AnalyticalDistinction =
  | "OBSERVED_EVENT"
  | "ADMINISTRATIVE_RESPONSE"
  | "WORKING_HYPOTHESIS"
  | "PROPOSED_REFORM";

export interface PolicyEngagementRecord {
  id: string; // e.g., "POL-001", "POL-001A", "POL-002", "DFPS-OCA-2026"
  title: string;
  shortTitle: string;
  category: "SUNSET_REVIEW" | "LEGISLATIVE_BRIEF" | "ADMINISTRATIVE_OVERSIGHT" | "PILOT_SPECIFICATION";
  targetEntity: string;
  targetRole: string;
  dateDrafted: string;
  dateSubmitted?: string;
  status: EngagementTrackingStatus;
  statusDetails: string;
  verifiedOutcome: string;
  sourceCitation: string;
  officialReferenceUrl?: string;
  confidentialityBoundary: string;
  keyProposals: string[];
}

export interface OversightFailurePattern {
  id: string;
  name: string;
  tagline: string;
  observedEvent: string;
  administrativeResponse: string;
  workingHypothesis: string;
  proposedReform: string;
  relevantModules: string[];
  reviewTraceImplication: string;
}

export interface SyntheticApplicationScenario {
  id: string;
  title: string;
  scenarioType:
    | "UNACKNOWLEDGED_REFERRAL"
    | "MULTI_INSTITUTION_CLOSURE"
    | "POST_CLOSURE_SUPPLEMENTAL_EVIDENCE"
    | "CROSS_JURISDICTION_HANDOFF";
  problemDescription: string;
  participatingEntities: string[];
  withoutContinuity: string[];
  withContinuityReceipt: {
    participantView: string;
    reviewTraceStatus: string;
    decisionOwnerBound: string;
    auditTrailPreserved: string;
  };
  keyTakeaway: string;
}
