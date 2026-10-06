"use client";

import React, { useState, useMemo } from "react";
import {
  X,
  Printer,
  Copy,
  Check,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Scale,
  Building2,
  Clock,
  Layers,
  CheckCircle2,
  Lock,
  Compass,
  FileCheck,
  ExternalLink,
  Ban,
  Info
} from "lucide-react";
import {
  ContinuityContactRecord,
  VerificationLevel,
  NonImplicationCode,
} from "@/domain/continuity/types";
import {
  buildContinuityContactRecord,
} from "@/domain/continuity/contactRecordBuilder";
import {
  CALIBRATED_DIGEST_NOTICE,
  PUBLIC_AGENCY_RETENTION_WARNING,
  HONEST_REVOCATION_BOUNDARY_TEXT,
} from "@/domain/continuity/contactRecord";
import { SurvivorSituation } from "@/domain/intake/types";

interface ContinuityContactRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  situation?: SurvivorSituation;
  suggestedRouteTitle?: string;
  suggestedRouteReason?: string;
}

export function ContinuityContactRecordModal({
  isOpen,
  onClose,
  situation,
  suggestedRouteTitle,
  suggestedRouteReason,
}: ContinuityContactRecordModalProps) {
  const [organizationName, setOrganizationName] = useState("Travis County Intake & Crisis Services");
  const [activeTier, setActiveTier] = useState<VerificationLevel>("PARTICIPANT_RECORDED");
  const [activeCopy, setActiveCopy] = useState<"PARTICIPANT_COPY" | "RECEIVING_ORGANIZATION_COPY">(
    "PARTICIPANT_COPY"
  );
  const [copiedDigest, setCopiedDigest] = useState(false);

  // Generate counterpart pair dynamically based on options
  const counterpartPair = useMemo(() => {
    return buildContinuityContactRecord({
      organizationName,
      verificationLevel: activeTier,
      situation,
      suggestedRouteTitle,
      suggestedRouteReason,
    });
  }, [organizationName, activeTier, situation, suggestedRouteTitle, suggestedRouteReason]);

  if (!isOpen) return null;

  const currentRecord =
    activeCopy === "PARTICIPANT_COPY"
      ? counterpartPair.participantCopy
      : counterpartPair.receivingOrganizationCopy;

  const payload = currentRecord.payload;
  const canonicalDigest = currentRecord.counterpart.canonicalRecordDigest;

  const handleCopyDigest = async () => {
    try {
      await navigator.clipboard.writeText(canonicalDigest);
      setCopiedDigest(true);
      setTimeout(() => setCopiedDigest(false), 2000);
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 font-sans select-none print:p-0 print:bg-white">
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col bg-grid-atlas print:border-0 print:max-h-none print:shadow-none">
        
        {/* Non-printable Control Header */}
        <div className="sticky top-0 bg-[#EEE8DD] border-b-2 border-[#1C1D1D] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#971F26]">
              PORTABLE CONTINUITY RECORD · SPECIFICATION 2026-09
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#1C1D1D] text-white rounded text-xs font-mono font-bold hover:bg-stone-800 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-[#1C1D1D] rounded hover:bg-[#E4DCD0] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-6">
          {/* Tier & Copy Switchers (Interactive Controls, hidden on print) */}
          <div className="bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg p-4 space-y-3 print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700 uppercase">
                  Target Agency:
                </span>
                <input
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="bg-white border border-[#1C1D1D] rounded px-2.5 py-1 text-xs font-serif text-[#1C1D1D] w-64"
                  placeholder="Enter intake agency name..."
                />
              </div>

              {/* Tier selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">
                  Tier:
                </span>
                <div className="inline-flex rounded border border-[#1C1D1D] bg-white p-0.5">
                  <button
                    onClick={() => setActiveTier("PARTICIPANT_RECORDED")}
                    className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded ${
                      activeTier === "PARTICIPANT_RECORDED"
                        ? "bg-[#1C1D1D] text-white"
                        : "text-stone-700 hover:bg-[#EEE8DD]"
                    }`}
                  >
                    1. Participant
                  </button>
                  <button
                    onClick={() => setActiveTier("AGENCY_ACKNOWLEDGED")}
                    className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded ${
                      activeTier === "AGENCY_ACKNOWLEDGED"
                        ? "bg-[#1C1D1D] text-white"
                        : "text-stone-700 hover:bg-[#EEE8DD]"
                    }`}
                  >
                    2. Agency
                  </button>
                  <button
                    onClick={() => setActiveTier("PARTNER_ROLE_VERIFIED")}
                    className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded ${
                      activeTier === "PARTNER_ROLE_VERIFIED"
                        ? "bg-[#1C1D1D] text-white"
                        : "text-stone-700 hover:bg-[#EEE8DD]"
                    }`}
                  >
                    3. Partner Role
                  </button>
                </div>
              </div>

              {/* Copy selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">
                  Counterpart:
                </span>
                <div className="inline-flex rounded border border-[#1C1D1D] bg-white p-0.5">
                  <button
                    onClick={() => setActiveCopy("PARTICIPANT_COPY")}
                    className={`px-2 py-0.5 text-xs font-mono font-bold rounded ${
                      activeCopy === "PARTICIPANT_COPY"
                        ? "bg-[#2D5A3D] text-white"
                        : "text-stone-700 hover:bg-[#EEE8DD]"
                    }`}
                  >
                    Survivor Copy
                  </button>
                  <button
                    onClick={() => setActiveCopy("RECEIVING_ORGANIZATION_COPY")}
                    className={`px-2 py-0.5 text-xs font-mono font-bold rounded ${
                      activeCopy === "RECEIVING_ORGANIZATION_COPY"
                        ? "bg-[#1C1D1D] text-white"
                        : "text-stone-700 hover:bg-[#EEE8DD]"
                    }`}
                  >
                    Agency Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* THE RECORD DOCUMENT (Printable) */}
          <div className="bg-[#FAF8F5] border-2 border-[#1C1D1D] p-6 sm:p-8 space-y-6 text-[#1C1D1D] shadow-sm">
            {/* Document Header */}
            <div className="border-b-2 border-[#1C1D1D] pb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#971F26] uppercase font-bold block">
                  MAPS WITH TEETH CONTINUITY INFRASTRUCTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                  CONTINUITY CONTACT RECORD
                </h2>
                <div className="text-xs font-mono text-stone-600 mt-1">
                  RECORD ID: <span className="font-bold text-[#1C1D1D]">{payload.recordId}</span> ·{" "}
                  {new Date(payload.contactTimestamp).toLocaleString()}
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase rounded border border-[#1C1D1D] bg-[#EEE8DD]">
                  {activeCopy === "PARTICIPANT_COPY" ? "PARTICIPANT COPY" : "RECEIVING AGENCY COPY"}
                </span>
                <span className="block text-[10px] font-mono text-stone-600 mt-1">
                  TIER: {activeTier.replace("_", " ")}
                </span>
              </div>
            </div>

            {/* Invariant Warning: Autonomous Record Notice */}
            <div className="bg-[#E8F3EB] border border-[#2D5A3D] p-3 rounded text-xs text-[#2D5A3D] space-y-1">
              <div className="font-bold font-mono text-[11px] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Three-Tier Verification Guarantee</span>
              </div>
              <p>
                This record documents an administrative contact point. Under Maps With Teeth Standard MWT-STD-2026-03,
                a Participant-Recorded copy is self-sustaining and fully valid without requiring agency endorsement or signature.
              </p>
            </div>

            {/* Dimension 1 & 2: Agency & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-3.5 rounded border border-[#D9D1C4] space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-600 block">
                  1. Contacting Agency / Unit
                </span>
                <div className="font-serif font-bold text-sm">{payload.organizationName}</div>
                <div className="text-stone-700 font-mono text-[11px]">
                  Unit: {payload.departmentOrUnit || "Intake & Navigation Desk"}
                </div>
                <div className="text-stone-700 font-mono text-[11px]">
                  Intake Channel: {payload.intakeChannel}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded border border-[#D9D1C4] space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-600 block">
                  2. Presented Materials ({payload.presentedMaterials.length})
                </span>
                <ul className="space-y-1 text-stone-800">
                  {payload.presentedMaterials.map((mat) => (
                    <li key={mat.itemId} className="flex items-start gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-[#971F26] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">{mat.label}</span>
                        <span className="block text-[10px] font-mono text-stone-600">
                          Handling: {mat.handlingStatus.replace(/_/g, " ")} ({mat.format})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dimension 3 & 4: Substantive Assessment Guardrail & Jurisdiction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FFFBEB] border border-[#D97706] p-3.5 rounded space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#92400E] font-bold font-mono text-[11px] uppercase">
                  <Scale className="w-4 h-4" />
                  <span>Substantive Assessment Status</span>
                </div>
                <div className="text-base font-serif font-bold text-[#92400E]">
                  {payload.substantiveAssessment.status.replace(/_/g, " ")}
                </div>
                <p className="text-[11px] text-stone-800 font-medium">
                  {payload.substantiveAssessment.notice}
                </p>
              </div>

              <div className="bg-white border border-[#D9D1C4] p-3.5 rounded space-y-1.5">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-600 block">
                  Jurisdictional Scope Determination
                </span>
                <div className="text-sm font-serif font-bold text-[#1C1D1D]">
                  {payload.jurisdictionScope.status.replace(/_/g, " ")}
                </div>
                <p className="text-[11px] text-stone-700">
                  {payload.jurisdictionScope.statedBoundaryOrRule}
                </p>
              </div>
            </div>

            {/* Dimension 5: Suggested Route & Capacity */}
            {payload.suggestedNextRoute && (
              <div className="bg-white border border-[#D9D1C4] p-3.5 rounded text-xs space-y-1.5">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-600 block">
                  Suggested Next Route & Referral Information
                </span>
                <div className="font-serif font-bold text-sm text-[#1C1D1D]">
                  {payload.suggestedNextRoute.organizationName}
                </div>
                <p className="text-[11px] text-stone-700">
                  Department: {payload.suggestedNextRoute.department || "General Intake"} · Source: {payload.suggestedNextRoute.suggestionSource}
                </p>
                <div className="text-[10px] font-mono text-stone-600">
                  Handoff Outcome: <span className="font-bold">{payload.suggestedNextRoute.handoffOutcome.replace(/_/g, " ")}</span> (Default: NOT CONFIRMED)
                </div>
              </div>
            )}

            {/* Mandatory Legal & Governance Disclaimers */}
            <div className="border-t border-[#D9D1C4] pt-4 space-y-2 text-[10px] font-mono text-stone-700">
              <span className="font-bold text-[#1C1D1D] uppercase block tracking-wider">
                MANDATORY NON-IMPLICATION CODES & STATUTORY DISCLOSURE (MWT-STD-2026-03)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[9.5px]">
                <div>• NO_SUBSTANTIATION_FINDING: Does not determine that allegations are proven.</div>
                <div>• NO_EVIDENCE_AUTHENTICATION: Does not authenticate documents or metadata.</div>
                <div>• NO_WHOLE_MATTER_ACCEPTANCE: Does not assume whole-case representation.</div>
                <div>• NO_MAPS_INTERPRETATION_ENDORSEMENT: Does not adopt MWT legal theories.</div>
                <div>• NO_ROUTING_AS_MERITS_FINDING: A routing decision is never a merits finding.</div>
              </div>
            </div>

            {/* Public Agency Retention Warning */}
            <div className="bg-[#F5F1E8] border border-stone-300 p-2.5 rounded text-[10px] text-stone-700 font-mono">
              <span className="font-bold text-[#1C1D1D]">PUBLIC AGENCY NOTICE: </span>
              {PUBLIC_AGENCY_RETENTION_WARNING}
            </div>

            {/* Cryptographic Parity Digest Footer */}
            <div className="bg-[#1C1D1D] text-white p-3 rounded font-mono text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase text-stone-400">
                  SHA-256 CANONICAL DIGEST
                </span>
                <button
                  onClick={handleCopyDigest}
                  className="text-[10px] text-[#D9D1C4] hover:text-white flex items-center gap-1 cursor-pointer print:hidden"
                >
                  {copiedDigest ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedDigest ? "Copied" : "Copy Hash"}</span>
                </button>
              </div>
              <div className="text-[11px] font-mono break-all text-amber-200">
                {canonicalDigest}
              </div>
              <div className="text-[9px] text-stone-400 leading-tight">
                {CALIBRATED_DIGEST_NOTICE}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#D9D1C4] bg-[#E4DCD0] flex items-center justify-between print:hidden">
          <span className="text-xs font-mono text-stone-600">
            Maps With Teeth Continuity Infrastructure v2026-09
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1C1D1D] text-white rounded text-xs font-mono font-bold hover:bg-stone-800 cursor-pointer"
          >
            Close Record
          </button>
        </div>
      </div>
    </div>
  );
}
