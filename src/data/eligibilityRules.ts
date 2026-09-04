import { ResourceEligibilityCriterion } from "@/types/resource";

export const VERIFIED_ELIGIBILITY_RULES: Record<string, ResourceEligibilityCriterion[]> = {
  "southern-smoke-foundation": [
    {
      criterionId: "ssf-industry-food-bev",
      factKey: "currentIndustry",
      label: "Food & Beverage Industry Employment",
      operator: "IN",
      expectedValue: ["restaurant-food-service", "hospitality", "bar-beverage", "food-service"],
      criterionType: "REQUIRED",
      primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
      verificationDate: "2026-08-20",
      sourceNote: "Must have worked in the food and beverage industry (restaurants, bars, catering, farming).",
      status: "VERIFIED",
      caveats: "Requires employment proof (paystubs or tax documents)."
    },
    {
      criterionId: "ssf-tenure-6mo",
      factKey: "hospitalityTenureMonths",
      label: "Minimum 6 Months Industry Tenure",
      operator: "EQUALS",
      expectedValue: "6_PLUS_MO",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
      verificationDate: "2026-08-20",
      sourceNote: "Must have worked in food and beverage for at least 6 continuous months.",
      status: "VERIFIED"
    },
    {
      criterionId: "ssf-hours-30plus",
      factKey: "hospitalityHoursPerWeek",
      label: "Minimum 30+ Weekly Hours Average",
      operator: "EQUALS",
      expectedValue: "30_PLUS",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
      verificationDate: "2026-08-20",
      sourceNote: "Minimum 30 hours per week average over the 6-month qualifying period.",
      status: "VERIFIED"
    },
    {
      criterionId: "ssf-crisis-6mo",
      factKey: "hospitalityCrisisWithin6Mo",
      label: "Unforeseen Crisis Event Within 6 Months",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://southernsmoke.org/emergency-relief/",
      verificationDate: "2026-08-20",
      sourceNote: "Unforeseen catastrophic life event, medical crisis, or DV displacement within the past 6 months.",
      status: "VERIFIED"
    }
  ],

  "core-children-of-restaurant-employees": [
    {
      criterionId: "core-industry-recent-90d",
      factKey: "hospitalityRecentWork90Days",
      label: "Food/Beverage Work in Past 90 Days",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://coregives.org/apply/",
      verificationDate: "2026-08-20",
      sourceNote: "Currently employed or worked in food/beverage within the past 90 days.",
      status: "VERIFIED"
    },
    {
      criterionId: "core-dependent-child",
      factKey: "hasDependentChildren",
      label: "Legal Dependent Minor Child (18 or Under)",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://coregives.org/apply/",
      verificationDate: "2026-08-20",
      sourceNote: "Must support at least one legal dependent child 18 or under in the home.",
      status: "VERIFIED"
    },
    {
      criterionId: "core-lifetime-limit",
      factKey: "none",
      label: "Lifetime Grant Limitation",
      operator: "EXISTS",
      criterionType: "SUPPORTING",
      primarySourceUrl: "https://coregives.org/apply/",
      verificationDate: "2026-08-20",
      sourceNote: "One Crisis Stabilization Grant per family lifetime under currently published criteria.",
      status: "VERIFIED"
    }
  ],

  "giving-kitchen-crisis-grants": [
    {
      criterionId: "gk-industry-food-service",
      factKey: "currentIndustry",
      label: "Food Service Industry Employment",
      operator: "IN",
      expectedValue: ["restaurant-food-service", "hospitality", "bar-beverage", "food-service"],
      criterionType: "REQUIRED",
      primarySourceUrl: "https://thegivingkitchen.org/help",
      verificationDate: "2026-08-20",
      sourceNote: "Food service workers (restaurants, catering, concessions, cafeteria, bar).",
      status: "VERIFIED"
    },
    {
      criterionId: "gk-tenure-6mo",
      factKey: "hospitalityTenureMonths",
      label: "Minimum 6 Months Industry Tenure",
      operator: "EQUALS",
      expectedValue: "6_PLUS_MO",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://thegivingkitchen.org/help",
      verificationDate: "2026-08-20",
      sourceNote: "Minimum 6 continuous months in food service.",
      status: "VERIFIED"
    }
  ],

  "musicares-emergency-financial": [
    {
      criterionId: "musicares-industry-music",
      factKey: "currentIndustry",
      label: "Music Industry Professional",
      operator: "IN",
      expectedValue: ["arts-entertainment", "music", "audio-production", "musician"],
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.musicares.org/get-help",
      verificationDate: "2026-08-20",
      sourceNote: "Documented career in the music industry (artists, musicians, audio engineers, crew).",
      status: "VERIFIED"
    },
    {
      criterionId: "musicares-tenure-or-credits",
      factKey: "musicTenureYears",
      label: "5+ Years Music Career OR 6+ Commercial Releases",
      operator: "EQUALS",
      expectedValue: "5_PLUS_YRS",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.musicares.org/get-help",
      verificationDate: "2026-08-20",
      sourceNote: "At least 5 years of music-industry employment OR credits on at least 6 commercially released recordings/videos.",
      status: "VERIFIED"
    }
  ],

  "redrover-relief-safe-escape": [
    {
      criterionId: "redrover-has-pet",
      factKey: "hasAnimal",
      label: "Companion Animal Present",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
      verificationDate: "2026-08-20",
      sourceNote: "Must have family pets in need of safe temporary boarding.",
      status: "VERIFIED"
    },
    {
      criterionId: "redrover-fleeing-pet",
      factKey: "fleeingWithPet",
      label: "Fleeing Domestic Violence with Pet",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
      verificationDate: "2026-08-20",
      sourceNote: "Survivor of domestic violence escaping abuse with family pet.",
      status: "VERIFIED"
    },
    {
      criterionId: "redrover-advocate-referral",
      factKey: "connectedWithDVAdvocate",
      label: "DV Shelter Advocate Submission Required",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
      verificationDate: "2026-08-20",
      sourceNote: "A domestic violence shelter advocate or case worker must apply on survivor's behalf.",
      status: "VERIFIED"
    },
    {
      criterionId: "redrover-shelter-connection",
      factKey: "enteringOrInDVShelter",
      label: "Entering or Residing in DV Shelter",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://redrover.org/relief/safe-escape-grants/",
      verificationDate: "2026-08-20",
      sourceNote: "Survivor must be actively residing in or working toward entering a DV shelter.",
      status: "VERIFIED"
    }
  ],

  "safe-connections-act-separation": [
    {
      criterionId: "fcc-shared-cellular-contract",
      factKey: "sharesMobileContractWithAbuser",
      label: "Shared Mobile Service Contract Involving Abuser",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.fcc.gov/safe-connections-act",
      verificationDate: "2026-08-20",
      sourceNote: "Shared wireless account / mobile service contract involving survivor and abuser.",
      status: "VERIFIED"
    }
  ],

  "tx-prop-code-92-016": [
    {
      criterionId: "tx-lease-state",
      factKey: "state",
      label: "Texas Residential Jurisdiction",
      operator: "EQUALS",
      expectedValue: "TX",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
      verificationDate: "2026-08-29",
      sourceNote: "Residential dwelling lease in Texas.",
      status: "VERIFIED"
    },
    {
      criterionId: "tx-lease-agreement",
      factKey: "hasTexasLeaseAgreement",
      label: "Active Residential Lease Agreement",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
      verificationDate: "2026-08-29",
      sourceNote: "Tenant under written or oral residential lease.",
      status: "VERIFIED"
    },
    {
      criterionId: "tx-lease-doc-proof",
      factKey: "hasDocumentationForLeaseBreak",
      label: "Statutory Qualifying Documentation",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
      verificationDate: "2026-08-29",
      sourceNote: "Signed documentation from a licensed health care provider, licensed mental health provider, family violence advocate, or court protective order.",
      status: "VERIFIED"
    }
  ],

  "puc-subst-r-25-478": [
    {
      criterionId: "puc-electric-texas",
      factKey: "electricUtilityInTexas",
      label: "Texas Retail Electric Provider Account",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.puc.texas.gov/agency/rulesnlaws/subrules/electric/25.478/25.478.pdf",
      verificationDate: "2026-08-29",
      sourceNote: "Account with a certified retail electric provider in the Texas ERCOT market.",
      status: "VERIFIED"
    },
    {
      criterionId: "puc-survivor-cert-letter",
      factKey: "hasSurvivorVerificationLetter",
      label: "Victim Certification Letter",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.puc.texas.gov/agency/rulesnlaws/subrules/electric/25.478/25.478.pdf",
      verificationDate: "2026-08-29",
      sourceNote: "Letter from a family violence center, legal aid program, or law enforcement agency certifying victim status.",
      status: "VERIFIED"
    }
  ],

  "mckinney-vento-liaison": [
    {
      criterionId: "mv-school-child",
      factKey: "childInPublicSchool",
      label: "Child Enrolled in Public School",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://nche.ed.gov/legislation/mckinney-vento/",
      verificationDate: "2026-08-20",
      sourceNote: "School-aged child or youth enrolled or eligible for enrollment in public school district.",
      status: "VERIFIED"
    },
    {
      criterionId: "mv-housing-instability",
      factKey: "childLacksFixedRegularNighttimeResidence",
      label: "Lacks Fixed, Regular & Adequate Nighttime Residence",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://nche.ed.gov/legislation/mckinney-vento/",
      verificationDate: "2026-08-20",
      sourceNote: "Experiencing homelessness or housing instability (including doubled-up, motels, or emergency shelters). Immediate enrollment and school-of-origin transportation protections.",
      status: "VERIFIED"
    }
  ],

  "austin-pets-alive-pass": [
    {
      criterionId: "apa-has-pet",
      factKey: "hasAnimal",
      label: "Companion Animal Present",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.austinpetsalive.org/programs/pass",
      verificationDate: "2026-08-20",
      sourceNote: "Pet owner facing crisis or surrender in Central Texas. Provides pet resource navigation, pet food, medical referrals, and rehoming support (not guaranteed foster boarding).",
      status: "VERIFIED"
    },
    {
      criterionId: "apa-location-texas",
      factKey: "state",
      label: "Texas Central Residency",
      operator: "EQUALS",
      expectedValue: "TX",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://www.austinpetsalive.org/programs/pass",
      verificationDate: "2026-08-20",
      sourceNote: "Serves Austin, Travis County, and Central Texas residents.",
      status: "VERIFIED"
    }
  ],

  "authors-league-fund": [
    {
      criterionId: "alf-published-portfolio",
      factKey: "writerPublishedPortfolio",
      label: "Published Author/Dramatist/Journalist Track Record",
      operator: "BOOLEAN_TRUE",
      criterionType: "REQUIRED",
      primarySourceUrl: "https://authorsleaguefund.org/apply/",
      verificationDate: "2026-08-20",
      sourceNote: "Professional published writers, book authors, dramatists, and freelance journalists.",
      status: "VERIFIED"
    }
  ]
};
