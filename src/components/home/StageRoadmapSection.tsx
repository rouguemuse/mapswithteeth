import React from "react";
import { CheckCircle2, FlaskConical, Milestone } from "lucide-react";

export function StageRoadmapSection() {
  const stages = [
    {
      badge: "BUILT",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      icon: CheckCircle2,
      iconColor: "text-emerald-700",
      title: "Active in This Prototype",
      description: "Functional tools, taxonomy structures, and legal frameworks fully implemented and browsable on this site today.",
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
      badgeColor: "bg-amber-50 text-amber-800 border-amber-300",
      icon: FlaskConical,
      iconColor: "text-amber-700",
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
      badge: "PROPOSED / LONGER TERM",
      badgeColor: "bg-stone-100 text-stone-800 border-stone-300",
      icon: Milestone,
      iconColor: "text-brand-oxblood",
      title: "Future Institutional Roadmap",
      description: "Strategic capabilities planned for post-pilot expansion following fiscal sponsorship execution and formal governance.",
      items: [
        "Survivor-Controlled Continuity: Encrypted, client-side resource porting that never exposes private data.",
        "Cross-County & Multi-State Expansion: Replicating Texas gold-standard deep statutory dives in additional states.",
        "Survivor Gap Fund: Administered flexible fund to cover non-traditional micro-bottlenecks ($40 gas, lock rekeying, pet deposits).",
        "Frontline Caseworker Integrations: Secure tools to assist labor representatives and advocates with rapid resource matching.",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <div className="border-b border-brand-sand pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-oxblood font-bold block mb-1">
            METHODOLOGY & TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal tracking-tight">
            Distinguishing What Is Built, Testing, and Proposed
          </h2>
        </div>
        <span className="text-xs font-mono text-stone-500">
          Accountability Standard
        </span>
      </div>

      <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed font-sans">
        High-stakes systems require complete transparency. We explicitly distinguish between what is already built in this prototype, what is currently being validated in the Central Texas pilot, and what is proposed for future phases.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={idx}
              className="bg-brand-paper border border-brand-sand rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider border ${stage.badgeColor}`}
                  >
                    {stage.badge}
                  </span>
                  <Icon className={`w-4 h-4 ${stage.iconColor}`} />
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-brand-charcoal">{stage.title}</h3>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug font-sans">{stage.description}</p>
                </div>

                <ul className="space-y-2 text-xs text-stone-700 font-sans pt-2 border-t border-brand-sand">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                      <span className="text-brand-oxblood shrink-0 font-mono font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
