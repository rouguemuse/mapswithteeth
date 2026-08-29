export type StakeholderDomain =
  | "LABOR_UNION"
  | "ELECTED_PUBLIC_SECTOR"
  | "SURVIVOR_SERVICES"
  | "LEGAL_JUDICIAL"
  | "COMMUNITY_ACTION_MUTUAL_AID"
  | "TECHNOLOGY_PRIVACY"
  | "RESEARCH_ACADEMIA"
  | "OTHER";

export interface StakeholderFeedbackSubmission {
  fullName: string;
  email: string;
  domain: StakeholderDomain;
  organization: string;
  whereWouldThisFail: string;
  missingSystemsOrStakeholders: string;
  whatMakesThisUsefulToFrontline: string;
  whoShouldBeInPilotConversation: string;
  generalNotes?: string;
  submittedAt: string;
}
