# ADR 003: Atomic Claim-Level Evidence & Provenance Model

## Status
Accepted

## Context
Generic verification objects and internal fallback URLs (`mapswithteeth.org/sources/*`) masked missing primary-source verification and prevented granular field-level auditing.

## Decision
1. Every published resource must have an authentic `VerificationProvenance` record in `src/data/evidence/provenance.ts`.
2. Provenance must link to actual external primary sources (official government URLs, statutory locators, manufacturer documentation, academic research, or provider standards).
3. Zero internal placeholder URLs or synthetic boilerplate evidence text are permitted.
4. Material access claims (identity, amount, documentation, police report, referral, processing time, etc.) are audited atomically.

## Consequences
- Guarantees 100% evidentiary defensibility for every user-facing claim.
- Facilitates automated CI drift detection against broken links and outdated citations.
