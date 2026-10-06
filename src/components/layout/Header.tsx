"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShieldAlert, Compass, Layers, Scale, AlertTriangle, Users, MapPin } from "lucide-react";
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

  // Primary Two-Sided Infrastructure Navigation items
  const primaryNav = [
    { name: "Find Help", href: "/find-help" },
    { name: "The Gap", href: "/the-gap" },
    { name: "Continuity Model", href: "/continuity" },
    { name: "Policy Lab", href: "/policy" },
    { name: "Writing", href: "/writing" },
    { name: "Bad Maps", href: "/bad-maps" },
    { name: "Partners", href: "/for-partners" },
  ];

  const isMoreActive = [
    "/other-ways-through",
    "/texas",
    "/ask-us-to-look",
    "/bridge",
    "/how-we-research",
    "/methodology",
    "/technical",
    "/about",
    "/feedback",
    "/support",
    "/safety",
  ].some((href) => pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="bg-[#F5F1E8] text-[#1C1D1D] border-b border-[#D9D1C4] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 select-none font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 md:gap-4">
          {/* Brand Block */}
          <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation & Primary CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-3 font-mono">
            {/* Top-Level Primary Links */}
            <nav className="flex items-center space-x-1">
              {primaryNav.map((link) => {
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

              {/* More Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  aria-expanded={moreDropdownOpen}
                  className={`px-2 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
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
                      {/* Survivor Tools */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#971F26] border-b border-[#D9D1C4] pb-1 mb-2">
                          Survivor Tools
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
                              Texas Deep Dive (Statutes & Aid)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ask-us-to-look"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Ask Us to Look (Intake Review)
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Systems & Research */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-stone-600 border-b border-[#D9D1C4] pb-1 mb-2">
                          Systems & Evidence
                        </div>
                        <ul className="space-y-1">
                          <li>
                            <Link
                              href="/writing"
                              className="block px-2 py-1 text-xs text-[#971F26] font-bold hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Field Notes & Systems Writing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/continuity/safeguards"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors font-medium"
                            >
                              Evidence Integrity &amp; Safeguards
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/methodology"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Methodology & Evidence Specs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/technical"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Technical Architecture & QA
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              About Maps With Teeth
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/safety"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Digital Safety & Browsing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support"
                              className="block px-2 py-1 text-xs text-stone-800 hover:text-[#971F26] hover:bg-[#EEE8DD] rounded transition-colors"
                            >
                              Support & Donate
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Quick Exit / Safety Trigger */}
            <button
              onClick={onOpenSafeBrowsing}
              className="px-2.5 py-1.5 bg-[#EEE8DD] border border-[#D9D1C4] text-stone-800 hover:text-[#971F26] rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 shrink-0"
              aria-label="Open Digital Safety Information"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#971F26]" />
              <span>Safety</span>
            </button>
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
          <span>People move between systems. Their information and accountability often do not.</span>
          <span className="text-[#971F26] font-bold">[SURVIVOR CONTINUITY + SYSTEM ACCOUNTABILITY]</span>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#26221F] bg-[#F5F1E8] px-4 pt-3 pb-6 space-y-4 shadow-xl font-mono animate-in fade-in duration-150">
          {/* Group 1: SURVIVOR NAVIGATION */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              SURVIVOR SIDE · RESOURCE INTELLIGENCE
            </div>
            <Link
              href="/find-help"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Find a Way Through (Resource Matcher)
            </Link>
            <Link
              href="/other-ways-through"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              Other Ways Through (Lateral Aid)
            </Link>
            <Link
              href="/texas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              Texas Deep Dive (254 Counties & Statutes)
            </Link>
            <Link
              href="/ask-us-to-look"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              Ask Us to Look (Intake Review)
            </Link>
          </div>

          {/* Group 2: SYSTEMS & CONTINUITY */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-stone-700 tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              SYSTEM SIDE · CONTINUITY & POLICY
            </div>
            <Link
              href="/the-gap"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              The Gap (Why This Matters)
            </Link>
            <Link
              href="/continuity"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Cross-System Continuity Standard
            </Link>
            <Link
              href="/continuity/safeguards"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Evidence Integrity &amp; Safeguards
            </Link>
            <Link
              href="/policy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Texas Policy & Systems Lab
            </Link>
            <Link
              href="/writing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Field Notes (Writing & Analysis)
            </Link>
            <Link
              href="/bad-maps"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#1C1D1D] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Bad Maps (Failure Intelligence)
            </Link>
            <Link
              href="/for-partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1.5 text-xs text-[#971F26] font-bold hover:bg-[#EEE8DD] rounded"
            >
              Call for Partners (Co-Design)
            </Link>
          </div>

          {/* Group 3: ABOUT & SAFETY */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-stone-500 tracking-widest px-2 pb-1 border-b border-[#D9D1C4]">
              METHODOLOGY & SAFETY
            </div>
            <Link
              href="/methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              Methodology & Evidence Specs
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              About & Governance
            </Link>
            <Link
              href="/safety"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-2 py-1 text-xs text-stone-700 hover:bg-[#EEE8DD] rounded"
            >
              Digital Safety Guide
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
