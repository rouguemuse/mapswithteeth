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
      id: "gap-fund",
      name: "Survivor Gap Fund (Direct Barrier Removal)",
      amount: 35000,
      percentage: 35,
      description: "Direct flexible financial assistance for non-traditional barriers that existing programs cannot or will not pay (locksmiths, pet boarding, car repair, utility connection, moving trucks).",
      deliverables: [
        "Average $800–$1,400 per participant to eliminate immediate escape bottlenecks",
        "Written documentation and dual-approval fiduciary controls administered through fiscal sponsor",
        "Zero arbitrary restrictions requiring shelter stay or criminal police report",
      ],
    },
    {
      id: "staffing-navigation",
      name: "Project Director & Bridge Navigation",
      amount: 38000,
      percentage: 38,
      description: "Dedicated Navigator capacity providing structured resource graph matching, cross-system navigation, and active barrier removal for the pilot cohort.",
      deliverables: [
        "Hands-on navigation across housing, legal, telecom, and employment pathways",
        "Transparently budgeted and independently approved compensation via fiscal sponsor",
        "Direct survivor caseload management with zero conflict-of-interest fund access",
      ],
    },
    {
      id: "fiscal-sponsor-admin",
      name: "Comprehensive Fiscal Sponsorship & Fiduciary Oversight",
      amount: 10000,
      percentage: 10,
      description: "Nonprofit infrastructure fee covering charitable oversight, grant administration, payroll, compliance, HR, and independent project accounting.",
      deliverables: [
        "501(c)(3) tax-exempt donation administration",
        "Independent financial audit and monthly reconciliation",
        "Legal compliance and restricted grant tracking",
      ],
    },
    {
      id: "tech-security",
      name: "Technology, Privacy Infrastructure & Directory",
      amount: 8000,
      percentage: 8,
      description: "Hosting, security hardening, data-minimization infrastructure, and directory expansion for Texas and national escape tools.",
      deliverables: [
        "Zero-tracking infrastructure and encrypted researcher access",
        "Automated staleness monitoring and verification pipeline",
        "Mobile-optimized progressive directory tools",
      ],
    },
    {
      id: "compliance-legal",
      name: "Insurance, Legal & Compliance",
      amount: 5000,
      percentage: 5,
      description: "General liability insurance, professional liability, and independent legal review of statutory reference content.",
      deliverables: [
        "Comprehensive project liability insurance",
        "Ongoing legal accuracy audits of state statutory frameworks",
      ],
    },
    {
      id: "pilot-evaluation",
      name: "Cohort Evaluation & Public Research Report",
      amount: 4000,
      percentage: 4,
      description: "Rigorous independent evaluation documenting barrier resolution rates, resource stacking effectiveness, and cost-per-barrier metrics to inform public policy.",
      deliverables: [
        "Publicly published 6-Month Pilot Findings & Resource Ecosystem Audit",
        "Comparative analysis of traditional siloed referrals vs. cross-utilizable resource stacking",
      ],
    },
  ],
};
