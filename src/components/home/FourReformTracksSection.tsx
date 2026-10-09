import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, RefreshCw, ShieldAlert, Smartphone, Compass } from "lucide-react";

export function FourReformTracksSection() {
  const tracks = [
    {
      num: "TRACK A",
      code: "MWT-TRK-01",
      title: "Administrative Continuity",
      lead: "Received ≠ Reviewed · Referred ≠ Accepted",
      description:
        "Standardized institutional handoffs, explicit milestone ownership, Review Trace disposition logging, and closed-loop referrals that prevent matters from evaporating into bureaucratic seams.",
      linkText: "Explore Continuity Standard",
      href: "/continuity",
      iconSrc: "/images/art/motif_hands_bridging_perfect.png",
      badge: "CORE SPECIFICATION",
    },
    {
      num: "TRACK B",
      code: "MWT-TRK-02",
      title: "Protection Without Continuity",
      lead: "Pattern-Aware Review & Cumulative Harm",
      description:
        "Addressing what happens when repeat domestic violence, stalking, and harassment are processed as disconnected incidents—distinguishing participant inability from refusal without pre-judging merits.",
      linkText: "Explore Protection Reform",
      href: "/protection",
      iconSrc: "/images/art/motif_human_silhouette_clean.png",
      badge: "CROSS-JURISDICTION",
    },
    {
      num: "TRACK C",
      code: "MWT-TRK-03",
      title: "Digital Access & Control",
      lead: "Account Hijacking & Infrastructure Seams",
      description:
        "Protecting against communication cutoff, phone/carrier line interference, credential theft, and digital harassment that lock survivors out of hearings, benefits, and emergency assistance.",
      linkText: "View Digital Safeguards",
      href: "/protection#digital",
      iconSrc: "/images/art/motif_compass.png",
      badge: "INFRASTRUCTURE",
    },
    {
      num: "TRACK D",
      code: "MWT-TRK-04",
      title: "Resource Reachability",
      lead: "A directory is not a route.",
      description:
        "Our active Central Texas pilot audits whether help is actually reachable given waitlists, transit locks, lease termination statutes (Tex. Prop. Code § 92.016), and utility waivers.",
      linkText: "Launch Barrier Matcher",
      href: "/find-help",
      iconSrc: "/images/art/motif_texas_route.png",
      badge: "ACTIVE PILOT",
    },
  ];

  return (
    <section id="reform-tracks" className="space-y-8 scroll-mt-24 font-sans select-none">
      
      {/* Editorial Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 02 · ARCHITECTURAL REFORM AGENDA
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            The Four Pillars of Continuity Reform
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [CONNECTED REFORM INFRASTRUCTURE]
        </span>
      </div>

      <p className="text-lg text-[#4D4944] font-serif max-w-3xl leading-relaxed">
        Maps With Teeth organizes its intervention into four interconnected tracks. Each track addresses a specific seam where accountability, information, or human agency fractures.
      </p>

      {/* Asymmetric Alternating Grid with Authentic Visual Motifs */}
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        {tracks.map((track) => {
          return (
            <div
              key={track.num}
              className="bg-[#EEE8DB] border-2 border-[#11100F] p-6 sm:p-8 rounded-xs shadow-md flex flex-col justify-between space-y-6 group hover:border-[#841F2B] transition-all"
            >
              <div className="space-y-4">
                
                {/* Header Strip with Track Code and Visual Motif */}
                <div className="flex items-start justify-between border-b border-[#C4B69E] pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-[#841F2B] uppercase">
                        {track.num}
                      </span>
                      <span className="text-[10px] font-mono text-[#4D4944]">
                        [{track.code}]
                      </span>
                    </div>
                    <span className="bg-[#11100F] text-white text-[9px] font-mono uppercase px-2 py-0.5 rounded-xs font-bold">
                      {track.badge}
                    </span>
                  </div>

                  {/* Motif Thumbnail */}
                  <div className="relative w-20 h-14 bg-[#11100F] border border-[#332E29] rounded-xs overflow-hidden shrink-0 p-1 shadow-inner">
                    <Image
                      src={track.iconSrc}
                      alt={track.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-[#11100F] group-hover:text-[#841F2B] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs font-mono font-bold uppercase text-[#841F2B]">
                    {track.lead}
                  </p>
                  <p className="text-sm text-[#4D4944] font-sans leading-relaxed pt-1">
                    {track.description}
                  </p>
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#C4B69E]">
                <Link
                  href={track.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#11100F] group-hover:text-[#841F2B] transition"
                >
                  <span>{track.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
