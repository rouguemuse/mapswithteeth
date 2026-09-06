"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Scale,
  CheckCircle2,
  Lock,
  Compass,
  FileCheck,
  UserCheck,
  Layers,
  HelpCircle,
  Copy,
  ExternalLink,
  Ban,
  Check,
  Info
} from "lucide-react";
import {
  VerificationLevel,
  NonImplicationCode,
  MANDATORY_NON_IMPLICATION_CODES,
  SubstantiveAssessmentStatus,
  MaterialHandlingStatus,
  PresentedMaterialItem,
  IdentityVerificationStatus,
  JurisdictionScopeStatus,
  SuggestedNextRoute,
  StaffAcknowledgmentBlock,
  CounterpartMetadata,
} from "@/domain/continuity/types";
import {
  CALIBRATED_DIGEST_NOTICE,
  PUBLIC_AGENCY_RETENTION_WARNING,
  HONEST_REVOCATION_BOUNDARY_TEXT,
  DEFAULT_EXCLUDED_DISCLOSURE_FIELDS,
} from "@/domain/continuity/contactRecord";

export function ContinuityContactRecordSpecimen() {
  const [activeTier, setActiveTier] = useState<VerificationLevel>("AGENCY_ACKNOWLEDGED");
  const [activeCopy, setActiveCopy] = useState<"PARTICIPANT_COPY" | "RECEIVING_ORGANIZATION_COPY">(
    "PARTICIPANT_COPY"
  );
  const [showAuthorizationModal, setShowAuthorizationModal] = useState(false);

  // Mock specimen canonical hash
  const canonicalDigest = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  return (
    <div className="space-y-6 select-none font-sans">
      {/* Specimen Control Bar */}
      <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#971F26]">
              INTERACTIVE PILOT SPECIMEN
            </span>
            <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#D9D1C4] text-stone-700">
              STD: MWT-STD-2026-03
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1D1D]">
            Continuity Contact Record
          </h3>
          <p className="text-xs text-stone-700 max-w-xl">
            A standardized, survivor-held record of an institutional touchpoint. Documents the administrative encounter without creating unintentional agency liability or pretend judicial findings.
          </p>
        </div>

        {/* Verification Tier Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs">
          <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">
            Verification Tier:
          </span>
          <div className="inline-flex rounded-md border border-[#1C1D1D] bg-[#F5F1E8] p-0.5">
            <button
              onClick={() => setActiveTier("PARTICIPANT_RECORDED")}
              className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
                activeTier === "PARTICIPANT_RECORDED"
                  ? "bg-[#1C1D1D] text-white"
                  : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              1. Participant Recorded
            </button>
            <button
              onClick={() => setActiveTier("AGENCY_ACKNOWLEDGED")}
              className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
                activeTier === "AGENCY_ACKNOWLEDGED"
                  ? "bg-[#1C1D1D] text-white"
                  : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              2. Agency Acknowledged
            </button>
            <button
              onClick={() => setActiveTier("PARTNER_VERIFIED")}
              className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
                activeTier === "PARTNER_VERIFIED"
                  ? "bg-[#2D5A3D] text-white"
                  : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              3. Partner Verified
            </button>
          </div>
        </div>
      </div>

      {/* Tier Explanation Banner */}
      <div className="p-3.5 bg-[#F5F1E8] border border-[#D9D1C4] rounded-lg flex items-start gap-3 text-xs">
        <Info className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
        <div className="text-stone-800 space-y-0.5">
          {activeTier === "PARTICIPANT_RECORDED" && (
            <p>
              <strong>Tier 1 — Participant Recorded:</strong> Created and retained entirely by the survivor. Documents what was presented and what response was given. <em>Silence, decline, or refusal by an agency never invalidates this record.</em>
            </p>
          )}
          {activeTier === "AGENCY_ACKNOWLEDGED" && (
            <p>
              <strong>Tier 2 — Agency Acknowledged:</strong> Contains an optional, affirmative acknowledgment block by named agency staff. Confirms <em>only</em> what the staff member explicitly checked. Does not create tort liability or whole-matter representation.
            </p>
          )}
          {activeTier === "PARTNER_VERIFIED" && (
            <p>
              <strong>Tier 3 — Partner Verified:</strong> Executed through formally onboarded partner organizations with role-based staff credentials. Governed under institutional data sharing agreements.
            </p>
          )}
        </div>
      </div>

      {/* Main Specimen Card */}
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm relative">
        {/* Card Header & Counterpart Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#1C1D1D] pb-4">
          <div>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest block font-bold">
              MAPS WITH TEETH CONTINUITY CONTACT RECORD · [SPECIMEN]
            </span>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-lg sm:text-xl text-[#1C1D1D] font-mono">
                RECORD ID: CCR-2026-TX-08942
              </h2>
            </div>
            <p className="text-xs text-stone-600 font-sans mt-0.5">
              Contact Timestamp: August 28, 2026 · 14:15 CST · In-Person Desk Intake
            </p>
          </div>

          {/* Counterpart designation pill */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="inline-flex rounded border border-[#1C1D1D] bg-white p-0.5 text-[11px] font-mono">
              <button
                onClick={() => setActiveCopy("PARTICIPANT_COPY")}
                className={`px-2.5 py-0.5 rounded font-bold transition-colors ${
                  activeCopy === "PARTICIPANT_COPY"
                    ? "bg-[#1C1D1D] text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                Participant Copy
              </button>
              <button
                onClick={() => setActiveCopy("RECEIVING_ORGANIZATION_COPY")}
                className={`px-2.5 py-0.5 rounded font-bold transition-colors ${
                  activeCopy === "RECEIVING_ORGANIZATION_COPY"
                    ? "bg-[#971F26] text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                Agency Copy
              </button>
            </div>
            <span className="text-[10px] font-mono text-stone-600">
              Digest: <code className="bg-[#EEE8DD] px-1 py-0.5 rounded text-[10px]">{canonicalDigest.slice(0, 16)}...</code>
            </span>
          </div>
        </div>

        {/* 8 Segregated Dimensions Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Dimension 1 & 2: Material Presented vs Material Actually Reviewed */}
          <div className="p-4 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-2.5">
            <div className="flex items-center justify-between border-b border-[#D9D1C4] pb-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                1 & 2. MATERIAL PRESENTED VS. REVIEWED
              </span>
              <span className="text-[10px] font-mono text-stone-600 font-bold">2 ITEMS LOGGED</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-white rounded border border-[#D9D1C4] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">Residential Lease Agreement (Pages 1-4)</span>
                  <span className="px-2 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-mono text-[9px] font-bold rounded">
                    REVIEWED FOR ROUTING
                  </span>
                </div>
                <p className="text-stone-700 text-[11px]">
                  Physical paper copy. Staff inspected co-lessee signature names and lease expiration date only.
                </p>
              </div>

              <div className="p-2.5 bg-white rounded border border-[#D9D1C4] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">14 Screenshot Printouts / Text Logs</span>
                  <span className="px-2 py-0.5 bg-[#FEF3C7] border border-[#D97706] text-[#92400E] font-mono text-[9px] font-bold rounded">
                    OPENED NOT ASSESSED
                  </span>
                </div>
                <p className="text-stone-700 text-[11px]">
                  Physical prints presented; staff did not substantively examine, forensic-test, or evaluate contents.
                </p>
              </div>
            </div>

            <p className="text-[10px] text-stone-600 italic pt-1 border-t border-[#D9D1C4]/60">
              Notice: Material received does not imply opened, legible, reviewed on merits, metadata preserved, authenticated, or permanently retained.
            </p>
          </div>

          {/* Dimension 3 & 4: Identity Verified & Jurisdiction / Scope Determination */}
          <div className="space-y-4">
            <div className="p-4 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                3. IDENTITY VERIFICATION STATUS
              </span>
              <div className="flex items-center justify-between bg-white p-2.5 rounded border border-[#D9D1C4]">
                <div>
                  <p className="font-bold text-stone-900 text-xs">Texas Driver License Inspected</p>
                  <p className="text-stone-600 text-[11px]">Matched primary name on presented residential lease.</p>
                </div>
                <span className="px-2 py-0.5 bg-[#E8F3EB] border border-[#2D5A3D] text-[#2D5A3D] font-mono text-[9px] font-bold rounded">
                  PHOTO ID INSPECTED
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                4. JURISDICTION / SCOPE DETERMINATION
              </span>
              <div className="bg-white p-2.5 rounded border border-[#D9D1C4] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">Program Scope: Civil Tenant Dispute Excluded</span>
                  <span className="px-2 py-0.5 bg-[#FEE2E2] border border-[#DC2626] text-[#991B1B] font-mono text-[9px] font-bold rounded">
                    OUT OF SCOPE
                  </span>
                </div>
                <p className="text-stone-700 text-[11px]">
                  Police intake desk determined mobile phone account dispute is civil, outside penal jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Dimension 5 & 6: Substantive Assessment Status & Action Taken */}
          <div className="p-4 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-2.5">
            <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              5. SUBSTANTIVE ASSESSMENT STATUS (DE-JUDICIALIZED)
            </span>
            <div className="bg-white p-2.5 rounded border border-[#D9D1C4] space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-stone-900">NOT ASSESSED</span>
                <span className="text-[10px] font-mono text-stone-500 font-bold">INTAKE STANDARD</span>
              </div>
              <p className="text-stone-800 text-[11px] leading-relaxed">
                No finding on whether allegations are substantiated. A non-service or routing decision is never a merits finding.
              </p>
            </div>

            <div className="pt-2 border-t border-[#D9D1C4]">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block mb-1">
                6. ACTION TAKEN
              </span>
              <div className="bg-white p-2.5 rounded border border-[#D9D1C4] space-y-0.5">
                <p className="font-bold text-stone-900">Declined Formal Protective Order Intake</p>
                <p className="text-stone-700 text-[11px]">
                  Provided statutory referral guide to civil legal aid. Incident logged in CAD #26-240-0891.
                </p>
              </div>
            </div>
          </div>

          {/* Dimension 7 & 8: Decline Reason & Suggested Next Contact */}
          <div className="p-4 bg-[#EEE8DD] border border-[#D9D1C4] rounded-lg space-y-2.5">
            <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">
              7. DECLINE OR REROUTE REASON
            </span>
            <div className="bg-white p-2.5 rounded border border-[#D9D1C4]">
              <p className="font-bold text-stone-900 text-xs">Primary Cellular Account Holder Mismatch</p>
              <p className="text-stone-700 text-[11px]">
                Desk officer noted account holder is spouse; did not evaluate Safe Connections Act line separation.
              </p>
            </div>

            <div className="pt-2 border-t border-[#D9D1C4]">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block mb-1">
                8. SUGGESTED NEXT CONTACT OR PROCESS
              </span>
              <div className="bg-white p-2.5 rounded border border-[#D9D1C4] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">Legal Aid of NorthWest Texas</span>
                  <span className="px-1.5 py-0.5 bg-stone-100 text-stone-600 font-mono text-[9px] font-bold rounded border border-stone-300">
                    ACCEPTANCE UNCONFIRMED
                  </span>
                </div>
                <p className="text-stone-700 text-[11px]">
                  Suggested contact: https://lanwt.org/intake · Domestic Violence Unit
                </p>
                <div className="text-[10px] font-mono text-[#971F26] bg-[#FDF2F2] p-1.5 rounded border border-[#971F26]/20">
                  Citation: 47 U.S.C. § 345 [Supplied by MAPS REFERENCE · Reference only, not legal advice]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Five Mandatory Non-Implication Notices */}
        <div className="p-4 bg-[#1C1D1D] text-white rounded-lg space-y-3">
          <div className="flex items-center justify-between border-b border-stone-700 pb-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#D9D1C4] uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D9D1C4]" />
              FIVE MANDATORY NON-IMPLICATION NOTICES (IMMUTABLE)
            </span>
            <span className="text-[9px] font-mono text-stone-400">APPLIES TO ALL TIERS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-[11px]">
            <div className="p-2 bg-stone-900 rounded border border-stone-800 space-y-0.5">
              <span className="text-[9px] font-mono text-[#971F26] font-bold block">
                NO_SUBSTANTIATION_FINDING
              </span>
              <p className="text-stone-300 text-[10.5px]">Does not determine that any allegations have been proven or substantiated.</p>
            </div>

            <div className="p-2 bg-stone-900 rounded border border-stone-800 space-y-0.5">
              <span className="text-[9px] font-mono text-[#971F26] font-bold block">
                NO_EVIDENCE_AUTHENTICATION
              </span>
              <p className="text-stone-300 text-[10.5px]">Receipt of materials does not authenticate files, metadata, or evidentiary truth.</p>
            </div>

            <div className="p-2 bg-stone-900 rounded border border-stone-800 space-y-0.5">
              <span className="text-[9px] font-mono text-[#971F26] font-bold block">
                NO_WHOLE_MATTER_ACCEPTANCE
              </span>
              <p className="text-stone-300 text-[10.5px]">Acknowledgment does not accept legal representation or ongoing crisis liability.</p>
            </div>

            <div className="p-2 bg-stone-900 rounded border border-stone-800 space-y-0.5">
              <span className="text-[9px] font-mono text-[#971F26] font-bold block">
                NO_MAPS_INTERPRETATION_ENDORSEMENT
              </span>
              <p className="text-stone-300 text-[10.5px]">Acknowledgment does not adopt or agree with Maps With Teeth legal theories.</p>
            </div>

            <div className="p-2 bg-stone-900 rounded border border-stone-800 space-y-0.5 sm:col-span-2">
              <span className="text-[9px] font-mono text-[#971F26] font-bold block">
                NO_ROUTING_AS_MERITS_FINDING
              </span>
              <p className="text-stone-300 text-[10.5px]">A routing or declination decision is based on scope or capacity, never on survivor credibility.</p>
            </div>
          </div>
        </div>

        {/* Affirmative Acknowledgment Block */}
        <div className="p-4 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D1C4] pb-2">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26] block">
                STAFF ACKNOWLEDGMENT BLOCK (TEXAS UETA & 15 U.S.C. § 7001)
              </span>
              <p className="text-xs text-stone-700">
                Staff member attests strictly to items affirmatively checked below in an official organizational capacity.
              </p>
            </div>
            <span className="px-2 py-0.5 bg-stone-200 text-stone-700 font-mono text-[10px] rounded font-bold">
              OPTIONAL · NOT REQUIRED FOR PARTICIPANT RECORD
            </span>
          </div>

          {activeTier === "PARTICIPANT_RECORDED" ? (
            <div className="p-3 bg-[#EEE8DD] border border-[#D9D1C4] rounded text-xs text-stone-700 space-y-1">
              <p className="font-bold text-stone-900">No Staff Acknowledgment Attached</p>
              <p>
                This record was preserved solely by the participant. The participant retains full data sovereignty and procedural context regardless of whether agency staff agreed or declined to sign.
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2.5 bg-white border border-[#D9D1C4] rounded">
                  <span className="text-[9px] font-mono uppercase text-stone-500 block font-bold">Acknowledging Staff</span>
                  <p className="font-bold text-stone-900">Officer J. Miller</p>
                  <p className="text-stone-600 text-[11px]">Badge #4102 · Victim Services Liaison</p>
                </div>

                <div className="p-2.5 bg-white border border-[#D9D1C4] rounded">
                  <span className="text-[9px] font-mono uppercase text-stone-500 block font-bold">Represented Entity</span>
                  <p className="font-bold text-stone-900">Austin Police Dept</p>
                  <p className="text-stone-600 text-[11px]">Travis County, Texas</p>
                </div>

                <div className="p-2.5 bg-white border border-[#D9D1C4] rounded">
                  <span className="text-[9px] font-mono uppercase text-stone-500 block font-bold">Authority & Capacity</span>
                  <p className="font-bold text-[#2D5A3D]">Authorized Intake Staff</p>
                  <p className="text-stone-600 text-[11px]">Official Capacity Only · No Personal Liability</p>
                </div>
              </div>

              {/* Affirmative Checkboxes */}
              <div className="p-3 bg-white border border-[#D9D1C4] rounded space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block mb-1">
                  Affirmatively Attested Items (Unselected items carry zero acknowledgment)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <label className="flex items-center gap-2 text-stone-900">
                    <span className="w-4 h-4 rounded border border-[#2D5A3D] bg-[#E8F3EB] text-[#2D5A3D] flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Confirmed receipt of physical lease copy</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-900">
                    <span className="w-4 h-4 rounded border border-[#2D5A3D] bg-[#E8F3EB] text-[#2D5A3D] flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Inspected state photo ID credentials</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-900">
                    <span className="w-4 h-4 rounded border border-[#2D5A3D] bg-[#E8F3EB] text-[#2D5A3D] flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Conducted ministerial intake review only</span>
                  </label>
                  <label className="flex items-center gap-2 text-stone-400">
                    <span className="w-4 h-4 rounded border border-stone-300 bg-stone-100 flex items-center justify-center text-xs"></span>
                    <span className="italic">Did NOT examine digital media contents</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-stone-600 pt-1">
                <span>Correction Procedure: Addendum Only (No Retroactive Alteration)</span>
                <span>Explicit Right to Decline Without Reason Stated</span>
              </div>
            </div>
          )}
        </div>

        {/* Calibrated Digest Notice Bar */}
        <div className="p-3 bg-[#EEE8DD] border border-[#D9D1C4] rounded-md text-[11px] text-stone-700 leading-snug">
          <strong>Calibrated Document Digest Notice:</strong> {CALIBRATED_DIGEST_NOTICE}
        </div>

        {/* Footer Actions & Separate Disclosure Trigger */}
        <div className="border-t border-[#D9D1C4] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-stone-900">Participant Sovereign Privacy Control</span>
            <p className="text-stone-600 text-[11px]">
              Consent is never bundled into this record. Disclosures require separate voluntary authorization.
            </p>
          </div>

          <button
            onClick={() => setShowAuthorizationModal(true)}
            className="px-4 py-2 bg-[#971F26] hover:bg-red-900 text-white font-bold rounded text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-2xs"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>View Standalone Disclosure Authorization</span>
          </button>
        </div>
      </div>

      {/* Standalone Disclosure Authorization Modal / Drawer */}
      {showAuthorizationModal && (
        <div className="p-6 bg-[#F5F1E8] border-2 border-[#971F26] rounded-xl space-y-4 shadow-md">
          <div className="flex items-center justify-between border-b border-[#971F26]/30 pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-[#971F26]">
                DOJ OVW CONFIDENTIALITY COMPLIANT · STANDALONE AUTHORIZATION
              </span>
              <h4 className="text-lg font-serif font-bold text-[#1C1D1D]">
                Participant Sovereign Disclosure Authorization
              </h4>
            </div>
            <button
              onClick={() => setShowAuthorizationModal(false)}
              className="text-xs font-mono font-bold text-stone-600 hover:text-stone-900 px-2.5 py-1 bg-stone-200 rounded"
            >
              Close
            </button>
          </div>

          {/* Mandatory Public Agency Warning */}
          <div className="p-3.5 bg-[#FEF3C7] border border-[#D97706] rounded text-xs text-[#92400E] space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Public-Agency Records & Open Records Warning
            </p>
            <p className="leading-relaxed text-[11.5px]">
              {PUBLIC_AGENCY_RETENTION_WARNING}
            </p>
          </div>

          {/* Honest Revocation Boundary Warning */}
          <div className="p-3.5 bg-[#EEE8DD] border border-[#D9D1C4] rounded text-xs text-stone-800 space-y-1">
            <p className="font-bold text-[#1C1D1D]">Honest Revocation Boundary Notice</p>
            <p className="leading-relaxed text-[11.5px]">
              {HONEST_REVOCATION_BOUNDARY_TEXT}
            </p>
          </div>

          {/* Data Minimization Summary */}
          <div className="p-3.5 bg-white border border-[#D9D1C4] rounded text-xs space-y-2">
            <span className="font-bold text-stone-900 block">Default Data Minimization (Excluded by Default)</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-stone-700">
              {DEFAULT_EXCLUDED_DISCLOSURE_FIELDS.map((field) => (
                <div key={field} className="flex items-center gap-1.5">
                  <span className="text-[#971F26] font-mono font-bold">✕</span>
                  <code>{field.replace(/_/g, " ")}</code>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-stone-600 font-mono pt-1">
            Authorization ID: auth-ovw-2026-tx88 · Expiration: 30 Days from Execution · Revocable at any time
          </div>
        </div>
      )}
    </div>
  );
}
