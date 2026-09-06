# COMPONENT RISK REVIEW: CONTINUITY CONTACT RECORD (FORMERLY CONTINUITY RECEIPT)
**Date**: 2026-09-06  
**Auditor**: Maps With Teeth Systems Architecture  
**Scope**: Domain models, legal boundaries, agency liability, survivor reliance, and privacy controls.

---

## 1. Executive Risk Summary

The Continuity Contact Record is designed to preserve administrative context across disconnected agency silos. Without strict legal hedging and interface boundaries, it creates severe vulnerabilities:
- **Agency Exposure**: Intake workers and agency counsel will treat any uncalibrated "receipt" as an existential risk if it implies evidentiary authentication, acceptance of representation, or factual endorsement.
- **Survivor Reliance**: Survivors might assume a receipt constitutes legal proof or an official determination of abuse, leading to fatal procedural errors in protective order or housing litigation.
- **Agency Boycott Risk**: If the product requires an intake worker's signature to function, a single risk-averse county attorney can render the entire system inoperative.

---

## 2. Risk Evaluation Matrix

| Risk Factor | Unmitigated Failure Mode | Architectural Mitigation Applied | Residual Risk |
| :--- | :--- | :--- | :--- |
| **Dependency on Agency Buy-in** | Agency refuses to sign; record becomes useless or marked "invalid". | **Three-Tier Verification**: `PARTICIPANT_RECORDED` is self-sustaining and completely valid without agency participation. | Negligible |
| **Conflation of Custody & Review** | Receiving 20 screenshots assumed to mean the worker validated their contents. | **7-State Material Handling**: Clear separation of `PRESENTED_NOT_ACCEPTED`, `OPENED_NOT_ASSESSED`, `REVIEWED_FOR_ROUTING`, etc. | Low |
| **Conflation of Jurisdiction & Merits** | Declining an out-of-county client appears as a negative merits finding ("you were not abused"). | **Dimension Segregation**: `JurisdictionDetermination` is strictly separated from `SubstantiveAssessmentStatus` (`NOT_ASSESSED`). | Negligible |
| **Overstated Hash Warranties** | Claims of "evidentiary parity" create false confidence in legal admissibility. | **Digest Calibration**: Digest framed strictly as detecting document divergence; explicit disclaimer of authentication or court admissibility. | Negligible |
| **Buried Consent & Unsafe Sharing** | Consent buried in receipt fine print; whole trauma histories broadcast to agencies. | **Decoupled Authorization & Data Minimization**: Standalone consent; default exclusion of narratives, evidence, safe addresses, and children PII. | Low |
| **Public Agency Public-Records Exposure** | Receipts sent to police/housing agencies become subject to public records requests (FOIA/PIA). | **Mandatory Transmission Warning**: Explicit alert prior to transfer informing survivor of government agency retention and disclosure laws. | Low (Informed Consent) |
| **Revocation Illusions** | Survivor believes revoking consent deletes records already stored in agency databases. | **Honest Boundary Notice**: Clear explanation that revocation stops future Maps-mediated sharing, not past physical or agency database entries. | Negligible |

---

## 3. Compliance & Governance Verification

All 12 required institutional corrections from the September 6, 2026 review are codified in:
- `docs/standards/CONTINUITY_CONTACT_RECORD_SPECIFICATION.md`
- `docs/decisions/2026-09-06-continuity-contact-record-institutional-risk.md`
- `src/domain/continuity/types.ts`
- `src/domain/continuity/contactRecord.ts`
- `scripts/test_continuity_receipt_risk.ts`
