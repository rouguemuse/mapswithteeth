import { TexasCountyData } from "@/types/texas";

export const CENTRAL_TEXAS_COUNTIES: TexasCountyData[] = [
  {
    slug: "hays",
    name: "Hays County",
    region: "CENTRAL_TEXAS_PILOT",
    seat: "San Marcos",
    majorCities: ["San Marcos", "Kyle", "Buda", "Dripping Springs", "Wimberley"],
    isPilotRegion: true,
    emergencyShelterPartner: "Hays-Caldwell Women's Center (HCWC / San Marcos / 24hr Line 512-396-4357)",
    legalAidProvider: "Texas RioGrande Legal Aid (TRLA) & Texas Advocacy Project",
    communityActionAgency: "Community Action, Inc. of Central Texas (San Marcos)",
    utilityProviders: ["Pedernales Electric Co-op (PEC)", "San Marcos Electric Utility", "Bluebonnet Electric"],
    keyLocalFunds: [
      {
        name: "Community Action, Inc. of Central Texas",
        description: "Administers CEAP utility assistance, CSBG family emergency support, and senior/child programs across Hays, Caldwell, and Blanco counties.",
        focus: "Utility assistance, emergency support, prescription assistance",
        website: "https://communityaction.com",
      },
      {
        name: "Hays County Food Bank",
        description: "Emergency grocery boxes and mobile food distributions across San Marcos, Kyle, Buda, and Wimberley.",
        focus: "Emergency food boxes",
        website: "https://haysfoodbank.org",
      },
      {
        name: "St. Vincent de Paul Society (St. John the Evangelist San Marcos)",
        description: "Local parish conference providing micro-grants for gas cards, utility disconnect prevention, and urgent pharmacy/prescriptions.",
        focus: "Emergency micro-aid, gas vouchers",
      },
    ],
    localNuances: [
      "Hays-Caldwell Women's Center operates the Mariposa Center with comprehensive non-residential counseling, legal advocacy, and emergency shelter.",
    ],
  },
  {
    slug: "bastrop",
    name: "Bastrop County",
    region: "CENTRAL_TEXAS_PILOT",
    seat: "Bastrop",
    majorCities: ["Bastrop", "Elgin", "Smithville"],
    isPilotRegion: true,
    emergencyShelterPartner: "Family Crisis Center (Bastrop / 24hr Line 888-311-7755)",
    legalAidProvider: "Texas RioGrande Legal Aid (TRLA) & Texas Advocacy Project",
    communityActionAgency: "Combined Community Action (CCA)",
    utilityProviders: ["Bluebonnet Electric Cooperative (Giddings/Bastrop)", "Bastrop Power & Light"],
    keyLocalFunds: [
      {
        name: "Combined Community Action (CCA)",
        description: "CSBG Community Action Agency for Bastrop, Fayette, Colorado, and Lee counties providing utility relief, emergency housing aid, and weatherization.",
        focus: "Utility assistance, emergency food, housing stabilization",
        website: "https://ccaction.com",
      },
      {
        name: "Bastrop County Emergency Food Pantry",
        description: "Emergency food distribution and Client Assistance Program for essential emergency costs for rural Bastrop residents.",
        focus: "Food, basic necessities",
        website: "https://bastropfoodpantry.org",
      },
    ],
    localNuances: [
      "Rural transportation in Bastrop County is supported by CARTS (Capital Area Rural Transportation System), offering low-cost curb-to-curb rides.",
    ],
  },
];
