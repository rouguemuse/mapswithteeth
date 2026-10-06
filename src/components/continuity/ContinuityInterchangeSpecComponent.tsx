"use client";

import React, { useState } from "react";
import {
  Layers,
  Code2,
  FileCheck,
  CheckCircle2,
  AlertOctagon,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
  FileText,
  Activity,
  GitBranch,
  HelpCircle,
  Clock
} from "lucide-react";
import { SAMPLE_INTERCHANGE_EVENT } from "@/domain/continuity/interchange";

export function ContinuityInterchangeSpecComponent() {
  const [activeTab, setActiveTab] = useState<"fields" | "lifecycle" | "json">("fields");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(SAMPLE_INTERCHANGE_EVENT, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const responsibilitySequence = [
    { step: "01", q: "WHAT WAS SENT?", desc: "Identified materials, records, or formal notices dispatched." },
    { step: "02", q: "WHAT WAS RECEIVED?", desc: "Physical delivery or digital custody timestamp confirmed." },
    { step: "03", q: "WHAT WAS ACCESSIBLE?", desc: "Whether receiving staff possessed system access to view files." },
    { step: "04", q: "WHAT WAS REVIEWED?", desc: "Specific sections substantively examined under agency scope." },
    { step: "05", q: "WHAT WAS DECIDED?", desc: "Ministerial intake action or threshold routing determination." },
    { step: "06", q: "WHO OWNS NEXT ACTION?", desc: "Explicit institutional role and unit assigned immediate milestone." },
    { step: "07", q: "DID ENTITY ACCEPT?", desc: "Affirmative acknowledgment of responsibility ownership." }
  ];

  const handoffStatuses = [
    { status: "SENT", meaning: "Originating entity transmitted referral; no receipt confirmation exists." },
    { status: "DELIVERY_CONFIRMED", meaning: "Transport layer confirmed receipt at agency gate (e.g. SMTP 250 OK)." },
    { status: "RECEIPT_ACKNOWLEDGED", meaning: "Receiving staff logged intake into local agency tracking." },
    { status: "RESPONSIBILITY_ACCEPTED", meaning: "Receiving unit confirmed decision ownership for the next milestone." },
    { status: "DECLINED", meaning: "Receiving agency formally declined jurisdiction, capacity, or scope." },
    { status: "REDIRECTED", meaning: "Receiving agency rerouted matter to an adjacent authority." },
    { status: "UNKNOWN", meaning: "Insufficient record to determine whether transmission succeeded." }
  ];

  const reviewStatuses = [
    { status: "RECEIVED", meaning: "Document physically/digitally in custody; not yet evaluated." },
    { status: "ACCESSIBLE", meaning: "File format and network permissions permit caseworker access." },
    { status: "REVIEWED", meaning: "Substantively examined by staff within defined statutory scope." },
    { status: "UNREVIEWED_REASON", meaning: "Present in file but unexamined with stated administrative cause." },
    { status: "UNAVAILABLE", meaning: "Held by third party or deleted under retention schedule." }
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm select-none font-sans">
      {/* Header & Core Question */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Code2 className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INTEROPERABILITY SPECIFICATION · CONTINUITY INTERCHANGE SCHEMA
            </span>
          </div>
          <span className="coord-tick">[SPEC: MWT-INTERCHANGE-V0.1]</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Continuity Interchange Specification
          </h3>
          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            A minimal, portable administrative schema defining the vocabulary required to carry context and track responsibility across institutional boundaries.
          </p>
        </div>

        {/* Core Public-Interest Question Banner */}
        <div className="p-4 bg-[#F5F1E8] border-l-4 border-l-[#971F26] border border-[#D9D1C4] rounded-r-xl space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#971F26] block">
            THE CORE PUBLIC-INTEREST QUESTION
          </span>
          <p className="text-base sm:text-lg font-serif italic font-bold text-[#1C1D1D]">
            &ldquo;How do we know the handoff actually happened?&rdquo;
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs text-stone-700">
            <div>• What was received?</div>
            <div>• What was reviewed?</div>
            <div>• What remained unresolved?</div>
            <div>• Was responsibility accepted?</div>
          </div>
        </div>

        {/* Non-Claims Guardrail */}
        <div className="p-3 bg-white/90 border border-stone-300 rounded text-xs font-mono text-stone-700 leading-snug">
          <strong className="text-[#971F26]">IMPLEMENTATION BOUNDARY:</strong> Not an API integration mandate or automatic government database. Implementations do not require every field in every context; its purpose is to establish shared semantic distinctions.
        </div>
      </div>

      {/* 7-Step Responsibility Sequence Visual Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs text-stone-700">
          <span className="font-bold text-[#1C1D1D] uppercase">
            THE CONTINUITY OF RESPONSIBILITY SEQUENCE
          </span>
          <span className="text-[11px] text-[#971F26] font-bold">referral ≠ successful handoff</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2 font-mono text-xs">
          {responsibilitySequence.map((item, idx) => (
            <div
              key={item.step}
              className="p-3 bg-[#F5F1E8] border border-[#1C1D1D] rounded-lg space-y-1 flex flex-col justify-between shadow-2xs relative"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#971F26] block">STEP {item.step}</span>
                <span className="font-bold text-[#1C1D1D] text-[11px] block leading-tight">{item.q}</span>
              </div>
              <p className="text-[10px] text-stone-600 font-sans leading-snug pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#D9D1C4] flex gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab("fields")}
          className={`pb-2 px-3 border-b-2 font-bold transition-colors ${
            activeTab === "fields"
              ? "border-[#971F26] text-[#971F26]"
              : "border-transparent text-stone-600 hover:text-[#1C1D1D]"
          }`}
        >
          1. Schema Fields
        </button>
        <button
          onClick={() => setActiveTab("lifecycle")}
          className={`pb-2 px-3 border-b-2 font-bold transition-colors ${
            activeTab === "lifecycle"
              ? "border-[#971F26] text-[#971F26]"
              : "border-transparent text-stone-600 hover:text-[#1C1D1D]"
          }`}
        >
          2. Handoff &amp; Review Statuses
        </button>
        <button
          onClick={() => setActiveTab("json")}
          className={`pb-2 px-3 border-b-2 font-bold transition-colors ${
            activeTab === "json"
              ? "border-[#971F26] text-[#971F26]"
              : "border-transparent text-stone-600 hover:text-[#1C1D1D]"
          }`}
        >
          3. JSON Payload Specimen
        </button>
      </div>

      {/* Tab 1: Schema Fields */}
      {activeTab === "fields" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#971F26] block">continuity_id</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Unique identifier for the portable encounter chain.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#1C1D1D] block">matter_id</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Local agency incident or cause identifier.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#1C1D1D] block">related_matter_ids[]</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Cross-jurisdiction proceeding links (existence only, no merged facts).</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#1C1D1D] block">originating_entity</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Sending or generating institution, role, and jurisdiction.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#1C1D1D] block">receiving_entity</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Destination authority for closed-loop handoff.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#971F26] block">material_manifest[]</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Labels, sources, SHA-256 digests, and availability statuses.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#971F26] block">handoff_status</strong>
            <span className="text-[11px] text-stone-600 font-sans block">SENT → DELIVERY_CONFIRMED → RECEIPT_ACKNOWLEDGED → RESPONSIBILITY_ACCEPTED.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#971F26] block">review_status</strong>
            <span className="text-[11px] text-stone-600 font-sans block">RECEIVED → ACCESSIBLE → REVIEWED → UNREVIEWED_REASON → UNAVAILABLE.</span>
          </div>
          <div className="p-3 bg-[#F5F1E8] rounded-lg border border-stone-300 space-y-1">
            <strong className="text-[#1C1D1D] block">next_decision_owner</strong>
            <span className="text-[11px] text-stone-600 font-sans block">Explicit role and confirmation of milestone responsibility.</span>
          </div>
        </div>
      )}

      {/* Tab 2: Handoff & Review Lifecycle */}
      {activeTab === "lifecycle" && (
        <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
          {/* Handoff Statuses */}
          <div className="p-4 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-3">
            <div className="border-b border-stone-300 pb-2">
              <strong className="text-[#971F26] uppercase block">HANDOFF STATUSES (SEAM DETECTION)</strong>
              <span className="text-[11px] text-stone-600 font-sans">Tracks the physical and administrative journey of the referral.</span>
            </div>
            <div className="space-y-2">
              {handoffStatuses.map((h) => (
                <div key={h.status} className="p-2 bg-white rounded border border-stone-200">
                  <span className="font-bold text-[#1C1D1D] block">{h.status}</span>
                  <span className="text-[11px] text-stone-600 font-sans">{h.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Statuses */}
          <div className="p-4 bg-[#F5F1E8] rounded-xl border border-stone-300 space-y-3">
            <div className="border-b border-stone-300 pb-2">
              <strong className="text-[#1C1D1D] uppercase block">REVIEW STATUSES (REVIEW TRACE)</strong>
              <span className="text-[11px] text-stone-600 font-sans">Accounts for material handling without pre-judging merits.</span>
            </div>
            <div className="space-y-2">
              {reviewStatuses.map((r) => (
                <div key={r.status} className="p-2 bg-white rounded border border-stone-200">
                  <span className="font-bold text-[#1C1D1D] block">{r.status}</span>
                  <span className="text-[11px] text-stone-600 font-sans">{r.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: JSON Payload Specimen */}
      {activeTab === "json" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-stone-700">SPECIMEN PAYLOAD (JSON)</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1C1D1D] text-white rounded text-[11px] hover:bg-stone-800 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy JSON"}</span>
            </button>
          </div>
          <pre className="p-4 bg-[#1C1D1D] text-[#F5F1E8] rounded-xl text-xs font-mono overflow-x-auto max-h-96 leading-relaxed">
            {JSON.stringify(SAMPLE_INTERCHANGE_EVENT, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}
