import { SurvivorSituation } from "../intake/types";
import { Resource, ResourceType } from "@/types/resource";
import {
  MatchCategory,
  RouteTier,
  RelevanceStatus,
  ApplicabilityStatus,
  EligibilityStatus,
  ReadinessStatus,
  AvailabilityStatus,
  RelevanceReasonCode
} from "../continuity/types";

export type ConditionResolution = "CONFIRMED" | "UNKNOWN" | "FAILED" | "NOT_APPLICABLE";

export interface QualificationConditionTrace {
  conditionId: string;
  label: string;
  requiredFactKey: string;
  resolution: ConditionResolution;
  survivorFactValue: any;
  auditExplanation: string;
}

export interface ResourceQualificationTrace {
  resourceId: string;
  resourceName: string;
  resourceType?: ResourceType;
  scope: string;
  relevanceStatus: RelevanceStatus;
  relevanceReasonCode: RelevanceReasonCode;
  relevanceReason: string;
  applicabilityStatus: ApplicabilityStatus;
  eligibilityStatus: EligibilityStatus;
  readinessStatus: ReadinessStatus;
  availabilityStatus: AvailabilityStatus;
  routeTier: RouteTier;
  matchCategory: MatchCategory;
  conditionTraces: QualificationConditionTrace[];
  confirmedFacts: string[];
  unknownFacts: string[];
  failedBlockers: string[];
  missingDocumentation: string[];
  auditReason: string;
}

export interface DeterministicEvaluationContext {
  situation: SurvivorSituation;
  allCanonicalResources: Resource[];
}
