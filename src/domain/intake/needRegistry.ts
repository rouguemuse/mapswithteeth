/**
 * MAPS WITH TEETH — DOMAIN: INTAKE NEED REGISTRY
 * Canonical mapping between survivor plain-language problem statements and
 * matcher-evaluated `primaryNeeds` tokens.
 */

export interface IntakeProblemNeed {
  id: string;
  category: IntakeNeedCategory;
  categoryLabel: string;
  plainLanguageLabel: string;
  description?: string;
  canonicalNeeds: string[];
  triggerQuestionGroupIds: string[];
  isKnownCatalogGap?: boolean;
  gapReason?: string;
}

export type IntakeNeedCategory =
  | "HOUSING"
  | "MONEY"
  | "PHONE_DIGITAL"
  | "TRANSPORTATION"
  | "CHILDREN"
  | "PETS"
  | "LEGAL_DOCS"
  | "WORK_INDUSTRY"
  | "HEALTH_RECOVERY"
  | "OTHER";

export interface IntakeCategoryGroup {
  id: IntakeNeedCategory;
  title: string;
  subtitle: string;
  needs: IntakeProblemNeed[];
}

export const INTAKE_PROBLEM_NEEDS: IntakeProblemNeed[] = [
  // 1. HOUSING
  {
    id: "housing-stay",
    category: "HOUSING",
    categoryLabel: "Housing & Shelter",
    plainLanguageLabel: "I need somewhere safe to stay right now",
    description: "Emergency shelter, safe temporary lodging, or crisis housing.",
    canonicalNeeds: ["emergency-shelter", "housing-relocation"],
    triggerQuestionGroupIds: ["housing-general", "abuse-context"]
  },
  {
    id: "housing-losing",
    category: "HOUSING",
    categoryLabel: "Housing & Shelter",
    plainLanguageLabel: "I'm worried about losing where I live or being evicted",
    description: "Rent arrears, landlord pressure, or housing instability.",
    canonicalNeeds: ["housing-instability", "rent-deposit"],
    triggerQuestionGroupIds: ["housing-tenancy"]
  },
  {
    id: "housing-lease",
    category: "HOUSING",
    categoryLabel: "Housing & Shelter",
    plainLanguageLabel: "I need to leave a residential lease agreement early",
    description: "Getting out of a shared apartment or rental agreement early.",
    canonicalNeeds: ["lease-escape", "rent-deposit"],
    triggerQuestionGroupIds: ["housing-tenancy", "housing-lease-docs"]
  },
  {
    id: "housing-locks",
    category: "HOUSING",
    categoryLabel: "Housing & Shelter",
    plainLanguageLabel: "I need locks, deadbolts, or security changed on my home",
    description: "Changing locks, deadbolts, or physical access security.",
    canonicalNeeds: ["locks-rekey"],
    triggerQuestionGroupIds: ["housing-tenancy", "housing-rekey"]
  },
  {
    id: "housing-rent",
    category: "HOUSING",
    categoryLabel: "Housing & Shelter",
    plainLanguageLabel: "I need help with rent, rental deposit, or moving costs",
    description: "First month's rent, move-in security deposit, or moving expenses.",
    canonicalNeeds: ["rent-deposit", "housing-relocation", "relocation"],
    triggerQuestionGroupIds: ["housing-tenancy", "income-finances"]
  },

  // 2. MONEY & EMERGENCY EXPENSES
  {
    id: "money-immediate",
    category: "MONEY",
    categoryLabel: "Money & Emergency Aid",
    plainLanguageLabel: "I need money for an immediate emergency or living expense",
    description: "Direct emergency assistance for urgent survival and living needs.",
    canonicalNeeds: ["money-now"],
    triggerQuestionGroupIds: ["income-finances", "industry-affiliation"]
  },
  {
    id: "money-income-loss",
    category: "MONEY",
    categoryLabel: "Money & Emergency Aid",
    plainLanguageLabel: "I lost or had my job/income disrupted due to violence",
    description: "Lost wages, missed work hours, or sudden job disruption.",
    canonicalNeeds: ["money-now", "job-transition", "unemployment"],
    triggerQuestionGroupIds: ["employment-status", "industry-affiliation"]
  },
  {
    id: "money-bills",
    category: "MONEY",
    categoryLabel: "Money & Emergency Aid",
    plainLanguageLabel: "Utility bills (electric, water, gas) are unmanageable or disconnected",
    description: "Electric deposit waivers, utility bills, or shutoff notices.",
    canonicalNeeds: ["utility-deposit", "utility-payment", "utility-arrears"],
    triggerQuestionGroupIds: ["utilities-texas"]
  },
  {
    id: "money-debt",
    category: "MONEY",
    categoryLabel: "Money & Emergency Aid",
    plainLanguageLabel: "Debt, credit cards, or tax filings were coerced or controlled by someone else",
    description: "Loans, cards, or tax filings signed or controlled under pressure.",
    canonicalNeeds: ["coerced-debt", "tax-controversy"],
    triggerQuestionGroupIds: ["coerced-debt-tax"]
  },

  // 3. PHONE & DIGITAL SAFETY
  {
    id: "phone-plan",
    category: "PHONE_DIGITAL",
    categoryLabel: "Phone & Digital Safety",
    plainLanguageLabel: "Someone controls or shares my cellular phone plan",
    description: "Separating your mobile number from a shared or abuser's account.",
    canonicalNeeds: ["phone-separation"],
    triggerQuestionGroupIds: ["phone-separation-details"]
  },
  {
    id: "phone-tracking",
    category: "PHONE_DIGITAL",
    categoryLabel: "Phone & Digital Safety",
    plainLanguageLabel: "I think someone may be digitally tracking my location or vehicle",
    description: "Screening for hidden trackers, spyware, or device monitoring.",
    canonicalNeeds: ["digital-privacy"],
    triggerQuestionGroupIds: ["digital-tracking"]
  },
  {
    id: "phone-accounts",
    category: "PHONE_DIGITAL",
    categoryLabel: "Phone & Digital Safety",
    plainLanguageLabel: "I need safer ways to separate accounts, devices, or my legal address",
    description: "Securing digital accounts, email access, or mailing privacy.",
    canonicalNeeds: ["address-confidentiality", "digital-privacy"],
    triggerQuestionGroupIds: ["address-confidentiality-details"]
  },

  // 4. TRANSPORTATION
  {
    id: "transit-ride",
    category: "TRANSPORTATION",
    categoryLabel: "Transportation & Travel",
    plainLanguageLabel: "I cannot safely get where I need to go",
    description: "Rides, local transit support, or emergency bus passes.",
    canonicalNeeds: ["transportation"],
    triggerQuestionGroupIds: ["transportation-context"]
  },
  {
    id: "transit-vehicle",
    category: "TRANSPORTATION",
    categoryLabel: "Transportation & Travel",
    plainLanguageLabel: "My vehicle is unavailable, damaged, taken, or broken down",
    description: "Automotive hurdles, repairs, or lost vehicle access.",
    canonicalNeeds: ["transportation", "vehicle-repair"],
    triggerQuestionGroupIds: ["transportation-context"],
    isKnownCatalogGap: true,
    gapReason: "Direct vehicle repair grants are a catalog gap in Central Texas; adjacent transit vouchers and CVC relocation travel may apply."
  },
  {
    id: "transit-relocating",
    category: "TRANSPORTATION",
    categoryLabel: "Transportation & Travel",
    plainLanguageLabel: "I need transportation or bus tickets while relocating to family/safety",
    description: "Long-distance travel, bus tickets, or relocation transit.",
    canonicalNeeds: ["transportation", "housing-relocation"],
    triggerQuestionGroupIds: ["transportation-context", "youth-greyhound"]
  },

  // 5. CHILDREN & SCHOOL
  {
    id: "kids-school",
    category: "CHILDREN",
    categoryLabel: "Children & Education",
    plainLanguageLabel: "My child's school enrollment or transport is unstable",
    description: "Keeping your child enrolled or arranging school transportation.",
    canonicalNeeds: ["school-enrollment", "document-replacement"],
    triggerQuestionGroupIds: ["children-school-details"]
  },
  {
    id: "kids-housing",
    category: "CHILDREN",
    categoryLabel: "Children & Education",
    plainLanguageLabel: "We do not have a fixed, regular nighttime place to stay with kids",
    description: "Couch-surfing, staying in motels, or unhoused with children.",
    canonicalNeeds: ["housing-instability", "school-enrollment"],
    triggerQuestionGroupIds: ["children-school-details"]
  },
  {
    id: "kids-childcare",
    category: "CHILDREN",
    categoryLabel: "Children & Education",
    plainLanguageLabel: "Lack of childcare is keeping me from working or taking the next step",
    description: "Emergency care or supervision needed to work, move, or attend court.",
    canonicalNeeds: ["childcare"],
    triggerQuestionGroupIds: ["children-family"],
    isKnownCatalogGap: true,
    gapReason: "Dedicated pro bono emergency childcare is an identified catalog gap; shelter case management and McKinney-Vento transport mitigate."
  },
  {
    id: "kids-custody",
    category: "CHILDREN",
    categoryLabel: "Children & Education",
    plainLanguageLabel: "Custody conflict or family court dispute is affecting safety",
    description: "Custody safety, visitation disputes, or emergency family court steps.",
    canonicalNeeds: ["legal-protective-order", "custody-conflict"],
    triggerQuestionGroupIds: ["legal-court-details"]
  },

  // 6. PETS & COMPANION ANIMALS
  {
    id: "pets-boarding",
    category: "PETS",
    categoryLabel: "Pets & Animal Safety",
    plainLanguageLabel: "I need safe emergency boarding or housing for a pet",
    description: "Temporary boarding, foster placement, or emergency veterinary care.",
    canonicalNeeds: ["pet-boarding"],
    triggerQuestionGroupIds: ["pet-safety-details"]
  },
  {
    id: "pets-leaving",
    category: "PETS",
    categoryLabel: "Pets & Animal Safety",
    plainLanguageLabel: "I cannot leave safely without my pet",
    description: "Finding safe shelter options where animals are allowed.",
    canonicalNeeds: ["pet-boarding", "emergency-shelter"],
    triggerQuestionGroupIds: ["pet-safety-details"]
  },

  // 7. LEGAL & DOCUMENTATION
  {
    id: "legal-protective",
    category: "LEGAL_DOCS",
    categoryLabel: "Legal & Documentation",
    plainLanguageLabel: "I need protection from someone or an emergency court order",
    description: "Protective orders, restraining orders, or legal advice.",
    canonicalNeeds: ["legal-protective-order"],
    triggerQuestionGroupIds: ["legal-protective-details"]
  },
  {
    id: "legal-id",
    category: "LEGAL_DOCS",
    categoryLabel: "Legal & Documentation",
    plainLanguageLabel: "I lost access to government IDs, birth certificates, or vital records",
    description: "Replacing lost or withheld identification and vital records.",
    canonicalNeeds: ["document-replacement"],
    triggerQuestionGroupIds: ["document-replacement-details"]
  },
  {
    id: "legal-crime-victim",
    category: "LEGAL_DOCS",
    categoryLabel: "Legal & Documentation",
    plainLanguageLabel: "I reported a violent crime/DV or need Texas Crime Victims' Compensation",
    description: "Crime victim paperwork or reporting-connected relief.",
    canonicalNeeds: ["rent-deposit", "relocation", "crime-victims-compensation"],
    triggerQuestionGroupIds: ["cvc-reporting-details"]
  },

  // 8. WORK & INDUSTRY AFFILIATIONS
  {
    id: "work-food-beverage",
    category: "WORK_INDUSTRY",
    categoryLabel: "Work & Industry Support",
    plainLanguageLabel: "I work (or recently worked) in restaurants, bars, or food & beverage",
    description: "Employment background in dining, bars, or food hospitality.",
    canonicalNeeds: ["money-now", "hospitality-relief"],
    triggerQuestionGroupIds: ["industry-food-beverage"]
  },
  {
    id: "work-arts-entertainment",
    category: "WORK_INDUSTRY",
    categoryLabel: "Work & Industry Support",
    plainLanguageLabel: "I work in performing arts, theater, dance, music, or craft arts",
    description: "Employment background in live arts, stage, music, or entertainment.",
    canonicalNeeds: ["money-now", "arts-emergency-relief"],
    triggerQuestionGroupIds: ["industry-entertainment"]
  },
  {
    id: "work-military",
    category: "WORK_INDUSTRY",
    categoryLabel: "Work & Industry Support",
    plainLanguageLabel: "I or a family member served in the military or armed forces",
    description: "Active duty, reserve, or veteran military background.",
    canonicalNeeds: ["military-veteran", "money-now"],
    triggerQuestionGroupIds: ["military-veteran-details"]
  },

  // 9. HEALTH & PHYSICAL RECOVERY
  {
    id: "health-injuries",
    category: "HEALTH_RECOVERY",
    categoryLabel: "Health & Medical Care",
    plainLanguageLabel: "I have physical injuries or healthcare expenses resulting from violence",
    description: "Medical care, injury expenses, or trauma recovery.",
    canonicalNeeds: ["medical-care", "counseling"],
    triggerQuestionGroupIds: ["cvc-reporting-details"]
  },
  {
    id: "health-surgery",
    category: "HEALTH_RECOVERY",
    categoryLabel: "Health & Medical Care",
    plainLanguageLabel: "I need reconstructive surgery for facial or dental trauma from abuse",
    description: "Specialized reconstructive care for physical injuries.",
    canonicalNeeds: ["facial-surgery", "dental-trauma"],
    triggerQuestionGroupIds: ["face-to-face-details"]
  },
  {
    id: "health-tattoo",
    category: "HEALTH_RECOVERY",
    categoryLabel: "Health & Medical Care",
    plainLanguageLabel: "I want removal of a trauma, gang, or abuser-branding tattoo",
    description: "Removal of forced, trauma, or abuser-associated markings.",
    canonicalNeeds: ["tattoo-removal"],
    triggerQuestionGroupIds: ["tattoo-removal-details"]
  },

  // 10. SOMETHING ELSE
  {
    id: "other-need",
    category: "OTHER",
    categoryLabel: "Other / Unlisted",
    plainLanguageLabel: "Something else is getting in the way",
    description: "Other practical hurdles or general navigation.",
    canonicalNeeds: ["general-support"],
    triggerQuestionGroupIds: []
  }
];

export const INTAKE_CATEGORY_GROUPS: IntakeCategoryGroup[] = [
  {
    id: "HOUSING",
    title: "Housing & Shelter",
    subtitle: "Staying safe, leases, locks, and moving costs",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "HOUSING")
  },
  {
    id: "MONEY",
    title: "Money & Immediate Bills",
    subtitle: "Emergency funds, living expenses, bills, and coerced debt",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "MONEY")
  },
  {
    id: "PHONE_DIGITAL",
    title: "Phone & Digital Safety",
    subtitle: "Separating shared lines, tracker detection, and confidential mail",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "PHONE_DIGITAL")
  },
  {
    id: "TRANSPORTATION",
    title: "Transportation",
    subtitle: "Getting around safely, bus routes, and vehicle obstacles",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "TRANSPORTATION")
  },
  {
    id: "CHILDREN",
    title: "Children & School",
    subtitle: "School continuity, childcare barriers, and custody safety",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "CHILDREN")
  },
  {
    id: "PETS",
    title: "Pets & Companion Animals",
    subtitle: "Safe boarding and leaving safely with pets",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "PETS")
  },
  {
    id: "LEGAL_DOCS",
    title: "Legal, ID & Protection",
    subtitle: "Protective orders, lost documents, and crime victim assistance",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "LEGAL_DOCS")
  },
  {
    id: "WORK_INDUSTRY",
    title: "Work & Industry Connections",
    subtitle: "Industry-specific emergency grants (food & beverage, arts, military)",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "WORK_INDUSTRY")
  },
  {
    id: "HEALTH_RECOVERY",
    title: "Health & Physical Recovery",
    subtitle: "Medical relief, facial/dental reconstruction, and tattoo removal",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "HEALTH_RECOVERY")
  },
  {
    id: "OTHER",
    title: "Other / Unlisted",
    subtitle: "Broader navigation and catalog exploration",
    needs: INTAKE_PROBLEM_NEEDS.filter((n) => n.category === "OTHER")
  }
];

/**
 * Map an array of UI need IDs to canonical primaryNeeds string array for the matcher.
 */
export function mapUiNeedsToCanonicalNeeds(selectedNeedIds: string[]): string[] {
  const result = new Set<string>();
  for (const id of selectedNeedIds) {
    const item = INTAKE_PROBLEM_NEEDS.find((n) => n.id === id);
    if (item) {
      item.canonicalNeeds.forEach((cn) => result.add(cn));
    }
  }
  return Array.from(result);
}
