export interface AuthoritativeSourceItem {
  url: string;
  title: string;
  publisher: string;
  sourceType: string;
  lastChecked: string;
}

export const AUTHORITATIVE_SOURCES: Record<string, AuthoritativeSourceItem> = {
  "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program": {
    "url": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
    "title": "Texas Code of Criminal Procedure Chapter 56B (Art. 56B.106(a)(3)) / Texas OAG CVC Guidelines",
    "publisher": "Office of the Texas Attorney General (OAG)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-31"
  },
  "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program": {
    "url": "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program",
    "title": "Texas Code of Criminal Procedure Chapter 58, Subchapter B (Art. 58.052)",
    "publisher": "Office of the Texas Attorney General (OAG)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-31"
  },
  "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016": {
    "url": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
    "title": "Texas Property Code Chapter 92, Section 92.016",
    "publisher": "State of Texas / Texas Judicial System",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-29"
  },
  "https://www.puc.texas.gov/consumer/electricity/victim_waiver.aspx": {
    "url": "https://www.puc.texas.gov/consumer/electricity/victim_waiver.aspx",
    "title": "Public Utility Commission of Texas Substantive Rule 16 TAC § 25.478",
    "publisher": "Public Utility Commission of Texas (PUCT) / Texas Council on Family Violence (TCFV)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-29"
  },
  "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153": {
    "url": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
    "title": "Texas Property Code Chapter 92, Subchapter D (§§ 92.153–92.165)",
    "publisher": "State of Texas / Justice of the Peace Courts",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-31"
  },
  "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045": {
    "url": "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045",
    "title": "Texas Labor Code Section 207.045(d)",
    "publisher": "Texas Workforce Commission (TWC)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-29"
  },
  "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.85.htm": {
    "url": "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.85.htm",
    "title": "Texas Family Code Title 4 (§§ 71.001–88.008)",
    "publisher": "Texas District Courts & County Courts at Law",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-29"
  },
  "https://www.traviscountytx.gov/health-human-services/community-centers": {
    "url": "https://www.traviscountytx.gov/health-human-services/community-centers",
    "title": "Travis County Health and Human Services Program Standards",
    "publisher": "Travis County Health and Human Services (TCHHS)",
    "sourceType": "GOVERNMENT_PORTAL",
    "lastChecked": "2026-08-20"
  },
  "https://www.safeaustin.org/get-help/": {
    "url": "https://www.safeaustin.org/get-help/",
    "title": "SAFE Alliance Official Program Standards",
    "publisher": "SAFE Alliance",
    "sourceType": "501C3_STANDARDS",
    "lastChecked": "2026-08-31"
  },
  "https://svdpctx.org/get-help": {
    "url": "https://svdpctx.org/get-help",
    "title": "Society of St. Vincent de Paul Diocesan Council of Austin",
    "publisher": "Society of St. Vincent de Paul (Austin Council)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://owbc-tx.org/energy-assistance/": {
    "url": "https://owbc-tx.org/energy-assistance/",
    "title": "Texas Department of Housing & Community Affairs (TDHCA) / OWBC",
    "publisher": "Opportunities for Williamson & Burnet Counties (OWBC)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.hopealliancetx.org/get-help/": {
    "url": "https://www.hopealliancetx.org/get-help/",
    "title": "Hope Alliance Official Program Standards",
    "publisher": "Hope Alliance",
    "sourceType": "501C3_STANDARDS",
    "lastChecked": "2026-08-31"
  },
  "https://caringplacetx.org/get-help/": {
    "url": "https://caringplacetx.org/get-help/",
    "title": "The Caring Place 501(c)(3) Guidelines",
    "publisher": "The Caring Place",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://avda-tx.org/get-help/": {
    "url": "https://avda-tx.org/get-help/",
    "title": "AVDA Houston Legal Services Standards",
    "publisher": "AVDA",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://hawc.org/get-help/": {
    "url": "https://hawc.org/get-help/",
    "title": "Houston Area Women's Center Official Intake",
    "publisher": "Houston Area Women's Center",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://ccaction.com": {
    "url": "https://ccaction.com",
    "title": "Combined Community Action CSBG Program Standards",
    "publisher": "Combined Community Action (CCA)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://southernsmoke.org/emergency-relief/": {
    "url": "https://southernsmoke.org/emergency-relief/",
    "title": "Southern Smoke Foundation 501(c)(3) Program Guidelines",
    "publisher": "Southern Smoke Foundation",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://thegivingkitchen.org/help": {
    "url": "https://thegivingkitchen.org/help",
    "title": "Giving Kitchen 501(c)(3) Program Guidelines",
    "publisher": "Giving Kitchen",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://coregives.org/apply/": {
    "url": "https://coregives.org/apply/",
    "title": "CORE Gives 501(c)(3) Published Program Guidelines",
    "publisher": "CORE Gives",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://cerfplus.org/get-relief/": {
    "url": "https://cerfplus.org/get-relief/",
    "title": "CERF+ Official Program Announcement (July 23, 2026)",
    "publisher": "CERF+ (The Artists Safety Net)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.musicares.org/get-help": {
    "url": "https://www.musicares.org/get-help",
    "title": "MusiCares / Recording Academy Program Standards",
    "publisher": "MusiCares / Recording Academy",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://authorsleaguefund.org/apply/": {
    "url": "https://authorsleaguefund.org/apply/",
    "title": "The Authors League Fund 501(c)(3) Program Guidelines",
    "publisher": "The Authors League Fund",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://redrover.org/relief/safe-escape-grants/": {
    "url": "https://redrover.org/relief/safe-escape-grants/",
    "title": "RedRover Relief Safe Escape Official Program Guidelines",
    "publisher": "RedRover",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://safehavensforpets.org": {
    "url": "https://safehavensforpets.org",
    "title": "Animal Welfare Institute (AWI) Safe Havens Mapping",
    "publisher": "Animal Welfare Institute (AWI)",
    "sourceType": "PUBLIC_AUDIT",
    "lastChecked": "2026-08-20"
  },
  "https://www.fcc.gov/safe-connections-act": {
    "url": "https://www.fcc.gov/safe-connections-act",
    "title": "47 U.S.C. § 345 / FCC Rules 47 CFR Part 64, Subpart II",
    "publisher": "Federal Communications Commission (FCC) / Wireless Carriers",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-31"
  },
  "https://www.techsafety.org/resources-survivors": {
    "url": "https://www.techsafety.org/resources-survivors",
    "title": "National Network to End Domestic Violence Safety Net Project",
    "publisher": "National Network to End Domestic Violence (NNEDV)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin": {
    "url": "https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin",
    "title": "IRS Identity Protection Guidelines / Internal Revenue Manual",
    "publisher": "Internal Revenue Service (IRS)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-20"
  },
  "https://www.irs.gov/businesses/small-businesses-self-employed/innocent-spouse-relief": {
    "url": "https://www.irs.gov/businesses/small-businesses-self-employed/innocent-spouse-relief",
    "title": "26 U.S. Code § 6015 / IRS Publication 971",
    "publisher": "Internal Revenue Service (IRS)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-20"
  },
  "https://www.aacd.com/givesmile": {
    "url": "https://www.aacd.com/givesmile",
    "title": "AACD Charitable Foundation Give Back a Smile Standards",
    "publisher": "American Academy of Cosmetic Dentistry Charitable Foundation (AACDCF)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.modestneeds.org": {
    "url": "https://www.modestneeds.org",
    "title": "Modest Needs Foundation 501(c)(3) Operating Standards",
    "publisher": "Modest Needs Foundation",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.1800runaway.org/youth-teens/home-free-transportation": {
    "url": "https://www.1800runaway.org/youth-teens/home-free-transportation",
    "title": "National Runaway Safeline & Greyhound Lines Inc. Program Charter",
    "publisher": "National Runaway Safeline & Greyhound Lines, Inc.",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-28"
  },
  "https://salvationarmytexas.org/service-extension/": {
    "url": "https://salvationarmytexas.org/service-extension/",
    "title": "Salvation Army Texas Divisional Headquarters Guidelines",
    "publisher": "The Salvation Army Texas Division",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-25"
  },
  "https://www.usbgfoundation.org/beap": {
    "url": "https://www.usbgfoundation.org/beap",
    "title": "USBG National Charity Foundation BEAP Operating Guidelines",
    "publisher": "USBG National Charity Foundation",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-22"
  },
  "https://entertainmentcommunity.org/services-and-programs/emergency-financial-assistance": {
    "url": "https://entertainmentcommunity.org/services-and-programs/emergency-financial-assistance",
    "title": "Entertainment Community Fund Social Services Standards",
    "publisher": "Entertainment Community Fund (Formerly The Actors Fund)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-20"
  },
  "https://www.nurseshouse.org/grants/": {
    "url": "https://www.nurseshouse.org/grants/",
    "title": "Nurses House 501(c)(3) Operating Charter",
    "publisher": "Nurses House, Inc.",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-21"
  },
  "https://www.militaryonesource.mil/family-relationships/relationships/domestic-abuse/transitional-compensation-program/": {
    "url": "https://www.militaryonesource.mil/family-relationships/relationships/domestic-abuse/transitional-compensation-program/",
    "title": "10 U.S.C. § 1059 / DoD Instruction 1342.24",
    "publisher": "U.S. Department of Defense",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-26"
  },
  "https://www.vfw.org/assistance/financial-grants": {
    "url": "https://www.vfw.org/assistance/financial-grants",
    "title": "Veterans of Foreign Wars Unmet Needs Program Guidelines",
    "publisher": "Veterans of Foreign Wars (VFW)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-24"
  },
  "https://operationhomefront.org/critical-financial-assistance/": {
    "url": "https://operationhomefront.org/critical-financial-assistance/",
    "title": "Operation Homefront CFA Operating Standards",
    "publisher": "Operation Homefront",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-23"
  },
  "https://www.hud.gov/program_offices/housing/mfh/vawa": {
    "url": "https://www.hud.gov/program_offices/housing/mfh/vawa",
    "title": "24 CFR § 5.2005(e) / HUD VAWA Final Rule",
    "publisher": "U.S. Department of Housing and Urban Development (HUD)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-27"
  },
  "https://secure.ssa.gov/poms.nsf/lnx/0110220200": {
    "url": "https://secure.ssa.gov/poms.nsf/lnx/0110220200",
    "title": "Social Security Administration POMS RM 10220.200 - RM 10220.240 / SSA Publication No. 05-10093 (New Social Security Numbers for Domestic Violence Victims)",
    "publisher": "Social Security Administration (SSA)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-31"
  },
  "https://www.freefrom.org/resources/coerced-debt-toolkit/": {
    "url": "https://www.freefrom.org/resources/coerced-debt-toolkit/",
    "title": "FreeFrom National Survivor Economic Security Standards",
    "publisher": "FreeFrom (National Center for Economic Security)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-26"
  },
  "https://github.com/seemoo-lab/AirGuard": {
    "url": "https://github.com/seemoo-lab/AirGuard",
    "title": "Technical University of Darmstadt SEEMOO Research & AirGuard Documentation",
    "publisher": "Technical University of Darmstadt (Secure Mobile Networking Lab - SEEMOO)",
    "sourceType": "ACADEMIC_RESEARCH",
    "lastChecked": "2026-08-24"
  },
  "https://www.uscis.gov/humanitarian/battered-spouse-children-and-parents": {
    "url": "https://www.uscis.gov/humanitarian/battered-spouse-children-and-parents",
    "title": "8 U.S.C. § 1154(a)(1) / USCIS Policy Manual Vol. 3",
    "publisher": "U.S. Citizenship and Immigration Services (USCIS)",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-27"
  },
  "https://www.uscis.gov/humanitarian/victims-of-human-trafficking-and-other-crimes": {
    "url": "https://www.uscis.gov/humanitarian/victims-of-human-trafficking-and-other-crimes",
    "title": "8 U.S.C. § 1101(a)(15)(U) & (T) / USCIS Policy Guidelines",
    "publisher": "U.S. Department of Homeland Security / USCIS",
    "sourceType": "PRIMARY_STATUTE",
    "lastChecked": "2026-08-27"
  },
  "https://strongheartshelpline.org/": {
    "url": "https://strongheartshelpline.org/",
    "title": "StrongHearts Native Helpline 501(c)(3) Operating Charter",
    "publisher": "StrongHearts Native Helpline",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-25"
  },
  "https://www.aafprs.org/AAFPRS/Community/Face_to_Face/Domestic_Violence.aspx": {
    "url": "https://www.aafprs.org/AAFPRS/Community/Face_to_Face/Domestic_Violence.aspx",
    "title": "AAFPRS Educational and Research Foundation Standards",
    "publisher": "American Academy of Facial Plastic and Reconstructive Surgery (AAFPRS Foundation)",
    "sourceType": "OFFICIAL_501C3_STANDARDS",
    "lastChecked": "2026-08-22"
  },
  "https://removery.com/about/ink-initiative/": {
    "url": "https://removery.com/about/ink-initiative/",
    "title": "Removery INK Community Initiative Standards",
    "publisher": "Removery Laser Tattoo Removal",
    "sourceType": "OFFICIAL_PROVIDER_DOCUMENTATION",
    "lastChecked": "2026-08-24"
  }
};
