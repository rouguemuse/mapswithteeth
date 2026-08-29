"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Shield, Search, Sparkles } from "lucide-react";

import Image from "next/image";

export function Header({ onOpenSafeBrowsing }: { onOpenSafeBrowsing: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Find Help", href: "/find-help" },
    { name: "Texas", href: "/texas" },
    { name: "Other Ways Through", href: "/other-ways-through" },
    { name: "Ask Us to Look", href: "/ask-us-to-look", highlight: true },
    { name: "How We Research", href: "/how-we-research" },
    { name: "About", href: "/about" },
    { name: "Build With Us", href: "/build-with-us" },
    { name: "Support", href: "/support" },
  ];

  return (
    <header className="bg-brand-charcoal text-stone-100 border-b border-stone-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Editorial Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-stone-900 border border-stone-700 flex items-center justify-center p-1 group-hover:border-brand-ruby transition-colors overflow-hidden shrink-0 shadow-inner">
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
              <span className="font-serif font-black tracking-wider text-lg uppercase text-white block leading-none">
                MAPS WITH TEETH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-stone-400 font-mono block mt-0.5">
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
                  className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-colors ${
                    link.highlight
                      ? "bg-brand-ruby text-white hover:bg-red-700 font-bold ml-1 shadow-sm"
                      : isActive
                      ? "text-white bg-stone-800 border-b-2 border-brand-ruby"
                      : "text-stone-300 hover:text-white hover:bg-stone-800/60"
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
              className="p-2 rounded text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-charcoal border-b border-stone-800 px-4 pt-2 pb-6 space-y-1 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-sm font-semibold tracking-wide uppercase ${
                  link.highlight
                    ? "bg-brand-ruby text-white font-bold"
                    : isActive
                    ? "bg-stone-800 text-white border-l-4 border-brand-ruby"
                    : "text-stone-300 hover:bg-stone-800 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-stone-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSafeBrowsing();
              }}
              className="w-full text-left px-3 py-2 text-xs text-stone-400 hover:text-white flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-brand-ruby" />
              <span>Digital Safety & Device Privacy Notice</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
