"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Send, ShieldCheck, Mail } from "lucide-react";

export function SupportInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "FISCAL_SPONSORSHIP",
    message: "",
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
          category: "SUPPORT",
          data: {
            ...formData,
            dateSubmitted: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit support inquiry.");
      }

      setSubmitted(true);
      setConfirmationSent(Boolean(result.confirmationSent));
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm bg-grid-atlas">
      <div className="border-b border-[#D9D1C4] pb-4">
        <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold block">
          INSTITUTIONAL INQUIRIES & FUNDING
        </span>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
          Send a Support or Funding Inquiry
        </h2>
        <p className="text-xs text-stone-700 mt-1 font-sans">
          Direct questions regarding fiscal sponsorship, philanthropic contributions, corporate partnerships, or payment mechanisms are routed to <strong>hello@mapswithteeth.org</strong>.
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
            <div className="p-3 bg-[#FDF2F2] border-2 border-[#971F26] rounded text-xs text-[#971F26] font-mono">
              <strong>Submission Error:</strong> {errorMessage}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Your Name / Contact:
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
                placeholder="jane@organization.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Organization / Entity (Optional):
              </label>
              <input
                type="text"
                maxLength={120}
                placeholder="Foundation, Host, or Independent"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] placeholder-stone-400 focus:border-[#971F26] focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
                Nature of Inquiry:
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-[#F5F1E8] border border-[#1C1D1D] rounded-md p-2.5 text-xs text-[#1C1D1D] focus:border-[#971F26] font-mono"
              >
                <option value="FISCAL_SPONSORSHIP">Fiscal Sponsorship Partnership</option>
                <option value="GRANT_PHILANTHROPY">Grant / Foundation Funding</option>
                <option value="INDIVIDUAL_DONATION">Individual Major Contribution</option>
                <option value="PAYMENT_STRIPE">Stripe / Payment Administration</option>
                <option value="OTHER_FINANCIAL">Other Financial / Support Matter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1C1D1D] mb-1 font-mono uppercase">
              Message or Specific Questions:
            </label>
            <textarea
              rows={4}
              required
              maxLength={3000}
              placeholder="Provide details about your funding timeline, fiscal sponsorship capabilities, or specific questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                <span>Routing to hello@mapswithteeth.org...</span>
              </>
            ) : (
              <span>Submit Support Inquiry →</span>
            )}
          </button>
        </form>
      ) : (
        <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] rounded-xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#EEE8DD] border-2 border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#971F26]" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#1C1D1D]">
            Inquiry Routed
          </h3>
          <p className="text-xs text-stone-700 max-w-md mx-auto font-sans leading-relaxed">
            Thank you for reaching out. Your inquiry has been securely routed to <strong>hello@mapswithteeth.org</strong>.
          </p>
          {confirmationSent && (
            <p className="text-[11px] text-[#971F26] font-mono font-bold">
              ✓ An acknowledgement email has been sent to {formData.email}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
