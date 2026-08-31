export interface TexasCountyOverview {
  slug: string;
  name: string;
  fipsCode: string;
  seat: string;
  majorCities: string[];
  populationEstimate: string;
  specializedDVShelter: string;
  hotlinePhone: string;
  legalAidProvider: string;
  communityActionAgency: string;
  notes: string;
}

export const TEXAS_COUNTIES: Record<string, TexasCountyOverview> = {
  "travis": {
    slug: "travis",
    name: "Travis County",
    fipsCode: "48453",
    seat: "Austin",
    majorCities: ["Austin", "Pflugerville", "Lakeway", "Manor"],
    populationEstimate: "1,320,000",
    specializedDVShelter: "The SAFE Alliance (Austin)",
    hotlinePhone: "512-267-7233 (SAFEline)",
    legalAidProvider: "Texas RioGrande Legal Aid (TRLA) & Volunteer Legal Services (VLS)",
    communityActionAgency: "Travis County Health and Human Services",
    notes: "Urban core pilot county with dense shelter and legal resources; high cost of living."
  },
  "williamson": {
    slug: "williamson",
    name: "Williamson County",
    fipsCode: "48491",
    seat: "Georgetown",
    majorCities: ["Round Rock", "Georgetown", "Cedar Park", "Leander", "Taylor"],
    populationEstimate: "670,000",
    specializedDVShelter: "Hope Alliance (Round Rock)",
    hotlinePhone: "1-800-460-7233 (24/7 Crisis Line)",
    legalAidProvider: "Lone Star Legal Aid & TRLA",
    communityActionAgency: "Opportunities for Williamson & Burnet Counties (OWBC)",
    notes: "Rapidly growing suburban/exurban county with single dedicated emergency shelter."
  },
  "harris": {
    slug: "harris",
    name: "Harris County",
    fipsCode: "48201",
    seat: "Houston",
    majorCities: ["Houston", "Pasadena", "Baytown", "Spring", "Katy"],
    populationEstimate: "4,800,000",
    specializedDVShelter: "Houston Area Women's Center (HAWC) & The Bridge Over Troubled Waters",
    hotlinePhone: "713-528-2121 (HAWC 24/7 Hotline)",
    legalAidProvider: "AVDA (Aid to Victims of Domestic Abuse) & Lone Star Legal Aid",
    communityActionAgency: "Gulf Coast Community Services Association",
    notes: "Largest Texas county; massive volume with multiple specialized regional service networks."
  },
  "bastrop": {
    slug: "bastrop",
    name: "Bastrop County",
    fipsCode: "48021",
    seat: "Bastrop",
    majorCities: ["Bastrop", "Elgin", "Smithville"],
    populationEstimate: "105,000",
    specializedDVShelter: "Regional SAFE Alliance / Family Crisis Center Coverage",
    hotlinePhone: "512-303-7755 (Family Crisis Center Bastrop)",
    legalAidProvider: "Texas RioGrande Legal Aid (TRLA)",
    communityActionAgency: "Combined Community Action (CCA)",
    notes: "Rural Central Texas pilot county with severe public transit gaps and high reliance on CSBG utility/housing funds."
  }
};
