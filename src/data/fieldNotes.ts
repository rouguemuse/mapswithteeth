export interface FieldNote {
  id: string;
  quote: string;
  sourceRole: string;
  location: string;
  timeAgo: string;
  category: "SHELTER" | "PETS" | "SCHOOLS" | "LEGAL" | "UTILITIES" | "HOSPITALITY" | "TRANSPORT";
  verifiedStatuteOrProgram?: string;
}

export const PRACTITIONER_FIELD_NOTES: FieldNote[] = [
  {
    id: "fn-1",
    quote: "Intake hotlines rarely offer motel overflow vouchers upfront. Ask specifically for 'emergency placement exception review' if you have no safe shelter tonight.",
    sourceRole: "Shelter Intake Staff",
    location: "Central Texas",
    timeAgo: "2d ago",
    category: "SHELTER",
  },
  {
    id: "fn-2",
    quote: "Pet foster boarding is almost never listed on public intake sheets—it is activated directly through an assigned DV advocate or case manager.",
    sourceRole: "DV Advocate",
    location: "Texas",
    timeAgo: "5d ago",
    category: "PETS",
    verifiedStatuteOrProgram: "RedRover Safe Escape / APA PASS",
  },
  {
    id: "fn-3",
    quote: "School district McKinney-Vento liaisons can issue emergency bus passes or arrange dedicated van transport for children in crisis same-day without income proof.",
    sourceRole: "School Social Worker",
    location: "Public School District",
    timeAgo: "1w ago",
    category: "SCHOOLS",
    verifiedStatuteOrProgram: "McKinney-Vento Act (42 U.S.C. § 11431)",
  },
  {
    id: "fn-4",
    quote: "FCC Safe Connections Act legally requires carriers to separate your mobile line with zero cancellation fees and zero notification to the primary account holder.",
    sourceRole: "Telecom Legal Researcher",
    location: "Federal / Nationwide",
    timeAgo: "3d ago",
    category: "LEGAL",
    verifiedStatuteOrProgram: "47 U.S.C. § 345 / 47 CFR Part 64",
  },
  {
    id: "fn-5",
    quote: "Food & beverage hardship grants pay landlords and electric utilities directly within 72 hours once 6-month culinary paystubs are verified.",
    sourceRole: "Hospitality Mutual Aid Organizer",
    location: "Nationwide",
    timeAgo: "1w ago",
    category: "HOSPITALITY",
    verifiedStatuteOrProgram: "Giving Kitchen / Southern Smoke",
  },
  {
    id: "fn-6",
    quote: "Retail electric customer service reps often don't recognize survivor deposit waiver forms until you explicitly cite Texas PUC Subst. R. § 25.478.",
    sourceRole: "Utility Navigator",
    location: "Texas ERCOT Region",
    timeAgo: "2w ago",
    category: "UTILITIES",
    verifiedStatuteOrProgram: "Texas PUC Subst. R. § 25.478",
  },
  {
    id: "fn-7",
    quote: "Under Texas Property Code § 92.016, you do NOT need a police report to break an unsafe lease—a signed letter from a licensed counselor or advocate is legally binding.",
    sourceRole: "Tenant Rights Advocate",
    location: "Travis & Williamson Cos.",
    timeAgo: "3w ago",
    category: "LEGAL",
    verifiedStatuteOrProgram: "Tex. Prop. Code § 92.016",
  },
];
