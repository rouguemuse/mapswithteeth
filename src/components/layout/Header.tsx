"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";

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
    { name: "Build With Us", href: "/build-with-us" },
  ];

  return (
    <header className="bg-brand-paper text-brand-charcoal border-b border-brand-sand sticky top-0 z-40 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Editorial Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-brand-ivory border border-stone-300 flex items-center justify-center p-1 group-hover:border-brand-oxblood transition-colors overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/logo.png"
                alt="Maps With Teeth Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-serif font-black tracking-wider text-base sm:text-lg uppercase text-brand-charcoal block leading-none">
                MAPS WITH TEETH
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-stone-500 font-mono block mt-0.5">
                Barrier-First Resource Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold font-mono transition-all ${
                    link.highlight
                      ? "bg-brand-oxblood text-white hover:bg-red-900 font-bold ml-1 shadow-sm"
                      : isActive
                      ? "text-brand-charcoal bg-stone-200/70 border-b-2 border-brand-oxblood font-bold"
                      : "text-stone-600 hover:text-brand-charcoal hover:bg-stone-200/50"
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
              className="p-2 rounded text-stone-600 hover:text-brand-charcoal hover:bg-stone-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-brand-charcoal" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-sand bg-brand-paper px-4 pt-3 pb-6 space-y-1 animate-fadeIn shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-colors ${
                  link.highlight
                    ? "bg-brand-oxblood text-white font-bold text-center mt-2 shadow-sm"
                    : isActive
                    ? "text-brand-charcoal bg-stone-200 font-bold border-l-4 border-brand-oxblood pl-3"
                    : "text-stone-700 hover:text-brand-charcoal hover:bg-stone-100"
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
