# Architecture Decision Record: Continuity Contact Record v1.0.0 Stage Lock

**Status:** FROZEN / STAGE LOCKED  
**Date:** September 6, 2026  
**Supersedes:** Legacy "Continuity Receipt" design notes and initial draft receipts  
**Context:** Maps With Teeth Institutional Risk Hardening & Pilot Milestone 1

---

## 1. Executive Summary

This Architecture Decision Record (ADR) formally checkpoints and locks the core institutional-risk architecture of Maps With Teeth. The public artifact formerly referred to informally as a "Continuity Receipt" is permanently renamed and locked as the **Continuity Contact Record**.

All domain types, builders, serialization routines, cryptographic signers, UI specimens, test suites, and documentation have been aligned to eliminate agency liability risk, survivor false-reliance risk, and pseudo-judicial exposure.

---

## 2. Settled Strategic Decisions

### 2.1 Canonical Public Artifact
- **Canonical Public Name:** `Continuity Contact Record`
- **Subtitle:** *"A standardized record of an institutional touchpoint"*
- **Core Operating Axiom:**  
  > *"Agency acknowledgment strengthens a record but is never required for the participant to create, own, preserve, and carry the record forward."*

### 2.2 Locked Verification Levels
The tripartite verification model is immutable:
1. `PARTICIPANT_RECORDED`: Created, owned, and carried by the participant. Valid immediately upon creation; requires zero institutional cooperation or assent.
2. `AGENCY_ACKNOWLEDGED`: Contains optional agency touchpoint metadata (intake staff identifier, agency reference number, digital or physical stamp) confirming only receipt or contact.
3. `PARTNER_ROLE_VERIFIED`: Attested by an authorized staff member of an onboarded formal partner organization operating within a cryptographically verified role.

### 2.3 Non-Implication Architecture
Every record immutably incorporates five mandatory non-implication disclaimers (`MANDATORY_NON_IMPLICATION_CODES`):
- `NO_MERITS_ADJUDICATION`: Does not evaluate substantive claims or merits.
- `NO_EVIDENCE_AUTHENTICATION`: Does not certify or authenticate evidentiary attachments.
- `NO_ASSUMPTION_OF_LIABILITY`: Does not transfer legal duty or agency liability.
- `NO_INTERPRETATION_ADOPTION`: Does not bind the agency to participant or Maps With Teeth legal theories.
- `ROUTING_NOT_MERITS_DECISION`: Explicitly distinguishes procedural referral or decline from a merits finding.

### 2.4 Handoff and Substantive State De-Judicialization
- Legacy boolean `acceptanceConfirmed` is abolished. Replaced by `HandoffOutcomeStatus`:
  - `ACCEPTED` | `DECLINED` | `PENDING` | `NOT_CONFIRMED` | `NOT_APPLICABLE` | `STATUS_UNKNOWN`
- Substantive assessment status is de-judicialized:
  - `NOT_ASSESSED`
  - `ASSESSMENT_PENDING_OUTSIDE_THIS_RECORD`
  - `SEPARATE_OFFICIAL_DECISION_REFERENCED`
- Material handling tracks 7 discrete physical/digital states with mandatory actor attribution (`recordedByActorType`, `recordedByActorId`, `recordedAt`, `verificationLevel`, `statusBasis`, `sourceType`).

### 2.5 Lifecycle, Security & Confidentiality Regimes
- **Append-Only Corrections:** Records are immutable. Amendments produce a new contact record referencing the prior record's cryptographic digest (`priorRecordDigest`), timestamp, author, and reason.
- **Confidentiality Gates:** Built-in safeguards support Texas Family Code § 93.004, VAWA, VOCA, attorney-client privilege, and address confidentiality programs. Records refuse transmission across incompatible disclosure tiers.
- **Electronic Acknowledgment:** Compliant with Texas UETA (Tex. Bus. & Com. Code § 322) and Federal E-SIGN (15 U.S.C. § 7001), including conspicuous non-liability notices.

---

## 3. Invariant Verification Baseline

The domain architecture is governed by 15 automated invariant tests in `scripts/test_continuity_receipt_risk.ts`:
1. `PARTICIPANT_RECORDED` valid with zero agency assent.
2. Agency acknowledgment refusal does not invalidate the record.
3. Agency acknowledgment attaches without implying substantive merits.
4. Signature/acknowledgment binds only affirmatively selected checkboxes.
5. Material received is strictly distinct from material reviewed.
6. Identity verification is separate from evidentiary verification.
7. Jurisdiction/scope determination is separate from merits.
8. Declines and reroutes record objective operational reasons.
9. Next responsible route records target agency without binding recipient.
10. Disclosure authorization is physically and logically separated from contact record.
11. Participant and receiving organization receive identical canonical content digests.
12. Append-only corrections preserve prior hash digests without retroactive mutation.
13. Strict non-implication disclaimers are present and immutable.
14. No pseudo-judicial or merits determination terminology.
15. Texas UETA / E-SIGN conspicuous electronic consent notice is included.

---

## 4. Canonical Executive Brief Artifacts

The single-page Executive Brief for prospective funders, fiscal sponsors, and institutional partners has been compiled and locked:
- **Print-Ready PDF:** `Maps_With_Teeth_Executive_Brief.pdf` (Strictly 1 Letter page, vector-grade typography, oxblood/charcoal/parchment palette, embedded Maps With Teeth mark).
- **High-Resolution Visual Preview:** `Maps_With_Teeth_Executive_Brief.png` (Exact 1-page visual representation).
- **HTML/CSS Generator Source:** `scripts/brief/executive_brief.html` / `scripts/brief/generate_brief.js`.

### 4.1 Canonical $100,000 Founding Budget Allocation
The 6-month founding pilot funding target of $100,000 is strictly allocated to the following 10 canonical budget categories:
1. `$36,000` — Founder / Project Director
2. `$5,000` — Employer payroll / benefits reserve
3. `$8,000` — Part-time survivor-services expertise
4. `$8,000` — Fiscal sponsorship / administration
5. `$10,000` — Organizer technology + security
6. `$10,000` — Legal / privacy / insurance / compliance
7. `$10,000` — Gap Fund
8. `$5,000` — Evaluation + data systems
9. `$3,000` — Partner training + outreach
10. `$5,000` — Operating contingency
**Total Founding Funding Requirement: $100,000**


---

## 5. Transition to Next Stage

With the core domain logic, risk invariants, specifications, and executive brief frozen and locked:
- **Stage Status:** COMPLETE & LOCKED.
- **Next Stage:** Founding Funding Deck (10–12 slide presentation for philanthropic funders and fiscal sponsors).
