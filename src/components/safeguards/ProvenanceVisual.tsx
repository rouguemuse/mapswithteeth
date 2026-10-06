import React from "react";
import { GitBranch, Layers, ArrowRight, AlertTriangle, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export function ProvenanceVisual() {
  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <GitBranch className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 02
            </span>
          </div>
          <span className="coord-tick">[PROVENANCE VS. VOLUME]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Provenance Before Volume
        </h3>

        <div className="p-3 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg space-y-1">
          <p className="font-serif italic font-bold text-stone-900 text-sm sm:text-base">
            &ldquo;Volume is not provenance. Repeated does not mean independently corroborated.&rdquo;
          </p>
          <p className="text-xs font-mono text-stone-700">
            Counting reports without tracing their origins creates false corroboration and distorts truth probability.
          </p>
        </div>
      </div>

      {/* Visual Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6 text-xs font-sans">
        {/* Track 1: One Source -> Multiple Reports (False Volume) */}
        <div className="bg-[#FDF2F2] border-2 border-[#971F26]/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#971F26]/20 pb-2">
              <span className="font-mono font-bold text-[#971F26] uppercase text-[11px] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#971F26]" />
                TRACK 1: SINGLE-ORIGIN DERIVATIVE ECHO
              </span>
              <span className="px-2 py-0.5 bg-rose-100 text-[#971F26] rounded text-[10px] font-mono font-bold">
                1 PROVENANCE (ECHO)
              </span>
            </div>

            <p className="text-stone-800 leading-relaxed text-[12px]">
              A single individual recounts a narrative to a school counselor, a primary care physician, a family member, and a hotline. Four separate agency reports are created, creating the administrative illusion of multiple independent allegations.
            </p>

            {/* Diagram Flow */}
            <div className="p-3 bg-white rounded-lg border border-stone-300 font-mono space-y-2 text-[11px]">
              <div className="p-2 bg-[#FEE2E2] rounded border border-rose-300 text-center font-bold text-[#991B1B]">
                SINGLE SOURCE A (Initial Account)
              </div>
              <div className="flex justify-center">
                <span className="text-stone-400">↓ (Retold to 4 listeners)</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="p-1.5 bg-stone-100 rounded border text-center">School Flag</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">Medical Note</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">911 CAD Call</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">Hotline Report</div>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-[11px] text-[#991B1B] font-mono">
            <strong>Risk:</strong> Aggregating these 4 reports as &ldquo;4 distinct corroborating incidents&rdquo; is an administrative fallacy.
          </div>
        </div>

        {/* Track 2: Multiple Independent Sources / Records -> Distinct Provenance */}
        <div className="bg-[#E8F3EB] border-2 border-[#2D5A3D]/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#2D5A3D]/20 pb-2">
              <span className="font-mono font-bold text-[#2D5A3D] uppercase text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
                TRACK 2: DISTINCT INDEPENDENT PROVENANCE
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-[#2D5A3D] rounded text-[10px] font-mono font-bold">
                DISTINCT PROVENANCE
              </span>
            </div>

            <p className="text-stone-800 leading-relaxed text-[12px]">
              Independent physical, electronic, and bystander records corroborate distinct objective facts (e.g. keycard electronic lock logs, third-party 911 audio, timestamped banking transactions, hospital diagnostic imaging).
            </p>

            {/* Diagram Flow */}
            <div className="p-3 bg-white rounded-lg border border-stone-300 font-mono space-y-2 text-[11px]">
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Bank Ledger</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Hospital Scan</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Bystander 911</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Court Order</div>
              </div>
              <div className="flex justify-center">
                <span className="text-stone-400">↓ (Independent verification streams)</span>
              </div>
              <div className="p-2 bg-[#D1FAE5] rounded border border-emerald-400 text-center font-bold text-[#065F46]">
                EVIDENTIARY INDEPENDENCE ESTABLISHED
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-[#065F46] font-mono">
            <strong>Standard:</strong> Maps With Teeth preserves the provenance link to each source, never merging echoes into pseudo-volume.
          </div>
        </div>
      </div>
    </section>
  );
}
