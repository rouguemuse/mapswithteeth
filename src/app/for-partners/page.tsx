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
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    interestArea: "Frontline Validation",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerGroups = [
    {
      groupTitle: "1. Frontline & Operational Review",
      groupDeck: "Ground-truth validation across shelters, intake desks, and navigators.",
      icon: Users,
      roles: [
        {
          title: "Frontline Practice & Validation",
          tagline: "Testing whether data matches ground truth.",
          description:
            "Advocates, shelter navigators, social workers, and frontline intake staff reviewing our resource friction vectors, barrier criteria, and workaround notes against live daily practice."
        },
        {
          title: "Referral-Flow & Intake Analysis",
          tagline: "Mapping where referrals succeed or stall.",
          description:
            "Agencies sharing deidentified workflow observations of their incoming and outgoing referral pipelines to identify structural dead routes and unacknowledged transfers."
        },
        {
          title: "Pilot Protocol Co-Design",
          tagline: "Co-designing Central Texas workflow trials.",
          description:
            "County commissioners, municipal leaders, CAC coordinators, and agency directors helping shape trial handoff protocols in Williamson, Travis, Bastrop, Burnet, Hays, and Harris counties."
        }
      ]
    },
    {
      groupTitle: "2. Legal, Policy & Systems Research",
      groupDeck: "Statutory audits, constitutional due process, and interagency amnesia.",
      icon: Scale,
      roles: [
        {
          title: "Policy & Statutory Audits",
          tagline: "Evaluating statutory & regulatory feasibility.",
          description:
            "Legislative staff, state agency attorneys, and policy analysts auditing our legal interpretations of Texas Property, Family, Labor, and Utility codes and closed-loop standards."
        },
        {
          title: "Legal & Due-Process Boundaries",
          tagline: "Evidentiary & due-process boundaries.",
          description:
            "Family law and defense counsel ensuring that 'linked-matter review' operates strictly as an investigative signal without compromising constitutional due process or merging facts."
        },
        {
          title: "Systems Research",
          tagline: "Academic & institutional inquiry.",
          description:
            "Scholars and institutional researchers studying interagency amnesia, cross-jurisdictional case tracking, and multidisciplinary child-safety coordination."
        }
      ]
    },
    {
      groupTitle: "3. Technical Architecture & Support",
      groupDeck: "Open protocols, client-side data minimization, and civic funding.",
      icon: Code2,
      roles: [
        {
          title: "Technical Interoperability",
          tagline: "Engineering open protocols & schemas.",
          description:
            "Software engineers and security architects testing our client-side JSON-LD schemas, SHA-256 baseline digest comparison, and open data interchange protocols."
        },
        {
          title: "Privacy & Anti-Surveillance Review",
          tagline: "Stress-testing data minimization protocols.",
          description:
            "Civil liberties advocates and privacy technologists verifying that client-side record hashing and data minimization protect participant privacy without centralized dossiers."
        },
        {
          title: "Philanthropic Support",
          tagline: "Funding open-source public infrastructure.",
          description:
            "Foundations and civic tech grantmakers investing in long-term, non-commercial public-interest software and statutory research."
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

        {/* Anchor Quotes */}
        <div className="p-4 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-md text-xs font-mono uppercase tracking-wider text-stone-900 font-bold space-y-1">
          <p>“PEOPLE MOVE BETWEEN SYSTEMS. THEIR INFORMATION AND ACCOUNTABILITY OFTEN DO NOT.”</p>
          <p className="text-stone-700 font-normal normal-case font-serif italic text-sm">
            &ldquo;The survivor should not be the only person holding the whole map.&rdquo;
          </p>
        </div>
      </div>

      {/* 2. Organized Partner Roles in 3 Groups */}
      <section className="space-y-8">
        <div className="border-b border-[#D9D1C4] pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Ways to Collaborate
          </h2>
          <span className="text-xs font-mono text-stone-600 font-bold uppercase">
            3 PARTICIPATION GROUPS
          </span>
        </div>

        <div className="space-y-8">
          {partnerGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.groupTitle} className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-stone-300">
                  <GroupIcon className="w-4 h-4 text-[#971F26]" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1D1D]">
                    {group.groupTitle}
                  </h3>
                  <span className="text-xs text-stone-600 font-sans hidden sm:inline">
                    — {group.groupDeck}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {group.roles.map((role) => (
                    <div
                      key={role.title}
                      className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs hover:border-[#971F26] transition-colors"
                    >
                      <div className="space-y-2">
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
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Transparency & Non-Claim Notice */}
      <section className="p-5 bg-white border-2 border-[#1C1D1D] rounded-xl space-y-2 font-mono text-xs text-stone-800">
        <span className="font-bold text-[#971F26] uppercase block">
          TRANSPARENCY STANDARD ON INSTITUTIONAL PARTNERSHIPS:
        </span>
        <p className="font-sans text-stone-700 leading-relaxed">
          We maintain a strict policy of honesty regarding organizational maturity: we do not claim formal endorsements, pilots, or partnerships with state agencies, courts, or municipal departments until agreements are formally executed. All current artifacts represent independent public-interest research and specifications open for peer review.
        </p>
      </section>

      {/* 4. Partner Inquiry Form */}
      <section id="partner-form" className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
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
                <label className="font-bold text-stone-800 uppercase block">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-800 uppercase block">Organization / Agency</label>
                <input
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
                <label className="font-bold text-stone-800 uppercase block">Professional Role *</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Managing Attorney / Shelter Director"
                  className="w-full p-2.5 bg-white border border-stone-400 rounded focus:border-[#971F26] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-800 uppercase block">Email Address *</label>
                <input
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
              <label className="font-bold text-stone-800 uppercase block">Primary Collaboration Area</label>
              <select
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
              <label className="font-bold text-stone-800 uppercase block">Message / Areas of Interest</label>
              <textarea
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
