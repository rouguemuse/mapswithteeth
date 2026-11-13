import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArchivalCaseStudyGallery } from "./ArchivalCaseStudyGallery";

export function FourReformTracksSection() {
  const tracks = [
    {
      num: "MODEL A · PRIMARY WORKING MODEL",
      code: "MWT-MOD-A",
      title: "Continuity Receipt & Review Trace",
      lead: "Submission ≠ Review · Referral ≠ Assistance · Closure ≠ Resolution",
      description:
        "A minimal, participant-held record of the administrative path paired with an agency-side 9-status Review Trace (AGY-003 specimen) and Evidence Integrity safeguards. It is not a truth engine, allegation database, or automated credibility assessment.",
      details: [
        "Preserves 7 path elements: (1) What was received, (2) What was actually reviewed, (3) What action occurred, (4) What was referred elsewhere, (5) What fell outside authority, (6) What remains unresolved, (7) Who owns the next step.",
        "Client-side cryptographic baseline digest supports change detection without claiming evidentiary authentication or agency receipt.",
      ],
      linkText: "Explore Model A & Continuity Standard",
      href: "/continuity",
      iconSrc: "/images/case-study/raw_art_stitched_map_seams_4x3.jpg",
      badge: "IMPLEMENTED PROTOTYPE & SPEC",
    },
    {
      num: "MODEL B · PRIMARY WORKING MODEL",
      code: "MWT-MOD-B",
      title: "Personal Number Continuity",
      lead: "Shared-Account Billing Authority ≠ Adult Communication Identity",
      description:
        "Addresses the structural harm caused by conflating shared-account billing authority with control over another adult's mobile number—which anchors employment, banking, healthcare, schools, government services, 2FA authentication, account recovery, and personal communication.",
      details: [
        "Explicitly distinguishes 6 dimensions: (1) Billing responsibility, (2) Authenticated adult line-user identity, (3) Number continuity & transfer, (4) Communication & security controls, (5) Device ownership, (6) Device debt & contractual obligations.",
        "Clear boundaries: A payer does not have to continue paying another adult's bill, legitimate debts do not disappear, and existing survivor protections (e.g., 47 U.S.C. § 345) do not cover every circumstance.",
      ],
      linkText: "Examine Model B: Personal Number Continuity",
      href: "/protection#digital",
      iconSrc: "/images/case-study/raw_art_telecom_signal_knot_4x3.jpg",
      badge: "POLICY RESEARCH & PROPOSED ARCHITECTURE",
    },
    {
      num: "APPLIED TRACK · PROTECTION & POLICY",
      code: "MWT-TRK-02",
      title: "Protection Without Continuity & Texas Sunset Lab",
      lead: "Pattern-Aware Review · Linked-Case Checks · Accountable Handoffs",
      description:
        "Applies the Continuity Standard to child-protection and domestic-violence seams, including submitted structural recommendations for the Texas DFPS 2026–2027 Sunset review (distinguishing submitted input from adopted policy).",
      details: [
        "Addresses linked-case review, pre-closure related-case checks, non-algorithmic cumulative-pattern review (3+ contacts in 90 days), designated responsibility, and preservation of review/decision history.",
        "Distinguishes participant inability, fear, or access barriers from willful refusal without pre-judging merits.",
      ],
      linkText: "Explore Protection & Sunset Policy Lab",
      href: "/policy",
      iconSrc: "/images/case-study/raw_art_radial_city_crimson_thread.jpg",
      badge: "SUBMITTED SUNSET INPUT & BRIEF v0.1",
    },
    {
      num: "APPLIED TRACK · EMPIRICAL FIELD LAYER",
      code: "MWT-TRK-04",
      title: "Resource Reachability & Bad Maps",
      lead: "A directory is not a route · Missing vs. Inaccessible vs. Defeated",
      description:
        "Our active Central Texas pilot audits whether published help is actually reachable given waitlists, residency gates, transit locks, lease termination statutes (Tex. Prop. Code § 92.016), and utility waivers.",
      details: [
        "47 canonical resources audited across 470 material semantic claim vectors and 1,070 detailed provenance QA assertions.",
        "Feeds empirical reachability failures into the 8-question System Change Map to identify the smallest effective intervention.",
      ],
      linkText: "Launch Barrier Matcher",
      href: "/find-help",
      iconSrc: "/images/case-study/raw_art_urban_grid_crimson_route.jpg",
      badge: "ACTIVE EMPIRICAL PILOT (47 RESOURCES)",
    },
  ];

  return (
    <section id="reform-tracks" className="space-y-8 scroll-mt-24 font-sans select-none">
      
      {/* Editorial Header */}
      <div className="border-b-2 border-[#11100F] pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#841F2B] font-bold uppercase tracking-widest block mb-2">
            § 02 · PRIMARY WORKING MODELS &amp; APPLIED REFORM TRACKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#11100F] tracking-tight">
            Two Primary Working Models. Four Applied Tracks.
          </h2>
        </div>
        <span className="font-mono text-xs text-[#4D4944] uppercase tracking-wider">
          [CONNECTED CONTINUITY ARCHITECTURE]
        </span>
      </div>

      {/* Unifying Principle Callout */}
      <div className="p-6 bg-[#11100F] text-[#F8F5EE] border-l-4 border-[#841F2B] rounded-xs space-y-2 shadow-lg">
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
          UNIFYING PRINCIPLE ACROSS MODEL A (CONTINUITY RECEIPT) &amp; MODEL B (PERSONAL NUMBER CONTINUITY)
        </span>
        <p className="font-serif italic text-lg sm:text-2xl text-white leading-relaxed">
          &ldquo;These two models demonstrate the same underlying principle in different environments: a change in administrative or financial authority should not automatically erase an individual’s continuity.&rdquo;
        </p>
        <p className="text-xs font-mono text-[#A39E94] pt-1">
          Model A preserves the administrative path across institutional handoffs · Model B preserves adult communication identity when shared-account billing arrangements change (presented as policy research &amp; proposed architecture, not an enacted entitlement or implemented carrier standard).
        </p>
      </div>

      {/* Asymmetric Alternating Grid with Authentic Visual Motifs */}
      <div className="grid md:grid-cols-2 gap-8 pt-2">
        {tracks.map((track) => {
          return (
            <div
              key={track.code}
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

                  {/* 4:3 Woodcut Cartography Motif Thumbnail */}
                  <div className="relative w-28 h-20 bg-[#11100F] border-2 border-[#11100F] rounded-xs overflow-hidden shrink-0 shadow-md">
                    <Image
                      src={track.iconSrc}
                      alt={track.title}
                      fill
                      className="object-cover"
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
                  <ul className="space-y-1.5 pt-2 border-t border-[#C4B69E]/60 text-xs text-[#11100F] font-sans leading-relaxed">
                    {track.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#841F2B] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* Interactive 4:3 Case Study Folios & Before/After Slider */}
      <div className="pt-6">
        <ArchivalCaseStudyGallery />
      </div>

    </section>
  );
}
