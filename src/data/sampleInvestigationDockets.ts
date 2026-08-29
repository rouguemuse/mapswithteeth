import { ResearchDocket } from "@/types/intake";

export const SAMPLE_DOCKETS: ResearchDocket[] = [
  {
    docketId: "MWT-TX-WILCO-0829",
    createdAt: "2026-08-29T16:20:00.000Z",
    locationSummary: "Williamson County, TX (Round Rock)",
    primaryBarrierSummary: "$600 apartment deposit + $75 gas + Dog boarding",
    requestedAmount: "$501–$1,000",
    partialHelpAcceptable: true,
    resourceLevers: [
      {
        lever: "Work history: Restaurant cook (employed until 3 months ago)",
        whyItMatters: "Unlocks Southern Smoke Foundation and Giving Kitchen crisis grants which cover former hospitality staff within 6 months.",
      },
      {
        lever: "Public-school child + unstable housing",
        whyItMatters: "Triggers Williamson County school district family liaison and McKinney-Vento evaluation for transportation and supply support.",
      },
      {
        lever: "Dog needing temporary safe haven",
        whyItMatters: "RedRover Relief Safe Escape grant can pay commercial/veterinary boarding expenses through participating advocate.",
      },
      {
        lever: "Electric utility in deregulated market (Oncor/REP)",
        whyItMatters: "TCFV / PUCT § 25.478 deposit waiver letter waives $200 upfront electric deposit with advocate letter.",
      },
    ],
    exhaustedPathways: [
      {
        channel: "211",
        note: "Reported: Out of funds for the month.",
      },
      {
        channel: "DV_SHELTER",
        note: "Reported: Declined because participant cannot enter communal shelter due to work schedule and pet.",
      },
    ],
    researchPaths: [
      "1. Submit Southern Smoke Foundation application for $600 deposit vendor payment.",
      "2. Issue TCFV PUCT § 25.478 electric deposit waiver to electric provider.",
      "3. Route dog boarding request to RedRover Safe Escape via participating legal advocate.",
      "4. Request $75 gas card from St. Vincent de Paul St. William Round Rock conference.",
      "5. Connect with Round Rock ISD family support office for student transit passes.",
      "6. Verify Texas Property Code § 92.016 lease termination if currently tied to prior lease.",
    ],
    matchedResourcesCount: 6,
  },
  {
    docketId: "MWT-TX-TRAVIS-0828",
    createdAt: "2026-08-28T14:15:00.000Z",
    locationSummary: "Travis County, TX (Austin)",
    primaryBarrierSummary: "Controlling shared phone account + $300 electric deposit",
    requestedAmount: "$251–$500",
    partialHelpAcceptable: true,
    resourceLevers: [
      {
        lever: "Shared mobile wireless account with abuser",
        whyItMatters: "Mandatory line separation under federal Safe Connections Act (47 U.S.C. § 345) + 6 months free Lifeline service.",
      },
      {
        lever: "Austin Energy municipal electric territory",
        whyItMatters: "Austin Energy Customer Assistance Program (CAP) discount + Domestic Violence deposit waiver via SAFE Alliance.",
      },
      {
        lever: "Independent freelance graphic designer",
        whyItMatters: "Freelancers Union Relief network + CERF+ artist benevolence resources.",
      },
    ],
    exhaustedPathways: [
      {
        channel: "POLICE",
        note: "Reported: Stated phone contract is a 'civil matter'.",
      },
    ],
    researchPaths: [
      "1. Execute Safe Connections Act line separation with carrier's survivor desk using advocate certification (bypasses police report).",
      "2. Enroll in 6-month Lifeline emergency telephone subsidy.",
      "3. Request Austin Energy deposit waiver and CAP discount enrollment.",
      "4. Texas Advocacy Project free counsel for civil property separation advice.",
      "5. Apply for St. Vincent de Paul Austin micro-check for urgent shortfall.",
    ],
    matchedResourcesCount: 5,
  },
];
