# RESEARCH SECURITY & SENSITIVE DATA POLICY

## 1. Core Principle
The `research/` directory contains **non-public application and research content**, but it is **NOT a security boundary or private enclave**. 

Because this repository may be shared with collaborators, open-sourced, or stored on remote hosting services, **no confidential or sensitive data may ever be committed to git**.

---

## 2. Strictly Prohibited Artifacts
The following items are strictly prohibited from entering git:
1. **Survivor Personally Identifiable Information (PII)**: Full legal names, personal addresses, phone numbers, email addresses, SSNs, case intake numbers, or specific incident narratives of individuals.
2. **Private Case Records**: Casework notes, direct advocacy communications, shelter logs, or court filings containing unredacted survivor details.
3. **Credentials & Secrets**: API tokens, private keys, database passwords, webhook signing secrets, or authentication credentials.
4. **Unredacted Sensitive Interviews**: Raw recordings or verbatim transcripts identifying vulnerable individuals or non-public informants.
5. **Confidential Partner Communications**: Non-public organizational security memoranda or off-the-record partner discussions.

---

## 3. Permitted Research Artifacts
Only sanitized, public-interest research artifacts may be committed:
- Public statute texts, legislative analyses, and regulatory rules.
- Publicly published 501(c)(3) guidelines, program manuals, and eligibility forms.
- Published academic papers and open-source security tool documentation.
- Sanitized test personas and synthetic demonstration dockets.
- Aggregated, anonymized service landscape data.

---

## 4. Enforcement & Auditing
Automated CI checks run regularly via `scripts/audit/scan_research_security.js` to detect potential credentials, PII, or unredacted confidential identifiers before commits are merged.
