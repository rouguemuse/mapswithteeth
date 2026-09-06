# ADR: Continuity Contact Record Institutional & Legal Risk Safeguards

- **Date**: 2026-09-06
- **Status**: ACCEPTED
- **Context**:
  The Continuity Receipt is one of the most powerful concepts in Maps With Teeth, capturing context across fragmented agency touchpoints. However, early concepts risked severe failure modes:
  1. Conflating physical custody of documents with cognitive review or evidence authentication.
  2. Spooking institutional partners by using court-flavored legal terminology ("evidentiary hearing", "without prejudice", "covenants", "warranties").
  3. Making the participant's record dependent on agency cooperation, rendering the tool useless if risk-averse staff refuse to sign.
  4. Overstating the legal effect of cryptographic digests (e.g., claiming SHA-256 establishes "evidentiary parity" or authenticates allegations).
  5. Buried consent and unsafe over-disclosure (turning an administrative touchpoint receipt into a miniature case file containing vulnerable survivor PII).

- **Decisions**:
  1. **Three-Tier Verification**: Adopt `PARTICIPANT_RECORDED`, `AGENCY_ACKNOWLEDGED`, and `PARTNER_VERIFIED`. The participant's record is completely self-sustaining and never invalidated by agency silence or refusal.
  2. **Public Designation**: Rename the public artifact to **"Continuity Contact Record"** with subtitle *"Standardized Record of an Institutional Touchpoint"*.
  3. **Five Mandatory Non-Implication Notices**: Enforce immutable notice codes (`NO_SUBSTANTIATION_FINDING`, `NO_EVIDENCE_AUTHENTICATION`, `NO_WHOLE_MATTER_ACCEPTANCE`, `NO_MAPS_INTERPRETATION_ENDORSEMENT`, `NO_ROUTING_AS_MERITS_FINDING`) rather than boolean flags.
  4. **Substantive Assessment Status**: Replace court terminology with `NOT_ASSESSED`, `ASSESSMENT_PENDING_OUTSIDE_THIS_RECEIPT`, and `SEPARATE_OFFICIAL_DECISION_REFERENCED`.
  5. **Granular Material Handling**: Implement 7 distinct handling states (`PRESENTED_NOT_ACCEPTED`, `ACCEPTED_INTO_CUSTODY`, `OPENED_NOT_ASSESSED`, `PARTIALLY_REVIEWED_FOR_ROUTING`, `REVIEWED_FOR_ROUTING`, `SUBSTANTIVE_REVIEW_OCCURS_SEPARATELY`, `STATUS_UNKNOWN`).
  6. **Calibrated Digest Claim**: Frame SHA-256 strictly as detecting later differences between copies of the canonical payload, explicitly stating it does not authenticate facts, prove signer authority, or determine court admissibility.
  7. **Acknowledgment Block (UETA / E-SIGN)**: Require official signer role, represented organization, and authority attestation; allow explicit right to decline acknowledgment without penalty; permit addendum-only corrections.
  8. **Suggested Next Contact or Process**: Rename from "Next responsible route"; enforce `acceptanceConfirmed: false` by default; distinguish agency-supplied from Maps-reference citations; permit `NOT_PROVIDED`.
  9. **Decoupled Disclosure & Honest Revocation**: Separate disclosure authorization from intake receipt; state upfront that revocation cannot recall records already processed, printed, retained under public records laws, or subpoenaed.
  10. **Data Minimization**: Strictly filter out trauma narratives, evidence files, children's PII, safe addresses, and medical info.
  11. **Public Agency Warning**: Warn survivors before transmission that copies delivered to government entities may become subject to state public information and retention rules.

- **Consequences**:
  Agencies can safely engage without fear of runaway tort liability or evidence co-optation. Survivors retain sovereign, tamper-evident administrative records whether or not an intake worker agrees to sign.
