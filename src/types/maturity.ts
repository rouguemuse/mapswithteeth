/**
 * MAPS WITH TEETH — PRODUCT MATURITY & VERIFICATION SINGLE SOURCE OF TRUTH (SSOT)
 * 
 * Defines standardized lifecycle stages, verification tiers, and roadmap maturity.
 */

export type ProductLifecycleStatus =
  | "LIVE"
  | "ACTIVE_RESEARCH"
  | "PILOT"
  | "PROTOTYPE"
  | "PLANNED";

export type ResearchVerificationTier =
  | "AGENCY_CONFIRMED"
  | "OFFICIAL_SOURCE_CHECKED"
  | "PUBLIC_SOURCE_CHECKED"
  | "TEMPORARILY_CLOSED"
  | "NEEDS_REVERIFICATION"
  | "CLOSED";

export interface MaturityStageDefinition {
  stageId: string;
  stageCode: string;
  title: string;
  shortName: string;
  status: ProductLifecycleStatus;
  statusLabel: string;
  timestamp: string;
  description: string;
  deliverables: string[];
  operationalScope: string;
}