"use client";

import React, { useState } from "react";
import { Shield, Users, Compass, CheckCircle2, ArrowRight, Sparkles, Scale, BookOpen, AlertCircle } from "lucide-react";
import { TARGET_COMPETENCIES, GOVERNANCE_MODE, APPOINTED_DIRECTORS } from "@/data/governance";
import { BoardCandidateSubmission } from "@/types/governance";

export function FoundingBoardSection({ defaultExpanded = false }: { defaultExpanded?: boolean }) {
  const [activeFormType, setActiveFormType] = useState<"FOUNDING_BOARD" | "ADVISORY_CIRCLE" | null>(
    defaultExpanded ? "FOUNDING_BOARD" : null
  );
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<Partial<BoardCandidateSubmission>>({
    fullName: "",
    email: "",
    currentRole: "",
    linkedInUrl: "",
    areaOfExpertise: [],
    relevantExperience: "",
    priorBoardExperience: "",
    whyInterested: "",
    potentialConflicts: "",
    expectedCapacity: "",
  });

  const handleCheckboxToggle = (area: string) => {
    const current = formData.areaOfExpertise || [];
    if (current.includes(area)) {
      setFormData({ ...formData, areaOfExpertise: current.filter((a) => a !== area) });
    } else {
      setFormData({ ...formData, areaOfExpertise: [...current, area] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 bg-brand-charcoal border border-stone-800 rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Subtle Map Contour Accent Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-stone-400 to-transparent" />

      {/* Editorial Status & Pre-Incorporation Banner */}
      <div className="border-b border-stone-800 pb-6 space-y-3">
        <div className="flex items-center gap-2 text-brand-ruby">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            GOVERNANCE & STEWARDSHIP INITIATION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Help Build the Founding Board
        </h2>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
          Maps With Teeth is currently an independent public-interest initiative preparing for its next stage of organizational development. We are beginning conversations with potential founding board members who can help shape strong governance, accountability, and long-term sustainability.
        </p>

        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
          We are especially interested in people with experience in nonprofit governance, legal and compliance, finance, survivor services, public systems, technology and privacy, fundraising, and community partnerships.
        </p>

        <p className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed max-w-3xl border-l-2 border-brand-ruby pl-3">
          Board service is not ceremonial. We are looking for people willing to engage meaningfully in governance, oversight, strategy, and responsible growth.
        </p>

        <div className="p-3 bg-stone-900/80 rounded border border-stone-800 text-[11px] text-stone-400 font-mono">
          <strong className="text-stone-300">Independence & Status Notice:</strong> Maps With Teeth is an independent initiative currently in active organizational design. We do not list or claim appointed directors until formal fiduciary appointments are officially executed.
        </div>
      </div>

      {/* Two Visually Distinct Pathways: Founding Board vs. Advisory Circle */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Pathway 1: Founding Board */}
        <div
          className={`p-6 rounded-xl border transition-all flex flex-col justify-between ${
            activeFormType === "FOUNDING_BOARD"
              ? "bg-stone-900 border-brand-ruby ring-1 ring-brand-ruby shadow-xl"
              : "bg-stone-950/60 border-stone-800 hover:border-stone-700"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider text-brand-ruby uppercase px-2 py-0.5 rounded bg-red-950/70 border border-brand-ruby/40">
                GOVERNANCE & FIDUCIARY
              </span>
              <Scale className="w-5 h-5 text-stone-400" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Founding Board</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Governance, fiduciary oversight, organizational strategy, financial accountability, and long-term stewardship.
            </p>
            <ul className="text-[11px] text-stone-400 space-y-1 list-disc list-inside font-sans pt-1">
              <li>Formulate organizational bylaws, charters, and risk policies</li>
              <li>Oversee financial audits and multi-source grant compliance</li>
              <li>Provide executive stewardship and strategic direction</li>
              <li>Fiduciary engagement and active committee leadership</li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setActiveFormType("FOUNDING_BOARD");
                setSubmitted(false);
              }}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                activeFormType === "FOUNDING_BOARD"
                  ? "bg-brand-ruby text-white shadow-md"
                  : "bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700"
              }`}
            >
              <span>Founding Board Interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pathway 2: Advisory Circle */}
        <div
          className={`p-6 rounded-xl border transition-all flex flex-col justify-between ${
            activeFormType === "ADVISORY_CIRCLE"
              ? "bg-stone-900 border-amber-500 ring-1 ring-amber-500 shadow-xl"
              : "bg-stone-950/60 border-stone-800 hover:border-stone-700"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/40">
                SUBJECT-MATTER & RESEARCH
              </span>
              <Users className="w-5 h-5 text-stone-400" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Advisory Circle</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Expertise, research input, technical guidance, community perspective, partnerships, and strategic feedback.
            </p>
            <p className="text-[11px] text-stone-400 leading-relaxed font-sans pt-1">
              For subject-matter experts, survivor advocates, researchers, trade practitioners, and community leaders who wish to offer valuable counsel, review legal/technical research, or provide strategic introductions without taking on formal legal and fiduciary board liabilities.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setActiveFormType("ADVISORY_CIRCLE");
                setSubmitted(false);
              }}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                activeFormType === "ADVISORY_CIRCLE"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700"
              }`}
            >
              <span>Advisory Circle Interest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Target Competencies Grid */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
          Key Focus Areas & Desired Perspectives:
        </h4>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {TARGET_COMPETENCIES.map((c, i) => (
            <div key={i} className="p-3 bg-stone-950/80 rounded border border-stone-800/80 space-y-1">
              <span className="text-[11px] font-bold text-stone-200 block">{c.area}</span>
              <p className="text-[10px] text-stone-400 leading-snug">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Interest Submission Form */}
      {activeFormType && (
        <div className="mt-8 pt-8 border-t border-stone-800 animate-fadeIn">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-stone-900/90 border border-stone-700/80 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="border-b border-stone-800 pb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-brand-ruby font-bold block">
                    INTEREST EXPRESSION
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {activeFormType === "FOUNDING_BOARD"
                      ? "Founding Board Interest Form"
                      : "Advisory Circle Interest Form"}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveFormType(null)}
                  className="text-xs text-stone-400 hover:text-white font-mono"
                >
                  [Close Form]
                </button>
              </div>

              {/* Form Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    Full Name <span className="text-brand-ruby">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Rivera"
                    value={formData.fullName || ""}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    Email Address <span className="text-brand-ruby">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@organization.org"
                    value={formData.email || ""}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    Current Role or Organization <span className="text-brand-ruby">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Managing Director / Senior Counsel / Executive Director"
                    value={formData.currentRole || ""}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    LinkedIn or Professional Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedInUrl || ""}
                    onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>
              </div>

              {/* Area of Expertise Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-stone-200 mb-2">
                  Area(s) of Expertise (Select all that apply) <span className="text-brand-ruby">*</span>
                </label>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-300">
                  {TARGET_COMPETENCIES.map((c, idx) => (
                    <label
                      key={idx}
                      className="flex items-start gap-2 p-2 bg-stone-950/60 rounded border border-stone-800 hover:border-stone-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={(formData.areaOfExpertise || []).includes(c.area)}
                        onChange={() => handleCheckboxToggle(c.area)}
                        className="mt-0.5 accent-brand-ruby"
                      />
                      <span className="text-[11px] leading-tight">{c.area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Text Areas */}
              <div>
                <label className="block text-xs font-bold text-stone-200 mb-1">
                  Relevant Experience & Background <span className="text-brand-ruby">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summarize your professional background, specific domain expertise, and accomplishments relevant to Maps With Teeth..."
                  value={formData.relevantExperience || ""}
                  onChange={(e) => setFormData({ ...formData, relevantExperience: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-200 mb-1">
                  Prior Board, Advisory, or Fiduciary Experience
                </label>
                <textarea
                  rows={2}
                  placeholder="List any past or current nonprofit, civic, advisory, or corporate boards you have served on..."
                  value={formData.priorBoardExperience || ""}
                  onChange={(e) => setFormData({ ...formData, priorBoardExperience: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-200 mb-1">
                  Why Maps With Teeth interests you <span className="text-brand-ruby">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="What draws you to the barrier-first principle and cross-system resource navigation?"
                  value={formData.whyInterested || ""}
                  onChange={(e) => setFormData({ ...formData, whyInterested: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    Potential Conflicts of Interest (if any)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. None / Leadership role at related regional agency"
                    value={formData.potentialConflicts || ""}
                    onChange={(e) => setFormData({ ...formData, potentialConflicts: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-200 mb-1">
                    Availability / Expected Capacity <span className="text-brand-ruby">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4-6 hours/month / Quarterly strategic sessions"
                    value={formData.expectedCapacity || ""}
                    onChange={(e) => setFormData({ ...formData, expectedCapacity: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-white placeholder-stone-500 focus:border-brand-ruby focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-stone-400 italic">
                  Submitting this form begins a conversation and does not guarantee a board position.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-ruby hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg transition-colors shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Interest</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-stone-900 border border-emerald-800 rounded-xl p-8 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Thank you for your interest.</h3>
              <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                Your profile has been received by our leadership team. We are scheduling exploratory conversations with prospective founding leaders on a rolling basis as we structure our initial governance framework.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-brand-ruby hover:underline font-mono pt-2 block mx-auto"
              >
                Submit another interest profile
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
