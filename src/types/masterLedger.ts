/**
 * MAPS WITH TEETH — MASTER RESOURCE RECONCILIATION LEDGER SCHEMA
 */

export type SourceOrigin =
  | "CURRENT_CATALOG"
  | "TEXAS_STATUTORY_RESEARCH"
  | "HISTORICAL_RESOURCE_RESEARCH"
  | "FIELD_LEAD"
  | "COMMUNITY_SUBMISSION"
  | "PARTNER_LEAD";

export type CoverageType =
  | "NATIONAL"
  | "STATE"
  | "COUNTY"
  | "CITY"
  | "INDUSTRY"
  | "EMPLOYER"
  | "UNION"
  | "SCHOOL"
  | "CONDITIONAL";

export type MasterLedgerStatus =
  | "PUBLISHED"
  | "VERIFIED_NEEDS_ENTRY"
  | "RESEARCHING"
  | "CONDITIONAL"
  | "PAUSED"
  | "FIELD_REPORTED_UNCONFIRMED"
  | "NEEDS_REVERIFICATION"
  | "STALE"
  | "TEMPORARILY_CLOSED"
  | "CLOSED"
  | "DUPLICATE"
  | "UNVERIFIABLE"
  | "NOT_CURRENTLY_ACCESSIBLE"
  | "PROGRAM_CONCEPT_NOT_RESOURCE";

export type MasterLedgerCategory =
  | "TRANSPORTATION_MOBILITY"
  | "EMPLOYMENT_INDUSTRY_RELIEF"
  | "MILITARY_VETERAN"
  | "HOUSING_PORTABILITY"
  | "MONEY_DEBT_IDENTITY"
  | "TELECOM_DIGITAL_SAFETY"
  | "IMMIGRATION_LEGAL_RIGHTS"
  | "PHYSICAL_RESTORATION"
  | "COMPANION_ANIMALS"
  | "HYPERLOCAL_MICRO_AID"
  | "PROGRAM_CONCEPT_GAP_INTERVENTION";

export interface MasterLedgerItem {
  id: string;
  canonicalName: string;
  provider: string | null;
  category: MasterLedgerCategory;
  categoryLabel: string;
  subcategory: string | null;

  sourceOrigin: SourceOrigin;
  coverageType: CoverageType;
  geography: string;

  currentStatus: MasterLedgerStatus;
  verificationTier: string;
  primarySource: string | null;
  lastVerified: string | null;

  existingPublicResourceId?: string | null;
  reasonNotPublished?: string | null;
  needsAction: boolean;

  // Preserved fields
  whyNotOrNotes: string;
  nextAction: string;
  isVerified: boolean;
  isLiveOnSite: boolean;

  // Legacy/UI convenience compatibility
  leadName?: string;
  status?: MasterLedgerStatus;
  targetAudienceOrGeography?: string;
  authoritativeSource?: string;
  nextResearchAction?: string;
  notes?: string;
}