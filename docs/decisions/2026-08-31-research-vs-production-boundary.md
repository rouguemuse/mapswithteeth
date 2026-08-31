# ADR 002: Research vs Production Application Boundary

## Status
Accepted

## Context
Raw discovery leads and research inventories (such as the 60+ lead reconciliation ledger) were previously stored inside `src/data/`, creating ambiguity regarding what was verified for runtime presentation versus exploratory research.

## Decision
1. `src/data/` contains strictly canonical production data verified for client presentation and matching.
2. Exploratory research, lead ingestion, and the canonical Master Reconciliation Ledger live under `research/`.
3. No production application component may import directly from `research/`.
4. If admin or research tools need structured ledger access, it is exposed via safe, isolated admin-specific schemas in `src/data/admin/`.

## Consequences
- Production bundles remain lean and free of unverified exploratory artifacts.
- Enforces a clear promotion gate from research lead to public resource.
