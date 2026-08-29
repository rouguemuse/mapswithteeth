import { GovernanceMode, BoardCompetency, AppointedDirector } from "@/types/governance";

export const GOVERNANCE_MODE: GovernanceMode = "FORMING";

export const TARGET_COMPETENCIES: BoardCompetency[] = [
  { area: "Nonprofit Governance & Fiduciary Oversight", description: "Experience structuring bylaws, board charters, committee frameworks, and nonprofit accountability." },
  { area: "Legal & Regulatory Compliance", description: "Expertise in 501(c)(3) law, Texas statutory navigation, consumer protection, and privacy compliance." },
  { area: "Finance, Audit & Risk Management", description: "CPA / CFO background in nonprofit fund accounting, multi-source grant tracking, and audit readiness." },
  { area: "Survivor Services & Coercive Control", description: "Direct leadership or advocacy experience in survivor-centered emergency response and domestic abuse policy." },
  { area: "Public Systems & Municipal Navigation", description: "Deep familiarity with housing authorities, utility commissions, judicial dockets, or workforce commissions." },
  { area: "Technology, Privacy & Security", description: "Engineers, privacy attorneys, or digital security researchers experienced in high-stakes threat modeling." },
  { area: "Philanthropic Partnerships & Capital Strategy", description: "Strategic relationships with foundations, corporate donors, and public-interest grantmakers." },
  { area: "Community Coalitions & Regional Pilot Networks", description: "Grassroots mutual aid leaders, trade partners, and Central Texas community builders." },
];

export const APPOINTED_DIRECTORS: AppointedDirector[] = [];
