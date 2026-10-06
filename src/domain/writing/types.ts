export type ContentType =
  | "POLICY_ANALYSIS"
  | "SYSTEMS_NOTE"
  | "RESEARCH_NOTE"
  | "FOUNDER_ESSAY"
  | "PROJECT_UPDATE";

export type PublicationOrigin =
  | "maps_with_teeth"
  | "external"
  | "syndicated";

export type ArticleStatus =
  | "draft"
  | "pitch_hold"
  | "published"
  | "syndicated";

export type ArticleTopic =
  | "Continuity"
  | "Public Systems"
  | "Texas"
  | "Policy"
  | "Privacy & Governance"
  | "Resource Access"
  | "Bad Maps"
  | "Technology"
  | "Founder Essays";

export interface PublicationHistoryEntry {
  platformOrOutlet: string;
  url?: string;
  date: string;
  note?: string;
  relationship: "ORIGINAL" | "REPUBLISHED" | "ADAPTED" | "EXCERPT" | "NEWSLETTER";
}

export interface SourceNote {
  citation: string;
  url?: string;
  note?: string;
  authorityType?: "TEXAS_STATUTE" | "FEDERAL_STATUTE" | "AGENCY_RULE" | "REPORT" | "ACADEMIC" | "OTHER";
}

export interface Article {
  slug: string;
  title: string;
  dek: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  publicationDate: string; // ISO date format: YYYY-MM-DD
  displayDate: string; // Human-friendly e.g. "October 2026"
  lastUpdated?: string;
  readingTime: string; // e.g. "6 min read"
  contentType: ContentType;
  topics: ArticleTopic[];
  summary: string;
  
  // Full article body for MWT originals and syndicated pieces (Markdown or structured content)
  body?: string;
  
  // For external articles
  abstract?: string;
  whyItMatters?: string;
  excerpt?: string; // Short permissible quote/excerpt if allowed
  
  heroImage?: string;
  featured: boolean;
  
  publicationOrigin: PublicationOrigin;
  canonicalUrl: string;
  
  // External publication metadata
  externalPublicationName?: string;
  externalPublicationUrl?: string;
  
  publicationHistory?: PublicationHistoryEntry[];
  sourceNotes?: SourceNote[];
  disclosureNote?: string;
  whatThisArticleDoesNotClaim?: string[];
  
  status: ArticleStatus;
  
  relatedArticleSlugs?: string[];
  relatedPolicyTopics?: string[];
}

export interface AuthorProfile {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  focusAreas: string[];
  selectedPublications: {
    title: string;
    outlet: string;
    url?: string;
    date: string;
  }[];
}
