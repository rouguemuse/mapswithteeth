export interface StatuteArticle {
  id: string;
  title: string;
  citation: string;
  legalCode: string;
  category: "HOUSING" | "CONFIDENTIALITY" | "VICTIM_COMPENSATION" | "EMPLOYMENT" | "UTILITIES" | "LEGAL_PROTECTION" | "CONSUMER_PROTECTION";
  summary: string;
  keyRights: string[];
  nuancesAndExceptions: string[];
  requiredDocumentation: string[];
  procedureSteps: string[];
  authoritativeSourceUrl: string;
  administeringAgency: string;
  lastLegalAuditDate: string;
}

export type TexasRegion =
  | "CENTRAL_TEXAS_PILOT"
  | "GULF_COAST_DEEP_DIVE"
  | "NORTH_TEXAS"
  | "SOUTH_TEXAS"
  | "WEST_TEXAS"
  | "EAST_TEXAS";

export interface TexasCountyData {
  slug: string;
  name: string;
  region: TexasRegion;
  seat: string;
  majorCities: string[];
  isPilotRegion: boolean;
  emergencyShelterPartner: string;
  legalAidProvider: string;
  communityActionAgency: string;
  utilityProviders: string[];
  keyLocalFunds: {
    name: string;
    description: string;
    focus: string;
    website?: string;
  }[];
  localNuances: string[];
}
