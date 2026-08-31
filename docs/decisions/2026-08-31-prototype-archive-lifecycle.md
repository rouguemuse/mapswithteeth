# ADR 005: Prototype and Archive Lifecycle Model

## Status
Accepted

## Context
Duplicate retirement directories (`prototypes/retired/` and `archive/retired-prototypes/`) caused confusion regarding historical versus active experimental code.

## Decision
1. `prototypes/` contains only active or paused experimental prototypes under evaluation.
2. Every prototype in `prototypes/` must include a dedicated README documenting: purpose, status, production relationship, dependencies, known limitations, and next decision.
3. Once a prototype is completed/promoted or retired, historical artifacts move to `archive/retired-prototypes/`, and the prototype is removed from `prototypes/`.

## Consequences
- Eliminates ambiguity between live experiments and dead historical artifacts.
- Ensures every active prototype has clear ownership and documentation.
