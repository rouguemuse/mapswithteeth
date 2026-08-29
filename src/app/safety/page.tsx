import React from "react";
import Link from "next/link";
import { ShieldAlert, Smartphone, Wifi, Clock, Lock, Key, AlertTriangle, ExternalLink } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-brand-ruby mb-2">
          <ShieldAlert className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Digital Safety & Device Privacy
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Digital & Technology Safety Guide
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
          Understanding browser traces, device monitoring, shared family accounts, and safe searching techniques when escaping coercive control or stalking.
        </p>
      </div>

      {/* Immediate Danger Callout */}
      <div className="p-4 bg-red-950/40 border-l-4 border-brand-ruby rounded-r-xl space-y-2 text-xs">
        <strong className="text-white text-sm block font-serif">
          If you are in immediate physical danger:
        </strong>
        <p className="text-stone-300 leading-relaxed">
          Call 911 or reach out to the <strong>National Domestic Violence Hotline: 1-800-799-SAFE (7233)</strong> or text &ldquo;START&rdquo; to 88788 from a safe phone.
        </p>
      </div>

      {/* Digital Realities Grid */}
      <div className="grid gap-4 sm:grid-cols-2 text-xs text-stone-300">
        <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Smartphone className="w-4 h-4 text-brand-ruby" />
            <span>1. Using a Safer Device</span>
          </div>
          <p className="leading-relaxed text-stone-400">
            If someone has physical or administrative access to your phone or laptop, they may have installed monitoring software (stalkerware) or keyloggers. Whenever possible, use a device at a public library, school, community center, or trusted friend&apos;s home.
          </p>
        </div>

        <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Wifi className="w-4 h-4 text-brand-ruby" />
            <span>2. Shared Wi-Fi & Home Routers</span>
          </div>
          <p className="leading-relaxed text-stone-400">
            Home Wi-Fi routers record DNS logs of visited domains. If you are connected to a shared home network, anyone with router admin access can see which websites were visited. Use cellular data or public Wi-Fi when researching sensitive resources.
          </p>
        </div>

        <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Lock className="w-4 h-4 text-brand-ruby" />
            <span>3. Cloud & Family Account Syncing</span>
          </div>
          <p className="leading-relaxed text-stone-400">
            Apple Family Sharing and Google Family Link can sync Safari tabs, Chrome browsing history, location data, and call logs across all linked devices automatically. Check your device settings to verify whether account syncing is active.
          </p>
        </div>

        <div className="bg-brand-charcoal border border-stone-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Clock className="w-4 h-4 text-brand-ruby" />
            <span>4. The Risk of Erasing All History</span>
          </div>
          <p className="leading-relaxed text-stone-400">
            Completely wiping all browser history can sometimes raise suspicion if a controlling person regularly checks your device. Consider deleting individual history entries or visiting routine benign websites (weather, news, recipes) to leave normal browsing history.
          </p>
        </div>
      </div>

      {/* Federal Telecom Line Separation */}
      <section className="bg-stone-900/60 border border-stone-800 rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-serif font-bold text-white">
          Safe Connections Act (Federal Line Separation)
        </h2>
        <p className="text-xs text-stone-300 leading-relaxed">
          Under the federal Safe Connections Act (47 U.S.C. § 345), wireless carriers (AT&T, Verizon, T-Mobile) are legally required to separate your phone line from a shared family plan within two business days without penalty fees or notification to the primary account holder, upon submission of an advocate certification letter or protective order.
        </p>
        <Link
          href="/other-ways-through"
          className="text-xs text-brand-ruby hover:underline font-semibold inline-flex items-center gap-1"
        >
          <span>View Safe Connections Act Requirements in Layer 2 Library →</span>
        </Link>
      </section>
    </div>
  );
}
