import { SurvivorSituation } from "@/domain/intake/types";

export interface FunderBenchmarkScenario {
  id: string;
  number: string;
  badge: string;
  title: string;
  shortSummary: string;
  funderObjective: string;
  selectedNeedIds: string[];
  location: { state: string; county: string };
  questionAnswers: Record<string, any>;
  expectedMatchedHighlights: string[];
  statutoryCitationsTested: string[];
  gapFundEligibleAmount: string;
}

export const FUNDER_BENCHMARK_SCENARIOS: FunderBenchmarkScenario[] = [
  {
    id: "hospitality-travis-lease-pet",
    number: "01",
    badge: "Central Texas Pilot Benchmark",
    title: "Hospitality Worker · Emergency Lease Break, Pet Foster & Crisis Grant",
    shortSummary:
      "A culinary worker / bartender in Travis County escaping abuse with their dog, needing immediate lease termination without penalty, pet foster care, and emergency cash.",
    funderObjective:
      "Demonstrates lateral industry crisis aid (Giving Kitchen), statutory civil lease break without police report (Tex. Prop. Code § 92.016), and companion animal barrier removal.",
    selectedNeedIds: ["housing-lease", "pets-leaving", "money-now", "work-culinary"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      domesticViolence: true,
      industry: "FOOD_AND_BEVERAGE",
      hospitalityWorkHistoryMonths: 18,
      hasActiveLeaseInTexas: true,
      currentResidentialTenancyInTexas: true,
      hasAdvocateVerificationLetter: true,
      hasPets: true,
      fleeingWithPets: true,
      isLowIncome: true,
      policeReportFiled: false,
      protectiveOrderActive: false,
    },
    expectedMatchedHighlights: [
      "Giving Kitchen Crisis Grants (Food/Beverage Emergency Aid)",
      "Texas Early Lease Termination (Tex. Prop. Code § 92.016)",
      "Safe Havens for Pets Network (Companion Animal Foster)",
      "SAFE Alliance Austin (Non-residential advocacy)",
    ],
    statutoryCitationsTested: ["Tex. Prop. Code § 92.016", "Giving Kitchen 2026 Guidelines"],
    gapFundEligibleAmount: "$800 (Locksmith + Pet Boarding Gap)",
  },
  {
    id: "mother-williamson-utilities-phone",
    number: "02",
    badge: "Telecom & Administrative Law",
    title: "Mother of Two · Electric Deposit Waiver & 2-Day Phone Separation",
    shortSummary:
      "A mother in Williamson County with 2 children facing shared-plan cell phone tracking and $300 electric deposit demands for a new safe residence.",
    funderObjective:
      "Demonstrates Texas administrative law utility deposit waiver ($0 deposit under 16 TAC § 25.478) and federal Safe Connections Act line separation (47 U.S.C. § 345).",
    selectedNeedIds: ["phone-plan", "money-utilities", "kids-school", "legal-protective"],
    location: { state: "TX", county: "Williamson" },
    questionAnswers: {
      domesticViolence: true,
      stalking: true,
      hasChildren: true,
      childrenCount: 2,
      childEnrolledInPublicSchool: true,
      publicSchoolStudentLacksFixedResidence: true,
      sharedCellularPlanWithAbuser: true,
      hasSafeConnectionsDocumentation: true,
      utilityAccountArrearsOrDeposit: true,
      hasAdvocateVerificationLetter: true,
      protectiveOrderActive: true,
      policeReportFiled: true,
    },
    expectedMatchedHighlights: [
      "Texas Victim Utility Deposit Waiver (16 TAC § 25.478 · $0 Deposit)",
      "Federal Safe Connections Act Line Separation (47 U.S.C. § 345)",
      "McKinney-Vento Educational Stability for Children",
      "Texas Advocacy Project Legal Representation",
    ],
    statutoryCitationsTested: [
      "16 TAC § 25.478",
      "47 U.S.C. § 345 / 47 CFR § 64.6402",
      "42 U.S.C. § 11432 (McKinney-Vento)",
    ],
    gapFundEligibleAmount: "$450 (Moving Truck & Cellular Transfer Fees)",
  },
  {
    id: "rural-bastrop-rekeying-transit",
    number: "03",
    badge: "Rural Tenancy & Transit Relief",
    title: "Rural Central Texas · Rekeying Statute & State Address Protection",
    shortSummary:
      "A survivor in Bastrop County whose landlord refuses to rekey entry locks without payment, needing statutory lock change enforcement, state ACP, and transit relief.",
    funderObjective:
      "Proves how rural survivors outside major shelter systems access civil lock replacement mandates (Tex. Prop. Code § 92.0161) and confidential state mail routing without police reports.",
    selectedNeedIds: ["housing-locks", "transit-escape", "legal-acp"],
    location: { state: "TX", county: "Bastrop" },
    questionAnswers: {
      domesticViolence: true,
      currentResidentialTenancyInTexas: true,
      hasActiveLeaseInTexas: true,
      hasAdvocateVerificationLetter: true,
      needsConfidentialAddress: true,
      transportationDisruption: true,
      policeReportFiled: false,
      protectiveOrderActive: false,
    },
    expectedMatchedHighlights: [
      "Texas Statutory Rekeying Mandate (Tex. Prop. Code § 92.0161)",
      "Texas OAG Address Confidentiality Program (ACP)",
      "National Runaway Safeline Home Free Transit Program",
    ],
    statutoryCitationsTested: ["Tex. Prop. Code § 92.0161", "Tex. Code Crim. Proc. Art. 56B.053"],
    gapFundEligibleAmount: "$600 (Emergency Deadbolt Hardware + Fuel)",
  },
  {
    id: "creative-artist-travis-medical",
    number: "04",
    badge: "Creative Economy & Lateral Aid",
    title: "Arts & Entertainment Worker · Emergency Medical & Living Aid",
    shortSummary:
      "A performing arts technician / creative worker in Austin navigating medical emergency expenses and loss of income following intimate partner violence.",
    funderObjective:
      "Demonstrates non-obvious creative sector safety nets (Entertainment Community Fund) and pro bono restorative healthcare networks (Removery INK-itiative).",
    selectedNeedIds: ["work-entertainment", "money-now", "health-dental-trauma"],
    location: { state: "TX", county: "Travis" },
    questionAnswers: {
      domesticViolence: true,
      industry: "ENTERTAINMENT_ARTS",
      artsWorkEarningsDocumented: true,
      isLowIncome: true,
      hasAdvocateVerificationLetter: true,
      policeReportFiled: false,
    },
    expectedMatchedHighlights: [
      "Entertainment Community Fund Emergency Financial Assistance",
      "Removery INK-itiative Pro Bono Clinical Tattoo Removal",
      "Face to Face Reconstructive Surgery Aid",
    ],
    statutoryCitationsTested: ["ECF 2026 Guidelines", "Removery INK-itiative Criteria"],
    gapFundEligibleAmount: "$750 (Medical Gap & Prescriptions)",
  },
];
