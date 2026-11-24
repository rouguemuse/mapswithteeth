"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Scale,
  Building2,
  FileCheck,
  ArrowRight,
  Lock,
  CheckCircle2,
  Activity,
  Code2
} from "lucide-react";

export default function ForPartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({ 0: true });
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    interestArea: "Frontline Validation",
    message: ""
  });

  const toggleGroup = (idx: number) => {
    setOpenGroups((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const expandAllGroups = () => {
    setOpenGroups({ 0: true, 1: true, 2: true, 3: true, 4: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerGroups = [
    {
      groupTitle: "1. Policymakers & Legislative Staff",
      groupDeck: "Statutory mechanisms, Sunset recommendations, and administrative oversight.",
      icon: Scale,
      roles: [
        {
          title: "Statutory Drafting & Policy Audits",
          tagline: "Evaluating statutory and regulatory feasibility.",
          description:
            "Legislative staff and state agency counsel auditing proposed language for pre-closure checks, referral acknowledgment mandates, and cross-agency liaison roles under Texas Family, Government, and Property codes."
        },
        {
          title: "Sunset Advisory Review Alignment",
          tagline: "Formulating performance and continuity metrics.",
          description:
            "Oversight analysts aligning proposed closed-loop indicators and review trace requirements with upcoming Texas Sunset reviews (such as the 2026–2027 DFPS review)."
        },
        {
          title: "Interlocal Pilot Structuring",
          tagline: "Structuring multi-agency trial authority.",
          description:
            "County commissioners and municipal attorneys exploring interlocal cooperation agreements (Tex. Gov't Code § 791) to test referral traceability without expanding tort liability."
        }
      ]
    },
    {
      groupTitle: "2. Casework Practitioners & Intake Navigators",
      groupDeck: "Ground-truth validation across shelters, crisis desks, and frontline navigation.",
      icon: Users,
      roles: [
        {
          title: "Frontline Feasibility Testing",
          tagline: "Testing whether protocols match ground truth.",
          description:
            "Advocates, caseworkers, and shelter navigators reviewing our resource friction vectors, barrier-aware cooperation categories, and operational handoff notes against live daily practice."
        },
        {
          title: "Referral-Flow & Intake Analysis",
          tagline: "Mapping where referrals succeed or stall.",
          description:
            "Intake directors sharing deidentified workflow observations to identify circular referral loops, unacknowledged transfers, and unassigned next decision ownership."
        },
        {
          title: "Pilot Workflow Co-Design",
          tagline: "Co-designing Central Texas trials.",
          description:
            "CAC coordinators, family violence advocates, and agency supervisors helping shape realistic trial protocols across Williamson, Travis, Bastrop, Burnet, and Hays counties."
        }
      ]
    },
    {
      groupTitle: "3. Legal Aid Counsel & Defense Bar",
      groupDeck: "Constitutional due process, evidentiary boundaries, and confidentiality protections.",
      icon: ShieldCheck,
      roles: [
        {
          title: "Due-Process & Evidentiary Safeguards",
          tagline: "Preventing fact-merging and improper inferences.",
          description:
            "Family law and criminal defense counsel ensuring that 'linked-matter review' operates strictly as an administrative signal without compromising constitutional due process, pre-judging guilt, or conflating repetition with corroboration."
        },
        {
          title: "Controlling-Document Verification",
          tagline: "Verifying actual legal authority and operative language.",
          description:
            "Attorneys pressure-testing the 5-step verification methodology to ensure administrative actions are traceable to the actual governing orders and statutes being enforced."
        },
        {
          title: "VAWA & Privacy Confidentiality",
          tagline: "Defending statutory non-disclosure standards.",
          description:
            "Victim-rights advocates ensuring compliance with applicable federal and state non-disclosure boundaries (including 34 U.S.C. § 12291(b)(2) VAWA confidentiality and statutory privileges), guaranteeing zero unauthorized data disclosure."
        }
      ]
    },
    {
      groupTitle: "4. Systems & Academic Researchers",
      groupDeck: "Empirical seam measurement, gap taxonomy, and public administration research.",
      icon: Activity,
      roles: [
        {
          title: "Seam Taxonomy & Hypothesis Testing",
          tagline: "Testing cross-system continuity hypotheses.",
          description:
            "Scholars and public policy researchers evaluating our 12 seam failures and proposed indicators (Verified Handoff Rate, Continuity Loss Rate, Ownerless Matter Rate, Referral Loop Rate)."
        },
        {
          title: "Multi-Agency Coordination Studies",
          tagline: "Investigating institutional amnesia.",
          description:
            "Institutional researchers examining how information and responsibility fragment across child welfare, criminal justice, civil courts, and municipal housing."
        },
        {
          title: "Evidentiary Integrity Methodology",
          tagline: "Auditing provenance and claim separation models.",
          description:
            "Data scientists and epistemologists reviewing our claim-evidence separation schema and deterministic evaluation algorithms."
        }
      ]
    },
    {
      groupTitle: "5. Philanthropic Funders & Civic Collaborators",
      groupDeck: "Non-commercial civic infrastructure, independent audits, and pilot expansion.",
      icon: Code2,
      roles: [
        {
          title: "Open-Source Civic Infrastructure",
          tagline: "Investing in public-interest systems reform.",
          description:
            "Foundations and philanthropic partners funding long-term, non-commercial public infrastructure that eliminates vendor lock-in and commercial surveillance incentives."
        },
        {
          title: "Independent Security & Legal Audits",
          tagline: "External validation of client-side architecture.",
          description:
            "Grantmakers supporting formal third-party penetration testing, cryptographic verification, and external legal review before any live pilot deployment."
        },
        {
          title: "Central Texas Pilot Support",
          tagline: "Catalyzing regional implementation.",
          description:
            "Civic partners supporting synthetic-data workflow trials, frontline practitioner training, and empirical evaluation in Central Texas."
        }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* 1. Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Users className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              CALL FOR PARTNERS · OPEN CO-DESIGN (2026)
            </span>
          </div>
          <span className="coord-tick">[STAGE: PROPOSED MODEL · PEER REVIEW]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          We Are Looking for Partners to Pressure-Test the Continuity Model.
        </h1>

        <p className="text-base sm:text-lg text-stone-900 leading-relaxed font-sans font-medium max-w-3xl">
          Maps With Teeth is an open public-interest initiative. We do not pretend to hold all the answers in isolation. We are inviting frontline practitioners, legal scholars, technologists, agency leaders, and funders to challenge, refine, and co-design this infrastructure.
        </p>

        {/* Anchor Quotes & Direct Jump to Form (GOV.UK Left-Rule Callout) */}
        <div className="mwt-callout-urgent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold space-y-1">
            <p>“PEOPLE MOVE BETWEEN SYSTEMS. THEIR INFORMATION AND ACCOUNTABILITY OFTEN DO NOT.”</p>
            <p className="text-stone-700 font-normal normal-case font-serif italic text-sm">
              &ldquo;The survivor should not be the only person holding the whole map.&rdquo;
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Link
              href="/support"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#F5F1E8] hover:bg-white border border-[#1C1D1D] text-[#1C1D1D] rounded text-xs font-mono font-bold uppercase tracking-wider transition"
            >
              <span>$100k Founding Budget &amp; Governance →</span>
            </Link>
            <a
              href="#partner-form"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#971F26] hover:bg-[#7A181E] text-white rounded text-xs font-mono font-bold uppercase tracking-wider transition shadow-xs"
            >
              <span>Start Collaboration Inquiry ↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1B. Evidence & Epistemic Credibility Ledger for Partners & Funders (Priority 2 & 3) */}
      <section aria-label="Evidence and Epistemic Status Summary" className="bg-[#F5F1E8] border border-[#C4B69E] border-t-2 border-t-[#1C1D1D] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#971F26]">
            EVIDENCE &amp; CREDIBILITY LEDGER · WHAT IS BUILT vs. PROPOSED
          </span>
          <span className="font-mono text-[10.5px] text-stone-600 uppercase">
            [STRICT EPISTEMIC BOUNDARIES]
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-sans">
          <div className="p-3 bg-white border border-stone-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-[#1F6B38] uppercase block">
              1. IMPLEMENTED CODE
            </span>
            <p className="text-stone-800 leading-snug">
              Client-side Resource Matcher (47 source-audited records) and Continuity Receipt prototype execute in this repository today. <em>Not yet independently evaluated in live clinical deployment.</em>
            </p>
          </div>

          <div className="p-3 bg-white border border-stone-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-[#1C1D1D] uppercase block">
              2. INTERNAL QA TESTS
            </span>
            <p className="text-stone-800 leading-snug">
              1,070 provenance assertions, 158 tri-state matcher checks, and 15 receipt risk invariants verify internal code behavior—<em>distinct from real-world outcome evidence</em>.
            </p>
          </div>

          <div className="p-3 bg-white border border-stone-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-[#971F26] uppercase block">
              3. SUBMITTED POLICY INPUT
            </span>
            <p className="text-stone-800 leading-snug">
              Texas DFPS Sunset filing (<code>POL-001A</code>, hearing Dec 2–3, 2026) is formally submitted public input—<em>not agency endorsement or enacted statute</em>.
            </p>
          </div>

          <div className="p-3 bg-white border border-stone-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-[#945700] uppercase block">
              4. PLANNED PILOT SCOPE
            </span>
            <p className="text-stone-800 leading-snug">
              Proposed 90-day synthetic-data workflow trials and 6-month Central Texas validation (~25 cases) are <em>planned activities, not completed institutional partnerships</em>.
            </p>
          </div>

          <div className="p-3 bg-white border border-stone-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-stone-700 uppercase block">
              5. PLANNED BUDGET ($100K)
            </span>
            <p className="text-stone-800 leading-snug">
              The $100,000 founding budget (including the planned $10,000 Gap Fund) represents <em>planned, unfunded allocations, not secured funding or an active assistance program</em>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Organized Partner Roles in 5 Accordion Tracks */}
      <section className="space-y-5">
        <div className="border-b border-[#D9D1C4] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
              Ways to Collaborate (5 Stakeholder Tracks)
            </h2>
            <p className="text-xs text-stone-600 font-sans">
              Select a stakeholder track below to inspect specific review and collaboration roles.
            </p>
          </div>
          <button
            type="button"
            onClick={expandAllGroups}
            className="px-3 py-1.5 bg-[#EEE8DD] hover:bg-stone-200 border border-[#1C1D1D] rounded text-[11px] font-mono font-bold uppercase text-[#1C1D1D] cursor-pointer"
          >
            Expand All 5 Tracks
          </button>
        </div>

        <div className="space-y-3">
          {partnerGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            const isOpen = !!openGroups[idx];
            return (
              <div
                key={group.groupTitle}
                className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleGroup(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-[#EEE8DD] transition cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <GroupIcon className="w-4 h-4 text-[#971F26] shrink-0" />
                      <h3 className="font-serif font-bold text-base sm:text-xl text-[#1C1D1D]">
                        {group.groupTitle}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-600 font-sans pl-6">
                      {group.groupDeck}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-[#1C1D1D] text-white rounded text-[10px] font-mono font-bold uppercase shrink-0">
                    {isOpen ? "Hide Roles −" : "3 Roles +"}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-2 border-t border-[#D9D1C4] grid md:grid-cols-3 gap-3.5 bg-white">
                    {group.roles.map((role) => (
                      <div
                        key={role.title}
                        className="bg-[#EEE8DD] border border-[#1C1D1D] rounded-xl p-4 space-y-2.5 flex flex-col justify-between shadow-2xs"
                      >
                        <div className="space-y-1.5">
                          <h4 className="font-serif font-bold text-base text-[#1C1D1D]">
                            {role.title}
                          </h4>
                          <span className="text-[11px] font-mono text-[#971F26] font-bold block">
                            {role.tagline}
                          </span>
                          <p className="text-xs text-stone-800 leading-relaxed font-sans">
                            {role.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#D9D1C4] text-[10px] font-mono text-stone-600 uppercase font-bold">
                          OPEN FOR COLLABORATION
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Transparency & Non-Claim Notice (GOV.UK Left-Rule Editorial Callout) */}
      <section className="mwt-callout-urgent space-y-1.5 font-mono text-xs text-stone-800">
        <span className="font-bold text-[#971F26] uppercase block">
          TRANSPARENCY STANDARD ON INSTITUTIONAL PARTNERSHIPS:
        </span>
        <p className="font-sans text-stone-700 leading-relaxed">
          We maintain a strict policy of honesty regarding organizational maturity: we do not claim formal endorsements, pilots, or partnerships with state agencies, courts, or municipal departments until agreements are formally executed. All current artifacts represent independent public-interest research and specifications open for peer review.
        </p>
      </section>

      {/* 4. Partner Inquiry Form */}
      <section id="partner-form" className="scroll-mt-36 lg:scroll-mt-28 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-b border-[#D9D1C4] pb-4 space-y-1">
          <span className="text-xs font-mono text-[#971F26] font-bold uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">
            Start a Collaboration Conversation
          </h2>
          <p className="text-stone-700 text-xs sm:text-sm font-sans">
            Tell us how your organization or expertise relates to cross-system continuity, resource intelligence, or policy analysis.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border-2 border-emerald-700 rounded-xl space-y-2 text-center font-mono">
            <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
            <h3 className="font-bold text-emerald-950 text-base">Inquiry Received</h3>
            <p className="text-xs text-emerald-800 font-sans">
              Thank you for reaching out. A research coordinator will follow up within 2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="partner-name" className="font-bold text-stone-800 uppercase block">Your Name *</label>
                <input
                  id="partner-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="partner-org" className="font-bold text-stone-800 uppercase block">Organization / Agency</label>
                <input
                  id="partner-org"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Travis County Legal Aid / CAC"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="partner-role" className="font-bold text-stone-800 uppercase block">Professional Role *</label>
                <input
                  id="partner-role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Managing Attorney / Shelter Director"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="partner-email" className="font-bold text-stone-800 uppercase block">Email Address *</label>
                <input
                  id="partner-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.org"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="partner-track" className="font-bold text-stone-800 uppercase block">Primary Collaboration Area</label>
              <select
                id="partner-track"
                value={formData.interestArea}
                onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
              >
                <option value="Frontline Validation">Frontline Practice &amp; Validation</option>
                <option value="Referral-Flow Analysis">Referral-Flow &amp; Intake Analysis</option>
                <option value="Pilot Design">Pilot Protocol Co-Design</option>
                <option value="Policy Review">Policy &amp; Statutory Audits</option>
                <option value="Legal Review">Legal &amp; Due-Process Boundaries</option>
                <option value="Systems Research">Systems Research</option>
                <option value="Technical Interoperability">Technical Interoperability</option>
                <option value="Privacy Review">Privacy &amp; Anti-Surveillance Review</option>
                <option value="Philanthropic Support">Philanthropic Support</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="partner-message" className="font-bold text-stone-800 uppercase block">Message / Areas of Interest</label>
              <textarea
                id="partner-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share context on what your team is encountering or how you would like to participate..."
                className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[#971F26] hover:bg-[#7A181E] text-white rounded font-bold uppercase tracking-wider transition shadow-sm"
            >
              Submit Collaboration Inquiry
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
