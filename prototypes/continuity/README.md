# Prototype: Continuity & Warm Handoff Generator

- **Purpose**: Generates portable, privacy-preserving research summary sheets (dockets) that survivors can share with advocates, shelter intake staff, or legal aid without re-traumatizing repetition.
- **Status**: PROMOTED_TO_PRODUCT
- **Production Relationship**: Core domain logic lives in `src/domain/continuity/`; UI components live in `src/components/continuity/`.
- **Dependencies**: React, Next.js, lucide-react, client-side PDF/print styling.
- **Known Limitations**: Currently relies on client-side state; no cross-session persistence or encrypted cloud syncing.
- **Next Decision**: Evaluate Web Crypto API local encrypted export for survivor USB key backup.
