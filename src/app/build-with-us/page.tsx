"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CollaboratorRole, CollaboratorSubmission } from "@/types/collaborator";
import {
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Scale,
  Compass,
  Loader2,
  Users,
  Building2,
  HelpCircle,
  Code2
} from "lucide-react";

function BuildWithUsContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState<CollaboratorSubmission>({
    name: "",
    email: "",
    organization: "",
    location: "Austin, Texas",
    role: "SURVIVOR_ADVOCATE",
    expertiseArea: "",
    howToCollaborate: "",
    dateSubmitted: new Date().toISOString(),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "PARTNERSHIP",
          data: {
            ...formData,
            dateSubmitted: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit partnership intake.");
      }

      setSubmitted(true);
      setConfirmationSent(Boolean(result.confirmationSent));
      setReferenceId(result.referenceId || null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleOptions: [CollaboratorRole, string][] = [
    ["FISCAL_SPONSOR", "Tier 3: Fiscal Sponsor / Institutional Host"],
    ["FOUNDATION_FUNDER", "Tier 3: Foundation / Grant Funder / Donor"],
    ["SURVIVOR_ADVOCATE", "Tier 1: Domestic Violence / Survivor Advocate"],
    ["ATTORNEY_LEGAL_RESEARCHER", "Tier 1: Attorney / Legal Researcher"],
    ["COMMUNITY_ORGANIZER", "Tier 2: Community Organization / Pilot Partner"],
    ["PET_FOSTER_NETWORK", "Tier 2: Pet Foster / Veterinary Care Partner"],
    ["MECHANIC_AUTO_PARTNER", "Tier 2: Mechanic / Auto Repair Partner"],
    ["LOCKSMITH_PARTNER", "Tier 2: Locksmith / Security Partner"],
    ["TECH_PRIVACY_SPECIALIST", "Tier 4: Technology & Privacy / Digital Safety Specialist"],
    ["RESEARCH_VOLUNTEER", "Tier 4: State Research Volunteer"],
    ["OTHER", "Other Collaborative Capacity"],
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 select-none font-sans">
      {/* Header */}
      <div className="border-b border-[#D9D1C4] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <HeartHandshake className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              COLLABORATOR INTAKE & PARTNERSHIP
            </span>
          </div>
          <span className="coord-tick">[WORKING COALITION: CENTRAL TX]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Build With Us: 4 Tiers of Collaboration
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
          Building a robust continuity layer and barrier-first intelligence system requires cross-disciplinary collaboration. We engage with partners across four distinct tiers:
        </p>
      </div>

      {/* 4-Tier Hierarchy Cards */}
      <div className="grid gap-4 sm:grid-cols-2 text-xs">
        {/* Tier 1 */}
        <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-[10px] uppercase text-[#971F26]">TIER 01</span>
            <HelpCircle className="w-4 h-4 text-stone-600" />
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">
            Pressure-Test Feedback & Expert Review
          </h3>
          <p className="text-stone-800 font-sans leading-relaxed">
            For frontline survivor advocates, legal aid attorneys, and navigators. Participate in 20–30 minute interviews to critique our intake taxonomy, eligibility rules, and Continuity Receipt format.
          </p>
        </div>

        {/* Tier 2 */}
        <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-[10px] uppercase text-[#971F26]">TIER 02</span>
            <Users className="w-4 h-4 text-stone-600" />
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">
            Pilot & Institutional Partner Exploration
          </h3>
          <p className="text-stone-800 font-sans leading-relaxed">
            For Central Texas agencies, mutual aid networks, and trade partners (mechanics, locksmiths, pet fosters) interested in participating in our 25-person 6-month pilot cohort.
          </p>
        </div>

        {/* Tier 3 */}
        <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-[10px] uppercase text-[#971F26]">TIER 03</span>
            <Building2 className="w-4 h-4 text-stone-600" />
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">
            Fiscal Sponsorship & Philanthropic Interest
          </h3>
          <p className="text-stone-800 font-sans leading-relaxed">
            For 501(c)(3) fiscal sponsor hosts, institutional grantmakers, family foundations, and donor-advised funds (DAFs) exploring pilot funding and governance alignment.
          </p>
        </div>

        {/* Tier 4 */}
        <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-[10px] uppercase text-[#971F26]">TIER 04</span>
            <Code2 className="w-4 h-4 text-stone-600" />
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C1D1D]">
            Specialized Research & Tech Collaboration
          </h3>
          <p className="text-stone-800 font-sans leading-relaxed">
            For statutory legal researchers, open-data contributors, and privacy/cryptographic engineers helping harden client-side zero-PII security and audit pipelines.
          </p>
        </div>
      </div>

      {/* Dedicated Founding Board & Advisory Circle Banner */}
      <div className="p-5 bg-[#EEE8DD] border-2 border-[#1C1D1D] border-l-6 border-l-[#971F26] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#1C1D1D] font-serif font-bold text-sm">
            <Scale className="w-4 h-4 text-[#971F26]" />
            <span>Interested in Fiduciary Governance or the Advisory Circle?</span>
          </div>
          <p className="text-xs text-stone-700 max-w-xl font-sans">
            We are actively beginning exploratory conversations with prospective Founding Board directors and Advisory Circle subject-matter leaders.
          </p>
        </div>
        <Link
          href="/governance"
          className="px-4 py-2 bg-[#F5F1E8] hover:bg-stone-200 text-[#1C1D1D] rounded text-xs font-mono uppercase tracking-wider font-bold shrink-0 border border-[#1C1D1D] transition-colors shadow-2xs"
        >
          View Governance Pathways →
        </Link>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-atlas">
          {/* Honeypot hidden input */}
          <input
            type="text"
            name="_hp"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {errorMessage && (
            <div className="p-3 bg-[#FDF2F2] border-2 border-[#971F26] rounded text-xs text-[#971F26] font-mono">
              <strong>Submission Error:</strong> {errorMessage}
            </div>
          )}

          {/* Privacy & Emergency Warning */}
          <div className="p-3.5 bg-[#FDF2F2] border-2 border-[#971F26] rounded-md flex items-start gap-2 text-xs text-[#971F26] shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#971F26] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-stone-900">
              <strong>Privacy & Emergency Notice:</strong> Please do not submit sensitive personal records, case documents, medical information, or identifying survivor information through this form. This prototype is not monitored for emergencies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Your Name / Primary Contact:
              </label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Email Address:
              </label>
              <input
                type="email"
                required
                maxLength={150}
                placeholder="jane@example.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Organization / Affiliation:
              </label>
              <input
                type="text"
                maxLength={120}
                placeholder="Agency, Union, or Independent"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Primary Collaborative Role:
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as CollaboratorRole })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
              >
                {roleOptions.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
              How would you like to collaborate with Maps With Teeth?
            </label>
            <textarea
              rows={4}
              required
              maxLength={3000}
              placeholder="Tell us about your background, regional focus, data leads, legal expertise, or institutional interest..."
              value={formData.howToCollaborate}
              onChange={(e) => setFormData({ ...formData, howToCollaborate: e.target.value })}
              className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-sans"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#971F26] hover:bg-red-900 disabled:opacity-60 text-white font-mono font-bold uppercase tracking-wider text-xs rounded-md shadow-2xs transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Routing to Partnership Inbox...</span>
              </>
            ) : (
              <span>Submit Working Coalition Intake →</span>
            )}
          </button>
        </form>
      ) : (
        <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#F5F1E8] border-2 border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#971F26]" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#1C1D1D]">
            Intake Received
          </h2>
          <p className="text-xs text-stone-700 max-w-md mx-auto font-sans leading-relaxed">
            Thank you for stepping forward to strengthen the Maps With Teeth ecosystem. Your message has been routed to <strong>partners@mapswithteeth.org</strong>.
          </p>
          {confirmationSent && (
            <p className="text-[11px] text-[#971F26] font-mono font-bold">
              ✓ An acknowledgement email has been sent to {formData.email}.
            </p>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#971F26] hover:underline pt-2"
          >
            <span>← Return to System Overview</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function BuildWithUsPage() {
  return (
    <React.Suspense fallback={<div className="p-10 font-mono text-xs">Loading collaborator intake...</div>}>
      <BuildWithUsContent />
    </React.Suspense>
  );
}
