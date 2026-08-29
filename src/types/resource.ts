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
  | "VERIFIED CURRENT"
  | "LIKELY CURRENT — NEEDS REVIEW"
  | "LOCAL / FUNDING DEPENDENT"
  | "TEMPORARILY CLOSED"
  | "WAITLIST"
  | "HISTORICAL / DO NOT RELY ON"
  | "UNVERIFIED LEAD";

export interface Resource {
  id: string;
  name: string;
  organization: string;
  state: string; // 'TX' or 'US' or 2-letter state code
  county?: string;
  cities?: string[];
  scope: GeographicScope;
  availabilityBadge: AvailabilityBadge;
  website?: string;
  phone?: string;
  email?: string;
  applicationLink?: string;
  barrierCategories: string[];
  serviceCategories?: string[];
  matchTags: string[];
  whatItActuallyProvides: string;
  assistanceShapes: AssistanceShape[];
  paymentMethod: "SURVIVOR_DIRECT" | "VENDOR_DIRECT" | "NON_MONETARY_SERVICE" | "REIMBURSEMENT";
  typicalAmount?: string;
  eligibility: string;
  documentationRequired: string[];
  accessFrictions: AccessFriction[];
  isLead: boolean;
  industrySpecific?: string[];
  petSpecific?: boolean;
  childrenSpecific?: boolean;
  howToApply: string;
  expectedProcess?: string;
  sourceUrl: string;
  primaryAuthoritativeSource: string;
  secondarySourceUrl?: string;
  dateLastVerified: string;
  verificationStatus: VerificationStatus;
  notes?: string;
  importantLimitations?: string;
}

export interface ResourceMatch {
  resource: Resource;
  matchedTags: string[];
  matchReason: string;
  matchType: "LOCATION" | "WORK_HISTORY" | "PET" | "FAMILY" | "TRANSPORTATION" | "BARRIER_EXPENSE" | "NATIONWIDE";
}
