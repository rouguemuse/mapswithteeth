import { TexasCountyData } from "@/types/texas";

export const TRAVIS_COUNTY: TexasCountyData = {
  slug: "travis",
  name: "Travis County",
  region: "CENTRAL_TEXAS_PILOT",
  seat: "Austin",
  majorCities: ["Austin", "Pflugerville", "Manor", "Lakeway", "Del Valle", "Bee Cave"],
  isPilotRegion: true,
  emergencyShelterPartner: "SAFE Alliance (Kelly White Campus / Austin SafeLine 512-267-7233)",
  legalAidProvider: "Texas RioGrande Legal Aid (TRLA Austin) & Texas Advocacy Project",
  communityActionAgency: "Travis County Health and Human Services (Family Support Services) & Community Action Network",
  utilityProviders: ["Austin Energy", "Bluebonnet Electric Co-op", "Pedernales Electric Co-op (PEC)"],
  keyLocalFunds: [
    {
      name: "St. Vincent de Paul Diocesan Council of Austin (SVdP)",
      description: "Parish-based home visit conferences providing rapid emergency micro-grants for gas cards, utility disconnect prevention, locksmith fees, and rental assistance.",
      focus: "Micro-cash, utilities, gas, moving assistance",
      website: "https://svdpctx.org",
    },
    {
      name: "Caritas of Austin Emergency Assistance",
      description: "Targeted housing stabilization funds, rapid rehousing, and emergency groceries for individuals on the verge of displacement.",
      focus: "Housing stabilization, security deposits, basic needs",
      website: "https://caritasofaustin.org",
    },
    {
      name: "Austin Area Urban League Housing & Emergency Services",
      description: "Flexible financial assistance for rent, deposit, and workforce transportation for low-to-moderate income residents.",
      focus: "Rent, deposits, workforce transit",
      website: "https://aaul.org",
    },
    {
      name: "Central Texas Food Bank Client Services",
      description: "Direct emergency food pantries and expedited SNAP application assistance across Travis County.",
      focus: "Emergency food, SNAP navigation",
      website: "https://centraltexasfoodbank.org",
    },
  ],
  localNuances: [
    "Austin Energy offers a municipal Domestic Violence Deposit Waiver program and Customer Assistance Program (CAP) discount rates for low-income residents.",
    "Travis County District Attorney's Special Victims Unit has dedicated Victim Witness Counselors who assist with CVC filing and protective order applications without court fees.",
    "Capital Metro (CapMetro) offers Transit Empowerment vouchers distributed through partner nonprofits for free bus passes.",
  ],
};
