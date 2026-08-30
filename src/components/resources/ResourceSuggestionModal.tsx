"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertTriangle, FileCheck, Loader2 } from "lucide-react";

interface ResourceSuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialResourceName?: string;
}

export function ResourceSuggestionModal({
  isOpen,
  onClose,
  initialResourceName = "",
}: ResourceSuggestionModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    resourceName: initialResourceName,
    organization: "",
    websiteUrl: "",
    geographicScope: "Texas (Central Pilot)",
    typeOfUpdate: "CORRECTION",
    accessConditionsNotice: "",
    submitterName: "",
    email: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "RESOURCE",
          data: {
            ...formData,
            dateSubmitted: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit resource update.");
      }

      setSubmitted(true);
      setConfirmationSent(Boolean(result.confirmationSent));
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while sending your update.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn select-none font-sans">
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative bg-grid-atlas">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-[#1C1D1D] p-1.5 rounded-md hover:bg-[#EEE8DD] transition-colors border border-[#D9D1C4]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#D9D1C4] pb-4 mb-4">
          <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold block">
            DATA ACCURACY & VERIFICATION
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Suggest a Resource or Report a Correction
          </h2>
          <p className="text-xs text-stone-700 mt-1">
            All leads are routed directly to <strong>resources@mapswithteeth.org</strong> and audited under our 10-step newsroom protocol.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="p-2.5 bg-[#FDF2F2] border border-[#971F26] text-xs text-[#971F26] font-mono">
                {errorMessage}
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Resource / Program Name:
                </label>
                <input
                  type="text"
                  required
                  maxLength={120}
                  placeholder="e.g. TCFV Electric Deposit Waiver"
                  value={formData.resourceName}
                  onChange={(e) => setFormData({ ...formData, resourceName: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Operating Organization:
                </label>
                <input
                  type="text"
                  maxLength={120}
                  placeholder="e.g. Public Utility Commission of Texas"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Type of Submission:
                </label>
                <select
                  value={formData.typeOfUpdate}
                  onChange={(e) => setFormData({ ...formData, typeOfUpdate: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] font-mono focus:outline-none"
                >
                  <option value="CORRECTION">Correction to Existing Entry</option>
                  <option value="NEW_RESOURCE">New Resource / Fund Suggestion</option>
                  <option value="STALE_WARNING">Program Expired / Waitlist Closed</option>
                  <option value="NEW_FRICTION">Undocumented Barrier Discovered</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Source / Verification URL:
                </label>
                <input
                  type="url"
                  maxLength={200}
                  placeholder="https://..."
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                Details, Access Friction, or Correction Notes:
              </label>
              <textarea
                rows={3}
                required
                maxLength={3000}
                placeholder="What is changing? What documentation is required? What is 'the catch'?"
                value={formData.accessConditionsNotice}
                onChange={(e) => setFormData({ ...formData, accessConditionsNotice: e.target.value })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none font-sans"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Your Name / Role (Optional):
                </label>
                <input
                  type="text"
                  maxLength={100}
                  placeholder="Advocate, Provider, or Community Member"
                  value={formData.submitterName}
                  onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Your Email (Optional):
                </label>
                <input
                  type="email"
                  maxLength={150}
                  placeholder="name@organization.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-[#971F26] hover:bg-red-900 disabled:opacity-60 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Routing to resources@mapswithteeth.org...</span>
                </>
              ) : (
                <span>Submit Resource Intelligence Lead →</span>
              )}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-3 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#F5F1E8] border border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
              <CheckCircle2 className="w-5 h-5 text-[#971F26]" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1C1D1D]">
              Resource Lead Transmitted
            </h3>
            <p className="text-xs text-stone-700 font-sans leading-relaxed">
              Thank you for keeping Maps With Teeth accurate. Your update has been routed to <strong>resources@mapswithteeth.org</strong> for investigation.
            </p>
            {confirmationSent && (
              <p className="text-[11px] text-[#971F26] font-mono font-bold">
                ✓ Confirmation email sent to {formData.email}.
              </p>
            )}
            <button
              onClick={onClose}
              className="mt-2 px-4 py-1.5 bg-[#1C1D1D] text-white rounded text-xs font-mono font-bold uppercase"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
