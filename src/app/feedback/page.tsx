import React from "react";
import Link from "next/link";
import { StakeholderFeedbackSection } from "@/components/feedback/StakeholderFeedbackSection";
import { ArrowLeft, MessageSquareQuote } from "lucide-react";

export default function FeedbackPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white font-mono transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <StakeholderFeedbackSection isStandalonePage={true} />
    </div>
  );
}
