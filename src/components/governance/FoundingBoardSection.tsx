"use client";

import React, { useState } from "react";
import { Shield, Users, CheckCircle2, ArrowRight, Sparkles, Scale, AlertCircle } from "lucide-react";
import { TARGET_COMPETENCIES } from "@/data/governance";
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
    <div className="space-y-8 bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-10 shadow-md relative overflow-hidden">
      {/* Editorial Status & Pre-Incorporation Banner */}
      <div className="border-b border-brand-sand pb-6 space-y-3">
        <div className="flex items-center gap-2 text-brand-oxblood">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            GOVERNANCE & STEWARDSHIP INITIATION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal tracking-tight">
          Help Build the Founding Board
        </h2>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl font-sans">
          Maps With Teeth is currently an independent public-interest initiative preparing for its next stage of organizational development. We are beginning conversations with potential founding board members who can help shape strong governance, accountability, and long-term sustainability.
        </p>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl font-sans">
          We are especially interested in people with experience in nonprofit governance, legal and compliance, finance, survivor services, public systems, technology and privacy, fundraising, and community partnerships.
        </p>

        <p className="text-xs sm:text-sm text-brand-charcoal font-semibold leading-relaxed max-w-3xl border-l-2 border-brand-oxblood pl-3 font-sans">
          Board service is not ceremonial. We are looking for people willing to engage meaningfully in governance, oversight, strategy, and responsible growth.
        </p>

        <div className="p-3 bg-brand-ivory rounded border border-stone-300 text-[11px] text-stone-600 font-mono shadow-sm">
          <strong className="text-brand-charcoal">Independence & Status Notice:</strong> Maps With Teeth is an independent initiative currently in active organizational design. We do not list or claim appointed directors until formal fiduciary appointments are officially executed.
        </div>
      </div>

      {/* Two Visually Distinct Pathways: Founding Board vs. Advisory Circle */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Pathway 1: Founding Board */}
        <div
          className={`p-6 rounded-xl border transition-all flex flex-col justify-between ${
            activeFormType === "FOUNDING_BOARD"
              ? "bg-brand-ivory border-brand-oxblood ring-1 ring-brand-oxblood shadow-md"
              : "bg-brand-ivory border-brand-sand hover:border-stone-400 shadow-sm"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider text-brand-oxblood uppercase px-2 py-0.5 rounded bg-red-50 border border-red-200">
                GOVERNANCE & FIDUCIARY
              </span>
              <Scale className="w-5 h-5 text-stone-500" />
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-charcoal">Founding Board</h3>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              Governance, fiduciary oversight, organizational strategy, financial accountability, and long-term stewardship.
            </p>
            <ul className="text-[11px] text-stone-600 space-y-1 list-disc list-inside font-sans pt-1">
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
                  ? "bg-brand-oxblood text-white shadow-sm"
                  : "bg-brand-paper hover:bg-stone-200 text-brand-charcoal border border-stone-300"
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
              ? "bg-brand-ivory border-amber-600 ring-1 ring-amber-600 shadow-md"
              : "bg-brand-ivory border-brand-sand hover:border-stone-400 shadow-sm"
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-wider text-amber-800 uppercase px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                SUBJECT-MATTER & RESEARCH
              </span>
              <Users className="w-5 h-5 text-stone-500" />
            </div>
            <h3 className="text-lg font-serif font-bold text-brand-charcoal">Advisory Circle</h3>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              Expertise, research input, technical guidance, community perspective, partnerships, and strategic feedback.
            </p>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans pt-1">
              For subject-matter experts, survivor advocates, researchers, trade practitioners, and community leaders who wish to offer valuable counsel without taking on formal legal and fiduciary board liabilities.
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
                  ? "bg-amber-700 text-white shadow-sm"
                  : "bg-brand-paper hover:bg-stone-200 text-brand-charcoal border border-stone-300"
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
        <h4 className="text-xs font-mono uppercase tracking-widest text-stone-600 font-bold">
          Key Focus Areas & Desired Perspectives:
        </h4>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {TARGET_COMPETENCIES.map((c, i) => (
            <div key={i} className="p-3 bg-brand-ivory rounded border border-stone-300 space-y-1 shadow-sm">
              <span className="text-[11px] font-bold text-brand-charcoal block font-mono">{c.area}</span>
              <p className="text-[10px] text-stone-600 leading-snug font-sans">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Interest Submission Form */}
      {activeFormType && (
        <div className="mt-8 pt-8 border-t border-brand-sand animate-fadeIn">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-brand-ivory border border-stone-300 rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
              <div className="border-b border-brand-sand pb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-brand-oxblood font-bold block">
                    INTEREST EXPRESSION
                  </span>
                  <h3 className="text-xl font-serif font-bold text-brand-charcoal">
                    {activeFormType === "FOUNDING_BOARD"
                      ? "Founding Board Interest Form"
                      : "Advisory Circle Interest Form"}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveFormType(null)}
                  className="text-xs text-stone-500 hover:text-brand-charcoal font-mono"
                >
                  [Close Form]
                </button>
              </div>

              {/* Privacy & Emergency Warning */}
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-brand-oxblood shadow-sm">
                <AlertCircle className="w-4 h-4 text-brand-oxblood shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Privacy & Emergency Notice:</strong> Please do not submit sensitive personal records, case documents, medical information, or identifying survivor information through this form. This prototype is not monitored for emergencies.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    Full Name <span className="text-brand-oxblood">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Rivera"
                    value={formData.fullName || ""}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    Email Address <span className="text-brand-oxblood">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@organization.org"
                    value={formData.email || ""}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    Current Role or Organization <span className="text-brand-oxblood">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Managing Director / Senior Counsel / Executive Director"
                    value={formData.currentRole || ""}
                    onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    LinkedIn or Professional Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedInUrl || ""}
                    onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>
              </div>

              {/* Area of Expertise Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-brand-charcoal mb-2 font-mono">
                  Area(s) of Expertise (Select all that apply) <span className="text-brand-oxblood">*</span>
                </label>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-700 font-sans">
                  {TARGET_COMPETENCIES.map((c, idx) => (
                    <label
                      key={idx}
                      className="flex items-start gap-2 p-2 bg-brand-paper rounded border border-stone-300 hover:border-stone-400 cursor-pointer shadow-sm"
                    >
                      <input
                        type="checkbox"
                        checked={(formData.areaOfExpertise || []).includes(c.area)}
                        onChange={() => handleCheckboxToggle(c.area)}
                        className="mt-0.5 accent-brand-oxblood"
                      />
                      <span className="text-[11px] leading-tight">{c.area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Text Areas */}
              <div>
                <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                  Relevant Experience & Background <span className="text-brand-oxblood">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summarize your professional background, specific domain expertise, and accomplishments relevant to Maps With Teeth..."
                  value={formData.relevantExperience || ""}
                  onChange={(e) => setFormData({ ...formData, relevantExperience: e.target.value })}
                  className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                  Prior Board, Advisory, or Fiduciary Experience
                </label>
                <textarea
                  rows={2}
                  placeholder="List any past or current nonprofit, civic, advisory, or corporate boards you have served on..."
                  value={formData.priorBoardExperience || ""}
                  onChange={(e) => setFormData({ ...formData, priorBoardExperience: e.target.value })}
                  className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                  Why Maps With Teeth interests you <span className="text-brand-oxblood">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="What draws you to the barrier-first principle and cross-system resource navigation?"
                  value={formData.whyInterested || ""}
                  onChange={(e) => setFormData({ ...formData, whyInterested: e.target.value })}
                  className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    Potential Conflicts of Interest (if any)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. None / Leadership role at related regional agency"
                    value={formData.potentialConflicts || ""}
                    onChange={(e) => setFormData({ ...formData, potentialConflicts: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                    Availability / Expected Capacity <span className="text-brand-oxblood">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4-6 hours/month / Quarterly strategic sessions"
                    value={formData.expectedCapacity || ""}
                    onChange={(e) => setFormData({ ...formData, expectedCapacity: e.target.value })}
                    className="w-full bg-brand-paper border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-brand-sand flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-stone-500 italic font-mono">
                  Submitting this form begins a conversation and does not guarantee a board position.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-sm transition-colors shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Interest</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal">Thank you for your interest.</h3>
              <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed font-sans">
                Your profile has been received by our leadership team. We are scheduling exploratory conversations with prospective founding leaders on a rolling basis as we structure our initial governance framework.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-brand-oxblood hover:underline font-mono pt-2 block mx-auto font-bold"
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
