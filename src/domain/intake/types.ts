export interface ResourceIntakeData {
  primaryBarriers: string[];
  amountScale?: string;
  urgencyTimeline?: string;
  hasTransportationNeed?: boolean;
  hasShelterNeed?: boolean;
  hasRentDepositNeed?: boolean;
  hasUtilityNeed?: boolean;
  hasLegalNeed?: boolean;
  hasPetNeed?: boolean;
  hasChildcareNeed?: boolean;
  currentIndustry?: string;
  hospitalityWeeklyHours?: string;
  hospitalityTenureMonths?: string;
  hospitalityCrisisWithin6Mo?: boolean;
  hospitalityRecentWork90Days?: boolean;
  musicTenureYears?: string;
  musicCommercialReleases?: string;
  isVeteranOrMilitary?: boolean;
  isUnionMember?: boolean;
  unionName?: string;
  hasDependentChildren?: boolean;
  childEnrolledInPublicSchool?: boolean;
  childLacksFixedRegularNighttimeResidence?: boolean;
  hasAnimal?: boolean;
  fleeingWithPet?: boolean;
  connectedWithDVAdvocate?: boolean;
  sharedCellularPlan?: boolean;
  sharesMobileContractWithAbuser?: boolean;
  state?: string;
  county?: string;
  hasActiveLeaseInTexas?: boolean;
  hasDocumentationForLeaseBreak?: boolean;
  hasTexasElectricAccount?: boolean;
  hasSurvivorVerificationLetter?: boolean;
  hasProtectiveOrderOrPoliceReport?: boolean;
  failedChannels?: string[];
  failedReason?: string;
  partialHelpImpact?: string;
}

export interface ResearchDocket {
  docketId: string;
  createdAt: string;
  locationSummary: string;
  primaryBarrierSummary: string;
  requestedAmount: string;
  partialHelpAcceptable: boolean;
  resourceLevers: { lever: string; whyItMatters: string }[];
  exhaustedPathways: { channel: string; note: string }[];
  researchPaths: string[];
  matchedResourcesCount: number;
}
