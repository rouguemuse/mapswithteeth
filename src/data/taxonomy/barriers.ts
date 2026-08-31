export interface BarrierCategory {
  id: string;
  label: string;
  category: "HOUSING" | "MONEY" | "TECH" | "TRANSPORT" | "LEGAL" | "FAMILY_PETS" | "WORK_IDENTITY";
  description: string;
  iconName: string;
}

export const BARRIER_CATEGORIES: BarrierCategory[] = [
  // Immediate Cash & Money
  {
    id: "money-now",
    label: "I need money right now",
    category: "MONEY",
    description: "Emergency micro-grants, gas vouchers, food support, and flexible hardship cash to resolve immediate crises.",
    iconName: "Banknote",
  },
  {
    id: "utility-deposit",
    label: "I cannot pay a utility deposit or shutoff",
    category: "MONEY",
    description: "Utility deposit waivers, emergency energy funds, and shutoff protections for survivors.",
    iconName: "Zap",
  },
  {
    id: "coerced-debt-credit",
    label: "He destroyed my credit / coerced debt",
    category: "MONEY",
    description: "Credit rebuilding, identity protection, dispute letters, and coerced debt legal remedies.",
    iconName: "CreditCard",
  },

  // Housing
  {
    id: "safe-stay",
    label: "I need somewhere safe to stay",
    category: "HOUSING",
    description: "Emergency shelter alternatives, rapid rehousing, hotel vouchers, and transitional safe stays.",
    iconName: "Home",
  },
  {
    id: "lease-escape",
    label: "I need to get off or break a lease",
    category: "HOUSING",
    description: "Statutory early lease termination rights without penalty, cotenant liability cutoffs, and lock change rights.",
    iconName: "Key",
  },
  {
    id: "rent-deposit",
    label: "I need help with rent or a security deposit",
    category: "HOUSING",
    description: "Deposit assistance funds, move-in grants, Crime Victims' Compensation relocation, and rent micro-grants.",
    iconName: "DoorOpen",
  },
  {
    id: "furniture-household",
    label: "I need furniture / household goods after leaving",
    category: "HOUSING",
    description: "Community furniture banks, starter home kits, and donated household goods networks.",
    iconName: "Package",
  },

  // Tech & Phone
  {
    id: "phone-controlled",
    label: "Someone controls or tracks my phone",
    category: "TECH",
    description: "Safe Connections Act line separation, clean phone acquisition, Lifeline survivor service, and device safety.",
    iconName: "Smartphone",
  },
  {
    id: "device-car-tracking",
    label: "I think my car or device is being tracked",
    category: "TECH",
    description: "AirTag / Bluetooth tracker scanning, connected-vehicle telematics disconnection, and location security.",
    iconName: "ShieldAlert",
  },
  {
    id: "address-confidentiality",
    label: "My address cannot be public",
    category: "TECH",
    description: "State Address Confidentiality Programs (ACP), voter record privacy, and legal mail forwarding.",
    iconName: "EyeOff",
  },

  // Transportation
  {
    id: "gas-travel",
    label: "I need gas or transportation right now",
    category: "TRANSPORT",
    description: "Gas cards, bus passes, rideshare vouchers, and emergency travel support.",
    iconName: "Fuel",
  },
  {
    id: "car-repair-dispute",
    label: "He took the car / I need vehicle repair",
    category: "TRANSPORT",
    description: "Nonprofit car repair, title dispute help, charitable vehicle programs, and rideshare credits.",
    iconName: "Car",
  },
  {
    id: "long-distance-relocation",
    label: "I need transportation to another city/state",
    category: "TRANSPORT",
    description: "Greyhound Home Free, survivor airline travel coordination, and long-distance relocation grants.",
    iconName: "Plane",
  },

  // Family & Pets
  {
    id: "pets",
    label: "I have nowhere for my pet / dog / cat",
    category: "FAMILY_PETS",
    description: "Pet boarding grants (RedRover), confidential foster networks, pet deposits, and vet care.",
    iconName: "Dog",
  },
  {
    id: "childcare-school",
    label: "I need childcare or help with school for my children",
    category: "FAMILY_PETS",
    description: "School district family assistance, McKinney-Vento evaluation, emergency childcare subsidies, and supplies.",
    iconName: "GraduationCap",
  },
  {
    id: "custody-kids",
    label: "I need help involving children / custody",
    category: "FAMILY_PETS",
    description: "Family court safety procedures, legal aid representation, and safe exchange options.",
    iconName: "Users",
  },

  // Legal
  {
    id: "legal-representation",
    label: "I need legal help / protective order",
    category: "LEGAL",
    description: "Free legal counsel, protective orders (MOEP, Ex Parte, Final), kick-out orders, and court fee waivers.",
    iconName: "Scale",
  },
  {
    id: "police-civil-matter",
    label: "Police keep telling me it is a civil matter",
    category: "LEGAL",
    description: "Property retrieval procedures, civil standby rights, statutory torts, and legal aid advocacy.",
    iconName: "AlertTriangle",
  },

  // Work, Taxes, Identity
  {
    id: "industry-hardship",
    label: "I work in food/hospitality/arts and have no cash",
    category: "WORK_IDENTITY",
    description: "Occupation-based emergency relief funds for restaurant, music, craft, freelance, and trade workers.",
    iconName: "Utensils",
  },
  {
    id: "taxes-identity-docs",
    label: "I need tax, identity, or document protection",
    category: "WORK_IDENTITY",
    description: "IRS IP PIN, IRS Form 8857 Innocent Spouse Relief, Special SSA SSN issuance, and document replacement.",
    iconName: "FileText",
  },
  {
    id: "medical-dental",
    label: "I need medical or reconstructive dental care",
    category: "WORK_IDENTITY",
    description: "Give Back a Smile free dental restoration, Crime Victims' Compensation medical, and health clinic access.",
    iconName: "HeartPulse",
  },
];
