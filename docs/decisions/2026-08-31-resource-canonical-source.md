# ADR: Canonical Resource Storage & Organization

- **Date**: 2026-08-31
- **Status**: ACCEPTED
- **Decision**: Organize resources by stable geographic and jurisdictional attributes (`states/tx/`, `national/`) rather than volatile lifecycle statuses (`verified/`, `unverified/`). Aggregate through a canonical registry (`src/data/resources/registry.ts`).
- **Why**: Statuses change frequently during research; directory paths must remain stable.
- **Alternatives Rejected**: Storing resources in folders by verification tier.
