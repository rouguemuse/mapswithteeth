import { ResourceTrigger, ResourceRequirement, ResourceExclusion } from "@/types/qualification";

export interface ProgramQualificationProfile {
  resourceId: string;
  triggers: ResourceTrigger[];
  requirements: ResourceRequirement[];
  exclusions: ResourceExclusion[];
  evidenceRequired: string[];
}

export const PROGRAM_QUALIFICATION_PROFILES: Record<string, ProgramQualificationProfile> = {
  "southern-smoke-foundation": {
    resourceId: "southern-smoke-foundation",
    triggers: [
      {
        fact: "currentIndustry",
        operator: "IN",
        value: ["restaurant-food-service", "hospitality", "bar-beverage", "food-service"],
        reason: "You reported working in food and beverage."
      },
      {
        fact: "recentIndustries",
        operator: "CONTAINS",
        value: "restaurant-food-service",
        reason: "You reported recent work history in food and beverage."
      }
    ],
    requirements: [
      {
        fact: "hospitalityWeeklyHours",
        operator: "EQUALS",
        value: "30_PLUS",
        importance: "REQUIRED",
        label: "Minimum 30+ average weekly hours in food & beverage",
        sourceNote: "Minimum 30 hours/week average required over 6 months.",
        primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "hospitalityTenureMonths",
        operator: "EQUALS",
        value: "6_PLUS_MO",
        importance: "REQUIRED",
        label: "Minimum 6 continuous months in food & beverage industry",
        sourceNote: "6 continuous months in food & beverage required.",
        primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "hospitalityCrisisWithin6Mo",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Qualifying crisis occurred within past 6 months",
        sourceNote: "Crisis must have occurred within 6 months of application.",
        primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Most recent 6 months of paystubs or W-2/1099 verifying 30+ hrs/week in food & beverage",
      "Past-due rent notice, lease agreement, utility bills, or medical invoices",
      "Documentation verifying unforeseen emergency or displacement event"
    ]
  },

  "core-children-of-restaurant-employees": {
    resourceId: "core-children-of-restaurant-employees",
    triggers: [
      {
        fact: "currentIndustry",
        operator: "IN",
        value: ["restaurant-food-service", "hospitality", "bar-beverage", "food-service"],
        reason: "You reported working in food and beverage."
      },
      {
        fact: "recentIndustries",
        operator: "CONTAINS",
        value: "restaurant-food-service",
        reason: "You reported recent work history in food and beverage."
      },
      {
        fact: "hospitalityRecentWork90Days",
        operator: "BOOLEAN_TRUE",
        reason: "You reported working in food/beverage within the past 90 days."
      }
    ],
    requirements: [
      {
        fact: "hasDependentChildren",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Must support at least one legal dependent child (18 or under)",
        sourceNote: "Must have legal custody of minor child in home.",
        primarySourceUrl: "https://coregives.org/apply/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "hospitalityRecentWork90Days",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Employed in food/beverage within past 90 days",
        sourceNote: "Active employment or qualifying leave within 90 days.",
        primarySourceUrl: "https://coregives.org/apply/",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [
      {
        fact: "hasDependentChildren",
        operator: "BOOLEAN_FALSE",
        label: "No dependent children",
        reason: "CORE strictly requires legal dependent children 18 or under in the home."
      }
    ],
    evidenceRequired: [
      "Proof of food/beverage employment (recent paystub)",
      "Proof of legal dependency for child (birth certificate, tax return, or custody order)",
      "Itemized invoices for rent, utilities, or medical bills",
      "Documentation of qualifying crisis event"
    ]
  },

  "giving-kitchen-crisis-grants": {
    resourceId: "giving-kitchen-crisis-grants",
    triggers: [
      {
        fact: "currentIndustry",
        operator: "IN",
        value: ["restaurant-food-service", "hospitality", "bar-beverage", "food-service"],
        reason: "You reported working in food service."
      },
      {
        fact: "recentIndustries",
        operator: "CONTAINS",
        value: "restaurant-food-service",
        reason: "You reported recent work history in food service."
      }
    ],
    requirements: [
      {
        fact: "hospitalityTenureMonths",
        operator: "EQUALS",
        value: "6_PLUS_MO",
        importance: "REQUIRED",
        label: "Minimum 6 continuous months in food service",
        sourceNote: "6 continuous months in food service required.",
        primarySourceUrl: "https://thegivingkitchen.org/help",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Proof of food service employment (paystubs showing 6+ months in food service)",
      "Copy of current residential lease agreement",
      "Current utility bills (electric, water, gas)",
      "Documentation of qualifying crisis event"
    ]
  },

  "musicares-emergency-financial": {
    resourceId: "musicares-emergency-financial",
    triggers: [
      {
        fact: "currentIndustry",
        operator: "IN",
        value: ["arts-entertainment", "music", "audio-production"],
        reason: "You reported working in music or entertainment."
      },
      {
        fact: "recentIndustries",
        operator: "CONTAINS",
        value: "arts-entertainment",
        reason: "You reported recent work in music or entertainment."
      }
    ],
    requirements: [
      {
        fact: "musicTenureYears",
        operator: "EQUALS",
        value: "5_PLUS_YRS",
        importance: "REQUIRED",
        label: "5+ years of music industry employment OR 6+ commercial releases",
        sourceNote: "Career history of 5+ years or 6+ commercial releases.",
        primarySourceUrl: "https://www.musicares.org/get-help",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Proof of 5+ years in the music industry (liner notes, royalty statements, union cards, contracts)",
      "Itemized invoices for rent, utilities, or medical/dental bills",
      "Recent tax return or bank statements"
    ]
  },

  "redrover-relief-safe-escape": {
    resourceId: "redrover-relief-safe-escape",
    triggers: [
      {
        fact: "hasAnimal",
        operator: "BOOLEAN_TRUE",
        reason: "You reported having a companion animal."
      }
    ],
    requirements: [
      {
        fact: "fleeingWithPet",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Fleeing domestic violence with companion animal",
        sourceNote: "Dedicated to domestic violence survivors escaping with pets.",
        primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "connectedWithDVAdvocate",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Connected with a DV shelter advocate or case manager",
        sourceNote: "Advocate must apply on survivor's behalf.",
        primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "enteringOrInDVShelter",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Residing in or entering a DV shelter",
        sourceNote: "Tied to survivor entering a DV shelter facility.",
        primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [
      {
        fact: "hasAnimal",
        operator: "BOOLEAN_FALSE",
        label: "No companion animal",
        reason: "RedRover Safe Escape provides pet boarding grants."
      }
    ],
    evidenceRequired: [
      "Application submitted directly by a domestic violence shelter advocate or case manager",
      "Quote or invoice from a licensed commercial boarding kennel or veterinary clinic"
    ]
  },

  "safe-connections-act-separation": {
    resourceId: "safe-connections-act-separation",
    triggers: [
      {
        fact: "sharedCellularPlan",
        operator: "BOOLEAN_TRUE",
        reason: "You reported being on a shared family mobile plan."
      },
      {
        fact: "primaryBarriers",
        operator: "CONTAINS",
        value: "phone-tech-safety",
        reason: "You reported phone privacy and technology safety barriers."
      }
    ],
    requirements: [
      {
        fact: "sharesMobileContractWithAbuser",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Shared wireless account involving survivor and abuser",
        sourceNote: "Mandatory line separation under 47 U.S.C. § 345.",
        primarySourceUrl: "https://www.fcc.gov/safe-connections-act",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Completed carrier line separation request form",
      "One form of qualifying verification: advocate letter, medical statement, court record, or police report"
    ]
  },

  "tx-prop-code-92-016": {
    resourceId: "tx-prop-code-92-016",
    triggers: [
      {
        fact: "state",
        operator: "EQUALS",
        value: "TX",
        reason: "You are residing in Texas."
      },
      {
        fact: "housingStatus",
        operator: "EQUALS",
        value: "RENTAL_LEASE",
        reason: "You reported having an active residential rental lease."
      },
      {
        fact: "primaryBarriers",
        operator: "CONTAINS",
        value: "rent-deposit",
        reason: "You reported housing and lease barriers."
      }
    ],
    requirements: [
      {
        fact: "state",
        operator: "EQUALS",
        value: "TX",
        importance: "REQUIRED",
        label: "Texas residential jurisdiction",
        sourceNote: "Applies to Texas residential dwellings.",
        primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        verificationDate: "2026-08-29"
      },
      {
        fact: "hasTexasLeaseAgreement",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Active residential lease agreement",
        sourceNote: "Written or oral residential tenancy in Texas.",
        primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        verificationDate: "2026-08-29"
      },
      {
        fact: "hasDocumentationForLeaseBreak",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Statutory qualifying documentation (advocate letter, counselor note, or protective order)",
        sourceNote: "Signed documentation from licensed provider or advocate.",
        primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        verificationDate: "2026-08-29"
      }
    ],
    exclusions: [
      {
        fact: "state",
        operator: "NOT_EQUALS",
        value: "TX",
        label: "Outside Texas",
        reason: "Texas Property Code § 92.016 is a Texas statewide statute."
      }
    ],
    evidenceRequired: [
      "Copy of residential lease agreement",
      "Written notice of lease termination to landlord specifying move-out date",
      "One qualifying documentation form: signed letter from family violence advocate, licensed health/mental health professional, or court protective order"
    ]
  },

  "puc-subst-r-25-478": {
    resourceId: "puc-subst-r-25-478",
    triggers: [
      {
        fact: "state",
        operator: "EQUALS",
        value: "TX",
        reason: "You are residing in Texas."
      },
      {
        fact: "primaryBarriers",
        operator: "CONTAINS",
        value: "utility-deposit",
        reason: "You reported utility deposit and connection barriers."
      }
    ],
    requirements: [
      {
        fact: "electricUtilityInTexas",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Texas retail electric provider account",
        sourceNote: "Account with certified REP in Texas ERCOT market.",
        primarySourceUrl: "https://www.puc.texas.gov/agency/rulesnlaws/subrules/electric/25.478/25.478.pdf",
        verificationDate: "2026-08-29"
      },
      {
        fact: "hasSurvivorVerificationLetter",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Victim certification letter",
        sourceNote: "Letter certifying victim status from DV center or legal aid.",
        primarySourceUrl: "https://www.puc.texas.gov/agency/rulesnlaws/subrules/electric/25.478/25.478.pdf",
        verificationDate: "2026-08-29"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Texas PUC Victim of Family Violence Waiver Form",
      "Certification letter from a family violence center, legal aid program, or law enforcement agency"
    ]
  },

  "mckinney-vento-liaison": {
    resourceId: "mckinney-vento-liaison",
    triggers: [
      {
        fact: "childInPublicSchool",
        operator: "BOOLEAN_TRUE",
        reason: "You reported having a child enrolled in public school."
      }
    ],
    requirements: [
      {
        fact: "childInPublicSchool",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Child enrolled in public school district (K–12)",
        sourceNote: "School-aged child in public school.",
        primarySourceUrl: "https://nche.ed.gov/legislation/mckinney-vento/",
        verificationDate: "2026-08-20"
      },
      {
        fact: "childLacksFixedRegularNighttimeResidence",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Child lacks fixed, regular, and adequate nighttime residence",
        sourceNote: "Experiencing housing instability or displacement.",
        primarySourceUrl: "https://nche.ed.gov/legislation/mckinney-vento/",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Self-certification of temporary housing instability to the District Homeless Liaison (no proof of address or income required by law)"
    ]
  },

  "austin-pets-alive-pass": {
    resourceId: "austin-pets-alive-pass",
    triggers: [
      {
        fact: "hasAnimal",
        operator: "BOOLEAN_TRUE",
        reason: "You reported having a companion animal."
      },
      {
        fact: "state",
        operator: "EQUALS",
        value: "TX",
        reason: "You are located in Texas."
      }
    ],
    requirements: [
      {
        fact: "hasAnimal",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Companion animal present",
        sourceNote: "Pet owner facing crisis in Central Texas.",
        primarySourceUrl: "https://www.austinpetsalive.org/programs/pass",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Contact APA PASS program coordinators with pet details and immediate support needs"
    ]
  },

  "authors-league-fund": {
    resourceId: "authors-league-fund",
    triggers: [
      {
        fact: "currentIndustry",
        operator: "IN",
        value: ["writing-journalism", "arts-entertainment"],
        reason: "You reported working in writing or journalism."
      }
    ],
    requirements: [
      {
        fact: "writerPublishedPortfolio",
        operator: "BOOLEAN_TRUE",
        importance: "REQUIRED",
        label: "Published professional author, dramatist, or journalist",
        sourceNote: "Demonstrated track record of published works.",
        primarySourceUrl: "https://authorsleaguefund.org/apply/",
        verificationDate: "2026-08-20"
      }
    ],
    exclusions: [],
    evidenceRequired: [
      "Bibliography of published books, produced plays, or freelance journalism portfolio",
      "Itemized invoices for rent, utilities, or medical bills",
      "Recent tax return"
    ]
  }
};
