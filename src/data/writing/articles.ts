import { Article } from "@/domain/writing/types";

export const ARTICLES: Article[] = [
  // 1. THE HUMAN BECOMES THE INTEGRATION LAYER (Systems Note - MWT Original - Featured)
  {
    slug: "the-human-becomes-the-integration-layer",
    title: "The Human Becomes the Integration Layer",
    dek: "When public institutions operate in technical and administrative silos, the person navigating them is forced to carry the chronology, evidence, and accountability across every boundary.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-04",
    displayDate: "October 2026",
    readingTime: "7 min read",
    contentType: "SYSTEMS_NOTE",
    topics: ["Continuity", "Public Systems", "Technology", "Privacy & Governance"],
    summary: "An examination of the structural failure mode where five individually compliant institutions create a cumulative administrative burden that falls entirely on the individual in crisis.",
    heroImage: "/brand/mwt-og-image.png",
    featured: true,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/the-human-becomes-the-integration-layer",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/the-human-becomes-the-integration-layer",
        date: "October 4, 2026",
        note: "Permanent canonical archive version.",
        relationship: "ORIGINAL"
      }
    ],
    sourceNotes: [
      {
        citation: "Administrative Burden: Bureaucracy and How it Limits Freedom",
        note: "Herd, P., & Moynihan, D. P. (Russell Sage Foundation, 2018). Conceptual framework of learning, compliance, and psychological costs in public systems.",
        authorityType: "ACADEMIC"
      },
      {
        citation: "Tex. Fam. Code § 261.301 & § 261.3011",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001",
        note: "Texas statutory standard governing joint DFPS and law enforcement investigations and mutual role definitions.",
        authorityType: "TEXAS_STATUTE"
      }
    ],
    disclosureNote: "This analysis reflects systems research into administrative workflows and cross-agency interaction patterns. It is not legal advice.",
    whatThisArticleDoesNotClaim: [
      "Administrative continuity does not establish factual conclusions or judicial merits.",
      "The survivor should not be forced to act as an unpaid interagency records courier.",
      "Maps With Teeth does not advocate creating a centralized, pan-institutional dossier.",
      "Maps With Teeth does not provide legal advice."
    ],
    status: "published",
    relatedArticleSlugs: [
      "a-referral-is-not-a-handoff",
      "texas-already-has-the-pieces",
      "bad-maps-what-failed-referrals-teach-us"
    ],
    relatedPolicyTopics: ["Cross-System Continuity", "Administrative Seams", "Data Minimization"],
    body: `### The Architecture of the Administrative Void

A person navigating domestic violence, stalking, or a child safety crisis in any major metropolitan or rural county interacts with a constellation of distinct institutions:

1. **Municipal Police Departments** (Incident reporting, penal enforcement, CAD records)
2. **County Sheriffs & District Attorneys** (Protective order applications, criminal dockets)
3. **Child Protective Services / DFPS** (Child safety investigations, family preservation intakes)
4. **Civil Family District Courts** (Custody filings, temporary restraining orders, divorce)
5. **Community Victim Service Navigators & Shelters** (Crisis housing, lateral financial relief)

Each of these entities operates within its own legal boundary, on its own electronic record system, under its own retention schedule, and with its own definition of what constitutes a "case."

When a person walks out of the municipal police precinct and enters the civil legal aid intake clinic, almost nothing travels with them automatically. The legal aid attorney does not have access to the police desk officer's notes. The child welfare investigator arriving at the door two days later does not know that the civil court issued an emergency temporary order that morning.

In the absence of an institutional continuity mechanism, **the human becomes the integration layer**.

---

### The Three Costs of the Integration Layer

When systems refuse to bridge their own seams, the cost is not eliminated. It is transferred entirely to the participant. That transfer occurs across three concrete dimensions:

#### 1. The Retelling Cost (Psychological & Narrative Friction)
At each doorway, the individual must recount their traumatic history from the beginning. They must repeat dates, explain threats, summarize timelines, and withstand skeptical questioning. Frontline caseworkers, operating under extreme volume constraints, frequently lack time to read historical files even when they exist, forcing the participant into continuous verbal re-litigation.

#### 2. The Verification Cost (Evidence & Provenance Burden)
The participant is forced to carry physical accordion folders of police report reference numbers, printouts of text messages, stamped lease agreements, and medical records. If an agency loses a transmitted email attachment or fails to record an in-person document review, the participant must re-procure and re-present the paperwork.

#### 3. The Accountability Cost (Unassigned Responsibility)
When an agency tells a participant, *"We cannot help with this, you need to go to County Court 4,"* the sending agency closes their file as "referred out." When the participant arrives at County Court 4 and is told, *"You must first file a police report,"* the participant is trapped in a circular referral runaround where **no single institution owns the transition**.

---

### Why Centralization Is the Wrong Remedy

The intuitive engineering reaction to this problem is often naive: *"Let's build a single statewide database where every police officer, CPS caseworker, and shelter advocate logs their notes into one central profile."*

This approach is both dangerous and legally unworkable:

- **Surveillance & Weaponization Risks:** A shared database of unadjudicated allegations creates a permanent digital scarlet letter. Abusers frequently make retaliatory false reports to child welfare or police; pooling unvetted reports across agencies weaponizes the database against the survivor.
- **Confidentiality Collisions:** Victim service providers operate under strict federal confidentiality mandates (34 U.S.C. § 12291(b)(2) / VAWA). Merging their records with public law enforcement databases would violate federal law and destroy survivor trust.
- **Due Process Infringements:** Unsubstantiated claims stored in a shared administrative clearinghouse could influence child custody or protective order outcomes without formal evidentiary scrutiny.

---

### The Eight Safeguards of Evidentiary Integrity

Continuity does not mean believing every report without scrutiny, aggregating unverified accusations, or treating repetition as proof. True administrative continuity requires eight cross-cutting safeguards that govern how information is recorded and interpreted:

1. **Evidence Before Impression:** Decisions must rest on tangible, verifiable records rather than subjective caseworker characterizations.
2. **Provenance Before Volume:** A single-origin statement retold across ten agencies remains a single narrative with an echo count of ten—it is not ten independent corroborating sources. *Volume is not provenance.*
3. **Claim-Evidence Separation:** Complex family matters must never be collapsed into global adult credibility contests. Assertions must be atomized into distinct factual propositions with traceable custody.
4. **Review Trace & Administrative Dispositions:** Agencies maintain statutory discretion to reject evidence or close files, but administrative legitimacy requires recording whether material was received, whether it was reviewed, and the specific reason if omitted.
5. **Barrier-Aware Cooperation Distinction:** Structural, transit, language, or fear-based obstacles to participation must never be coded as voluntary refusal. *A barrier is not a refusal; could not is not the same as would not.*
6. **Retaliation & Interference Separation:** Underlying substantive disputes and subsequent retaliatory intimidation or weaponized cross-filings must be tracked on separate analytical tracks, preventing mutual erasure.
7. **Controlling-Document Verification:** No frontline staff member may alter parental rights, deny school release, or exclude a tenant based on verbal folklore (*"the officer said..."*). Action requires citing the controlling order and exact operative clause.
8. **Observation vs. Disposition & Demeanor vs. Provenance:** Trauma-induced agitation or flat affect is a behavioral presentation under stress, not documentary provenance. Raw descriptive observations must remain segregated from discretionary legal dispositions.

---

### The Alternative: Portable Continuity and Cryptographic Touchpoint Proofs

The solution is not a centralized surveillance dossier. The solution is **client-side continuity infrastructure**:

1. **Survivor-Held Portable Artifacts:** The individual holds an encrypted, client-side record of their administrative touchpoints (a *Continuity Contact Record*), complete with SHA-256 cryptographic proof of what was presented, when it was presented, and who reviewed it.
2. **Segregated Administrative Metadata:** Proof of the encounter documents the administrative facts (timestamp, organization, staff role, routing decision) without storing private trauma narratives or unauthenticated allegations in a shared cloud database.
3. **Closed-Loop Referral Handoffs:** When an institution dispatches a referral, the sending agency retains responsibility until the receiving entity explicitly acknowledges receipt and assigns a decision-owner.

The survivor should not be the only person holding the whole map. By establishing verifiable, de-judicialized touchpoint continuity backed by rigorous epistemic safeguards, public institutions can eliminate administrative runaround while vigorously protecting privacy and due process.`
  },

  // 2. A REFERRAL IS NOT A HANDOFF (Policy Analysis - MWT Original)
  {
    slug: "a-referral-is-not-a-handoff",
    title: "A Referral Is Not a Handoff",
    dek: "Marking a file 'referred out' is an administrative action by the sender, not proof that another institution received or accepted responsibility.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-02",
    displayDate: "October 2026",
    readingTime: "8 min read",
    contentType: "POLICY_ANALYSIS",
    topics: ["Policy", "Continuity", "Public Systems", "Texas"],
    summary: "Why open-loop outbound referrals create the administrative illusion of service delivery while abandoning survivors at institutional seams.",
    heroImage: "/brand/mwt-og-image.png",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/a-referral-is-not-a-handoff",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/a-referral-is-not-a-handoff",
        date: "October 2, 2026",
        note: "Original policy paper published in MWT Field Notes.",
        relationship: "ORIGINAL"
      }
    ],
    sourceNotes: [
      {
        citation: "Texas Family Code § 264.4031",
        url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1",
        note: "Statutory protocol requirements for CAC interagency referral tracking, timely information exchange, and case coordination.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "Texas Sunset Advisory Commission Staff Report — DFPS Evaluation",
        note: "Systemic evaluation of interagency case transfers and intake disposition metrics (2026–2027 review cycle).",
        authorityType: "REPORT"
      }
    ],
    disclosureNote: "This paper analyzes public administration referral workflows and interagency coordination mechanisms.",
    whatThisArticleDoesNotClaim: [
      "A 48-hour referral acknowledgment window is a proposed pilot evaluation benchmark, not an existing statutory requirement.",
      "Referral tracking records confirm administrative transfer only, not legal representation or merits determinations.",
      "Maps With Teeth does not provide legal representation or clinical case management."
    ],
    status: "published",
    relatedArticleSlugs: [
      "the-human-becomes-the-integration-layer",
      "texas-already-has-the-pieces",
      "bad-maps-what-failed-referrals-teach-us"
    ],
    relatedPolicyTopics: ["Closed-Loop Referrals", "Decision Ownership", "Sunset Advisory Commission"],
    body: `### The Administrative Illusion of the Open-Loop Referral

In modern human services and victim advocacy, the most common metric of interagency cooperation is the **referral count**. An agency report proudly declares: *"We made 1,200 external legal aid referrals this quarter."*

Yet in almost every municipal and county system across the country, that referral was executed via an **open-loop workflow**:

- A frontline specialist hands a survivor a paper flyer with a phone number.
- Or an intake coordinator sends an unencrypted email to a general inbox: \`intake@legalaid-example.org\`.
- Or a form is submitted through a public web portal with an automated acknowledgement: *"Thank you, your submission has been received."*

The moment the email is dispatched or the flyer is handed over, the sending agency updates its internal docket to **"DISPOSITION: REFERRED OUT"** and closes the file.

In administrative terms, the agency has satisfied its protocol. In human terms, **the handoff has not occurred**.

---

### The Anatomy of the Broken Seam

Between "sent" and "served," an open-loop referral faces four critical points of failure:

1. **The Capacity Gate:** The receiving organization may have closed its intake docket that morning due to staffing shortages, grant expiration, or geographic caseload limits. The sending agency does not know this because referral directories are notoriously stale.
2. **The Jurisdiction Mismatch:** The receiving legal aid organization may only handle cases within the county court jurisdiction, whereas the survivor's protective order was filed in municipal court across city lines.
3. **The Unmonitored Inbox:** Outbound emails sent to generic agency addresses frequently sit unread for weeks, or bounce into spam filters without generating non-delivery notifications to the caseworker.
4. **The Ghost Ownership Void:** Neither agency acknowledges responsibility for the participant during the gap. If the survivor experiences an acute safety crisis while waiting for a callback that will never come, both organizations point to the other.

---

### What Closed-Loop Continuity Requires

A true handoff requires four verifiable milestones:

\`\`\`
[SENDER DISPATCH] ──> [RECEIPT ACKNOWLEDGED] ──> [CAPACITY & SCOPE CONFIRMED] ──> [DECISION OWNER BOUND]
\`\`\`

1. **Affirmative Electronic Acknowledgment:** The receiving organization explicitly confirms receipt of the administrative handoff packet within a defined operational window (*PILOT SERVICE TARGET — receiving acknowledgment within 48 hours; proposed pilot benchmark*).
2. **Deterministic Capacity & Scope Verification:** The receiving organization confirms that the matter matches its current geographic jurisdiction, grant eligibility parameters, and caseload availability.
3. **Explicit Decision Ownership:** If the receiving entity accepts the referral, a named role or unit is recorded as the active decision owner for the immediate next milestone. If the referral is declined, the sending agency is notified immediately with a structured declination code, preventing the matter from lingering in limbo.
4. **Dead-Route Alerting:** If no receiving organization confirms receipt within 14 days, the system triggers an automated dead-route flag, alerting the participant and caseworker that the referral has failed and alternative routes must be engaged.

By replacing open-loop dismissals with closed-loop continuity, public systems can turn administrative dead-ends into accountable pathways.`
  },

  // 3. RELATED DOES NOT MEAN PROVEN (Policy Analysis - PITCH_HOLD)
  // This article MUST NOT be published or visible publicly while in pitch_hold!
  {
    slug: "related-does-not-mean-proven",
    title: "Related Does Not Mean Proven",
    dek: "Designing cross-system continuity without building a surveillance database or compromising due process.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-06",
    displayDate: "Pitch Hold / Under Review",
    readingTime: "10 min read",
    contentType: "POLICY_ANALYSIS",
    topics: ["Policy", "Privacy & Governance", "Continuity", "Technology"],
    summary: "How to establish bounded, privacy-preserving interagency signals that prompt authorized human review without storing centralized allegation text or prejudging facts.",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/related-does-not-mean-proven",
    status: "pitch_hold", // MUST NEVER APPEAR PUBLICLY UNTIL CLEARED
    whatThisArticleDoesNotClaim: [
      "The existence of a related matter establishes zero factual conclusions.",
      "Administrative presence signals cannot serve as the sole basis for coercive state action."
    ],
    body: `[HELD FOR EDITORIAL PITCH SUBMISSION — NOT FOR PUBLIC RELEASE]`
  },

  // 4. TEXAS ALREADY HAS THE PIECES. THE PROBLEM IS THE SEAMS. (Policy Analysis - MWT Original)
  {
    slug: "texas-already-has-the-pieces",
    title: "Texas Already Has the Pieces. The Problem Is the Seams.",
    dek: "Texas already uses multidisciplinary continuity in child advocacy centers, high-risk teams, and joint law enforcement guidelines. The policy question is what happens when cases cross outside those boundaries.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-09-28",
    displayDate: "September 2026",
    readingTime: "9 min read",
    contentType: "POLICY_ANALYSIS",
    topics: ["Texas", "Policy", "Public Systems", "Continuity"],
    summary: "An analysis of Texas statutory precedents demonstrating that cross-agency continuity is already recognized in Texas law—and outlining how to extend it to fragmented county seams.",
    heroImage: "/brand/mwt-og-image.png",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/texas-already-has-the-pieces",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/texas-already-has-the-pieces",
        date: "September 28, 2026",
        note: "Original policy analysis published in MWT Field Notes.",
        relationship: "ORIGINAL"
      }
    ],
    sourceNotes: [
      {
        citation: "Texas Family Code §§ 261.301(f), 261.3011",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001",
        note: "Mandatory joint DFPS and local law enforcement investigations and statewide collaboration guidelines.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "Texas Family Code §§ 264.403, 264.4031, 264.406",
        url: "https://statutes.capitol.texas.gov/?artSec=264.181&chapter=FA.264&code=FA&tab=1",
        note: "Children's Advocacy Center interagency MOUs, working protocols, Multidisciplinary Teams (MDTs), and bounded confidential information exchange.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "Texas Government Code Chapter 791 (Interlocal Cooperation Act)",
        url: "https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.791.pdf",
        note: "Statutory framework authorizing local governments to contract for administrative and operational coordination.",
        authorityType: "TEXAS_STATUTE"
      }
    ],
    disclosureNote: "This analysis evaluates Texas statutory frameworks and institutional precedents. It does not constitute legal counsel.",
    whatThisArticleDoesNotClaim: [
      "A proposed Maps With Teeth standard is not an existing legal requirement unless codified by the Texas Legislature or agency administrative rules.",
      "Chapter 791 is an administrative pilot vehicle, not an independent authorization to bypass subject-specific confidentiality statutes.",
      "Maps With Teeth does not provide legal advice."
    ],
    status: "published",
    relatedArticleSlugs: [
      "the-human-becomes-the-integration-layer",
      "a-referral-is-not-a-handoff",
      "bad-maps-what-failed-referrals-teach-us"
    ],
    relatedPolicyTopics: ["Texas Policy & Systems Lab", "Multidisciplinary Teams", "Sunset Review"],
    body: `### Texas Does Not Need to Invent Multidisciplinary Coordination

When critics first hear about cross-system continuity, a common objection is: *"Government agencies are too siloed by nature. Texas law does not permit distinct institutions to coordinate across operational boundaries."*

This objection is historically and statutorily false.

Texas has spent the last three decades deliberately building specialized statutory frameworks that bridge distinct institutions. The issue is not that Texas lacks the concept of interagency continuity. **The issue is that Texas only deploys continuity inside narrow statutory enclaves.**

---

### The Existing Texas Continuity Precedents

Consider the statutory mechanisms Texas has already established:

#### 1. Mandatory Joint Investigations (Tex. Fam. Code § 261.301 & § 261.3011)
Texas law expressly mandates that when an allegation of severe child physical or sexual abuse occurs, DFPS and local law enforcement cannot investigate in isolated vacuums. Under § 261.301(f), they must conduct joint investigations. § 261.3011 goes further, requiring DFPS and law enforcement to formulate joint operational guidelines, delineate explicit roles, and execute mutual interagency agreements.

#### 2. The Children's Advocacy Center Model (Tex. Fam. Code §§ 264.403 – 264.406)
Texas codified the Children's Advocacy Center (CAC) framework to prevent child abuse victims from being repeatedly interviewed by separate agencies. Under § 264.403, participating law enforcement, DFPS caseworkers, and district attorneys must execute formal Interagency Memoranda of Understanding (MOUs). Under § 264.4031, they operate under strict working protocols governing intake, referrals, timely information exchange, case tracking, and dispute resolution.

Critically, § 264.406(e) explicitly authorizes Multidisciplinary Team members to exchange defined confidential information within that team—demonstrating that Texas law already understands how to create **bounded, lawful information-sharing authority**.

#### 3. Interlocal Cooperation Contracts (Tex. Gov't Code § 791)
Under Chapter 791 of the Texas Government Code, local governmental entities (municipalities, county commissioners courts, sheriff's departments, school districts) are authorized to execute interlocal cooperation contracts to combine operational resources for police protection, public health, and records administration. While Chapter 791 is an administrative vehicle—not a blanket waiver of confidentiality—it provides an established statutory mechanism for county-level pilots.

---

### Where the Seams Break Down

If Texas already possesses these multidisciplinary tools, why do so many cases fall through the cracks?

The answer lies in **boundary failure**:

- **Outside the CAC Trigger:** If a domestic violence or stalking matter does not meet the specific threshold for a CAC forensic interview, the case drops back into completely disconnected municipal, county, and nonprofit silos.
- **Across County Lines:** A protective order violation in Williamson County and a harassment call in Travis County are treated as two separate minor incidents by separate departments, even when involving the same parties.
- **Between Civil and Criminal Courts:** A municipal criminal misdemeanor dismisses without the civil family district court judge ever knowing that an active domestic violence charge was pending across town.

---

### The Policy Pathway Forward

Maps With Teeth does not propose dismantling existing agency structures or passing one omnibus bill that forces 254 counties into a centralized database.

Instead, the solution is **incremental, seam-level continuity**:
1. **Administrative SOPs:** Agencies can adopt closed-loop referral tracking and decision-ownership protocols immediately through internal standard operating procedures.
2. **Interlocal MOUs:** County coalitions in Central Texas can execute narrow Chapter 791 pilots to test referral delivery mechanics using synthetic and de-identified data.
3. **Sunset Recommendations:** The ongoing Texas Sunset Advisory Commission review of DFPS provides an immediate legislative opportunity to establish context-before-closure audit requirements and closed-loop handoff reporting metrics.

Texas already built the foundations. What remains is engineering the seams.`
  },

  // 5. BAD MAPS: WHAT FAILED REFERRALS CAN TEACH US (Systems Note - MWT Original)
  {
    slug: "bad-maps-what-failed-referrals-teach-us",
    title: "Bad Maps: What Failed Referrals Can Teach Us Without Exposing the People Inside Them",
    dek: "Aggregating dead-end taxonomy and broken institutional routes provides systemic policy intelligence without collecting sensitive personal narratives or building surveillance dossiers.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-09-20",
    displayDate: "September 2026",
    readingTime: "6 min read",
    contentType: "SYSTEMS_NOTE",
    topics: ["Bad Maps", "Resource Access", "Public Systems", "Privacy & Governance"],
    summary: "How structural telemetry on administrative failure modes—ghost hotlines, defunded programs, contradictory eligibility gates—can drive systemic reform while preserving strict data minimization.",
    heroImage: "/brand/mwt-og-image.png",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/bad-maps-what-failed-referrals-teach-us",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/bad-maps-what-failed-referrals-teach-us",
        date: "September 20, 2026",
        note: "Original systems note published in MWT Field Notes.",
        relationship: "ORIGINAL"
      }
    ],
    sourceNotes: [
      {
        citation: "Maps With Teeth Resource Provenance Registry & Claim Matrix",
        note: "Automated verification audits tracking primary source citations, programmatic status, and operational availability.",
        authorityType: "REPORT"
      }
    ],
    disclosureNote: "This systems note outlines the methodology of Bad Maps telemetry and de-identified institutional failure mapping.",
    whatThisArticleDoesNotClaim: [
      "Bad Maps does not publish survivor identifying details, individual allegations, or personal crisis narratives.",
      "Documenting an administrative failure point does not imply intentional agency bad faith.",
      "Maps With Teeth does not provide legal advice."
    ],
    status: "published",
    relatedArticleSlugs: [
      "the-human-becomes-the-integration-layer",
      "a-referral-is-not-a-handoff",
      "texas-already-has-the-pieces"
    ],
    relatedPolicyTopics: ["Bad Maps", "Resource Intelligence", "Data Minimization"],
    body: `### The Tragedy of the Ghost Directory

Every community in America has resource directories: 2-1-1 databases, county victim assistance booklets, community PDFs, and municipal web portals.

Yet when frontline caseworkers and survivors actually try to use these directories, they encounter a landscape of administrative ghosts:

- **The Defunded Grant:** A direct financial assistance program that ran out of emergency funds eight months ago but remains prominently listed as "active."
- **The Disconnected Number:** A legal aid intake hotline that routes to a dead voicemail box with zero indication of when calls will be returned.
- **The Hidden Prerequisite:** A shelter program listed as "emergency domestic violence housing" that in practice requires a mandatory 3-day in-patient shelter stay or a formal police report that the survivor cannot safely obtain.
- **The County Line Border War:** A municipal program that serves only residents living inside city limits, refusing individuals living three blocks away across an unincorporated county line.

When a person in crisis encounters these dead ends, the failure is treated as an isolated, personal frustration. They hang up, cross the program off their notepad, and try the next number.

**No mechanism exists to capture the failure telemetry.**

---

### What Is a "Bad Map"?

A "Bad Map" is any institutional referral pathway whose published representation diverges from its operational reality.

Bad Maps are rarely the result of malicious intent. They are the natural consequence of resource volatility: grant lifecycles fluctuate, staffing turns over, intake policies change, and statutory jurisdictions clash. But because agencies do not publish their real-time operational status, the cost of discovering that a door is locked is paid over and over again by the people least equipped to bear it.

---

### De-Identified Failure Telemetry: Intelligence Without Surveillance

The critical technical challenge is: *How do you map where routes break down without collecting private survivor stories or compromising vulnerable people?*

Maps With Teeth achieves this through **deterministic failure-point tagging**:

\`\`\`text
[FAILED ROUTE TELEMETRY]
├── Reason Code: #NO_FUNDS_EXHAUSTED
├── Jurisdictional Seam: #COUNTY_MUNICIPAL_MISMATCH
├── Gate Requirement: #MANDATORY_POLICE_REPORT_REQUIRED
├── Operational Latency: #DISCONNECTED_HOTLINE
└── Target Entity Type: Non-Profit Legal Aid Provider (De-identified)
\`\`\`

Notice what this record contains:
- It records the **structural failure code** (\`#NO_FUNDS\`, \`#MANDATORY_POLICE_REPORT\`, \`#COUNTY_MISMATCH\`).
- It records the **institutional category** and **jurisdictional boundary**.

Notice what it **NEVER** contains:
- Zero survivor names, phone numbers, or IP addresses.
- Zero narrative details or allegations.
- Zero child or family identifying information.

---

### Turning Broken Routes into Systems Reform

When you aggregate de-identified failure telemetry across hundreds of encounters, patterns emerge that are invisible to any single agency:

1. **Quantifying the "Ghost Route" Problem:** Policymakers can see exactly how many hours caseworkers spend dialing defunded hotlines, providing hard empirical data to justify modern API-based directory standards.
2. **Exposing Jurisdictional Dead Zones:** Regional planners can identify unincorporated county pockets where neither the city nor the county accepts family violence legal aid responsibility.
3. **Informing Sunset & Budget Reviews:** Legislative committees can evaluate whether appropriated victim assistance funds are actually reachable by the public or locked behind prohibitive administrative gates.

By mapping the bad maps, we can fix the roads.`
  },

  // 6. INSTITUTIONAL SEAMS AND THE HIDDEN FRICTION OF DIGITAL GOVERNMENT (External Publication Record)
  {
    slug: "institutional-seams-digital-government",
    title: "Institutional Seams and the Hidden Friction of Digital Government",
    dek: "Why digitizing public agency forms without solving interagency handoffs simply speeds up the rate at which people hit administrative dead ends.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-09-12",
    displayDate: "September 2026",
    readingTime: "5 min read",
    contentType: "RESEARCH_NOTE",
    topics: ["Public Systems", "Technology", "Policy"],
    summary: "A commentary on why modern civic tech must move beyond digitizing single-agency portals and address the inter-organizational boundaries where vulnerable users get lost.",
    heroImage: "/brand/mwt-og-image.png",
    featured: false,
    publicationOrigin: "external",
    canonicalUrl: "https://techpolicy.press/example-seams-digital-government",
    externalPublicationName: "Tech Policy & Public Systems",
    externalPublicationUrl: "https://techpolicy.press/example-seams-digital-government",
    abstract: "Digital government initiatives often celebrate converting paper intake forms into responsive web applications. But for complex, multi-agency life events—such as escaping family violence, navigating child welfare, or preventing eviction—the friction does not occur inside any single digital form. The catastrophic friction occurs at the seams between institutions. This research note analyzes the limits of single-agency civic technology and proposes a protocol-level framework for cross-system continuity.",
    whyItMatters: "Explains why public interest technologists must design for inter-organizational boundaries rather than building prettier digital silos for isolated government departments.",
    excerpt: "“When every government department builds a beautiful, isolated portal, the citizen does not experience seamless public service. They experience five separate logins, five distinct verification demands, and zero shared accountability when a referral disappears between them.”",
    status: "published",
    relatedArticleSlugs: [
      "the-human-becomes-the-integration-layer",
      "a-referral-is-not-a-handoff"
    ],
    relatedPolicyTopics: ["Cross-System Continuity", "Civic Technology", "Administrative Friction"]
  },

  // 7. HOLDING THE MAP: WHY MULTI-AGENCY NAVIGATION DEMANDS PORTABLE PROOF (Founder Essay - Syndicated)
  {
    slug: "holding-the-map-portable-proof",
    title: "Holding the Map: Why Multi-Agency Navigation Demands Portable Proof",
    dek: "Why the survivor should never be the only person holding the whole map, and why decentralized cryptographic receipts change the power dynamic of institutional intake.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-08-30",
    displayDate: "August 2026",
    readingTime: "5 min read",
    contentType: "FOUNDER_ESSAY",
    topics: ["Founder Essays", "Continuity", "Resource Access"],
    summary: "The founding perspective behind Maps With Teeth: why frontline administrative encounters must leave the participant with sovereign, cryptographic proof of their history.",
    heroImage: "/brand/mwt-og-image.png",
    featured: false,
    publicationOrigin: "syndicated",
    canonicalUrl: "https://mapswithteeth.org/writing/holding-the-map-portable-proof",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/holding-the-map-portable-proof",
        date: "August 30, 2026",
        note: "Canonical original publication.",
        relationship: "ORIGINAL"
      },
      {
        platformOrOutlet: "LinkedIn Pulse / Public Interest Systems Edition",
        url: "https://linkedin.com/pulse/example-holding-the-map",
        date: "September 5, 2026",
        note: "Adapted executive summary edition for public systems practitioners.",
        relationship: "ADAPTED"
      }
    ],
    sourceNotes: [
      {
        citation: "Maps With Teeth Continuity Contact Record Specification (v0.1)",
        url: "https://mapswithteeth.org/continuity",
        note: "Technical specification for SHA-256 client-side cryptographic contact receipts and segregated review proofs.",
        authorityType: "REPORT"
      }
    ],
    disclosureNote: "Founder reflections on the design principles of Maps With Teeth.",
    whatThisArticleDoesNotClaim: [
      "Personal essays reflect founding design philosophy and operational perspective.",
      "Cryptographic receipts document administrative encounters and do not establish judicial findings.",
      "Maps With Teeth does not provide legal advice."
    ],
    status: "syndicated",
    relatedArticleSlugs: [
      "the-human-becomes-the-integration-layer",
      "bad-maps-what-failed-referrals-teach-us"
    ],
    relatedPolicyTopics: ["Survivor Data Sovereignty", "Continuity Receipts"],
    body: `### The Loneliest Role in Public Systems

If you sit in the waiting room of any county family court, municipal housing authority, or child welfare intake office, you will see people holding thick, weathered folders.

Inside those folders are the physical fragments of their lives:
- A printed police report with a handwritten incident number.
- A photocopy of a residential lease with a landlord's signature.
- A printout of text messages timestamped six months ago.
- A utility bill deposit waiver signed by a domestic violence advocate.
- A business card from a legal aid attorney who left the organization last month.

That folder exists because the person carrying it learned a brutal truth: **If they do not hold the whole map, nobody else will.**

---

### The Asymmetry of Administrative Encounters

When an individual interacts with a public institution, an acute power asymmetry exists:

1. **The Agency Has a System of Record:** The agency logs notes into internal databases that the participant cannot inspect, correct, or port elsewhere.
2. **The Agency Can Disclaim Memory:** If an agency staff member misplaces a document, declines a referral, or gives inaccurate instructions, there is no standardized record that the encounter ever took place. The participant is told, *"We have no record of that conversation."*
3. **The Participant Bears the Consequence:** If the agency loses the file, the participant suffers the eviction, the missed protective order hearing, or the declined crisis grant.

---

### The Power of the Cryptographic Receipt

When you make a deposit at a bank, you receive a receipt. When you return a rental car, you receive a receipt. When you submit a package at the post office, you receive a tracking number.

Yet when a person in acute danger walks into an institutional intake desk and presents four pieces of evidence, they walk out with nothing.

**Maps With Teeth changes this dynamic through the Continuity Contact Record:**
- **Proof of Presentation:** It records exactly which documents were presented (e.g. *"Residential lease inspected for signature names"*).
- **Proof of Review Boundary:** It distinguishes between what was substantively evaluated versus what was ministerial intake, protecting both the agency from false liability and the participant from unacknowledged receipt.
- **Client-Side Data Sovereignty:** The cryptographic SHA-256 hash of the record is computed directly on the participant's device. No cloud company holds their private narrative. The participant owns the proof of their encounter.

When responsibility crosses a boundary, the map must travel with the person.`
  }
];
