import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[#1C1D1D] text-stone-300 border-t-2 border-stone-800 text-xs sm:text-sm mt-auto font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Brand & Editorial Thesis */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2.5 rounded bg-[#F5F1E8] border border-stone-700 shrink-0 inline-flex">
                <Logo size="sm" />
              </div>
            </div>
            <p className="text-stone-200 text-xs sm:text-[13.5px] font-sans leading-relaxed">
              <strong className="text-white">Maps With Teeth:</strong> A portable continuity and accountability layer for people navigating abuse and instability across systems that do not share one case file, one jurisdiction, or one map.
            </p>
            <div className="p-3 bg-stone-900 rounded border border-stone-800 text-[11px] text-stone-400 font-mono space-y-1">
              <p className="text-white font-bold">&ldquo;The survivor should not be the only person holding the whole map.&rdquo;</p>
              <p>“People move between systems. Their information and accountability often do not.”</p>
            </div>
          </div>

          {/* Column 1: Survivor Side (Resource Intelligence) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-stone-700 pb-1 text-[#971F26]">
              Survivor Side
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/find-help" className="text-stone-300 hover:text-white transition-colors font-bold">
                  Find a Way Through (Matcher)
                </Link>
              </li>
              <li>
                <Link href="/other-ways-through" className="text-stone-300 hover:text-white transition-colors">
                  Other Ways Through (Lateral Aid)
                </Link>
              </li>
              <li>
                <Link href="/texas" className="text-stone-300 hover:text-white transition-colors">
                  Texas Deep Dive (254 Counties)
                </Link>
              </li>
              <li>
                <Link href="/ask-us-to-look" className="text-stone-300 hover:text-white transition-colors">
                  Ask Us to Look (Intake Review)
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-stone-300 hover:text-white transition-colors">
                  Digital Safety & Private Browsing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: System Side (Continuity & Policy) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-stone-700 pb-1 text-stone-200">
              System Side
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/the-gap" className="text-stone-300 hover:text-white transition-colors font-bold">
                  The Gap (Why This Matters)
                </Link>
              </li>
              <li>
                <Link href="/continuity" className="text-stone-300 hover:text-white transition-colors">
                  Cross-System Continuity Standard
                </Link>
              </li>
              <li>
                <Link href="/continuity/safeguards" className="text-stone-300 hover:text-white transition-colors font-bold text-amber-200">
                  Evidence Integrity &amp; Safeguards
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-stone-300 hover:text-white transition-colors">
                  Texas Policy &amp; Systems Lab
                </Link>
              </li>
              <li>
                <Link href="/bad-maps" className="text-stone-300 hover:text-white transition-colors">
                  Bad Maps (Failure Intelligence)
                </Link>
              </li>
              <li>
                <Link href="/for-partners" className="text-red-400 hover:text-red-300 font-bold transition-colors">
                  Call for Partners & Co-Design →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Evidence & Governance */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-stone-700 pb-1 text-stone-400">
              Evidence & Specs
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/writing" className="text-white hover:text-red-400 font-bold transition-colors">
                  Field Notes & Writing
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-stone-300 hover:text-white transition-colors">
                  Research Methodology
                </Link>
              </li>
              <li>
                <Link href="/technical" className="text-stone-300 hover:text-white transition-colors">
                  Technical QA Suite
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                  About & History
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-stone-300 hover:text-white transition-colors">
                  Governance & Ethics
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-stone-300 hover:text-white transition-colors">
                  Support & Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal, Privacy & Non-Claim Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-stone-400">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Maps With Teeth. An open public-interest technology and policy initiative.
            </p>
            <p className="text-stone-400">
              Not legal advice · Not an emergency 911 service · Not a centralized allegation dossier.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/safety" className="hover:text-white transition-colors">
              Safety First
            </Link>
            <Link href="/governance" className="hover:text-white transition-colors">
              Privacy Standards
            </Link>
            <Link href="/for-partners" className="hover:text-white transition-colors">
              Partner Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
