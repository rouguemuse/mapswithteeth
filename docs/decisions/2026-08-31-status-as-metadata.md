# ADR 004: Resource Status as Metadata Rather Than Folder Partitioning

## Status
Accepted

## Context
Organizing resources into folders by their operational verification status (e.g. `resources/verified/`, `resources/paused/`) causes churn and broken imports whenever a program status changes (e.g. seasonal closures or pending reverification).

## Decision
1. Resource records are partitioned strictly by geography and domain scope (`states/tx/`, `national/`), never by status.
2. Operational and verification states are represented purely as typed metadata properties (`verificationStatus`: `ACTIVE_VERIFIED`, `ACTIVE_PARTIALLY_VERIFIED`, `PAUSED`, `TEMPORARILY_CLOSED`, `NEEDS_REVERIFICATION`).
3. Domain publication selectors (`src/domain/resources/publicationRules.ts`) filter resources dynamically at runtime.

## Consequences
- Stable file paths and import references regardless of temporary program closures or verification reviews.
- Clean separation between geographic taxonomy and lifecycle state.
