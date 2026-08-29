import { TexasCountyData } from "@/types/texas";

export const WILLIAMSON_COUNTY: TexasCountyData = {
  slug: "williamson",
  name: "Williamson County",
  region: "CENTRAL_TEXAS_PILOT",
  seat: "Georgetown",
  majorCities: ["Round Rock", "Georgetown", "Cedar Park", "Leander", "Taylor", "Hutto"],
  isPilotRegion: true,
  emergencyShelterPartner: "Hope Alliance (Round Rock / 24hr Crisis Line 800-460-7233)",
  legalAidProvider: "Lone Star Legal Aid / Texas RioGrande Legal Aid (TRLA) / Texas Advocacy Project",
  communityActionAgency: "Opportunities for Williamson and Burnet Counties (OWBC / Community Action)",
  utilityProviders: ["Oncor (Deregulated REPs)", "Pedernales Electric Co-op (PEC)", "Georgetown Utility Systems (GUS)", "TXU Energy", "Reliant"],
  keyLocalFunds: [
    {
      name: "Opportunities for Williamson & Burnet Counties (OWBC)",
      description: "CSBG Community Action Agency offering Comprehensive Energy Assistance Program (CEAP), emergency rental relief, and family self-sufficiency micro-aid.",
      focus: "Energy assistance, CSBG micro-aid, rent",
      website: "https://owbc-tx.org",
    },
    {
      name: "St. Vincent de Paul Conferences (St. William / St. Helen)",
      description: "Active WilCo conferences assisting with local rent assistance, gas vouchers, emergency motel stays, and utility bills.",
      focus: "Gas cards, utility payments, emergency micro-cash",
      website: "https://svdprr.org",
    },
    {
      name: "Round Rock Area Serving Center (The Serving Center)",
      description: "Emergency financial assistance for utilities, prescription medications, transportation vouchers, and community food pantry.",
      focus: "Utilities, prescriptions, gas vouchers, food",
      website: "https://rrasc.org",
    },
    {
      name: "The Caring Place (Georgetown & Northern WilCo)",
      description: "Emergency financial assistance for basic needs including housing deposits, rent, utilities, medical prescriptions, and transportation for residents in Georgetown, Andice, Jarrell, Jonah, and Walburg.",
      focus: "Rent, deposits, utility bills, emergency vouchers",
      website: "https://caringplacetx.org",
    },
    {
      name: "Hill Country Community Ministries (Leander & Cedar Park)",
      description: "Crisis food pantry, clothes closet, and emergency assistance for southwest Williamson County residents.",
      focus: "Food, clothing, emergency assistance",
      website: "https://hccm.org",
    },
  ],
  localNuances: [
    "Most of Williamson County (Round Rock, Taylor, Hutto) is in the deregulated ERCOT electric market, meaning retail electric providers MUST honor the PUCT § 25.478 Domestic Violence Deposit Waiver certification letter.",
    "City of Georgetown Utility Systems (GUS) is municipally owned but coordinates with The Caring Place for emergency utility relief.",
    "Hope Alliance offers confidential legal advocacy and shelter without requiring a police report.",
  ],
};
