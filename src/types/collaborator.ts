export type CollaboratorRole =
  | "FISCAL_SPONSOR"
  | "FOUNDATION_FUNDER"
  | "SURVIVOR_ADVOCATE"
  | "ATTORNEY_LEGAL_RESEARCHER"
  | "TECH_PRIVACY_SPECIALIST"
  | "COMMUNITY_ORGANIZER"
  | "RESEARCH_VOLUNTEER"
  | "MECHANIC_AUTO_PARTNER"
  | "LOCKSMITH_PARTNER"
  | "PET_FOSTER_NETWORK"
  | "WORKFORCE_AGENCY"
  | "OTHER";

export interface CollaboratorSubmission {
  name: string;
  email: string;
  organization?: string;
  location: string;
  role: CollaboratorRole;
  expertiseArea?: string;
  howToCollaborate: string;
  dateSubmitted: string;
}
