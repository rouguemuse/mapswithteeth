"use client";

import React, { useState, useEffect } from "react";
import { Compass, ChevronUp, X, ChevronRight, Layers } from "lucide-react";

export interface SectionItem {
  id: string;
  number: string;
  label: string;
  sublabel: string;
}

const DEFAULT_HOME_SECTIONS: SectionItem[] = [
  {
    id: "distinction-inventory",
    number: "01",
    label: "Law vs. Code vs. Proposal",
    sublabel: "Four-tier distinction inventory",
  },
  {
    id: "problem",
    number: "02",
    label: "The Seam Problem",
    sublabel: "When the human becomes the integration layer",
  },
  {
    id: "practice",
    number: "03",
    label: "Model A · Continuity Receipt",
    sublabel: "Participant-held record & 9-status Review Trace",
  },
  {
    id: "tracks",
    number: "04",
    label: "Model B · Number Continuity",
    sublabel: "Separating billing authority from adult identity",
  },
  {
    id: "methodology-safeguards",
    number: "05",
    label: "Evidence Safeguards",
    sublabel: "10 distinctions & 8 integrity protocols",
  },
  {
    id: "work-in-practice",
    number: "06",
    label: "Applications & Adoption",
    sublabel: "Central TX Matcher & Dec 2–3, 2026 Sunset Brief",
  },
  {
    id: "strategic-standard",
    number: "07",
    label: "System Change Map & Roadmap",
    sublabel: "5 core inquiries, 8 diagnostic questions & fellowship",
  },
  {
    id: "participate",
    number: "08",
    label: "Participate & Review",
    sublabel: "Open public-interest field review pathways",
  },
];

export function MobileStickySectionNav({
  sections = DEFAULT_HOME_SECTIONS,
}: {
  sections?: SectionItem[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 360) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }

      const scrollPosition = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
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
      {/* Compact Floating Action Bar on Mobile/Tablet */}
      <div className="fixed bottom-3 left-0 right-0 z-40 px-3 flex items-center justify-between pointer-events-none lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Open page section navigation"
          className="pointer-events-auto flex items-center gap-2 px-3 py-2 bg-mwt-ink text-mwt-paper-display rounded-xs shadow-xl border border-mwt-paper-muted/40 text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-black active:scale-95 transition-all cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5 text-mwt-signal-bright" aria-hidden="true" />
          <span>Sections</span>
          <span className="text-[10px] text-mwt-paper-muted bg-mwt-charcoal px-1.5 py-0.5 rounded-xs font-normal">
            {sections.find((s) => s.id === activeSection)?.number || "01–08"}
          </span>
        </button>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="pointer-events-auto p-2 bg-mwt-paper text-mwt-black rounded-xs shadow-lg border border-mwt-black hover:bg-white active:scale-95 transition-all cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom Sheet Drawer Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Page section navigation"
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/65 backdrop-blur-xs"
        >
          <div className="flex-1" onClick={() => setIsOpen(false)} />

          <div className="bg-mwt-paper border-t-2 border-mwt-black max-h-[78vh] flex flex-col shadow-2xl font-mono">
            <div className="p-3.5 border-b border-mwt-border-paper flex items-center justify-between bg-mwt-paper-muted">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-mwt-crimson-seal" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-mwt-black">
                  Jump to Chapter
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xs bg-mwt-paper text-mwt-black hover:text-mwt-crimson-seal border border-mwt-black/30 cursor-pointer"
                aria-label="Close section navigation"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto p-2.5 space-y-1 divide-y divide-mwt-border-paper/60">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-2.5 rounded-xs flex items-start gap-3 transition-colors cursor-pointer ${
                      isActive
                        ? "bg-mwt-paper-muted border-l-4 border-mwt-crimson-seal text-mwt-black"
                        : "hover:bg-mwt-paper-warm text-mwt-black"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold font-mono px-1.5 py-0.5 rounded-xs shrink-0 ${
                        isActive
                          ? "bg-mwt-crimson-seal text-white"
                          : "bg-mwt-paper-muted text-mwt-black border border-mwt-black/20"
                      }`}
                    >
                      {section.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-mwt-black truncate">
                        {section.label}
                      </div>
                      <div className="text-[11px] text-mwt-graphite font-sans truncate">
                        {section.sublabel}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-mwt-graphite shrink-0 self-center" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="p-3 border-t border-mwt-border-paper bg-mwt-paper-muted flex items-center justify-between">
              <span className="text-[10px] text-mwt-graphite uppercase">
                Maps With Teeth · Chapter Index
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="text-xs text-mwt-crimson-seal font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
