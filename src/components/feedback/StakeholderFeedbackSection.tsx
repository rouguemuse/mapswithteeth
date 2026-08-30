"use client";

import React, { useState } from "react";
import { MessageSquareQuote, CheckCircle2, ShieldAlert, Sparkles, Compass, Loader2 } from "lucide-react";
import { StakeholderDomain, StakeholderFeedbackSubmission } from "@/types/feedback";

export function StakeholderFeedbackSection({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState<Partial<StakeholderFeedbackSubmission>>({
    fullName: "",
    email: "",
    domain: "LABOR_UNION",
    organization: "",
    whereWouldThisFail: "",
    missingSystemsOrStakeholders: "",
    whatMakesThisUsefulToFrontline: "",
    whoShouldBeInPilotConversation: "",
    generalNotes: "",
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
          category: "FEEDBACK",
          data: {
            ...formData,
            dateSubmitted: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit feedback.");
      }

      setSubmitted(true);
      setConfirmationSent(Boolean(result.confirmationSent));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while sending your feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const domainOptions: [StakeholderDomain, string][] = [
    ["LABOR_UNION", "Labor Union / Worker Advocacy / Benevolent Association"],
    ["ELECTED_PUBLIC_SECTOR", "Elected Official / Legislative Staff / Public Agency"],
    ["SURVIVOR_SERVICES", "Domestic Violence Shelter / Direct Survivor Advocacy"],
    ["LEGAL_JUDICIAL", "Legal Aid / Family Law / Judicial Administration"],
    ["COMMUNITY_ACTION_MUTUAL_AID", "Community Action Agency (CSBG) / Mutual Aid / Faith Leader"],
    ["TECHNOLOGY_PRIVACY", "Civic Technologist / Privacy & Digital Safety Specialist"],
    ["RESEARCH_ACADEMIA", "Policy Researcher / Sociologist / Evaluator"],
    ["OTHER", "Other Frontline or Systems Perspective"],
  ];

  return (
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden bg-grid-atlas select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase">
              FIELD VALIDATION & REALITY-CHECK
            </span>
          </div>
          <span className="coord-tick text-stone-700">[FEEDBACK ROUTED TO TEAM]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1D1D] tracking-tight leading-tight">
          Help pressure-test the map.
        </h2>

        <p className="text-base sm:text-[17px] text-stone-900 leading-relaxed max-w-3xl font-sans font-medium">
          Maps With Teeth will only be useful if people tell us where the published version of a resource does not match reality.
        </p>

        <div className="p-4 bg-[#F5F1E8] rounded-xl border-2 border-[#1C1D1D] space-y-2 shadow-2xs">
          <span className="text-xs sm:text-[13px] font-bold text-[#1C1D1D] font-mono uppercase tracking-wider block">
            We want to hear from:
          </span>
          <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
            People who tried to use a resource · Advocates · Legal and public-service professionals · Community organizations · Researchers · Frontline workers · People who know a pathway we&apos;re missing.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot hidden field */}
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
            <div className="p-3.5 bg-[#FDF2F2] border-2 border-[#971F26] rounded text-xs sm:text-sm text-[#971F26] font-mono font-bold">
              <strong>Submission Error:</strong> {errorMessage}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                Your Name:
              </label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                Email Address:
              </label>
              <input
                type="email"
                required
                maxLength={150}
                placeholder="jane@example.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                Organization / Perspective:
              </label>
              <input
                type="text"
                maxLength={120}
                placeholder="Agency, Union, Advocate, or Independent"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                Perspective Domain:
              </label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value as StakeholderDomain })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] font-mono font-medium"
              >
                {domainOptions.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                1. What did the program say it offered vs. what happened when someone tried to use it?
              </label>
              <textarea
                rows={3}
                maxLength={3000}
                placeholder="Describe the discrepancy between paper eligibility and actual intake..."
                value={formData.whereWouldThisFail}
                onChange={(e) => setFormData({ ...formData, whereWouldThisFail: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                2. What requirement was missing from public info, or was the resource frozen/closed?
              </label>
              <textarea
                rows={3}
                maxLength={3000}
                placeholder="Mention unwritten documentation requirements, funding freezes, disconnected numbers, or waitlist closures..."
                value={formData.missingSystemsOrStakeholders}
                onChange={(e) => setFormData({ ...formData, missingSystemsOrStakeholders: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#1C1D1D] mb-1.5 font-mono uppercase">
                3. Is there another route that actually worked in practice?
              </label>
              <textarea
                rows={3}
                maxLength={3000}
                placeholder="Share lateral funds, union benevolent accounts, ministerial relief, or legal escape clauses that succeeded..."
                value={formData.whatMakesThisUsefulToFrontline}
                onChange={(e) => setFormData({ ...formData, whatMakesThisUsefulToFrontline: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-3 text-xs sm:text-sm text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#971F26] hover:bg-red-900 disabled:opacity-60 text-white font-mono font-bold uppercase tracking-wider text-xs sm:text-sm rounded-md shadow-2xs transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Routing to Stakeholder Review Inbox...</span>
              </>
            ) : (
              <span>Submit feedback →</span>
            )}
          </button>
        </form>
      ) : (
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#EEE8DD] border-2 border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#971F26]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D]">
            Feedback Transmitted
          </h3>
          <p className="text-sm text-stone-800 max-w-lg mx-auto font-sans leading-relaxed">
            Thank you for pressure-testing Maps With Teeth. Your feedback has been securely routed to <strong>feedback@mapswithteeth.org</strong>.
          </p>
          {confirmationSent && (
            <p className="text-xs sm:text-sm text-[#971F26] font-mono font-bold">
              ✓ An acknowledgement email has been sent to {formData.email}.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
