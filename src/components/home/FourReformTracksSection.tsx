import React from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, ShieldAlert, Smartphone, Compass } from "lucide-react";

export function FourReformTracksSection() {
  const tracks = [
    {
      num: "A",
      title: "Administrative Continuity",
      icon: RefreshCw,
      lead: "Received ≠ Reviewed · Referred ≠ Accepted",
      description:
        "Standardized institutional handoffs, explicit milestone ownership, Review Trace disposition logging, and closed-loop referrals that prevent matters from evaporating into bureaucratic seams.",
      linkText: "Explore Continuity Standard",
      href: "/continuity",
    },
    {
      num: "B",
      title: "Protection Without Continuity",
      icon: ShieldAlert,
      lead: "Pattern-Aware Review & Cumulative Harm",
      description:
        "Addressing what happens when repeat domestic violence, stalking, and harassment are processed as disconnected incidents—distinguishing participant inability from refusal without pre-judging merits.",
      linkText: "Explore Protection Reform",
      href: "/protection",
    },
    {
      num: "C",
      title: "Digital Access & Control",
      icon: Smartphone,
      lead: "Account Hijacking & Infrastructure Seams",
      description:
        "Protecting against communication cutoff, phone/carrier line interference, credential theft, and digital harassment that lock survivors out of hearings, benefits, and emergency assistance.",
      linkText: "View Digital Safeguards",
      href: "/protection#digital",
    },
    {
      num: "D",
      title: "Resource Reachability",
      icon: Compass,
      lead: "A directory is not a route.",
      description:
        "Our active Central Texas pilot audits whether help is actually reachable given waitlists, transit locks, lease termination statutes (Tex. Prop. Code § 92.016), and utility waivers.",
      linkText: "Launch Barrier Matcher",
      href: "/find-help",
    },
  ];

  return (
    <section id="reform-tracks" className="space-y-6 scroll-mt-24 font-sans select-none">
      {/* Header */}
      <div className="border-b border-[#C4B69E] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-mwt-oxblood font-bold uppercase tracking-wider block">
            WHERE IT MATTERS · FOUR CONNECTED REFORM TRACKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black tracking-tight">
            The four pillars of continuity reform
          </h2>
        </div>
        <span className="coord-tick">[FOUR-TRACK ARCHITECTURE]</span>
      </div>

      {/* 4 Cards (Grid: 1 col on mobile, 2 on tablet, 4 on desktop) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tracks.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.num}
              className="bg-mwt-parchment border-2 border-mwt-black rounded-lg p-5 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-mwt-oxblood">
                    TRACK {t.num}
                  </span>
                  <div className="p-2 bg-mwt-ivory border border-[#C4B69E] rounded-xs">
                    <Icon className="w-4 h-4 text-mwt-oxblood" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-mwt-black leading-snug">
                  {t.title}
                </h3>

                <p className="text-xs font-semibold font-mono text-mwt-oxblood">
                  {t.lead}
                </p>

                <p className="text-xs text-mwt-graphite leading-relaxed font-sans">
                  {t.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#C4B69E]">
                <Link
                  href={t.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-mwt-black hover:text-mwt-oxblood transition"
                >
                  <span>{t.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
