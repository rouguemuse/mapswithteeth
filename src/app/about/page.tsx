import React from "react";
import Link from "next/link";
import { Compass, Layers, ShieldCheck, ArrowRight, Target, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-brand-ruby mb-2">
          <Compass className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Initiative & Philosophy
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          About Maps With Teeth
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
          The public-interest initiative bridging the systemic gaps between domestic violence support, workplace hardship funds, utility regulations, and statutory escape mechanisms.
        </p>
      </div>

      {/* The Problem */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-white">
          The Problem: Fragmented & Siloed Systems
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          Survivors attempting to leave or stabilize are frequently sent in circles through siloed, disconnected bureaucracies:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 text-xs text-stone-300">
          <div className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg">
            • One agency handles legal services, but cannot pay a deposit.
          </div>
          <div className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg">
            • Another operates emergency shelter, but requires leaving a pet behind.
          </div>
          <div className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg">
            • A restaurant-worker hardship fund could pay the rent, but nobody mentions it.
          </div>
          <div className="p-3 bg-brand-charcoal border border-stone-800 rounded-lg">
            • A federal telecom statute could separate a phone line, but police dismiss it as a &ldquo;civil matter.&rdquo;
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="space-y-4 p-6 bg-stone-900/80 border-l-4 border-brand-ruby rounded-r-xl">
        <h2 className="text-lg font-serif font-bold text-white">
          Our Defining Philosophy
        </h2>
        <p className="text-sm text-stone-200 leading-relaxed font-serif italic">
          &ldquo;The question should not only be &apos;What domestic violence services exist?&apos; <br />
          It should also be: &apos;What is preventing this person from becoming safer today, and what existing system can remove that barrier?&apos;&rdquo;
        </p>
        <p className="text-xs text-stone-400 font-sans">
          People do not experience their crisis as a service category. They experience a specific barrier—a \$600 deposit, a tracked phone, a dog with nowhere to go, or \$40 of gas to reach family. Maps With Teeth maps solutions to obstacles.
        </p>
      </section>

      {/* The Bridge Navigator Concept */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-white">
          The Bridge Navigator Concept
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          The directory is our first public step. The broader vision for Maps With Teeth includes hands-on <strong>Bridge Navigation</strong>—cross-system advocates who help participants navigate across legal, housing, telecom, and employment systems, supported by a flexible <strong>Survivor Gap Fund</strong> to pay for non-traditional bottlenecks that existing systems refuse to cover.
        </p>
      </section>

      {/* Long-Term Vision */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-white">
          Long-Term Vision: Revealing the Ecosystem&apos;s Holes
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          The directory helps people navigate the system. The structured resource requests reveal where the system has holes—the counties with no transit aid, the pet boarding deserts, and the impossible documentation barriers. Maps With Teeth exists to eventually help fill the holes that cannot be navigated around.
        </p>
      </section>

      {/* Next Step CTAs */}
      <div className="border-t border-stone-800 pt-6 flex flex-wrap gap-4">
        <Link
          href="/support"
          className="px-5 py-2.5 bg-brand-ruby hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md"
        >
          <span>View Pilot Framework & Governance</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/build-with-us"
          className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 rounded-lg text-xs font-bold flex items-center gap-2"
        >
          <span>Collaborate With Maps With Teeth</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
