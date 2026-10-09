"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Compass } from "lucide-react";
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

  // Primary Clean Navigation Items
  const primaryNav = [
    { name: "Continuity Standard", href: "/continuity" },
    { name: "Protection & Access", href: "/protection" },
    { name: "Policy & Systems", href: "/policy" },
    { name: "Writing", href: "/writing" },
    { name: "Partners", href: "/for-partners" },
  ];

  const isMoreActive = [
    "/protection",
    "/the-gap",
    "/bad-maps",
    "/other-ways-through",
    "/texas",
    "/ask-us-to-look",
    "/bridge",
    "/how-it-works",
    "/how-we-research",
    "/methodology",
    "/technical",
    "/about",
    "/feedback",
    "/support",
    "/safety",
    "/governance",
    "/continuity/safeguards",
    "/standard/safeguards",
  ].some((href) => pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="bg-mwt-ivory/95 text-mwt-black border-b border-[#E2DACB] sticky top-0 z-40 backdrop-blur-md select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 md:gap-4">
          {/* Brand Block */}
          <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none focus:ring-2 focus:ring-mwt-oxblood rounded-xs">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation & Prominent Find Help */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-3 xl:gap-4 font-mono">
            {/* Prominent Find Help Action */}
            <Link
              href="/find-help"
              className={`px-3.5 py-2 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs border ${
                pathname === "/find-help" || pathname.startsWith("/find-help/")
                  ? "bg-mwt-oxblood-dark text-white border-mwt-oxblood-dark"
                  : "bg-mwt-oxblood hover:bg-mwt-oxblood-dark text-white border-mwt-oxblood"
              }`}
            >
              <Compass className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Find Help</span>
            </Link>

            {/* Core Destinations */}
            <nav className="flex items-center space-x-1" aria-label="Main Navigation">
              {primaryNav.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2.5 py-1.5 rounded-xs text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-mwt-black bg-mwt-parchment font-bold border-b-2 border-mwt-oxblood"
                        : "text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/70 font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* More Grouped Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  aria-expanded={moreDropdownOpen}
                  className={`px-2.5 py-1.5 rounded-xs text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-mwt-oxblood ${
                    isMoreActive || moreDropdownOpen
                      ? "text-mwt-black bg-mwt-parchment font-bold"
                      : "text-mwt-graphite hover:text-mwt-black hover:bg-mwt-parchment/70 font-medium"
                  }`}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreDropdownOpen ? "rotate-180 text-mwt-oxblood" : "text-mwt-graphite"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-mwt-ivory border-2 border-mwt-black rounded-lg shadow-xl py-3 px-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left">
                    <div className="grid grid-cols-1 gap-3.5 font-mono">
                      {/* 1. Survivor & Direct Tools */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-mwt-oxblood border-b border-[#E2DACB] pb-1 mb-1.5">
                          Survivor &amp; Direct Tools
                        </div>
                        <ul className="space-y-0.5">
                          <li>
                            <Link
                              href="/other-ways-through"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Other Ways Through (Lateral Aid)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/texas"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Texas County Deep Dive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ask-us-to-look"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Ask Us to Look (Intake Review)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/safety"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Digital Safety Guide
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* 2. Research & Systems Intelligence */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-mwt-oxblood border-b border-[#E2DACB] pb-1 mb-1.5">
                          Research &amp; Systems
                        </div>
                        <ul className="space-y-0.5">
                          <li>
                            <Link
                              href="/the-gap"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              The Gap (The Seam Deficit)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/bad-maps"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Bad Maps (Failure Intelligence)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/how-it-works"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              How It Works (System Map)
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/continuity/safeguards"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors font-bold"
                            >
                              Evidence Integrity &amp; Safeguards
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* 3. Initiative & About */}
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-mwt-oxblood border-b border-[#E2DACB] pb-1 mb-1.5">
                          Initiative &amp; Organization
                        </div>
                        <ul className="space-y-0.5">
                          <li>
                            <Link
                              href="/about"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              About Maps With Teeth
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/methodology"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Methodology &amp; Standards
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/support"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Support &amp; Donate
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/governance"
                              className="block px-2 py-1 text-xs text-mwt-black hover:text-mwt-oxblood hover:bg-mwt-parchment rounded-xs transition-colors"
                            >
                              Governance &amp; Ethics
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile Actions: Find Help + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/find-help"
              className="px-3 py-1.5 bg-mwt-oxblood text-white rounded-xs text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs"
            >
              <Compass className="w-3 h-3" />
              <span>Find Help</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-mwt-black hover:text-mwt-oxblood focus:outline-none focus:ring-2 focus:ring-mwt-oxblood rounded-xs"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2DACB] bg-mwt-ivory px-4 pt-3 pb-6 space-y-4 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-mwt-oxblood tracking-wider px-2 py-1">
              Primary Destinations
            </div>
            {primaryNav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-xs text-mwt-black hover:bg-mwt-parchment font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1 pt-2 border-t border-[#E2DACB]">
            <div className="text-[10px] uppercase font-bold text-mwt-oxblood tracking-wider px-2 py-1">
              Tools &amp; Systems
            </div>
            <Link href="/other-ways-through" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              Other Ways Through (Lateral Aid)
            </Link>
            <Link href="/bad-maps" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              Bad Maps (Failure Intelligence)
            </Link>
            <Link href="/the-gap" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              The Seam Deficit
            </Link>
            <Link href="/continuity/safeguards" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              Evidence Integrity &amp; Safeguards
            </Link>
            <Link href="/safety" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              Digital Safety Guide
            </Link>
            <Link href="/about" className="block px-3 py-1.5 text-mwt-graphite hover:text-mwt-black">
              About &amp; Governance
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
