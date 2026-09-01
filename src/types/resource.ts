import { ResourceTrigger, ResourceRequirement, ResourceExclusion } from "./qualification";

export type AssistanceShape =
  | "DIRECT_CASH"
  | "REIMBURSEMENT"
  | "VENDOR_PAYMENT"
  | "GAS_CARD"
  | "GROCERY_CARD"
  | "HOTEL_VOUCHER"
  | "BUS_TICKET"
  | "AIR_TRAVEL"
  | "RIDESHARE"
  | "FREE_VEHICLE"
  | "LOW_COST_VEHICLE"
  | "CAR_REPAIR"
  | "STORAGE"
  | "MOVING"
  | "PET_BOARDING"
  | "PET_FOSTER"
  | "PET_DEPOSIT"
  | "UTILITY_DEPOSIT_WAIVER"
  | "UTILITY_PAYMENT"
  | "RENT"
  | "RENT_DEPOSIT"
  | "LEGAL_SERVICE"
  | "LEGAL_INFORMATION"
  | "PHONE_LINE_SEPARATION"
  | "DEVICE_SAFETY"
  | "CREDIT_BUILDING"
  | "DEBT_ASSISTANCE"
  | "DOCUMENT_REPLACEMENT"
  | "FURNITURE"
  | "CHILDCARE"
  | "MEDICAL"
  | "DENTAL"
  | "COUNSELING"
  | "OTHER";

export type AccessFriction =
  | "ADVOCATE_REFERRAL_REQUIRED"
  | "POLICE_REPORT_REQUIRED"
  | "PROTECTIVE_ORDER_REQUIRED"
  | "APPLICATION_REQUIRED"
  | "INCOME_DOCUMENTATION"
  | "EMPLOYMENT_PROOF"
  | "IDENTITY_DOCUMENTS"
  | "WAITLIST_POSSIBLE"
  | "LIMITED_FUNDING"
  | "COUNTY_RESIDENCY"
  | "CALL_ONLY"
  | "ONLINE_APPLICATION"
  | "WALK_IN"
  | "SAME_DAY_POSSIBLE"
  | "NO_POLICE_REPORT_REQUIRED"
  | "NO_SHELTER_STAY_REQUIRED"
  | "DV_SHELTER_CONNECTION_REQUIRED";

export type GeographicScope =
  | "NATIONWIDE"
  | "SELECT_STATES"
  | "TEXAS_STATEWIDE"
  | "TEXAS_COUNTY"
  | "LOCAL";

export type AvailabilityBadge =
  | "NATIONWIDE"
  | "SELECT STATES"
  | "REFERRAL DEPENDENT"
  | "EMPLOYMENT DEPENDENT"
  | "PROFESSION DEPENDENT"
  | "LOCATION DEPENDENT"
  | "LOCAL PROGRAM — CHECK AVAILABILITY";

export type VerificationStatus =
  | "ACTIVE_VERIFIED"
  | "ACTIVE_PARTIALLY_VERIFIED"
  | "PAUSED"
  | "CONDITIONAL"
  | "FIELD_REPORTED_UNCONFIRMED"
  | "RESEARCHING"
  | "STALE"
  // Backwards compatibility aliases
  | "AGENCY_CONFIRMED"
  | "OFFICIAL_SOURCE_CHECKED"
  | "PUBLIC_SOURCE_CHECKED"
  | "TEMPORARILY_CLOSED"
  | "NEEDS_REVERIFICATION"
  | "CLOSED";

export type ClaimSupportLevel =
  | "DIRECTLY_SUPPORTED"
  | "PARTIALLY_SUPPORTED"
  | "INFERRED"
  | "UNVERIFIED";

export interface ClaimEvidence {
  claimId: string;
  claim: string;
  sourceUrl: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceType:
    | "PRIMARY_STATUTE"
    | "GOVERNMENT_PORTAL"
    | "501C3_STANDARDS"
    | "OFFICIAL_501C3_STANDARDS"
    | "OFFICIAL_PROVIDER_DOCUMENTATION"
    | "ACADEMIC_RESEARCH"
    | "ACADEMIC_PROJECT_SOURCE"
    | "OFFICIAL_TECHNICAL_DOCUMENTATION"
    | "MANUFACTURER_DOCUMENTATION"
    | "AGENCY_STAFF"
    | "PUBLIC_AUDIT";
  checkedAt: string;
  effectiveDateOrPublishedDate: string;
  sourceLocator: string;
  supportLevel: ClaimSupportLevel;
  quotedOrParaphrasedEvidence: string;
  reviewerNote?: string;
}

export interface ClaimProvenance {
  claim: string;
  primarySourceUrl: string;
  sourceExcerptOrSummary: string;
  verificationDate: string;
}

export interface VerificationProvenance {
  verificationDate: string;
  verificationMethod:
    | "DIRECT_AGENCY_INTERVIEW"
    | "OFFICIAL_GOVERNMENT_PORTAL"
    | "PRIMARY_STATUTE"
    | "OFFICIAL_501C3_STANDARDS"
    | "OFFICIAL_PROVIDER_DOCUMENTATION"
    | "ACADEMIC_RESEARCH"
    | "ACADEMIC_PROJECT_SOURCE"
    | "OFFICIAL_TECHNICAL_DOCUMENTATION"
    | "MANUFACTURER_DOCUMENTATION"
    | "PUBLIC_RECORD_AUDIT";
  sourceType:
    | "AGENCY_STAFF"
    | "PRIMARY_STATUTE"
    | "GOVERNMENT_PORTAL"
    | "501C3_STANDARDS"
    | "OFFICIAL_501C3_STANDARDS"
    | "OFFICIAL_PROVIDER_DOCUMENTATION"
    | "ACADEMIC_RESEARCH"
    | "ACADEMIC_PROJECT_SOURCE"
    | "OFFICIAL_TECHNICAL_DOCUMENTATION"
    | "MANUFACTURER_DOCUMENTATION"
    | "PUBLIC_AUDIT";
  confirmingEntity: string;
  confirmingRole?: string;
  criteriaConfirmed: string[];
  verificationNotes: string;
  nextScheduledReviewDate: string;
  claimEvidences?: ClaimEvidence[];
}

export type PaymentMethod =
  | "DIRECT_TO_APPLICANT"
  | "DIRECT_TO_VENDOR"
  | "STATUTORY_RIGHT"
  | "SERVICE_DIRECT"
  | "WAIVER"
  | "REIMBURSEMENT"
  | "SURVIVOR_DIRECT"
  | "VENDOR_DIRECT"
  | "NON_MONETARY_SERVICE";

export type CriterionType = "REQUIRED" | "SUPPORTING" | "EXCLUSIONARY" | "UNKNOWN";
export type CriterionStatus = "VERIFIED" | "NEEDS_REVIEW" | "STALE";
export type CriterionOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "IN"
  | "NOT_IN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "BOOLEAN_TRUE"
  | "BOOLEAN_FALSE"
  | "CONTAINS"
  | "EXISTS";

export interface ResourceEligibilityCriterion {
  criterionId: string;
  factKey: string;
  label: string;
  operator: CriterionOperator;
  expectedValue?: any;
  criterionType: CriterionType;
  primarySourceUrl: string;
  verificationDate: string;
  sourceNote: string;
  status: CriterionStatus;
  caveats?: string;
}

export type ResourceType =
  | "STATUTORY_RIGHT"
  | "DIRECT_SERVICE"
  | "FINANCIAL_ASSISTANCE"
  | "REFERRAL_NETWORK"
  | "DIRECTORY"
  | "SELF_SERVICE_TOOL"
  | "INFORMATION_ROUTE";

export type MatchCertainty =
  | "LIKELY_MATCH"
  | "WORTH_CHECKING"
  | "NEEDS_INFORMATION"
  | "FILTERED_OUT";

export interface EvaluatedCriterion {
  criterion: ResourceEligibilityCriterion;
  isSatisfied: boolean;
  isKnown: boolean;
  isExclusionaryTriggered: boolean;
  userFactValue: any;
  auditExplanation: string;
}

export interface Resource {
  id: string;
  name: string;
  organization: string;
  resourceType?: ResourceType;
  state: string; // 'TX' or 'US' or 2-letter state code
  county?: string;
  cities?: string[];
  geography?: string;
  scope: GeographicScope;
  availabilityBadge?: AvailabilityBadge;
  website?: string;
  phone?: string;
  email?: string;
  applicationLink?: string;
  barrierCategories: string[];
  serviceCategories?: string[];
  category?: string;
  matchTags: string[];

  // 4 Core Resource-Driven Qualification Concepts
  triggers?: ResourceTrigger[];
  requirements?: ResourceRequirement[];
  exclusions?: ResourceExclusion[];
  evidenceRequired?: string[];

  // Structured Deterministic Eligibility Criteria (legacy / helper)
  eligibilityCriteria?: ResourceEligibilityCriterion[];
  qualifierFamily?: string;

  // What it can actually help pay for or accomplish
  whatItCanHelpWith: string;
  whatItActuallyProvides: string;
  assistanceShapes: AssistanceShape[];

  // Financial mechanics & limits
  paymentMethod: PaymentMethod;
  typicalAmount?: string;
  knownFundingLimits?: string;

  // Eligibility & Target User
  eligibility: string;
  documentationRequired: string[];
  referralRequirement?: string;
  shelterConnectionRequired?: boolean;
  policeReportRequired?: boolean;
  incomeRestriction?: string;
  employmentDependency?: string;
  applicationWindow?: string;

  // Prominently exposed friction / THE CATCH
  whatCanBlockAccess: string[];
  accessFrictions: AccessFriction[];

  // Action steps
  whatToDoNext: string;
  howToApply: string;
  expectedProcess?: string;

  // Source & Verification Audit Trail
  sourceUrl: string;
  primaryAuthoritativeSource: string;
  secondarySourceUrl?: string;
  lastReviewedDate: string;
  dateLastVerified: string;
  verificationStatus: VerificationStatus;
  provenance?: VerificationProvenance;
  claimProvenances?: ClaimProvenance[];
  claimEvidences?: ClaimEvidence[];
  isLead?: boolean;

  // Statutory Rights & Closures
  isStatutoryRight?: boolean;
  statuteCitation?: string;
  reopeningDate?: string;

  notes?: string;
  importantLimitations?: string;
  industrySpecific?: string[];
  petSpecific?: boolean;
  childrenSpecific?: boolean;

  // Dense Operational Intelligence Fields
  whyMissed?: string;
  workaround?: string;
  accessNotes?: string;
  whatToAsk?: string;
  whatToDoIfDenied?: string;
  responseTime?: string;
  occupationRequirements?: string[];
  tenureRequirements?: string;
  badgeLabels?: string[];
  matchCertainty?: MatchCertainty;
}

export interface ResourceMatch {
  resource: Resource;
  matchedTags: string[];
  matchReason: string;
  matchCertainty: MatchCertainty;
  matchType: "LOCATION" | "WORK_HISTORY" | "PET" | "FAMILY" | "TRANSPORTATION" | "BARRIER_EXPENSE" | "NATIONWIDE";
  evaluatedCriteria?: EvaluatedCriterion[];
  satisfiedCriteria?: EvaluatedCriterion[];
  unansweredCriteria?: EvaluatedCriterion[];
  exclusionaryCriteria?: EvaluatedCriterion[];
  auditSentences?: string[];
  triggeringFacts?: string[];
  evidenceRequired?: string[];
}
