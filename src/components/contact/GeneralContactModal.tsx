"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Loader2, Mail } from "lucide-react";

interface GeneralContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GeneralContactModal({ isOpen, onClose }: GeneralContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
          category: "GENERAL",
          data: {
            ...formData,
            dateSubmitted: new Date().toISOString(),
          },
          _hp: honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit message.");
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn select-none font-sans">
      <div className="bg-[#F5F1E8] border-2 border-[#1C1D1D] text-[#1C1D1D] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative bg-grid-atlas">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-[#1C1D1D] p-1.5 rounded-md hover:bg-[#EEE8DD] transition-colors border border-[#D9D1C4]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#D9D1C4] pb-4 mb-4">
          <span className="text-[10px] font-mono uppercase text-[#971F26] font-bold block">
            GENERAL INQUIRY
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1D1D]">
            Contact Maps With Teeth
          </h2>
          <p className="text-xs text-stone-700 mt-1 font-sans">
            General inquiries are securely routed to <strong>hello@mapswithteeth.org</strong>.
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
                  Your Name:
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                  Your Email:
                </label>
                <input
                  type="email"
                  required
                  maxLength={150}
                  placeholder="jane@example.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                Subject:
              </label>
              <input
                type="text"
                maxLength={120}
                placeholder="Topic or inquiry focus..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold uppercase text-[#1C1D1D] mb-1">
                Message:
              </label>
              <textarea
                rows={4}
                required
                maxLength={3000}
                placeholder="How can we help? (Please do not include sensitive emergency, legal, or medical records)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#EEE8DD] border border-[#1C1D1D] rounded p-2 text-xs text-[#1C1D1D] focus:outline-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-[#971F26] hover:bg-red-900 disabled:opacity-60 text-white rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Routing to hello@mapswithteeth.org...</span>
                </>
              ) : (
                <span>Send Message →</span>
              )}
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-3 bg-[#EEE8DD] border-2 border-[#1C1D1D] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[#F5F1E8] border border-[#1C1D1D] flex items-center justify-center text-[#971F26] mx-auto">
              <CheckCircle2 className="w-5 h-5 text-[#971F26]" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1C1D1D]">
              Message Received
            </h3>
            <p className="text-xs text-stone-700 font-sans leading-relaxed">
              Your inquiry has been routed to <strong>hello@mapswithteeth.org</strong>.
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
