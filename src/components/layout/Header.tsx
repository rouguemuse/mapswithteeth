"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShieldAlert } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Header({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  // Primary 5 Desktop Navigation items
  const primaryNav = [
    { name: "Find Help", href: "/find-help" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "For Partners", href: "/for-partners" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ];

  const isMoreActive = [
    "/other-ways-through",
    "/texas",
    "/ask-us-to-look",
    "/bridge",
    "/how-we-research",
    "/feedback",
    "/build-with-us",
    "/safety",
  ].some((href) => pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="bg-[#F5F1E8] text-[#1C1D1D] border-b border-[#D9D1C4] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 select-none font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 md:gap-6">
          {/* Brand Block */}
          <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation & Primary CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-3 font-mono">
            {/* Top-Level Primary Links */}
            <nav className="flex items-center space-x-1">
              {primaryNav.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-b-2 border-[#971F26]"
                        : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* More Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  aria-expanded={moreDropdownOpen}
                  className={`px-2.5 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
                    isMoreActive || moreDropdownOpen
                      ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold"
                      : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                  }`}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreDropdownOpen ? "rotate-180 text-[#971F26]" : "text-stone-500"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-[#F5F1E8] border-2 border-[#26221F] rounded-xl shadow-xl py-3 px-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left">
                    <div className="grid grid-cols-1 gap-4 font-mono">
                      {/* Deep Navigation / Specialized Tools */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#971F26] border-b border-[#D9D1C4] pb-1 mb-2">
                          Specialized Tools
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              href="/other-ways-through"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Other Ways Through (Lateral Aid)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/texas"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Texas Deep Dive (254 Counties)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ask-us-to-look"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Ask Us to Look (Intake Engine)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/bridge"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Bridge (Continuity Receipts)
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Research & Collaboration */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-600 border-b border-[#D9D1C4] pb-1 mb-2">
                          Research & Collaboration
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              href="/how-we-research"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              How We Research & Verify
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/feedback"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Pressure-Test & Feedback
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/build-with-us"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Build With Us (Collaborators)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/safety"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Digital Safety & Privacy
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action: Pressure-Test CTA */}
            <Link
              href="/for-partners"
              className="px-3.5 py-2 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono shadow-2xs transition-all border border-[#971F26] shrink-0"
            >
              Partner Briefing
            </Link>
          </div>

          {/* Compact Mobile Header Bar (<1024px) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Quick Find Help Action */}
            <Link
              href="/find-help"
              className="px-2.5 py-1.5 bg-[#971F26] text-white rounded text-[11px] font-mono font-bold uppercase tracking-wider shadow-2xs shrink-0"
            >
              Find Help
            </Link>

            {/* Quick Exit / Safety Trigger */}
            <button
              onClick={onOpenSafeBrowsing}
              className="px-2 py-1.5 bg-[#EEE8DD] border border-[#D9D1C4] text-stone-800 hover:text-[#971F26] rounded text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
              aria-label="Open Digital Safety Information"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#971F26]" />
              <span className="hidden xs:inline">Safety</span>
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-[#D9D1C4] bg-[#EEE8DD] text-[#1C1D1D] hover:bg-stone-200 focus:outline-none shrink-0"
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

      {/* Mobile Drawer Menu (Cleanly Categorized into 3 Functional Groups) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#26221F] bg-[#F5F1E8] px-4 pt-3 pb-6 space-y-4 shadow-xl font-mono animate-in fade-in duration-150">
          {/* Group 1: GET HELP */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              GET HELP
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
              Other Ways Through (Lateral Aid)
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
            <Link
              href="/safety"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/safety" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-800 hover:bg-[#EEE8DD]"
              }`}
            >
              Digital Safety & Privacy Guide
            </Link>
          </div>

          {/* Group 2: UNDERSTAND */}
          <div className="space-y-1 pt-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              UNDERSTAND
            </div>
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
              href="/bridge"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/bridge" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Bridge (Continuity Infrastructure)
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
          </div>

          {/* Group 3: PARTICIPATE & GOVERNANCE */}
          <div className="space-y-1 pt-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              PARTICIPATE & GOVERNANCE
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
              href="/feedback"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/feedback" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Pressure-Test & Feedback
            </Link>
            <Link
              href="/build-with-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                pathname === "/build-with-us" ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]" : "text-stone-700 hover:bg-[#EEE8DD]"
              }`}
            >
              Build With Us (Collaborator Portal)
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
          </div>
        </div>
      )}
    </header>
  );
}
