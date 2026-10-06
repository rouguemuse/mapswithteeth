import React from "react";
import { AlertTriangle, CheckCircle2, GitBranch } from "lucide-react";

export function ProvenanceVisual() {
  const effects = ["SUPPORT", "CONTRADICT", "CONTEXTUALIZE", "FAIL TO RESOLVE"];

  return (
    <section className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#971F26]">
            <GitBranch className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 02
            </span>
          </div>
          <span className="coord-tick">[PROVENANCE VS. EVIDENTIARY EFFECT]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Provenance Before Volume
        </h3>

        <div className="p-3 bg-[#EEE8DD] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-lg space-y-1">
          <p className="font-serif italic font-bold text-stone-900 text-sm sm:text-base">
            &ldquo;Volume is not provenance. Repeated does not mean independently corroborated.&rdquo;
          </p>
          <p className="text-xs font-mono text-stone-700">
            Independent sources create independent information, not automatic confirmation.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-xs font-sans">
        <div className="bg-[#FDF2F2] border-2 border-[#971F26]/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#971F26]/20 pb-2 gap-2">
              <span className="font-mono font-bold text-[#971F26] uppercase text-[11px] flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#971F26]" />
                TRACK 1: SINGLE-ORIGIN DERIVATIVE ECHO
              </span>
              <span className="px-2 py-0.5 bg-rose-100 text-[#971F26] rounded text-[10px] font-mono font-bold">
                1 ROOT SOURCE
              </span>
            </div>

            <p className="text-stone-800 leading-relaxed text-[12px]">
              One originating account is repeated to several people or institutions, which then create separate records. Those records may matter administratively, but their shared origin must remain visible.
            </p>

            <div className="p-3 bg-white rounded-lg border border-stone-300 font-mono space-y-2 text-[11px]">
              <div className="p-2 bg-[#FEE2E2] rounded border border-rose-300 text-center font-bold text-[#991B1B]">
                SOURCE A
              </div>
              <div className="text-center text-stone-400">↓ retold / transmitted</div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="p-1.5 bg-stone-100 rounded border text-center">Agency Record 1</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">Agency Record 2</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">Agency Record 3</div>
                <div className="p-1.5 bg-stone-100 rounded border text-center">Agency Record 4</div>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-[11px] text-[#991B1B] font-mono">
            <strong>Guardrail:</strong> Four derivative records are not four independent confirmations.
          </div>
        </div>

        <div className="bg-[#E8F3EB] border-2 border-[#2D5A3D]/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#2D5A3D]/20 pb-2 gap-2">
              <span className="font-mono font-bold text-[#2D5A3D] uppercase text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D]" />
                TRACK 2: DISTINCT SOURCE PROVENANCE
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-[#2D5A3D] rounded text-[10px] font-mono font-bold">
                SOURCE INDEPENDENCE
              </span>
            </div>

            <p className="text-stone-800 leading-relaxed text-[12px]">
              Independently generated records may come from different institutions, devices, witnesses, or processes. Their independence answers where the information came from. It does not answer what the information proves.
            </p>

            <div className="p-3 bg-white rounded-lg border border-stone-300 font-mono space-y-2 text-[11px]">
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Institutional Record</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Device / System Log</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Independent Witness</div>
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-300 text-center font-bold">Controlling Document</div>
              </div>
              <div className="text-center text-stone-400">↓ claim-specific evaluation</div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                {effects.map((effect) => (
                  <div key={effect} className="p-1.5 bg-stone-100 rounded border text-center font-bold">
                    {effect}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-[#065F46] font-mono">
            <strong>Standard:</strong> Preserve source independence separately from evidentiary effect.
          </div>
        </div>
      </div>
    </section>
  );
}
