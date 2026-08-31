# ADR 001: Canonical Resource Ownership & Separation

## Status
Accepted

## Context
Previously, resource definitions were scattered across multiple competing files (`texasData.ts`, `otherWaysThrough.ts`, root indexes, and lead discovery dumps).

## Decision
Establish single canonical ownership for all production resources:
1. Texas statewide & local resources: `src/data/resources/texas.ts` (or county/state subpaths).
2. National / federal resources: `src/data/resources/national/nationalResources.ts`.
3. Canonical assembly & filtering: `src/data/resources/index.ts` as the sole runtime access point.

## Consequences
- Eliminates divergent edits across duplicate data files.
- Ensures all resources pass through a single typing and verification layer.
