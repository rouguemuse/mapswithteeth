import React from "react";
import { ShieldX, AlertTriangle, Scale, Lock, FileX, Terminal, CheckCircle2 } from "lucide-react";

export function WhatThisStandardDoesNotClaim() {
  const boundaries = [
    {
      num: "01",
      title: "NOT A SHARED ALLEGATION DATABASE",
      desc: "Maps With Teeth does not pool, aggregate, or broadcast unvetted allegations across agencies. Information moves only through participant-controlled handoffs or legally authorized inter-agency protocols."
    },
    {
      num: "02",
      title: "NO AI RISK OR CREDIBILITY SCORING",
      desc: "The standard strictly forbids automated algorithmic credibility scores, AI risk ratings, predictive policing metrics, or quantitative reliability ratings on individuals."
    },
    {
      num: "03",
      title: "NO INFRINGEMENT ON STATUTORY DISCRETION",
      desc: "The framework does not substitute for judicial fact-finding, professional judgment, or agency statutory discretion. It proposes documentation of administrative handling rather than directing case outcomes."
    },
    {
      num: "04",
      title: "DOES NOT PRE-VALIDATE CLAIM TRUTH",
      desc: "Logging a receipt, Review Trace status, or provenance does not constitute a finding of fact, authentication decision, or certification of truth. It records administrative handling and source context so material can be evaluated under the applicable process."
    },
    {
      num: "05",
      title: "PROPOSED TARGETS ARE NOT STATUTES",
      desc: "Service targets (such as the proposed 48-hour referral disposition benchmark) are design targets for evaluation pilots, not existing statutory mandates or court deadlines."
    },
    {
      num: "06",
      title: "NO UNVERIFIED ACTIVE AGENCY PILOTS",
      desc: "The project strictly distinguishes between Central Texas field validation research and formal agency adoption. No proposed pilot is described as an active governmental deployment without formal MOUs."
    },
    {
      num: "07",
      title: "NO UNVERIFIED SECURITY ABSOLUTES",
      desc: "The architecture minimizes server-side data storage and processes sensitive context client-side, but does not claim 'zero vulnerabilities' or bypass mandatory independent security audits."
    },
    {
      num: "08",
      title: "DOES NOT ELIMINATE HUMAN JUDGMENT",
      desc: "Administrative traceability makes omissions, reviews, and referrals visible and auditable—it does not replace experienced caseworkers with automated workflows."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <ShieldX className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              LEGAL &amp; ARCHITECTURAL BOUNDARIES
            </span>
          </div>
          <span className="coord-tick">[NON-CLAIMS &amp; SAFEGUARDS]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          What This Standard Does Not Claim
        </h3>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
          To preserve legal, policy, and due-process boundaries, the proposed Cross-System Continuity Standard states clearly what it does not do.
        </p>
      </div>

      {/* Grid of Boundaries */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {boundaries.map((b) => (
          <div
            key={b.num}
            className="p-4 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-2 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[#971F26] uppercase block">
                BOUNDARY {b.num}
              </span>
              <h4 className="font-serif font-bold text-sm text-[#1C1D1D] leading-snug">
                {b.title}
              </h4>
            </div>

            <p className="text-xs font-sans text-stone-700 leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="p-3.5 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
        <span className="text-amber-300 font-bold">
          Strict separation of participant-held continuity from multi-agency surveillance.
        </span>
        <span className="text-stone-400">
          Standard Governance v1.0-draft
        </span>
      </div>
    </section>
  );
}
