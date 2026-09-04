/**
 * MAPS WITH TEETH — DOMAIN: INTAKE FACT RECONCILIATION TYPES
 * Structured fact evidence, provenance, and conflict resolution model.
 */

import { SurvivorSituation, Unknownable } from "../types";

export type EvidenceStrength = "DIRECT" | "INDIRECT" | "DERIVED" | "RESOLVED";
export type EvidenceSourceSection = "needs" | "location" | "context_questions" | "clarification";

export interface FactEvidence<T = any> {
  factKey: keyof SurvivorSituation;
  value: T;
  sourceQuestionId?: string;
  sourceNeedId?: string;
  sourceSection: EvidenceSourceSection;
  strength: EvidenceStrength;
  rawLabel?: string;
  timestamp: number;
}

export type ResolutionStatus =
  | "RESOLVED"
  | "COMPATIBLE_MERGED"
  | "DIRECT_OVERRIDE"
  | "CONFLICT"
  | "UNKNOWN";

export interface ClarificationOption {
  id: string;
  label: string;
  subtext?: string;
  resolvedValue: any;
  secondaryIndustries?: string[];
  secondaryValues?: Partial<SurvivorSituation>;
}

export interface ConflictClarificationPrompt {
  id: string;
  factKey: keyof SurvivorSituation;
  title: string;
  prompt: string;
  whyWeAsk: string;
  options: ClarificationOption[];
}

export interface FactResolution<T = any> {
  factKey: keyof SurvivorSituation;
  status: ResolutionStatus;
  resolvedValue: Unknownable<T>;
  candidates: T[];
  evidence: FactEvidence<T>[];
  conflictExplanation?: string;
  clarificationPrompt?: ConflictClarificationPrompt;
}

export interface ReconciliationOutput {
  reconciledSituation: SurvivorSituation;
  resolutions: Record<string, FactResolution<any>>;
  activeConflicts: FactResolution<any>[];
  hasBlockingConflicts: boolean;
  allEvidence: FactEvidence[];
}
