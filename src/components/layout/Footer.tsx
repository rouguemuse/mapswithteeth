import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-mwt-black text-[#D8D2C6] border-t-2 border-[#24211E] text-xs sm:text-sm mt-auto font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2B2926]">
          {/* Brand & Movement Thesis */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2.5 rounded-xs bg-mwt-ivory border border-stone-700 shrink-0 inline-flex">
                <Logo size="sm" />
              </div>
            </div>
            <p className="text-white text-base font-serif font-semibold tracking-tight">
              &ldquo;People shouldn’t disappear between systems.&rdquo;
            </p>
            <p className="text-[#A39E94] text-xs sm:text-[13px] font-sans leading-relaxed max-w-md">
              Maps With Teeth examines the gaps between institutions, jurisdictions, and technologies, and develops practical approaches to continuity, accountability, and access.
            </p>
            <div className="p-3 bg-[#1A1817] rounded-xs border border-[#2B2926] text-[11px] text-[#A39E94] font-mono space-y-1">
              <p className="text-white font-bold">&ldquo;A directory is not a route.&rdquo;</p>
              <p>People move between systems. Their information and accountability often do not.</p>
            </div>
          </div>

          {/* Column 1: The Pilot & Resources */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-[#2B2926] pb-1 text-mwt-oxblood-light">
              Navigation Pilot
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/find-help" className="text-[#E8E4DA] hover:text-white transition-colors font-bold">
                  Barrier-First Matcher
                </Link>
              </li>
              <li>
                <Link href="/other-ways-through" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Other Ways Through (Lateral Aid)
                </Link>
              </li>
              <li>
                <Link href="/texas" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Texas Statutory Dockets (254 Counties)
                </Link>
              </li>
              <li>
                <Link href="/ask-us-to-look" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Ask Us to Look (Intake Review)
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Digital Safety &amp; Private Browsing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: System Continuity & Research */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-[#2B2926] pb-1 text-stone-300">
              Systems &amp; Standards
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/continuity" className="text-[#D8D2C6] hover:text-white transition-colors font-bold">
                  Continuity Standard (6 Modules)
                </Link>
              </li>
              <li>
                <Link href="/protection" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Protection Without Continuity
                </Link>
              </li>
              <li>
                <Link href="/the-gap" className="text-[#D8D2C6] hover:text-white transition-colors">
                  The Seam Deficit
                </Link>
              </li>
              <li>
                <Link href="/bad-maps" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Bad Maps Research
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Texas Policy Lab
                </Link>
              </li>
              <li>
                <Link href="/policy#integration-layer-reform" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Integration Layer Reform
                </Link>
              </li>
              <li>
                <Link href="/continuity/safeguards" className="text-amber-300 hover:text-amber-200 transition-colors font-bold">
                  Evidence Safeguards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiative & Field Notes */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-[13px] border-b border-[#2B2926] pb-1 text-stone-300">
              Field Notes &amp; Org
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/writing" className="text-white hover:text-mwt-oxblood-light font-bold transition-colors">
                  Field Notes &amp; Writing
                </Link>
              </li>
              <li>
                <Link href="/for-partners" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Call for Partners
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D8D2C6] hover:text-white transition-colors">
                  About the Initiative
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Governance &amp; Ethics
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[#D8D2C6] hover:text-white transition-colors">
                  Support &amp; Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal, Privacy & Non-Claim Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#A39E94]">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Maps With Teeth. An open public-interest technology and policy initiative.
            </p>
            <p className="text-[#8E877C]">
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
