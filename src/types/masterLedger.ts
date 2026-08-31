/**
 * MAPS WITH TEETH — MASTER RESOURCE RECONCILIATION LEDGER SCHEMA
 */

export type SourceOrigin =
  | "current catalog"
  | "Texas statutory research"
  | "historical resource research"
  | "field lead"
  | "community submission"
  | "partner lead";

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
  | "TEMPORARILY_CLOSED"
  | "CLOSED"
  | "STALE"
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
  provider: string;
  category: MasterLedgerCategory;
  categoryLabel: string;
  subcategory: string;

  sourceOrigin: SourceOrigin;
  coverageType: CoverageType;
  geography: string;

  currentStatus: MasterLedgerStatus;
  verificationTier: string;
  primarySource: string;
  lastVerified: string;

  existingPublicResourceId?: string;
  reasonNotPublished?: string;
  nextResearchAction: string;
  notes: string;

  // Legacy/UI convenience compatibility
  leadName?: string;
  status?: MasterLedgerStatus;
  isVerified?: boolean;
  isLiveOnSite?: boolean;
  whyNotOrNotes?: string;
  nextAction?: string;
  targetAudienceOrGeography?: string;
  authoritativeSource?: string;
}