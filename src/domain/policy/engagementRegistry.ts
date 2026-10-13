/**
 * MAPS WITH TEETH — ENGAGEMENT TRACKING & POLICY SUBMISSION REGISTRY
 * 
 * Provides a structured, source-backed tracking model for legislative, agency,
 * and oversight submissions.
 * 
 * Invariants:
 * 1. Engagement statuses are strictly tracking records, NOT replacements for
 *    the canonical nine-status Review Trace (which records substantive handling of evidence).
 * 2. Unknown statuses remain UNKNOWN.
 * 3. Never implies endorsement, adoption, or institutional validation.
 * 4. Strictly segregated from confidential case specifics (zero PII, zero private docket numbers).
 */

export type EngagementTrackingStatus =
  | "PROPOSAL_DRAFTED"
  | "SUBMITTED"
  | "RECEIPT_ACKNOWLEDGED"
  | "UNDER_REVIEW_EXPLICITLY_CONFIRMED"
  | "RESPONSE_RECEIVED"
  | "OUTCOME_DOCUMENTED"
  | "UNRESOLVED_OR_UNKNOWN";

export interface PolicyEngagementRecord {
  engagementId: string;
  trackingCode: string; // e.g. POL-001, POL-001A
  title: string;
  targetBody: string;
  targetReviewCycle: string;
  submissionDate?: string;
  trackingStatus: EngagementTrackingStatus;
  statusVerificationBasis: string;
  publicSummary: string;
  statutoryFocus: string[];
  keyProposals: string[];
  verifiedOutcomes: string;
  safeguardNotice: string;
  officialSourceUrls?: { label: string; url: string }[];
}

export const TEXAS_POLICY_ENGAGEMENT_REGISTRY: PolicyEngagementRecord[] = [
  {
    engagementId: "eng-pol-001",
    trackingCode: "POL-001",
    title: "Cross-System Continuity Infrastructure Policy Brief (v0.1)",
    targetBody: "Texas Sunset Advisory Commission, Legislative Staff, and Agency Leadership",
    targetReviewCycle: "2026–2027 Texas Legislative & Sunset Interim",
    submissionDate: "October 2026",
    trackingStatus: "PROPOSAL_DRAFTED",
    statusVerificationBasis: "Internal policy brief drafted and distributed for legislative, judicial administrator, and academic peer review; discussion draft version 0.1.",
    publicSummary: "Synthesizes statutory precedents under existing Texas law (including CAC MOUs under Tex. Fam. Code § 264.403 and joint investigations under § 261.301) to propose an anti-surveillance cross-system continuity architecture without creating centralized allegation dossiers.",
    statutoryFocus: [
      "Tex. Fam. Code §§ 261.301(f), 261.3011 (Joint Investigations)",
      "Tex. Fam. Code §§ 264.403, 264.4031, 264.406 (CAC Working Protocols & MDT Information Sharing)",
      "Tex. Gov't Code §§ 791.003, 791.011 (Interlocal Cooperation Act Pilot Vehicles)",
      "34 U.S.C. § 12291(b)(2) (VAWA Confidentiality Boundaries)"
    ],
    keyProposals: [
      "Six core continuity modules (Linked-Matter Review, Closed-Loop Referrals, Continuity Receipts, Cumulative Review Triggers, Decision Ownership, Context Before Closure)",
      "Proposed 90-day multi-agency continuity mechanics pilot using 100% synthetic demonstration data",
      "Incremental statutory adoption matrix separating internal agency SOPs from legislative mandates"
    ],
    verifiedOutcomes: "Discussion draft published for public policy review. No institutional endorsement claimed or implied.",
    safeguardNotice: "Discussion proposal only. Does not constitute adopted agency rule, legislative statute, or established court procedure."
  },
  {
    engagementId: "eng-pol-001a",
    trackingCode: "POL-001A",
    title: "DFPS Sunset Public Input Form Submission & Structural Policy Memo",
    targetBody: "Texas Sunset Advisory Commission Staff & Commission Members",
    targetReviewCycle: "Texas DFPS 2026–2027 Sunset Review (Public Hearing Scheduled Nov 18–19, 2026)",
    submissionDate: "October 2026",
    trackingStatus: "SUBMITTED",
    statusVerificationBasis: "Submitted via Texas Sunset Advisory Commission official public input portal (sunset.texas.gov/input-form) prior to the published staff report and November 2026 hearing.",
    publicSummary: "Formal structural policy input requesting Sunset staff examine administrative continuity, closed-loop referral tracking, and context-before-closure practices across Department of Family and Protective Services (DFPS) system boundaries.",
    statutoryFocus: [
      "Tex. Fam. Code § 261.301 (Investigation of Report)",
      "Tex. Fam. Code § 264.406(e) (Multidisciplinary Information Exchange)",
      "Texas Sunset Act (Tex. Gov't Code Chapter 325)"
    ],
    keyProposals: [
      "Closed-loop referral metrics: Require DFPS casework management to record receiving entity acknowledgment status and designated next decision owner (proposed 48-hour pilot target)",
      "Context-Before-Closure checklist: Pre-closure administrative audit logging what related records were examined, requested but unavailable, or left unreviewed with stated rationale",
      "Cumulative multi-contact thresholds: Mandatory human supervisory review when 3+ fragmented reports or intake declinations occur regarding the same household across 90 days (strictly non-algorithmic)",
      "Low-risk 90-day synthetic pilot: Multi-partner stress test using synthetic test cases rather than live client PII"
    ],
    verifiedOutcomes: "Public comments and structural memorandum submitted to the Sunset Advisory Commission. Commission staff report pending publication as of October 2026 review; public testimony docketed for November 18–19, 2026.",
    safeguardNotice: "Formal public input submission. Submitted as independent structural policy input; not an official Sunset staff recommendation or agency-approved directive.",
    officialSourceUrls: [
      { label: "Texas Sunset Advisory Commission Input Portal", url: "https://www.sunset.texas.gov/input-form" },
      { label: "DFPS Review Information & Schedule", url: "https://www.sunset.texas.gov/reviews-and-reports/agencies/department-family-and-protective-services" }
    ]
  },
  {
    engagementId: "eng-pol-oca-admin",
    trackingCode: "POL-SUPP-OCA",
    title: "Administrative Review Inquiry on Evidence Traceability & Closure Procedures",
    targetBody: "DFPS Office of Consumer Affairs (OCA) & Supervisory Leadership",
    targetReviewCycle: "DFPS Administrative Oversight Review Cycle (Fall 2026)",
    submissionDate: "September–October 2026",
    trackingStatus: "UNDER_REVIEW_EXPLICITLY_CONFIRMED",
    statusVerificationBasis: "Written receipt confirmed by DFPS Office of Consumer Affairs on September 3, 2026, confirming complaint under review with substantive response pending. Supplemental factual and attendance records associated October 4, 2026. Substantive administrative outcome remains pending / unreceived.",
    publicSummary: "Administrative oversight inquiry examining systemic procedures for how DFPS logs, preserves, and reviews identified documentary evidence, direct witness routes, and related school/custody records prior to case disposition and administrative closure.",
    statutoryFocus: [
      "40 TAC Chapter 700 (Child Protective Services Administrative Rules)",
      "Tex. Fam. Code § 261.301 (Standards of Investigation)",
      "DFPS Office of Consumer Affairs Operating Procedures"
    ],
    keyProposals: [
      "Preservation of identified documentary evidence and direct-witness contact routes prior to closing inquiries",
      "Distinction between witness fear/safety barriers and 'noncooperation'",
      "Written supervisory response standard: Written complaints must receive written answers identifying what was reviewed and what governing authority applied rather than treating unexpected oral callbacks as case resolution",
      "Cumulative cross-case review rather than isolated consecutive closures"
    ],
    verifiedOutcomes: "Formal written acknowledgment of complaint receipt received from OCA; substantive closure or findings report remains pending / unknown. Tracking status is explicitly locked to confirmed review, with substantive outcome marked UNRESOLVED_OR_UNKNOWN until official written response is issued.",
    safeguardNotice: "Oversight complaint tracking record. Does not disclose private party identities, sealed court docket numbers, or minors' identifying information. Evaluates administrative process reliability and answerability."
  }
];

export interface OversightFailurePattern {
  id: string;
  patternCode: string;
  name: string;
  category: "INTAKE_SEAM" | "EVIDENTIARY_HANDLING" | "SUPERVISORY_OVERSIGHT" | "CROSS_JURISDICTIONAL";
  observedPhenomenon: string;
  administrativeMechanism: string;
  resultingRiskOrHarm: string;
  proposedProceduralReform: string;
  traceableVerificationRule: string;
}

export const OVERSIGHT_FAILURE_PATTERNS: OversightFailurePattern[] = [
  {
    id: "pat-oca-01",
    patternCode: "SEAM-OCA-REOPEN",
    name: "Administrative Closure Without Evidence Audit & Escalation Loop",
    category: "SUPERVISORY_OVERSIGHT",
    observedPhenomenon: "A complainant submits verified documentary records and direct-witness contact routes. The agency issues a standardized closure notice days later. When escalated to administrative oversight, the escalation is acknowledged but inherits the same lack of written answers as the original inquiry.",
    administrativeMechanism: "Oversight reviews often verify that a closing form was filed, but do not audit whether submitted digital evidence was opened, reviewed, or associated with the master case docket prior to sign-off.",
    resultingRiskOrHarm: "The human complainant is trapped in recursive escalation: reporting an investigative process failure, being told to escalate, receiving no written answers regarding what was reviewed, and having no mechanism to determine if the failure itself was audited.",
    proposedProceduralReform: "Written Supervisory Response Standard: For detailed written supervisory complaints, the agency must log: (1) what specific exhibits were inspected, (2) which role owned the review, (3) which rule or authority governed, and (4) the written rationale for closure.",
    traceableVerificationRule: "Review Trace Code: NOT_REVIEWED_REASON_RECORDED or REVIEWED with explicit exhibit itemization; prevents converting an unexpected oral callback into an administrative resolution."
  },
  {
    id: "pat-repeat-01",
    patternCode: "SEAM-REPEAT-PROVENANCE",
    name: "Repetition-Based Dismissal vs. Corroboration Inflation",
    category: "INTAKE_SEAM",
    observedPhenomenon: "When multiple reports occur regarding the same household, systems either: (a) treat repeated reports as self-proving risk without verifying independent sources, or (b) dismiss successive reports as 'prior history already investigated' without checking for genuinely new evidence.",
    administrativeMechanism: "Intake databases lack granular provenance tagging. A new incident report containing an independent objective record (e.g. school attendance transcript or medical evaluation) is administratively aggregated with prior narratives and screened out under duplicate-matter tags.",
    resultingRiskOrHarm: "Genuinely new safety evidence is silently erased by chronological proximity to prior reports, while uncorroborated single-source rumors can appear corroborated if retold across multiple channels.",
    proposedProceduralReform: "Provenance-Aware Repeat Review: Separate duplication from new incidents and independent documentary evidence. Prohibit report-count credibility scoring while mandating human supervisory review when three or more contacts occur across a 90-day window.",
    traceableVerificationRule: "Review Trace Code: DUPLICATIVE_DERIVATIVE for retold accounts; separate itemized REVIEWED status for newly submitted independent documentation."
  },
  {
    id: "pat-cross-juris-01",
    patternCode: "SEAM-XJURIS-DROPPED",
    name: "Unacknowledged Cross-Jurisdictional Referrals",
    category: "CROSS_JURISDICTIONAL",
    observedPhenomenon: "An agency in one county or municipality concludes an inquiry with an outbound referral to an adjacent county or specialized department. The participant assumes the second entity is acting, but the second entity never logs an intake.",
    administrativeMechanism: "Referrals terminate at 'dispatched.' The sending system records 'referred out' and removes the matter from active casework metrics without receiving a delivery confirmation or capacity acceptance.",
    resultingRiskOrHarm: "Critical protection, child-safety, or housing matters disappear into jurisdictional dead zones. Neither agency maintains responsibility, and the individual suffers unmitigated harm while assuming active oversight.",
    proposedProceduralReform: "Closed-Loop Handoff & Decision Ownership: Outbound referrals must bind a transmission timestamp, a receiving entity contact, and a proposed 48-hour acknowledgment benchmark. Referrals unconfirmed after 14 days trigger an automated supervisor stall flag.",
    traceableVerificationRule: "Review Trace Code: REFERRED with explicit recipient acknowledgment receipt; sender retains responsibility until successor entity accepts."
  },
  {
    id: "pat-post-closure-01",
    patternCode: "SEAM-POST-CLOSURE",
    name: "Supplemental Evidence Arriving After Administrative Closure",
    category: "EVIDENTIARY_HANDLING",
    observedPhenomenon: "A participant or third party obtains an authoritative objective record (e.g. certified custody decree, police incident supplement, or attendance record) after an agency has closed its file.",
    administrativeMechanism: "Agency operating software classifies the case as 'FINALIZED / CLOSED.' Inbound mail or portal submissions are returned with boilerplate notices to 'file a new report,' resetting the entire inquiry to zero and severing continuity.",
    resultingRiskOrHarm: "Documentary records that directly contradict or clarify the basis of the prior closure are not evaluated against the historical file, forcing the participant to start completely from scratch.",
    proposedProceduralReform: "Versioned File Addendum & Context Before Closure: Allow versioned supplemental records to attach to finalized dockets under immutable audit logs without altering the historical record, prompting supervisory threshold evaluation.",
    traceableVerificationRule: "Continuity Contact Record Versioning: Generates recordVersion: 2 with supersedesRecordId and explicit addendum history rather than overwriting."
  },
  {
    id: "pat-fear-barrier-01",
    patternCode: "SEAM-FEAR-BARRIER",
    name: "Misclassifying Safety Fears & Access Barriers as Noncooperation",
    category: "INTAKE_SEAM",
    observedPhenomenon: "A witness, family member, or survivor is reluctant to participate in an in-person interview due to documented threats, phone disruption, or fear of retaliation. Casework notes record the witness as 'uncooperative' or 'refusing to participate.'",
    administrativeMechanism: "Agency intake forms often offer binary options: 'Cooperated' or 'Refused.' Structural obstacles, fear of violence, lack of transport, and communication cutoff are flattened into active unwillingness.",
    resultingRiskOrHarm: "Reluctance rooted in fear is used to downgrade credibility or dismiss the safety concern, perversely rewarding the intimidating party's interference.",
    proposedProceduralReform: "Barrier-Aware Participation Coding: Mandate multi-attribute participation coding distinguishing express refusal, communication disruption, reported safety barriers, lack of transportation, and unknown reasons.",
    traceableVerificationRule: "Barrier-Aware Cooperation taxonomy: Prevents inferring adverse motives from survival behavior or structural friction."
  }
];
