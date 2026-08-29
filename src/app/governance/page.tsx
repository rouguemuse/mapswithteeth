import React from "react";
import Link from "next/link";
import { FoundingBoardSection } from "@/components/governance/FoundingBoardSection";
import { Shield, ArrowLeft } from "lucide-react";

export default function GovernancePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white font-mono transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to About Maps With Teeth</span>
        </Link>
      </div>

      <FoundingBoardSection defaultExpanded={true} />
    </div>
  );
}
