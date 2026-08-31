/**
 * MAPS WITH TEETH — DOMAIN: RESOURCE TYPES
 * Canonical type definitions for the Resource Graph.
 */

export type Scope =
  | "TEXAS_STATEWIDE"
  | "CENTRAL_TEXAS"
  | "NATIONWIDE"
  | "LOCAL"
  | "INDUSTRY_SPECIFIC"
  | "EMPLOYER_SPECIFIC"
  | "UNION_SPECIFIC"
  | "CAMPUS_SPECIFIC";

export type ResourceCategory =
  | "VICTIM_COMPENSATION"
  | "HOUSING"
  | "UTILITIES"
  | "EMPLOYMENT"
  | "LEGAL"
  | "CHILDCARE"
  | "HEALTHCARE"
  | "PETS"
  | "TRANSPORTATION"
  | "SPECIALIZED"
  | "TAXES"
  | "CRISIS_COUNSELING"
  | "INDUSTRY_EMERGENCY_FUNDS"
  | "PETS_AND_FAMILY"
  | "COMMUNICATIONS_AND_PRIVACY"
  | "TAXES_AND_LEGAL"
  | "MEDICAL_AND_DENTAL"
  | "EMERGENCY_FINANCIAL_AID"
  | "TRANSPORTATION_EMERGENCY_TRAVEL"
  | "HYPERLOCAL_MICRO_AID"
  | "LEGAL_PROTECTIONS"
  | "DIGITAL_DEVICE_SAFETY"
  | "HOTLINES_CRISIS_HOUSING"
  | "PHYSICAL_RESTORATION";

export type AssistanceShape =
  | "DIRECT_CASH"
  | "REIMBURSEMENT"
  | "VENDOR_PAYMENT"
  | "EXPEDITED_PROCESSING"
  | "LEGAL_SERVICE"
  | "LEGAL_INFORMATION"
  | "DOCUMENT_REPLACEMENT"
  | "UTILITY_DEPOSIT_WAIVER"
  | "UTILITY_PAYMENT"
  | "RENT"
  | "RENT_DEPOSIT"
  | "PET_DEPOSIT"
  | "PET_BOARDING"
  | "STORAGE"
  | "MOVING"
  | "TRANSPORTATION"
  | "MEDICAL"
  | "COUNSELING"
  | "SAFETY_EQUIPMENT"
  | "WAIVER"
  | "SURVIVOR_DIRECT"
  | "VENDOR_DIRECT"
  | "NON_MONETARY_SERVICE";

export type AccessFriction =
  | "POLICE_REPORT_REQUIRED"
  | "NO_POLICE_REPORT_REQUIRED"
  | "SHELTER_STAY_REQUIRED"
  | "NO_SHELTER_STAY_REQUIRED"
  | "ADVOCATE_REFERRAL_REQUIRED"
  | "INCOME_CAP"
  | "APPLICATION_REQUIRED"
  | "EMPLOYMENT_REQUIRED"
  | "SAME_DAY_POSSIBLE"
  | "WAITLIST_POSSIBLE"
  | "IDENTITY_DOCUMENTS"
  | "CHILDREN_REQUIRED"
  | "PET_REQUIRED"
  | "INDUSTRY_REQUIRED"
  | "UNION_MEMBERSHIP_REQUIRED"
  | "RESTRICTED_HOURS"
  | "IN_PERSON_ONLY"
  | "WALK_IN";

export type VerificationStatus =
  | "ACTIVE_VERIFIED"
  | "ACTIVE_PARTIALLY_VERIFIED"
  | "PAUSED"
  | "CONDITIONAL"
  | "FIELD_REPORTED_UNCONFIRMED"
  | "RESEARCHING"
  | "STALE"
  | "OFFICIAL_SOURCE_CHECKED"
  | "AGENCY_CONFIRMED"
  | "PUBLIC_SOURCE_CHECKED"
  | "TEMPORARILY_CLOSED"
  | "NEEDS_REVERIFICATION"
  | "CLOSED";

export type ClaimSupportLevel =
  | "DIRECTLY_SUPPORTED"
  | "PARTIALLY_SUPPORTED"
  | "INFERRED"
  | "UNVERIFIED";

export type EvidenceSourceType =
  | "PRIMARY_STATUTE"
  | "GOVERNMENT_PORTAL"
  | "OFFICIAL_PROVIDER_DOCUMENTATION"
  | "OFFICIAL_501C3_STANDARDS"
  | "MANUFACTURER_DOCUMENTATION"
  | "ACADEMIC_RESEARCH"
  | "AGENCY_STAFF"
  | "PUBLIC_AUDIT"
  | "501C3_STANDARDS";

export type VerificationMethod =
  | "DIRECT_AGENCY_INTERVIEW"
  | "OFFICIAL_GOVERNMENT_PORTAL"
  | "PRIMARY_STATUTE"
  | "OFFICIAL_PROVIDER_DOCUMENTATION"
  | "OFFICIAL_501C3_STANDARDS"
  | "MANUFACTURER_DOCUMENTATION"
  | "ACADEMIC_RESEARCH"
  | "PUBLIC_RECORD_AUDIT";

export interface ClaimEvidence {
  claimId: string;
  claim: string;
  sourceUrl: string;
  sourceTitle: string;
  sourcePublisher: string;
  sourceType: EvidenceSourceType;
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
  verificationMethod: VerificationMethod;
  sourceType: EvidenceSourceType;
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

export interface Resource {
  id: string;
  name: string;
  organization: string;
  state?: string;
  county?: string;
  geography: string;
  scope: Scope;
  category: ResourceCategory;
  barrierCategories: string[];
  matchTags: string[];

  // Core explanation
  whatItCanHelpWith: string;
  whatItActuallyProvides: string;
  assistanceShapes: AssistanceShape[];
  paymentMethod: PaymentMethod;
  typicalAmount?: string;
  knownFundingLimits?: string;

  // Real eligibility & documentation
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
  turnaroundTime?: string;
  discoveryLayer?: string;
  geographicScope?: string;
  discretionaryVariance?: string;
}

export type MatchCertainty = "LIKELY_MATCH" | "WORTH_CHECKING" | "NEEDS_INFORMATION" | "FILTERED_OUT";

export interface ResourceMatch {
  resource: Resource;
  matchedTags: string[];
  matchReason: string;
  matchCertainty: MatchCertainty;
  matchType?: string;
  auditSentences?: string[];
  triggeringFacts?: string[];
  evidenceRequired?: string[];
}
