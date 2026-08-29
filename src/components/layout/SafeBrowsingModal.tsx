"use client";

import React from "react";
import { X, ShieldAlert, Smartphone, Wifi, Clock, AlertTriangle, ExternalLink, LogOut } from "lucide-react";

export function SafeBrowsingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const triggerQuickExit = () => {
    window.location.replace("https://www.weather.com");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-brand-charcoal border border-stone-700 text-stone-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 border-b border-stone-800 pb-3">
          <div className="p-2 bg-red-950/60 border border-brand-ruby/50 rounded text-brand-ruby">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Digital & Device Safety Notice</h2>
            <p className="text-xs text-stone-400">Understanding device monitoring, network trails, and safe searching</p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-stone-300">
          <div className="bg-amber-950/30 border border-amber-800/40 rounded p-3 text-amber-200 text-xs">
            <strong className="font-semibold block mb-1">Important Reality:</strong>
            A &ldquo;Quick Exit&rdquo; button changes your current screen, but it does <strong>not</strong> erase your browser history, delete cookies, or stop spyware/keyloggers already installed on your device.
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-stone-900/80 border border-stone-800 rounded p-3">
              <div className="flex items-center gap-2 font-semibold text-white text-xs mb-1">
                <Smartphone className="w-4 h-4 text-brand-ruby" />
                <span>Use a Safer Device</span>
              </div>
              <p className="text-xs text-stone-400">
                If possible, use a device the person has never had physical access to: a computer at a public library, school, workplace, or a trusted friend&apos;s phone.
              </p>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded p-3">
              <div className="flex items-center gap-2 font-semibold text-white text-xs mb-1">
                <Wifi className="w-4 h-4 text-brand-ruby" />
                <span>Shared Wi-Fi & Accounts</span>
              </div>
              <p className="text-xs text-stone-400">
                Home Wi-Fi routers log visited domains. Shared iCloud or Google Family accounts may sync your browsing tabs, search history, and downloads across devices.
              </p>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded p-3">
              <div className="flex items-center gap-2 font-semibold text-white text-xs mb-1">
                <Clock className="w-4 h-4 text-brand-ruby" />
                <span>Private / Incognito Mode</span>
              </div>
              <p className="text-xs text-stone-400">
                Private browsing prevents history from being stored locally on your device after you close the tab, but it does not hide activity from network administrators or spyware.
              </p>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded p-3">
              <div className="flex items-center gap-2 font-semibold text-white text-xs mb-1">
                <AlertTriangle className="w-4 h-4 text-brand-ruby" />
                <span>Clearing History Warning</span>
              </div>
              <p className="text-xs text-stone-400">
                Suddenly clearing your entire browser history can sometimes look suspicious to a controlling partner. Consider deleting only specific pages rather than all data.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-3">
            <h3 className="font-semibold text-white text-xs mb-1">24/7 Immediate Crisis Contacts (Free & Confidential):</h3>
            <ul className="text-xs space-y-1 text-stone-300">
              <li>• <strong>National Domestic Violence Hotline:</strong> 1-800-799-SAFE (7233) or text &ldquo;START&rdquo; to 88788</li>
              <li>• <strong>National Deaf Domestic Violence Hotline:</strong> VP 855-812-1001</li>
              <li>• <strong>StrongHearts Native Helpline:</strong> 1-844-7NATIVE (762-8483)</li>
              <li>• <strong>Texas Advocacy Project Legal Line:</strong> 1-800-374-HOPE (4673)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-800 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-medium transition-colors"
          >
            Close & Continue
          </button>

          <button
            onClick={triggerQuickExit}
            className="px-4 py-2 bg-brand-ruby hover:bg-red-700 text-white rounded text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
          >
            <LogOut className="w-4 h-4" />
            <span>Leave Site Now (Quick Exit)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
