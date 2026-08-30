export type AmountScale =
  | "UNDER_25"
  | "25_50"
  | "51_100"
  | "101_250"
  | "251_500"
  | "501_1000"
  | "1001_2500"
  | "OVER_2500"
  | "UNSURE";

export type PartialHelpImpact = "YES" | "NO" | "MAYBE";

export type UrgencyTimeline =
  | "TODAY"
  | "WITHIN_72_HOURS"
  | "WITHIN_A_WEEK"
  | "WITHIN_30_DAYS"
  | "PLANNING_AHEAD";

export type FailedChannel =
  | "211"
  | "DV_SHELTER"
  | "LEGAL_AID"
  | "CHURCH"
  | "CAA"
  | "HOUSING_AUTHORITY"
  | "POLICE"
  | "VICTIM_SERVICES"
  | "CHARITY"
  | "FAMILY"
  | "EMPLOYER"
  | "WORKFORCE"
  | "OTHER";

export type FailedReason =
  | "NO_FUNDS"
  | "WAITLIST"
  | "INELIGIBLE"
  | "POLICE_REPORT_REQUIRED"
  | "PROTECTIVE_ORDER_REQUIRED"
  | "SHELTER_STAY_REQUIRED"
  | "NO_TRANSPORTATION"
  | "OUTSIDE_SERVICE_AREA"
  | "UNABLE_TO_CONTACT"
  | "OTHER";

export interface ResourceIntakeData {
  // 1. Barriers, Needs & Geography (Step 1)
  primaryBarriers: string[];
  solvingNarrative?: string;
  amountScale?: AmountScale;
  partialHelpImpact?: PartialHelpImpact;
  urgency: UrgencyTimeline;
  state: string;
  county?: string;
  city?: string;
  zipCode?: string;
  failedChannels: FailedChannel[];
  failedReason?: FailedReason;
  failedNotes?: string;

  // 2. Broad Qualification Levers (Step 2)
  workStatus?: "EMPLOYED" | "RECENTLY_EMPLOYED_6_12_MO" | "UNEMPLOYED" | "SELF_EMPLOYED" | "OTHER";
  currentIndustry?: string;
  recentIndustries: string[];
  hasDependentChildren?: boolean;
  childInPublicSchool?: boolean;
  housingStatus?: "RENTAL_LEASE" | "HOMEOWNER" | "DOUBLED_UP_TEMPORARY" | "SHELTER" | "UNHOUSED" | "OTHER";
  hasAnimal?: boolean;
  animalType?: ("DOG" | "CAT" | "SERVICE_ANIMAL" | "OTHER")[];
  transportationStatus?: "OWN_VEHICLE" | "SHARED_VEHICLE" | "BORROWED_VEHICLE" | "VEHICLE_UNAVAILABLE" | "PUBLIC_TRANSIT" | "RIDESHARE_ONLY" | "NO_RELIABLE_TRANSPORT";
  sharedCellularPlan?: boolean;
  maritalTaxStatus?: "SINGLE" | "MARRIED_JOINT_TAX" | "MARRIED_SEPARATING" | "COERCED_TAX_DEBT" | "NONE";
  militaryVeteranConnection?: boolean;
  unionMembership?: boolean;
  unionName?: string;
  professionalAffiliations?: string[];

  // 3. Conditional Detailed Facts (Step 3 - Triggered by Program Families)
  hospitalityHoursPerWeek?: "UNDER_30" | "30_PLUS" | "UNSURE";
  hospitalityTenureMonths?: "UNDER_3_MO" | "3_TO_5_MO" | "6_PLUS_MO";
  hospitalityRecentWork90Days?: boolean;
  hospitalityCrisisWithin6Mo?: boolean;

  musicTenureYears?: "UNDER_5_YRS" | "5_PLUS_YRS";
  musicCommercialReleases?: "FEWER_THAN_6" | "6_PLUS_RELEASES";

  writerPublishedPortfolio?: boolean;
  craftArtistProfessional?: boolean;

  fleeingWithPet?: boolean;
  connectedWithDVAdvocate?: boolean;
  enteringOrInDVShelter?: boolean;

  sharesMobileContractWithAbuser?: boolean;

  hasTexasLeaseAgreement?: boolean;
  hasDocumentationForLeaseBreak?: boolean;

  electricUtilityInTexas?: boolean;
  hasSurvivorVerificationLetter?: boolean;

  childLacksFixedRegularNighttimeResidence?: boolean;

  // Compatibility fields
  isEmployed?: boolean;
  recentlyLaidOff?: boolean;
  isSelfEmployed?: boolean;
  isUnionMember?: boolean;
  hasProfessionalLicense?: boolean;
  licenseType?: string;
  worksForNationalCompany?: boolean;
  isStudentOrTrainee?: boolean;
  childAgeRanges?: string[];
  isPregnant?: boolean;
  freeTextWork?: string;
  animalNeeds?: ("FOSTER" | "BOARDING" | "DEPOSIT" | "VET_CARE" | "TRANSPORT" | "PET_FRIENDLY_HOUSING")[];
  transportationNeeds?: ("GAS" | "REPAIR" | "REGISTRATION" | "INSURANCE" | "REPLACEMENT" | "RIDE" | "BUS_PASS" | "FLIGHT" | "RELOCATION_TRANSIT")[];
  communityConnections?: string[];
  activeBenefits?: string[];
  acceptableSolutions?: string[];
}

export interface ResearchDocket {
  docketId: string;
  createdAt: string;
  locationSummary: string;
  primaryBarrierSummary: string;
  requestedAmount?: string;
  partialHelpAcceptable: boolean;
  resourceLevers: { lever: string; whyItMatters: string }[];
  exhaustedPathways: { channel: string; note: string }[];
  researchPaths: string[];
  matchedResourcesCount: number;
}
