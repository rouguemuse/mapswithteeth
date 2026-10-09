# MAPS WITH TEETH — BRAND SYSTEM & DESIGN SPECIFICATION

**Version:** 2.0 (Permanent System Lock)  
**Status:** Canonical Brand Architecture  
**Applies To:** Whole-repository UI, components, styling, typography, assets, and editorial presentation.

---

## 1. Brand Essence & Architecture

Maps With Teeth is an independent civic systems reform, evidence integrity, and social justice initiative. It analyzes and bridges the seams between institutions, jurisdictions, public agencies, and technologies.

### Core Movement Statements
* **Movement Statement:** *"People shouldn’t disappear between systems."*
* **Navigation Thesis:** *"A directory is not a route."*
* **Systemic Contradiction:** *"Help exists. Access has conditions."*
* **Supporting Belief:** *"A more coherent, humane, and accountable system is possible."*

### Movement vs. Pilot Distinction
* **The Organization / Movement:** Maps With Teeth develops standards, evidence integrity protocols (Continuity Receipts, Review Traces), cross-jurisdictional frameworks, and structural reform proposals.
* **The Central Texas Navigation Pilot:** An active frontline application applying barrier-first resource matching and statutory rights catalogs (Tex. Prop. Code § 92.016, PUCT rules) to Central Texas cases. The pilot is an *application* of the initiative, not its outer boundary.

---

## 2. Canonical Color Tokens

The visual identity is locked to a restrained, archival, high-contrast palette:

| Token Name | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **Archive Black** | `#11100F` | Primary dark surfaces, movement headers, footer, high-impact cards. |
| **Oxblood** | `#841F2B` | Signature brand accent, key editorial highlights, active movement links. |
| **Oxblood Dark** | `#661620` | Hover/pressed states for primary interactive elements. |
| **Oxblood Light** | `#A52B3A` | Accent contrast on dark surfaces (`#11100F`). |
| **Parchment** | `#EEE8DB` | Secondary editorial cards, process stages, analytical surfaces. |
| **Reading Ivory** | `#F8F5EE` | Primary reading background, dossier containers, high-legibility surfaces. |
| **Aged Stone** | `#B5A58E` | Structural grid lines, borders, dividers, cartographic ticks. |
| **Graphite** | `#4D4944` | Secondary text, lead descriptions, metadata labels. |

### Semantic Functional Status Colors (Separated from Brand Oxblood)
To maintain evidentiary integrity, functional statuses are strictly decoupled from brand oxblood:
* **Verified / Confirmed:** `#1F6B38` (Bg: `#E6F1EA`, Border: `#92C6A3`)
* **Pilot / Warning:** `#945700` (Bg: `#FEF3D6`, Border: `#E8B957`)
* **Error / Handoff Breakpoint:** `#B31B2A` (Bg: `#FBEAEC`, Border: `#ECA1A9`)

---

## 3. Locked Typography Architecture

The typeface stack is restricted to three deliberate, open-source Google Font families:

1. **Editorial Display Serif: `Fraunces`**
   * *Weights:* SemiBold (600), Bold (700).
   * *Role:* Core movement statements, hero headlines, chapter titles, specimen headers.
   * *Quality:* Literary, authoritative, sculptural, unmistakably serious.
2. **Interface Sans: `IBM Plex Sans`**
   * *Weights:* Regular (400), Medium (500), SemiBold (600), Bold (700).
   * *Role:* Primary body text, UI navigation, card titles, form inputs, button labels.
   * *Quality:* Engineering precision, humanist legibility, zero aesthetic distraction.
3. **Archival / Technical Monospace: `IBM Plex Mono`**
   * *Weights:* Regular (400), Medium (500), Bold (700).
   * *Role:* Reference IDs, coordinate ticks (`[SYS REF: MWT-2026]`), ledger specimens, code snippets, timestamps.
   * *Quality:* Documentary precision, typewriter archival authority.

### Prohibited Typography Patterns
* ❌ NO decorative handwriting or script fonts (e.g., Caveat, Kalam).
* ❌ NO fake handwritten marginalia.
* ❌ NO unstyled arbitrary font sizes.
* ❌ NO all-caps body copy.
* ❌ NO artificially distressed or pixelated fonts.

---

## 4. The Three Brand Environments

The interface shifts between three deliberate modes while sharing typography, spacing, and brand tokens:

1. **THE MOVEMENT (Archive Black / Oxblood / Reading Ivory)**
   * *Applied to:* Homepage opening, movement manifesto, call for partners.
   * *Atmosphere:* Monumental, defiant, intellectually rigorous, dignified.
2. **THE EVIDENCE (Reading Ivory / Parchment / Aged Stone / Graphite)**
   * *Applied to:* Research reports, statutory analyses, Bad Maps methodology, policy papers.
   * *Atmosphere:* Archival, clean editorial ledger, documentary clarity.
3. **THE TOOL (Parchment / Reading Ivory / High-Contrast Controls)**
   * *Applied to:* Barrier-first Matcher, Interactive Receipt Demo, intake review forms.
   * *Atmosphere:* Accessible, clear affordances, accessible focus rings, zero clutter.

---

## 5. Logo & Brand Mark Rules

* **Asset Path:** `/public/logo.png` (and `/public/logo-full.png`).
* **Composition:** Hand-folded archival map, torn deckled edge, red interrupted dashed route line, four-point compass star, and stark bold wordmark.
* **Preservation Rule:** The authentic folded-map mark and typography proportions must **never** be recreated using AI, replaced with stock clipart, or substituted with generic compass icons.
* **Component:** Handled universally via `src/components/ui/Logo.tsx` with automatic high-contrast fallback and responsive sizing (`xs`, `sm`, `md`, `lg`, `xl`).

---

## 6. Safety & Trust Invariants

* **Quick Exit:** Persistent in the top safety banner; instant redirect to weather.com; triggers on double-tap of `ESC` or single click.
* **Non-Claim Transparency:** Interfaces must never promise that Quick Exit erases local browser cache, deletes ISP logs, or evades physical keyloggers.
* **Privacy Standard:** Zero central database storage for client-side receipt builder or barrier navigation.
* **Evidence Separation:** Clear labels distinguish:
  * *Statutory Law* (e.g., Tex. Prop. Code § 92.016)
  * *Proposed Reform Standards* (The 6-Module Continuity Standard)
  * *Fictional Demonstration Data* (Specimen DEMO-2026-0814)
  * *Active Pilot Tools* (Central Texas Matcher)
