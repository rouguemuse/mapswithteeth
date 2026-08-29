export type GovernanceMode = "FORMING" | "ESTABLISHED";

export interface BoardCompetency {
  area: string;
  description: string;
}

export interface BoardCandidateSubmission {
  fullName: string;
  email: string;
  currentRole: string;
  linkedInUrl: string;
  areaOfExpertise: string[];
  relevantExperience: string;
  priorBoardExperience: string;
  whyInterested: string;
  potentialConflicts: string;
  expectedCapacity: string;
  type: "FOUNDING_BOARD" | "ADVISORY_CIRCLE";
  submittedAt: string;
}

export interface AppointedDirector {
  id: string;
  name: string;
  role: string; // e.g. "Board Chair", "Treasurer", "Secretary", "Director"
  bio: string;
  appointedDate: string;
  committeeAssignments: string[];
}
