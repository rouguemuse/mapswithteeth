export interface BudgetCategory {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  description: string;
  deliverables: string[];
}

export interface PilotConfig {
  totalTarget: number;
  durationMonths: number;
  cohortSize: number;
  pilotRegion: string;
  targetCounties: string[];
  launchFramework: string;
  categories: BudgetCategory[];
}

export const PILOT_CONFIG: PilotConfig = {
  totalTarget: 100000,
  durationMonths: 6,
  cohortSize: 25,
  pilotRegion: "Central Texas",
  targetCounties: ["Travis County (Austin)", "Williamson County (Round Rock/Georgetown)", "Hays County (San Marcos)", "Bastrop County"],
  launchFramework: "Fiscally Sponsored Charitable Project",
  categories: [
    {
      id: "founder-director",
      name: "Founder / Project Director",
      amount: 36000,
      percentage: 36,
      description: "Dedicated full-time leadership directing protocol design, partner integrations, navigator oversight, and architectural execution.",
      deliverables: [
        "Executive leadership and day-to-day pilot execution across Central Texas counties",
        "Direct supervision of navigator workflows, resource graph maintenance, and partner onboarding",
        "Public reporting, funder accountability, and systems research coordination",
      ],
    },
    {
      id: "payroll-benefits-reserve",
      name: "Employer payroll / benefits reserve",
      amount: 5000,
      percentage: 5,
      description: "Mandatory employer-side payroll taxes, state unemployment reserves, worker compensation, and basic healthcare stipend reserve.",
      deliverables: [
        "Employer FICA, FUTA, and Texas state workforce commission obligations",
        "Required workers' compensation insurance and statutory compliance buffer",
      ],
    },
    {
      id: "survivor-services-expertise",
      name: "Part-time survivor-services expertise",
      amount: 8000,
      percentage: 8,
      description: "Specialized subject-matter consultation from credentialed domestic violence advocates and trauma-informed practitioners.",
      deliverables: [
        "Protocol trauma-informed safety audits and weekly case-debrief consultations",
        "Survivor-facing artifact readability, dignity review, and safety validation",
      ],
    },
    {
      id: "fiscal-sponsorship-admin",
      name: "Fiscal sponsorship / administration",
      amount: 8000,
      percentage: 8,
      description: "501(c)(3) fiscal sponsor administration fee covering charitable oversight, grant compliance, HR, and independent fiduciary reporting.",
      deliverables: [
        "501(c)(3) tax-exempt donation administration and restricted fund accounting",
        "Monthly balance-sheet reconciliation and annual Form 990 audit support",
      ],
    },
    {
      id: "organizer-tech-security",
      name: "Organizer technology + security",
      amount: 10000,
      percentage: 10,
      description: "Zero-knowledge client-side encryption infrastructure, privacy-preserving hosting, automated test pipelines, and SOC2/HIPAA security controls.",
      deliverables: [
        "End-to-end client-side encryption key management and secure ephemeral storage",
        "Automated regression pipeline, staleness monitoring, and zero-tracking deployment",
      ],
    },
    {
      id: "legal-compliance",
      name: "Legal / privacy / insurance / compliance",
      amount: 10000,
      percentage: 10,
      description: "Legal supervision, general liability insurance, statutory privacy compliance (Texas Family Code § 93.004, VAWA), and non-liability reviews.",
      deliverables: [
        "Comprehensive nonprofit project liability insurance and cybersecurity coverage",
        "Statutory compliance audits for non-implication disclaimers and UETA/E-SIGN execution",
      ],
    },
    {
      id: "gap-fund",
      name: "Gap Fund",
      amount: 10000,
      percentage: 10,
      description: "Direct flexible barrier-removal funding administered under strict dual-approval controls to eliminate critical bottlenecks (locks, pet deposits, transport).",
      deliverables: [
        "Targeted $400–$800 micro-grants for essential escape and stabilization bottlenecks",
        "Strict non-arbitrary fiduciary documentation administered through fiscal sponsor",
      ],
    },
    {
      id: "evaluation-data-systems",
      name: "Evaluation + data systems",
      amount: 5000,
      percentage: 5,
      description: "Rigorous independent metrics auditing, drop-off reduction tracking, and data systems verification against the 7 pilot metrics.",
      deliverables: [
        "Independent verification of the 7 quantitative pilot metrics",
        "Publicly published 6-Month Pilot Findings & Resource Ecosystem Audit report",
      ],
    },
    {
      id: "partner-training-outreach",
      name: "Partner training + outreach",
      amount: 3000,
      percentage: 3,
      description: "Community navigator toolkits, partner agency briefings, and institutional intake training on non-implicative contact records.",
      deliverables: [
        "Standardized training modules for community navigators and intake staff",
        "Partner onboarding kits and institutional touchpoint workflows",
      ],
    },
    {
      id: "operating-contingency",
      name: "Operating contingency",
      amount: 5000,
      percentage: 5,
      description: "Reserve fund for unexpected regulatory, technical, or logistical operational contingencies during the 6-month pilot.",
      deliverables: [
        "Unforeseen emergency hardware replacements, legal updates, or jurisdictional travel",
        "Direct buffer ensuring uninterrupted 90-day pilot cohort execution",
      ],
    },
  ],
};
