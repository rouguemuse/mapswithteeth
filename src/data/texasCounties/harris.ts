import { TexasCountyData } from "@/types/texas";

export const HARRIS_COUNTY: TexasCountyData = {
  slug: "harris",
  name: "Harris County",
  region: "GULF_COAST_DEEP_DIVE",
  seat: "Houston",
  majorCities: ["Houston", "Pasadena", "Baytown", "Spring", "Katy", "Humble", "Tomball"],
  isPilotRegion: false, // Explicitly separate from Central Texas Pilot
  emergencyShelterPartner: "Houston Area Women's Center (HAWC / 713-528-2121) & The Bridge Over Troubled Waters (Pasadena)",
  legalAidProvider: "Lone Star Legal Aid (Houston HQ) & Houston Volunteer Lawyers & AVDA (Aid to Victims of Domestic Abuse)",
  communityActionAgency: "Gulf Coast Community Services Association (GCCSA)",
  utilityProviders: ["CenterPoint Energy (Deregulated REPs: Reliant, TXU, Direct Energy, Gexa, Champion)"],
  keyLocalFunds: [
    {
      name: "AVDA (Aid to Victims of Domestic Abuse) Legal & Direct Assistance",
      description: "Dedicated representation for protective orders, divorce, child custody, and emergency client assistance funds for survivors in Harris County.",
      focus: "Free legal representation, safety planning, micro-aid",
      website: "https://avda-tx.org",
    },
    {
      name: "Gulf Coast Community Services Association (GCCSA)",
      description: "Harris County Community Action agency providing emergency food, utility bill assistance (CEAP), rental stabilization, and education support.",
      focus: "Utility payments, rental support, emergency food",
      website: "https://gccsa.org",
    },
    {
      name: "St. Vincent de Paul Society Archdiocese of Galveston-Houston",
      description: "Network of over 50 parish conferences across Harris County providing direct home visit emergency assistance for utilities, rent, gas, and furniture.",
      focus: "Emergency funds, gas, utilities, furniture vouchers",
      website: "https://svdphouston.org",
    },
    {
      name: "Catholic Charities of the Archdiocese of Galveston-Houston",
      description: "Comprehensive emergency financial assistance, food distribution, and transitional housing assistance for individuals and families in crisis.",
      focus: "Rental assistance, food, rapid rehousing",
      website: "https://catholiccharities.org",
    },
    {
      name: "Northwest Assistance Ministries (NAM)",
      description: "Serving North and Northwest Harris County with emergency basic needs, housing services, pediatric/medical clinics, and family violence safety.",
      focus: "Housing, utilities, medical clinic, domestic violence services",
      website: "https://namonline.org",
    },
  ],
  localNuances: [
    "Harris County is in the deregulated CenterPoint territory where all retail electric providers (Reliant, TXU, etc.) must comply with PUCT § 25.478 DV deposit waivers.",
    "METRO Houston transit authority provides reduced and emergency fare programs through participating social service agencies.",
    "Harris County District Attorney's Office has a specialized Domestic Violence Division assisting with protective order filings.",
  ],
};
