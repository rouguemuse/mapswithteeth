import { Resource } from "@/types/resource";

export const OTHER_WAYS_THROUGH_RESOURCES: Resource[] = [
  {
    "id": "southern-smoke-foundation",
    "name": "Southern Smoke Emergency Relief Program",
    "organization": "Southern Smoke Foundation",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "rent-deposit",
      "utility-deposit",
      "medical-dental"
    ],
    "matchTags": [
      "FOOD_BEVERAGE",
      "RESTAURANT",
      "BAR",
      "CASH",
      "RENT",
      "UTILITY",
      "MEDICAL",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial relief grants to food and beverage industry workers experiencing unforeseen catastrophic life events, medical crises, natural disasters, or domestic violence emergency relocation.",
    "whatItActuallyProvides": "Direct financial grants paid to service providers, landlords, utility companies, or medical billers on applicant's behalf.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "MEDICAL",
      "COUNSELING"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $3,000 (assessed on documented need; direct vendor payment)",
    "knownFundingLimits": "Based on documented invoice need; paid directly to creditors and landlords",
    "eligibility": "Must have worked in the food and beverage industry (restaurants, bars, catering, farming) for a minimum of 30 hours/week for at least 6 continuous months, and experienced crisis within the past 6 months.",
    "documentationRequired": [
      "Most recent 6 months of paystubs or W-2/1099 verifying 30+ hrs/week in food & beverage",
      "Past-due rent notice, lease agreement, utility bills, or medical invoices",
      "Documentation verifying unforeseen emergency or displacement event"
    ],
    "referralRequirement": "None (self-apply online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Must demonstrate immediate crisis shortfall",
    "employmentDependency": "Food & Beverage industry (minimum 30 hrs/week for 6+ months)",
    "applicationWindow": "Within 6 months of unforeseen emergency event",
    "whatCanBlockAccess": [
      "Strict food & beverage employment proof required (6 months at 30+ hrs/week)",
      "Crisis event must have occurred within the last 6 months",
      "Paid directly to vendors/landlords; no cash disbursed to applicant"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Complete the online application at southernsmoke.org/emergency-relief/ and upload paystubs and bill documentation.",
    "howToApply": "Complete the online application at southernsmoke.org/emergency-relief/.",
    "sourceUrl": "https://southernsmoke.org/emergency-relief/",
    "primaryAuthoritativeSource": "Southern Smoke Foundation 501(c)(3) Program Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Fast turnaround emergency relief for culinary, bar, and hospitality workers.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "giving-kitchen-crisis-grants",
    "name": "Giving Kitchen Emergency Financial Assistance",
    "organization": "Giving Kitchen",
    "state": "US",
    "geography": "Select States (GA, TN, NC, SC) · Stability Network (Nationwide)",
    "scope": "SELECT_STATES",
    "availabilityBadge": "SELECT STATES",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "rent-deposit",
      "utility-deposit"
    ],
    "matchTags": [
      "FOOD_BEVERAGE",
      "RESTAURANT",
      "BAR",
      "RENT",
      "UTILITY",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial assistance grants for basic living expenses (housing rent, mortgage, electric, water, and gas utilities) to food service workers facing illness, injury, natural disaster, housing displacement, or family crisis.",
    "whatItActuallyProvides": "Direct grant payments made directly to landlords and utility companies on worker's behalf.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $2,500 for rent and utility payments",
    "knownFundingLimits": "Covers monthly housing and utility bills paid directly to creditors",
    "eligibility": "Food service workers (restaurants, catering, concessions, cafeteria, bar) who have worked in food service for at least 6 continuous months and experienced a qualifying crisis within the defined application window.",
    "documentationRequired": [
      "Proof of food service employment (paystubs showing 6+ months in food service)",
      "Copy of current residential lease agreement",
      "Current utility bills (electric, water, gas)",
      "Documentation of qualifying crisis event"
    ],
    "referralRequirement": "None (self-apply online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial hardship",
    "employmentDependency": "Foodservice industry (minimum 6 months)",
    "applicationWindow": "Year-round application portal",
    "whatCanBlockAccess": [
      "Direct financial relief grants prioritized for food service workers in GA, TN, NC, SC (and expanding regional rollouts)",
      "Stability Network case navigation is nationwide; direct cash/vendor assistance depends on regional funding capacity",
      "Requires landlord/utility vendor cooperation to receive direct check/ACH disbursement"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Submit an online Ask For Help form at thegivingkitchen.org/help.",
    "howToApply": "Submit an online Ask For Help form at thegivingkitchen.org/help.",
    "sourceUrl": "https://thegivingkitchen.org/help",
    "primaryAuthoritativeSource": "Giving Kitchen 501(c)(3) Program Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Most people assume emergency rental help only comes from county social services or 211 waitlists.",
    "workaround": "Food service workers in eligible states bypass municipal backlogs through direct-to-landlord benevolence grants.",
    "accessNotes": "Direct financial aid prioritized in GA, TN, NC, SC; Stability Network navigation available nationwide.",
    "notes": "Dedicated safety net for foodservice workers.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "core-children-of-restaurant-employees",
    "name": "CORE (Children of Restaurant Employees) Crisis Grants",
    "organization": "CORE Gives",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "childcare-school",
      "rent-deposit",
      "money-now",
      "medical-dental"
    ],
    "matchTags": [
      "FOOD_BEVERAGE",
      "RESTAURANT",
      "CHILDREN",
      "FAMILY",
      "RENT",
      "MEDICAL",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides financial grants to food and beverage employees with dependent children who are facing a significant medical crisis, injury, death of a parent, loss of home from natural disaster, or domestic violence displacement.",
    "whatItActuallyProvides": "Direct grant payments for rent, medical bills, groceries, clothing, and essential family needs.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "GROCERY_CARD",
      "CHILDCARE",
      "MEDICAL"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$1,000 to $4,000 for family living and medical expenses",
    "knownFundingLimits": "Based on documented family need and vendor invoices; one lifetime grant per family",
    "eligibility": "Parent, legal guardian, or primary caregiver supporting a legal dependent child (18 or under, or legal adult dependent with disability) who currently works in food/beverage or worked in food/beverage within the past 90 days (or documented qualifying leave), and experienced a qualifying crisis within 90 days.",
    "documentationRequired": [
      "Proof of food/beverage employment within past 90 days (recent paystub or leave documentation)",
      "Proof of legal dependency for child (birth certificate, tax return, or custody order)",
      "Documentation of qualifying crisis event (medical record, police/advocate report, natural disaster)",
      "Itemized invoices for rent, utilities, or medical bills"
    ],
    "referralRequirement": "None (self-apply online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial hardship",
    "employmentDependency": "Food & Beverage service (past 90 days) supporting at least 1 dependent child",
    "applicationWindow": "Within 90 days of qualifying crisis event",
    "whatCanBlockAccess": [
      "Must support a legal dependent child (18 or under, or adult child with disability)",
      "Food & beverage employment required within past 90 days or on documented qualifying leave",
      "Qualifying circumstance must have occurred within the past 90 days (domestic violence is qualifying)",
      "Limited to one Crisis Stabilization Grant per family lifetime under currently published criteria"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Apply online at coregives.org/apply/ and submit child dependency and employment proof.",
    "howToApply": "Apply online at coregives.org/apply/.",
    "sourceUrl": "https://coregives.org/apply/",
    "primaryAuthoritativeSource": "CORE Gives 501(c)(3) Published Program Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Culinary workers rarely realize their industry has an endowed family foundation that helps with rent and bills.",
    "workaround": "Direct foundation grant paid to housing and utility providers with zero DV shelter stay required.",
    "accessNotes": "Requires food/bev work in past 90 days, dependent minor child, and crisis within 90 days. One lifetime grant per family.",
    "notes": "Specialized assistance for restaurant workers supporting minor children.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "cerf-plus-craft-emergency",
    "name": "CERF+ Emergency Relief Grant Program",
    "organization": "CERF+ (The Artists Safety Net)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now"
    ],
    "matchTags": [
      "ARTIST",
      "CRAFT",
      "DISASTER",
      "EMERGENCY_GRANT",
      "TEMPORARILY_CLOSED"
    ],
    "whatItCanHelpWith": "Established emergency relief program providing up to $3,000 grants to professional craft artists experiencing career-threatening emergencies, catastrophic illness, injury, or natural disaster.",
    "whatItActuallyProvides": "Direct emergency financial grants of up to $3,000 to qualifying craft artists. Grantmaking is suspended through September 30, 2026; CERF+ states grantmaking will resume October 1, 2026 with an updated approach.",
    "assistanceShapes": [
      "DIRECT_CASH"
    ],
    "paymentMethod": "DIRECT_TO_APPLICANT",
    "typicalAmount": "$3,000 standard emergency relief grant (Grantmaking suspended through September 30, 2026; resuming October 1, 2026)",
    "knownFundingLimits": "Grantmaking suspended through September 30, 2026; resuming October 1, 2026",
    "eligibility": "Professional artists working in craft disciplines (wood, metal, clay, glass, fiber, etc.) who derive substantial income from their art.",
    "documentationRequired": [
      "Documentation of professional craft career (website, exhibition history, sales records)",
      "Documentation of medical, natural disaster, or emergency event"
    ],
    "referralRequirement": "None (online portal when open)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Professional craft career requirement",
    "employmentDependency": "Professional craft artist discipline",
    "applicationWindow": "SUSPENDED through September 30, 2026; planned resumption October 1, 2026",
    "whatCanBlockAccess": [
      "GRANTMAKING SUSPENDED: Applications currently paused through September 30, 2026 while CERF+ updates its program model",
      "Restricted strictly to craft and material-based visual artists",
      "Must document professional career history"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Monitor cerfplus.org for the reopening of emergency relief grantmaking scheduled for October 1, 2026.",
    "howToApply": "Monitor cerfplus.org for the reopening of emergency relief grantmaking scheduled for October 1, 2026.",
    "sourceUrl": "https://cerfplus.org/get-relief/",
    "primaryAuthoritativeSource": "CERF+ Official Program Announcement (July 23, 2026)",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "TEMPORARILY_CLOSED",
    "reopeningDate": "October 1, 2026",
    "isStatutoryRight": false,
    "notes": "CERF+ announced July 23, 2026 that grantmaking is temporarily suspended through Sept 30, 2026 while transitioning to an updated relief framework.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "musicares-emergency-financial",
    "name": "MusiCares Emergency Financial Assistance",
    "organization": "MusiCares / Recording Academy",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "rent-deposit",
      "utility-deposit",
      "medical-dental"
    ],
    "matchTags": [
      "MUSIC",
      "ENTERTAINMENT",
      "CASH",
      "RENT",
      "UTILITY",
      "MEDICAL",
      "DENTAL",
      "COUNSELING",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides emergency financial assistance to music professionals in times of financial, medical, or personal crisis, covering basic living expenses (rent, mortgage, utilities), medical and dental treatment, substance abuse recovery, and mental health counseling.",
    "whatItActuallyProvides": "Direct grant payments made to vendors, landlords, utility companies, or medical providers.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "MEDICAL",
      "DENTAL",
      "COUNSELING"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $3,000 depending on documented crisis need",
    "knownFundingLimits": "Assessed on documented need; paid directly to creditors and landlords",
    "eligibility": "Music industry professionals with at least 5 years of documented employment history in the music industry OR at least 6 commercially released singles/tracks.",
    "documentationRequired": [
      "Proof of 5+ years in the music industry (liner notes, royalty statements, union cards, contracts)",
      "Itemized invoices for rent, utilities, or medical/dental bills",
      "Recent tax return or bank statements"
    ],
    "referralRequirement": "None (self-apply via MusiCares portal)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial hardship",
    "employmentDependency": "Music industry professional (5+ years or 6+ commercial releases)",
    "applicationWindow": "Year-round intake",
    "whatCanBlockAccess": [
      "Strict 5-year music industry career requirement",
      "Extensive career documentation required",
      "Paid directly to vendors/creditors"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Visit musicares.org/get-help or call the MusiCares helpline at 800-687-4227 to begin intake.",
    "howToApply": "Visit musicares.org/get-help or call the MusiCares helpline at 800-687-4227.",
    "sourceUrl": "https://www.musicares.org/get-help",
    "primaryAuthoritativeSource": "MusiCares / Recording Academy Program Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Comprehensive crisis fund for musicians, audio engineers, tour crews, and songwriters.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "authors-league-fund",
    "name": "Authors League Fund Emergency Relief",
    "organization": "The Authors League Fund",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "rent-deposit",
      "medical-dental"
    ],
    "matchTags": [
      "WRITER",
      "AUTHOR",
      "JOURNALIST",
      "RENT",
      "UTILITY",
      "MEDICAL",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides interest-free, open-ended emergency relief loans/grants to professional authors, dramatists, journalists, and freelance writers facing severe financial hardship due to medical emergencies, illness, disability, or sudden domestic crisis.",
    "whatItActuallyProvides": "Direct emergency financial grants/no-interest loans for rent, utilities, and medical expenses.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "MEDICAL"
    ],
    "paymentMethod": "DIRECT_TO_APPLICANT",
    "typicalAmount": "$1,000 to $4,000 in emergency living and medical aid",
    "knownFundingLimits": "Discretionary board grants based on professional track record and shortfall",
    "eligibility": "Professional freelance writers, book authors, dramatists, and journalists with a demonstrated track record of published works.",
    "documentationRequired": [
      "Bibliography of published books, produced plays, or freelance journalism portfolio",
      "Itemized invoices for rent, utilities, or medical bills",
      "Recent tax return"
    ],
    "referralRequirement": "None (self-apply online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated emergency shortfall",
    "employmentDependency": "Professional published writer/author/journalist/playwright",
    "applicationWindow": "Year-round rolling board review",
    "whatCanBlockAccess": [
      "Must document career as a professional published writer/author",
      "Self-published authors must demonstrate commercial sales track record",
      "Board review timeline takes 2–4 weeks"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "WAITLIST_POSSIBLE",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Submit an application through authorsleaguefund.org/apply/ with professional writing credentials.",
    "howToApply": "Submit an application through authorsleaguefund.org/apply/.",
    "sourceUrl": "https://authorsleaguefund.org/apply/",
    "primaryAuthoritativeSource": "The Authors League Fund 501(c)(3) Program Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Established emergency safety net for professional writers and dramatists.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "redrover-relief-safe-escape",
    "name": "RedRover Relief Safe Escape Grants (Pet Safe Boarding)",
    "organization": "RedRover",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "PETS_AND_FAMILY",
    "barrierCategories": [
      "pets",
      "safe-stay",
      "money-now"
    ],
    "matchTags": [
      "PETS",
      "DOG",
      "CAT",
      "BOARDING",
      "SHELTER",
      "ADVOCATE_REFERRAL",
      "DV_SHELTER_REQUIRED"
    ],
    "whatItCanHelpWith": "May cover up to 45 days of qualifying pet boarding. A domestic-violence shelter advocate must generally apply on the survivor’s behalf, and the survivor must generally be staying in or actively working toward entering a domestic-violence-specific shelter. Funding is not guaranteed and is paid to qualifying boarding/veterinary providers.",
    "whatItActuallyProvides": "Direct grant payments made directly to commercial boarding kennels or veterinary clinics for up to 45 days of emergency pet care.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "PET_BOARDING"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "Up to 45 days of pet boarding fees paid directly to veterinary or boarding facility",
    "knownFundingLimits": "Funding is limited and not guaranteed; paid directly to licensed boarding/vet providers",
    "eligibility": "Survivors of domestic violence with family pets who are entering or actively residing in a domestic violence shelter that cannot accommodate pets on-site.",
    "documentationRequired": [
      "Application submitted directly by a domestic violence shelter advocate or case manager",
      "Quote / invoice from a licensed commercial boarding kennel or veterinary clinic"
    ],
    "referralRequirement": "Domestic violence shelter advocate MUST apply on survivor's behalf (no self-application)",
    "shelterConnectionRequired": true,
    "policeReportRequired": false,
    "incomeRestriction": "None (advocate referral required)",
    "employmentDependency": "None",
    "applicationWindow": "Active year-round (response typically within 24–48 business hours)",
    "whatCanBlockAccess": [
      "ADVOCATE REFERRAL MANDATORY: Survivor cannot apply directly; a DV shelter advocate must apply",
      "DV SHELTER CONNECTION REQUIRED: Survivor must be staying in or actively entering a domestic violence shelter",
      "VENDOR PAYMENT ONLY: Funding is paid directly to licensed boarding/vet facilities, not cash to applicant",
      "LIMITED FUNDING: Grants subject to available monthly non-profit funding allocations"
    ],
    "accessFrictions": [
      "ADVOCATE_REFERRAL_REQUIRED",
      "DV_SHELTER_CONNECTION_REQUIRED",
      "LIMITED_FUNDING",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Ask your domestic violence shelter advocate or case manager to submit an application via redrover.org/safe-escape-app.",
    "howToApply": "Ask your domestic violence shelter advocate to submit an application at redrover.org/safe-escape-app.",
    "sourceUrl": "https://redrover.org/relief/safe-escape-grants/",
    "primaryAuthoritativeSource": "RedRover Relief Safe Escape Official Program Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Vital lifeline when emergency DV shelters cannot house companion animals.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "safe-havens-for-pets",
    "name": "Safe Havens for Pets National Directory",
    "organization": "Animal Welfare Institute (AWI)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "PETS_AND_FAMILY",
    "barrierCategories": [
      "pets",
      "safe-stay"
    ],
    "matchTags": [
      "PETS",
      "DOG",
      "CAT",
      "SHELTER_DIRECTORY",
      "FOSTER",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "National searchable registry of domestic violence shelters that house companion animals on-site, coordinate with local foster networks, or partner with humane societies for confidential pet safe-keeping.",
    "whatItActuallyProvides": "Free national database mapping pet-friendly domestic violence shelters and pet fostering programs across the United States.",
    "assistanceShapes": [
      "PET_BOARDING",
      "PET_FOSTER",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "Free directory navigation and shelter matching",
    "knownFundingLimits": "Directory resource; sheltering policies vary by individual participating facility",
    "eligibility": "Survivors of domestic violence seeking emergency shelter that accommodates companion animals.",
    "documentationRequired": [
      "None to search directory; individual shelter intake rules apply"
    ],
    "referralRequirement": "None (search public directory online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "24/7 public online directory",
    "whatCanBlockAccess": [
      "Pet policies, breed/size restrictions, and vaccine requirements vary significantly by individual facility",
      "On-site pet kennel spaces are extremely limited in many states",
      "Some foster programs require confidentiality screening"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Search the national registry by zip code or state at safehavensforpets.org to locate pet-friendly shelters.",
    "howToApply": "Search the national registry at safehavensforpets.org.",
    "sourceUrl": "https://safehavensforpets.org",
    "primaryAuthoritativeSource": "Animal Welfare Institute (AWI) Safe Havens Mapping",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Comprehensive national directory of pet-safe domestic violence shelters.",
    "resourceType": "DIRECTORY"
  },
  {
    "id": "safe-connections-act-separation",
    "name": "Safe Connections Act Mobile Line Separation & Lifeline Support",
    "organization": "Federal Communications Commission (FCC) / Wireless Carriers",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "COMMUNICATIONS_AND_PRIVACY",
    "barrierCategories": [
      "phone-tech-safety",
      "money-now",
      "address-confidentiality"
    ],
    "matchTags": [
      "FEDERAL",
      "PHONE",
      "TECH_SAFETY",
      "LIFELINE",
      "STATUTORY_RIGHT",
      "NO_FEE"
    ],
    "whatItCanHelpWith": "Federal law requiring wireless carriers to separate a survivor's mobile line (and lines of individuals in survivor's care) from a shared family plan within 2 business days without requiring primary account holder approval, contract cancellation fees, or credit checks. Also provides up to 6 months of emergency Lifeline phone subsidies for qualifying financially distressed survivors.",
    "whatItActuallyProvides": "Statutory right to mobile phone line separation without account holder approval + up to 6 months of emergency Lifeline telephone subsidy.",
    "assistanceShapes": [
      "PHONE_LINE_SEPARATION",
      "DEVICE_SAFETY",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Zero line separation fees ($0 penalty) + up to $9.25/mo ($34.25 on Tribal lands) Lifeline phone subsidy",
    "knownFundingLimits": "Federal statutory protection; mandatory carrier compliance nationwide",
    "eligibility": "Any survivor of domestic violence, dating violence, sexual assault, stalking, or human trafficking who shares a wireless phone account with an abuser.",
    "documentationRequired": [
      "Completed carrier line separation request form",
      "One form of qualifying verification: law enforcement record, court protective order, or signed statement from a licensed advocate, counselor, or medical professional"
    ],
    "referralRequirement": "None (can submit directly to wireless carrier)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None for line separation; emergency Lifeline benefit available for up to 6 months without prior income check under FCC rules",
    "employmentDependency": "None",
    "applicationWindow": "Carrier must process within 2 business days of completed request",
    "whatCanBlockAccess": [
      "NOTIFICATION & SAFETY RISK: Primary-account-holder approval is not required. However, the account holder may receive notice of account changes (or observe line removals on subsequent billing cycles). Review your carrier's notification timing before submitting if discovery of the separation could create a safety risk.",
      "Must provide qualifying documentation (advocate letter, court order, or police report)",
      "Device financing / handset payoff: Carrier cannot condition line separation on payment of unpaid handset debt, but remaining device financing remains subject to carrier terms",
      "Requires submitting request through carrier's dedicated survivor support portal"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Contact your wireless provider's dedicated Safe Connections Act / survivor support team (AT&T, Verizon, T-Mobile, etc.) or visit fcc.gov/safe-connections-act.",
    "howToApply": "Contact your wireless provider's dedicated Safe Connections Act department or visit fcc.gov/safe-connections-act.",
    "sourceUrl": "https://www.fcc.gov/safe-connections-act",
    "primaryAuthoritativeSource": "47 U.S.C. § 345 / FCC Rules 47 CFR Part 64, Subpart II",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "PRIMARY_STATUTE",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Federal Communications Commission (FCC)",
      "criteriaConfirmed": [
        "Primary account holder approval not required under 47 U.S.C. § 345",
        "2 business day processing mandate under 47 CFR § 64.6402",
        "Account change notification risk explicitly qualified"
      ],
      "verificationNotes": "Re-verified against FCC 47 CFR Part 64 Subpart II Safe Connections Act implementation order.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "47 U.S.C. § 345 / 47 CFR Part 64",
    "whyMissed": "Most survivors assume they cannot leave a shared family phone plan without the primary account holder's password or permission.",
    "workaround": "Under federal law (47 U.S.C. § 345), wireless carriers must separate your line within 2 business days without requiring account holder approval or penalty fees.",
    "accessNotes": "Submit request via carrier's dedicated survivor portal with qualifying advocate/court document. Crucial Safety Note: Primary account holder approval is NOT required, but they may receive account update notifications. Plan separation timing accordingly.",
    "notes": "Enacted under federal law; prevents abusers from controlling or terminating survivor mobile lines.",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "nnedv-techsafety-clinic",
    "name": "NNEDV Safety Net Project & TechSafety Clinic",
    "organization": "National Network to End Domestic Violence (NNEDV)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "COMMUNICATIONS_AND_PRIVACY",
    "barrierCategories": [
      "phone-tech-safety",
      "address-confidentiality"
    ],
    "matchTags": [
      "TECH_SAFETY",
      "DIGITAL_SECURITY",
      "SPYWARE",
      "PRIVACY",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides expert step-by-step guides, device auditing toolkits, and survivor resources for identifying and removing stalkerware, securing smartphones, preventing location tracking via AirTags/smart home devices, and maintaining confidential digital communications.",
    "whatItActuallyProvides": "Free expert digital safety toolkits, spyware detection checklists, and tech security documentation.",
    "assistanceShapes": [
      "DEVICE_SAFETY",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free digital safety toolkits and educational resources",
    "knownFundingLimits": "Free public educational and technical resources",
    "eligibility": "Survivors of technology-facilitated abuse, stalking, and harassment.",
    "documentationRequired": [
      "None required to access online toolkits and resources"
    ],
    "referralRequirement": "None (free online access)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "24/7 public access",
    "whatCanBlockAccess": [
      "Educational and technical self-help resource only (does not purchase replacement hardware or phones)",
      "Requires secure internet access to browse safely"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Access the digital safety toolkits and safe device guides at techsafety.org.",
    "howToApply": "Access the digital safety toolkits at techsafety.org.",
    "sourceUrl": "https://www.techsafety.org/resources-survivors",
    "primaryAuthoritativeSource": "National Network to End Domestic Violence Safety Net Project",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "National leader in technology-facilitated abuse prevention.",
    "resourceType": "DIRECT_SERVICE"
  },
  {
    "id": "irs-ip-pin",
    "name": "IRS Identity Protection PIN (IP PIN) for Survivors",
    "organization": "Internal Revenue Service (IRS)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "TAXES_AND_LEGAL",
    "barrierCategories": [
      "taxes-identity-docs",
      "money-now"
    ],
    "matchTags": [
      "FEDERAL",
      "IRS",
      "TAXES",
      "IDENTITY_PROTECTION",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "A 6-digit confidential PIN assigned by the IRS that prevents an abuser or identity thief from fraudulently claiming children as dependents or filing a unauthorized tax return using the survivor's Social Security Number.",
    "whatItActuallyProvides": "IRS electronic tax filing lock: no electronic tax return can be processed with your SSN without the 6-digit IP PIN.",
    "assistanceShapes": [
      "DOCUMENT_REPLACEMENT",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Free federal tax identity protection",
    "knownFundingLimits": "Federal tax security tool (no monetary grant)",
    "eligibility": "Any taxpayer with a Social Security Number or ITIN who wants to protect their tax account from unauthorized filings.",
    "documentationRequired": [
      "Identity verification via IRS.gov (ID.me account or in-person at Taxpayer Assistance Center)",
      "Social Security Number or ITIN"
    ],
    "referralRequirement": "None (self-enroll online or via Form 15227)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Enrollment open year-round (new PIN generated every January)",
    "whatCanBlockAccess": [
      "Must verify identity online through ID.me or in-person at an IRS office",
      "Once enrolled, you MUST enter the 6-digit PIN on every future tax return; returns filed without the PIN will be rejected",
      "Must never share the PIN with an abusive partner"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "IDENTITY_DOCUMENTS",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Enroll in the IP PIN program online at irs.gov/ippin or file IRS Form 15227.",
    "howToApply": "Enroll in the IP PIN program at irs.gov/ippin.",
    "sourceUrl": "https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin",
    "primaryAuthoritativeSource": "IRS Identity Protection Guidelines / Internal Revenue Manual",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "26 U.S.C. § 6109 / IRM 25.23.2 (Identity Protection PIN)",
    "notes": "Crucial protection against fraudulent dependent claiming and coerced tax filings.",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "irs-innocent-spouse-relief",
    "name": "IRS Innocent Spouse Relief (Coerced & Joint Tax Debt Relief)",
    "organization": "Internal Revenue Service (IRS)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "TAXES_AND_LEGAL",
    "barrierCategories": [
      "taxes-identity-docs",
      "legal-representation",
      "money-now"
    ],
    "matchTags": [
      "FEDERAL",
      "IRS",
      "TAXES",
      "DEBT_RELIEF",
      "COERCED_DEBT",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Relieves a survivor from joint and several liability for unpaid taxes, penalties, and interest resulting from fraudulent items, omitted income, or coerced signatures on a joint tax return filed with an abusive spouse.",
    "whatItActuallyProvides": "Complete or partial release from joint federal tax debts under Internal Revenue Code § 6015 (Innocent Spouse, Separation of Liability, or Equitable Relief).",
    "assistanceShapes": [
      "DEBT_ASSISTANCE",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Relieves thousands in joint tax debt and halts IRS wage garnishments/levies",
    "knownFundingLimits": "Statutory tax debt relief under IRC § 6015",
    "eligibility": "Taxpayers who filed a joint federal tax return where tax debt arose from the other spouse's erroneous items or where the survivor was subjected to abuse/coercion at the time of signing.",
    "documentationRequired": [
      "IRS Form 8857 (Request for Innocent Spouse Relief)",
      "Statement detailing financial coercion, domestic violence, or lack of knowledge regarding tax fraud",
      "Copies of divorce decree, separation agreement, or protective orders if available"
    ],
    "referralRequirement": "None (can file independently or with assistance of a Low Income Taxpayer Clinic / LITC)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None (LITC free legal representation available if under 250% FPL)",
    "employmentDependency": "None",
    "applicationWindow": "Equitable relief claims under § 6015(f) generally allowed within 10-year collection period",
    "whatCanBlockAccess": [
      "IRS is legally required to notify the other spouse that relief has been requested (though personal contact info is redacted)",
      "Extensive financial documentation required",
      "Processing time can take 6–12 months"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "WAITLIST_POSSIBLE",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Submit IRS Form 8857 or contact your local Low Income Taxpayer Clinic (LITC) for free attorney assistance.",
    "howToApply": "Submit IRS Form 8857 or contact a Low Income Taxpayer Clinic.",
    "sourceUrl": "https://www.irs.gov/businesses/small-businesses-self-employed/innocent-spouse-relief",
    "primaryAuthoritativeSource": "26 U.S. Code § 6015 / IRS Publication 971",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "26 U.S.C. § 6015",
    "notes": "Includes specialized domestic abuse considerations for equitable relief.",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "give-back-a-smile-dental",
    "name": "Give Back a Smile Domestic Violence Dental Repair",
    "organization": "American Academy of Cosmetic Dentistry Charitable Foundation (AACDCF)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "MEDICAL_AND_DENTAL",
    "barrierCategories": [
      "medical-dental",
      "money-now"
    ],
    "matchTags": [
      "DENTAL",
      "MEDICAL",
      "RECONSTRUCTIVE",
      "TEETH",
      "ADVOCATE_REFERRAL",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides free cosmetic and restorative dental treatment to adults who have sustained dental injuries to their smile-zone (front visible teeth) as a result of intimate partner violence or sexual assault.",
    "whatItActuallyProvides": "100% free restorative dental treatment (crowns, veneers, implants, fillings) performed by volunteer cosmetic dentists.",
    "assistanceShapes": [
      "DENTAL",
      "MEDICAL"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "$1,500 to $10,000+ in donated professional dental restoration",
    "knownFundingLimits": "Restricted to front 8 upper and 8 lower visible smile-zone teeth injured by violence",
    "eligibility": "Survivors of domestic or intimate partner violence (18+) who sustained dental injuries to front visible teeth and have been out of the abusive relationship for at least 1 continuous year.",
    "documentationRequired": [
      "Application signed by an advocate, therapist, social worker, doctor, or law enforcement officer verifying domestic violence",
      "$20 non-refundable application fee or 10 hours of documented community volunteer service"
    ],
    "referralRequirement": "Advocate, counselor, doctor, or case manager signature required",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Year-round application process",
    "whatCanBlockAccess": [
      "SURVIVOR MUST BE OUT OF ABUSIVE RELATIONSHIP FOR AT LEAST 1 YEAR",
      "Restricted strictly to front visible smile-zone teeth damaged by intimate partner violence (does not cover molar dental work or general neglect)",
      "Must complete a preliminary dental checkup and x-rays at own expense before cosmetic matching"
    ],
    "accessFrictions": [
      "ADVOCATE_REFERRAL_REQUIRED",
      "APPLICATION_REQUIRED",
      "WAITLIST_POSSIBLE",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Download the application at givebackasmile.com and have your counselor, advocate, or doctor sign the verification section.",
    "howToApply": "Download the application at givebackasmile.com.",
    "sourceUrl": "https://www.aacd.com/givesmile",
    "primaryAuthoritativeSource": "AACD Charitable Foundation Give Back a Smile Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Restores front teeth damaged during intimate partner abuse.",
    "resourceType": "DIRECT_SERVICE"
  },
  {
    "id": "modest-needs-self-sufficiency",
    "name": "Modest Needs Self-Sufficiency Emergency Grants",
    "organization": "Modest Needs Foundation",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "EMERGENCY_FINANCIAL_AID",
    "barrierCategories": [
      "money-now",
      "rent-deposit",
      "utility-deposit",
      "furniture-household"
    ],
    "matchTags": [
      "CASH",
      "RENT",
      "UTILITY",
      "APPLIANCE",
      "CAR_REPAIR",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides short-term emergency financial assistance grants to low-income working individuals and families who are facing a temporary, unexpected emergency expense that cannot be paid without risking eviction, utility disconnection, or job loss.",
    "whatItActuallyProvides": "Direct grant payments made directly to vendors and creditors for one-time emergency expenses ($500 to $1,500).",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "CAR_REPAIR"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $1,500 for single emergency invoice or bill",
    "knownFundingLimits": "Crowdfunded non-profit grant paid directly to creditors and service providers",
    "eligibility": "Employed individuals or those with documented stable income (SSDI, retirement) who have at least one working adult in the household and are facing an unexpected emergency expense.",
    "documentationRequired": [
      "Proof of income (recent paystubs or benefits award letter)",
      "Itemized bill or invoice for the requested emergency expense (rent lease, utility bill, mechanic quote)",
      "Most recent bank statement"
    ],
    "referralRequirement": "None (self-apply online)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Must be employed or on fixed retirement/disability income",
    "employmentDependency": "Must have documented active employment or fixed income source",
    "applicationWindow": "Year-round online application portal",
    "whatCanBlockAccess": [
      "Applicant must have documented active employment or fixed income",
      "Paid directly to vendors; does not disburse cash directly to applicant",
      "Application review depends on community donor funding cycles"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "WAITLIST_POSSIBLE",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Create an applicant account and submit an online grant request at modestneeds.org.",
    "howToApply": "Create an applicant account and submit an online grant request at modestneeds.org.",
    "sourceUrl": "https://www.modestneeds.org",
    "primaryAuthoritativeSource": "Modest Needs Foundation 501(c)(3) Operating Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Safety net for working households ineligible for conventional welfare.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "greyhound-home-free",
    "name": "Greyhound Home Free Program",
    "organization": "National Runaway Safeline & Greyhound Lines, Inc.",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "TRANSPORTATION_EMERGENCY_TRAVEL",
    "barrierCategories": [
      "transportation-gas",
      "money-now"
    ],
    "matchTags": [
      "TRANSPORTATION",
      "BUS_TICKET",
      "YOUTH",
      "EMERGENCY_TRAVEL",
      "ESCAPE",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides free one-way Greyhound bus tickets to youth (ages 12–21) fleeing abusive, dangerous, or unstable home situations to travel to a verified safe parent, legal guardian, or licensed transitional facility.",
    "whatItActuallyProvides": "Direct-issued one-way commercial bus ticket coordinated through National Runaway Safeline advocate conference.",
    "assistanceShapes": [
      "BUS_TICKET",
      "OTHER"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free one-way long-distance bus ticket",
    "knownFundingLimits": "Limit of 2 Home Free tickets per individual lifetime; ticket must be issued to a verified safe destination",
    "eligibility": "Must be between the ages of 12 and 21. Must have an open incident report on file with the National Runaway Safeline (can be opened during call) and be traveling to a verified safe guardian or licensed shelter facility.",
    "documentationRequired": [
      "Telephone intake interview with National Runaway Safeline advocate",
      "Name and phone number of receiving parent, guardian, or licensed transitional home coordinator",
      "Government ID, student ID, or advocate identity confirmation for station will-call pick up"
    ],
    "referralRequirement": "Must be processed through National Runaway Safeline advocate conference",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Coordinated via telephone conference with National Runaway Safeline",
    "whatCanBlockAccess": [
      "Strict age limit: applicant must be 12 to 21 years old",
      "Destination must be verified by NRS advocate as a safe parent, legal guardian, or licensed shelter",
      "Departure timing depends on NRS conference intake, Greyhound station hours, and scheduled bus departures"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "CALL_ONLY",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Call 1-800-RUNAWAY (1-800-786-2929) or text 66008. Tell the advocate you need the Home Free transportation program.",
    "howToApply": "Call 1-800-RUNAWAY (1-800-786-2929) for 24/7 phone intake.",
    "sourceUrl": "https://www.1800runaway.org/youth-teens/home-free-transportation",
    "primaryAuthoritativeSource": "National Runaway Safeline & Greyhound Lines Inc. Program Charter",
    "lastReviewedDate": "2026-08-28",
    "dateLastVerified": "2026-08-28",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Categorized in social service databases exclusively under runaway youth helplines rather than family violence escape or emergency transportation.",
    "workaround": "If an eligible youth (ages 12–21) is fleeing an unsafe family home or abusive guardian, the National Runaway Safeline advocate can conduct immediate phone intake and authorize a ticket without requiring law enforcement arrest.",
    "accessNotes": "Call 1-800-RUNAWAY (1-800-786-2929). Advocate coordinates directly with nearest Greyhound station. Ticket can be retrieved at will-call once NRS intake and scheduled bus coordination are completed.",
    "claimProvenances": [
      {
        "claim": "Greyhound Home Free provides one-way bus tickets for youth ages 12–21 in cooperation with National Runaway Safeline",
        "primarySourceUrl": "https://www.1800runaway.org/youth-teens/home-free-transportation",
        "sourceExcerptOrSummary": "Youth 12-21 can receive a free one-way bus ticket home or to a verified safe alternative through NRS intake.",
        "verificationDate": "2026-08-31"
      }
    ],
    "resourceType": "DIRECT_SERVICE"
  },
  {
    "id": "salvation-army-service-extension-tx",
    "name": "Salvation Army Texas Service Extension (Rural Travel & Micro-Aid)",
    "organization": "The Salvation Army Texas Division",
    "state": "TX",
    "geography": "Texas Statewide (Rural / Non-Metro Counties)",
    "scope": "TEXAS_STATEWIDE",
    "category": "HYPERLOCAL_MICRO_AID",
    "barrierCategories": [
      "transportation-gas",
      "money-now",
      "rent-deposit"
    ],
    "matchTags": [
      "TEXAS",
      "RURAL",
      "GAS_CARD",
      "BUS_TICKET",
      "HOTEL_VOUCHER",
      "EMERGENCY_TRAVEL",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides emergency assistance (such as fuel assistance, transit aid, or emergency lodging vouchers) in rural Texas counties that lack a permanent Salvation Army center, administered through local volunteer Service Units.",
    "whatItActuallyProvides": "Discretionary emergency aid determined by the local volunteer committee on a case-by-case basis.",
    "assistanceShapes": [
      "GAS_CARD",
      "BUS_TICKET",
      "HOTEL_VOUCHER",
      "GROCERY_CARD"
    ],
    "paymentMethod": "SURVIVOR_DIRECT",
    "typicalAmount": "Discretionary micro-aid (amounts vary by local committee budget and demonstrated emergency)",
    "knownFundingLimits": "Discretionary funds allocated per rural volunteer committee; service types and availability depend entirely on the local committee",
    "eligibility": "Resident or transient individual in a participating rural Texas county experiencing an emergency transportation breakdown or crisis displacement.",
    "documentationRequired": [
      "Basic photo ID or proof of regional presence (flexible in emergency escape situations)",
      "Brief explanation of immediate travel destination or barrier shortfall"
    ],
    "referralRequirement": "Local volunteer committee intake (self-contact or community referral)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated emergency need",
    "employmentDependency": "None",
    "applicationWindow": "Same-day to 48 hours depending on local committee volunteer availability",
    "whatCanBlockAccess": [
      "OPERATIONAL VARIABILITY: Services and funding levels are NOT uniform statewide; each rural county volunteer committee operates independently with variable funding and response times",
      "Assistance depends strictly on local committee capacity and monthly funds"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Contact the Salvation Army Texas Divisional Service Extension office (or check salvationarmytexas.org) to locate the active Service Unit representative in your county.",
    "howToApply": "Contact local volunteer committee liaison or regional Divisional Service Extension director.",
    "sourceUrl": "https://salvationarmytexas.org/service-extension/",
    "primaryAuthoritativeSource": "Salvation Army Texas Divisional Headquarters Guidelines",
    "lastReviewedDate": "2026-08-25",
    "dateLastVerified": "2026-08-25",
    "verificationStatus": "ACTIVE_PARTIALLY_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "211 directories only index permanent Salvation Army brick-and-mortar shelter corps, missing the hundreds of volunteer Service Units in rural Texas counties.",
    "workaround": "In rural Texas counties lacking a permanent Salvation Army center, volunteer Service Units can provide emergency financial or material assistance as determined by the local volunteer committee on a case-by-case basis.",
    "accessNotes": "Contact the Divisional Service Extension office or local county service unit representative to determine active assistance availability in your specific rural county.",
    "claimProvenances": [
      {
        "claim": "Salvation Army Texas Service Extension operates volunteer committees in non-corps rural counties",
        "primarySourceUrl": "https://salvationarmytexas.org/service-extension/",
        "sourceExcerptOrSummary": "Service Units provide emergency assistance in counties without a Salvation Army facility. Assistance is administered by local volunteer committees.",
        "verificationDate": "2026-08-31"
      }
    ],
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "usbg-bartender-emergency-assistance",
    "name": "USBG Bartender Emergency Assistance Program (BEAP)",
    "organization": "USBG National Charity Foundation",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "rent-deposit",
      "medical-dental"
    ],
    "matchTags": [
      "BARTENDER",
      "BARBACK",
      "FOOD_BEVERAGE",
      "HOSPITALITY",
      "CASH",
      "RENT",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial hardship grants to bartenders, barbacks, and bar servers facing catastrophic or unforeseen life events (including medical emergencies, displacement, family crises, or disaster impacts).",
    "whatItActuallyProvides": "Discretionary direct financial grant assistance for emergency living expenses, rent, utilities, and emergency relocation.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT"
    ],
    "paymentMethod": "SURVIVOR_DIRECT",
    "typicalAmount": "$500 to $2,500 based on documented catastrophic shortfall and foundation review",
    "knownFundingLimits": "Discretionary grant review based on objective hardship criteria and available foundation funding pools",
    "eligibility": "Must have at least 12 months (1 year) of verifiable employment as a bartender, barback, or bar server (or service/preparation of alcoholic beverages) performed on a regular full- or part-time basis prior to the emergency event. Does NOT require membership in the United States Bartenders' Guild.",
    "documentationRequired": [
      "Proof of at least 12 months (1 year) beverage hospitality employment (paystubs, W-2, 1099, or liquor license/schedule verification)",
      "Documentation verifying the catastrophic emergency or unexpected financial hardship",
      "Itemized lease, utility, or medical bills supporting the requested amount"
    ],
    "referralRequirement": "None (direct online application)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated emergent financial need / basic necessity shortfall",
    "employmentDependency": "At least 12 months (1 year) beverage hospitality employment (bartender, barback, bar server)",
    "applicationWindow": "Rolling online intake (applications processed on an ongoing basis)",
    "whatCanBlockAccess": [
      "EMPLOYMENT REQUIREMENT: Must verify at least 12 months (1 year) of regular employment in the service/preparation of alcoholic beverages",
      "DISCRETIONARY FUNDING: Grants are reviewed against objective hardship criteria and are subject to available foundation funding pools",
      "Requires itemized bills verifying the emergent financial crisis"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Visit usbgfoundation.org/beap and complete the online grant application. Upload proof of 12+ months bar industry employment and itemized emergency bills.",
    "howToApply": "Apply online at usbgfoundation.org/beap.",
    "sourceUrl": "https://www.usbgfoundation.org/beap",
    "primaryAuthoritativeSource": "USBG National Charity Foundation BEAP Guidelines",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Located within beverage industry charity networks; general caseworkers rarely ask about bar service or bartending history.",
    "workaround": "Open to any bartender, barback, or bar server with 12+ months (1 year) industry history facing an emergent catastrophic crisis. Membership in USBG is NOT required.",
    "accessNotes": "Apply online at usbgfoundation.org/beap with 12 months (1 year) employment verification and emergency bills. Grants are discretionary based on foundation funding.",
    "notes": "Administered by the USBG National Charity Foundation for beverage industry professionals.",
    "claimProvenances": [
      {
        "claim": "USBG BEAP emergency relief grants for beverage hospitality workers",
        "primarySourceUrl": "https://www.usbgfoundation.org/beap",
        "sourceExcerptOrSummary": "Provides emergency grants to bartenders, barbacks, and bar servers with 12+ months (1 year) industry experience facing unforeseen hardship.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "entertainment-community-fund",
    "name": "Entertainment Community Fund Emergency Financial Assistance",
    "organization": "Entertainment Community Fund (Formerly The Actors Fund)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "rent-deposit",
      "utility-deposit",
      "medical-dental",
      "money-now"
    ],
    "matchTags": [
      "PERFORMING_ARTS",
      "FILM",
      "THEATRE",
      "CREW",
      "STAGEHAND",
      "MUSICIAN",
      "DANCER",
      "RENT",
      "UTILITY",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial assistance grants for essential living expenses (housing rent, mortgage, utilities, medical care, and relocation) to professionals in the performing arts and entertainment industries facing an unexpected critical hardship.",
    "whatItActuallyProvides": "Direct financial assistance grants disbursed to creditors (landlords, utilities) or directly to applicants following social worker assessment.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "MEDICAL"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$1,000 to $3,000 based on documented need and earnings history",
    "knownFundingLimits": "Discretionary social services evaluation; requires documented industry earnings and demonstrated inability to meet basic expenses",
    "eligibility": "Must demonstrate documented professional earnings in performing arts/entertainment under one of three pathways: (1) General: 5 consecutive years of industry earnings with at least 3 separate years at $10,000+; (2) Freelance Dancers: 5 consecutive years with at least 3 separate years at $5,000+; or (3) Senior Professionals (Age 60+): 20 years of documented industry earnings with at least 10 years at $5,000+ annually.",
    "documentationRequired": [
      "Proof of qualifying entertainment earnings (W-2s, 1099s, tax returns, union pension/health statements: SAG-AFTRA, IATSE, AEA, AFM, AGMA)",
      "Itemized crisis documentation (lease, past-due rent notice, medical bills, utility statements)",
      "Most recent bank statements and first 2 pages of latest federal tax return"
    ],
    "referralRequirement": "None (apply directly through social services intake portal)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated crisis financial need (inability to pay basic living expenses)",
    "employmentDependency": "Performing arts and entertainment industry work history meeting pathway thresholds",
    "applicationWindow": "Ongoing rolling crisis evaluation",
    "whatCanBlockAccess": [
      "EARNINGS THRESHOLDS: Must meet published 5-year earnings rules (General: 3 years at $10k+; Dancers: 3 years at $5k+; Age 60+: 20 years with 10 years at $5k+)",
      "EXPECTATION TO SEEK WORK: Program requires that able applicants are actively seeking employment; not intended solely for general lack of work",
      "Direct vendor disbursement preferred for rent and utilities"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "INCOME_DOCUMENTATION",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Visit entertainmentcommunity.org/am-i-eligible-help, complete the online social services intake application, and upload your earnings and crisis bills.",
    "howToApply": "Apply online at entertainmentcommunity.org/am-i-eligible-help.",
    "sourceUrl": "https://entertainmentcommunity.org/am-i-eligible-help",
    "primaryAuthoritativeSource": "Entertainment Community Fund Emergency Assistance Guidelines (2026)",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Filed under entertainment charities rather than domestic crisis directories.",
    "workaround": "Covers both on-stage and behind-the-scenes professionals (actors, dancers, stagehands, grips, camera crew, hair/makeup, front-of-house) who meet the 5-year industry earnings thresholds.",
    "accessNotes": "Apply online with tax documents, union statements, and emergency bills. Dedicated Dancers' Resource pathway available for freelance dancers ($5k in 3 of 5 years).",
    "claimProvenances": [
      {
        "claim": "Entertainment Community Fund Emergency Financial Assistance 2026 earnings criteria",
        "primarySourceUrl": "https://entertainmentcommunity.org/am-i-eligible-help",
        "sourceExcerptOrSummary": "General eligibility requires 5 consecutive years of earnings with 3 years at $10,000+; dancers require 3 years at $5,000+; seniors age 60+ require 20 years with 10 years at $5,000+.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "nurses-house-emergency-grants",
    "name": "Nurses House Emergency Hardship Grants",
    "organization": "Nurses House, Inc.",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "industry-hardship",
      "rent-deposit",
      "medical-dental",
      "money-now"
    ],
    "matchTags": [
      "HEALTHCARE",
      "NURSE",
      "RN",
      "RENT",
      "HOUSING",
      "MEDICAL",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial grants for housing expenses (rent or mortgage), utilities, and medical costs to Registered Nurses facing catastrophic emergency, trauma, domestic violence escape, or acute health crises.",
    "whatItActuallyProvides": "Direct grant payments disbursed to landlords, mortgage lenders, utility companies, or medical providers.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "MEDICAL"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$1,000 to $2,500 based on verified monthly housing and living expense deficits",
    "knownFundingLimits": "Paid directly to housing and utility creditors; maximum funding caps apply per applicant lifetime",
    "eligibility": "Must be an actively licensed or recently practicing Registered Nurse (RN) experiencing an acute financial crisis, catastrophic displacement, or domestic emergency.",
    "documentationRequired": [
      "Copy of current or recently active state RN license",
      "Proof of catastrophic emergency or loss of earnings (medical notes, advocate statements, lease agreement)",
      "Itemized monthly bills (lease agreement, mortgage statement, utility bills)"
    ],
    "referralRequirement": "None (direct nurse self-application)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated immediate financial hardship",
    "employmentDependency": "Registered Nurse (RN) credentials",
    "applicationWindow": "Ongoing crisis intake",
    "whatCanBlockAccess": [
      "Restricted to Registered Nurses (RNs) — does not currently cover LPNs or CNAs under general fund",
      "Requires valid RN license verification",
      "Vendor-direct payment structure for housing and utilities"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Complete the grant application at nurseshouse.org and upload your RN license number, lease/mortgage statement, and hardship summary.",
    "howToApply": "Apply online at nurseshouse.org/grants/.",
    "sourceUrl": "https://www.nurseshouse.org/grants/",
    "primaryAuthoritativeSource": "Nurses House 501(c)(3) Operating Charter",
    "lastReviewedDate": "2026-08-21",
    "dateLastVerified": "2026-08-21",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Specialized 501(c)(3) dedicated strictly to Registered Nurses.",
    "workaround": "Provides fast housing and medical hardship grants for RNs facing acute crisis, health emergencies, domestic violence escape, or disaster displacement.",
    "accessNotes": "Apply at nurseshouse.org with copy of active or recently active RN license, brief hardship summary, and lease/landlord contact.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "dod-transitional-compensation",
    "name": "DoD Transitional Compensation for Abused Dependents (10 U.S.C. § 1059)",
    "organization": "U.S. Department of Defense",
    "state": "US",
    "geography": "Nationwide (Military Installations & Worldwide)",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "money-now",
      "medical-dental"
    ],
    "matchTags": [
      "MILITARY",
      "VETERAN",
      "DEPENDENT",
      "STATUTE",
      "MONTHLY_INCOME",
      "TRICARE",
      "COMMISSARY",
      "LEGAL"
    ],
    "whatItCanHelpWith": "Provides statutory monthly financial payments (up to 36 months), full commissary and exchange shopping privileges, and TRICARE healthcare benefits to spouses and dependents of active-duty service members separated for dependent-abuse offenses.",
    "whatItActuallyProvides": "Monthly cash benefit payments set by law (equivalent to Dependency and Indemnity Compensation rates), TRICARE medical coverage, and military installation access privileges.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "MEDICAL",
      "LEGAL_SERVICE"
    ],
    "paymentMethod": "SURVIVOR_DIRECT",
    "typicalAmount": "Monthly payments ($1,400+ per month base + child allowances) for up to 36 months",
    "knownFundingLimits": "Statutory benefit mandated under 10 U.S.C. § 1059; forfeited if survivor remarries or cohabitates with abuser during benefit period",
    "eligibility": "Spouse or dependent child of an active-duty military member who is separated from active duty under a court-martial sentence or administrative discharge resulting from a dependent-abuse offense (domestic violence, child abuse).",
    "documentationRequired": [
      "DD Form 2698 (Application for Transitional Compensation)",
      "Copy of court-martial convening order, military discharge paperwork, or administrative separation notice showing abuse basis",
      "Marriage certificate and children's birth certificates"
    ],
    "referralRequirement": "Family Advocacy Program (FAP) Victim Advocate or Staff Judge Advocate (SJA) office",
    "shelterConnectionRequired": false,
    "policeReportRequired": true,
    "incomeRestriction": "None (statutory federal entitlement)",
    "employmentDependency": "Service member spouse/dependent status",
    "applicationWindow": "Must be submitted while separation action is pending or within statutory window of discharge",
    "whatCanBlockAccess": [
      "Service member must be formally separated/discharged for a qualifying dependent-abuse offense",
      "Benefits terminate if survivor remarries or cohabitates with the abuser",
      "Requires military FAP or SJA processing"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "PROTECTIVE_ORDER_REQUIRED"
    ],
    "whatToDoNext": "Contact the installation Family Advocacy Program (FAP) Victim Advocate or Staff Judge Advocate (SJA) at the nearest military base to submit DD Form 2698.",
    "howToApply": "Contact installation Family Advocacy Program (FAP) or SJA office and submit DD Form 2698.",
    "sourceUrl": "https://www.militaryonesource.mil/family-relationships/relationships/domestic-abuse/transitional-compensation-program/",
    "primaryAuthoritativeSource": "10 U.S.C. § 1059 / DoD Instruction 1342.24",
    "lastReviewedDate": "2026-08-26",
    "dateLastVerified": "2026-08-26",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "10 U.S.C. § 1059",
    "whyMissed": "Military administrative law benefit that civilian victim advocates and municipal helplines rarely understand or know how to trigger.",
    "workaround": "Dependents of active-duty service members administratively discharged or court-martialed for dependent-abuse offenses are legally entitled to up to 36 months of tax-free monthly compensation payments, commissary privileges, and TRICARE healthcare.",
    "accessNotes": "Contact the base Family Advocacy Program (FAP) Victim Advocate or Staff Judge Advocate (SJA) office. Submit DD Form 2698.",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "vfw-unmet-needs-grant",
    "name": "VFW Unmet Needs Emergency Financial Grant",
    "organization": "Veterans of Foreign Wars (VFW)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "military-veteran",
      "rent-deposit",
      "utility-deposit",
      "transportation-gas"
    ],
    "matchTags": [
      "MILITARY",
      "VETERAN",
      "ACTIVE_DUTY",
      "RENT",
      "UTILITY",
      "AUTO_REPAIR",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides emergency financial grants of up to $1,500 for critical basic needs (rent, mortgage, electric/gas utilities, vehicle repairs, medical bills, and food) to eligible military service members, recent veterans, and their families.",
    "whatItActuallyProvides": "Direct creditor payments made on the veteran/service member's behalf to landlords, utility companies, or mechanics.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "CAR_REPAIR"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "Up to $1,500 in direct creditor bill payments",
    "knownFundingLimits": "Max $1,500 per family per 18-month cycle; paid directly to verified creditors",
    "eligibility": "Must be an active-duty service member, reservist/guard member, or veteran with an honorable discharge within the past 72 months (or service-connected disability), experiencing sudden financial emergency.",
    "documentationRequired": [
      "DD-214 or current military orders / LES verifying service tenure",
      "Past-due lease, mortgage statement, utility bill, or itemized mechanic repair estimate",
      "Brief explanation of unforeseen financial emergency"
    ],
    "referralRequirement": "None (direct online application)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial deficit due to military transition or deployment",
    "employmentDependency": "Military / Veteran service tenure",
    "applicationWindow": "Within 72 months of military discharge or ongoing active duty",
    "whatCanBlockAccess": [
      "Discharge must be within the last 72 months (unless service-connected disability)",
      "Paid directly to creditors — no cash disbursed to applicant",
      "Processing time takes 10–14 business days"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Apply online at vfw.org/assistance/financial-grants. Upload your DD-214 and itemized creditor bills.",
    "howToApply": "Apply online at vfw.org/assistance/financial-grants.",
    "sourceUrl": "https://www.vfw.org/assistance/financial-grants",
    "primaryAuthoritativeSource": "Veterans of Foreign Wars Unmet Needs Program Guidelines",
    "lastReviewedDate": "2026-08-24",
    "dateLastVerified": "2026-08-24",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Veteran organization relief fund that civilian DV navigators rarely query for family crisis relief.",
    "workaround": "Grants of up to $1,500 for emergency rent, utilities, food, auto repairs, or transportation for service members on active duty, deployed, or discharged within the past 72 months. Paid directly to creditors.",
    "accessNotes": "Apply online at vfw.org/assistance/financial-grants with DD-214, military orders, and itemized billing statements.",
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "operation-homefront-cfa",
    "name": "Operation Homefront Critical Financial Assistance (CFA)",
    "organization": "Operation Homefront",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "INDUSTRY_EMERGENCY_FUNDS",
    "barrierCategories": [
      "military-veteran",
      "rent-deposit",
      "utility-deposit",
      "transportation-gas"
    ],
    "matchTags": [
      "MILITARY",
      "ENLISTED",
      "E1_E6",
      "VETERAN",
      "WOUNDED_WARRIOR",
      "DEPLOYED",
      "RENT",
      "AUTO_REPAIR",
      "RELOCATION",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides critical financial assistance grants for past-due rent/mortgage, critical auto repairs, essential utilities, emergency groceries, and moving costs for military families and veterans across three qualifying pathways.",
    "whatItActuallyProvides": "Direct vendor grant payments made directly to third-party creditors (landlords, utility companies, licensed auto repair facilities).",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "CAR_REPAIR",
      "MOVING",
      "UTILITY_PAYMENT"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$800 to $2,500 in direct creditor bill payments",
    "knownFundingLimits": "Paid strictly to verified third-party creditors; evaluated by caseworkers based on monthly application window and demonstrated hardship",
    "eligibility": "Must qualify under one of three distinct military pathways: (1) General Active Duty: All branches, ranks E-1 through E-6 with DEERS-eligible legal dependents; (2) Deployed: Service members of ranks E-1 through E-6 with DEERS-eligible legal dependents who are currently deployed outside the US on operational orders; or (3) Wounded, Ill, or Injured: Post-9/11 veterans of any rank with a qualifying line-of-duty wound, illness, or injury, who received an honorable discharge.",
    "documentationRequired": [
      "Current military LES, deployment orders, or DD-214 + VA disability / line-of-duty medical documentation",
      "DEERS enrollment verification for legal dependents (Active Duty & Deployed pathways)",
      "Itemized third-party bills requiring settlement (lease agreement, mechanic estimate, utility bill)",
      "Proof of household income and budget deficit"
    ],
    "referralRequirement": "None (direct online application)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated emergency financial hardship",
    "employmentDependency": "Military service meeting one of 3 qualifying pathways (Active Duty E1-E6 w/ dependents, Deployed E1-E6 w/ dependents, Post-9/11 Wounded/Ill/Injured all ranks)",
    "applicationWindow": "Opens on the 1st of each month and closes at 11:59 PM CST on the 10th of each month",
    "whatCanBlockAccess": [
      "STRICT MONTHLY WINDOW: Application portal is open from the 1st through the 10th of each month (closes at 11:59 PM CST on the 10th)",
      "PATHWAY & RANK LIMITS: General Active Duty and Deployed pathways strictly require ranks E-1 through E-6 with DEERS-eligible dependents; Post-9/11 Wounded/Ill/Injured pathway accepts all ranks with line-of-duty medical proof",
      "Direct creditor disbursement only — requires verified third-party creditor documentation"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Visit operationhomefront.org/cfa-process between the 1st and 10th of the month. Submit your military documentation (LES, DD-214, or deployment orders), DEERS dependent proof, and creditor invoices.",
    "howToApply": "Apply online at operationhomefront.org/cfa-process during the monthly 1st-10th window.",
    "sourceUrl": "https://operationhomefront.org/cfa-process/",
    "primaryAuthoritativeSource": "Operation Homefront Critical Financial Assistance Process (2026)",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Military family support charity not indexed in standard civilian crisis directories.",
    "workaround": "Three distinct eligibility pathways: junior enlisted active duty (E1-E6) with dependents, deployed service members (E1-E6) with dependents, and post-9/11 wounded/ill/injured veterans of all ranks.",
    "accessNotes": "Apply online between the 1st and 10th of the month (closes 11:59 PM CST on the 10th) with military documentation, DEERS proof, and itemized third-party bills.",
    "claimProvenances": [
      {
        "claim": "Operation Homefront CFA three military pathways and 1st-10th monthly window",
        "primarySourceUrl": "https://operationhomefront.org/cfa-process/",
        "sourceExcerptOrSummary": "Applications open 1st-10th monthly (closing 11:59pm CST). Covers active duty E1-E6 with dependents, deployed E1-E6 with dependents, and post-9/11 wounded/ill/injured veterans of all ranks.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "FINANCIAL_ASSISTANCE"
  },
  {
    "id": "hud-vawa-emergency-transfer",
    "name": "HUD VAWA Emergency Transfer Plans & Housing Portability (24 CFR § 5.2005(e))",
    "organization": "U.S. Department of Housing and Urban Development (HUD)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "rent-deposit",
      "lease-escape"
    ],
    "matchTags": [
      "HUD",
      "SECTION_8",
      "VOUCHER",
      "HOUSING_AUTHORITY",
      "PUBLIC_HOUSING",
      "LIHTC",
      "STATUTE",
      "PORTABILITY",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Establishes a statutory federal right under 24 CFR § 5.2005(e) for survivors in HUD-covered subsidized housing to request an emergency transfer to a safe unit, and outlines Housing Choice Voucher portability protections under 24 CFR § 982.353/354.",
    "whatItActuallyProvides": "Statutory transfer entitlement, expedited voucher portability, and protection from eviction or voucher forfeiture.",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "RENT",
      "DOCUMENT_REPLACEMENT"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Full retention and portability of subsidized housing assistance",
    "knownFundingLimits": "Statutory mandate applying to all covered housing providers (Housing Choice Voucher, Public Housing, Project-Based Section 8, Section 202, Section 811, HOME, LIHTC)",
    "eligibility": "Must be a tenant in a covered HUD housing program who reasonably believes there is a threat of imminent harm from further violence if they remain in the dwelling unit.",
    "documentationRequired": [
      "HUD Model Form 5383 (Emergency Transfer Request for Certain Victims of Domestic Violence)",
      "Self-certification statement using HUD Form 5382 OR advocate/medical/legal affidavit"
    ],
    "referralRequirement": "Self-invoke with property manager or Housing Authority caseworker",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Existing HUD housing tenant",
    "employmentDependency": "None",
    "applicationWindow": "Immediate upon imminent safety threat",
    "whatCanBlockAccess": [
      "NO GUARANTEED UNIT AVAILABILITY: Qualifying for an emergency transfer does NOT guarantee that the housing provider has an open, safe unit immediately available",
      "PORTABILITY SUBJECT TO PHA RULES: Porting a voucher to another jurisdiction requires coordination with the receiving Public Housing Authority (PHA) and does not guarantee expedited external housing placement",
      "Applies only to federally subsidized housing programs (Section 8, Public Housing, LIHTC, HOME)"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Download HUD Model Form 5383 and submit it directly to your housing authority caseworker or subsidized property manager. Request expedited voucher portability.",
    "howToApply": "Submit HUD Form 5383 to your local Public Housing Authority (PHA) or property manager.",
    "sourceUrl": "https://www.hud.gov/program_offices/housing/mfh/vawa",
    "primaryAuthoritativeSource": "24 CFR § 5.2005(e) / HUD VAWA Final Rule",
    "lastReviewedDate": "2026-08-27",
    "dateLastVerified": "2026-08-27",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "24 CFR § 5.2005(e)",
    "whyMissed": "Public housing tenants and Section 8 voucher holders are often falsely told that moving before their lease expires will result in permanent forfeiture of their housing assistance voucher.",
    "workaround": "Under VAWA 2022 federal law (24 CFR § 5.2005(e)), any tenant in covered housing (Section 8, Housing Choice Voucher, Public Housing, Project-Based Section 8, LIHTC) who reasonably fears imminent harm has a statutory right to an emergency transfer. The Public Housing Authority (PHA) must allow the voucher to be ported immediately across city/county/state lines without terminating assistance.",
    "accessNotes": "Submit HUD Model Form 5383 (Emergency Transfer Request) or written statement to housing authority or property management. Does not require a police report.",
    "importantLimitations": "Emergency transfer approval under VAWA grants legal priority and protection from lease termination penalties, but cannot create housing inventory where no vacant units exist.",
    "claimProvenances": [
      {
        "claim": "HUD VAWA emergency transfer rights under 24 CFR § 5.2005(e) and HCV portability rules under 24 CFR § 982.353",
        "primarySourceUrl": "https://www.hud.gov/program_offices/housing/mfh/vawa",
        "sourceExcerptOrSummary": "Covered housing providers must adopt emergency transfer plans. Emergency transfer qualification does not guarantee immediate vacant unit availability.",
        "verificationDate": "2026-08-31"
      }
    ],
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "ssa-number-change-dv",
    "name": "SSA Social Security Number Change for Domestic Violence Survivors",
    "organization": "Social Security Administration (SSA)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "identity-coerced-debt",
      "device-car-tracking"
    ],
    "matchTags": [
      "SSA",
      "SSN",
      "IDENTITY",
      "STALKING",
      "CREDIT",
      "PRIVACY",
      "LEGAL",
      "STATUTE"
    ],
    "whatItCanHelpWith": "Authorizes the assignment of a new Social Security Number (SSN) under SSA Harassment, Abuse, and Life Endangerment (HALE) policy when an abuser or stalker is actively using the existing SSN to locate, harass, or inflict financial injury.",
    "whatItActuallyProvides": "Assignment of a different Social Security Number by SSA for qualifying domestic violence or endangerment cases. (Note: Does not erase past records or guarantee a fresh credit identity).",
    "assistanceShapes": [
      "DOCUMENT_REPLACEMENT",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Free official federal identity reissuance",
    "knownFundingLimits": "Administrative federal remedy under SSA POMS RM 10220.200 - RM 10220.240 and SSA Publication No. 05-10093",
    "eligibility": "Must provide third-party evidence documenting ongoing domestic violence, harassment, abuse, or life endangerment linked to the abuser's misuse or knowledge of the existing SSN.",
    "documentationRequired": [
      "Form SS-5 (Application for a Social Security Card)",
      "Primary identity and citizenship documents (certified U.S. birth certificate, passport, state ID)",
      "Third-party corroborative evidence: police reports, court restraining orders, medical records, or formal letters from domestic violence shelters, legal aid, or social services documenting ongoing harassment, abuse, or life endangerment tied to SSN misuse"
    ],
    "referralRequirement": "In-person SSA Field Office interview with comprehensive documentation packet",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Ongoing administrative evaluation",
    "whatCanBlockAccess": [
      "STRICT EVIDENCE THRESHOLD: SSA requires third-party corroborating documentation establishing ongoing danger, harassment, or misuse of the SSN by the abuser (police reports, court restraining orders, medical records, or shelter advocate affidavits)",
      "PRIOR RECORDS & LIABILITIES PERSIST: A new SSN does not erase prior tax debts, child support obligations, or legal records associated with the former number; records may continue to exist under both numbers",
      "CREDIT & CONTINUITY COMPLICATIONS: A new SSN does not create a clean or fresh financial identity. Prior financial, medical, employment, and government records remain associated with the former identity/SSN, and cross-matching complications can occur with credit bureaus, banks, employers, and state agencies"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "IDENTITY_DOCUMENTS",
      "WALK_IN"
    ],
    "whatToDoNext": "Gather your primary identity documents and third-party evidence packet. Make an in-person appointment at your local Social Security Administration Field Office and request an SSN change under SSA POMS RM 10220.200 (HALE Policy).",
    "howToApply": "Schedule an appointment at a local SSA Field Office with Form SS-5 and evidence packet.",
    "sourceUrl": "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
    "primaryAuthoritativeSource": "Social Security Administration POMS RM 10220.200 - RM 10220.240 / SSA Publication No. 05-10093 (New Social Security Numbers for Domestic Violence Victims)",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "OFFICIAL_GOVERNMENT_PORTAL",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Social Security Administration (SSA)",
      "criteriaConfirmed": [
        "SSA POMS RM 10220.200 - RM 10220.240 HALE authority",
        "SSA Publication No. 05-10093 domestic violence procedures",
        "Credit and administrative continuity complications explicitly qualified"
      ],
      "verificationNotes": "Re-verified against current SSA POMS RM 10220.200 (Harassment, Abuse, or Life Endangerment - HALE) and SSA Publication No. 05-10093.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "SSA POMS RM 10220.200 (HALE Policy) / SSA Pub. No. 05-10093",
    "whyMissed": "SSA does not advertise this route publicly on general consumer pages; it is an internal administrative procedure governed by POMS RM 10220.200.",
    "workaround": "While SSA generally prohibits changing SSNs, SSA POMS RM 10220.200 explicitly authorizes assignment of a different Social Security Number when evidence proves an abuser or stalker is using the existing SSN to locate, harass, or endanger the survivor.",
    "accessNotes": "Schedule in-person appointment at local SSA Field Office. Bring Form SS-5, birth certificate/passport, and third-party corroborating documentation (protective orders, advocate letters, or medical records). Major Access Friction: A new SSN does not create a clean credit identity and can create severe administrative and record-linking complications.",
    "notes": "Governed by SSA POMS RM 10220.200 and SSA Publication No. 05-10093. An administrative remedy requiring extensive third-party documentation and creating significant credit and record-linking complications.",
    "claimProvenances": [
      {
        "claim": "SSA assigns new SSN under Harassment, Abuse, and Life Endangerment (HALE) policy",
        "primarySourceUrl": "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
        "sourceExcerptOrSummary": "SSA POMS RM 10220.200 allows assignment of a new SSN to victims of domestic violence upon presentation of third-party evidence documenting ongoing harassment, abuse, or endangerment.",
        "verificationDate": "2026-08-31"
      }
    ],
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "freefrom-coerced-debt-toolkit",
    "name": "FreeFrom Coerced Debt Dispute Toolkit & Economic Resources",
    "organization": "FreeFrom (National Center for Economic Security)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "identity-coerced-debt",
      "money-now"
    ],
    "matchTags": [
      "COERCED_DEBT",
      "CREDIT",
      "IDENTITY_THEFT",
      "FRAUD",
      "DISPUTE",
      "LEGAL_INFORMATION",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides free legal dispute letter generators and structured self-advocacy tools for survivors to contest, block, and discharge debts (credit cards, vehicle loans, utility bills, and personal loans) incurred through intimate partner coercion or identity theft.",
    "whatItActuallyProvides": "State-specific legal dispute letter generators, credit bureau dispute packets, and economic safety planning tools.",
    "assistanceShapes": [
      "LEGAL_INFORMATION",
      "DOCUMENT_REPLACEMENT",
      "DEBT_ASSISTANCE"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Free web-based legal self-advocacy toolkit",
    "knownFundingLimits": "Non-monetary legal resource; provides dispute tools rather than cash grant payoffs",
    "eligibility": "Any survivor experiencing credit destruction, collections harassment, or fraudulent debt incurred through coercion, duress, or fraud by an intimate partner.",
    "documentationRequired": [
      "Credit reports (from AnnualCreditReport.com) showing disputed trade lines",
      "Collection notices or loan account statements",
      "Brief factual narrative of coercion (police report NOT strictly required under civil FCRA rules)"
    ],
    "referralRequirement": "None (direct web access)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Immediate online access",
    "whatCanBlockAccess": [
      "Self-directed process requiring survivor to mail dispute packets via certified mail",
      "Creditors may dispute initial claims without persistent follow-up"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "ONLINE_APPLICATION"
    ],
    "whatToDoNext": "Visit freefrom.org, pull your free credit reports, and use the Coerced Debt Toolkit to generate formal dispute letters to credit bureaus and collection agencies.",
    "howToApply": "Access the free dispute generator at freefrom.org.",
    "sourceUrl": "https://www.freefrom.org/resources/coerced-debt-toolkit/",
    "primaryAuthoritativeSource": "FreeFrom National Survivor Economic Security Standards",
    "lastReviewedDate": "2026-08-26",
    "dateLastVerified": "2026-08-26",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Civil/consumer rights tool for debt cancellation rather than traditional financial charity.",
    "workaround": "Offers state-specific statutory legal templates to dispute debt forced by an abuser (credit cards, vehicle loans, utility contracts, medical debt) under the Fair Credit Reporting Act (FCRA), Fair Debt Collection Practices Act (FDCPA), and state coerced-debt laws without having to hire a private attorney.",
    "accessNotes": "Visit freefrom.org to generate custom debt-dispute letters to send directly to credit bureaus and collection agencies.",
    "resourceType": "SELF_SERVICE_TOOL"
  },
  {
    "id": "airguard-ble-tracker-detection",
    "name": "AirGuard & BLE Bluetooth Tracker Detection Utilities",
    "organization": "Technical University of Darmstadt (Secure Mobile Networking Lab / SEEMOO)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "DIGITAL_DEVICE_SAFETY",
    "barrierCategories": [
      "device-car-tracking",
      "phone-controlled"
    ],
    "matchTags": [
      "TRACKER",
      "AIRTAG",
      "TILE",
      "SMARTTAG",
      "BLUETOOTH",
      "VEHICLE_TRACKING",
      "STALKERWARE",
      "DIGITAL_SAFETY"
    ],
    "whatItCanHelpWith": "Performs on-device Bluetooth Low Energy (BLE) scanning to detect unknown tracking devices (Apple AirTags, Find My accessories, Tile, Samsung SmartTags, Chipolo) that are traveling with a user.",
    "whatItActuallyProvides": "Free, open-source technical security application for Android and iOS that performs local, on-device BLE signal analysis without cloud tracking.",
    "assistanceShapes": [
      "DEVICE_SAFETY",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Free open-source privacy utility",
    "knownFundingLimits": "Open-source research tool published by TU Darmstadt SEEMOO Lab",
    "eligibility": "Anyone with a compatible Android or iOS smartphone seeking to scan for nearby Bluetooth tracker beacons.",
    "documentationRequired": [
      "None"
    ],
    "referralRequirement": "None",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Immediate direct download",
    "whatCanBlockAccess": [
      "BLUETOOTH LE ONLY: Detects Bluetooth Low Energy beacons only; cannot detect hardwired vehicle GPS units, cellular SIM trackers, or hidden cameras",
      "OS & BACKGROUND DIFFERENCES: Background automated detection operates fully on Android; iOS automated background scanning is constrained by Apple background execution policies",
      "NOT A COMPLETE SAFETY GUARANTEE: Technical detection tool to assist discovery; must be paired with comprehensive physical and vehicle safety planning"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Download AirGuard free from Google Play Store or F-Droid (or Apple App Store). Grant Bluetooth/Location permissions and perform manual scans away from known Bluetooth device clusters.",
    "howToApply": "Download free via Google Play Store, F-Droid, or Apple App Store.",
    "sourceUrl": "https://airguard.seemoo.de/en/",
    "primaryAuthoritativeSource": "Technical University of Darmstadt SEEMOO Lab Technical Documentation",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-09-01",
      "verificationMethod": "ACADEMIC_PROJECT_SOURCE",
      "sourceType": "OFFICIAL_TECHNICAL_DOCUMENTATION",
      "confirmingEntity": "TU Darmstadt Secure Mobile Networking Lab (SEEMOO)",
      "criteriaConfirmed": [
        "BLE tracker detection across AirTag, Find My, Tile, SmartTag, Chipolo",
        "Local on-device processing without cloud tracking",
        "OS background execution differences documented",
        "Bluetooth-only limitation (no GPS/cellular detection) qualified"
      ],
      "verificationNotes": "Re-verified against official TU Darmstadt SEEMOO Lab published documentation and GitHub repository specifications.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": false,
    "whyMissed": "Academic privacy research utility published on F-Droid and GitHub, not marketed in traditional commercial app spaces.",
    "workaround": "Open-source utility providing multi-ecosystem Bluetooth tracker detection (Apple Find My, Tile, Samsung SmartTag, Chipolo) with local processing.",
    "accessNotes": "Download from Google Play, F-Droid, or Apple App Store. Requires Bluetooth permissions. Note: Detects BLE beacons only; does not detect GPS or cellular trackers.",
    "claimProvenances": [
      {
        "claim": "AirGuard multi-ecosystem BLE tracker detection with local processing",
        "primarySourceUrl": "https://airguard.seemoo.de/en/",
        "sourceExcerptOrSummary": "Open-source security app by TU Darmstadt SEEMOO Lab detecting AirTags, Tile, and SmartTags locally on Android and iOS.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "SELF_SERVICE_TOOL"
  },
  {
    "id": "uscis-vawa-self-petition",
    "name": "USCIS VAWA Self-Petition (Form I-360 Independent Legal Status)",
    "organization": "U.S. Citizenship and Immigration Services (USCIS)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "immigration-legal"
    ],
    "matchTags": [
      "IMMIGRATION",
      "VAWA",
      "I360",
      "GREEN_CARD",
      "WORK_PERMIT",
      "STATUTE",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides an independent, confidential statutory pathway for non-citizen spouses, children, or parents who have suffered battery or extreme cruelty by a U.S. Citizen or Lawful Permanent Resident (LPR) to obtain lawful permanent residency and work authorization without the abuser's knowledge or participation.",
    "whatItActuallyProvides": "Approved immigrant classification (Form I-360), Employment Authorization Document (EAD work permit), and pathway to Adjustment of Status (Green Card).",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "DOCUMENT_REPLACEMENT"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Confidential immigration self-petition (Form I-360 has $0 filing fee for VAWA)",
    "knownFundingLimits": "Statutory immigration benefit under 8 U.S.C. § 1154(a)(1); protected by strict statutory non-disclosure laws (8 U.S.C. § 1367)",
    "eligibility": "Must be the spouse, child, or parent of an abusive U.S. Citizen or LPR, have resided with the abuser, and demonstrated battery or extreme cruelty during the qualifying relationship.",
    "documentationRequired": [
      "Form I-360 (Petition for Amerasian, Widow(er), or Special Immigrant)",
      "Proof of abuser's citizenship or LPR status (birth certificate, passport, green card copy, or FOIA request)",
      "Marriage certificate showing good-faith marriage (for spouse petitions)",
      "Corroborating evidence of abuse (affidavits, police/court records, shelter letters, medical records, or psychological evaluations)"
    ],
    "referralRequirement": "DOJ-accredited legal representative or immigration attorney recommended",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None (Form I-360 has zero filing fee)",
    "employmentDependency": "None",
    "applicationWindow": "Within 2 years of divorce if marriage was terminated due to abuse",
    "whatCanBlockAccess": [
      "Abuser must be a U.S. Citizen or Lawful Permanent Resident (LPR)",
      "If divorced, petition must be filed within 2 years of divorce decree",
      "Processing times at USCIS Vermont Service Center average 24–36 months"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Contact an accredited non-profit immigration legal service (e.g. American Gateways in Central Texas, Catholic Charities, NIWAP) to prepare and file Form I-360 with a safe mailing address.",
    "howToApply": "File Form I-360 with the USCIS Vermont Service Center (designated VAWA unit).",
    "sourceUrl": "https://www.uscis.gov/humanitarian/battered-spouse-children-and-parents",
    "primaryAuthoritativeSource": "8 U.S.C. § 1154(a)(1) / USCIS Policy Manual Vol. 3",
    "lastReviewedDate": "2026-08-27",
    "dateLastVerified": "2026-08-27",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "8 U.S.C. § 1154(a)(1)",
    "whyMissed": "Abusers frequently threaten immigrant spouses and children with immediate deportation if they leave or seek assistance.",
    "workaround": "Federal statutory protection (8 U.S.C. § 1154(a)(1)(A)) allows abused non-citizen spouses, children, and parents of US Citizens or Lawful Permanent Residents (LPRs) to petition for permanent residency completely independently. Strict confidentiality protections under 8 U.S.C. § 1367 forbid USCIS from notifying or sharing information with the abusive sponsor.",
    "accessNotes": "Connect with a DOJ-accredited immigration legal clinic (e.g. American Gateways in Central Texas, Catholic Charities, NIWAP). File Form I-360 with USCIS Vermont Service Center. Includes fee waiver eligibility and work authorization (Form I-765).",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "u-visa-t-visa-remedies",
    "name": "U Visa & T Visa Nonimmigrant Status (Crime Victims & Human Trafficking)",
    "organization": "U.S. Department of Homeland Security / USCIS",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "LEGAL_PROTECTIONS",
    "barrierCategories": [
      "statutory-rights",
      "immigration-legal"
    ],
    "matchTags": [
      "IMMIGRATION",
      "U_VISA",
      "T_VISA",
      "TRAFFICKING",
      "WORK_AUTHORIZATION",
      "LEGAL",
      "STATUTE"
    ],
    "whatItCanHelpWith": "Provides nonimmigrant legal status, Employment Authorization Documents (EAD work permits), and a pathway to Lawful Permanent Residency for immigrant survivors of qualifying violent crimes (U Visa) or commercial sex/labor trafficking (T Visa).",
    "whatItActuallyProvides": "4-year nonimmigrant legal status, deportation protection, work permit, and permanent residency eligibility.",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "DOCUMENT_REPLACEMENT"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Statutory legal protection with fee waivers available",
    "knownFundingLimits": "Annual statutory cap of 10,000 U Visas (Bona Fide Determination provides interim work authorization while awaiting visa availability)",
    "eligibility": "U Visa: Victim of qualifying crime (domestic violence, felony assault, stalking) who has been helpful in investigation/prosecution. T Visa: Victim of severe commercial sex or labor trafficking who complies with reasonable law enforcement requests.",
    "documentationRequired": [
      "Form I-918 (U Visa) or Form I-914 (T Visa)",
      "For U Visa: Form I-918 Supplement B (Law Enforcement Certification signed by police, prosecutor, or judge)",
      "Detailed personal declaration and corroborating medical/police/advocate evidence"
    ],
    "referralRequirement": "DOJ-accredited legal aid organization or immigration attorney",
    "shelterConnectionRequired": false,
    "policeReportRequired": true,
    "incomeRestriction": "None (fee waivers available for all associated forms)",
    "employmentDependency": "None",
    "applicationWindow": "Ongoing statutory evaluation",
    "whatCanBlockAccess": [
      "U Visa requires signed law enforcement certification (Form I-918 Supplement B)",
      "USCIS processing backlog is significant, though Bona Fide Determinations provide interim work authorization",
      "Requires experienced immigration legal representation"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Consult with an accredited non-profit immigration legal clinic to evaluate crime victimization facts and request law enforcement certification.",
    "howToApply": "Submit Form I-918 or I-914 through accredited legal counsel to USCIS.",
    "sourceUrl": "https://www.uscis.gov/humanitarian/victims-of-human-trafficking-and-other-crimes",
    "primaryAuthoritativeSource": "8 U.S.C. § 1101(a)(15)(U) & (T) / USCIS Policy Guidelines",
    "lastReviewedDate": "2026-08-27",
    "dateLastVerified": "2026-08-27",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "8 U.S.C. § 1101(a)(15)(U)",
    "whyMissed": "Complex statutory immigration relief requiring specific law enforcement certification or trafficking evidence.",
    "workaround": "Provides 4 years of lawful nonimmigrant status, Employment Authorization Documents (EAD), and a path to permanent residency for survivors of qualifying violent crimes (U Visa / Form I-918) or commercial sex/labor trafficking (T Visa / Form I-914). Bona Fide Determination policies provide interim work authorization while petitions are pending.",
    "accessNotes": "Seek screening from accredited immigration legal aid providers. U Visa requires Form I-918 Supplement B signed by a certifying law enforcement or judicial agency.",
    "resourceType": "STATUTORY_RIGHT"
  },
  {
    "id": "stronghearts-native-helpline",
    "name": "StrongHearts Native Helpline (Tribal Jurisdiction & Culturally-Centered Safety)",
    "organization": "StrongHearts Native Helpline",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "HOTLINES_CRISIS_HOUSING",
    "barrierCategories": [
      "hotlines-safe-intake",
      "statutory-rights",
      "legal-aid"
    ],
    "matchTags": [
      "NATIVE_AMERICAN",
      "INDIGENOUS",
      "TRIBAL",
      "VAWA_SDVCJ",
      "HELPLINE",
      "CULTURE",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Provides 24/7 confidential, culturally tailored domestic and sexual violence navigation, emergency shelter coordination, and legal jurisdiction advocacy for Native American and Alaska Native survivors across reservation and urban communities.",
    "whatItActuallyProvides": "One-on-one confidential advocacy, safety planning, tribal resource navigation, and legal referral under tribal court and VAWA SDVCJ laws.",
    "assistanceShapes": [
      "COUNSELING",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Free 24/7 confidential advocacy and tribal resource mapping",
    "knownFundingLimits": "Unlimited free confidential access",
    "eligibility": "Native American and Alaska Native survivors, family members, or service providers needing tribal legal/safety navigation.",
    "documentationRequired": [
      "None (strictly confidential intake)"
    ],
    "referralRequirement": "None (direct call/chat)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Immediate 24/7 access",
    "whatCanBlockAccess": [
      "None"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "CALL_ONLY",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Call or text 1-844-7NATIVE (1-844-762-8483) or visit strongheartshelpline.org for 24/7 confidential chat with a Native advocate.",
    "howToApply": "Call or text 1-844-7NATIVE (1-844-762-8483) or chat at strongheartshelpline.org.",
    "sourceUrl": "https://strongheartshelpline.org/",
    "primaryAuthoritativeSource": "StrongHearts Native Helpline 501(c)(3) Operating Charter",
    "lastReviewedDate": "2026-08-25",
    "dateLastVerified": "2026-08-25",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Specialized Indigenous-led resource omitted by municipal and county-level directories.",
    "workaround": "Confidential, culturally tailored 24/7 advocacy for Native American and Alaska Native survivors. Expertly navigates complex overlapping Tribal Court, State, and Federal jurisdictional boundaries under VAWA Special Domestic Violence Criminal Jurisdiction (SDVCJ) and Indian Civil Rights Act frameworks.",
    "accessNotes": "Call or text 1-844-7NATIVE (1-844-762-8483) or visit strongheartshelpline.org for 1-on-1 confidential chat.",
    "resourceType": "DIRECT_SERVICE"
  },
  {
    "id": "face-to-face-reconstructive-surgery",
    "name": "FACE TO FACE: Domestic Violence Reconstructive Surgery",
    "organization": "American Academy of Facial Plastic and Reconstructive Surgery (AAFPRS Foundation)",
    "state": "US",
    "geography": "Nationwide",
    "scope": "NATIONWIDE",
    "category": "PHYSICAL_RESTORATION",
    "barrierCategories": [
      "medical-dental",
      "physical-restoration"
    ],
    "matchTags": [
      "SURGERY",
      "MEDICAL",
      "RECONSTRUCTIVE",
      "FACIAL",
      "PRO_BONO",
      "PHYSICAL_RESTORATION",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Connects survivors of domestic violence who have sustained facial injuries with board-certified facial plastic surgeons providing pro bono or low-cost reconstructive surgery.",
    "whatItActuallyProvides": "Pro bono or low-cost professional reconstructive surgical services provided by volunteer AAFPRS surgeons (surgeon fees waived).",
    "assistanceShapes": [
      "MEDICAL",
      "OTHER"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "Volunteer surgeon professional surgical fees waived",
    "knownFundingLimits": "Volunteer surgeon network operating nationwide; hospital operating facility and anesthesia fees are not covered by AAFPRS and vary by facility",
    "eligibility": "Must have sustained physical facial injuries caused by domestic violence. Survivor must be out of the abusive relationship for at least 12 months and complete an intake interview.",
    "documentationRequired": [
      "Intake application through AAFPRS Foundation",
      "Referral letter from a domestic violence shelter advocate, licensed therapist, or social worker confirming at least 12 months of separation from the abuser",
      "Medical/dental records and facial injury photographs"
    ],
    "referralRequirement": "Shelter advocate, licensed therapist, or social worker referral letter",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial hardship / lack of comprehensive surgical insurance",
    "employmentDependency": "None",
    "applicationWindow": "At least 12 months following physical separation from abuser",
    "whatCanBlockAccess": [
      "FACILITY & ANESTHESIA FEES NOT COVERED: Volunteer surgeons waive their professional surgical fees; however, hospital operating room, anesthesia, and medication charges are not covered by AAFPRS and vary by facility",
      "SEPARATION REQUIREMENT: Must be out of the abusive relationship for at least 12 months",
      "Requires referral letter from a domestic violence advocate, counselor, or social worker"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "ADVOCATE_REFERRAL_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Call 1-800-842-4546 or visit aafprs.org to request a FACE TO FACE intake application. Have your advocate or counselor submit a separation verification letter.",
    "howToApply": "Call 1-800-842-4546 or apply via aafprs.org.",
    "sourceUrl": "https://www.aafprs.org/Professionals/Development/Humanitarian_Programs/FTF_Domestic_Violence/ERF/FTFDV.aspx",
    "primaryAuthoritativeSource": "AAFPRS Educational and Research Foundation Standards",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Pro bono surgical specialty network outside standard social service directories.",
    "workaround": "Volunteer board-certified facial plastic surgeons waive their professional surgical fees for reconstructive surgery to repair facial injuries caused by domestic violence (12-month separation required).",
    "accessNotes": "Call 1-800-842-4546 or apply through AAFPRS Foundation with advocate letter. Surgeon fees are waived; operating facility and anesthesia charges vary by hospital.",
    "claimProvenances": [
      {
        "claim": "AAFPRS Foundation FACE TO FACE reconstructive surgery for domestic violence survivors",
        "primarySourceUrl": "https://www.aafprs.org/Professionals/Development/Humanitarian_Programs/FTF_Domestic_Violence/ERF/FTFDV.aspx",
        "sourceExcerptOrSummary": "Volunteer surgeons provide pro bono surgical care for facial injuries to survivors out of the relationship for 12+ months with advocate referral. Facility costs not covered.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "DIRECT_SERVICE"
  },
  {
    "id": "removery-ink-tattoo-removal",
    "name": "Removery INK-itiative (Tattoo Removal for Survivors & Recovery)",
    "organization": "Removery Laser Tattoo Removal",
    "state": "US",
    "geography": "Nationwide (Studios across Texas & US)",
    "scope": "NATIONWIDE",
    "category": "PHYSICAL_RESTORATION",
    "barrierCategories": [
      "physical-restoration",
      "medical-dental"
    ],
    "matchTags": [
      "TATTOO_REMOVAL",
      "DOMESTIC_VIOLENCE",
      "HUMAN_TRAFFICKING",
      "HATE_SYMBOLS",
      "GANG_RECOVERY",
      "PRO_BONO",
      "PHYSICAL_RESTORATION",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides 100% free PicoWay laser tattoo removal for individuals seeking to remove tattoos associated with domestic violence, human trafficking, hate symbols, gang affiliation, or prison history.",
    "whatItActuallyProvides": "Complete series of professional PicoWay clinical laser tattoo removal treatments at zero cost through Removery's INK-itiative program.",
    "assistanceShapes": [
      "MEDICAL",
      "OTHER"
    ],
    "paymentMethod": "NON_MONETARY_SERVICE",
    "typicalAmount": "100% free clinical laser tattoo removal series",
    "knownFundingLimits": "Pro bono community initiative across all Removery studio locations in Texas (Austin, Dallas, Houston, San Antonio) and nationwide; subject to clinical evaluation and quarterly intake capacity",
    "eligibility": "Eligible applicant categories include: (1) Survivors of domestic violence seeking tattoo removal; (2) Survivors of human trafficking; (3) Individuals with hate or gang-related symbols; and (4) Formerly incarcerated individuals. Requires a recommendation letter from a community advocate, shelter, parole officer, or social service agency.",
    "documentationRequired": [
      "Completed online INK-itiative application form",
      "Clear, well-lit photo of the tattoo(s) requesting removal",
      "Official recommendation or referral letter from a recognized social service agency, domestic violence shelter, counselor, or community organization"
    ],
    "referralRequirement": "Recommendation letter from an advocate, shelter, counselor, or community agency required",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Quarterly intake and rolling application reviews",
    "whatCanBlockAccess": [
      "ADVOCATE RECOMMENDATION REQUIRED: Must provide a formal recommendation letter from an advocate, shelter, counselor, or social service agency",
      "CLINICAL EVALUATION: Acceptance is subject to Removery clinical evaluation, quarterly intake capacity, and treatment feasibility",
      "Requires physical travel to a Removery clinical studio (multiple locations across Texas and nationwide)"
    ],
    "accessFrictions": [
      "ONLINE_APPLICATION",
      "ADVOCATE_REFERRAL_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Visit removery.com/services/ink-nitiative, submit the online intake form with a clear tattoo photo, and have your advocate or counselor provide a recommendation letter.",
    "howToApply": "Apply online at removery.com/services/ink-nitiative/ with tattoo photo and advocate letter.",
    "sourceUrl": "https://removery.com/services/ink-nitiative/",
    "primaryAuthoritativeSource": "Removery INK-itiative Official Program Standards (2026)",
    "lastReviewedDate": "2026-09-01",
    "dateLastVerified": "2026-09-01",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "whyMissed": "Private clinical social-impact initiative not indexed in traditional municipal social service directories.",
    "workaround": "Provides 100% free laser removal for tattoos related to domestic violence, human trafficking, hate symbols, or gang recovery with an advocate recommendation letter. Studios located in Austin, Dallas, Houston, San Antonio, and nationwide.",
    "accessNotes": "Apply online at removery.com/services/ink-nitiative with tattoo photo and recommendation letter from a domestic violence shelter, counselor, or community agency.",
    "claimProvenances": [
      {
        "claim": "Removery INK-itiative pro bono tattoo removal for domestic violence and human trafficking survivors",
        "primarySourceUrl": "https://removery.com/services/ink-nitiative/",
        "sourceExcerptOrSummary": "Provides free laser tattoo removal for domestic violence, human trafficking, hate symbols, and gang tattoos upon submission of application, photo, and advocate recommendation.",
        "verificationDate": "2026-09-01"
      }
    ],
    "resourceType": "DIRECT_SERVICE"
  }
];

export const NATIONAL_RESOURCES = OTHER_WAYS_THROUGH_RESOURCES;
