export interface IndustryOption {
  id: string;
  name: string;
  matchTag: string;
  whyItMatters: string;
  exampleFunds: string[];
}

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  {
    id: "restaurant-food-service",
    name: "Restaurant / Food Service / Cook / Server",
    matchTag: "WORK_RESTAURANT",
    whyItMatters: "The food & beverage sector has some of the strongest emergency relief funds in the country. Organizations like Southern Smoke Foundation and Giving Kitchen grant direct cash for housing, utilities, and medical crises to current and recent workers.",
    exampleFunds: ["Southern Smoke Foundation", "Giving Kitchen", "CORE (Children of Restaurant Employees)", "Restaurant Workers' Community Foundation"],
  },
  {
    id: "bartender-beverage",
    name: "Bartender / Barback / Beverage Service",
    matchTag: "WORK_BARTENDER",
    whyItMatters: "Bartenders and bar staff have dedicated relief programs through the USBG National Charity Foundation and Southern Smoke, offering direct emergency grants for unexpected life crises.",
    exampleFunds: ["USBG Bartender Emergency Assistance", "Southern Smoke Foundation"],
  },
  {
    id: "hospitality-hotel",
    name: "Hospitality / Hotel / Housekeeping",
    matchTag: "WORK_HOSPITALITY",
    whyItMatters: "Hospitality workers may access hotel association benevolence funds, UNITE HERE union relief, and regional tourism hardship programs.",
    exampleFunds: ["UNITE HERE Hardship Funds", "AHLA Foundation Employee Relief"],
  },
  {
    id: "music-audio",
    name: "Music / Musician / Touring Crew / Audio",
    matchTag: "WORK_MUSIC",
    whyItMatters: "MusiCares (Grammy Recording Academy) provides substantial emergency financial assistance for housing, rent, medical, and living expenses to musicians and industry crew with qualifying industry history.",
    exampleFunds: ["MusiCares Emergency Financial Assistance", "Sweet Relief Musicians Fund", "Jazz Foundation of America"],
  },
  {
    id: "entertainment-film-theater",
    name: "Entertainment / Film / Theater / Crew",
    matchTag: "WORK_ENTERTAINMENT",
    whyItMatters: "Entertainment Community Fund (formerly The Actors Fund) helps anyone working in film, television, radio, or theater with emergency grants, housing support, and health insurance counseling.",
    exampleFunds: ["Entertainment Community Fund", "Motion Picture & Television Fund (MPTF)", "Behind the Scenes"],
  },
  {
    id: "visual-arts-crafts",
    name: "Visual Arts / Crafts / Studio Artists",
    matchTag: "WORK_ARTS",
    whyItMatters: "CERF+ (Craft Emergency Relief Fund) and artist benevolence foundations provide direct emergency relief grants and equipment recovery assistance for craft artists and studio practitioners.",
    exampleFunds: ["CERF+ Emergency Relief", "Foundation for Contemporary Arts Emergency Grants", "Artists' Fellowship"],
  },
  {
    id: "writing-journalism",
    name: "Writing / Journalism / Authors",
    matchTag: "WORK_WRITING",
    whyItMatters: "Authors League Fund and PEN America provide non-repayable grants to published authors, dramatists, journalists, and freelance writers facing sudden illness or emergency hardship.",
    exampleFunds: ["Authors League Fund", "PEN America Writers' Emergency Fund", "Carnegie Fund for Authors"],
  },
  {
    id: "beauty-cosmetology",
    name: "Beauty / Hair / Nail / Esthetics / Cosmetology",
    matchTag: "WORK_BEAUTY",
    whyItMatters: "Salon and beauty professionals have access to hardship micro-funds through Behind the Chair, PBA Disaster Relief, and Beauty Changes Lives for unexpected medical or personal emergencies.",
    exampleFunds: ["PBA Disaster Relief Fund", "Behind The Chair Hardship Program"],
  },
  {
    id: "nursing-healthcare",
    name: "Healthcare / Nursing / Medical Assistant",
    matchTag: "WORK_HEALTHCARE",
    whyItMatters: "Nurses and medical workers can access professional association crisis funds, American Nurses Foundation relief, and union benevolent funds.",
    exampleFunds: ["Nurses House Emergency Assistance", "American Nurses Foundation"],
  },
  {
    id: "education-childcare",
    name: "Education / Teacher / Childcare Worker",
    matchTag: "WORK_EDUCATION",
    whyItMatters: "Teachers and school staff can tap NEA Member Assistance, local educator foundations, and school district employee crisis funds.",
    exampleFunds: ["NEA Member Benefits Disaster Relief", "District Education Foundations"],
  },
  {
    id: "trades-construction",
    name: "Construction / Skilled Trades (Electrician, Plumber, Carpentry)",
    matchTag: "WORK_TRADES",
    whyItMatters: "Trade unions (IBEW, UA, UBC, LiUNA) maintain benevolent and death/disability hardship accounts for active and recent members in transition.",
    exampleFunds: ["Union Benevolent Funds", "National Hardship Trust Funds"],
  },
  {
    id: "freelance-gig-rideshare",
    name: "Freelance / Gig Economy / Rideshare / Delivery",
    matchTag: "WORK_FREELANCE",
    whyItMatters: "Freelancers Union and national gig worker mutual-aid networks provide micro-grants and emergency relief for independent workers who lack corporate benefits.",
    exampleFunds: ["Freelancers Relief Network", "Drivers Cooperative Relief"],
  },
  {
    id: "retail-grocery",
    name: "Retail / Grocery / Convenience",
    matchTag: "WORK_RETAIL",
    whyItMatters: "Large retail and grocery companies often have corporate Employee Assistance Programs (EAPs) and employee disaster/crisis funds (e.g. H-E-B Tournament of Champions, Walmart HOPE Fund).",
    exampleFunds: ["UFCW Charity Foundation", "Corporate EAP Relief Funds"],
  },
  {
    id: "agriculture-farming",
    name: "Agriculture / Farming / Dairy / Food Production",
    matchTag: "WORK_AGRICULTURE",
    whyItMatters: "Agricultural and farmworker organizations (such as National Farm Worker Ministry and state farm bureaus) maintain crisis relief funds for rural and field workers.",
    exampleFunds: ["Farm Aid Emergency Grants", "Farmworker Relief Funds"],
  },
  {
    id: "military-veteran",
    name: "Military Veteran / Active Duty / Military Dependent",
    matchTag: "VETERAN",
    whyItMatters: "Branch-specific emergency relief societies (Army Emergency Relief, Navy-Marine Corps Relief, Air Force Aid) provide interest-free emergency loans and survivor relocation grants for service members and dependents.",
    exampleFunds: ["Army Emergency Relief", "Navy-Marine Corps Relief Society", "Operation Homefront"],
  },
  {
    id: "other",
    name: "Other Industry / Not Listed Above",
    matchTag: "WORK_OTHER",
    whyItMatters: "General community action, faith-based discretionary funds, and local foundations provide flexible emergency micro-aid regardless of your line of work.",
    exampleFunds: ["Community Action CSBG Micro-grants", "St. Vincent de Paul Conferences"],
  },
];
