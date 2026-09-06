"use client";

import React, { useState, useEffect } from "react";
import { Compass, ChevronUp, X, ChevronRight, Layers } from "lucide-react";

interface SectionItem {
  id: string;
  number: string;
  label: string;
  sublabel: string;
}

const SECTIONS: SectionItem[] = [
  {
    id: "solve-problems",
    number: "01",
    label: "What Are You Solving?",
    sublabel: "Immediate user-centered problem entry",
  },
  {
    id: "build-a-way",
    number: "02",
    label: "Build a Way Through",
    sublabel: "Interactive 3-step pathway stack generator",
  },
  {
    id: "the-teeth",
    number: "03",
    label: "The Teeth (Barriers)",
    sublabel: "What actually blocks access in public systems",
  },
  {
    id: "comparison",
    number: "04",
    label: "Directory vs. Maps With Teeth",
    sublabel: "How information & constraints are handled",
  },
  {
    id: "texas-lateral",
    number: "05",
    label: "Texas & Lateral Aid",
    sublabel: "254 counties & non-obvious relief funds",
  },
  {
    id: "continuity",
    number: "06",
    label: "Between the Doors",
    sublabel: "Continuity layer & portable receipts",
  },
  {
    id: "how-we-know",
    number: "07",
    label: "How We Verify",
    sublabel: "5-tier evidence architecture & source transparency",
  },
  {
    id: "roadmap",
    number: "08",
    label: "What Is Built & Roadmap",
    sublabel: "Testable today vs. in active development",
  },
  {
    id: "support-feedback",
    number: "09",
    label: "Participate & Support",
    sublabel: "Pressure-test model & fund the pilot",
  },
];

export function MobileStickySectionNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }

      // Detect current section in view
      const scrollPosition = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Bottom Action Bar on Mobile/Tablet */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 flex items-center justify-between pointer-events-none lg:hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
        {/* Jump Menu Trigger Pill */}
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-2 bg-[#26221F] text-[#F5F1E8] rounded-full shadow-xl border border-[#D9D1C4]/40 text-xs font-mono font-bold tracking-wider hover:bg-black active:scale-95 transition-all"
          aria-label="Open page section navigation"
        >
          <Compass className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>On this page</span>
          <span className="text-[10px] text-[#D9D1C4] bg-[#38332E] px-1.5 py-0.5 rounded-full font-normal">
            {SECTIONS.find((s) => s.id === activeSection)?.number || "▾"}
          </span>
        </button>

        {/* Floating Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 bg-[#F5F1E8] text-[#26221F] rounded-full shadow-lg border border-[#D9D1C4] hover:bg-white active:scale-95 transition-all"
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Sheet Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-neutral-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          {/* Backdrop click to dismiss */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />

          {/* Drawer Content */}
          <div className="bg-[#F5F1E8] border-t-2 border-[#26221F] rounded-t-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-250 font-mono">
            {/* Header */}
            <div className="p-4 border-b border-[#D9D1C4] flex items-center justify-between bg-[#EEE8DD] rounded-t-2xl">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#971F26]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#1C1D1D]">
                  On This Page · Jump to Section
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-[#F5F1E8] text-stone-700 hover:text-black border border-[#D9D1C4]"
                aria-label="Close section navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Section List */}
            <div className="overflow-y-auto p-3 space-y-1.5 divide-y divide-[#D9D1C4]/40">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                      isActive
                        ? "bg-[#EEE8DD] border-l-4 border-[#971F26] text-[#1C1D1D]"
                        : "hover:bg-[#EEE8DD]/60 text-stone-800"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-[#971F26] text-white"
                          : "bg-[#D9D1C4] text-stone-800"
                      }`}
                    >
                      {section.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-stone-900 truncate">
                        {section.label}
                      </div>
                      <div className="text-[11px] text-stone-600 font-sans line-clamp-1">
                        {section.sublabel}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 self-center" />
                  </button>
                );
              })}
            </div>

            {/* Footer with Quick Top Action */}
            <div className="p-3 border-t border-[#D9D1C4] bg-[#EEE8DD] flex items-center justify-between">
              <span className="text-[10px] text-stone-600">Maps With Teeth · Navigation</span>
              <button
                onClick={scrollToTop}
                className="text-xs text-[#971F26] font-bold hover:underline inline-flex items-center gap-1"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
