"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Header({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Primary top-level navigation items
  const primaryNav = [
    { name: "Find Help", href: "/find-help" },
    { name: "Texas Pilot", href: "/texas" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ];

  // Secondary items in the "More" dropdown
  const moreNav = [
    { name: "Other Ways", href: "/other-ways-through", desc: "Condition-dependent lateral safety nets" },
    { name: "How We Research", href: "/how-we-research", desc: "10-step investigative newsroom methodology" },
    { name: "Feedback", href: "/feedback", desc: "Stakeholder & frontline review" },
    { name: "Build With Us", href: "/build-with-us", desc: "Collaborator & coalition intake" },
    { name: "Governance", href: "/governance", desc: "Founding Board & Advisory Circle" },
    { name: "Support", href: "/support", desc: "Support the pilot initiative" },
  ];

  const isMoreActive = moreNav.some(
    (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  );

  return (
    <header className="bg-[#F5F1E8] text-[#1C1D1D] border-b border-[#D9D1C4] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-6 md:gap-10">
          {/* Brand Block */}
          <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation & Primary CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-6 font-mono">
            {/* Top-Level Links */}
            <nav className="flex items-center space-x-1">
              {primaryNav.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-b-2 border-[#971F26]"
                        : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* More ▾ Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`px-3 py-1.5 rounded-md text-xs uppercase tracking-wider transition-colors flex items-center gap-1 focus:outline-none ${
                    isMoreActive || moreDropdownOpen
                      ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold"
                      : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                  }`}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${moreDropdownOpen ? "rotate-180 text-[#971F26]" : "text-stone-500"}`} />
                </button>

                {/* Dropdown Menu Panel */}
                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                    <div className="px-3 py-1.5 border-b border-[#D9D1C4] mb-1 font-mono text-[9px] uppercase tracking-widest text-[#971F26] font-bold">
                      ADDITIONAL ROUTES & GOVERNANCE
                    </div>
                    {moreNav.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`block px-3.5 py-2 transition-colors ${
                            isActive
                              ? "bg-[#EEE8DD] text-[#1C1D1D] font-bold border-l-3 border-[#971F26]"
                              : "hover:bg-[#EEE8DD] text-stone-800"
                          }`}
                        >
                          <div className="text-xs uppercase font-bold tracking-wider text-[#1C1D1D]">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-stone-600 font-sans font-normal normal-case leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Single Primary Oxblood CTA on the Far Right */}
            <Link
              href="/ask-us-to-look"
              className="px-4 py-2 bg-[#971F26] hover:bg-red-900 text-white rounded-md text-xs font-bold uppercase tracking-wider font-mono shadow-2xs transition-all border border-[#971F26] shrink-0"
            >
              Ask Us to Look
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/ask-us-to-look"
              className="px-2.5 py-1.5 bg-[#971F26] text-white rounded text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs"
            >
              Ask Us to Look
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
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D9D1C4] bg-[#F5F1E8] px-4 pt-3 pb-6 space-y-3 shadow-lg font-mono">
          <div className="space-y-1">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-wider px-2 pb-1">
              Primary Navigation
            </div>
            {primaryNav.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]"
                      : "text-stone-800 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-1 pt-2 border-t border-[#D9D1C4]">
            <div className="text-[10px] uppercase font-bold text-[#971F26] tracking-wider px-2 pb-1">
              More Routes & Governance
            </div>
            {moreNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-1.5 rounded text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26]"
                      : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
