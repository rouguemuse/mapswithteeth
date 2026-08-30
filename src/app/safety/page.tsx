import React from "react";
import Link from "next/link";
import { ShieldAlert, Smartphone, Wifi, Clock, Lock, Compass, EyeOff, LogOut, ArrowRight } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              DEVICE PRIVACY & DIGITAL RISK MITIGATION
            </span>
          </div>
          <span className="coord-tick">[PROTOCOL: SEC-SAFETY-V0]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Digital Safety & Device Privacy Guide
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
          Understanding browser traces, device monitoring, shared family accounts, and safe searching techniques when escaping coercive control or stalking.
        </p>
      </div>

      {/* Immediate Danger Callout */}
      <div className="p-5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-lg space-y-2 shadow-2xs">
        <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold text-xs uppercase">
          <ShieldAlert className="w-4 h-4" />
          <span>If you are in immediate physical danger:</span>
        </div>
        <p className="text-stone-900 font-sans text-xs sm:text-sm leading-relaxed">
          Call <strong>911</strong> or contact the <strong>National Domestic Violence Hotline: 1-800-799-SAFE (7233)</strong> or text &ldquo;START&rdquo; to <strong>88788</strong> from a safe phone.
        </p>
      </div>

      {/* Digital Realities Grid */}
      <div className="grid gap-4 sm:grid-cols-2 text-xs text-stone-800">
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#1C1D1D] text-sm font-serif">
            <Smartphone className="w-4 h-4 text-[#971F26]" />
            <span>1. Using a Safer Device</span>
          </div>
          <p className="leading-relaxed text-stone-700 font-sans">
            If someone has physical or administrative access to your phone or laptop, they may have installed monitoring software (stalkerware) or keyloggers. Whenever possible, use a device at a public library, school, community center, or trusted friend&apos;s home.
          </p>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#1C1D1D] text-sm font-serif">
            <Wifi className="w-4 h-4 text-[#971F26]" />
            <span>2. Shared Wi-Fi & Home Routers</span>
          </div>
          <p className="leading-relaxed text-stone-700 font-sans">
            Home Wi-Fi routers record DNS logs of visited domains. If you are connected to a shared home network, anyone with router admin access can see which websites were visited. Use cellular data or public Wi-Fi when researching sensitive resources.
          </p>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#1C1D1D] text-sm font-serif">
            <Lock className="w-4 h-4 text-[#971F26]" />
            <span>3. Cloud & Family Account Syncing</span>
          </div>
          <p className="leading-relaxed text-stone-700 font-sans">
            Apple Family Sharing and Google Family Link can automatically sync browser history, location data, photo backups, and installed applications across devices. If your accounts are linked, open a private browsing window on a non-synced account.
          </p>
        </div>

        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg p-5 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#1C1D1D] text-sm font-serif">
            <Clock className="w-4 h-4 text-[#971F26]" />
            <span>4. Clearing Browser History Safely</span>
          </div>
          <p className="leading-relaxed text-stone-700 font-sans">
            Clearing your browser history completely can trigger suspicion if an abuser routinely inspects your phone. A safer technique is deleting only specific search items or using a private/incognito session.
          </p>
        </div>
      </div>

      {/* Quick Exit Feature Notice */}
      <section className="p-6 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg space-y-3 shadow-2xs bg-grid-atlas">
        <div className="flex items-center gap-2 text-[#971F26] font-mono font-bold text-xs uppercase">
          <EyeOff className="w-4 h-4" />
          <span>Maps With Teeth Built-in Quick Exit</span>
        </div>
        <p className="text-xs text-stone-800 font-sans leading-relaxed">
          At any time while browsing Maps With Teeth, press the <kbd className="bg-[#F5F1E8] text-[#1C1D1D] px-1.5 py-0.5 rounded border border-[#1C1D1D] font-mono font-bold">ESC</kbd> key twice or click the red <strong>QUICK EXIT</strong> button in the top navigation bar. This immediately replaces the browser session with a neutral weather forecast.
        </p>
      </section>
    </div>
  );
}
