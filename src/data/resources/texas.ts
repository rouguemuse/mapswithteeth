import { Resource } from "@/types/resource";

export const TEXAS_RESOURCES: Resource[] = [
  {
    "id": "tx-oag-cvc-relocation",
    "name": "Texas Crime Victims' Compensation (CVC) Relocation Assistance",
    "organization": "Office of the Texas Attorney General (OAG)",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "VICTIM_COMPENSATION",
    "barrierCategories": [
      "rent-deposit",
      "money-now",
      "furniture-household",
      "medical-dental",
      "gas-travel",
      "utility-deposit",
      "pets"
    ],
    "matchTags": [
      "TEXAS",
      "CASH",
      "RENT",
      "RELOCATION",
      "PET_DEPOSIT",
      "UTILITY",
      "STORAGE",
      "MOVING",
      "MEDICAL",
      "COUNSELING",
      "POLICE_REPORT_REQUIRED"
    ],
    "whatItCanHelpWith": "Up to $5,000 total for documented qualifying relocation deposits, moving expenses, and rent for qualifying crimes occurring after August 31, 2023. Potentially covered relocation categories under Texas OAG rules include emergency lodging, monthly rent, professional movers, rental deposits, pet deposits, storage units, relocation transportation, utility deposits/connections, transfer fees, and rental truck/van costs.",
    "whatItActuallyProvides": "Up to $5,000 total for documented qualifying relocation deposits, moving expenses, and rent for qualifying crimes occurring after August 31, 2023. Payer of last resort; requires itemized receipts.",
    "assistanceShapes": [
      "REIMBURSEMENT",
      "VENDOR_PAYMENT",
      "RENT",
      "RENT_DEPOSIT",
      "PET_DEPOSIT",
      "STORAGE",
      "MOVING",
      "UTILITY_PAYMENT",
      "MEDICAL",
      "COUNSELING"
    ],
    "paymentMethod": "REIMBURSEMENT",
    "typicalAmount": "Up to $5,000 relocation cap (post-Aug 31, 2023 offenses; based on verified documented expenses, not automatic flat grant) + up to $700/week lost wages",
    "knownFundingLimits": "Up to $5,000 for post-Aug 31, 2023 offenses ($2,000 for pre-Sept 1, 2023 crimes). Must submit itemized receipts.",
    "eligibility": "Victims of violent crime or domestic violence in Texas who reported the incident to law enforcement (or qualifying exceptions) and incurred financial expenses directly resulting from the crime.",
    "documentationRequired": [
      "Law enforcement incident report or police report number",
      "Itemized lease agreement, utility receipts, pet deposit receipts, or moving/truck invoices",
      "Employer wage verification form if claiming lost income"
    ],
    "referralRequirement": "None required (can self-apply online, but shelter/hospital advocate assistance recommended)",
    "shelterConnectionRequired": false,
    "policeReportRequired": true,
    "incomeRestriction": "None (eligibility is based on victimization, not poverty threshold)",
    "employmentDependency": "None for relocation benefits (employment proof needed only for lost wage claims)",
    "applicationWindow": "Generally within 3 years of the crime (statutory exceptions for family violence and child victims)",
    "whatCanBlockAccess": [
      "Police report or law enforcement incident number required",
      "Payer of last resort (collateral sources like insurance must be used first)",
      "Reimbursement or vendor-paid only (not an instant upfront cash payment)"
    ],
    "accessFrictions": [
      "POLICE_REPORT_REQUIRED",
      "APPLICATION_REQUIRED",
      "WAITLIST_POSSIBLE"
    ],
    "whatToDoNext": "Apply online through the Texas OAG Crime Victims' Portal (texasattorneygeneral.gov) or meet with a hospital/shelter victim witness counselor.",
    "howToApply": "Apply online through the Texas OAG Crime Victims' Portal or meet with a hospital/shelter victim witness counselor.",
    "sourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
    "primaryAuthoritativeSource": "Texas Code of Criminal Procedure Chapter 56B / Texas OAG Crime Victims' Services Division Guidelines",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "PRIMARY_STATUTE",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Texas Code of Criminal Procedure Chapter 56B / Texas OAG",
      "criteriaConfirmed": [
        "Up to $5,000 relocation cap for offenses post-Aug 31, 2023",
        "Itemized reimbursement payer-of-last-resort mandate",
        "Police report requirement with trauma exceptions"
      ],
      "verificationNotes": "Verified against Texas Code of Criminal Procedure Chapter 56B and current Texas OAG CVC guidelines.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Code Crim. Proc. Chapter 56B",
    "notes": "Historical limit for pre-Sept 1, 2023 crimes was $2,000. Current statutory limit is up to $5,000 total for post-Aug 31, 2023 offenses.",
    "importantLimitations": "Funding is based on itemized eligible expense receipts and eligibility limits. Does not guarantee an automatic $5,000 payment to every claimant.",
    "claimProvenances": [
      {
        "claim": "Texas Crime Victims' Compensation (CVC) Relocation Assistance",
        "primarySourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/crime-victims-compensation-program",
        "sourceExcerptOrSummary": "Texas Code of Criminal Procedure Chapter 56B / Texas OAG Crime Victims' Services Division Guidelines",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-oag-acp",
    "name": "Texas Address Confidentiality Program (ACP)",
    "organization": "Office of the Texas Attorney General (OAG)",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "CONFIDENTIALITY",
    "barrierCategories": [
      "address-confidentiality",
      "taxes-identity-docs",
      "legal-representation"
    ],
    "matchTags": [
      "TEXAS",
      "CONFIDENTIALITY",
      "ADDRESS_PROTECTION",
      "VOTER_PRIVACY",
      "ADVOCATE_REFERRAL"
    ],
    "whatItCanHelpWith": "Provides survivors of family violence, sexual assault, human trafficking, or stalking with a confidential substitute mailing address (P.O. Box in Austin) that state agencies, county clerks, local courts, and public school districts are legally mandated to accept in lieu of a physical home address.",
    "whatItActuallyProvides": "Confidential substitute legal address and free mail forwarding administered by the Texas Attorney General.",
    "assistanceShapes": [
      "DOCUMENT_REPLACEMENT",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Free state confidentiality service + free first-class mail forwarding",
    "knownFundingLimits": "Statutory confidentiality service (no direct monetary grant)",
    "eligibility": "Survivors of family violence, sexual assault, human trafficking, or stalking who are establishing a new confidential address in Texas.",
    "documentationRequired": [
      "Completed ACP Application form (can be self-completed or certified with an advocate)",
      "Evidence of qualifying offense (protective order, incident report, court record, or signed advocate statement)"
    ],
    "referralRequirement": "Self-application permitted directly to Texas OAG (online/mail); advocate-assisted application through a certified ACP Enrollment Assistant at a local domestic violence center is recommended for safety planning",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Year-round enrollment",
    "whatCanBlockAccess": [
      "RECOMMENDED VS. REQUIRED ROUTE: Self-application directly to the Texas OAG is permitted via online document upload or mail. Meeting with a certified ACP Enrollment Assistant is recommended, not mandatory.",
      "Private commercial entities (private landlords, banks, credit card bureaus) are not mandated by state statute to accept ACP substitute address",
      "Mail forwarding introduces 5–10 day delivery delay for forwarded standard mail"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Submit an application directly via the Texas OAG ACP portal / mail, or contact the OAG ACP line (888-832-2322) / local domestic violence shelter for recommended advocate assistance.",
    "howToApply": "Apply directly via the Texas OAG Crime Victims portal/mail, or contact a certified ACP Enrollment Assistant at a local family violence shelter.",
    "sourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program",
    "primaryAuthoritativeSource": "Texas Code of Criminal Procedure Chapter 58, Subchapter B (Art. 58.052)",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "OFFICIAL_GOVERNMENT_PORTAL",
      "sourceType": "PRIMARY_STATUTE",
      "confirmingEntity": "Office of the Texas Attorney General - Crime Victims' Services Division",
      "criteriaConfirmed": [
        "Self-application permitted via mail/portal",
        "Advocate assistance recommended but not mandatory",
        "Mandatory government/school acceptance under Tex. Code Crim. Proc. Art. 58.052"
      ],
      "verificationNotes": "Re-audited against current Texas OAG ACP published administrative guidelines.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Code Crim. Proc. Chapter 58, Subchapter B",
    "notes": "Codified under Chapter 58, Subchapter B (Article 58.052). Self-application is legally permitted; advocate assistance is recommended for safety planning.",
    "claimProvenances": [
      {
        "claim": "Texas Address Confidentiality Program (ACP)",
        "primarySourceUrl": "https://www.texasattorneygeneral.gov/crime-victims/address-confidentiality-program",
        "sourceExcerptOrSummary": "Texas Code of Criminal Procedure Chapter 58, Subchapter B (Art. 58.052)",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-statute-lease-termination",
    "name": "Early Lease Termination Following Family Violence",
    "organization": "State of Texas / Texas Judicial System",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "HOUSING",
    "barrierCategories": [
      "lease-escape",
      "rent-deposit",
      "legal-representation"
    ],
    "matchTags": [
      "TEXAS",
      "HOUSING",
      "LEASE_BREAK",
      "STATUTORY_RIGHT",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Allows a tenant who is a survivor of family violence to legally terminate their residential lease agreement early without liability for future delinquent rent, early-termination penalty fees, or forfeiture of security deposit solely due to breaking the lease.",
    "whatItActuallyProvides": "Statutory release from all future lease obligations and early-break penalty fees under Texas Property Code § 92.016.",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Saves thousands in lease-break penalty fees and future rent liabilities",
    "knownFundingLimits": "Statutory legal remedy (relieves debt obligations; not a direct cash payout)",
    "eligibility": "Any residential tenant in Texas who is a victim of family violence and provides statutory written notice and documentation.",
    "documentationRequired": [
      "Temporary injunction or protective order under Texas Family Code Title 4, OR",
      "Magistrate's Order of Emergency Protection (MOEP) under Tex. Code Crim. Proc. Art. 17.292, OR",
      "Official certified documentation from a licensed healthcare provider, mental health provider, or family violence advocate under Tex. Prop. Code § 92.016(b)(3)"
    ],
    "referralRequirement": "None (can provide advocate/medical letter or court order directly to landlord)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Must deliver written notice prior to vacating dwelling",
    "whatCanBlockAccess": [
      "Past unpaid rent accrued before the effective termination date remains owed",
      "Must provide one of the 3 statutory documentation forms; verbal notice or informal letters are legally insufficient",
      "Cotenant exception (§ 92.016(c-1)): If violence was committed by a cotenant/occupant, statutory 30-day notice is waived once documentation conditions are met"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Obtain qualifying advocate/medical letter or protective order, deliver formal written notice of lease termination to landlord, and vacate the dwelling.",
    "howToApply": "Obtain qualifying advocate/medical letter or protective order, deliver formal written notice of lease termination to landlord, and vacate the dwelling.",
    "sourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
    "primaryAuthoritativeSource": "Texas Property Code Chapter 92, Section 92.016",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Prop. Code § 92.016",
    "notes": "Landlords cannot refuse statutory termination when proper documentation is provided.",
    "claimProvenances": [
      {
        "claim": "Early Lease Termination Following Family Violence",
        "primarySourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.016",
        "sourceExcerptOrSummary": "Texas Property Code Chapter 92, Section 92.016",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-puct-utility-waiver",
    "name": "Texas Electric Utility Deposit Waiver Network",
    "organization": "Public Utility Commission of Texas (PUCT) / Texas Council on Family Violence (TCFV)",
    "state": "TX",
    "geography": "Texas Deregulated Electric Markets",
    "scope": "TEXAS_STATEWIDE",
    "category": "UTILITIES",
    "barrierCategories": [
      "utility-deposit",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "UTILITY",
      "DEPOSIT_WAIVER",
      "ADVOCATE_REFERRAL",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Legally prohibits Retail Electric Providers (REPs) in deregulated Texas markets from requiring an initial or reconnection security deposit (saving $150 to $400 upfront) when establishing electric service in survivor's name.",
    "whatItActuallyProvides": "Standardized TCFV certification letter that waives 100% of residential electric security deposit.",
    "assistanceShapes": [
      "UTILITY_DEPOSIT_WAIVER"
    ],
    "paymentMethod": "WAIVER",
    "typicalAmount": "Full waiver of electric utility deposit ($150–$400 value)",
    "knownFundingLimits": "100% deposit waiver for deregulated electric accounts",
    "eligibility": "Any victim of family violence establishing electric service with a Retail Electric Provider (REP) in Texas.",
    "documentationRequired": [
      "Official TCFV Victim of Family Violence Certification Letter signed by an authorized advocate or executive director at a recognized domestic violence center or legal aid office"
    ],
    "referralRequirement": "Advocate certification letter required (available from any Texas family violence center)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Submit when establishing or transferring electric service",
    "whatCanBlockAccess": [
      "Applies strictly to Retail Electric Providers in ERCOT deregulated areas (Oncor, CenterPoint, AEP territories)",
      "Municipal utilities (Austin Energy, CPS Energy) and co-ops operate under municipal board rules (though many voluntarily offer waivers)",
      "Requires signed certification letter from a recognized family violence shelter or legal aid advocate"
    ],
    "accessFrictions": [
      "ADVOCATE_REFERRAL_REQUIRED",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Contact any local Texas domestic violence center or legal aid advocate to obtain the signed TCFV certification letter, then email or fax it to your chosen electric provider.",
    "howToApply": "Contact any local Texas domestic violence center or legal aid advocate to obtain the signed TCFV certification letter, then email or fax it to your chosen electric provider.",
    "sourceUrl": "https://www.puc.texas.gov/consumer/electricity/victim_waiver.aspx",
    "primaryAuthoritativeSource": "Public Utility Commission of Texas Substantive Rule 16 TAC § 25.478",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "16 TAC § 25.478(a)(3)(D)",
    "notes": "Mandatory for all Retail Electric Providers in deregulated territories.",
    "claimProvenances": [
      {
        "claim": "Texas Electric Utility Deposit Waiver Network",
        "primarySourceUrl": "https://www.puc.texas.gov/consumer/electricity/victim_waiver.aspx",
        "sourceExcerptOrSummary": "Public Utility Commission of Texas Substantive Rule 16 TAC § 25.478",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-statute-rekeying",
    "name": "Residential Rekeying & Security Device Protections",
    "organization": "State of Texas / Justice of the Peace Courts",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "HOUSING",
    "barrierCategories": [
      "lease-escape",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "HOUSING",
      "REKEYING",
      "SECURITY_DEVICES",
      "STATUTORY_RIGHT"
    ],
    "whatItCanHelpWith": "Sets statutory requirements for landlord installation of door locks, keyless deadbolts, and door viewers on all rental dwellings, and governs tenant rekeying rights during tenancies.",
    "whatItActuallyProvides": "Statutory right to functional keyless deadbolts and rekeying mechanisms under Texas Property Code Chapter 92, Subchapter D.",
    "assistanceShapes": [
      "LEGAL_INFORMATION",
      "LEGAL_SERVICE"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "Statutory landlord security compliance obligations",
    "knownFundingLimits": "Statutory rights (tenant generally pays rekey fee during ongoing lease unless landlord breached duties)",
    "eligibility": "All residential tenants in Texas.",
    "documentationRequired": [
      "Written notice sent via certified mail or tracked delivery requesting lock rekeying/repair"
    ],
    "referralRequirement": "None (self-execute via written notice to landlord)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None",
    "employmentDependency": "None",
    "applicationWindow": "Landlord must comply within 7 days of written notice",
    "whatCanBlockAccess": [
      "Subchapter D governs general security devices, not an automatic free lock change for domestic disputes",
      "Tenant is generally responsible for reasonable rekey fees during ongoing lease unless landlord breached statutory duties or court protective order directs otherwise",
      "Notice must be delivered in writing"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Send formal written notice to landlord requesting rekeying. If emergency protective order with kick-out is in place, attach copy demanding exclusion of abuser.",
    "howToApply": "Send formal written notice to landlord requesting rekeying. If emergency protective order with kick-out is in place, attach copy demanding exclusion of abuser.",
    "sourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
    "primaryAuthoritativeSource": "Texas Property Code Chapter 92, Subchapter D (§§ 92.153–92.165)",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Prop. Code §§ 92.153–92.165",
    "notes": "Requires landlords to have functional keyless deadbolts and window latches on all residential rentals.",
    "claimProvenances": [
      {
        "claim": "Residential Rekeying & Security Device Protections",
        "primarySourceUrl": "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm#92.153",
        "sourceExcerptOrSummary": "Texas Property Code Chapter 92, Subchapter D (§§ 92.153–92.165)",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-twc-unemployment",
    "name": "Texas Unemployment Benefits Family Violence Exception",
    "organization": "Texas Workforce Commission (TWC)",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "EMPLOYMENT",
    "barrierCategories": [
      "industry-hardship",
      "money-now",
      "legal-representation"
    ],
    "matchTags": [
      "TEXAS",
      "UNEMPLOYMENT",
      "TWC",
      "WAGE_REPLACEMENT",
      "GOVERNMENT_RULE"
    ],
    "whatItCanHelpWith": "Provides an exception to unemployment disqualification when an employee leaves their job voluntarily due to medically or practically necessary separation caused by domestic violence or relocation for safety.",
    "whatItActuallyProvides": "Eligibility for standard Texas Unemployment Insurance benefits despite voluntary job resignation.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "DIRECT_TO_APPLICANT",
    "typicalAmount": "Up to $577/week in standard Texas unemployment benefits (based on base period wages)",
    "knownFundingLimits": "Standard TWC weekly benefit amount for up to 26 weeks",
    "eligibility": "Texas workers who separated from employment because of documented domestic violence and meet standard base-period wage credit thresholds.",
    "documentationRequired": [
      "Active protective order, police report, or certified statement from a domestic violence shelter, licensed counselor, or physician verifying work separation was necessary for safety"
    ],
    "referralRequirement": "None (claimant self-applies online with TWC)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Must meet standard TWC base-period wage qualifications",
    "employmentDependency": "Must have earned qualifying wages in Texas during the base period",
    "applicationWindow": "File claim immediately following job separation",
    "whatCanBlockAccess": [
      "Must provide documentation connecting the job separation to domestic violence safety threats",
      "Standard base-period wage earnings criteria still apply",
      "Must remain able and available for suitable safe work or work search"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "EMPLOYMENT_PROOF",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "File initial claim on ui.texasworkforce.org, select family safety exception under § 207.045(d), and upload advocate/medical letter.",
    "howToApply": "File initial claim on ui.texasworkforce.org, select family safety exception under § 207.045(d), and upload advocate/medical letter.",
    "sourceUrl": "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045",
    "primaryAuthoritativeSource": "Texas Labor Code Section 207.045(d)",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Lab. Code § 207.045(d)",
    "notes": "Leaving work for family violence is deemed good cause connected to work.",
    "claimProvenances": [
      {
        "claim": "Texas Unemployment Benefits Family Violence Exception",
        "primarySourceUrl": "https://statutes.capitol.texas.gov/Docs/LA/htm/LA.207.htm#207.045",
        "sourceExcerptOrSummary": "Texas Labor Code Section 207.045(d)",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "tx-statute-protective-orders",
    "name": "Texas Protective Orders & Kick-Out Remedies",
    "organization": "Texas District Courts & County Courts at Law",
    "state": "TX",
    "geography": "Texas Statewide",
    "scope": "TEXAS_STATEWIDE",
    "category": "LEGAL_PROTECTION",
    "barrierCategories": [
      "legal-representation",
      "custody-kids",
      "police-civil-matter",
      "safe-stay"
    ],
    "matchTags": [
      "TEXAS",
      "LEGAL",
      "PROTECTIVE_ORDER",
      "KICK_OUT",
      "STATUTORY_RIGHT",
      "NO_COURT_FEES"
    ],
    "whatItCanHelpWith": "Civil court orders legally prohibiting an abuser from committing violence, stalking, contacting the survivor, going near home/work/school, and granting exclusive possession of a shared residence (Kick-Out Order).",
    "whatItActuallyProvides": "Court-enforced legal protection with mandatory criminal arrest penalties for violations (Tex. Penal Code § 25.07).",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "STATUTORY_RIGHT",
    "typicalAmount": "100% free filing ($0 court fees for victims under Tex. Fam. Code § 81.002)",
    "knownFundingLimits": "Legal injunction remedy; no court filing fees may be assessed against victim",
    "eligibility": "Any victim of family violence, dating violence, sexual assault, or stalking in Texas.",
    "documentationRequired": [
      "Sworn affidavit describing past acts or threats of violence",
      "Law enforcement incident reports or dates/locations of incidents if available"
    ],
    "referralRequirement": "None (can apply via County Attorney, Legal Aid, or private attorney)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None (free filing for all applicants; legal aid income limits apply only for free representation)",
    "employmentDependency": "None",
    "applicationWindow": "Ex parte temporary orders available immediately; final hearing within 14–20 days",
    "whatCanBlockAccess": [
      "Perpetrator must be served with notice before final protective order hearing",
      "Requires testifying in family court if contested",
      "Kick-out orders require showing that perpetrator committed family violence within the past 30 days"
    ],
    "accessFrictions": [
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Contact the County Attorney Victim Services unit, Texas Advocacy Project (800-374-4673), or Texas RioGrande Legal Aid for free representation.",
    "howToApply": "Contact the County Attorney Victim Services unit, Texas Advocacy Project (800-374-4673), or Texas RioGrande Legal Aid for free representation.",
    "sourceUrl": "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.85.htm",
    "primaryAuthoritativeSource": "Texas Family Code Title 4 (§§ 71.001–88.008)",
    "lastReviewedDate": "2026-08-29",
    "dateLastVerified": "2026-08-29",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": true,
    "statuteCitation": "Tex. Fam. Code Title 4",
    "notes": "Violations of protective orders carry criminal penalties.",
    "claimProvenances": [
      {
        "claim": "Texas Protective Orders & Kick-Out Remedies",
        "primarySourceUrl": "https://statutes.capitol.texas.gov/Docs/FA/htm/FA.85.htm",
        "sourceExcerptOrSummary": "Texas Family Code Title 4 (§§ 71.001–88.008)",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "travis-county-family-support",
    "name": "Travis County Family Support Services (Emergency Housing & Utility Aid)",
    "organization": "Travis County Health and Human Services (TCHHS)",
    "state": "TX",
    "county": "Travis",
    "cities": [
      "Austin",
      "Pflugerville",
      "Del Valle",
      "Manor"
    ],
    "geography": "Travis County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "RENT_AND_UTILITIES",
    "barrierCategories": [
      "rent-deposit",
      "utility-deposit",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "TRAVIS_COUNTY",
      "RENT",
      "UTILITY",
      "INCOME_RESTRICTED",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Provides direct emergency financial assistance for past-due rent, security deposits, utility bills, and food vouchers to low-income Travis County residents facing immediate housing instability or crisis displacement.",
    "whatItActuallyProvides": "Direct vendor payments for rent shortfall and utility bills through Travis County Community Centers.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "UTILITY_PAYMENT",
      "GROCERY_CARD"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $1,800 for rent and utility payments",
    "knownFundingLimits": "Subject to annual county budget allocations; paid directly to landlords/utility vendors",
    "eligibility": "Travis County residents with household income at or below 200% of the Federal Poverty Guidelines.",
    "documentationRequired": [
      "Proof of Travis County residency (lease or utility bill)",
      "Proof of income for the last 30 days for all household members",
      "Itemized past-due rent notice or utility bill"
    ],
    "referralRequirement": "None (self-apply via regional Travis County Community Center)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Household income at or below 200% FPL",
    "employmentDependency": "None",
    "applicationWindow": "Monthly appointment cycles",
    "whatCanBlockAccess": [
      "County residency strictly required",
      "Income must be under 200% Federal Poverty Guidelines",
      "High application volume can cause appointment delays"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "INCOME_DOCUMENTATION",
      "COUNTY_RESIDENCY",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Call your nearest Travis County Community Center (e.g. Palm Square 512-854-4120, Del Valle 512-854-1520, Pflugerville 512-854-1530) to schedule an intake appointment.",
    "howToApply": "Call your nearest Travis County Community Center to schedule an intake appointment.",
    "sourceUrl": "https://www.traviscountytx.gov/health-human-services/community-centers",
    "primaryAuthoritativeSource": "Travis County Health and Human Services Program Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "County-funded safety-net assistance.",
    "claimProvenances": [
      {
        "claim": "Travis County Family Support Services (Emergency Housing & Utility Aid)",
        "primarySourceUrl": "https://www.traviscountytx.gov/health-human-services/community-centers",
        "sourceExcerptOrSummary": "Travis County Health and Human Services Program Standards",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "safe-alliance-austin",
    "name": "SAFE Alliance Emergency Services & Legal Advocacy",
    "organization": "SAFE Alliance",
    "state": "TX",
    "county": "Travis",
    "cities": [
      "Austin",
      "Pflugerville",
      "Manor",
      "Del Valle"
    ],
    "geography": "Travis County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "CRISIS_AND_LEGAL",
    "barrierCategories": [
      "safe-stay",
      "legal-representation",
      "childcare-school",
      "medical-dental",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "TRAVIS_COUNTY",
      "SHELTER",
      "LEGAL",
      "CHILDCARE",
      "MEDICAL",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Operates 24/7 crisis safe line, emergency campus shelter (Kelly White Campus), supportive transitional housing, forensic exams, protective order legal representation, and emergency micro-aid for survivors in Travis County.",
    "whatItActuallyProvides": "Emergency safe housing, shelter, legal representation, and client supportive services.",
    "assistanceShapes": [
      "HOTEL_VOUCHER",
      "LEGAL_SERVICE",
      "CHILDCARE",
      "MEDICAL",
      "COUNSELING"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free emergency shelter, legal advocacy, and crisis support services",
    "knownFundingLimits": "Shelter beds subject to daily capacity; non-residential legal/counseling services open",
    "eligibility": "Survivors of domestic violence, sexual assault, and child abuse in Austin and Travis County.",
    "documentationRequired": [
      "None required for immediate crisis intake, safety planning, and emergency shelter"
    ],
    "referralRequirement": "None (call 24/7 SAFEline)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None for crisis shelter and advocacy",
    "employmentDependency": "None",
    "applicationWindow": "24/7 immediate access",
    "whatCanBlockAccess": [
      "Emergency shelter beds subject to immediate facility capacity",
      "Local service area prioritized for Travis County residents",
      "High demand for non-residential counseling waitlists"
    ],
    "accessFrictions": [
      "CALL_ONLY",
      "NO_POLICE_REPORT_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Call or text the 24/7 SAFEline at 512-267-7233 or chat online at safeaustin.org/chat.",
    "howToApply": "Call or text the 24/7 SAFEline at 512-267-7233 or chat online at safeaustin.org/chat.",
    "sourceUrl": "https://www.safeaustin.org/get-help/",
    "primaryAuthoritativeSource": "SAFE Alliance Official Program Standards",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "OFFICIAL_501C3_STANDARDS",
      "sourceType": "501C3_STANDARDS",
      "confirmingEntity": "The SAFE Alliance (Austin, TX)",
      "confirmingRole": "Published 24/7 SAFEline & Emergency Shelter Standards",
      "criteriaConfirmed": [
        "24/7 SAFEline operational status",
        "Campus emergency shelter intake criteria",
        "Travis County geographic prioritization"
      ],
      "verificationNotes": "Re-verified against published SAFE Alliance 2026 operating guidelines and SAFEline intake criteria. Downgraded from AGENCY_CONFIRMED to PUBLIC_SOURCE_CHECKED pending direct staff interview provenance audit.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": false,
    "notes": "Premier domestic violence service provider in Central Texas.",
    "claimProvenances": [
      {
        "claim": "SAFE Alliance Emergency Services & Legal Advocacy",
        "primarySourceUrl": "https://www.safeaustin.org/get-help/",
        "sourceExcerptOrSummary": "SAFE Alliance Official Program Standards",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "svdp-austin-microgrants",
    "name": "St. Vincent de Paul Diocesan Council of Austin Emergency Micro-Aid",
    "organization": "Society of St. Vincent de Paul (Austin Council)",
    "state": "TX",
    "county": "Travis",
    "cities": [
      "Austin",
      "Pflugerville",
      "Round Rock",
      "Buda",
      "San Marcos"
    ],
    "geography": "Travis, Williamson & Hays Counties",
    "scope": "TEXAS_COUNTY",
    "category": "EMERGENCY_MICRO_AID",
    "barrierCategories": [
      "money-now",
      "gas-travel",
      "utility-deposit",
      "rent-deposit"
    ],
    "matchTags": [
      "TEXAS",
      "TRAVIS_COUNTY",
      "WILLIAMSON_COUNTY",
      "CASH",
      "GAS_CARD",
      "UTILITY",
      "RENT",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Volunteer home-visit conferences providing rapid emergency micro-aid for gas vouchers ($25–$50), utility disconnect prevention, emergency rent shortfall, urgent locksmith costs, and prescription medications.",
    "whatItActuallyProvides": "Direct emergency micro-payments and transit vouchers distributed through local parish conferences.",
    "assistanceShapes": [
      "DIRECT_CASH",
      "VENDOR_PAYMENT",
      "GAS_CARD",
      "UTILITY_PAYMENT",
      "RENT"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$50 to $500 for critical urgent bills",
    "knownFundingLimits": "Discretionary parish conference funds (typically up to $500 per intervention)",
    "eligibility": "Individuals and families residing within participating parish boundary areas facing immediate financial emergency.",
    "documentationRequired": [
      "Copy of electric/water bill, rent notice, or photo ID"
    ],
    "referralRequirement": "None (call central helpline)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated crisis shortfall",
    "employmentDependency": "None",
    "applicationWindow": "Year-round intake based on weekly volunteer capacity",
    "whatCanBlockAccess": [
      "Must reside within boundaries of an active SVdP parish conference",
      "Assistance amounts capped based on local parish discretionary budgets",
      "Requires phone interview or home/virtual visit with volunteers"
    ],
    "accessFrictions": [
      "CALL_ONLY",
      "COUNTY_RESIDENCY",
      "NO_POLICE_REPORT_REQUIRED",
      "NO_SHELTER_STAY_REQUIRED"
    ],
    "whatToDoNext": "Call the St. Vincent de Paul Austin Help Line at 512-251-6995 to be routed to the volunteer conference serving your neighborhood.",
    "howToApply": "Call the St. Vincent de Paul Austin Help Line at 512-251-6995.",
    "sourceUrl": "https://svdpctx.org/get-help",
    "primaryAuthoritativeSource": "Society of St. Vincent de Paul Diocesan Council of Austin",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_PARTIALLY_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Provides fast micro-grants where large government systems have waiting periods.",
    "claimProvenances": [
      {
        "claim": "St. Vincent de Paul Diocesan Council of Austin Emergency Micro-Aid",
        "primarySourceUrl": "https://svdpctx.org/get-help",
        "sourceExcerptOrSummary": "Society of St. Vincent de Paul Diocesan Council of Austin",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "owbc-community-action-wilco",
    "name": "Opportunities for Williamson & Burnet Counties (CEAP & CSBG)",
    "organization": "Opportunities for Williamson & Burnet Counties (OWBC)",
    "state": "TX",
    "county": "Williamson",
    "cities": [
      "Round Rock",
      "Georgetown",
      "Taylor",
      "Cedar Park",
      "Leander"
    ],
    "geography": "Williamson & Burnet Counties, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "UTILITIES_AND_COMMUNITY_ACTION",
    "barrierCategories": [
      "utility-deposit",
      "money-now",
      "rent-deposit"
    ],
    "matchTags": [
      "TEXAS",
      "WILLIAMSON_COUNTY",
      "UTILITY",
      "CASH",
      "RENT",
      "INCOME_RESTRICTED",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Administers the Comprehensive Energy Assistance Program (CEAP) paying up to 6–8 months of electric and natural gas bills, plus CSBG flexible emergency relief for qualifying low-income households in Williamson and Burnet counties.",
    "whatItActuallyProvides": "Direct utility bill payment credits ($500–$2,400) paid to energy vendors.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "UTILITY_PAYMENT",
      "RENT"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$500 to $2,400 in direct utility payment credits",
    "knownFundingLimits": "Up to annual CEAP maximums based on household poverty tier",
    "eligibility": "Household income at or below 150% of Federal Poverty Guidelines in Williamson or Burnet counties.",
    "documentationRequired": [
      "Proof of household income for the last 30 days",
      "Most recent electric and gas bills",
      "Identification documents for household members"
    ],
    "referralRequirement": "None (self-apply via online portal or paper application)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Household income at or below 150% FPL",
    "employmentDependency": "None",
    "applicationWindow": "Year-round intake until federal grant funds are committed",
    "whatCanBlockAccess": [
      "County residency strictly required (Williamson or Burnet)",
      "Strict 150% FPL income verification required",
      "Processing timeline can take 2–4 weeks"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "INCOME_DOCUMENTATION",
      "WAITLIST_POSSIBLE",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Download and submit the CEAP Utility Assistance application at owbc-tx.org/energy-assistance or call 512-763-1400.",
    "howToApply": "Download and submit the CEAP Utility Assistance application at owbc-tx.org/energy-assistance.",
    "sourceUrl": "https://owbc-tx.org/energy-assistance/",
    "primaryAuthoritativeSource": "Texas Department of Housing & Community Affairs (TDHCA) / OWBC",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Major utility assistance administrator for Williamson County.",
    "claimProvenances": [
      {
        "claim": "Opportunities for Williamson & Burnet Counties (CEAP & CSBG)",
        "primarySourceUrl": "https://owbc-tx.org/energy-assistance/",
        "sourceExcerptOrSummary": "Texas Department of Housing & Community Affairs (TDHCA) / OWBC",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "hope-alliance-wilco",
    "name": "Hope Alliance Crisis & Legal Advocacy (Williamson County)",
    "organization": "Hope Alliance",
    "state": "TX",
    "county": "Williamson",
    "cities": [
      "Round Rock",
      "Georgetown",
      "Cedar Park",
      "Leander",
      "Taylor"
    ],
    "geography": "Williamson County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "CRISIS_AND_LEGAL",
    "barrierCategories": [
      "safe-stay",
      "legal-representation",
      "money-now",
      "gas-travel"
    ],
    "matchTags": [
      "TEXAS",
      "WILLIAMSON_COUNTY",
      "SHELTER",
      "LEGAL",
      "GAS_CARD",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Emergency crisis shelter, legal representation for protective orders, safety planning, emergency gas assistance vouchers, and rapid rehousing navigation for Williamson County survivors.",
    "whatItActuallyProvides": "Emergency shelter, legal representation, and client transportation assistance in Williamson County.",
    "assistanceShapes": [
      "HOTEL_VOUCHER",
      "LEGAL_SERVICE",
      "GAS_CARD",
      "COUNSELING"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free emergency shelter, legal advocacy, and crisis services",
    "knownFundingLimits": "Shelter subject to bed availability; non-residential legal/counseling services open",
    "eligibility": "Survivors of family violence and sexual assault in Williamson County and surrounding areas.",
    "documentationRequired": [
      "None required for crisis shelter intake or safety planning"
    ],
    "referralRequirement": "None (call 24/7 hotline)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None for emergency crisis services",
    "employmentDependency": "None",
    "applicationWindow": "24/7 crisis access",
    "whatCanBlockAccess": [
      "Shelter beds subject to immediate capacity limits",
      "Geographic focus prioritized for Williamson County residents",
      "In-person court appearance required for legal protective orders"
    ],
    "accessFrictions": [
      "CALL_ONLY",
      "NO_POLICE_REPORT_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Call the 24/7 Hope Alliance crisis hotline at 800-460-7233 or 512-255-1212.",
    "howToApply": "Call the 24/7 Hope Alliance crisis hotline at 800-460-7233.",
    "sourceUrl": "https://www.hopealliancetx.org/get-help/",
    "primaryAuthoritativeSource": "Hope Alliance Official Program Standards",
    "lastReviewedDate": "2026-08-31",
    "dateLastVerified": "2026-08-31",
    "verificationStatus": "ACTIVE_VERIFIED",
    "provenance": {
      "verificationDate": "2026-08-31",
      "verificationMethod": "OFFICIAL_501C3_STANDARDS",
      "sourceType": "501C3_STANDARDS",
      "confirmingEntity": "Hope Alliance (Williamson County, TX)",
      "confirmingRole": "Published 24/7 Crisis Hotline & Shelter Standards",
      "criteriaConfirmed": [
        "24/7 crisis hotline operational status",
        "Williamson County emergency shelter eligibility",
        "Protective order court advocacy intake"
      ],
      "verificationNotes": "Re-verified against published Hope Alliance 2026 emergency shelter standards. Downgraded from AGENCY_CONFIRMED to PUBLIC_SOURCE_CHECKED pending direct staff interview provenance audit.",
      "nextScheduledReviewDate": "2026-11-30"
    },
    "isStatutoryRight": false,
    "notes": "Sole specialized domestic violence shelter in Williamson County.",
    "claimProvenances": [
      {
        "claim": "Hope Alliance Crisis & Legal Advocacy (Williamson County)",
        "primarySourceUrl": "https://www.hopealliancetx.org/get-help/",
        "sourceExcerptOrSummary": "Hope Alliance Official Program Standards",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "the-caring-place-georgetown",
    "name": "The Caring Place Emergency Financial Assistance",
    "organization": "The Caring Place",
    "state": "TX",
    "county": "Williamson",
    "cities": [
      "Georgetown",
      "Jarrell",
      "Andice",
      "Jonah",
      "Walburg",
      "Weir"
    ],
    "geography": "Northern Williamson County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "EMERGENCY_FINANCIAL_AID",
    "barrierCategories": [
      "money-now",
      "rent-deposit",
      "utility-deposit",
      "gas-travel"
    ],
    "matchTags": [
      "TEXAS",
      "WILLIAMSON_COUNTY",
      "RENT",
      "UTILITY",
      "GAS_CARD",
      "NO_POLICE_REPORT",
      "NO_SHELTER_STAY"
    ],
    "whatItCanHelpWith": "Emergency financial assistance for housing rent/deposits, utility bills, prescription medication, emergency groceries, and transit vouchers for residents of northern Williamson County.",
    "whatItActuallyProvides": "Direct vendor payments for rent and utilities, plus emergency grocery and transit vouchers.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "RENT",
      "RENT_DEPOSIT",
      "UTILITY_PAYMENT",
      "GROCERY_CARD",
      "GAS_CARD"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$200 to $1,000 for rent and utility payments",
    "knownFundingLimits": "Subject to annual community organization allocation limits",
    "eligibility": "Must reside within Georgetown, Jarrell, Andice, Jonah, Walburg, or Weir service area.",
    "documentationRequired": [
      "Photo ID and proof of service area residency",
      "Itemized past-due lease agreement or utility bill"
    ],
    "referralRequirement": "None (walk-in or call during intake hours)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Demonstrated financial hardship / crisis shortfall",
    "employmentDependency": "None",
    "applicationWindow": "Monday–Friday business hours",
    "whatCanBlockAccess": [
      "Strict geographic boundary (Georgetown, Jarrell, Andice, Jonah, Walburg)",
      "Must present itemized utility or lease invoice",
      "Direct vendor payment only (no cash given to applicants)"
    ],
    "accessFrictions": [
      "WALK_IN",
      "CALL_ONLY",
      "COUNTY_RESIDENCY",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Visit The Caring Place at 2000 Railroad Ave, Georgetown, TX or call 512-943-0700.",
    "howToApply": "Visit The Caring Place at 2000 Railroad Ave, Georgetown, TX or call 512-943-0700.",
    "sourceUrl": "https://caringplacetx.org/get-help/",
    "primaryAuthoritativeSource": "The Caring Place 501(c)(3) Guidelines",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "High-volume emergency financial aid provider in northern WilCo.",
    "claimProvenances": [
      {
        "claim": "The Caring Place Emergency Financial Assistance",
        "primarySourceUrl": "https://caringplacetx.org/get-help/",
        "sourceExcerptOrSummary": "The Caring Place 501(c)(3) Guidelines",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "avda-houston-legal-aid",
    "name": "AVDA (Aid to Victims of Domestic Abuse) Houston Legal & Client Aid",
    "organization": "AVDA",
    "state": "TX",
    "county": "Harris",
    "cities": [
      "Houston",
      "Pasadena",
      "Baytown",
      "Spring",
      "Katy"
    ],
    "geography": "Harris County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "LEGAL_AND_EMERGENCY_AID",
    "barrierCategories": [
      "legal-representation",
      "custody-kids",
      "money-now"
    ],
    "matchTags": [
      "TEXAS",
      "HARRIS_COUNTY",
      "LEGAL",
      "PROTECTIVE_ORDER",
      "CUSTODY",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Dedicated free legal representation for protective orders, divorce, and child custody in Harris County family courts, plus emergency client financial assistance for safety essentials and relocation.",
    "whatItActuallyProvides": "Free civil attorney representation in court + client emergency safety micro-aid.",
    "assistanceShapes": [
      "LEGAL_SERVICE",
      "DIRECT_CASH",
      "LEGAL_INFORMATION"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free legal representation + flexible emergency micro-aid",
    "knownFundingLimits": "Legal representation provided at zero cost; micro-aid based on case manager allocation",
    "eligibility": "Survivors of domestic abuse in Harris County with household income under 200% FPL.",
    "documentationRequired": [
      "Intake interview; existing court filings or police reports if available"
    ],
    "referralRequirement": "None (self-apply via phone or website intake)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Income generally at or below 200% FPL",
    "employmentDependency": "None",
    "applicationWindow": "Year-round intake",
    "whatCanBlockAccess": [
      "Must reside in Harris County or have pending legal matter in Harris County courts",
      "Income limit under 200% FPL for ongoing court representation",
      "Court appearance required for contested hearings"
    ],
    "accessFrictions": [
      "CALL_ONLY",
      "ONLINE_APPLICATION",
      "COUNTY_RESIDENCY",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Call 713-224-9912 or submit an online legal intake form at avda-tx.org.",
    "howToApply": "Call 713-224-9912 or submit an online legal intake form at avda-tx.org.",
    "sourceUrl": "https://avda-tx.org/get-help/",
    "primaryAuthoritativeSource": "AVDA Houston Legal Services Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Specialized legal aid organization for Harris County survivors.",
    "claimProvenances": [
      {
        "claim": "AVDA (Aid to Victims of Domestic Abuse) Houston Legal & Client Aid",
        "primarySourceUrl": "https://avda-tx.org/get-help/",
        "sourceExcerptOrSummary": "AVDA Houston Legal Services Standards",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "hawc-houston-crisis",
    "name": "Houston Area Women's Center (HAWC) Crisis & Shelter Services",
    "organization": "Houston Area Women's Center",
    "state": "TX",
    "county": "Harris",
    "cities": [
      "Houston",
      "Pasadena",
      "Humble",
      "Spring"
    ],
    "geography": "Harris County, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "CRISIS_AND_SHELTER",
    "barrierCategories": [
      "safe-stay",
      "legal-representation",
      "money-now",
      "childcare-school"
    ],
    "matchTags": [
      "TEXAS",
      "HARRIS_COUNTY",
      "SHELTER",
      "LEGAL",
      "CHILDCARE",
      "NO_POLICE_REPORT"
    ],
    "whatItCanHelpWith": "Operates 24/7 crisis hotline, emergency residential safe shelter, safe hotel placements, legal advocacy, hospital accompaniment, violence recovery counseling, and transitional housing navigation in Harris County.",
    "whatItActuallyProvides": "Emergency safe housing, shelter, legal representation, and supportive services.",
    "assistanceShapes": [
      "HOTEL_VOUCHER",
      "LEGAL_SERVICE",
      "COUNSELING"
    ],
    "paymentMethod": "SERVICE_DIRECT",
    "typicalAmount": "100% free emergency housing, shelter, and recovery services",
    "knownFundingLimits": "Shelter beds subject to daily bed availability; 24/7 hotline open continuously",
    "eligibility": "Individuals and families experiencing domestic violence or sexual assault in Greater Houston.",
    "documentationRequired": [
      "None required for immediate crisis hotline intake and safe emergency shelter"
    ],
    "referralRequirement": "None (call 24/7 hotline)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "None for crisis shelter and hotline",
    "employmentDependency": "None",
    "applicationWindow": "24/7 immediate access",
    "whatCanBlockAccess": [
      "Emergency shelter beds subject to immediate facility capacity",
      "Prioritizes residents in the Greater Houston / Harris County area",
      "High volume for transitional supportive housing"
    ],
    "accessFrictions": [
      "CALL_ONLY",
      "NO_POLICE_REPORT_REQUIRED",
      "SAME_DAY_POSSIBLE"
    ],
    "whatToDoNext": "Call the 24/7 HAWC hotline at 713-528-2121 or chat live at hawc.org.",
    "howToApply": "Call the 24/7 HAWC hotline at 713-528-2121 or chat live at hawc.org.",
    "sourceUrl": "https://hawc.org/get-help/",
    "primaryAuthoritativeSource": "Houston Area Women's Center Official Intake",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Largest domestic violence shelter organization in Southeast Texas.",
    "claimProvenances": [
      {
        "claim": "Houston Area Women's Center (HAWC) Crisis & Shelter Services",
        "primarySourceUrl": "https://hawc.org/get-help/",
        "sourceExcerptOrSummary": "Houston Area Women's Center Official Intake",
        "verificationDate": "2026-08-31"
      }
    ]
  },
  {
    "id": "cca-central-texas",
    "name": "Combined Community Action (CCA) Central Texas Energy & Housing Aid",
    "organization": "Combined Community Action (CCA)",
    "state": "TX",
    "county": "Bastrop",
    "cities": [
      "Bastrop",
      "Elgin",
      "Smithville",
      "Giddings",
      "La Grange"
    ],
    "geography": "Bastrop, Fayette & Lee Counties, Texas",
    "scope": "TEXAS_COUNTY",
    "category": "UTILITIES_AND_COMMUNITY_ACTION",
    "barrierCategories": [
      "utility-deposit",
      "money-now",
      "rent-deposit"
    ],
    "matchTags": [
      "TEXAS",
      "BASTROP_COUNTY",
      "UTILITY",
      "RENT",
      "COMMUNITY_ACTION",
      "INCOME_RESTRICTED"
    ],
    "whatItCanHelpWith": "CSBG Community Action Agency administering CEAP electric/gas utility assistance, emergency rental payments, and weatherization support for low-income residents in rural Central Texas counties.",
    "whatItActuallyProvides": "Direct vendor payments for utility bills and emergency rental assistance.",
    "assistanceShapes": [
      "VENDOR_PAYMENT",
      "UTILITY_PAYMENT",
      "RENT"
    ],
    "paymentMethod": "DIRECT_TO_VENDOR",
    "typicalAmount": "$400 to $1,800 in direct utility payment credits",
    "knownFundingLimits": "Subject to annual CEAP/CSBG allocation ceilings",
    "eligibility": "Residents of Bastrop, Fayette, Colorado, or Lee counties with household income at or below 150% FPL.",
    "documentationRequired": [
      "Proof of county residency (utility bill or lease)",
      "Income verification for all household members for last 30 days",
      "Most recent utility bill"
    ],
    "referralRequirement": "None (self-apply with CCA)",
    "shelterConnectionRequired": false,
    "policeReportRequired": false,
    "incomeRestriction": "Household income at or below 150% FPL",
    "employmentDependency": "None",
    "applicationWindow": "Year-round intake until grant allocations are met",
    "whatCanBlockAccess": [
      "Must reside in Bastrop, Fayette, Colorado, or Lee counties",
      "Income under 150% FPL required",
      "Direct vendor payment only"
    ],
    "accessFrictions": [
      "APPLICATION_REQUIRED",
      "INCOME_DOCUMENTATION",
      "COUNTY_RESIDENCY",
      "NO_POLICE_REPORT_REQUIRED"
    ],
    "whatToDoNext": "Submit an application at ccaction.com or visit the Bastrop CCA office at 165 Industrial Blvd, Bastrop, TX (512-303-0033).",
    "howToApply": "Submit an application at ccaction.com or call 512-303-0033.",
    "sourceUrl": "https://ccaction.com",
    "primaryAuthoritativeSource": "Combined Community Action CSBG Program Standards",
    "lastReviewedDate": "2026-08-20",
    "dateLastVerified": "2026-08-20",
    "verificationStatus": "ACTIVE_VERIFIED",
    "isStatutoryRight": false,
    "notes": "Serves rural Central Texas pilot counties outside the Austin metro core.",
    "claimProvenances": [
      {
        "claim": "Combined Community Action (CCA) Central Texas Energy & Housing Aid",
        "primarySourceUrl": "https://ccaction.com",
        "sourceExcerptOrSummary": "Combined Community Action CSBG Program Standards",
        "verificationDate": "2026-08-31"
      }
    ]
  }
];
