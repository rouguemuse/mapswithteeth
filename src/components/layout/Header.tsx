"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Compass } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Header({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Desktop Navigation items
  const mainNav = [
    { name: "Find Help", href: "/find-help" },
    { name: "Other Ways Through", href: "/other-ways-through" },
    { name: "Texas Deep Dive", href: "/texas" },
    { name: "Bridge & Continuity", href: "/bridge" },
    { name: "For Partners", href: "/for-partners" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="bg-[#F5F1E8] text-[#1C1D1D] border-b border-[#D9D1C4] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4 md:gap-8">
          {/* Brand Block */}
          <Link href="/" className="flex items-center shrink-0 py-1.5 focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation & Primary CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-3.5 font-mono">
            {/* Top-Level Links */}
            <nav className="flex items-center space-x-1">
              {mainNav.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-b-2 border-[#971F26]"
                        : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Single Primary Oxblood CTA on Far Right */}
            <Link
              href="/for-partners"
              className="px-3.5 py-2 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono shadow-2xs transition-all border border-[#971F26] shrink-0"
            >
              Pressure-Test
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/for-partners"
              className="px-2.5 py-1.5 bg-[#971F26] text-white rounded text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs"
            >
              For Partners
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-[#D9D1C4] bg-[#EEE8DD] text-[#1C1D1D] hover:bg-stone-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Persistent Subline Beneath Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between border-t border-[#D9D1C4]/60 py-1 text-[10px] font-mono text-stone-600 tracking-wider">
          <span>Barrier-first resource intelligence & continuity infrastructure.</span>
          <span className="text-[#971F26] font-bold">[RESOURCE INTELLIGENCE + BRIDGE CONTINUITY]</span>
        </div>
      </div>

      {/* Mobile Drawer Menu (Explicitly Grouped) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D9D1C4] bg-[#F5F1E8] px-4 pt-3 pb-6 space-y-4 shadow-lg font-mono">
          {/* Group 1: RESOURCE INTELLIGENCE */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              RESOURCE INTELLIGENCE
            </div>
            <Link
              href="/find-help"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/find-help" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              Find a Way Through
            </Link>
            <Link
              href="/other-ways-through"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/other-ways-through" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              Other Ways Through (Lateral Funds)
            </Link>
            <Link
              href="/texas"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname.startsWith("/texas") ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              Texas Deep Dive (254 Counties)
            </Link>
            <Link
              href="/ask-us-to-look"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/ask-us-to-look" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              Ask Us to Look (Intake Engine)
            </Link>
          </div>

          {/* Group 2: CONTINUITY & ARCHITECTURE */}
          <div className="space-y-1 pt-2">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              CONTINUITY & INITIATIVE
            </div>
            <Link
              href="/for-partners"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/for-partners" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              For Partners & Funders
            </Link>
            <Link
              href="/bridge"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/bridge" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Bridge (Continuity Receipts)
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/how-it-works" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              How It Works (Full Architecture)
            </Link>
            <Link
              href="/how-we-research"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/how-we-research" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              How We Research & Verify
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/about" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              About the Initiative
            </Link>
            <Link
              href="/feedback"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/feedback" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Feedback & Pressure Testing
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/support" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Support the Work
            </Link>
            <Link
              href="/build-with-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/build-with-us" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Build With Us / Collaborator Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
