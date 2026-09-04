/**
 * MAPS WITH TEETH — DOMAIN: INTAKE & SURVIVOR SITUATION TYPES
 * Normalized survivor situation model supporting explicit UNKNOWN states across all dimensions.
 */

export type Unknownable<T> = T | "UNKNOWN";

export type IndustryId =
  | "FOOD_AND_BEVERAGE"
  | "PERFORMING_ARTS"
  | "DANCE"
  | "CRAFT_ARTIST"
  | "MUSIC"
  | "HEALTHCARE"
  | "WRITING"
  | "GENERAL";

export interface SurvivorSituation {
  situationId?: string;
  timestamp?: string;

  // Stated Needs & Barriers
  primaryNeeds: string[]; // e.g. "rent-deposit", "money-now", "phone-separation", "pet-boarding", "tattoo-removal", "facial-surgery", "utility-deposit", "transportation", "legal-protective-order"
  urgencyTimeline?: Unknownable<"IMMEDIATE_24_48H" | "DAYS_3_7" | "WEEKS_1_4" | "PLANNING">;
  requestedAmountApprox?: Unknownable<number>;

  // Geography & Location
  state?: Unknownable<string>; // e.g. "TX", "CA", "US"
  county?: Unknownable<string>; // e.g. "Travis", "Williamson", "Harris", "Bastrop"
  city?: Unknownable<string>;
  zipCode?: Unknownable<string>;

  // Abuse & Safety Context
  domesticViolence?: Unknownable<boolean>;
  stalking?: Unknownable<boolean>;
  coerciveControl?: Unknownable<boolean>;
  sexualViolence?: Unknownable<boolean>;
  humanTrafficking?: Unknownable<boolean>;
  homelessnessOrFleeing?: Unknownable<boolean>;
  immediatePhysicalDanger?: Unknownable<boolean>;
  recentRelocation?: Unknownable<boolean>;
  separationDurationMonths?: Unknownable<number>;

  // Household & Family
  hasChildren?: Unknownable<boolean>;
  childrenCount?: Unknownable<number>;
  childEnrolledInPublicSchool?: Unknownable<boolean>;
  publicSchoolStudentLacksFixedResidence?: Unknownable<boolean>; // McKinney-Vento
  hasDependents?: Unknownable<boolean>;
  hasPets?: Unknownable<boolean>;
  fleeingWithPets?: Unknownable<boolean>;
  petDetails?: Unknownable<{ type?: string; needsSafeBoarding?: boolean }>;
  hasDisability?: Unknownable<boolean>;
  age?: Unknownable<number>;

  // Legal & Administrative Protections
  policeReportFiled?: Unknownable<boolean>;
  reportedToLawEnforcement?: Unknownable<boolean>;
  policeReportNumberOrAgencyAvailable?: Unknownable<boolean>;
  reportTimingPotentialIssue?: Unknownable<boolean>;
  reportingTimelinessStatus?: Unknownable<"TIMELY" | "POTENTIAL_DELAY_REVIEW" | "UNKNOWN">;
  isChildVictim?: Unknownable<boolean>;
  hasExtraordinaryCircumstancesExtension?: Unknownable<boolean>;
  hasExtraordinaryCircumstancesExtensionGranted?: Unknownable<boolean>;
  cvcReportingExtensionStatus?: Unknownable<"NOT_NEEDED" | "POTENTIALLY_APPLICABLE" | "GRANTED" | "DENIED" | "UNKNOWN">;
  protectiveOrderActive?: Unknownable<boolean>;
  protectiveOrderRequested?: Unknownable<boolean>;
  connectedWithDVAdvocate?: Unknownable<boolean>;
  shelterStayActiveOrPrior?: Unknownable<boolean>;
  hasAdvocateVerificationLetter?: Unknownable<boolean>;
  custodyConflictActive?: Unknownable<boolean>;
  immigrationStatusConcern?: Unknownable<boolean>;
  documentOrIdLoss?: Unknownable<boolean>;
  isNativeAmericanOrAlaskaNative?: Unknownable<boolean>;

  // Economic, Housing & Utilities
  isLowIncome?: Unknownable<boolean>;
  monthlyHouseholdIncome?: Unknownable<number>;
  employmentStatus?: Unknownable<"EMPLOYED" | "UNEMPLOYED" | "DISRUPTED" | "LEAVE">;
  jobSeparationDueToViolence?: Unknownable<boolean>;
  housingInstability?: Unknownable<boolean>;
  currentResidentialTenancyInTexas?: Unknownable<boolean>;
  hasActiveLeaseInTexas?: Unknownable<boolean>;
  hasWrittenResidentialLeaseInTexas?: Unknownable<boolean>;
  leaseInSurvivorName?: Unknownable<boolean>;
  hasTexasElectricAccount?: Unknownable<boolean>;
  electricAccountInSurvivorName?: Unknownable<boolean>;
  transportationDisruption?: Unknownable<boolean>;
  utilityDisruption?: Unknownable<boolean>;
  coercedDebtOrFraudulentAccounts?: Unknownable<boolean>;
  hasCoercedTaxDebt?: Unknownable<boolean>;
  hasPastDueBillsOrDeficitProof?: Unknownable<boolean>;
  hasQualifyingMedicalOrDisasterCrisis?: Unknownable<boolean>;
  hasSafeConnectionsDocumentation?: Unknownable<boolean>;

  // Institutional, Union & Industry Affiliations
  industries?: IndustryId[];
  industry?: Unknownable<IndustryId>; // Compatibility adapter (primary industry)
  hospitalityWorkHistoryMonths?: Unknownable<number>;
  entertainmentWorkHistoryYears?: Unknownable<number>;
  entertainmentAnnualIncomeYearsMet?: Unknownable<number>;
  isCraftArtistSubstantialIncome?: Unknownable<boolean>;
  isRegisteredNurse?: Unknownable<boolean>;
  isAuthorOrDramatist?: Unknownable<boolean>;
  isVeteranOrMilitary?: Unknownable<boolean>;
  militaryRank?: Unknownable<"E1_E6" | "E7_E9" | "OFFICER" | string>;
  hasDeersDependents?: Unknownable<boolean>;
  servedPost911?: Unknownable<boolean>;
  hasLineOfDutyDisability?: Unknownable<boolean>;
  militaryDischargeType?: Unknownable<"HONORABLE" | "GENERAL" | "OTHER_THAN_HONORABLE" | "DISHONORABLE">;
  militaryStatus?: Unknownable<
    | "ACTIVE_DUTY_ENLISTED_E1_E6"
    | "DEPLOYED"
    | "WOUNDED_ILL_INJURED_POST_911"
    | "OFFICER"
    | "VETERAN_DISCHARGED_36MO"
    | "VETERAN_GENERAL"
    | "DEPENDENT_OF_ABUSIVE_SERVICEMEMBER"
  >;
  isUnionMember?: Unknownable<boolean>;
  unionName?: Unknownable<string>;
  hasHealthInsurance?: Unknownable<boolean>;
  isSection8OrPublicHousingTenant?: Unknownable<boolean>;

  // Specialized Physical & Digital Safety Attributes
  sharedCellularPlanWithAbuser?: Unknownable<boolean>;
  hasPhysicalFacialInjuriesFromDV?: Unknownable<boolean>;
  hasPhysicalDentalInjuriesFromDV?: Unknownable<boolean>;
  hasVisibleOrHateTattoo?: Unknownable<boolean>;
  suspectedBluetoothTracker?: Unknownable<boolean>;
  jointTaxLiabilityCoercion?: Unknownable<boolean>;
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
