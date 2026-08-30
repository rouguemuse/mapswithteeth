import React from "react";
import { CheckCircle2, FlaskConical, Milestone, ShieldCheck, Search, Scale } from "lucide-react";

export function StageRoadmapSection() {
  const stages = [
    {
      badge: "BUILT",
      badgeStyle: "stamp-verified bg-[#F5F1E8] border-[#1C1D1D] text-[#1C1D1D]",
      icon: CheckCircle2,
      iconColor: "text-[#1C1D1D]",
      title: "Active in This Prototype",
      description: "Functional tools, taxonomy structures, and statutory frameworks fully implemented and browsable on this site today.",
      items: [
        "Barrier Taxonomy: 30+ structured obstacle categories mapped across legal, financial, tech, and housing domains.",
        "Texas Statutory Research: Independently audited Texas escape codes (CVC $5k relocation, ACP CCP Ch. 58, Lease break § 92.016, PUCT electric deposit waiver).",
        "Layer 2 Resource Library: Nationwide & industry-specific benevolence funds (F&B, music, arts, telecom line separation, pet safe boarding).",
        "Resource Data Model: Structured friction flags (no police report, no shelter stay) and field-level primary citations.",
        "Interactive Combiner: Working 'Resource Stack' solving multi-barrier compound crises.",
      ],
    },
    {
      badge: "TESTING / PILOT",
      badgeStyle: "stamp-alert bg-[#FFFDF5] border-amber-800 text-amber-900",
      icon: FlaskConical,
      iconColor: "text-amber-800",
      title: "Central Texas Field Validation",
      description: "Active pilot methodologies being pressure-tested with regional stakeholders in Travis, Williamson, Hays, and Bastrop counties.",
      items: [
        "Agency Verification Workflow: Direct outreach to confirm active funding cycles and eliminate ghost listings.",
        "Verified Handoff Testing: Documenting what happens when a participant attempts a referral in practice.",
        "Central Texas Field Cohort: Working with local advocates, ministerial funds, and legal aid across the 4-county pilot area.",
        "Failure-Point Reporting: Cataloging dead-end taxonomy (#NO_FUNDS, #SHELTER_STAY_REQUIRED, #CIVIL_MATTER_REFUSAL).",
      ],
    },
    {
      badge: "PROPOSED / ROADMAP",
      badgeStyle: "stamp-verified bg-[#F5F1E8] border-stone-600 text-stone-700",
      icon: Milestone,
      iconColor: "text-[#971F26]",
      title: "Future Institutional Roadmap",
      description: "Strategic capabilities planned for post-pilot expansion following formal governance and partner deployment.",
      items: [
        "Survivor-Controlled Continuity: Encrypted, client-side resource porting that never exposes private data.",
        "Cross-County & Multi-State Expansion: Replicating Texas gold-standard deep statutory dives in additional states.",
        "Survivor Gap Fund: Administered flexible fund to cover non-traditional micro-bottlenecks ($40 gas, lock rekeying, pet deposits).",
        "Frontline Caseworker Integrations: Secure tools to assist labor representatives and advocates with rapid resource matching.",
      ],
    },
  ];

  return (
    <section className="space-y-6 select-none">
      <div className="border-b border-[#D9D1C4] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#971F26] font-bold block mb-1">
            TRANSPARENCY & METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
            Distinguishing What Is Built, Testing, and Proposed
          </h2>
        </div>
        <span className="coord-tick">
          [METRIC REF: TRANSPARENCY-STD-V0]
        </span>
      </div>

      <p className="text-xs sm:text-sm text-stone-700 max-w-3xl leading-relaxed font-sans">
        High-stakes systems require complete transparency. We explicitly distinguish between what is already built in this prototype, what is currently being validated in the Central Texas pilot, and what is proposed for future phases.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={idx}
              className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-2.5">
                  <span className={`${stage.badgeStyle} text-[10px] font-mono font-bold tracking-wider`}>
                    [{stage.badge}]
                  </span>
                  <Icon className={`w-4 h-4 ${stage.iconColor}`} />
                </div>

                <div>
                  <h3 className="text-base font-bold font-serif text-[#1C1D1D]">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-stone-700 font-sans mt-1 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="border-t border-[#D9D1C4] pt-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#971F26] font-bold block mb-2">
                    Scope of Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-800 font-sans">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 leading-snug">
                        <span className="text-[#971F26] font-bold font-mono shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
