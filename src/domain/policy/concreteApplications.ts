/**
 * MAPS WITH TEETH — CONCRETE APPLICATION DEMONSTRATIONS
 * 
 * Provides 4 clearly labeled synthetic examples illustrating how Continuity Receipts
 * and Review Traces document complex institutional failure patterns.
 * 
 * Invariants:
 * - 100% Synthetic / Fictional Demonstration Data (Zero real-world PII or active case numbers).
 * - Calibrated non-claims and non-implication notices attached to each scenario.
 */

import { ReviewTraceCode } from "@/components/safeguards/ReviewTraceComponent";

export interface ConcreteApplicationScenario {
  id: string;
  scenarioCode: string;
  title: string;
  failurePattern: string;
  narrativeOverview: string;
  conventionalSystemBehavior: string;
  continuityReceiptApplication: {
    receiptId: string;
    issuingParty: string;
    verifiedMetadataLogged: string[];
    nonImplicationNotices: string[];
  };
  reviewTraceApplication: {
    materialDescription: string;
    assignedTraceCode: ReviewTraceCode;
    administrativeRationale: string;
    nextDecisionOwner: string;
    proceduralEffect: string;
  };
  policyImplication: string;
}

export const CONCRETE_APPLICATION_SCENARIOS: ConcreteApplicationScenario[] = [
  {
    id: "app-synth-01",
    scenarioCode: "SYNTH-APP-01",
    title: "Scenario A: Agency Receives Information but Makes No Traceable Referral",
    failurePattern: "Unconfirmed Outbound Referral / The Seam Void",
    narrativeOverview: "A survivor visits Municipal Crisis Intake Desk presenting a residential lease and reporting imminent lock tampering by an abusive co-tenant. The intake worker mentions community legal aid and notes 'referred to civil legal' in internal agency software, but issues no contact record, sends no referral token, and does not notify the legal aid provider.",
    conventionalSystemBehavior: "Municipal desk closes the file as 'Information Provided / Referred Out.' Legal aid has zero record of the client. When lock tampering occurs 48 hours later, neither agency has documentation of the encounter or next steps.",
    continuityReceiptApplication: {
      receiptId: "REC-SYNTH-2026-001",
      issuingParty: "Municipal Crisis Intake Desk (Frontline Specialist #M-04)",
      verifiedMetadataLogged: [
        "In-person contact timestamp: 2026-10-14 09:42 CST",
        "Material presented: Residential Lease (Pages 1–3), marked REVIEWED_FOR_ROUTING",
        "Action taken: Information and referral provided",
        "Next Route Suggested: Regional Legal Aid (Tenancy Defense Unit) marked NOT_CONFIRMED"
      ],
      nonImplicationNotices: [
        "No agency liability or whole-matter acceptance",
        "Suggested route is NOT confirmed by receiving entity until accepted"
      ]
    },
    reviewTraceApplication: {
      materialDescription: "Residential Lease Agreement & Notice of Intent to Vacate",
      assignedTraceCode: "REFERRED",
      administrativeRationale: "Dispatched to Regional Legal Aid via secure token. Status remains REFERRED with receiving acknowledgment UNKNOWN until accepted.",
      nextDecisionOwner: "Regional Legal Aid Intake Supervisor (Handoff Target: 48h pilot benchmark)",
      proceduralEffect: "Prevents municipal desk from closing matter without tracking; triggers supervisor audit flag if handoff remains unacknowledged after 14 days."
    },
    policyImplication: "Demonstrates how Module 02 (Closed-Loop Referrals) and Module 05 (Decision Ownership) transform unconfirmed suggestions into auditable transitions."
  },
  {
    id: "app-synth-02",
    scenarioCode: "SYNTH-APP-02",
    title: "Scenario B: Several Institutions Individually Closing Matters While Related Concerns Remain Unresolved",
    failurePattern: "Fragmented Screen-Outs & Institutional Amnesia",
    narrativeOverview: "Over a 60-day period, three separate public entities encounter related safety concerns regarding one household: (1) Municipal Police file an informational report for verbal harassment; (2) County Child Welfare screens out an intake report as 'insufficient immediate danger'; (3) School attendance office records repeated unexplained absences. Each agency closes its respective ticket as isolated.",
    conventionalSystemBehavior: "Each agency acts within its narrow boundary and closes its matter without awareness that parallel agencies are closing identical concerns, obscuring cumulative risk.",
    continuityReceiptApplication: {
      receiptId: "REC-SYNTH-2026-002",
      issuingParty: "Participant-Held Continuity Contact Vault (Client-Side)",
      verifiedMetadataLogged: [
        "Encounter 1: Municipal Police CAD #2026-CAD-8812 (Informational Log)",
        "Encounter 2: County Child Welfare Intake Reference #TX-5510-A (Screen-Out)",
        "Encounter 3: School Attendance Notification Letter (8 Absences / 7 Tardies)",
        "Participant holds portable receipt demonstrating 3 institutional touches in 60 days"
      ],
      nonImplicationNotices: [
        "Zero centralized surveillance registry; record is client-held",
        "Related does not mean proven: linked encounters trigger human inquiry, not automatic findings"
      ]
    },
    reviewTraceApplication: {
      materialDescription: "Cumulative Three-Encounter Portfolio (Police CAD + Welfare Screen-Out + Attendance Log)",
      assignedTraceCode: "REVIEWED",
      administrativeRationale: "Threshold evaluation: 3 uncoordinated encounters across 60 days triggers mandatory human supervisory review under Module 04.",
      nextDecisionOwner: "Supervisory Caseworker / Multidisciplinary Liaison (Tex. Fam. Code § 264.406 precedent)",
      proceduralEffect: "Forces human review of cross-system relationship before fourth unilateral closure can occur; completely prohibits algorithmic risk scoring."
    },
    policyImplication: "Demonstrates how Module 04 (Cumulative Review Triggers) and Linked-Matter signals enable human oversight of fragmented multi-agency patterns."
  },
  {
    id: "app-synth-03",
    scenarioCode: "SYNTH-APP-03",
    title: "Scenario C: Supplemental Evidence Arriving After Administrative Closure",
    failurePattern: "Post-Closure Ingestion Barrier / Administrative Lockout",
    narrativeOverview: "Child Protective Services issues a standardized closure letter stating 'unable to determine safety risk due to lack of independent collateral witnesses.' Three days after closure, the reporter obtains certified school attendance records and an authenticated audio recording from a direct family witness explaining why fear prevented initial participation.",
    conventionalSystemBehavior: "Agency portal informs reporter that the case is 'CLOSED.' Reporter is told they must dial the crisis intake line and file a brand-new report from scratch, erasing the prior investigative docket and treating the new submission as an isolated rumor.",
    continuityReceiptApplication: {
      receiptId: "REC-SYNTH-2026-003",
      issuingParty: "Department of Family & Protective Services (Post-Closure Addendum Protocol)",
      verifiedMetadataLogged: [
        "Original Docket: Case #51119962 (Closed July 16, 2026)",
        "Supplemental Ingestion: Version 2 Record created July 19, 2026",
        "Material 1: Certified School Attendance Record (Absence Log)",
        "Material 2: Witness Statement Audio (Authenticated direct witness)",
        "Witness barrier logged: Fear / Threat of Retaliation (not refusal)"
      ],
      nonImplicationNotices: [
        "Adding supplemental material does not alter finalized historical findings without official review",
        "Preserves audit trail of when supplemental records arrived"
      ]
    },
    reviewTraceApplication: {
      materialDescription: "Post-Closure Objective School Records & Direct Witness Statement",
      assignedTraceCode: "NOT_REVIEWED_REASON_RECORDED",
      administrativeRationale: "Material received 72 hours following administrative closure notice. Logged under versioned addendum pending supervisory threshold re-evaluation.",
      nextDecisionOwner: "Regional Supervisory Specialist (Assigned to evaluate whether supplemental records meet reopening criteria)",
      proceduralEffect: "Preserves exact timestamp of receipt and prevents agency amnesia. Transparently documents whether supervisor evaluated the supplemental records or declined to reopen."
    },
    policyImplication: "Demonstrates how Module 06 (Context Before Closure) and versioned contact records solve the post-closure evidence void."
  },
  {
    id: "app-synth-04",
    scenarioCode: "SYNTH-APP-04",
    title: "Scenario D: Referral Between Jurisdictions with No Documented Receiving Acknowledgment",
    failurePattern: "Cross-Jurisdictional Boundary Drop / County Line Void",
    narrativeOverview: "A survivor residing on a county line reports harassment and protective order violations spanning Travis and Williamson Counties. Travis County victim services issues an outbound referral to Williamson County specialized victim advocacy. Williamson County intake never acknowledges or accesses the transfer package.",
    conventionalSystemBehavior: "Travis County marks the referral as 'Completed / Transferred.' Williamson County has no record. Survivor travels to Williamson County office and is told 'we never received anything; start over.'",
    continuityReceiptApplication: {
      receiptId: "REC-SYNTH-2026-004",
      issuingParty: "Travis County Victim Navigation Desk (Outbound Dispatched)",
      verifiedMetadataLogged: [
        "Handoff Origin: Travis County Victim Services (Worker ID #TV-109)",
        "Handoff Destination: Williamson County Victim Advocacy Unit",
        "Transfer Package: Protective Order Notice Copy & Verification Token",
        "Acknowledgment Status: REQUESTED_PENDING (Timestamp: 2026-10-10 11:15 CST)",
        "Elapsed Time: 96 Hours (Exceeds proposed 48-Hour Pilot SLA Benchmark)"
      ],
      nonImplicationNotices: [
        "Travis County retains handoff monitoring duty until Williamson County formally accepts",
        "Zero legal determination of merits implied"
      ]
    },
    reviewTraceApplication: {
      materialDescription: "Inter-County Cross-Jurisdictional Protective Order Transfer Packet",
      assignedTraceCode: "REFERRED",
      administrativeRationale: "Referral sent to Williamson County. 48-hour acknowledgment window expired without receiving response. Status: STALLED_HANDOFF_FLAGGED.",
      nextDecisionOwner: "Travis County Supervisory Liaison (Duty to initiate secondary bilateral confirmation)",
      proceduralEffect: "Prevents silent drop across county lines. Automated internal alert triggers supervisor follow-up call, preventing participant from becoming the integration layer.",
    },
    policyImplication: "Demonstrates how closed-loop tracking across interlocal boundaries (Tex. Gov't Code § 791) protects people from disappearing between adjacent jurisdictions."
  }
];
