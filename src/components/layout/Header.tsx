"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Header({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Find Help", href: "/find-help" },
    { name: "Texas Pilot", href: "/texas" },
    { name: "Other Ways", href: "/other-ways-through" },
    { name: "Ask Us to Look", href: "/ask-us-to-look", highlight: true },
    { name: "How We Research", href: "/how-we-research" },
    { name: "About", href: "/about" },
    { name: "Feedback", href: "/feedback" },
    { name: "Built With Us", href: "/build-with-us" },
  ];

  return (
    <header className="bg-[#F5F1E8] text-[#1C1D1D] border-b border-[#D9D1C4] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Rebuilt Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center group py-2">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-[11px] uppercase tracking-wider transition-all ${
                    link.highlight
                      ? "bg-[#971F26] hover:bg-red-900 text-white font-bold ml-1.5 shadow-sm border border-[#971F26]"
                      : isActive
                      ? "text-[#1C1D1D] bg-[#EEE8DD] border-b-2 border-[#971F26] font-bold"
                      : "text-stone-700 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]/70 font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#D9D1C4] bg-[#EEE8DD] text-[#1C1D1D] hover:bg-stone-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D9D1C4] bg-[#F5F1E8] px-4 pt-3 pb-6 space-y-1.5 shadow-lg font-mono">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-xs uppercase tracking-wider transition-colors ${
                  link.highlight
                    ? "bg-[#971F26] text-white font-bold text-center mt-2 shadow-sm"
                    : isActive
                    ? "text-[#1C1D1D] bg-[#EEE8DD] font-bold border-l-4 border-[#971F26] pl-3"
                    : "text-stone-800 hover:text-[#1C1D1D] hover:bg-[#EEE8DD]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
