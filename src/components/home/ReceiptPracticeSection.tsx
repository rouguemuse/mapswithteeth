"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Copy } from "lucide-react";

export function ReceiptPracticeSection() {
  return (
    <section id="practice" className="space-y-8 scroll-mt-24 font-sans select-none">
      
      {/* Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 03 · THE PHYSICAL SPECIMEN
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            The Continuity Receipt
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [CLIENT-SIDE CRYPTOGRAPHIC ARTIFACT]
        </span>
      </div>

      <p className="text-lg text-[#4D4944] font-serif max-w-3xl leading-relaxed">
        A Continuity Receipt gives the participant a client-side, portable record of an administrative encounter. It documents what was presented, the current acknowledgment status, and who owns the next milestone—without asserting legal authority, deciding claim merits, or binding an agency.
      </p>

      {/* Artifact Presentation: Treated as an authentic physical object on an archival desk */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Physical Receipt Artifact with Shadow & Texture (7 Cols) */}
        <div className="lg:col-span-7 bg-[#E8E2D5] border-2 border-[#11100F] p-4 sm:p-6 rounded-xs shadow-2xl relative group">
          <div className="flex items-center justify-between pb-3 border-b border-[#C4B69E] font-mono text-[10px] text-[#4D4944] uppercase">
            <span className="font-bold text-[#841F2B]">SPECIMEN ARCHIVE #CR-2026-0814</span>
            <span>PORTABLE CANONICAL RECORD</span>
          </div>

          {/* The Physical Receipt Image Specimen */}
          <div className="relative mt-3 rounded-xs overflow-hidden border border-[#332E29] bg-white shadow-xl">
            <div className="relative h-[480px] sm:h-[560px] w-full">
              <Image
                src="/images/art/specimen_receipt_perfect_final.png"
                alt="Physical Continuity Receipt Document Specimen"
                fill
                className="object-contain object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#4D4944]">
            <span>CANONICAL SHA-256 DIGEST VERIFIED</span>
            <span className="text-[#841F2B] font-bold">ZERO SURVEILLANCE RISK</span>
          </div>
        </div>

        {/* Right Column: Architectural Mechanics & Specimen Actions (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#11100F] text-[#F8F5EE] border-2 border-[#11100F] p-6 sm:p-7 rounded-xs shadow-xl space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#E85D6B] font-bold uppercase tracking-wider">
              <span>HOW IT PROTECTS PARTICIPANTS</span>
              <span>[CORE PROPERTIES]</span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-white">
              Evidence Integrity Without Dossiers
            </h3>

            <p className="text-xs sm:text-sm text-[#D8D2C6] leading-relaxed font-sans">
              Unlike government databases that aggregate sensitive personal histories into vulnerable centralized files, a Continuity Receipt lives on the client device.
            </p>

            <div className="space-y-3 pt-2 text-xs font-sans">
              <div className="p-3 bg-[#1A1817] border border-[#2B2926] rounded-xs space-y-1">
                <strong className="text-white font-mono block">1. Non-Implication Boundaries:</strong>
                <span className="text-[#A39E94]">
                  Explicitly states that receiving or routing an intake never constitutes a merits determination or legal admissibility finding.
                </span>
              </div>

              <div className="p-3 bg-[#1A1817] border border-[#2B2926] rounded-xs space-y-1">
                <strong className="text-white font-mono block">2. Tamper-Evident SHA-256 Digest:</strong>
                <span className="text-[#A39E94]">
                  Cryptographically proves that an exhibit was present at the timestamped moment without disclosing private allegations.
                </span>
              </div>

              <div className="p-3 bg-[#1A1817] border border-[#2B2926] rounded-xs space-y-1">
                <strong className="text-white font-mono block">3. Milestone Transfer Ownership:</strong>
                <span className="text-[#A39E94]">
                  Identifies the exact unit and target completion window for the subsequent institutional action.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2B2926] flex flex-col sm:flex-row gap-3">
              <Link
                href="/continuity#prototype"
                className="px-5 py-3 bg-[#841F2B] hover:bg-[#661620] text-white rounded-xs text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition"
              >
                <span>Launch Interactive Generator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Touchpoint Journey Strip Artwork */}
          <div className="bg-[#EEE8DB] border-2 border-[#11100F] p-5 rounded-xs shadow-md space-y-3">
            <span className="text-[10px] font-mono uppercase text-[#841F2B] font-bold block">
              FOUR-TOUCHPOINT JOURNEY MODEL
            </span>
            <div className="relative h-28 sm:h-32 w-full overflow-hidden rounded-xs border border-[#C4B69E] bg-[#F8F5EE]">
              <Image
                src="/images/art/specimen_touchpoints_strip.png"
                alt="Four-Touchpoint Journey Across Police, DV, Legal Aid, and Housing"
                fill
                className="object-contain mix-blend-multiply"
                unoptimized
              />
            </div>
            <p className="text-[11px] text-[#4D4944] font-sans">
              From initial disclosure to housing stabilization: each receipt updates the path without requiring you to retell your story.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
