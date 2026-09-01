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
