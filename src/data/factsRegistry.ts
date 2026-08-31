import { FactDefinition } from "@/types/qualification";
import { INDUSTRY_OPTIONS } from "@/data/taxonomy/industries";

export const FACT_DEFINITIONS: Record<string, FactDefinition> = {
  currentIndustry: {
    id: "currentIndustry",
    label: "What industry do you work in (or most recently worked in)?",
    sublabel: "Select your primary vocational field",
    type: "select",
    options: INDUSTRY_OPTIONS.map((i) => ({ value: i.id, label: i.name })),
    whyAsked: "Specialized benevolence funds operate exclusively for culinary, music, writing, healthcare, and trade workers outside traditional welfare systems.",
    category: "WORK",
    defaultValue: "restaurant-food-service"
  },

  hospitalityWeeklyHours: {
    id: "hospitalityWeeklyHours",
    label: "On average, how many hours per week do you work in food & beverage?",
    sublabel: "Includes restaurants, bars, catering, coffee shops, and food service",
    type: "select",
    options: [
      { value: "30_PLUS", label: "30+ Hours / Week (Full-time average)" },
      { value: "UNDER_30", label: "Under 30 Hours / Week (Part-time)" },
      { value: "UNSURE", label: "Variable / Seasonal / Unsure" }
    ],
    whyAsked: "Southern Smoke requires a documented average of 30+ hours/week over 6 continuous months.",
    category: "WORK",
    defaultValue: "30_PLUS"
  },

  hospitalityTenureMonths: {
    id: "hospitalityTenureMonths",
    label: "How long have you worked in the food/beverage or hospitality industry?",
    sublabel: "Continuous employment across restaurants, bars, catering, or concessions",
    type: "select",
    options: [
      { value: "6_PLUS_MO", label: "6 or more continuous months" },
      { value: "3_TO_5_MO", label: "3 to 5 continuous months" },
      { value: "UNDER_3_MO", label: "Under 3 months" }
    ],
    whyAsked: "Both Southern Smoke and Giving Kitchen require a minimum of 6 continuous months in food service.",
    category: "WORK",
    defaultValue: "6_PLUS_MO"
  },

  hospitalityRecentWork90Days: {
    id: "hospitalityRecentWork90Days",
    label: "Have you worked in food/beverage or hospitality within the past 90 days?",
    sublabel: "Or were on documented qualifying leave from food service",
    type: "boolean",
    whyAsked: "CORE Gives requires employment in the industry during the past 90 days or documented medical/family leave.",
    category: "WORK",
    defaultValue: false
  },

  hospitalityCrisisWithin6Mo: {
    id: "hospitalityCrisisWithin6Mo",
    label: "Did your crisis or emergency displacement event occur within the past 6 months?",
    type: "boolean",
    whyAsked: "Emergency culinary relief funds require applications to be submitted within 6 months of the unforeseen crisis.",
    category: "WORK",
    defaultValue: false
  },

  hasDependentChildren: {
    id: "hasDependentChildren",
    label: "Do you support any legal dependent children (18 or under)?",
    sublabel: "Children living with you for whom you have legal custody or guardianship",
    type: "boolean",
    whyAsked: "CORE Gives specifically serves restaurant and food service employees with dependent children.",
    category: "FAMILY",
    defaultValue: false
  },

  childInPublicSchool: {
    id: "childInPublicSchool",
    label: "Are any of your children currently enrolled in public school (K–12)?",
    type: "boolean",
    whyAsked: "Unlocks federal McKinney-Vento protections for immediate school enrollment, barrier-free records, and district transportation rights.",
    category: "FAMILY",
    defaultValue: false
  },

  childLacksFixedRegularNighttimeResidence: {
    id: "childLacksFixedRegularNighttimeResidence",
    label: "Is the student currently experiencing housing instability, temporary double-up, motel stay, or emergency shelter?",
    type: "boolean",
    whyAsked: "McKinney-Vento rights apply to school-aged children lacking a fixed, regular, and adequate nighttime residence.",
    category: "FAMILY",
    defaultValue: false
  },

  hasAnimal: {
    id: "hasAnimal",
    label: "Do you have a companion animal / pet?",
    type: "boolean",
    whyAsked: "Allows us to search confidential pet safe boarding grants and foster networks when emergency shelters prohibit pets.",
    category: "PETS",
    defaultValue: false
  },

  fleeingWithPet: {
    id: "fleeingWithPet",
    label: "Are you escaping domestic violence with your companion animal?",
    type: "boolean",
    whyAsked: "RedRover Safe Escape grants are dedicated exclusively to survivors escaping domestic violence with pets.",
    category: "PETS",
    defaultValue: false
  },

  connectedWithDVAdvocate: {
    id: "connectedWithDVAdvocate",
    label: "Are you connected with a domestic violence shelter advocate or case manager?",
    type: "boolean",
    whyAsked: "RedRover Safe Escape grants must be submitted directly by a domestic violence shelter advocate on your behalf.",
    category: "PETS",
    defaultValue: false
  },

  enteringOrInDVShelter: {
    id: "enteringOrInDVShelter",
    label: "Are you residing in or actively working toward entering a domestic violence shelter?",
    type: "boolean",
    whyAsked: "RedRover requires survivor connection to a DV-specific shelter program that cannot house pets on-site.",
    category: "PETS",
    defaultValue: false
  },

  sharedCellularPlan: {
    id: "sharedCellularPlan",
    label: "Are you on a shared family mobile or cellular phone plan?",
    type: "boolean",
    whyAsked: "Unlocks the federal Safe Connections Act (47 U.S.C. § 345) for mandatory carrier line separation.",
    category: "TELECOM",
    defaultValue: false
  },

  sharesMobileContractWithAbuser: {
    id: "sharesMobileContractWithAbuser",
    label: "Do you share the mobile service contract with the person you are separating from?",
    type: "boolean",
    whyAsked: "Under federal statute (47 U.S.C. § 345), carriers must separate your line within 2 business days without fees, contract penalties, or primary account holder approval. Note: Account holders may receive notice of account updates.",
    category: "TELECOM",
    defaultValue: false
  },

  hasTexasLeaseAgreement: {
    id: "hasTexasLeaseAgreement",
    label: "Do you have an active residential lease agreement in Texas?",
    type: "boolean",
    whyAsked: "Texas Property Code § 92.016 gives residential tenants the statutory right to break an unsafe lease immediately without future rent liability.",
    category: "LEGAL",
    defaultValue: false
  },

  hasDocumentationForLeaseBreak: {
    id: "hasDocumentationForLeaseBreak",
    label: "Do you have (or can you obtain) a signed letter from a family violence advocate, licensed counselor/medical provider, or protective order?",
    type: "boolean",
    whyAsked: "Texas Property Code § 92.016 requires statutory qualifying documentation to release you from future lease liability.",
    category: "LEGAL",
    defaultValue: false
  },

  electricUtilityInTexas: {
    id: "electricUtilityInTexas",
    label: "Are you establishing or paying for a Texas retail electric account?",
    type: "boolean",
    whyAsked: "Texas Public Utility Commission (PUC) Rule § 25.478 waives electric security deposits for certified survivors.",
    category: "UTILITIES",
    defaultValue: false
  },

  hasSurvivorVerificationLetter: {
    id: "hasSurvivorVerificationLetter",
    label: "Do you have a survivor certification letter from a family violence shelter, legal aid, or law enforcement agency?",
    type: "boolean",
    whyAsked: "Required by Texas retail electric providers to waive initial security deposits under PUC rules.",
    category: "UTILITIES",
    defaultValue: false
  },

  musicTenureYears: {
    id: "musicTenureYears",
    label: "How many years of documented employment history do you have in the music industry?",
    type: "select",
    options: [
      { value: "5_PLUS_YRS", label: "5 or more years of music industry work" },
      { value: "UNDER_5_YRS", label: "Under 5 years" }
    ],
    whyAsked: "MusiCares requires at least 5 years of music industry career tenure OR 6+ commercial releases.",
    category: "WORK",
    defaultValue: "5_PLUS_YRS"
  },

  musicCommercialReleases: {
    id: "musicCommercialReleases",
    label: "Do you have credits on at least 6 commercially released recordings, singles, or videos?",
    type: "select",
    options: [
      { value: "6_PLUS_RELEASES", label: "6 or more commercial releases" },
      { value: "FEWER_THAN_6", label: "Fewer than 6 releases" }
    ],
    whyAsked: "MusiCares accepts 6+ commercial releases as an alternative to the 5-year tenure requirement.",
    category: "WORK",
    defaultValue: "6_PLUS_RELEASES"
  },

  writerPublishedPortfolio: {
    id: "writerPublishedPortfolio",
    label: "Do you have a track record of published books, produced plays, or freelance journalism?",
    type: "boolean",
    whyAsked: "The Authors League Fund requires professional published writing credentials.",
    category: "WORK",
    defaultValue: false
  }
};
