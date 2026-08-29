import React from "react";
import { Scale, CheckSquare, ShieldCheck, Clock } from "lucide-react";

export default function HowWeResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-brand-sand pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-oxblood font-bold block mb-1">
          RESEARCH STANDARDS & ACCESS INTELLIGENCE
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          How We Research Resources
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
          High-stakes situations require verified, granular access intelligence. Maps With Teeth does not rely on automated AI web scrapers or unvetted secondary directories. We evaluate what it actually takes to reach help in the real world.
        </p>
      </div>

      {/* Practical Access Conditions */}
      <section className="space-y-4 bg-brand-paper border border-brand-sand rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-brand-charcoal">
          <CheckSquare className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold">
            1. Evaluating Practical Access Conditions (Not Merely Existence)
          </h2>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          Standard directories simply record that an agency exists. Maps With Teeth evaluates <strong>eleven specific real-world access conditions</strong> before surfacing a pathway:
        </p>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-xs font-mono text-stone-800">
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>1. Eligibility:</strong> Concrete qualifying limits
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>2. Geography:</strong> Strict county/jurisdiction lines
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>3. Documentation:</strong> Required IDs, leases, paystubs
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>4. Wait Time:</strong> Realistic processing timelines
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>5. Shelter Rule:</strong> Whether shelter stay is forced
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>6. Transportation:</strong> Transit & gas accessibility
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>7. Cost / Fee:</strong> Hidden deposits or out-of-pocket costs
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>8. Referral Rule:</strong> Advocate/police mandate
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>9. Availability:</strong> Current funding cycle status
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300">
            <strong>10. Verification:</strong> Date of last research audit
          </div>
          <div className="p-2.5 bg-brand-ivory rounded border border-stone-300 sm:col-span-2 lg:col-span-1">
            <strong>11. Handoff:</strong> Documented referral outcome
          </div>
        </div>
      </section>

      {/* Multi-Tier Verification Levels */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            2. Multi-Tier Verification Levels
          </h2>
        </div>
        <p className="text-xs text-stone-700 font-sans">
          Rather than treating all listings as equally verified, our data model distinguishes among four transparent tiers:
        </p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs font-mono">
          <div className="p-4 bg-brand-paper border border-brand-sand rounded-xl space-y-1 shadow-sm">
            <span className="text-xs font-bold text-emerald-800 block">
              ● AGENCY-CONFIRMED
            </span>
            <p className="text-stone-700 leading-relaxed text-[11px] font-sans">
              Directly verified through communication with program administrators to confirm active budget, current intake criteria, and application protocols.
            </p>
          </div>

          <div className="p-4 bg-brand-paper border border-brand-sand rounded-xl space-y-1 shadow-sm">
            <span className="text-xs font-bold text-sky-800 block">
              ● PUBLICLY DOCUMENTED
            </span>
            <p className="text-stone-700 leading-relaxed text-[11px] font-sans">
              Verified through official government statutes, published administrative codes (PUCT, Texas Property Code), IRS forms, or formal program guidelines.
            </p>
          </div>

          <div className="p-4 bg-brand-paper border border-brand-sand rounded-xl space-y-1 shadow-sm">
            <span className="text-xs font-bold text-amber-800 block">
              ● FIELD-VERIFIED (PILOT)
            </span>
            <p className="text-stone-700 leading-relaxed text-[11px] font-sans">
              Validated through hands-on referral attempts in our Central Texas pilot to record real-world friction and successful handoff rates.
            </p>
          </div>

          <div className="p-4 bg-brand-paper border border-brand-sand rounded-xl space-y-1 shadow-sm">
            <span className="text-xs font-bold text-stone-600 block">
              ● COMMUNITY-REPORTED LEAD
            </span>
            <p className="text-stone-700 leading-relaxed text-[11px] font-sans">
              Identified through community submissions or secondary discovery; explicitly flagged as a lead while undergoing independent source audit.
            </p>
          </div>
        </div>
      </section>

      {/* Source Hierarchy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            3. Authoritative Sourcing Hierarchy
          </h2>
        </div>
        <p className="text-xs text-stone-700 font-sans">
          Every factual resource entry must cite an authoritative primary source. We evaluate sources strictly in this rank order:
        </p>

        <div className="space-y-2 text-xs font-mono">
          {[
            ["1. Government & Statutory Codes", "Texas Property Code, Code of Criminal Procedure, FCC Federal Orders, IRS Publications, PUCT Substantive Rules."],
            ["2. Official Program Portals", "Direct guidelines and application forms published by administering 501(c)(3) entities."],
            ["3. Authoritative Legal Aid Publications", "Texas Advocacy Project, Texas RioGrande Legal Aid, Lone Star Legal Aid practice guides."],
            ["4. Established Nonprofit Member Networks", "Texas Council on Family Violence (TCFV), National Network to End Domestic Violence (NNEDV)."],
            ["5. Community Foundations & Endowments", "Audited community foundations managing regional emergency relief funds."],
            ["6. Reputable Investigative Reporting", "Investigative journalism documenting emergency fund availability."],
            ["7. Secondary Directories (Discovery Only)", "Used exclusively to find leads, never treated as proof until verified at the source."],
          ].map(([rank, desc], idx) => (
            <div key={idx} className="p-3 bg-brand-paper border border-brand-sand rounded-lg flex items-start gap-3 shadow-sm">
              <span className="text-brand-oxblood font-bold shrink-0">{rank}</span>
              <span className="text-stone-700 font-sans">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Staleness Rules & Verification Thresholds */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-oxblood" />
          <h2 className="text-xl font-serif font-bold text-brand-charcoal">
            4. Staleness Monitoring & Re-Verification
          </h2>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed font-sans">
          Emergency funds open and close rapidly based on philanthropic cycles. We maintain explicit staleness thresholds:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-lg shadow-sm">
            <strong className="text-emerald-800 font-mono block mb-1">● 0–90 Days: Active</strong>
            <p className="text-stone-700 text-[11px] font-sans">Independently verified within the past quarter. Operating normally.</p>
          </div>

          <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-lg shadow-sm">
            <strong className="text-amber-800 font-mono block mb-1">● 91–180 Days: Review Due</strong>
            <p className="text-stone-700 text-[11px] font-sans">Due for quarterly research audit to confirm current budget availability.</p>
          </div>

          <div className="p-3.5 bg-red-50 border border-red-300 rounded-lg shadow-sm">
            <strong className="text-brand-oxblood font-mono block mb-1 font-bold">● 180+ Days: Stale Lead</strong>
            <p className="text-stone-700 text-[11px] font-sans">Flagged for full re-verification before display as current.</p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="p-4 bg-brand-paper border border-brand-sand rounded-xl text-xs text-stone-600 space-y-2 shadow-sm font-sans">
        <strong className="text-brand-charcoal block font-mono uppercase text-[11px] font-bold">
          Educational Information Notice:
        </strong>
        <p>
          The statutory summaries and directory entries on Maps With Teeth are provided for educational and navigational purposes only and do not constitute formal legal advice. Maps With Teeth is an independent initiative and is not a government agency, legal aid provider, or emergency crisis hotline.
        </p>
      </div>
    </div>
  );
}
