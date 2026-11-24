"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  Scale,
  Lock,
  Smartphone,
  WifiOff,
  AlertTriangle,
  ArrowRight,
  GitBranch,
  Eye,
  CheckCircle2,
  FileText,
  UserX,
  Radio,
  FileCheck,
  ExternalLink,
  Info
} from "lucide-react";
import { ResourceMaterialsBlock } from "@/components/safeguards/ResourceMaterialsBlock";

export default function ProtectionPage() {
  const [activeTab, setActiveTab] = useState<"patterns" | "digital" | "barriers" | "intervention">("patterns");

  const coreQuestions = [
    {
      title: "Disconnected Incidents",
      q: "What happens when repeated harm is processed as disconnected incidents, and no institution has responsibility for the cumulative protection problem?",
      desc: "An agency reviews incident #4 in isolation, screening it out as low-level because it cannot legally see or evaluate incidents #1, #2, and #3 filed across municipal and county lines."
    },
    {
      title: "Inability vs Refusal",
      q: "How do institutions distinguish between a participant's inability to participate versus an affirmative refusal to cooperate?",
      desc: "When a survivor does not answer a phone call because their cellular account was hijacked or because answering creates immediate physical peril, the agency often logs 'refused services' or 'uncooperative'."
    },
    {
      title: "Administrative Seam Runaround",
      q: "Who owns the safety handoff when a matter crosses civil protective orders, criminal stalking, and housing lease breaks?",
      desc: "Police direct the victim to family court; family court directs them to housing authority; housing authority demands a police report that was never taken. The individual is left stranded in the seam."
    }
  ];

  const digitalAccessPatterns = [
    {
      icon: Smartphone,
      title: "Phone & Carrier Account Control",
      desc: "Unauthorized transfer of mobile lines, PIN hijacking, or primary subscriber line shutoffs that cut off access to two-factor authentication, attorney calls, and shelter intake lines.",
      safeguard: "Statutory Safe Connections Act line separation requests (47 U.S.C. § 345) and carrier documentation."
    },
    {
      icon: WifiOff,
      title: "Communication & Reporting Disruption",
      desc: "Strategic interference timed precisely during court hearings, intake appointments, or police callbacks, leaving victims unable to confirm scheduling.",
      safeguard: "Preserving alternative communication channels without treating missed contact as voluntary abandonment."
    },
    {
      icon: Lock,
      title: "Authentication & Credential Deprivation",
      desc: "Lockouts from email accounts, government benefits portals, child school records, and cloud document storage holding vital identity records.",
      safeguard: "Offline, client-side continuity records and local device vault exports that do not require cloud account logins."
    },
    {
      icon: Radio,
      title: "Technology-Enabled Surveillance & Harassment",
      desc: "Covert tracking devices, spyware, unauthorized access to shared home IoT devices, and location tracking through family-sharing accounts.",
      safeguard: "Digital safety triage, private browsing protocols, and strict distinction between reported interference and established unlawful conduct."
    }
  ];

  const interventionPrinciples = [
    {
      title: "Legally Authorized",
      desc: "Rooted in clear constitutional, statutory, and regulatory jurisdiction, not arbitrary or extralegal overreach."
    },
    {
      title: "Proportionate & Safety-Informed",
      desc: "Calibrated to the realistic danger and survivor constraints, recognizing that aggressive state action can inadvertently trigger lethal retaliation."
    },
    {
      title: "Appropriately Documented",
      desc: "Preserving what facts were reviewed, what authority governed, and what unresolved questions survived the decision."
    },
    {
      title: "Usable Next Step",
      desc: "Providing a concrete, reachable administrative milestone rather than a dead-end rejection or vague referral."
    },
    {
      title: "Appropriate Review Mechanisms",
      desc: "Ensuring procedural decisions can be audited, reviewed, and corrected without forcing the individual to start over from zero."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 select-none font-sans">
      {/* 1. Header & Overarching Framing */}
      <div className="border-b-2 border-mwt-black pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-mwt-crimson-seal">
            <ShieldAlert className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="mwt-kicker">
              PROTECTION WITHOUT CONTINUITY · SYSTEMS RESEARCH
            </span>
          </div>
          <span className="coord-tick">[DOMAIN: REPEAT HARM &amp; INSTITUTIONAL SEAMS]</span>
        </div>

        <div className="space-y-2">
          <h1 className="mwt-chapter-title text-mwt-black">
            Protection Without Continuity
          </h1>
          <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-mwt-crimson-seal font-bold">
            Cumulative Harm, Disconnected Incidents &amp; Digital Vulnerability
          </p>
        </div>

        <p className="mwt-quote-rule text-mwt-graphite">
          &ldquo;What happens when repeated harm is processed as disconnected incidents, and no institution has responsibility for the cumulative protection problem?&rdquo;
        </p>

        {/* Emergency Non-Claim Safety Banner (GOV.UK Urgent Left-Rule Callout) */}
        <div className="mwt-callout-urgent space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2 text-mwt-crimson-seal font-bold uppercase">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>CRITICAL SAFETY &amp; OPERATIONAL BOUNDARIES</span>
          </div>
          <p className="font-sans text-mwt-black text-xs sm:text-sm leading-relaxed">
            Maps With Teeth is a <strong>research and civic systems reform initiative</strong>. We do not provide emergency intervention, crisis hotline services, 911 dispatch, legal representation, or direct physical protection. If you are in immediate danger, please contact local emergency services or the National Domestic Violence Hotline (1-800-799-SAFE / text &apos;START&apos; to 88788).
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-mwt-graphite">
            <span>• No promise of automatic safety · Quick Exit via Escape key</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#digital"
                className="text-mwt-crimson-seal hover:text-mwt-black font-bold underline uppercase"
              >
                Jump to Model B ↓
              </a>
              <a
                href="#protection-tabs"
                className="text-mwt-black hover:text-mwt-crimson-seal font-bold underline uppercase"
              >
                4 Protection Tracks ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Three Foundational Seam Inquiries */}
      <div className="grid md:grid-cols-3 gap-4">
        {coreQuestions.map((item, idx) => (
          <div
            key={idx}
            className="mwt-ledger-card-light p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mwt-crimson-seal">
                SEAM INQUIRY 0{idx + 1}
              </span>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-mwt-black leading-snug">
                {item.title}
              </h3>
              <p className="text-xs font-mono font-semibold text-mwt-black italic leading-tight">
                &ldquo;{item.q}&rdquo;
              </p>
            </div>
            <p className="text-xs text-mwt-graphite leading-relaxed border-t border-mwt-border-paper pt-2.5 font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 2B. Model B: Personal Number Continuity (Primary Working Model) */}
      <section id="digital" className="mwt-light-surface rounded-xs p-5 sm:p-8 space-y-5 shadow-md scroll-mt-36 lg:scroll-mt-28">
        <div className="border-b-[1.5px] border-mwt-black pb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <span className="mwt-kicker text-mwt-crimson-seal block">
              FOLIO 03 · MODEL B · PRIMARY WORKING MODEL (POLICY RESEARCH &amp; PROPOSED ARCHITECTURE)
            </span>
            <h2 className="mwt-chapter-title text-mwt-black">
              Personal Number Continuity
            </h2>
          </div>
          <span className="px-2.5 py-1 bg-mwt-ink text-mwt-paper-muted font-mono text-[10px] font-bold uppercase rounded-xs">
            NOT AN ENACTED ENTITLEMENT OR IMPLEMENTED CARRIER STANDARD
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-mwt-black font-sans leading-relaxed">
          <p className="mwt-quote-rule text-mwt-crimson-seal font-bold">
            &ldquo;A change in administrative or financial authority should not automatically erase an individual’s continuity.&rdquo;
          </p>
          <p>
            <strong>The Structural Problem:</strong> Consumer telecommunications and digital ecosystems routinely conflate <strong>shared-account billing authority</strong> with <strong>control over another adult&apos;s communication identity</strong>. Today, an adult&apos;s mobile phone number is not merely a billing line—it is a foundational civic and digital identifier connecting employment, banking, healthcare, children&apos;s schools, government services, two-factor authentication (2FA), account recovery, and personal communication. When a primary account holder can unilaterally suspend, monitor, or refuse to release another adult&apos;s number, billing structure becomes an instrument of administrative erasure and coercive control.
          </p>
        </div>

        {/* 6 Separated Dimensions Matrix */}
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase text-mwt-black block">
            SIX DIMENSIONS SEPARATED BY THE PERSONAL NUMBER CONTINUITY MODEL:
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
            {[
              {
                num: "01",
                title: "Billing Responsibility",
                desc: "Who pays for current or future monthly carrier service charges."
              },
              {
                num: "02",
                title: "Authenticated Adult Line-User Identity",
                desc: "The actual adult human whose daily life, 2FA tokens, and institutional contacts are bound to the number."
              },
              {
                num: "03",
                title: "Number Continuity & Transfer",
                desc: "The ability of the authenticated adult line user to port or separate their existing telephone number to an independent account."
              },
              {
                num: "04",
                title: "Communication & Security Controls",
                desc: "Control over call/text logs, location visibility, SIM/eSIM changes, and account recovery PINs."
              },
              {
                num: "05",
                title: "Device Ownership",
                desc: "Physical and legal title to the mobile handset hardware itself."
              },
              {
                num: "06",
                title: "Device Debt & Contractual Obligations",
                desc: "Installment plan balances, equipment financing agreements, and prior contractual liabilities."
              }
            ].map((dim) => (
              <div key={dim.num} className="p-3.5 mwt-ledger-card-light space-y-1">
                <span className="font-mono text-[10px] font-bold text-mwt-crimson-seal uppercase block">
                  DIMENSION {dim.num}
                </span>
                <h3 className="font-display font-extrabold text-sm text-mwt-black">{dim.title}</h3>
                <p className="text-mwt-graphite leading-snug text-xs">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Legal, Financial & Statutory Caveats */}
        <div className="p-4 mwt-evidence-panel space-y-2 text-xs font-sans">
          <span className="font-mono font-bold text-mwt-crimson-seal uppercase block text-[11px]">
            EXPLICIT FINANCIAL, CONTRACTUAL &amp; STATUTORY BOUNDARIES:
          </span>
          <ul className="space-y-1 text-mwt-black leading-relaxed">
            <li>• <strong>No Forced Third-Party Payment:</strong> Separating communication identity from billing authority does <em>not</em> mean a payer is required to continue paying another adult&apos;s phone bill.</li>
            <li>• <strong>Legitimate Debts Do Not Disappear:</strong> Valid device installment agreements and contractual obligations are allocated transparently under applicable law rather than magically erased.</li>
            <li>• <strong>Limits of Existing Survivor Protections:</strong> While federal protections such as the Safe Connections Act (47 U.S.C. § 345; 47 CFR § 64.6402) establish important line-separation rights for covered survivors, they do not cover every circumstance and are frequently defeated in practice by documentation hurdles, carrier portal design, or authentication lockouts.</li>
            <li>• <strong>Development Status:</strong> Personal Number Continuity is presented as <strong>policy research and proposed architecture</strong>, not an enacted general entitlement or an implemented carrier standard.</li>
          </ul>
        </div>
      </section>

      {/* 3. Interactive Four-Track Navigation Tabs */}
      <div id="protection-tabs" className="space-y-6 scroll-mt-36 lg:scroll-mt-28">
        <div
          role="tablist"
          aria-label="Protection Without Continuity Tabs"
          className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-mwt-parchment border border-mwt-black rounded-lg text-xs font-mono"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "patterns"}
            onClick={() => setActiveTab("patterns")}
            className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
              activeTab === "patterns"
                ? "bg-mwt-oxblood text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            1. Pattern-Aware Review
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "digital"}
            onClick={() => setActiveTab("digital")}
            className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
              activeTab === "digital"
                ? "bg-mwt-oxblood text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            2. Digital Access &amp; Control
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "barriers"}
            onClick={() => setActiveTab("barriers")}
            className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
              activeTab === "barriers"
                ? "bg-mwt-oxblood text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            3. Inability vs. Refusal
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "intervention"}
            onClick={() => setActiveTab("intervention")}
            className={`px-3 py-2.5 text-left font-bold uppercase tracking-wider transition-all rounded cursor-pointer ${
              activeTab === "intervention"
                ? "bg-mwt-oxblood text-white shadow-xs"
                : "text-mwt-black hover:bg-mwt-ivory"
            }`}
          >
            4. Meaningful Intervention
          </button>
        </div>

        {/* TAB 1: PATTERN-AWARE REVIEW */}
        {activeTab === "patterns" && (
          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood tracking-wider block">
                CUMULATIVE CONTEXT WITHOUT PRE-JUDGING MERITS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black">
                Pattern-Aware Review: Beyond Disconnected Incidents
              </h2>
              <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed max-w-3xl">
                When stalking, harassment, coercive control, or domestic abuse crosses weeks, months, and county borders, processing each touchpoint as an isolated first-time encounter creates systemic blindness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 text-xs font-sans">
              <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black space-y-2">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  The Evidentiary Core: Repeated Reporting &amp; Context
                </span>
                <p className="text-mwt-black leading-relaxed">
                  A pattern-aware system does not presume allegations are automatically true simply because they are repeated. Instead, it recognizes that <strong>repeated contact itself is an administrative process fact</strong> requiring supervisory review rather than reflexive dismissal.
                </p>
              </div>

              <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black space-y-2">
                <span className="font-mono text-[11px] font-bold text-mwt-oxblood uppercase block">
                  Retaliation Following Attempts to Obtain Help
                </span>
                <p className="text-mwt-black leading-relaxed">
                  Retaliatory filings (counter-reports, vexatious litigation, lease complaints) frequently follow attempts to obtain protective orders. Our framework insists on <strong>separating retaliation timelines</strong> from original complaints to prevent weaponization of administrative machinery.
                </p>
              </div>
            </div>

            <div className="p-4 bg-mwt-black text-white rounded-lg border border-mwt-black space-y-1 font-mono text-xs">
              <span className="text-mwt-aged-stone uppercase text-[10px] block font-bold">
                CORE INVARIANT DISTINCTION:
              </span>
              <p className="font-serif italic text-sm text-mwt-ivory">
                &ldquo;Reported does not mean proven. But unreviewed must never mean nonexistent.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: DIGITAL ACCESS & ACCOUNT CONTROL */}
        {activeTab === "digital" && (
          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood tracking-wider block">
                TECHNOLOGY &amp; INSTITUTIONAL VULNERABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black">
                Digital Access &amp; Account Control
              </h2>
              <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed max-w-3xl">
                In modern administrative systems, digital connectivity is no longer a convenience—it is a prerequisite for receiving legal notice, attending hearings, and obtaining shelter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {digitalAccessPatterns.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-mwt-ivory border-2 border-mwt-black rounded-lg space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Icon className="w-5 h-5 text-mwt-oxblood" />
                        <span className="text-[10px] font-mono text-mwt-graphite font-bold uppercase">
                          Vulnerability Vector 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-mwt-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-mwt-graphite leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#C4B69E] text-[11px] font-mono text-mwt-black">
                      <strong className="text-mwt-oxblood block text-[10px] uppercase">Safeguard Strategy:</strong>
                      <span className="font-sans text-stone-800">{item.safeguard}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Privacy Boundary Banner */}
            <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black text-xs font-mono text-mwt-graphite space-y-1">
              <span className="font-bold text-mwt-oxblood uppercase block">
                EDITORIAL &amp; SURVIVOR PRIVACY BOUNDARY:
              </span>
              <p className="font-sans text-stone-800 text-xs">
                Maps With Teeth strictly maintains the distinction between <em>reported interference</em>, <em>independently verified interference</em>, and <em>established unlawful conduct</em>. We never publish personal technical credentials, device identifiers, or specific evasion tactics that could compromise survivor safety.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: INABILITY VS REFUSAL */}
        {activeTab === "barriers" && (
          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood tracking-wider block">
                PARTICIPATION INTEGRITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black">
                Distinguishing Inability to Participate from Refusal
              </h2>
              <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed max-w-3xl">
                Frontline caseworkers frequently convert unaddressed logistical, safety, or cognitive barriers into moral or legal conclusions of &apos;non-compliance&apos;.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 text-xs font-sans">
              <div className="p-5 bg-red-50/70 border-2 border-red-900/40 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-mwt-oxblood uppercase block">
                  Conventional Administrative Flaw: Flattening to &quot;Refused&quot;
                </span>
                <p className="text-stone-900 leading-relaxed">
                  When a survivor misses a morning check-in because their phone was seized, their car tires were slashed, or they lacked transit fare, agency software logs &apos;Participant Refused to Engage&apos;. This negative inference then follows them across custody evaluations and benefits re-applications.
                </p>
              </div>

              <div className="p-5 bg-emerald-50/70 border-2 border-emerald-900/40 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-emerald-950 uppercase block">
                  The Proposed Barrier-Aware Standard: Preserving Process Facts
                </span>
                <p className="text-stone-900 leading-relaxed">
                  Our standard introduces structured barrier codes: <em>Transportation Barrier</em>, <em>Communication Compromise</em>, <em>Threat/Retaliation Fear</em>, and <em>Court Conflict</em>. An administrative record must record the reported barrier as an objective handling fact rather than a refusal.
                </p>
              </div>
            </div>

            <div className="p-4 bg-mwt-ivory rounded-lg border border-mwt-black text-xs font-mono space-y-1">
              <span className="font-bold text-mwt-oxblood uppercase block">
                WITNESS FEAR &amp; SAFE PARTICIPATION:
              </span>
              <p className="font-sans text-stone-800 text-xs leading-relaxed">
                Witness fear is a foreseeable institutional condition, not evidence of dishonesty. Safe reporting protocols require institutions to provide confidential communication channels without requiring public confrontation before basic protective thresholds are evaluated.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: MEANINGFUL INTERVENTION */}
        {activeTab === "intervention" && (
          <div className="bg-mwt-parchment border-2 border-mwt-black rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-mwt-oxblood tracking-wider block">
                OPERATIONAL DEFINITION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-mwt-black">
                The Meaningful Intervention Standard
              </h2>
              <p className="text-xs sm:text-sm text-mwt-graphite leading-relaxed max-w-3xl">
                Too often, public systems mistake a <em>procedural gesture</em> (handing out a flyer, generating an auto-response, stamping a file &apos;closed&apos;) for a protective intervention.
              </p>
            </div>

            <div className="p-4 bg-mwt-ivory rounded-lg border-l-4 border-mwt-oxblood border border-[#C4B69E] space-y-2">
              <span className="font-mono text-xs font-bold text-mwt-oxblood uppercase block">
                WHAT IS MEANINGFUL INTERVENTION?
              </span>
              <p className="font-serif italic text-base sm:text-lg text-mwt-black leading-snug">
                &ldquo;A legally authorized, proportionate, safety-informed, appropriately documented response with a usable next step and appropriate review mechanisms.&rdquo;
              </p>
              <p className="text-xs text-mwt-graphite font-sans">
                It does <strong>not</strong> mean that every complaint requires arrest, criminal prosecution, child removal, or the issuance of a protective order. Discretion remains with authorized professionals—but discretion must be articulate, reviewable, and bound to a usable next step.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
              {interventionPrinciples.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-mwt-ivory border border-mwt-black rounded-lg space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-mwt-oxblood font-mono text-[11px] font-bold uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Element 0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-mwt-black">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-mwt-graphite leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Institutional Ownership Across Systems */}
            <div className="p-4 bg-mwt-black text-white rounded-lg space-y-2 font-sans text-xs">
              <span className="text-mwt-aged-stone font-mono uppercase text-[10px] block font-bold">
                CROSS-SYSTEM DECISION OWNERSHIP:
              </span>
              <p className="text-mwt-ivory leading-relaxed">
                When a matter crosses police, civil legal aid, child protection, and municipal housing, <strong>some identifiable entity must retain handoff ownership</strong> until another authorized party formally accepts responsibility. Disappearance between jurisdictions is an administrative choice, not an inevitable law of nature.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Cross-Links to Core Reform Tracks */}
      <section className="bg-mwt-ivory border-2 border-mwt-black rounded-xl p-6 sm:p-8 space-y-5">
        <div className="border-b border-[#C4B69E] pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-mwt-oxblood uppercase tracking-wider block">
              CONNECTED REFORM TRACKS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-mwt-black">
              Explore the Full Architecture
            </h3>
          </div>
          <span className="coord-tick">[CONTINUITY SUITE]</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono">
          <Link
            href="/continuity"
            className="p-4 bg-mwt-parchment border border-mwt-black rounded-lg hover:border-mwt-oxblood transition flex flex-col justify-between space-y-2 group"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase text-mwt-oxblood block">TRACK A · REFORM</span>
              <h4 className="font-serif font-bold text-sm text-mwt-black group-hover:text-mwt-oxblood">
                Administrative Continuity Standard
              </h4>
              <p className="text-[11px] text-mwt-graphite font-sans">
                Six modules covering closed-loop referrals, handoff ownership, and the 7-stage Continuity Receipt.
              </p>
            </div>
            <span className="text-[#841F2B] font-bold inline-flex items-center gap-1 pt-2">
              Explore Standard →
            </span>
          </Link>

          <Link
            href="/find-help"
            className="p-4 bg-mwt-parchment border border-mwt-black rounded-lg hover:border-mwt-oxblood transition flex flex-col justify-between space-y-2 group"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase text-mwt-oxblood block">TRACK D · NAVIGATION</span>
              <h4 className="font-serif font-bold text-sm text-mwt-black group-hover:text-mwt-oxblood">
                Resource Reachability Pilot
              </h4>
              <p className="text-[11px] text-mwt-graphite font-sans">
                Central Texas barrier-first matcher auditing lease termination, utilities, and emergency shelter.
              </p>
            </div>
            <span className="text-[#841F2B] font-bold inline-flex items-center gap-1 pt-2">
              Launch Matcher →
            </span>
          </Link>

          <Link
            href="/policy"
            className="p-4 bg-mwt-parchment border border-mwt-black rounded-lg hover:border-mwt-oxblood transition flex flex-col justify-between space-y-2 group"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase text-mwt-oxblood block">POLICY APPLICATION</span>
              <h4 className="font-serif font-bold text-sm text-mwt-black group-hover:text-mwt-oxblood">
                Texas DFPS Sunset Review
              </h4>
              <p className="text-[11px] text-mwt-graphite font-sans">
                Structural proposals for closed-loop handoffs and context-before-closure audits in 2026–27.
              </p>
            </div>
            <span className="text-[#841F2B] font-bold inline-flex items-center gap-1 pt-2">
              Read Sunset Proposals →
            </span>
          </Link>
        </div>
      </section>

      {/* 5. Resource Materials Block */}
      <ResourceMaterialsBlock />
    </div>
  );
}
