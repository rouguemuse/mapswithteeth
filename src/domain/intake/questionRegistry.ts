/**
 * MAPS WITH TEETH — DOMAIN: INTAKE QUESTION REGISTRY
 * Machine-readable configuration of progressive disclosure intake questions.
 * Every question maps directly to a canonical SurvivorSituation field and supports explicit UNKNOWN.
 */

import { SurvivorSituation, Unknownable } from "./types";

export type QuestionAnswerType =
  | "YES_NO_UNKNOWN"
  | "SELECT_UNKNOWN"
  | "NUMBER_UNKNOWN";

export interface QuestionSelectOption {
  label: string;
  value: any;
  subtext?: string;
}

export interface IntakeQuestion {
  id: string;
  groupId: string;
  survivorSituationField: keyof SurvivorSituation;
  plainLanguagePrompt: string;
  subtext?: string;
  whyWeAsk: string;
  answerType: QuestionAnswerType;
  options?: QuestionSelectOption[];
  triggeringNeeds: string[]; // Problem need IDs that cause this question to appear
  unknownAllowed: boolean;
  defaultValue?: Unknownable<any>;
}

export const INTAKE_QUESTIONS: IntakeQuestion[] = [
  // 1. ABUSE & SAFETY CONTEXT
  {
    id: "abuse-dv-context",
    groupId: "abuse-context",
    survivorSituationField: "domesticViolence",
    plainLanguagePrompt: "Are you dealing with domestic violence, intimate partner abuse, or family violence?",
    subtext: "You do not need a police report, protective order, or formal label.",
    whyWeAsk: "Certain legal remedies (like breaking a lease without penalty or free line separation) are created specifically by family violence statutes.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: [
      "housing-stay",
      "housing-lease",
      "housing-locks",
      "phone-plan",
      "phone-tracking",
      "phone-accounts",
      "pets-leaving",
      "legal-protective",
      "health-injuries",
      "health-surgery"
    ],
    unknownAllowed: true
  },
  {
    id: "abuse-stalking-context",
    groupId: "abuse-context",
    survivorSituationField: "stalking",
    plainLanguagePrompt: "Are you experiencing stalking, tracking, or repeated unwanted surveillance?",
    subtext: "Including GPS trackers, monitoring software, or in-person following.",
    whyWeAsk: "Stalking triggers eligibility under the Texas Address Confidentiality Program and tracker detection tools.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["phone-tracking", "phone-accounts", "phone-plan"],
    unknownAllowed: true
  },

  // 2. HOUSING & TENANCY (Texas Property Code §§ 92.016, 92.153)
  {
    id: "housing-tenancy-tx",
    groupId: "housing-tenancy",
    survivorSituationField: "currentResidentialTenancyInTexas",
    plainLanguagePrompt: "Are you currently a tenant living in a rented house, duplex, or apartment in Texas?",
    whyWeAsk: "Texas statutory lease break and rekeying protections apply specifically to residential tenancies in Texas.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["housing-lease", "housing-locks", "housing-losing", "housing-rent"],
    unknownAllowed: true
  },
  {
    id: "housing-active-lease-tx",
    groupId: "housing-tenancy",
    survivorSituationField: "hasActiveLeaseInTexas",
    plainLanguagePrompt: "Do you have an active residential lease agreement in Texas?",
    whyWeAsk: "This law may let you end a Texas residential lease early without liability for future rent or lease-breaking charges. Most cases require qualifying documentation and 30 days' written notice; a different rule can apply when the person who committed the family violence is a cotenant or occupant.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["housing-lease", "housing-locks"],
    unknownAllowed: true
  },
  {
    id: "housing-written-lease-name",
    groupId: "housing-lease-docs",
    survivorSituationField: "hasWrittenResidentialLeaseInTexas",
    plainLanguagePrompt: "Is there a written lease agreement with your name listed as a tenant or occupant?",
    whyWeAsk: "Statutory notice must be delivered in writing referencing the lease agreement.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["housing-lease"],
    unknownAllowed: true
  },
  {
    id: "housing-advocate-letter",
    groupId: "housing-lease-docs",
    survivorSituationField: "hasAdvocateVerificationLetter",
    plainLanguagePrompt: "Do you have (or can you obtain) a signed documentation letter from a licensed healthcare provider or domestic violence advocate?",
    subtext: "Texas Property Code § 92.016 accepts a certified letter from an advocate or doctor without needing a police report.",
    whyWeAsk: "This allows you to exercise statutory lease break rights even if you have not filed a police report or court order.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["housing-lease", "health-tattoo", "health-surgery"],
    unknownAllowed: true
  },

  // 3. PHONE & DIGITAL SEPARATION (Safe Connections Act, 47 U.S.C. § 345)
  {
    id: "phone-shared-plan-abuser",
    groupId: "phone-separation-details",
    survivorSituationField: "sharedCellularPlanWithAbuser",
    plainLanguagePrompt: "Is your mobile phone line part of a shared, family, or multi-line wireless account with the person you are separating from?",
    whyWeAsk: "The federal Safe Connections Act creates a route for survivors to request line separation from a shared cellular account.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["phone-plan", "phone-accounts"],
    unknownAllowed: true
  },
  {
    id: "phone-safe-connections-doc",
    groupId: "phone-separation-details",
    survivorSituationField: "hasSafeConnectionsDocumentation",
    plainLanguagePrompt: "Do you already have one of the accepted documents that can support a line-separation request?",
    subtext: "Accepted documentation includes a signed advocate verification letter, court order, protective order, or police report.",
    whyWeAsk: "After receiving a completed qualifying line-separation request, a covered provider generally must complete the separation within two business days. If separation is technically or operationally infeasible, different notice/timing rules can apply.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["phone-plan"],
    unknownAllowed: true
  },
  {
    id: "phone-bluetooth-tracker",
    groupId: "digital-tracking",
    survivorSituationField: "suspectedBluetoothTracker",
    plainLanguagePrompt: "Do you suspect an Apple AirTag, SmartTag, Tile, or hidden Bluetooth tracker is following you?",
    whyWeAsk: "Free tools like AirGuard can scan and alert you to unwanted background tracking devices on Android and iOS.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["phone-tracking"],
    unknownAllowed: true
  },

  // 4. PET SAFETY & BOARDING
  {
    id: "pets-presence",
    groupId: "pet-safety-details",
    survivorSituationField: "hasPets",
    plainLanguagePrompt: "Do you have companion pets (dogs, cats, or emotional support animals)?",
    whyWeAsk: "Specialized grants like RedRover Relief Safe Escape cover temporary pet boarding so you do not have to leave animals behind.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["pets-boarding", "pets-leaving"],
    unknownAllowed: true
  },
  {
    id: "pets-fleeing",
    groupId: "pet-safety-details",
    survivorSituationField: "fleeingWithPets",
    plainLanguagePrompt: "Are you leaving an unsafe home and bringing your pet with you?",
    whyWeAsk: "Emergency pet grants require that the survivor is actively separating from domestic violence with their companion animal.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["pets-boarding", "pets-leaving"],
    unknownAllowed: true
  },

  // 5. CHILDREN & PUBLIC SCHOOL (McKinney-Vento Act)
  {
    id: "children-presence",
    groupId: "children-school-details",
    survivorSituationField: "hasChildren",
    plainLanguagePrompt: "Do you have dependent children with you?",
    whyWeAsk: "Federal and state programs provide special protections for families with school-aged children.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["kids-school", "kids-housing", "kids-childcare", "kids-custody"],
    unknownAllowed: true
  },
  {
    id: "children-public-school",
    groupId: "children-school-details",
    survivorSituationField: "childEnrolledInPublicSchool",
    plainLanguagePrompt: "Are any of your children currently enrolled in (or trying to attend) a public school or charter district?",
    whyWeAsk: "The federal McKinney-Vento Homeless Assistance Act guarantees immediate enrollment and free transportation for students lacking stable housing.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["kids-school", "kids-housing"],
    unknownAllowed: true
  },
  {
    id: "children-unfixed-residence",
    groupId: "children-school-details",
    survivorSituationField: "publicSchoolStudentLacksFixedResidence",
    plainLanguagePrompt: "Are you and your children staying temporarily with others, in a shelter, hotel, car, or lacking a fixed regular home?",
    whyWeAsk: "Under McKinney-Vento, schools cannot require proof of residency or birth certificates to enroll students in temporary housing.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["kids-school", "kids-housing"],
    unknownAllowed: true
  },

  // 6. LEGAL PROTECTIONS & REPORTING
  {
    id: "legal-police-report-filed",
    groupId: "cvc-reporting-details",
    survivorSituationField: "reportedToLawEnforcement",
    plainLanguagePrompt: "Has the crime or violence been reported to a law enforcement or public safety agency?",
    subtext: "Texas Crime Victims' Compensation (Art. 56B.053) requires reporting within a reasonable period unless an exception applies.",
    whyWeAsk: "Some financial compensation programs require a police report, while statutory rights (like lease breaks) do not.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["legal-crime-victim", "health-injuries", "housing-rent"],
    unknownAllowed: true
  },
  {
    id: "legal-is-child-victim",
    groupId: "cvc-reporting-details",
    survivorSituationField: "isChildVictim",
    plainLanguagePrompt: "Was the victim under 18 years old at the time of the offense?",
    whyWeAsk: "Under Tex. Code Crim. Proc. Art. 56B.053(c), the law enforcement reporting requirement does not apply to child victims.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["legal-crime-victim"],
    unknownAllowed: true
  },
  {
    id: "legal-cvc-extension-status",
    groupId: "cvc-reporting-details",
    survivorSituationField: "cvcReportingExtensionStatus",
    plainLanguagePrompt: "Did extraordinary circumstances prevent reporting the crime right away, or has the Attorney General granted a reporting extension?",
    subtext: "Under Art. 56B.053(b), the AG may extend reporting deadlines for extraordinary circumstances.",
    whyWeAsk: "Helps evaluate whether delayed reporting can be addressed through an administrative extension request.",
    answerType: "SELECT_UNKNOWN",
    options: [
      { label: "Reporting was timely / within reasonable period", value: "NOT_NEEDED" },
      { label: "Extraordinary circumstances delayed reporting (need extension)", value: "POTENTIALLY_APPLICABLE" },
      { label: "OAG has already formally GRANTED a reporting extension", value: "GRANTED" },
      { label: "OAG has formally DENIED an extension", value: "DENIED" },
      { label: "I'm not sure", value: "UNKNOWN" }
    ],
    triggeringNeeds: ["legal-crime-victim"],
    unknownAllowed: true
  },

  // 7. INDUSTRY & WORK CONNECTIONS
  {
    id: "work-industry-select",
    groupId: "industry-affiliation",
    survivorSituationField: "industry",
    plainLanguagePrompt: "What industry or field do you work in (or have you worked in recently)?",
    whyWeAsk: "Private charitable foundations offer direct emergency grants specifically for hospitality, arts, and beverage workers.",
    answerType: "SELECT_UNKNOWN",
    options: [
      { label: "Restaurant, Bar, or Food & Beverage Hospitality", value: "FOOD_AND_BEVERAGE" },
      { label: "Performing Arts, Theater, or Dance", value: "PERFORMING_ARTS" },
      { label: "Craft Artist (ceramic, glass, wood, metal, fiber)", value: "CRAFT_ARTIST" },
      { label: "Music Industry", value: "MUSIC" },
      { label: "Healthcare / Nursing", value: "HEALTHCARE" },
      { label: "Other / General Industry", value: "GENERAL" },
      { label: "I'm not sure", value: "UNKNOWN" }
    ],
    triggeringNeeds: ["money-immediate", "money-income-loss", "work-food-beverage", "work-arts-entertainment"],
    unknownAllowed: true
  },
  {
    id: "work-hospitality-tenure",
    groupId: "industry-food-beverage",
    survivorSituationField: "hospitalityWorkHistoryMonths",
    plainLanguagePrompt: "How long have you regularly worked in bartender or beverage-service hospitality?",
    subtext: "USBG Foundation BEAP requires not less than 12 months (1 year) of regular beverage-service work history.",
    whyWeAsk: "Southern Smoke and Giving Kitchen assist all food & beverage workers; USBG specifically requires 12 months of beverage service.",
    answerType: "SELECT_UNKNOWN",
    options: [
      { label: "12 months (1 year) or more", value: 12 },
      { label: "Less than 12 months (e.g. 6–11 months)", value: 6 },
      { label: "None / Not in beverage service", value: 0 },
      { label: "I'm not sure", value: "UNKNOWN" }
    ],
    triggeringNeeds: ["work-food-beverage"],
    unknownAllowed: true
  },
  {
    id: "work-giving-kitchen-crisis",
    groupId: "industry-food-beverage",
    survivorSituationField: "hasQualifyingMedicalOrDisasterCrisis",
    plainLanguagePrompt: "Are you experiencing a qualifying illness, injury, natural disaster, or housing displacement within the past 6 months?",
    whyWeAsk: "Giving Kitchen provides direct financial grants for food service workers facing documented medical or disaster crises.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["work-food-beverage"],
    unknownAllowed: true
  },
  {
    id: "work-military-status",
    groupId: "military-veteran-details",
    survivorSituationField: "militaryStatus",
    plainLanguagePrompt: "What is your military or veteran connection?",
    whyWeAsk: "Operation Homefront Critical Financial Assistance provides grants for junior enlisted active duty (E1–E6 with dependents) and post-9/11 wounded veterans.",
    answerType: "SELECT_UNKNOWN",
    options: [
      { label: "Active Duty Enlisted (Rank E-1 through E-6) with Dependents", value: "ACTIVE_DUTY_ENLISTED_E1_E6" },
      { label: "Deployed Active Duty (Rank E-1 through E-6) with Dependents", value: "DEPLOYED" },
      { label: "Post-9/11 Wounded, Ill, or Injured Veteran (All Ranks)", value: "WOUNDED_ILL_INJURED_POST_911" },
      { label: "Veteran Discharged within past 36 Months", value: "VETERAN_DISCHARGED_36MO" },
      { label: "Other Military / Veteran Connection", value: "VETERAN_GENERAL" },
      { label: "None / Civilian", value: "UNKNOWN" },
      { label: "I'm not sure", value: "UNKNOWN" }
    ],
    triggeringNeeds: ["work-military"],
    unknownAllowed: true
  },

  // 8. TAX CONTROVERSY & COERCED DEBT
  {
    id: "tax-coerced-debt",
    groupId: "coerced-debt-tax",
    survivorSituationField: "hasCoercedTaxDebt",
    plainLanguagePrompt: "Do you have tax debt, joint returns, or IRS disputes caused by an abusive spouse or partner?",
    whyWeAsk: "IRS Innocent Spouse Relief (IRC § 6015) can completely relieve you of tax debt caused by your partner's erroneous items or coercion.",
    answerType: "YES_NO_UNKNOWN",
    triggeringNeeds: ["money-debt"],
    unknownAllowed: true
  },

  // 9. HEALTH & RECONSTRUCTION (FACE TO FACE)
  {
    id: "health-face-surgery-sep",
    groupId: "face-to-face-details",
    survivorSituationField: "separationDurationMonths",
    plainLanguagePrompt: "Have you been physically separated from the abusive relationship for at least 12 months (1 year)?",
    subtext: "AAFPRS Foundation FACE TO FACE reconstructive surgery guidelines require 12 months separation.",
    whyWeAsk: "Surgeons provide 100% pro bono facial reconstruction once physical healing and safety stabilization are established.",
    answerType: "SELECT_UNKNOWN",
    options: [
      { label: "Yes, separated for 12 months (1 year) or more", value: 12 },
      { label: "No, separated for less than 12 months", value: 6 },
      { label: "I'm not sure", value: "UNKNOWN" }
    ],
    triggeringNeeds: ["health-surgery"],
    unknownAllowed: true
  }
];

/**
 * Given selected UI problem need IDs, determine which intake questions should be rendered.
 */
export function getTriggeredQuestions(selectedNeedIds: string[]): IntakeQuestion[] {
  if (selectedNeedIds.length === 0) return [];
  const selectedSet = new Set(selectedNeedIds);
  return INTAKE_QUESTIONS.filter((q) =>
    q.triggeringNeeds.some((tn) => selectedSet.has(tn))
  );
}
