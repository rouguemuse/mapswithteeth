import { ResearchDocket } from "../intake/types";
import { ResourceType } from "@/types/resource";

export type RelevanceStatus = "RELEVANT" | "NOT_RELEVANT";
export type ApplicabilityStatus = "CONFIRMED" | "POSSIBLE" | "FAILED" | "NOT_APPLICABLE";
export type EligibilityStatus = "CONFIRMED" | "POSSIBLE" | "FAILED" | "NOT_APPLICABLE";
export type ReadinessStatus = "READY" | "MISSING_INFORMATION" | "MISSING_DOCUMENTATION" | "NOT_APPLICABLE";
export type AvailabilityStatus = "CONFIRMED_AVAILABLE" | "CONDITIONAL" | "UNKNOWN" | "CLOSED" | "NOT_APPLICABLE";

export type RelevanceReasonCode =
  | "RELEVANCE_EXPLICIT_NEED"
  | "RELEVANCE_CONTEXTUAL_TRIGGER"
  | "RELEVANCE_STATUTORY_TRIGGER"
  | "RELEVANCE_NOT_ESTABLISHED";

export type RouteTier =
  | "STRONG_ROUTE"
  | "POSSIBLE_ROUTE"
  | "CONDITIONAL_ROUTE"
  | "BLOCKED";

export type MatchCategory =
  | "CONFIRMED_MATCH"
  | "POSSIBLE_MATCH"
  | "BLOCKED"
  | "NOT_RELEVANT";

export interface ContinuityReceipt {
  receiptId: string;
  generatedAt: string;
  resourceId: string;
  resourceName: string;
  resourceType?: ResourceType;
  provider: string;
  relevanceStatus: RelevanceStatus;
  relevanceReasonCode: RelevanceReasonCode;
  applicabilityStatus: ApplicabilityStatus;
  eligibilityStatus: EligibilityStatus;
  readinessStatus: ReadinessStatus;
  availabilityStatus: AvailabilityStatus;
  routeTier: RouteTier;
  matchCategory: MatchCategory;
  whyThisMayHelp: string;
  confirmedFacts: string[];
  unknownFacts: string[];
  knownBlockers: string[];
  documentsToGather: string[];
  nextAction: string;
  contactMethod: string;
  handoffDestination: string;
  whatToSayOrAsk: string;
  followUpCheckpoint: string;
  sourceReferences: {
    sourceTitle: string;
    sourceUrl: string;
    sourceLocator: string;
    lastReviewed: string;
    semanticReviewStatus: "DIRECTLY_SUPPORTED" | "PARTIALLY_SUPPORTED" | "INFERRED" | "UNVERIFIED";
  };
}

export interface CatalogGap {
  gapId: string;
  unmetNeedOrBarrier: string;
  situationContext: string;
  reasonUnmetInRegistry: string;
  suggestedAlternativeStatutoryOrInstitutionalLevers: string[];
}

export interface DeterministicMatchOutput {
  situationId: string;
  evaluatedAt: string;
  totalEvaluatedResources: number;
  matchedRoutes: ContinuityReceipt[];
  possibleRoutes: ContinuityReceipt[];
  blockedRoutes: ContinuityReceipt[];
  unresolvedQualifications: { resourceId: string; missingFacts: string[] }[];
  catalogGaps: CatalogGap[];
  auditSummary: {
    confirmedCount: number;
    possibleCount: number;
    blockedCount: number;
    notRelevantCount: number;
    catalogGapCount: number;
  };
}

export interface ContinuityHandoffPackage {
  packageId: string;
  generatedAt: string;
  docket: ResearchDocket;
  matchedRoutes: ContinuityReceipt[];
  catalogGaps: CatalogGap[];
  privacyNotice: string;
}

// ============================================================================
// CONTINUITY CONTACT RECORD (STAGE 03 CORE SPECIFICATION)
// Institutional & Legal Risk Architecture
// ============================================================================

export type VerificationLevel =
  | "PARTICIPANT_RECORDED"
  | "AGENCY_ACKNOWLEDGED"
  | "PARTNER_ROLE_VERIFIED";

export type NonImplicationCode =
  | "NO_SUBSTANTIATION_FINDING"
  | "NO_EVIDENCE_AUTHENTICATION"
  | "NO_WHOLE_MATTER_ACCEPTANCE"
  | "NO_MAPS_INTERPRETATION_ENDORSEMENT"
  | "NO_ROUTING_AS_MERITS_FINDING";

export const MANDATORY_NON_IMPLICATION_CODES: readonly NonImplicationCode[] = [
  "NO_SUBSTANTIATION_FINDING",
  "NO_EVIDENCE_AUTHENTICATION",
  "NO_WHOLE_MATTER_ACCEPTANCE",
  "NO_MAPS_INTERPRETATION_ENDORSEMENT",
  "NO_ROUTING_AS_MERITS_FINDING",
] as const;

export type SubstantiveAssessmentStatus =
  | "NOT_ASSESSED"
  | "ASSESSMENT_PENDING_OUTSIDE_THIS_RECORD"
  | "SEPARATE_OFFICIAL_DECISION_REFERENCED";

export type MaterialHandlingStatus =
  | "PRESENTED_NOT_ACCEPTED"
  | "ACCEPTED_INTO_CUSTODY"
  | "OPENED_NOT_ASSESSED"
  | "PARTIALLY_REVIEWED_FOR_ROUTING"
  | "REVIEWED_FOR_ROUTING"
  | "SUBSTANTIVE_REVIEW_OCCURS_SEPARATELY"
  | "STATUS_UNKNOWN";

export type ActorType = "PARTICIPANT" | "AGENCY_STAFF" | "PARTNER_STAFF" | "SYSTEM";
export type SourceType = "PARTICIPANT_ENTRY" | "AGENCY_ACKNOWLEDGMENT" | "SYSTEM_GENERATED";

export interface PresentedMaterialItem {
  itemId: string;
  label: string;
  itemType: "DOCUMENT" | "CORRESPONDENCE" | "LEASE" | "INCIDENT_REPORT" | "ID_DOCUMENT" | "OTHER";
  pageOrFileCount?: number;
  format: "PHYSICAL_PAPER" | "DIGITAL_IMAGE" | "DIGITAL_PDF" | "VERBAL_STATEMENT" | "OTHER";
  handlingStatus: MaterialHandlingStatus;
  handlingNotes?: string;

  // WHAT, WHO, HOW, WHEN Attribution & Provenance
  recordedByActorType: ActorType;
  recordedByActorId?: string; // or display attribution
  recordedAt: string;
  verificationLevel: VerificationLevel;
  statusBasis?: string;
  sourceType: SourceType;
}

export type IdentityVerificationStatus =
  | "UNVERIFIED"
  | "GOVERNMENT_PHOTO_ID_INSPECTED"
  | "ADVOCATE_ATTESTED"
  | "NOT_REQUESTED";

export type JurisdictionScopeStatus =
  | "WITHIN_JURISDICTION"
  | "OUT_OF_GEOGRAPHIC_SCOPE"
  | "SUBJECT_MATTER_EXCLUDED"
  | "PROGRAM_CAPACITY_EXHAUSTED"
  | "PENDING_THRESHOLD_REVIEW";

export interface JurisdictionScopeDetermination {
  status: JurisdictionScopeStatus;
  scopeBasisCode?: string;
  statedBoundaryOrRule?: string;
  determinationTimestamp: string;
}

export type HandoffOutcomeStatus =
  | "ACCEPTED"
  | "DECLINED"
  | "PENDING"
  | "NOT_CONFIRMED"
  | "NOT_APPLICABLE"
  | "STATUS_UNKNOWN";

export type CitationSource = "AGENCY_SOURCE" | "MAPS_REFERENCE";

export interface SuggestedNextRoute {
  organizationName?: string;
  department?: string;
  contactMethod?: string;
  suggestionSource:
    | "RECEIVING_ORGANIZATION"
    | "VERIFIED_RESOURCE_GRAPH"
    | "PARTICIPANT_RECORDED";
  handoffOutcome: HandoffOutcomeStatus; // defaults to NOT_CONFIRMED
  citation?: {
    sourceUrl: string;
    verifiedAt: string;
    suppliedBy: CitationSource;
    statutoryReference?: string | "NOT_PROVIDED";
  };
  deadline?: {
    date: string | "NOT_PROVIDED";
    source: string;
    legalAdviceDisclaimerShown: true;
  };
}

export type AgencyAcknowledgmentStatus =
  | "NOT_REQUESTED"
  | "REQUESTED_PENDING"
  | "ACKNOWLEDGED"
  | "DECLINED_TO_ACKNOWLEDGE"
  | "NO_RESPONSE"
  | "UNAVAILABLE";

export interface StaffAcknowledgmentBlock {
  status: AgencyAcknowledgmentStatus;
  isAcknowledged: boolean;
  declinedAcknowledgment: boolean;
  declineReasonStated?: string; // Optional; staff can decline without reason
  rightToDeclineAcknowledged: true;
  signerName?: string;
  signerRole?: string; // Required if acknowledged
  representedOrganization?: string; // Required if acknowledged
  acknowledgmentMethod?:
    | "IN_PERSON_MANUAL_STAMP"
    | "IN_PERSON_SIGNATURE"
    | "VERIFIED_DIGITAL_TOKEN"
    | "OFFICIAL_EMAIL_RECEIPT";
  authorizedToAcknowledgeOnBehalf: boolean;
  acknowledgedTimestamp?: string;
  affirmativelyAttestedItems: {
    confirmedMaterialReceipt: boolean;
    confirmedMaterialInspection: boolean;
    inspectedPagesOrFilesCount?: number;
    confirmedIdentityInspection: boolean;
    confirmedJurisdictionalReview: boolean;
    conductedMinisterialIntakeOnly: boolean;
  };
  capacityNotice: "OFFICIAL_ORGANIZATIONAL_CAPACITY_ONLY";
  cautiousLegalFrameworkNotice: string;
  addendumHistory?: {
    addendumId: string;
    timestamp: string;
    note: string;
    authorName: string;
    authorRole: string;
  }[];
}

export interface RecordCorrectionMetadata {
  recordVersion: number;
  supersedesRecordId?: string;
  correctionOfField?: string;
  correctionSubmittedBy?: string;
  correctionSubmittedAt?: string;
  correctionReason?: string;
  priorDigest?: string;
  newCanonicalDigest?: string;
}

export type ConfidentialityRegime =
  | "GENERAL_PRIVACY"
  | "VAWA_APPLICABLE"
  | "AGENCY_SPECIFIC"
  | "LEGAL_AID_PRIVILEGE_SENSITIVE"
  | "OTHER_RESTRICTED"
  | "TO_BE_REVIEWED";

export interface CounterpartMetadata {
  canonicalRecordDigest: string;
  digestAlgorithm: "SHA-256";
  canonicalizationVersion: string;
  copyDesignation: "PARTICIPANT_COPY" | "RECEIVING_ORGANIZATION_COPY";
}

/**
 * Shared canonical payload that is hashed identically for both counterparts.
 * Excludes counterpart labels, detailed trauma narratives, evidence attachments,
 * child PII, safe shelter addresses, and device security secrets.
 */
export interface ContinuityContactRecordCanonicalPayload {
  recordId: string;
  contactTimestamp: string;
  organizationName: string;
  departmentOrUnit?: string;
  intakeChannel: "IN_PERSON" | "PHONE" | "ONLINE_PORTAL" | "EMAIL" | "WRITTEN_CORRESPONDENCE";
  incidentReferenceNumbers: string[]; // e.g. CAD log, report #, confirmation code
  
  // The 8 Segregated Dimensions
  presentedMaterials: PresentedMaterialItem[];
  identityVerification: {
    status: IdentityVerificationStatus;
    notes?: string;
  };
  jurisdictionScope: JurisdictionScopeDetermination;
  substantiveAssessment: {
    status: SubstantiveAssessmentStatus;
    externalOfficialCaseNumber?: string;
    notice: "A non-service or routing decision is never a merits finding.";
  };
  actionTaken: {
    actionCode:
      | "INTAKE_RECORD_CREATED"
      | "SAFETY_PLAN_PROVIDED"
      | "STATUTORY_NOTICE_SERVED"
      | "EMERGENCY_REKEY_DISPATCHED"
      | "INFORMATION_AND_REFERRAL_ONLY"
      | "DECLINED_AT_INTAKE"
      | "FORMAL_WRITTEN_DECLINATION_ISSUED";
    actionDescription: string;
  };
  declineOrRerouteReason?: {
    reasonCode: string;
    summary: string;
  };
  suggestedNextRoute?: SuggestedNextRoute;

  // The 5 Inviolable Non-Implication Notices
  nonImplicationCodes: NonImplicationCode[];

  // Agency Acknowledgment status lifecycle
  acknowledgmentStatus: AgencyAcknowledgmentStatus;

  // Staff acknowledgment block (optional; null if participant-recorded only)
  acknowledgment?: StaffAcknowledgmentBlock;

  // Versioning & Corrections
  correctionMetadata?: RecordCorrectionMetadata;

  // Confidentiality Regime Gate
  confidentialityRegime?: ConfidentialityRegime;
}

export interface ContinuityContactRecord {
  verificationLevel: VerificationLevel;
  counterpart: CounterpartMetadata;
  payload: ContinuityContactRecordCanonicalPayload;
  
  // Explicit calibrated digest explanation
  digestNotice: string;

  // Public Agency Retention & Discovery Warning
  publicAgencyWarning: string;
}

/**
 * Standalone, decoupled Disclosure Authorization.
 * Consent is NEVER buried inside the Continuity Contact Record.
 */
export interface ParticipantDisclosureAuthorization {
  authorizationId: string;
  authorizedAt: string;
  participantId: string;
  targetOrganizationName: string;
  recipientDepartmentOrRole?: string;
  authorizedScope: {
    allowContactRecordSharing: boolean;
    allowIncidentNumbersSharing: boolean;
    allowPresentedMaterialInventorySharing: boolean;
    allowNextRouteSharing: boolean;
    explicitlyExcludedFields: string[]; // e.g. ["narrative", "evidence_files", "children_pii", "safe_address"]
  };
  purposeOfDisclosure: string; // e.g., "Facilitate emergency shelter intake"
  expirationDate: string; // reasonably time-limited
  isRevoked: boolean;
  revocationNotice: {
    honestBoundaryText: string;
    revocationTimestamp?: string;
    revocationMethod?: string;
  };
}


