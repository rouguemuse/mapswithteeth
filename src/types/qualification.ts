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

export type FactValueType = "boolean" | "select" | "number" | "multi_select" | "text";

export interface FactOption {
  value: string | number | boolean;
  label: string;
  sublabel?: string;
}

export interface FactDefinition {
  id: string; // The factKey (e.g. "hospitalityTenureMonths", "hasDependentChildren")
  label: string; // Human readable question
  sublabel?: string; // Contextual clarification
  type: FactValueType;
  options?: FactOption[];
  whyAsked: string; // Explanatory note for "Why are you asking me that?" tooltip
  category: "WORK" | "FAMILY" | "HOUSING" | "PETS" | "TELECOM" | "LEGAL" | "UTILITIES" | "GENERAL";
  placeholder?: string;
  defaultValue?: any;
}

export interface ResourceTrigger {
  fact: string;
  operator: CriterionOperator;
  value?: any;
  reason?: string;
}

export interface ResourceRequirement {
  fact: string;
  operator: CriterionOperator;
  value?: any;
  importance: "REQUIRED" | "SUPPORTING";
  label: string;
  sourceNote?: string;
  primarySourceUrl?: string;
  verificationDate?: string;
}

export interface ResourceExclusion {
  fact: string;
  operator: CriterionOperator;
  value?: any;
  label: string;
  reason: string;
}

export type MatchCertainty =
  | "LIKELY_MATCH"
  | "WORTH_CHECKING"
  | "NEEDS_INFORMATION"
  | "FILTERED_OUT";

export interface EvaluatedRequirementResult {
  requirement: ResourceRequirement;
  isSatisfied: boolean;
  isKnown: boolean;
  userValue: any;
  auditSentence?: string;
}

export interface EvaluatedExclusionResult {
  exclusion: ResourceExclusion;
  isDisqualified: boolean;
  userValue: any;
  disqualificationReason: string;
}

export interface EvaluatedResourceResult {
  resourceId: string;
  isTriggered: boolean;
  triggeringFacts: string[];
  matchCertainty: MatchCertainty;
  satisfiedRequirements: EvaluatedRequirementResult[];
  unresolvedRequirements: EvaluatedRequirementResult[];
  triggeredExclusions: EvaluatedExclusionResult[];
  auditSentences: string[];
  evidenceRequired: string[];
}
