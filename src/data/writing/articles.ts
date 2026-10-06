import { Article } from "@/domain/writing/types";

export const ARTICLES: Article[] = [
  {
    slug: "the-human-becomes-the-integration-layer",
    title: "The Human Becomes the Integration Layer",
    dek: "What happens when every institution holds a piece of the problem, but no one holds the path between them?",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-05",
    displayDate: "October 5, 2026",
    readingTime: "9 min read",
    contentType: "SYSTEMS_NOTE",
    topics: ["Continuity", "Public Systems", "Policy", "Privacy & Governance"],
    summary: "A systems note on what happens when people become the manual integration layer between institutions, and why continuity must preserve provenance, review traceability, and decision ownership without turning repetition into proof.",
    heroImage: "/brand/mwt-og-image.png",
    featured: true,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/the-human-becomes-the-integration-layer",
    publicationHistory: [
      {
        platformOrOutlet: "Maps With Teeth Field Notes",
        url: "https://mapswithteeth.org/writing/the-human-becomes-the-integration-layer",
        date: "October 5, 2026",
        note: "Canonical original publication.",
        relationship: "ORIGINAL"
      }
    ],
    sourceNotes: [
      {
        citation: "Texas Family Code § 261.301",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=261.001",
        note: "Texas child-protection investigation framework.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "Texas Family Code § 153.073",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FA&Value=153.073",
        note: "Parental rights of conservators, subject to court-ordered limitations.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "Texas Education Code § 26.004",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=ED&Value=26.004",
        note: "Parent access to specified student records.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "FERPA, 34 C.F.R. §§ 99.4, 99.10",
        url: "https://studentprivacy.ed.gov/ferpa?exp=8",
        note: "Federal education-record access framework.",
        authorityType: "FEDERAL_STATUTE"
      },
      {
        citation: "Texas Penal Code § 36.06",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=PE&Value=36.06",
        note: "Texas obstruction or retaliation statute; application depends on the statutory elements and facts.",
        authorityType: "TEXAS_STATUTE"
      },
      {
        citation: "DFPS Substance Use Resource Guide",
        url: "https://www.dfps.texas.gov/handbooks/CPS/Resource_Guides/Substance_Use_Resource_Guide.pdf",
        note: "DFPS guidance concerning substance-use information and child-safety assessment.",
        authorityType: "REPORT"
      },
      {
        citation: "DFPS Risk Assessment Resource Guide",
        url: "https://www.dfps.texas.gov/handbooks/CPS/Resource_Guides/Risk_Assessment_Resource_Guide.pdf",
        note: "DFPS risk-assessment guidance concerning prior history and review factors.",
        authorityType: "REPORT"
      },
      {
        citation: "40 Tex. Admin. Code § 702.827",
        url: "https://www.law.cornell.edu/regulations/texas/40-Tex-Admin-Code-SS-702-827",
        note: "Office of Consumer Affairs review and notification framework.",
        authorityType: "AGENCY_RULE"
      },
      {
        citation: "Texas Education Code §§ 25.095, 25.0951",
        url: "https://statutes.capitol.texas.gov/GetStatute.aspx?Code=ED&Value=25.0951",
        note: "Attendance notice and truancy-response framework.",
        authorityType: "TEXAS_STATUTE"
      }
    ],
    disclosureNote: "This systems note distinguishes existing legal frameworks from proposed Maps With Teeth design standards. It is not legal advice; cited authorities should be re-checked before external filing or testimony.",
    whatThisArticleDoesNotClaim: [
      "Multiple reports do not prove an allegation.",
      "A contemporaneous note does not automatically prove the event described in it.",
      "Distress proves neither truth nor falsity.",
      "An allegation of retaliation does not prove the underlying allegation.",
      "Every agency can lawfully access every related record.",
      "Every email requires a full investigative response. The proposal is for traceability around qualifying reports, material evidence, rights-limiting decisions, referrals, escalations, and closures."
    ],
    status: "published",
    relatedArticleSlugs: [
      "a-referral-is-not-a-handoff",
      "texas-already-has-the-pieces",
      "bad-maps-what-failed-referrals-teach-us"
    ],
    relatedPolicyTopics: ["Cross-System Continuity", "Evidence Integrity", "Administrative Traceability"],
    body: `A person can do everything they are told to do and still disappear between systems. They can make the report, save the documentation, call the next number, fill out the next form, explain what happened again, give the new person the old reference number, contact the agency they were referred to, and call back when nobody responds.

Each interaction can generate a record. And still, somehow, there may be no record of the path.

The problem is not always that information does not exist. Sometimes it exists in several places, under different identifiers, inside systems built for different purposes, with different rules about what they can see and what they are responsible for doing. One institution may hold an incident report. Another may hold an intake record. A court may hold a filing. A school may hold attendance or safety information. A service provider may hold the history of a referral. Each organization can be doing its own job according to its own rules while the person moving between them becomes responsible for explaining how the pieces relate.

At that point, the human being has quietly become the integration layer.

### The problem is not simply that systems cannot see each other

Institutional boundaries exist for good reasons. Police are not courts. Courts are not child-welfare agencies. Schools have different responsibilities from victim-service organizations. Confidentiality, jurisdiction, due process, and limits on authority matter. The problem appears when responsibility crosses a boundary but continuity does not.

Sometimes the missing connection is not hidden. A person may repeatedly identify another report number, another jurisdiction, another court matter, another agency contact, another body of documentation, or the exact location of records that could be checked. At that point, the person has already supplied the bridge. The remaining question is whether anyone owns the responsibility to cross it.

That creates a second kind of fragmentation: known information that remains administratively unconnected. A system can possess both the immediate record and notice that potentially relevant material exists elsewhere, yet still make a decision using only the fragment in front of it.

### Provenance matters more than volume

Connecting records creates a legitimate due-process problem of its own: more records do not necessarily mean more independent evidence. One person could repeat substantially the same allegation to several institutions. Those contacts might produce multiple case numbers while still originating from one underlying source. Treating repetition as corroboration would be a serious error.

The reverse can also happen. A person may report different events contemporaneously over time and identify documentary evidence, agency-generated records, third-party observations, photographs, messages, school records, court records, medical records, counseling records, or other material created independently of the later dispute. Treating all of those records as one person's unsupported story can erase relevant context.

Continuity therefore cannot mean counting reports. It has to preserve provenance: who originated the information, when it was recorded, whether it was independently generated or derivative, what supporting material exists, what was disputed, what was actually reviewed, and what remains unresolved.

**Related does not mean proven. Repeated does not mean independently corroborated. Disputed does not mean irrelevant.**

### Evidence before impression

Complex safety matters are often turned into a global credibility contest between adults. That is a poor substitute for evidence analysis. A frightened, angry, stuttering, disorganized, mentally ill, substance-using, poor, wealthy, polished, or difficult person can still hand an institution an authentic record. Demeanor is information about an interaction. It is not provenance.

Longitudinal records can matter for the same reason. Contemporaneous counseling notes, earlier communications, prior reports, school records, or other records created across months or years may help establish chronology, consistency, change over time, and what was being reported before a later dispute intensified. A clinician's note does not automatically prove the underlying event merely because it was written contemporaneously. But neither is it equivalent to a story invented yesterday.

A decision-maker should not substitute a distressed presentation during a high-stakes interaction for review of longitudinal records and independently verifiable evidence. Snapshot demeanor should not outweigh a body of records without an articulated reason.

### Could not is not the same as would not

Administrative systems also convert barriers into character judgments. A person who cannot retrieve a document, lacks transportation, loses communication access, is frightened of another participant, cannot reach an office, or needs an accommodation can end up labeled noncooperative. That label can then follow the person into later decisions.

A traceable system should distinguish refusal from inability. It should be capable of recording: expressly refused; unavailable; access barrier reported; safety or fear barrier reported; partial cooperation; or reason unknown. "Could not" should not silently become "would not."

### Rights decisions should follow the controlling document

The same principle applies when an institution changes someone's legal access or participation rights. A third party's characterization of a custody order is not the order. A legal-rights decision should be traceable to the controlling authority: which order, provision, statute, or binding document was reviewed, what restriction was identified, when it was verified, and how an error can be corrected.

That does not mean every disputed rights question has an easy answer. It means the institution should be able to identify the source of the restriction it is enforcing rather than converting another participant's assertion into administrative reality.

### A child's presentation is evidence, not a verdict

A child appearing happy, social, affectionate, academically capable, or calm in one setting is real information. It is not proof that no safety problem exists elsewhere. Children can function differently across environments, and a single observation has limited reach.

Attendance data works the same way in the other direction. Significant absences do not prove maltreatment. They are independently generated institutional context that may warrant attention when considered alongside other reported concerns. The purpose of cumulative review is not to turn every concerning fact into proof. It is to prevent one reassuring impression from erasing other material that exists.

### Retaliation is a separate question

A disputed underlying allegation and subsequent alleged retaliation are separate factual questions. Evidence that someone threatened, intimidated, removed resources, interfered with access, or otherwise acted after learning of a report does not prove that the original allegation was true. Likewise, the original allegation being disputed, screened out, or unsubstantiated does not automatically make later conduct lawful or irrelevant.

Where a statement expressly connects later conduct to reporting activity, that can be evidence of motive for the later conduct. The correct model is two tracks: evaluate the underlying allegation on its evidence, and evaluate the subsequent conduct on its own evidence and applicable authority. One question should not erase the other.

### The missing object is a Review Trace

The most important addition to the Maps With Teeth model may be surprisingly mundane: a durable record of what happened to material information.

A Review Trace would not force an institution to agree with the person submitting evidence. It would record whether identified material was received, reviewed, unavailable, duplicative, disputed, outside authority, referred elsewhere, or left unreviewed for a stated reason. It would identify the next responsible actor when responsibility moved.

That changes the accountability question from "Did the agency believe me?" to "Can the system account for what it did with the information it was given?"

A public institution should be allowed to disagree. It should be allowed to conclude that evidence is insufficient, irrelevant, duplicative, outside its authority, or contradicted by stronger evidence. But silence should not masquerade as a disposition when consequential, identifiable information has entered the system.

### The goal is not to make every system know everything

Maps With Teeth is not proposing one enormous allegation database. A centralized repository of loosely related reports, private family information, risk scores, and untested accusations could create serious privacy, security, retaliation, and due-process risks.

The better question is smaller: what minimum continuity, provenance, and decision metadata must survive when responsibility crosses a boundary? Sometimes the answer is a reference number. Sometimes acknowledgment. Sometimes the provenance of a record. Sometimes a reason something was not reviewed. Sometimes the identity of the next person who owns the decision.

Technology can support that. It cannot substitute for responsibility. A perfectly connected system can still be unfair if it confuses repetition with corroboration or demeanor with evidence. A fragmented system can still fail if a person repeatedly identifies verifiable material and nobody owns the responsibility to look.

### The human should not have to be the only person holding the map

Maps With Teeth began as a resource-navigation problem: a service being listed does not mean someone can actually reach it. Mapping those barriers exposed a deeper problem. Reaching the correct institution does not necessarily mean the relevant context, responsibility, or evidence arrives with the person.

The project now asks two related questions: Can someone find a route that is actually reachable? And when that route crosses institutional boundaries, does enough continuity survive for the next institution to act fairly?

The answer is not to believe everything because it appears in several places. The answer is not to ignore everything because it originated with the same person. The answer is to preserve enough continuity, provenance, and process for authorized people to evaluate the actual evidence rather than mistaking fragmentation for absence, repetition for proof, distress for unreliability, or silence for resolution.

**People move between systems. Their information and accountability often do not.**

The person in the middle should not have to be the API, the routing protocol, and the only person holding the map.`
  },
  {
    slug: "a-referral-is-not-a-handoff",
    title: "A Referral Is Not a Handoff",
    dek: "Draft editorial placeholder. Not yet published.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-05",
    displayDate: "Draft",
    readingTime: "Draft",
    contentType: "POLICY_ANALYSIS",
    topics: ["Continuity", "Policy", "Public Systems"],
    summary: "Planned analysis of why a sent referral is not equivalent to acknowledged receipt, assigned responsibility, or an outcome.",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/a-referral-is-not-a-handoff",
    status: "draft"
  },
  {
    slug: "related-does-not-mean-proven",
    title: "Related Does Not Mean Proven",
    dek: "Pitch-hold editorial placeholder. Not for public release.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-05",
    displayDate: "Pitch Hold",
    readingTime: "Pitch Hold",
    contentType: "POLICY_ANALYSIS",
    topics: ["Continuity", "Privacy & Governance", "Policy"],
    summary: "Planned analysis of how continuity can preserve relationships and provenance without creating an allegation database or treating association as proof.",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/related-does-not-mean-proven",
    status: "pitch_hold"
  },
  {
    slug: "texas-already-has-the-pieces",
    title: "Texas Already Has the Pieces. The Problem Is the Seams.",
    dek: "Draft editorial placeholder. Not yet published.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-05",
    displayDate: "Draft",
    readingTime: "Draft",
    contentType: "POLICY_ANALYSIS",
    topics: ["Texas", "Policy", "Continuity", "Public Systems"],
    summary: "Planned analysis of existing Texas coordination mechanisms and the continuity gaps that remain outside their defined structures.",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/texas-already-has-the-pieces",
    status: "draft"
  },
  {
    slug: "bad-maps-what-failed-referrals-teach-us",
    title: "Bad Maps: What Failed Referrals Can Teach Us Without Exposing the People Inside Them",
    dek: "Draft editorial placeholder. Not yet published.",
    author: "Jayme Volstad",
    authorRole: "Founder / Project Director, Maps With Teeth",
    publicationDate: "2026-10-05",
    displayDate: "Draft",
    readingTime: "Draft",
    contentType: "SYSTEMS_NOTE",
    topics: ["Bad Maps", "Resource Access", "Public Systems", "Privacy & Governance"],
    summary: "Planned systems note on deidentified failure intelligence such as referral loops, wrong jurisdictions, unreachable programs, impossible documentation demands, and missing decision ownership.",
    featured: false,
    publicationOrigin: "maps_with_teeth",
    canonicalUrl: "https://mapswithteeth.org/writing/bad-maps-what-failed-referrals-teach-us",
    status: "draft"
  }
];
