# CONTINUITY CONTACT RECORD SPECIFICATION
**Standard**: MWT-STD-2026-03  
**Status**: APPROVED / ACTIVE SPECIFICATION  
**Public Designation**: Continuity Contact Record  
**Descriptive Subtitle**: Standardized Record of an Institutional Touchpoint  
**Legal Framework Reference**: Texas UETA (Tex. Bus. & Com. Code § 322); 15 U.S.C. § 7001 (E-SIGN); DOJ OVW Confidentiality Standard (34 U.S.C. § 12291(b)(2))

---

## 1. PURPOSE & BOUNDARIES

The **Continuity Contact Record** documents the administrative fact of an institutional encounter when an individual seeks resources, files an incident report, requests statutory protections, or is referred between organizations.

It solves the systemic failure of the "referral loop" where survivor context vanishes across organizational silos, forcing individuals to repeat traumatic narratives and restart documentation from scratch.

### Inviolable Invariants
1. **Never Dependent on Agency Cooperation**: The record is survivor-generated and remains fully valid as a personal administrative record even if an agency refuses or ignores a request to acknowledge it.
2. **Never a Judicial or Official Agency Finding**: The record is not an evidentiary finding, official docket entry, police report, court motion, or legal pleading.
3. **No Unintentional Agency Liability**: A staff member's acknowledgment confirms *only* what the staff member affirmatively attests. It never creates general tort liability, accepts responsibility for the whole case, or authenticates attached evidence.

---

## 2. THREE-TIER VERIFICATION MODEL

The record supports three unambiguous verification tiers:

```typescript
export type VerificationLevel =
  | "PARTICIPANT_RECORDED"
  | "AGENCY_ACKNOWLEDGED"
  | "PARTNER_VERIFIED";
```

- **`PARTICIPANT_RECORDED`** (Baseline):
  - Created and held entirely by the participant.
  - Documents what the participant presented, when, to whom, and what response was received.
  - Carries no claim of agency confirmation or review.
  - Silence, decline, or refusal by an agency never invalidates this record.
- **`AGENCY_ACKNOWLEDGED`** (Ministerial):
  - Contains an optional, affirmative acknowledgment block by a named agency staff member (name, role, organization, timestamp, acknowledgment method).
  - Explicitly states that the signer acts only in an official capacity and only attests to the specific items checked.
- **`PARTNER_VERIFIED`** (Network):
  - Issued through formally onboarded partner organizations with cryptographically verified, role-based staff authentication.

---

## 3. THE 8 MANDATORY SEGREGATED DIMENSIONS

To prevent conflation between physical custody, review, jurisdiction, and merits, the record strictly segregates:

1. **Material Presented / Received**:
   Itemized inventory of items presented (format, page/file count, delivery method).
2. **Material Actually Opened or Reviewed**:
   Per-item handling status (`MaterialHandlingStatus`):
   - `PRESENTED_NOT_ACCEPTED`
   - `ACCEPTED_INTO_CUSTODY`
   - `OPENED_NOT_ASSESSED`
   - `PARTIALLY_REVIEWED_FOR_ROUTING`
   - `REVIEWED_FOR_ROUTING`
   - `SUBSTANTIVE_REVIEW_OCCURS_SEPARATELY`
   - `STATUS_UNKNOWN`
   *Rule: "Received" does not imply opened, legible, reviewed on merits, metadata preserved, authenticated, or permanently retained.*
3. **Identity Verification Status**:
   - `UNVERIFIED`
   - `GOVERNMENT_PHOTO_ID_INSPECTED`
   - `ADVOCATE_ATTESTED`
   - `NOT_REQUESTED`
4. **Jurisdiction / Scope Determination**:
   - `WITHIN_JURISDICTION`
   - `OUT_OF_GEOGRAPHIC_SCOPE`
   - `SUBJECT_MATTER_EXCLUDED`
   - `PROGRAM_CAPACITY_EXHAUSTED`
   - `PENDING_THRESHOLD_REVIEW`
   *Rule: Scope decisions relate purely to organizational mandates and geographic boundaries.*
5. **Substantive Assessment Status**:
   - `NOT_ASSESSED` (Standard default for intake/routing)
   - `ASSESSMENT_PENDING_OUTSIDE_THIS_RECEIPT`
   - `SEPARATE_OFFICIAL_DECISION_REFERENCED` (External agency case number only; Maps never summarizes or characterizes the finding)
   *Rule: Court-flavored terms ("evidentiary hearing", "with/without prejudice") are strictly prohibited.*
6. **Action Taken**:
   Exact ministerial action executed at this touchpoint (e.g., `INTAKE_FILE_CREATED`, `SAFETY_PLAN_PROVIDED`, `EMERGENCY_REKEY_DISPATCHED`, `DECLINED_AT_INTAKE`, `INFORMATION_PROVIDED`).
7. **Decline or Reroute Reason**:
   Specific operational reason why service was declined or routed elsewhere (e.g., `PRIMARY_ACCOUNT_HOLDER_MISMATCH`, `COUNTY_RESIDENCY_REQUIREMENT_UNMET`, `CAPACITY_FULL`).
8. **Suggested Next Contact or Process**:
   Non-coercive next step (`SuggestedNextRoute`). Default `acceptanceConfirmed: false`. Frontline staff permitted `NOT_PROVIDED` for statutory citations and deadlines. Distinguishes `AGENCY` versus `MAPS_REFERENCE` citations.

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

### Notice Text Display Requirements
1. **NO_SUBSTANTIATION_FINDING**: This record does not constitute a determination that any allegations have been substantiated or proven.
2. **NO_EVIDENCE_AUTHENTICATION**: Acknowledgment of material receipt does not authenticate documents, prove chain-of-custody, verify digital metadata, or certify evidentiary truth.
3. **NO_WHOLE_MATTER_ACCEPTANCE**: An agency acknowledging this contact record does not accept legal representation, ongoing responsibility, or liability for the participant's broader legal or personal crisis.
4. **NO_MAPS_INTERPRETATION_ENDORSEMENT**: Acknowledgment does not endorse, adopt, or agree with any statutory interpretations, legal theories, or classifications made by Maps With Teeth.
5. **NO_ROUTING_AS_MERITS_FINDING**: A decline, referral, or routing decision reflects only organizational scope, capacity, or policy at the time of intake, and is not a finding on the merits or credibility of the participant.

---

## 5. ACKNOWLEDGMENT BLOCK: AUTHORITY & ATTRIBUTION

Under Texas UETA (Tex. Bus. & Com. Code § 322) and 15 U.S.C. § 7001, attribution requires clear context and authority:

- **Staff Attributes**: Full name, official organizational title/role, and legal name of the represented organization.
- **Authority Attestation**: Explicit affirmation that the individual is authorized by their organization to acknowledge intake receipts.
- **Affirmative Scope**: The signer checks only what they personally performed.
- **Decline Right**: Staff may decline to acknowledge the record without providing a reason. Refusal does not affect the participant's underlying record.
- **No Personal Capacity**: The acknowledgment is executed exclusively in an official organizational capacity.
- **Addendum Only**: Records cannot be retroactively altered; subsequent corrections must be issued as timestamped addenda.

---

## 6. CANONICAL RECORD DIGEST & COUNTERPART PARITY

- **Canonical Payload Digest**:
  Both the participant and the receiving organization receive copies generated from an identical canonical JSON payload.
  ```typescript
  export interface CounterpartMetadata {
    canonicalRecordDigest: string; // SHA-256 hex
    digestAlgorithm: "SHA-256";
    canonicalizationVersion: "2026-09-v1";
    copyDesignation: "PARTICIPANT_COPY" | "RECEIVING_ORGANIZATION_COPY";
  }
  ```
- **Calibrated Legal Meaning**:
  *"Both parties may receive copies derived from the same finalized canonical record. A document digest can detect later differences between those copies but does not authenticate allegations, establish signer authority, or determine admissibility."*

---

## 7. DATA MINIMIZATION: A TOUCHPOINT RECORD, NOT A CASE FILE

To protect survivor privacy and prevent unauthorized institutional surveillance, the record **rejects by default**:
- Detailed abuse narratives or transcripts
- Raw evidence files or forensic attachments
- Children's names, dates of birth, or identifying info
- Safehouse, shelter, or confidential physical addresses
- Confidential contact phone numbers or burner emails
- Immigration or citizenship documentation
- Medical, psychiatric, or clinical treatment details
- Passwords, device credentials, or account security codes

---

## 8. DECOUPLED DISCLOSURE AUTHORIZATION & HONEST REVOCATION BOUNDARY

Consent is **never** bundled into the Contact Record.
A separate **Participant Sovereign Disclosure Authorization** must be executed before sharing any record with a receiving organization.

### Mandatory Upfront Warning
*"Revocation of this authorization stops future Maps-mediated information sharing. However, revocation cannot retrieve, delete, or recall information that has already been downloaded, printed, entered into recipient agency databases, preserved under statutory public-records retention rules, or disclosed under legal process."*

### Mandatory Public-Agency Warning
*"Once provided to an organization, its copy may be governed by that organization's records-retention, confidentiality, legal-process, and public-information obligations. Maps With Teeth cannot control or delete the recipient's copy."*
