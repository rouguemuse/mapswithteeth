# CONTINUITY CONTACT RECORD SPECIFICATION
**Standard**: MWT-STD-2026-03 (Consolidated & Locked)  
**Status**: APPROVED / STAGE-LOCKED SPECIFICATION  
**Public Designation**: Continuity Contact Record  
**Descriptive Subtitle**: Standardized Record of an Institutional Touchpoint  
**Legal Framework References**: Texas UETA (Tex. Bus. & Com. Code § 322); 15 U.S.C. § 7001 (E-SIGN); DOJ OVW Confidentiality Standard (34 U.S.C. § 12291(b)(2)); VAWA Confidentiality Provisions

---

## 1. PURPOSE & BOUNDARIES

The **Continuity Contact Record** documents the administrative fact of an institutional encounter when an individual seeks resources, files an incident report, requests statutory protections, or is referred between organizations.

It solves the systemic failure of the "referral loop" where survivor context vanishes across organizational silos, forcing individuals to repeat traumatic narratives and restart documentation from scratch.

### Core Principle
> **Agency acknowledgment strengthens a record but is never required for the participant to create, own, preserve, and carry the record forward.**

### Inviolable Invariants
The Contact Record documents an administrative/institutional touchpoint. It must never imply that:
1. An intake worker became a witness;
2. An agency verified allegations;
3. An agency accepted the entire matter;
4. Evidence was authenticated;
5. A legal merits finding occurred;
6. Maps With Teeth rendered a legal opinion;
7. A suggested route accepted the participant;
8. Agency silence invalidates a participant-recorded contact.

---

## 2. THREE-TIER VERIFICATION MODEL

The record supports three unambiguous verification tiers:

```typescript
export type VerificationLevel =
  | "PARTICIPANT_RECORDED"
  | "AGENCY_ACKNOWLEDGED"
  | "PARTNER_ROLE_VERIFIED";
```

- **`PARTICIPANT_RECORDED`** (Participant created/recorded the touchpoint):
  - Created and held entirely by the participant.
  - Documents what the participant presented, when, to whom, and what response was received.
  - Carries no claim of agency confirmation or review.
  - Silence, decline, or refusal by an agency never invalidates this record.
- **`AGENCY_ACKNOWLEDGED`** (A receiving organization optionally acknowledged limited administrative facts):
  - Contains an optional, affirmative acknowledgment block by a named agency staff member (name, role, organization, timestamp, acknowledgment method).
  - Explicitly states that the signer acts only in an official capacity and only attests to the specific items checked.
- **`PARTNER_ROLE_VERIFIED`** (Maps With Teeth verified that the acknowledgment originated through an onboarded organization and authorized organizational role):
  - Available only through formally onboarded partner organizations with role-based staff authentication.
  - **CRITICAL**: `PARTNER_ROLE_VERIFIED` must **NEVER** mean that the underlying allegations, evidence, legal claim, or merits were verified.

---

## 3. THE 8 MANDATORY SEGREGATED DIMENSIONS

To prevent conflation between physical custody, review, jurisdiction, and merits, the record strictly segregates:

### 3.1 Material Presented vs. Material Actually Opened or Reviewed
Per-item handling status (`MaterialHandlingStatus`):
- `PRESENTED_NOT_ACCEPTED`
- `ACCEPTED_INTO_CUSTODY`
- `OPENED_NOT_ASSESSED`
- `PARTIALLY_REVIEWED_FOR_ROUTING`
- `REVIEWED_FOR_ROUTING`
- `SUBSTANTIVE_REVIEW_OCCURS_SEPARATELY`
- `STATUS_UNKNOWN`

**Attribution Requirement**: Every material handling item MUST explicitly record:
- **WHAT** is being asserted (`handlingStatus`, `label`, `pageOrFileCount`)
- **WHO** is asserting it (`recordedByActorType`: `PARTICIPANT` | `AGENCY_STAFF` | `PARTNER_STAFF` | `SYSTEM`, `recordedByActorId`)
- **HOW** do we know they asserted it (`statusBasis`, `sourceType`: `PARTICIPANT_ENTRY` | `AGENCY_ACKNOWLEDGMENT` | `SYSTEM_GENERATED`)
- **WHEN** was it recorded (`recordedAt` timestamp)

*Rule: A participant-entered statement must not render visually as if it were an agency statement.*  
*Canonical Explanatory Copy: “Received” does not by itself mean that material was successfully opened, legible, reviewed on the merits, authenticated, preserved with metadata, or retained permanently.*

### 3.2 Identity Verification Status
- `UNVERIFIED`
- `GOVERNMENT_PHOTO_ID_INSPECTED`
- `ADVOCATE_ATTESTED`
- `NOT_REQUESTED`

### 3.3 Jurisdiction / Scope Determination
- `WITHIN_JURISDICTION`
- `OUT_OF_GEOGRAPHIC_SCOPE`
- `SUBJECT_MATTER_EXCLUDED`
- `PROGRAM_CAPACITY_EXHAUSTED`
- `PENDING_THRESHOLD_REVIEW`  
*Rule: Scope decisions relate purely to organizational mandates and geographic boundaries.*

### 3.4 Substantive Assessment Status
- `NOT_ASSESSED` (Standard default for intake/routing)
- `ASSESSMENT_PENDING_OUTSIDE_THIS_RECORD`
- `SEPARATE_OFFICIAL_DECISION_REFERENCED` (External agency case number only; Maps never characterizes or summarizes that external decision unless explicitly sourced from the issuing body)

*Prohibited Judicial Language: Avoid terms such as "evidentiary hearing", "without prejudice", "finding of fact", "authenticated evidence", "admissible", or "chain of custody".*

### 3.5 Action Taken
Exact ministerial action executed at this touchpoint (e.g., `INTAKE_RECORD_CREATED`, `SAFETY_PLAN_PROVIDED`, `EMERGENCY_REKEY_DISPATCHED`, `DECLINED_AT_INTAKE`, `INFORMATION_AND_REFERRAL_ONLY`).

### 3.6 Decline or Reroute Reason
Specific operational reason why service was declined or routed elsewhere (e.g., `CAPACITY_FULL`, `PRIMARY_ACCOUNT_HOLDER_MISMATCH`, `COUNTY_RESIDENCY_REQUIREMENT_UNMET`).

### 3.7 Suggested Next Contact or Process
Non-coercive next step (`SuggestedNextRoute`):
- Do **NOT** use "Next responsible route".
- Explicit `handoffOutcome` enum (never a simple boolean `acceptanceConfirmed`):
  `ACCEPTED` | `DECLINED` | `PENDING` | `NOT_CONFIRMED` | `NOT_APPLICABLE` | `STATUS_UNKNOWN`
  *Defaults strictly to `NOT_CONFIRMED` unless explicitly accepted.*
- Source distinction: `RECEIVING_ORGANIZATION` | `VERIFIED_RESOURCE_GRAPH` | `PARTICIPANT_RECORDED`.
- Frontline staff may record statutory citation and deadline as `NOT_PROVIDED`.
- Citation distinction: `AGENCY_SOURCE` vs. `MAPS_REFERENCE`. Maps reference material must never visually imply agency endorsement.

---

## 4. FIVE MANDATORY NON-IMPLICATION NOTICES

Every Continuity Contact Record, regardless of tier, must carry the following five immutable notice codes:

```typescript
export type NonImplicationCode =
  | "NO_SUBSTANTIATION_FINDING"
  | "NO_EVIDENCE_AUTHENTICATION"
  | "NO_WHOLE_MATTER_ACCEPTANCE"
  | "NO_MAPS_INTERPRETATION_ENDORSEMENT"
  | "NO_ROUTING_AS_MERITS_FINDING";
```

### Display Requirements
1. **NO_SUBSTANTIATION_FINDING**: This record does not constitute a determination that any allegations have been substantiated or proven.
2. **NO_EVIDENCE_AUTHENTICATION**: Acknowledgment of material receipt does not authenticate documents, verify digital metadata, or certify evidentiary truth.
3. **NO_WHOLE_MATTER_ACCEPTANCE**: An agency acknowledging this contact record does not accept legal representation, ongoing responsibility, or liability for the participant's broader legal or personal crisis.
4. **NO_MAPS_INTERPRETATION_ENDORSEMENT**: Acknowledgment does not endorse, adopt, or agree with any statutory interpretations, legal theories, or classifications made by Maps With Teeth.
5. **NO_ROUTING_AS_MERITS_FINDING**: A decline, referral, or routing decision reflects only organizational scope, capacity, or policy at the time of intake, and is not a finding on the merits or credibility of the participant.

---

## 5. AGENCY ACKNOWLEDGMENT LIFECYCLE & CAUTIOUS LANGUAGE

### 5.1 Acknowledgment Lifecycle Taxonomy
```typescript
export type AgencyAcknowledgmentStatus =
  | "NOT_REQUESTED"
  | "REQUESTED_PENDING"
  | "ACKNOWLEDGED"
  | "DECLINED_TO_ACKNOWLEDGE"
  | "NO_RESPONSE"
  | "UNAVAILABLE";
```
*Rule: No negative acknowledgment state may imply anything about whether allegations are true, whether evidence is credible, whether assistance was appropriate, or why the organization did or did not acknowledge. Agency acknowledgment is strictly optional, and staff may decline without stating a reason.*

### 5.2 Cautious Electronic Acknowledgment Language
Do NOT state that acknowledgment is simply "governed under UETA/E-SIGN." Use:
> *"Electronic acknowledgment functionality is designed with applicable electronic-record and electronic-signature requirements, including Texas UETA and E-SIGN, in mind. Participation is voluntary. The acknowledgment records attributed administrative facts and does not, by itself, establish signer authority, agency acceptance of the underlying matter, factual substantiation, evidentiary authentication, or legal admissibility."*

---

## 6. CORRECTIONS, VERSIONING & SUPERSESSION

Records are **append-only** once finalized. Finalized records are never silently overwritten:
```typescript
export interface RecordCorrectionMetadata {
  recordVersion: number;
  supersedesRecordId?: string;
  correctionOfField?: string;
  correctionSubmittedBy?: string;
  correctionSubmittedAt?: string;
  correctionReason?: string;
  priorDigest?: string;
  newCanonicalDigest?: string;
}
```
Corrections generate a new finalized canonical record and digest while preserving prior versions in history.

---

## 7. CANONICAL RECORD DIGEST & COUNTERPART PARITY

- **Canonical Payload Digest**: Hashed from the shared finalized canonical JSON payload using SHA-256.
- **Copy Designation**: Wrapped separately under `CounterpartMetadata` (`PARTICIPANT_COPY` vs `RECEIVING_ORGANIZATION_COPY`).
- **Canonical Copy**:
  > *"Both parties may receive copies derived from the same finalized canonical record. A document digest can detect later differences between those copies but does not authenticate allegations, establish signer authority, or determine admissibility."*
- **Prohibited Claims**: Never call this evidentiary parity, evidence authentication, chain of custody, or proof that underlying facts are true.

---

## 8. DATA MINIMIZATION: A TOUCHPOINT RECORD, NOT A CASE FILE

The Continuity Contact Record is **NOT** a miniature case file. Default exclusions:
- Detailed abuse narratives or transcripts
- Evidence-file contents or attachments
- Children's PII (names, dates of birth, school info)
- Safe shelter or confidential physical addresses
- Confidential communication channels (burner numbers, hidden emails)
- Immigration or citizenship status
- Medical, psychiatric, or clinical records
- Passwords or device credentials

---

## 9. DECOUPLED DISCLOSURE AUTHORIZATION & HONEST REVOCATION BOUNDARY

Consent is **never** bundled into the Contact Record. A separate, voluntary, specific, purpose-limited, time-limited **Participant Sovereign Disclosure Authorization** must be executed before sharing.

### Mandatory Upfront Revocation Boundary
> *"Revocation stops future Maps-mediated disclosure but cannot retrieve, erase, or control copies that have already been: downloaded; printed; entered into a recipient system; preserved under retention requirements; or produced through compulsory legal process."*

### Mandatory Public Agency / Records Warning
> *"Once provided to an organization, its copy may be governed by that organization’s records-retention, confidentiality, legal-process, and public-information obligations. Maps With Teeth cannot control or delete the recipient’s copy."*

---

## 10. RETENTION, DELETION & LEGAL-HOLD ARCHITECTURE

1. **Default Retention Period**:
   - Active pilot participant records: Preserved in client-controlled local storage; server-mediated transfer caches expire after 30 days.
2. **Participant Deletion Request**:
   - Immediate purging of client local storage, active session tokens, and cached transfer bundles.
   - Generates an automated API revocation notice to any active connected Bridge endpoints.
3. **What Deletion Means & Does Not Mean**:
   - Deletion purges all data within Maps With Teeth's direct custody.
   - Deletion CANNOT reach or erase records already exported, printed, entered into agency EHR/case management platforms, or retained under public records statutes.
4. **Audit Metadata Retention**:
   - Fully anonymized, de-identified counters (touchpoint timestamps, resource category codes, referral outcome statuses) are retained strictly for Bad Maps aggregate systems-friction intelligence. Zero PII is retained.
5. **Legal Holds & Subpoena Response**:
   - If served with compulsory legal process, Maps With Teeth identifies whether any matching records exist in server custody. Since Maps With Teeth operates on a survivor-held data architecture without centralized unencrypted case databases, records residing exclusively on participant devices are outside Maps With Teeth custody.
6. **Security Logs**:
   - Access logs retain IP, timestamp, and route access events for 30 days on a rolling FIFO basis, with request payloads stripped of PII.

---

## 11. CONFIDENTIALITY APPLICABILITY GATES

Operational and configuration gate for legal regimes governing participating organizations:
```typescript
export type ConfidentialityRegime =
  | "GENERAL_PRIVACY"
  | "VAWA_APPLICABLE"
  | "AGENCY_SPECIFIC"
  | "LEGAL_AID_PRIVILEGE_SENSITIVE"
  | "OTHER_RESTRICTED"
  | "TO_BE_REVIEWED";
```
*Note: This is an operational configuration gate, not a legal-conclusion engine. Professional legal and privacy review remains mandatory prior to live pilot deployment.*

---

## 12. MANDATORY REPORTING OPERATIONAL BOUNDARIES

Before live human Bridge navigation, the following operating rules apply:
1. **Who May Be a Mandatory Reporter**: Staff or navigators holding licensed social work (LCSW), professional counseling (LPC), legal, medical, or child-care credentials operating in Texas.
2. **Duty Triggers**: Disclosures involving imminent harm to self or others, child abuse or neglect, or elder abuse under Texas Family Code Chapter 261 or Texas Human Resources Code Chapter 48.
3. **Upfront Participant Notice**: Prior to engaging with a Bridge navigator or initiating intake, participants must be presented with an explicit, plain-language disclosure of navigator mandatory reporting obligations.
4. **Escalation & Documentation**: Clear internal escalation protocols; no automated reporting by software; documentation restricted to factual observations without speculative characterization.

---

## 13. SECURITY & PARTNER LIFECYCLE MANAGEMENT

1. **Role-Based Access Control (RBAC)**: Distinct permissions for Participant, Navigator, Agency Staff, and Organization Admin.
2. **Partner Onboarding & Role Verification**: Verified organizational email domains, signed Partner Memorandum of Understanding, verified identity of designated intake administrators.
3. **Periodic Re-verification**: Quarterly credential audits for partner staff with acknowledgment privileges.
4. **Staff Departures & Credential Revocation**: Immediate revocation of individual staff tokens upon departure; **prior acknowledgments remain historically attributable** to the staff member's historical role.
5. **Incident Response & Breach Planning**: 72-hour notification SLA to affected participants and partners in the event of suspected token compromise or unauthorized disclosure.
