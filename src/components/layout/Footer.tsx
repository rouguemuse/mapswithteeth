import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, HeartHandshake, AlertCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-stone-400 border-t border-stone-800 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Philosophy */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded bg-stone-900 border border-stone-800 p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Maps With Teeth Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-sm tracking-wider uppercase block leading-none">
                  MAPS WITH TEETH
                </span>
                <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest block mt-0.5">
                  Public-Interest Initiative
                </span>
              </div>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed max-w-lg">
              <strong>The Barrier-First Principle:</strong> People do not experience their problem as a service category. They experience a barrier. Maps With Teeth maps across statutory escape routes, workplaces, professional associations, utilities, charities, and unexpected funds to locate practical ways through.
            </p>
            <p className="text-[11px] text-stone-500 font-mono">
              Designed as a public-interest research initiative launched initially as a Fiscally Sponsored Charitable Project with proof of concept in Central Texas.
            </p>
          </div>

          {/* Directory Navigation */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Resource Layers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/find-help" className="hover:text-stone-200 transition-colors">
                  Find Help (Barrier Explorer)
                </Link>
              </li>
              <li>
                <Link href="/texas" className="hover:text-stone-200 transition-colors">
                  Layer 1: Texas Deep Dive
                </Link>
              </li>
              <li>
                <Link href="/other-ways-through" className="hover:text-stone-200 transition-colors">
                  Layer 2: Other Ways Through
                </Link>
              </li>
              <li>
                <Link href="/ask-us-to-look" className="hover:text-stone-200 transition-colors font-medium text-brand-ruby">
                  Layer 3: Ask Us to Look
                </Link>
              </li>
              <li>
                <Link href="/how-we-research" className="hover:text-stone-200 transition-colors">
                  Methodology & Source Hierarchy
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiative & Governance */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Project & Governance
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-stone-200 transition-colors">
                  About Maps With Teeth
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-stone-200 transition-colors">
                  Pilot Budget & Governance
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-stone-200 transition-colors text-brand-ruby font-medium">
                  Founding Board & Governance
                </Link>
              </li>
              <li>
                <Link href="/build-with-us" className="hover:text-stone-200 transition-colors">
                  Collaborator Intake
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-stone-200 transition-colors">
                  Digital Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-stone-200 transition-colors text-stone-500 font-mono text-[10px]">
                  Researcher Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Crisis Disclaimers */}
        <div className="border-t border-stone-800/80 mt-8 pt-6 space-y-3 text-[11px] leading-relaxed text-stone-400">
          <div className="flex items-start gap-2 bg-stone-900/60 border border-stone-800 p-3 rounded text-stone-300">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong>Legal & Emergency Notice:</strong> Maps With Teeth provides educational and navigational resource information. We do not provide legal representation or 24/7 emergency dispatch. If you are in immediate physical danger, call 911 or the National Domestic Violence Hotline (1-800-799-7233 or text START to 88788).
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-stone-400 text-[10px]">
            <span>© {new Date().getFullYear()} Maps With Teeth. Built with data-minimization principles. Zero tracking pixels.</span>
            <span>Texas-First Pilot Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
