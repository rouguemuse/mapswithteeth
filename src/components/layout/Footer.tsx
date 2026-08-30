import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[#1C1D1D] text-stone-300 border-t-2 border-stone-800 text-xs sm:text-sm mt-auto font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          {/* Brand & Editorial Thesis */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2.5 rounded bg-[#F5F1E8] border border-stone-700 shrink-0 inline-flex">
                <Logo size="sm" />
              </div>
            </div>
            <p className="text-stone-200 text-sm sm:text-[14.5px] font-sans leading-relaxed">
              <strong className="text-white">Texas-first, not Texas-only:</strong> Central Texas is where we&apos;re testing the model deeply. Other Ways Through collects useful national, multi-state, and location-specific pathways wherever we find them.
            </p>
            <div className="text-xs text-stone-400 font-mono">
              [INITIATIVE: BARRIER-FIRST RESOURCE INTELLIGENCE · CENTRAL TX PILOT & BEYOND]
            </div>
          </div>

          {/* Core Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px]">
              Resource Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/find-help" className="text-stone-300 hover:text-white transition-colors">
                  Find Help
                </Link>
              </li>
              <li>
                <Link href="/texas" className="text-stone-300 hover:text-white transition-colors">
                  Texas Deep Dive
                </Link>
              </li>
              <li>
                <Link href="/other-ways-through" className="text-stone-300 hover:text-white transition-colors">
                  Other Ways Through
                </Link>
              </li>
              <li>
                <Link href="/ask-us-to-look" className="text-red-400 hover:underline font-bold">
                  Ask Us to Look
                </Link>
              </li>
              <li>
                <Link href="/how-we-research" className="text-stone-300 hover:text-white transition-colors">
                  How We Research
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#bridge" className="text-stone-300 hover:text-white transition-colors">
                  Bridge (Continuity)
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Participation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px]">
              Initiative & Governance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-stone-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/build-with-us" className="text-stone-300 hover:text-white transition-colors">
                  Build With Us
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-stone-300 hover:text-white transition-colors">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-stone-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-stone-300 hover:text-white transition-colors">
                  Digital Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Disclosure & Legal Notice */}
        <div className="pt-6 space-y-3 text-xs sm:text-[12.5px] text-stone-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="max-w-3xl leading-relaxed">
              <strong className="text-stone-300">Institutional Notice:</strong> Maps With Teeth is an independent public-interest initiative in development. It is not currently a 501(c)(3), government agency, emergency service, legal-services provider, or substitute for emergency assistance.
            </p>
            <p className="text-[11px] text-stone-400 shrink-0 font-mono">
              © {new Date().getFullYear()} Maps With Teeth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
