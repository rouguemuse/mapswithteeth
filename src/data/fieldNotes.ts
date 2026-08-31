export type CredibilityState =
  | "PRIMARY_SOURCE_CONFIRMED"
  | "PRACTITIONER_REPORTED"
  | "UNCONFIRMED_FIELD_NOTE";

export interface FieldNote {
  id: string;
  quote: string;
  sourceRole: string;
  location: string;
  timeAgo: string;
  category: "SHELTER" | "PETS" | "SCHOOLS" | "LEGAL" | "UTILITIES" | "HOSPITALITY" | "TRANSPORT";
  credibilityState: CredibilityState;
  credibilityLabel: string;
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
    credibilityState: "PRACTITIONER_REPORTED",
    credibilityLabel: "PRACTITIONER REPORTED",
    verifiedStatuteOrProgram: "Central TX Shelter Protocol",
  },
  {
    id: "fn-2",
    quote: "Pet foster boarding is almost never listed on public intake sheets—it is activated directly through an assigned DV advocate or case manager.",
    sourceRole: "DV Advocate",
    location: "Texas",
    timeAgo: "5d ago",
    category: "PETS",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "PROGRAM GUIDELINE",
    verifiedStatuteOrProgram: "RedRover Safe Escape / APA PASS",
  },
  {
    id: "fn-3",
    quote: "School district McKinney-Vento liaisons can issue emergency bus passes or arrange dedicated van transport for children in crisis same-day without income proof.",
    sourceRole: "School Social Worker",
    location: "Public School District",
    timeAgo: "1w ago",
    category: "SCHOOLS",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "STATUTE CONFIRMED",
    verifiedStatuteOrProgram: "McKinney-Vento Act (42 U.S.C. § 11431)",
  },
  {
    id: "fn-4",
    quote: "Under the FCC Safe Connections Act, carriers must separate your line within 2 days with zero fees and no primary account holder approval required. Review carrier notification timing for safety.",
    sourceRole: "Telecom Legal Researcher",
    location: "Federal / Nationwide",
    timeAgo: "3d ago",
    category: "LEGAL",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "STATUTE CONFIRMED",
    verifiedStatuteOrProgram: "47 U.S.C. § 345 / 47 CFR Part 64",
  },
  {
    id: "fn-5",
    quote: "Food & beverage hardship grants pay landlords and electric utilities directly within 72 hours once culinary paystubs are verified.",
    sourceRole: "Hospitality Mutual Aid Organizer",
    location: "Nationwide",
    timeAgo: "1w ago",
    category: "HOSPITALITY",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "PROGRAM GUIDELINE",
    verifiedStatuteOrProgram: "Giving Kitchen / Southern Smoke",
  },
  {
    id: "fn-6",
    quote: "Retail electric customer service reps often don't recognize survivor deposit waiver forms until you explicitly cite Texas PUC Subst. R. § 25.478.",
    sourceRole: "Utility Navigator",
    location: "Texas ERCOT Region",
    timeAgo: "2w ago",
    category: "UTILITIES",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "ADMIN CODE CONFIRMED",
    verifiedStatuteOrProgram: "Texas PUC Subst. R. § 25.478",
  },
  {
    id: "fn-7",
    quote: "Under Texas Property Code § 92.016, you do NOT need a police report to break an unsafe lease—a signed letter from a licensed counselor or advocate is legally binding.",
    sourceRole: "Tenant Rights Advocate",
    location: "Travis & Williamson Cos.",
    timeAgo: "3w ago",
    category: "LEGAL",
    credibilityState: "PRIMARY_SOURCE_CONFIRMED",
    credibilityLabel: "STATUTE CONFIRMED",
    verifiedStatuteOrProgram: "Tex. Prop. Code § 92.016",
  },
  {
    id: "fn-8",
    quote: "County-line address mismatches often trigger automatic hotline declines. Asking for 'cross-county reciprocal shelter placement' forces intake to check partner shelter beds.",
    sourceRole: "Crisis Line Worker",
    location: "Texas Regional",
    timeAgo: "4d ago",
    category: "SHELTER",
    credibilityState: "UNCONFIRMED_FIELD_NOTE",
    credibilityLabel: "UNCONFIRMED FIELD NOTE",
    verifiedStatuteOrProgram: "Inter-Agency Reciprocal Network",
  }
];
