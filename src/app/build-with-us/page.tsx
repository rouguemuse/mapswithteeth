"use client";

import React, { useState } from "react";
import { CollaboratorRole, CollaboratorSubmission } from "@/types/collaborator";
import { HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Scale } from "lucide-react";

function BuildWithUsContent() {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const roleOptions: [CollaboratorRole, string][] = [
    ["FISCAL_SPONSOR", "Fiscal Sponsor / Institutional Host"],
    ["FOUNDATION_FUNDER", "Foundation / Grant Funder / Donor"],
    ["SURVIVOR_ADVOCATE", "Domestic Violence / Survivor Advocate"],
    ["ATTORNEY_LEGAL_RESEARCHER", "Attorney / Legal Researcher"],
    ["TECH_PRIVACY_SPECIALIST", "Technology & Privacy / Digital Safety Specialist"],
    ["COMMUNITY_ORGANIZER", "Community Organization / Mutual Aid / Faith Leader"],
    ["MECHANIC_AUTO_PARTNER", "Mechanic / Auto Repair Partner"],
    ["LOCKSMITH_PARTNER", "Locksmith / Residential Security Partner"],
    ["PET_FOSTER_NETWORK", "Pet Foster / Veterinary Care Partner"],
    ["RESEARCH_VOLUNTEER", "State Research Volunteer"],
    ["OTHER", "Other Collaborative Capacity"],
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-brand-sand pb-6">
        <div className="flex items-center gap-2 text-brand-oxblood mb-2">
          <HeartHandshake className="w-5 h-5" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            Collaborator Intake & Partnership
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal tracking-tight">
          Help Build Maps With Teeth
        </h1>
        <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed font-sans">
          Building a truly comprehensive barrier-first resource intelligence platform requires cross-disciplinary collaboration. We invite fiscal sponsors, attorneys, advocates, researchers, technologists, trade partners, and funders to join our working coalition.
        </p>
      </div>

      {/* Dedicated Founding Board & Advisory Circle Banner */}
      <div className="p-5 bg-brand-paper border border-brand-sand border-l-4 border-l-brand-oxblood rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-brand-charcoal font-serif font-bold text-sm">
            <Scale className="w-4 h-4 text-brand-oxblood" />
            <span>Interested in Fiduciary Governance or the Advisory Circle?</span>
          </div>
          <p className="text-xs text-stone-600 max-w-xl font-sans">
            We are actively beginning exploratory conversations with prospective Founding Board directors and Advisory Circle subject-matter leaders.
          </p>
        </div>
        <a
          href="/governance"
          className="px-4 py-2 bg-brand-ivory hover:bg-stone-200 text-brand-charcoal rounded text-xs font-mono uppercase tracking-wider font-bold shrink-0 border border-stone-300 hover:border-brand-oxblood transition-colors shadow-sm"
        >
          View Board & Advisory Pathways →
        </a>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-brand-paper border border-brand-sand rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
          {/* Privacy & Emergency Warning */}
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-brand-oxblood shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-oxblood shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Privacy & Emergency Notice:</strong> Please do not submit sensitive personal records, case documents, medical information, or identifying survivor information through this form. This prototype is not monitored for emergencies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Your Name / Primary Contact:
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Email Address:
              </label>
              <input
                type="email"
                required
                placeholder="jane@organization.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Organization / Firm / Affiliation (if applicable):
              </label>
              <input
                type="text"
                placeholder="e.g. Legal Aid of NW Texas / Independent"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
                Geographic Base / Location:
              </label>
              <input
                type="text"
                placeholder="e.g. Austin, TX / Houston, TX / Remote"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
              How would you like to collaborate?
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as CollaboratorRole })}
              className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal focus:border-brand-oxblood"
            >
              {roleOptions.map(([val, label]) => (
                <option key={val} value={val}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-charcoal mb-1 font-mono">
              What specific expertise, resource, or partnership would you like to contribute?
            </label>
            <textarea
              rows={4}
              required
              placeholder="e.g., We are an established 501(c)(3) interested in discussing fiscal sponsorship / I am an attorney who can audit Texas housing statutes / We are a pet foster group in Central Texas / We want to fund the Central Texas pilot..."
              value={formData.howToCollaborate}
              onChange={(e) => setFormData({ ...formData, howToCollaborate: e.target.value })}
              className="w-full bg-brand-ivory border border-stone-300 rounded-lg p-2.5 text-xs text-brand-charcoal placeholder-stone-400 focus:border-brand-oxblood focus:outline-none"
            />
          </div>

          <div className="pt-2 border-t border-brand-sand flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-brand-oxblood hover:bg-red-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-2 shadow-sm transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Collaboration Profile</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-4 shadow-sm animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-700 mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-brand-charcoal">
            Thank you for building with Maps With Teeth.
          </h2>
          <p className="text-xs text-stone-700 max-w-lg mx-auto leading-relaxed font-sans">
            Your collaboration profile has been recorded in our collaborator database. Our leadership team reviews partner inquiries on a rolling basis as we structure our Central Texas pilot.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-brand-oxblood hover:underline font-mono font-bold"
          >
            Submit Another Collaboration Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default function BuildWithUsPage() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-xs text-stone-500 font-mono">Loading form...</div>}>
      <BuildWithUsContent />
    </React.Suspense>
  );
}
