import {
  PolicyEngagementRecord,
  OversightFailurePattern,
  SyntheticApplicationScenario
} from "@/types/policyEngagement";

/**
 * SOURCE-BACKED POLICY ENGAGEMENT REGISTRY
 *
 * Tracks official submissions, public policy briefs, and administrative filings
 * made by the Maps With Teeth initiative.
 *
 * Rules:
 * - Differentiates between Proposals Drafted, Submitted, Acknowledged, Under Review, and Unknowns.
 * - Unknown outcomes MUST remain explicitly marked UNRESOLVED_OR_UNKNOWN.
 * - Never claims agency adoption, endorsement, or validation without corroborating public records.
 */
export const policyEngagementRecords: PolicyEngagementRecord[] = [
  {
    id: "POL-001",
    title: "Cross-System Continuity, Evidence Integrity, and Administrative Traceability: Structural Recommendations for the Texas DFPS Sunset Review",
    shortTitle: "DFPS Sunset Structural Submission",
    category: "SUNSET_REVIEW",
    targetEntity: "Texas Sunset Advisory Commission",
    targetRole: "Commission Members & Sunset Staff",
    dateDrafted: "October 2026",
    dateSubmitted: "October 2026",
    status: "SUBMITTED",
    statusDetails: "Prepared and submitted via the official Texas Sunset Advisory Commission public input portal for the 2026–2027 review cycle.",
    verifiedOutcome: "Public input submission delivered via official portal (sunset.texas.gov/input-form). DFPS Self-Evaluation Report published (Oct 2025); Sunset Commission Staff Report pending publication; per official Sunset notice, the tentative November 18–19 commission meeting has been rescheduled for December 2–3, 2026. Witness appearance or testimony is not confirmed. No institutional endorsement or adoption claimed.",
    sourceCitation: "Maps With Teeth Policy Docket POL-001 (October 2026); Texas Sunset Advisory Commission Agency Review Docket 2026–27.",
    officialReferenceUrl: "https://www.sunset.texas.gov/reviews-and-reports/agencies/department-family-and-protective-services",
    confidentialityBoundary: "Public policy input. Excludes private identifying case records, child information, and unverified allegations. Structured purely around procedural and quality-assurance mechanics.",
    keyProposals: [
      "Mandate closed-loop referral acknowledgment metrics (proposed 48-hour pilot target) across DFPS interagency handoffs.",
      "Implement a standardized pre-closure administrative checklist verifying what related records were examined before case termination.",
      "Establish human supervisory cumulative-contact reviews for households with three or more fragmented intakes within 90 days.",
      "Pilot a 90-day closed-loop referral mechanics trial using 100% synthetic demonstration data."
    ]
  },
  {
    id: "POL-001A",
    title: "DFPS Sunset Submission: Form Text and Procedural Submission Checklist",
    shortTitle: "Sunset Input Form Text & Submission Protocol",
    category: "SUNSET_REVIEW",
    targetEntity: "Texas Sunset Advisory Commission",
    targetRole: "Public Input Processing Coordinator",
    dateDrafted: "October 2026",
    dateSubmitted: "October 2026",
    status: "SUBMITTED",
    statusDetails: "Internal procedural checklist and form text prepared to complete the portal submission at sunset.texas.gov/input-form alongside POL-001.",
    verifiedOutcome: "Portal submission completed in October 2026. Confirmed procedural compliance: under 25MB, zero private case attachments, zero requests for Sunset to adjudicate individual cases. Individual testimony is not confirmed.",
    sourceCitation: "Maps With Teeth Submission Docket POL-001A (October 2026).",
    officialReferenceUrl: "https://www.sunset.texas.gov/input-form",
    confidentialityBoundary: "Internal procedural checklist prohibiting inclusion of unredacted private evidence or active litigation records.",
    keyProposals: [
      "Distinguishes procedural quality assurance from individual case adjudication.",
      "Requests Sunset staff examine whether DFPS has uniform, auditable ways to record handling of identified material.",
      "Prohibits report-count credibility scoring while preserving the distinction between repeated allegations and new evidence."
    ]
  },
  {
    id: "DFPS-OCA-ADM-01",
    title: "Formal Request for Administrative Review: Evidence Ingestion, Alternative Response Notices, and Closure Integrity",
    shortTitle: "DFPS Office of Consumer Affairs Administrative Review Filing",
    category: "ADMINISTRATIVE_OVERSIGHT",
    targetEntity: "DFPS Office of Consumer Affairs (OCA)",
    targetRole: "Director of Consumer Affairs & Regional Program Leadership",
    dateDrafted: "August 8, 2026",
    dateSubmitted: "August 8, 2026 (Followed up Sept 2, 2026; Supplemented Oct 4, 2026)",
    status: "UNDER_REVIEW",
    statusDetails: "Internal correspondence records receipt by DFPS OCA on September 3, 2026, stating the inquiry was received and under review. Follow-up records provided in October 2026.",
    verifiedOutcome: "Receipt acknowledged in internal correspondence on September 3, 2026. No public agency finding or formal docket determination has been published. Substantive administrative outcome remains UNRESOLVED_OR_UNKNOWN as of October 2026.",
    sourceCitation: "DFPS Office of Consumer Affairs Administrative Inquiries & Supervisory Review Correspondence (2026). Specific docket numbers and family identifiers redacted for privacy.",
    confidentialityBoundary: "Administrative process records. All child identifying names, private party details, docket numbers, and sensitive exhibits are strictly excluded. Presented solely as systemic process analysis.",
    keyProposals: [
      "Audit why an agency closure notice asserted participant 'declined to participate' when participant never declined and safety concerns involved another household.",
      "Examine why an intake was closed with 'no basis for intervention' shortly after investigator confirmed receipt of evidence, with no record evidence was reviewed.",
      "Establish enforceable standards for ingesting objective supplemental records (custody orders, school attendance logs) arriving post-closure.",
      "Address the absence of binding timelines or closed-loop supervisory requirements in internal consumer affairs reviews."
    ]
  },
  {
    id: "TX-BRIEF-01",
    title: "Texas Policy Brief: Cross-System Continuity Infrastructure (Version 0.1 Discussion Draft)",
    shortTitle: "Texas Continuity Policy Brief v0.1",
    category: "LEGISLATIVE_BRIEF",
    targetEntity: "Texas Legislature & State Agency Leadership",
    targetRole: "Legislative Committees on Human Services & Criminal Jurisprudence",
    dateDrafted: "October 2026",
    status: "PROPOSAL_DRAFTED",
    statusDetails: "Published discussion draft circulated to policy analysts, legal aid attorneys, and legislative directors.",
    verifiedOutcome: "Circulated for peer and stakeholder review. Informs legislative concept proposals for the 89th/90th Texas Legislative Sessions. Not introduced as enacted bill or agency rule.",
    sourceCitation: "Maps With Teeth Policy Lab Working Paper MWT-PB-TX-2026-01.",
    confidentialityBoundary: "Fully public research whitepaper. Exclusively cites public Texas statutes (Family Code, Government Code, Code of Criminal Procedure) and published research.",
    keyProposals: [
      "Crosswalks existing Texas multidisciplinary precedents (Tex. Fam. Code §§ 261.301, 264.403, 264.406).",
      "Defines the Six Core Continuity Modules (Linked-Matter, Closed-Loop, Receipt, Cumulative Review, Decision Ownership, Context Before Closure).",
      "Introduces the 4-Tier Incremental Adoption Matrix (Agency SOP -> Interlocal Pilot -> Sunset Recommendation -> State Legislation)."
    ]
  },
  {
    id: "POL-002",
    title: "Administrative Traceability Pilot: 90-Day Mechanics Specification",
    shortTitle: "90-Day Mechanics Pilot Memo",
    category: "PILOT_SPECIFICATION",
    targetEntity: "Municipal & County Frontline Stakeholders",
    targetRole: "Victim Service Navigators, Legal Aid Intake Directors, Agency Supervisors",
    dateDrafted: "October 2026",
    status: "PROPOSAL_DRAFTED",
    statusDetails: "Structured operational memo detailing pilot protocols, metrics, and interagency agreements.",
    verifiedOutcome: "Drafted and verified against deterministic test harness. Ready for partner exploration under Tex. Gov't Code Ch. 791 (Interlocal Cooperation Act). Not yet launched in live agency operations.",
    sourceCitation: "Maps With Teeth Implementation Series MWT-MEMO-AGY-002 (October 2026).",
    confidentialityBoundary: "Strictly requires Phase 1 to operate on 100% synthetic demonstration data with 0% live survivor PII.",
    keyProposals: [
      "Evaluate narrow single-referral pathway across 2–3 participating community organizations.",
      "Audit 4 core metrics: Acknowledgment Rate (>95%), Time to Acknowledgment (<48h proposed pilot target), Decision-Owner Rate (100%), and Lost-Handoff Rate (0%).",
      "Provide reproducible open-source audit logs verifying referral status transitions without centralized data lakes."
    ]
  }
];

/**
 * REFINED OVERSIGHT FAILURE PATTERNS
 *
 * Derived from empirical analysis of administrative closures, consumer affairs filings,
 * and multi-system case handling.
 *
 * Explicitly distinguishes:
 * 1. Observed Event (What occurred procedurally)
 * 2. Administrative Response (How institutions logged or disposed of it)
 * 3. Working Hypothesis (Why the breakdown occurred between procedures)
 * 4. Proposed Procedural Reform (The structural fix)
 */
export const oversightFailurePatterns: OversightFailurePattern[] = [
  {
    id: "FAIL-01",
    name: "Administrative Mischaracterization & False Declination",
    tagline: "Form notices misrepresenting participant engagement or location of risk",
    observedEvent:
      "A reporting party contacts an investigative intake unit requesting evaluation of safety concerns occurring in a separate household. The agency issues a standardized intake disposition notice asserting that the reporting party was offered and declined voluntary diversion services, and closes the file citing an absence of safety concerns in the reporting party's residence, without examining the separate location where the risk was alleged.",
    administrativeResponse:
      "The case is categorized under a voluntary-service declination code and closed administratively with zero ongoing investigation, despite the reporting party never declining and the reported danger residing in an entirely separate residence.",
    workingHypothesis:
      "Casework triage systems incentivize fast clearance of alternative response queues. When contact attempts encounter scheduling friction or communication hurdles, intake software defaults to form declination codes rather than recording actual participation facts.",
    proposedReform:
      "Enforce the Barrier-Aware Cooperation model. Require explicit participant signature or timestamped verification for any recorded 'declination', and require intake notices to specify which physical household was assessed for safety.",
    relevantModules: ["Module 06: Context Before Closure", "Module 03: Continuity Receipt"],
    reviewTraceImplication:
      "A participant-held Continuity Receipt records the true interaction record, preventing an agency from asserting a verbal declination that never occurred."
  },
  {
    id: "FAIL-02",
    name: "Rapid Post-Acknowledgment Closure Without Evidence Review",
    tagline: "Confirming receipt of material evidence followed immediately by form closure",
    observedEvent:
      "A participant submits third-party documentary or recorded evidence to an intake worker, who acknowledges receipt. Shortly thereafter, the agency issues a standardized form disposition notice concluding that no basis for intervention exists, without documenting whether the submitted materials were reviewed, transcribed, or evaluated in the safety assessment.",
    administrativeResponse:
      "The agency closes the inquiry without transcribing or indexing the evidence, uploading it to the permanent file, or documenting whether the assigned investigator substantively examined it prior to supervisor sign-off.",
    workingHypothesis:
      "High caseworker caseloads create pressure to clear intake dockets before monthly reporting deadlines. Incoming exhibits that arrive near a planned closure window are formally received but practically bypassed.",
    proposedReform:
      "Implement the 9-Status Review Trace. An agency cannot finalize disposition until every specifically acknowledged evidentiary item is explicitly marked as REVIEWED, NOT_MATERIAL_REASON_RECORDED, or OUTSIDE_AUTHORITY with a supervisor-signed rationale.",
    relevantModules: ["Module 06: Context Before Closure", "Module 07: Considered Information Documentation"],
    reviewTraceImplication:
      "Eliminates the 'silent bypass'. Requires explicit administrative accounting for specifically acknowledged evidence before closure can be executed."
  },
  {
    id: "FAIL-03",
    name: "Post-Closure Supplemental Evidence Ingestion Gap",
    tagline: "Objective documents arriving after closure enter administrative purgatory",
    observedEvent:
      "Following an administrative closure, official third-party documentation arrives (such as certified judicial orders, institutional attendance records, or parallel law enforcement offense reports) that was unavailable during the initial intake period.",
    administrativeResponse:
      "The agency informs the participant that 'the case is closed' and directs them to make an entirely new intake report, treating the new documentary evidence as an isolated event rather than context for prior closures.",
    workingHypothesis:
      "Child welfare and police intake software separate 'open investigations' from 'closed archives.' Once a case file reaches closed status, frontline staff have no lightweight mechanism to attach supplemental exhibits or trigger a supervisory reopen check without opening a brand new high-stakes investigation.",
    proposedReform:
      "Create an Administrative Pre-Closure and Reopening Check protocol. When certified third-party controlling records arrive within 60 days of closure, an automated supervisory review trace must verify whether the new records contradict prior closure assumptions.",
    relevantModules: ["Module 01: Linked-Matter Review", "Module 06: Context Before Closure"],
    reviewTraceImplication:
      "Prevents objective controlling records from being lost in the void between closed investigation files and new intake reports."
  },
  {
    id: "FAIL-04",
    name: "The Oversight Black Hole: Unenforceable Review Timelines",
    tagline: "Administrative complaint bodies acknowledging reviews with zero closed-loop tracking",
    observedEvent:
      "A participant files a formal inquiry or grievance with an internal agency oversight division. The oversight office sends a standard acknowledgment confirming receipt and stating the matter is 'under review.' Months pass with zero substantive written findings, during which frontline agencies continue making decisions based on uncorrected files.",
    administrativeResponse:
      "The inquiry sits in an unmetered administrative backlog. No binding statutory deadline compels a written disposition, and no notice is dispatched to frontline workers halting reliance on disputed records.",
    workingHypothesis:
      "Internal oversight offices lack statutory enforcement teeth and closed-loop handoff infrastructure. They operate as customer-service grievance logs rather than evidentiary review layers.",
    proposedReform:
      "Integrate closed-loop tracking into administrative oversight. Oversight reviews must log milestone statuses, bind designated supervisory reviewers, and provide auditable status updates within 30 days.",
    relevantModules: ["Module 02: Closed-Loop Referrals", "Module 05: Decision Ownership"],
    reviewTraceImplication:
      "Transforms open-ended complaint black holes into auditable, milestone-driven administrative reviews."
  },
  {
    id: "FAIL-05",
    name: "Process Friction & Witness Fear Mislabeled as Non-Cooperation",
    tagline: "Retaliatory communication loss or fear converted into evidence against the victim",
    observedEvent:
      "Following a report, external interference occurs—such as utility or cellular service termination by an adverse party, sudden loss of contact access, or direct witness intimidation. When an investigator attempts follow-up contact, the communication fails or a fearful witness hesitates to speak.",
    administrativeResponse:
      "The caseworker logs 'Participant failed to respond / uncooperative' and recommends closing the case or making an adverse parenting finding based on 'unwillingness to engage.'",
    workingHypothesis:
      "Administrative checkboxes offer binary choices: 'Cooperated' or 'Refused.' They lack nuanced categories to record third-party communication interference, retaliatory conduct, or safety-induced silence.",
    proposedReform:
      "Deploy the Barrier-Aware Cooperation taxonomy: distinguish EXPRESS_REFUSAL from ACCESS_BARRIER, SAFETY_BARRIER, and PARTIAL_COOPERATION. Prohibit adverse inferences when objective barriers explain communication lapses.",
    relevantModules: ["Module 03: Continuity Receipt", "Safeguard: Barrier-Aware Cooperation"],
    reviewTraceImplication:
      "Ensures institutional records document the friction that produced the silence, rather than weaponizing the silence against the victim."
  },
  {
    id: "FAIL-06",
    name: "Successive Disconnected Closures vs. Cumulative Pattern Review",
    tagline: "Evaluating repeated reports across 12 months as isolated single-event snapshots",
    observedEvent:
      "Over a multi-month period, multiple distinct intakes involving the same household or individuals are evaluated by different intake units—for example, separate reports concerning supervisory lapses, environmental hazards, or child welfare flags. Each report is evaluated in isolation as a low-level incident.",
    administrativeResponse:
      "Each report is assigned to a different worker, evaluated solely on whether the single immediate incident meets statutory removal thresholds, and closed as 'no basis for intervention.' No worker reviews the composite timeline.",
    workingHypothesis:
      "Casework performance metrics reward rapid per-incident clearance. Lack of cross-case timeline synthesis blinds agencies to escalating chronic dysfunction.",
    proposedReform:
      "Implement Cumulative-Pattern Review Triggers (Module 04). Three fragmented contacts regarding the same household within a 90–360 day window mandate an automatic multidisciplinary case review, without relying on automated AI risk algorithms.",
    relevantModules: ["Module 04: Cumulative Review Triggers", "Module 01: Linked-Matter Review"],
    reviewTraceImplication:
      "Synthesizes multiple closed cases into a continuous timeline, ensuring cumulative risk is visible to human supervisors."
  }
];

/**
 * CONCRETE SYNTHETIC APPLICATIONS
 *
 * Demonstrates how Continuity Receipts (participant view) and Review Traces (agency view)
 * operate across 4 concrete institutional failure scenarios.
 *
 * All scenarios are strictly synthetic demonstration data.
 */
export const syntheticApplications: SyntheticApplicationScenario[] = [
  {
    id: "APP-01",
    title: "Scenario 1: Unacknowledged Cross-Agency Referral",
    scenarioType: "UNACKNOWLEDGED_REFERRAL",
    problemDescription:
      "A municipal police department responds to an escalating family crisis and dispatches an electronic referral to the county child welfare intake unit. The officer closes their local incident log as 'Referred to Child Welfare.' The child welfare intake inbox never acknowledges receipt, and the referral sits unread.",
    participatingEntities: ["Municipal Police Department", "County Child Welfare Intake"],
    withoutContinuity: [
      "Police officer believes child welfare has assumed responsibility and takes no further action.",
      "Child welfare staff never open the file due to an inbox transmission glitch.",
      "The survivor believes police informed child welfare, while child welfare tells the family no report exists.",
      "Result: 'Sent' was treated as 'Received'. The referral vanished at the institutional seam."
    ],
    withContinuityReceipt: {
      participantView:
        "Participant holds a client-side Continuity Receipt with a timestamped record showing Police Dispatch (Status: REFERRED, Target: Child Welfare). The receipt displays an alert: 'UNACKNOWLEDGED BY RECEIVING ENTITY (48h Pilot Target Elapsed)'.",
      reviewTraceStatus:
        "Sender: REFERRED (Recipient: Child Welfare Intake, Timestamp: 2026-10-02T14:22Z). Receiver: MISSING / NOT_RECEIVED.",
      decisionOwnerBound:
        "Decision ownership remains locked to the sending police supervisor until electronic acknowledgment is signed by child welfare.",
      auditTrailPreserved:
        "An automated 14-day supervisor flag alerts police command that the referral was never accepted, triggering direct human follow-up."
    },
    keyTakeaway:
      "A referral is an outbound dispatch, not an administrative handoff. Responsibility cannot transition until receipt is electronically confirmed."
  },
  {
    id: "APP-02",
    title: "Scenario 2: Multi-Institution Disconnected Closures",
    scenarioType: "MULTI_INSTITUTION_CLOSURE",
    problemDescription:
      "Across 60 days, an elementary school flags severe unexcused absences (Report A), local police document a late-night domestic disturbance (Report B), and a civil protective order application is drafted (Filing C). Each institution reviews its single event and closes it as 'below individual statutory threshold.'",
    participatingEntities: ["Public School District", "Local Police Department", "County Family Court"],
    withoutContinuity: [
      "School notes truancy but knows nothing of the police domestic disturbance report.",
      "Police log an isolated verbal dispute and clear the scene without knowing of the school's safety flags.",
      "Court clerk notes protective order application lacks supporting police reports.",
      "Result: Three individual rational closures produce total collective failure."
    ],
    withContinuityReceipt: {
      participantView:
        "Participant's portable Continuity Receipt binds the cryptographic hashes of all three touchpoints into a unified administrative timeline without exposing sensitive private narratives.",
      reviewTraceStatus:
        "All three agencies query the presence of linked matters. Review Trace logs: LINKED_MATTERS_DISCOVERED (3 encounters / 60 days).",
      decisionOwnerBound:
        "Triggers Cumulative Review (Module 04), designating a multidisciplinary team liaison to review the composite record.",
      auditTrailPreserved:
        "Pre-closure checklist prevents individual agencies from closing files with 'no safety concerns' without acknowledging concurrent parallel filings."
    },
    keyTakeaway:
      "Three low-level incidents can represent severe cumulative danger. Continuity allows authorized reviewers to discover related matters without centralizing surveillance data."
  },
  {
    id: "APP-03",
    title: "Scenario 3: Post-Closure Supplemental Evidence Ingestion",
    scenarioType: "POST_CLOSURE_SUPPLEMENTAL_EVIDENCE",
    problemDescription:
      "Child welfare issues a form letter closing an intake investigation as 'no basis for intervention.' Two days later, the reporting parent secures a certified court custody order and official school attendance records proving chronic truancy and parental impairment.",
    participatingEntities: ["Child Protective Investigations", "County Family Court", "School Attendance Office"],
    withoutContinuity: [
      "Worker states: 'Case is closed. You must call the hotline and start over.'",
      "Hotline operator screens out the new call as a duplicate of the recently closed case.",
      "Certified judicial and educational records sit unreviewed in an unassigned intake queue.",
      "Result: Administrative closure acts as a brick wall against newly discovered objective evidence."
    ],
    withContinuityReceipt: {
      participantView:
        "Participant issues an Exhibit Supplement to their existing Continuity Receipt, attaching certified custody order hashes and timestamping delivery to agency leadership.",
      reviewTraceStatus:
        "Agency logs Review Trace: SUPPLEMENTAL_EVIDENCE_RECEIVED_POST_CLOSURE. Status must be recorded as REVIEWED or NOT_REVIEWED_REASON_RECORDED within 10 days.",
      decisionOwnerBound:
        "Assigned to the Unit Supervisor for administrative reopening audit.",
      auditTrailPreserved:
        "If the agency declines to reopen, the supervisor must record the specific legal rationale, preventing the evidence from silently disappearing."
    },
    keyTakeaway:
      "Closing an administrative file does not freeze reality. Structured review traces ensure supplemental evidence arriving post-closure receives accountable evaluation."
  },
  {
    id: "APP-04",
    title: "Scenario 4: Cross-Jurisdictional Handoff Deficit",
    scenarioType: "CROSS_JURISDICTION_HANDOFF",
    problemDescription:
      "A survivor reports stalking and vehicle tampering that begins in an incorporated municipality and extends across the county line into an unincorporated rural area. Municipal police state the vehicle incident occurred outside city limits; county sheriff states the harassment originated inside the city.",
    participatingEntities: ["Municipal Police Department", "County Sheriff's Office"],
    withoutContinuity: [
      "Municipal police take an informational report and close it as 'jurisdiction outside city.'",
      "Sheriff's deputy tells survivor 'this belongs with the city' and refuses to open an offense report.",
      "Survivor is caught in a jurisdictional ping-pong where neither agency accepts investigative responsibility.",
      "Result: 'Nobody's case' failure mode. The seam between city and county swallows public safety."
    ],
    withContinuityReceipt: {
      participantView:
        "Continuity Receipt documents the exact jurisdictional handoff attempt, timestamping the municipal dispatch and the county intake interaction.",
      reviewTraceStatus:
        "Municipal Police: REFERRED (Target: County Sheriff). County Sheriff: OUTSIDE_AUTHORITY or ACCEPTED.",
      decisionOwnerBound:
        "Standard Module 05 enforces bilateral handoff: municipal agency cannot close its file until County Sheriff formally accepts or rejects jurisdiction in writing.",
      auditTrailPreserved:
        "If rejected, the sending agency supervisor is alerted, triggering inter-agency liaison resolution under the Texas Interlocal Cooperation Act."
    },
    keyTakeaway:
      "Cross-jurisdictional boundaries are where accountability most frequently dies. Mandating bilateral decision ownership eliminates jurisdictional runaround."
  }
];
