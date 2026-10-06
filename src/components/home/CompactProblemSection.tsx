import React from "react";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export function CompactProblemSection() {
  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm font-sans">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-4">
        <div className="flex items-center gap-2 text-[#971F26]">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest">
            THE PROBLEM · THE SEAM DEFICIT
          </span>
        </div>
        <span className="coord-tick">[SENT ≠ RECEIVED / ACKNOWLEDGED]</span>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          When a referral ends at &ldquo;sent&rdquo;
        </h2>
        <p className="text-stone-800 text-base sm:text-lg leading-relaxed max-w-3xl">
          When someone in crisis seeks assistance, they are routinely referred across agency boundaries—from healthcare to law enforcement, from hotlines to shelters, from civil legal aid to municipal courts.
        </p>
      </div>

      {/* Concrete Example Callout */}
      <div className="p-4 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-stone-300 rounded-r-xl space-y-2">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#971F26] block">
          CONCRETE REFERRAL FAILURE
        </span>
        <p className="text-sm sm:text-base text-stone-900 leading-relaxed">
          The sending agency marks the file as <em>&ldquo;referred out&rdquo;</em> and closes its intake. The receiving organization never receives the transmission, has a full waitlist, or requires a different intake form. The individual returns to the start, forced to repeat traumatic facts from scratch—with no record that the referral was ever dispatched, received, or assigned a next responsible party.
        </p>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-stone-700">
          A referral sent is not a handoff completed.
        </span>
        <Link
          href="/the-gap"
          className="inline-flex items-center gap-1.5 text-[#971F26] hover:text-[#7A181E] font-bold uppercase tracking-wider transition"
        >
          <span>Read &ldquo;The Seam Deficit&rdquo; Analysis</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
