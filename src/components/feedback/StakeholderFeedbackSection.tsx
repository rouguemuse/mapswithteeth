"use client";

import React, { useState } from "react";
import { MessageSquareQuote, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
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
    <section className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-10 shadow-md space-y-8 relative overflow-hidden">
      {/* Editorial Header */}
      <div className="border-b border-brand-sand pb-6 space-y-3">
        <div className="flex items-center gap-2 text-brand-oxblood">
          <MessageSquareQuote className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            INSTITUTIONAL & PRE-PILOT REVIEW
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal tracking-tight">
          Help pressure-test the model
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl font-sans">
          Maps With Teeth is currently seeking feedback from people who understand public systems, labor, survivor services, community organizations, technology, legal systems, and frontline resource delivery.
        </p>

        <div className="p-4 bg-brand-ivory rounded-lg border border-stone-300 space-y-2 shadow-sm">
          <span className="text-xs font-bold text-brand-charcoal font-mono uppercase tracking-wider block">
            We especially want to know:
          </span>
          <ul className="grid gap-2 sm:grid-cols-2 text-xs text-stone-700 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-brand-oxblood font-bold shrink-0 font-mono">•</span>
              <span><strong>Where would this fail in practice?</strong> What edge cases or institutional bottlenecks are unaddressed?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-oxblood font-bold shrink-0 font-mono">•</span>
              <span><strong>What systems or stakeholders are missing?</strong> Which labor funds, statutory nuances, or agencies should be included?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-oxblood font-bold shrink-0 font-mono">•</span>
              <span><strong>What would make this useful to organizations already doing the work?</strong> How can this reduce caseload burnout?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-oxblood font-bold shrink-0 font-mono">•</span>
              <span><strong>Who should be part of the pilot conversation?</strong> Which Central Texas or regional stakeholders must be at the table?</span>
            </li>
          </ul>
        </div>

        {/* Universal Privacy & Emergency Protection Warning */}
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-brand-oxblood shadow-sm">
          <ShieldAlert className="w-4 h-4 text-brand-oxblood shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <strong>Privacy & Emergency Notice:</strong> Please do not submit sensitive personal records, case documents, medical information, or identifying survivor information through this form. This prototype is not monitored for emergencies.
          </p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Your Name <span className="text-brand-oxblood">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.fullName || ""}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Email Address <span className="text-brand-oxblood">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="alex@organization.org"
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Professional Domain / Perspective <span className="text-brand-oxblood">*</span>
              </label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value as StakeholderDomain })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
              >
                {domainOptions.map(([val, label]) => (
                  <option key={val} value={val}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Organization / Agency / Union / Affiliation
              </label>
              <input
                type="text"
                placeholder="e.g. Central Labor Council / Legislative Office / Legal Aid"
                value={formData.organization || ""}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                1. Where would this fail in practice? <span className="text-stone-500 font-normal font-sans">(What frontline friction, legal bottlenecks, or implementation flaws do you anticipate?)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Share specific failure points, agency pushback, verification hurdles, or resource fatigue issues..."
                value={formData.whereWouldThisFail || ""}
                onChange={(e) => setFormData({ ...formData, whereWouldThisFail: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                2. What systems, programs, or stakeholders are missing? <span className="text-stone-500 font-normal font-sans">(Industry funds, union benevolence funds, public agencies, local nuances)</span>
              </label>
              <textarea
                rows={3}
                placeholder="List specific programs, municipal codes, union hardship funds, or community organizations that should be added..."
                value={formData.missingSystemsOrStakeholders || ""}
                onChange={(e) => setFormData({ ...formData, missingSystemsOrStakeholders: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                3. What would make this genuinely useful to organizations already doing the work?
              </label>
              <textarea
                rows={2}
                placeholder="How could this reduce duplicate administrative labor or aid frontline case managers?"
                value={formData.whatMakesThisUsefulToFrontline || ""}
                onChange={(e) => setFormData({ ...formData, whatMakesThisUsefulToFrontline: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                4. Who should be part of the pilot conversation in Central Texas / Texas?
              </label>
              <textarea
                rows={2}
                placeholder="Names of agencies, coalition leaders, union representatives, or researchers we should connect with..."
                value={formData.whoShouldBeInPilotConversation || ""}
                onChange={(e) => setFormData({ ...formData, whoShouldBeInPilotConversation: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-brand-sand flex items-center justify-between">
            <span className="text-[11px] text-stone-500 font-mono">
              Evaluated strictly for systems design & pilot refinement.
            </span>

            <button
              type="submit"
              className="px-6 py-3 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Share Feedback</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-brand-charcoal">Thank you for pressure-testing Maps With Teeth.</h3>
          <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed font-sans">
            Your review will directly inform our Central Texas pilot methodology, failure-point tracking, and stakeholder outreach.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-brand-oxblood hover:underline font-mono pt-2 block mx-auto font-bold"
          >
            Submit additional feedback
          </button>
        </div>
      )}
    </section>
  );
}
