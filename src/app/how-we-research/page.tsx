import React from "react";
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck, Clock, BookOpen, Layers } from "lucide-react";

export default function HowWeResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-ruby font-bold block mb-1">
          Research Standards & Source Hierarchy
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          How We Research Resources
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
          High-stakes situations require verified information. Maps With Teeth does not rely on automated AI scrapers or unvetted secondary directories. Transparency in our sourcing is our core accountability standard.
        </p>
      </div>

      {/* Source Hierarchy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            1. Authoritative Sourcing Hierarchy
          </h2>
        </div>
        <p className="text-xs text-stone-300">
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
            <div key={idx} className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg flex items-start gap-3">
              <span className="text-brand-ruby font-bold shrink-0">{rank}</span>
              <span className="text-stone-400 font-sans">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Staleness Rules & Verification Thresholds */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            2. Staleness Monitoring & Re-Verification
          </h2>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed">
          Emergency funds open and close rapidly based on philanthropic cycles. We maintain explicit staleness thresholds:
        </p>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-3 bg-emerald-950/40 border border-emerald-800 rounded-lg">
            <strong className="text-emerald-300 font-mono block mb-1">● 0–90 Days: Active</strong>
            <p className="text-stone-400 text-[11px]">Independently verified within the past quarter. Operating normally.</p>
          </div>

          <div className="p-3 bg-amber-950/40 border border-amber-800 rounded-lg">
            <strong className="text-amber-300 font-mono block mb-1">● 91–180 Days: Review Due</strong>
            <p className="text-stone-400 text-[11px]">Due for quarterly research audit to confirm current budget availability.</p>
          </div>

          <div className="p-3 bg-red-950/40 border border-brand-ruby rounded-lg">
            <strong className="text-red-300 font-mono block mb-1">● 180+ Days: Stale Lead</strong>
            <p className="text-stone-400 text-[11px]">Flagged for full re-verification before display as current.</p>
          </div>
        </div>
      </section>

      {/* Verified vs Lead Distinction */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            3. Verified Resources vs. Resource Leads
          </h2>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed">
          A resource is marked <strong>VERIFIED CURRENT</strong> only when our researchers have confirmed current guidelines, application mechanisms, and active funding. When a promising program is identified but awaiting confirmation, it is explicitly labeled <strong>RESOURCE LEAD</strong>. We never represent a lead as guaranteed assistance.
        </p>
      </section>

      {/* Archive Policy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-brand-ruby" />
          <h2 className="text-xl font-serif font-bold text-white">
            4. Archive Policy (Never Silently Delete)
          </h2>
        </div>
        <p className="text-xs text-stone-300 leading-relaxed">
          When funding-dependent programs close, we do not silently delete them. We archive the entry with a historical marker. This preserves institutional memory, identifies funding gaps for policy researchers, and helps recognize successor programs when new funding cycles begin.
        </p>
      </section>

      {/* Legal Disclaimer */}
      <div className="p-4 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-400 space-y-2">
        <strong className="text-stone-200 block font-mono uppercase text-[11px]">
          Educational Information Notice:
        </strong>
        <p>
          The statutory summaries and directory entries on Maps With Teeth are provided for educational and navigational purposes only and do not constitute formal legal advice. Laws change and judicial interpretations vary by jurisdiction. For specific legal counsel in Texas, consult the Texas Advocacy Project or a qualified legal aid attorney.
        </p>
      </div>
    </div>
  );
}
