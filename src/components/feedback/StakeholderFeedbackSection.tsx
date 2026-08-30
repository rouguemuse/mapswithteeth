"use client";

import React, { useState } from "react";
import { MessageSquareQuote, CheckCircle2, ShieldAlert, Sparkles, Compass } from "lucide-react";
import { StakeholderDomain, StakeholderFeedbackSubmission } from "@/types/feedback";

export function StakeholderFeedbackSection({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
    <section className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden bg-grid-atlas select-none font-sans">
      {/* Editorial Header */}
      <div className="border-b border-[#D9D1C4] pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-[#971F26]">
            <Compass className="w-5 h-5" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              INSTITUTIONAL & PRE-PILOT REVIEW
            </span>
          </div>
          <span className="coord-tick">[STAKEHOLDER REVIEW COHORT]</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1D1D] tracking-tight">
          Help Pressure-Test the Model
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl font-sans">
          Maps With Teeth is currently seeking feedback from people who understand public systems, labor, survivor services, community organizations, technology, legal systems, and frontline resource delivery.
        </p>

        <div className="p-4 bg-[#F5F1E8] rounded-lg border-2 border-[#1C1D1D] space-y-2 shadow-2xs">
          <span className="text-xs font-bold text-[#1C1D1D] font-mono uppercase tracking-wider block">
            We especially want to know:
          </span>
          <ul className="grid gap-2 sm:grid-cols-2 text-xs text-stone-800 font-sans">
            <li className="flex items-start gap-1.5">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Where would this approach fail in real frontline practice?</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>What critical systems, funds, or escape routes are we missing?</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>What would make this genuinely useful to caseworkers and organizers?</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#971F26] font-bold font-mono">•</span>
              <span>Who else should be involved in shaping this model early?</span>
            </li>
          </ul>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Your Name:
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Email Address:
              </label>
              <input
                type="email"
                required
                placeholder="jane@example.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Perspective / Background:
              </label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value as StakeholderDomain })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
              >
                {domainOptions.map(([id, label]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Organization / Role (Optional):
              </label>
              <input
                type="text"
                placeholder="Union Local, Agency, or Independent"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                1. Where would this approach fail in real frontline practice?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us where assumptions break down, where gatekeepers will block access, or where practical barriers intervene..."
                value={formData.whereWouldThisFail}
                onChange={(e) => setFormData({ ...formData, whereWouldThisFail: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                2. What critical systems, resources, or escape routes are we missing?
              </label>
              <textarea
                rows={3}
                placeholder="Obscure funds, union hardship programs, municipal rules, statutory protections, or community relief mechanisms..."
                value={formData.missingSystemsOrStakeholders}
                onChange={(e) => setFormData({ ...formData, missingSystemsOrStakeholders: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                3. Who else should be in this conversation?
              </label>
              <textarea
                rows={2}
                placeholder="Specific labor leaders, advocates, public officials, or community organizers we should consult..."
                value={formData.whoShouldBeInPilotConversation}
                onChange={(e) => setFormData({ ...formData, whoShouldBeInPilotConversation: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] focus:outline-none font-sans"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#971F26] hover:bg-red-900 text-white font-mono font-bold uppercase tracking-wider text-xs rounded-md shadow-2xs transition-colors"
          >
            Submit Strategic Review Feedback →
          </button>
        </form>
      ) : (
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-4 shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-[#EEE8DD] border-2 border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#971F26]" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
            Strategic Review Received
          </h3>
          <p className="text-xs text-stone-700 max-w-md mx-auto font-sans leading-relaxed">
            Thank you for pressure-testing Maps With Teeth. Your frontline and institutional insights directly guide our research docket and verification rules.
          </p>
        </div>
      )}
    </section>
  );
}
