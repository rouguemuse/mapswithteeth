import React from "react";
import { Eye, ClipboardCheck, AlertCircle, Sparkles, UserCheck, Shield } from "lucide-react";

export function ObservationVsDisposition() {
  const contrasts = [
    {
      category: "HOUSING & SANITATION",
      rawObservation: "Child's bedroom has two folded clean blankets on mattress; 3 dry cereal boxes on kitchen counter; refrigerator contains milk, eggs, apples; kitchen sink has 4 unwashed plates.",
      improperSubjectiveLabel: "'Home in severe squalor and chaotic disarray; parent exhibits failure to provide basic hygiene.'",
      correctCategorization: "PRIMARY OBSERVATION: Modest cleanliness with adequate food stores. DISPOSITION: Does not meet statutory definition of physical neglect."
    },
    {
      category: "PARENTAL INTAKE DEMEANOR",
      rawObservation: "Parent speaks rapidly with elevated vocal pitch, hands trembling, repeatedly requests badge numbers of investigators, checks phone for messages every 2 minutes.",
      improperSubjectiveLabel: "'Parent is hostile, paranoid, irrational, and aggressive during interview; likely substance-impaired.'",
      correctCategorization: "DEMEANOR PRESENTATION: Acute trauma response / hyper-vigilance under investigatory stress. PROVENANCE RECORD: Substantive answers provided with valid identification."
    },
    {
      category: "MEDICAL / INJURY REPORT",
      rawObservation: "Pediatric nurse notes 2cm linear superficial abrasion on right forearm of 7-year-old child; child states 'fell off scooter on gravel.'",
      improperSubjectiveLabel: "'Injuries consistent with physical battery and severe abuse.'",
      correctCategorization: "PRIMARY OBSERVATION: Superficial linear abrasion. DISPOSITION: Requires clinical forensic assessment; consistent with accidental outdoor play."
    }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm select-none font-sans">
      <div className="border-b border-[#D9D1C4] pb-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Eye className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              PROPOSED SAFEGUARD · PROTOCOL 07 &amp; 08
            </span>
          </div>
          <span className="coord-tick">[EPISTEMIC SEPARATION]</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
          Observation vs. Disposition &amp; Demeanor vs. Provenance
        </h3>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 bg-[#1C1D1D] text-amber-200 text-xs font-mono font-bold rounded-full">
            Evidence may be weighted. It should still be reviewed for what it actually is.
          </span>
          <span className="px-3 py-1 bg-[#971F26] text-white text-xs font-mono font-bold rounded-full">
            Demeanor is not provenance.
          </span>
        </div>

        <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl pt-2">
          Administrative record-keeping frequently collapses two critical epistemic boundaries: confusing <strong>raw descriptive observations</strong> with <strong>discretionary legal dispositions</strong>, and mistaking an individual&rsquo;s <strong>emotional demeanor</strong> for <strong>documentary provenance</strong>. Traceability requires that what was seen is preserved separately from what was inferred.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-4">
        {contrasts.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-[#F5F1E8] border border-[#1C1D1D] rounded-xl space-y-3 shadow-2xs"
          >
            <div className="flex items-center justify-between border-b border-stone-300 pb-2">
              <span className="text-xs font-mono font-bold text-[#971F26] uppercase">
                DOMAIN: {item.category}
              </span>
              <span className="text-[10px] font-mono text-stone-500 uppercase">
                ADMINISTRATIVE AUDIT CASE #{idx + 1}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-3 text-xs">
              {/* Raw Observation */}
              <div className="p-3 bg-white rounded-lg border border-stone-300 space-y-1">
                <span className="text-[10px] font-mono font-bold text-stone-500 uppercase block">
                  1. RAW OBSERVABLE FACT
                </span>
                <p className="font-sans text-stone-800 leading-relaxed">
                  {item.rawObservation}
                </p>
              </div>

              {/* Subjective Collapse */}
              <div className="p-3 bg-red-50/80 rounded-lg border border-red-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-red-700 uppercase block">
                  2. SUBSTANTIVE COLLAPSE (ERROR)
                </span>
                <p className="font-sans text-red-950 italic leading-relaxed">
                  {item.improperSubjectiveLabel}
                </p>
              </div>

              {/* Correct Separation */}
              <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200 space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block">
                  3. TRACEABLE SEPARATION (STANDARD)
                </span>
                <p className="font-sans text-emerald-950 font-medium leading-relaxed">
                  {item.correctCategorization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Demeanor vs Provenance Key Card */}
      <div className="p-4 bg-white border border-[#1C1D1D] rounded-xl grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <h5 className="text-xs font-mono font-bold text-[#971F26] uppercase flex items-center gap-1.5">
            <UserCheck className="w-4 h-4" /> Demeanor Is A Presentation
          </h5>
          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Nervousness, agitation, flat affect, or hyper-vigilance are natural reactions to systemic trauma and acute institutional scrutiny. They cannot be used as an evidentiary shortcut to substantiate or dismiss factual claims.
          </p>
        </div>

        <div className="space-y-1">
          <h5 className="text-xs font-mono font-bold text-[#1C1D1D] uppercase flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-stone-700" /> Provenance Is Custody &amp; Chain
          </h5>
          <p className="text-xs font-sans text-stone-700 leading-relaxed">
            Provenance is established by timestamps, authenticating metadata, corroborating records, and official agency custody. Demeanor must never override documented timestamps and primary records.
          </p>
        </div>
      </div>
    </section>
  );
}
