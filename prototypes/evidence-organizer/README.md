# Prototype: Client-Side Evidence & Document Organizer

- **Purpose**: Enables survivors to organize and categorize sensitive documents (protective orders, advocate letters, police reports, utility bills) locally in their browser without uploading files to a server.
- **Status**: ACTIVE_DEVELOPMENT
- **Production Relationship**: Experimental prototype evaluating UI workflows prior to promotion into `src/domain/intake/`.
- **Dependencies**: IndexedDB / LocalStorage, Web Crypto API.
- **Known Limitations**: Local browser storage only; data is lost if browser cache/cookies are cleared.
- **Next Decision**: Design zero-knowledge export passphrase mechanism before staging pilot user testing.
