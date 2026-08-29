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
  // 1. Barriers & Needs
  primaryBarriers: string[];
  solvingNarrative?: string;
  amountScale?: AmountScale;
  partialHelpImpact?: PartialHelpImpact;
  urgency: UrgencyTimeline;

  // 2. Location
  state: string;
  county?: string;
  city?: string;
  zipCode?: string;

  // 3. Work & Professional
  currentIndustry?: string;
  recentIndustries: string[];
  freeTextWork?: string;
  isEmployed?: boolean;
  recentlyLaidOff?: boolean;
  isSelfEmployed?: boolean;
  isUnionMember?: boolean;
  unionName?: string;
  hasProfessionalLicense?: boolean;
  licenseType?: string;
  worksForNationalCompany?: boolean;
  isStudentOrTrainee?: boolean;

  // 4. Family & Household
  hasDependentChildren?: boolean;
  childAgeRanges?: string[];
  childInPublicSchool?: boolean;
  isPregnant?: boolean;

  // 5. Pets
  hasAnimal?: boolean;
  animalType?: ("DOG" | "CAT" | "SERVICE_ANIMAL" | "OTHER")[];
  animalNeeds?: ("FOSTER" | "BOARDING" | "DEPOSIT" | "VET_CARE" | "TRANSPORT" | "PET_FRIENDLY_HOUSING")[];

  // 6. Transportation
  transportationStatus?: "OWN_VEHICLE" | "SHARED_VEHICLE" | "BORROWED_VEHICLE" | "VEHICLE_UNAVAILABLE" | "PUBLIC_TRANSIT" | "RIDESHARE_ONLY" | "NO_RELIABLE_TRANSPORT";
  transportationNeeds?: ("GAS" | "REPAIR" | "REGISTRATION" | "INSURANCE" | "REPLACEMENT" | "RIDE" | "BUS_PASS" | "FLIGHT" | "RELOCATION_TRANSIT")[];

  // 7. Community Connections
  communityConnections?: string[];

  // 8. Systems & Benefits
  activeBenefits?: string[];

  // 9. What has failed already?
  failedChannels: FailedChannel[];
  failedReason?: FailedReason;
  failedNotes?: string;

  // 10. Flexibility in Solutions
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
