import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")

# Load manifest
manifest_by_name = {}
manifest_by_id = {}
with open(BASE_DIR / "POST_EXPORT_SOURCE_MANIFEST.csv", "r", encoding="utf-8") as f:
    for r in csv.DictReader(f):
        manifest_by_name[r["Original Filename"].strip()] = r["Source ID"].strip()
        manifest_by_id[r["Source ID"].strip()] = r["Original Filename"].strip()

# Priority mapping with ALL referenced and supporting Source IDs
priority_mapping = [
    {
        "Priority ID": "REV-001",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0100",
        "Primary Filename": "NotificationofNotAuthorizedandResponse.png",
        "Supporting Source IDs": "SS-0099 (Notauthorized.pdf); SS-0103 (ResponsetoNotAuthorized.pdf)",
        "Relevant Message ID(s)": "MSG-000068; MSG-000069",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0100 visual review complete; SS-0099/SS-0103 scanned PDF corroboration verified)",
        "Reason for Visual Review": "Full-screen browser capture showing formal revocation email and Blake Harris’s immediate 5:00 AM mocking reply. Contains visible browser tabs showing Scribus, Google Flow, and EXHIBITS folder.",
        "Forensic / Evidentiary Significance": "Unquestionable baseline establishing legal boundary imposition, immediate breach, and ongoing possession of intimate/drug allegations."
    },
    {
        "Priority ID": "REV-002",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0106",
        "Primary Filename": "security3.png",
        "Supporting Source IDs": "SS-0107 (securitytwo.png)",
        "Relevant Message ID(s)": "MSG-000066",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0106 browser URL and 3-product modal visually verified)",
        "Reason for Visual Review": "Direct screenshot of Google Takeout page displaying URL token b1e08d32-6e83-4843-a74e-905bfaba68f8 and selection of Maps, Places, and Timeline data.",
        "Forensic / Evidentiary Significance": "Technical evidence of unauthorized request targeting historical GPS location records."
    },
    {
        "Priority ID": "REV-003",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0107",
        "Primary Filename": "securitytwo.png",
        "Supporting Source IDs": "SS-0106 (security3.png); SS-0060 (DeviceAccessGoogle.png)",
        "Relevant Message ID(s)": "MSG-000062; MSG-000063; MSG-000066",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0107 Critical Security Alert timeline visually verified)",
        "Reason for Visual Review": "Google Critical Security Alert dialog showing timeline: New sign-in Mac OS Texas (9:54 PM), password change attempt (10:11 PM), Takeout archive requested (10:33 PM).",
        "Forensic / Evidentiary Significance": "System timeline demonstrating unauthorized intruder sequence from initial breach to data archive request."
    },
    {
        "Priority ID": "REV-004",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0070",
        "Primary Filename": "EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png",
        "Supporting Source IDs": "SS-0071 (EX02_...p1828.png)",
        "Relevant Message ID(s)": "MSG-000029; MSG-000030; MSG-000031; MSG-000032",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0070 page 1827 character-for-character visual review complete)",
        "Reason for Visual Review": "High-resolution image of message export Page 1827 showing 2:31 AM escalation, wishing death, phone block, and home search requirement for seeing Jack.",
        "Forensic / Evidentiary Significance": "Direct proof of abusive communications, child visitation restriction, and Google Photos inspection."
    },
    {
        "Priority ID": "REV-005",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0071",
        "Primary Filename": "EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png",
        "Supporting Source IDs": "SS-0070 (EX02_...p1827.png)",
        "Relevant Message ID(s)": "MSG-000033",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0071 page 1828 character-for-character visual review complete)",
        "Reason for Visual Review": "Continuation showing threat to drive printouts to parents, 'Just die already', HPD reporting threat if messages are shared, and car/rent funding revocation.",
        "Forensic / Evidentiary Significance": "Direct proof of parental reputational targeting, coercive disclosure warnings, and sudden resource withdrawal."
    },
    {
        "Priority ID": "REV-006",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0059",
        "Primary Filename": "DET1.jpg",
        "Supporting Source IDs": "SS-0074 (EX04_child_attached_prison_threat_money_meeting.jpeg)",
        "Relevant Message ID(s)": "MSG-000017; MSG-000018; MSG-000019",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0059 / SS-0074 visual review complete)",
        "Reason for Visual Review": "Mobile screenshot of SMS message showing Blake explicitly planning to hold his son during cash exchange to engineer felony charges with prison threats.",
        "Forensic / Evidentiary Significance": "Statements demonstrating intention to hold minor child during cash exchange to induce criminal charges."
    },
    {
        "Priority ID": "REV-007",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0072",
        "Primary Filename": "EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg",
        "Supporting Source IDs": "SS-0097 (JACKDRIVE.jpeg); SS-0078 (EX12_2026_child_google_drive_private_photos_2ED63267.jpeg)",
        "Relevant Message ID(s)": "MSG-000020; MSG-000021; MSG-000022; MSG-000023",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0072 / SS-0097 / SS-0078 visual review complete; partially obscured peripheral bubbles documented)",
        "Reason for Visual Review": "Mobile screenshot showing Blake claiming child scrolled through Google Drive and weaponizing explicit sexual remarks.",
        "Forensic / Evidentiary Significance": "Demonstrates drive access awareness and child involvement in sexually hostile communications."
    },
    {
        "Priority ID": "REV-008",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0051",
        "Primary Filename": "bugbomb.jpg",
        "Supporting Source IDs": "SS-0052 (bugbomb2.jpg); SS-0053 (bugbomb3.jpg)",
        "Relevant Message ID(s)": "MSG-000001; MSG-000003; MSG-000006; MSG-000007; MSG-000009",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0051, SS-0052, SS-0053 visual review complete; cropped bubble on SS-0051 resolved on SS-0052)",
        "Reason for Visual Review": "Contemporaneous chat recounting bug bomb deployment, 4 foggers in face, dragging outside barefoot, and child/cat presence.",
        "Forensic / Evidentiary Significance": "Primary contemporaneous narrative of domestic dispute involving indoor pesticide fogger discharge."
    },
    {
        "Priority ID": "REV-009",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0054",
        "Primary Filename": "bugbomb4.jpg",
        "Supporting Source IDs": "SS-0051 (bugbomb.jpg); SS-0052 (bugbomb2.jpg)",
        "Relevant Message ID(s)": "MSG-000016",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0054 visual review complete)",
        "Reason for Visual Review": "Direct iMessage notice sent to co-tenant Scarlett reporting breathing injury, chemical weapon assault, and phone theft.",
        "Forensic / Evidentiary Significance": "Written notice documenting physical respiratory injury and deprivation of communication lifeline."
    },
    {
        "Priority ID": "REV-0010",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0096",
        "Primary Filename": "imgoingtosendyourentiregoogledrive.pdf",
        "Supporting Source IDs": "SS-0068 (EX01_...texts.pdf); SS-0069 (EX01_...original_message.pdf)",
        "Relevant Message ID(s)": "MSG-000035",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0096 page 5 verified; SS-0068 / SS-0069 corroborating email PDFs verified)",
        "Reason for Visual Review": "Preserved email PDF (displays headers reporting DKIM=pass/SPF=pass) containing threat to print and send entire Google Photos album.",
        "Forensic / Evidentiary Significance": "Documentary evidence of mass disclosure warnings and 48-hour physical appearance demand."
    },
    {
        "Priority ID": "REV-011",
        "Rank": "CRITICAL",
        "Primary Source ID": "SS-0067",
        "Primary Filename": "everyrighttolookfamilycourtwatch.pdf",
        "Supporting Source IDs": "SS-0077 (EX11_2026-05-24_right_to_look_family_court_watch_first.pdf)",
        "Relevant Message ID(s)": "MSG-000034; MSG-000036",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0067 page 1 verified; SS-0077 corroborating email PDF verified)",
        "Reason for Visual Review": "Preserved email PDF (displays headers reporting DKIM=pass/SPF=pass) containing claim of right to look at pictures, Family Court video threat, and motorcycle surveillance claim.",
        "Forensic / Evidentiary Significance": "Documentary evidence of custody litigation threats and movement monitoring claims."
    },
    {
        "Priority ID": "REV-012",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0057",
        "Primary Filename": "CompromisedEmailSearchHistory.png",
        "Supporting Source IDs": "SS-0006 (actdetail.png); SS-0060 (DeviceAccessGoogle.png)",
        "Relevant Message ID(s)": "N/A (Account Forensic Capture)",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0057 visual review complete)",
        "Reason for Visual Review": "Gmail UI screenshot displaying search query dropdown history containing sexual terms (fuck, cock, sex) and financial terms (paypal, checks, blake).",
        "Forensic / Evidentiary Significance": "Demonstrates intruder search pattern targeting financial accounts and personal sexual keywords."
    },
    {
        "Priority ID": "REV-013",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0060",
        "Primary Filename": "DeviceAccessGoogle.png",
        "Supporting Source IDs": "SS-0107 (securitytwo.png); SS-0006 (actdetail.png)",
        "Relevant Message ID(s)": "MSG-000067",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0060 visual review complete)",
        "Reason for Visual Review": "Google Account Manage Devices screen showing active Mac OS device in Houston, TX signed in July 30 at 10:37 PM.",
        "Forensic / Evidentiary Significance": "Hardware and geolocation identification for unauthorized intrusion session."
    },
    {
        "Priority ID": "REV-014",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0006",
        "Primary Filename": "actdetail.png",
        "Supporting Source IDs": "SS-0004 (act.png); SS-0005 (actactivityuna.png); SS-0105 (security.png)",
        "Relevant Message ID(s)": "MSG-000064; MSG-000065",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0006, SS-0004, SS-0005, SS-0105 visual reviews complete)",
        "Reason for Visual Review": "Google security detail card warning 'Review personal content: Did you recently download your account content? Done from an unfamiliar device.'",
        "Forensic / Evidentiary Significance": "Google system corroboration of unauthorized data archive request and Round Rock map queries."
    },
    {
        "Priority ID": "REV-015",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0101",
        "Primary Filename": "Oops_towthreats.pdf",
        "Supporting Source IDs": "SS-0003 (41messegeaccusationsthreats.pdf); SS-0098 (LeaaseNonanswertoCarAccountRequest.pdf)",
        "Relevant Message ID(s)": "MSG-000046; MSG-000047; MSG-000048; MSG-000049; MSG-000050",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0101 dual extraction and OCR review complete)",
        "Reason for Visual Review": "Complete 3-page email thread from June 21 showing sudden rent cancellation, insurance deactivation, and immediate tow threat.",
        "Forensic / Evidentiary Significance": "Documents rapid retaliatory escalation targeting shelter and transportation."
    },
    {
        "Priority ID": "REV-016",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0098",
        "Primary Filename": "LeaaseNonanswertoCarAccountRequest.pdf",
        "Supporting Source IDs": "SS-0101 (Oops_towthreats.pdf); SS-0055 (CAR_DEAL_EVIDENCE_ALL_SOURCE_PAGES.pdf)",
        "Relevant Message ID(s)": "MSG-000053; MSG-000054; MSG-000055",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0098 dual extraction and OCR review complete)",
        "Reason for Visual Review": "Itemized vehicle accounting email thread demonstrating $6,180 paid and refusal to exchange title.",
        "Forensic / Evidentiary Significance": "Provides documented payment accounting refuting unauthorized conversion claims."
    },
    {
        "Priority ID": "REV-017",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0102",
        "Primary Filename": "requesttocease_unrelated accusations.pdf",
        "Supporting Source IDs": "SS-0003 (41messegeaccusationsthreats.pdf)",
        "Relevant Message ID(s)": "MSG-000056; MSG-000057; MSG-000058; MSG-000059; MSG-000060; MSG-000061",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0102 dual extraction and OCR review complete)",
        "Reason for Visual Review": "4-page email thread documenting comprehensive harassment audit (20 emails, missed calls, fake plea agreement) and Blake’s response.",
        "Forensic / Evidentiary Significance": "Comprehensive contemporaneous record of communication volume and boundaries."
    },
    {
        "Priority ID": "REV-018",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0003",
        "Primary Filename": "41messegeaccusationsthreats.pdf",
        "Supporting Source IDs": "SS-0101 (Oops_towthreats.pdf); SS-0102 (requesttocease...pdf)",
        "Relevant Message ID(s)": "MSG-000037 - MSG-000052",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0003 9-page dual extraction and OCR review complete)",
        "Reason for Visual Review": "9-page PDF containing 38-41 sequential emails from June 21-25 showing sustained barrage of demands, tow threats, and Drive admissions.",
        "Forensic / Evidentiary Significance": "Demonstrates high volume, coercive continuity, and rapid demand shifts across 5 days."
    },
    {
        "Priority ID": "REV-019",
        "Rank": "HIGH",
        "Primary Source ID": "SS-0104",
        "Primary Filename": "Screenshot 2026-08-01 124617.png",
        "Supporting Source IDs": "SS-0056 (Complete_Emails_Since_Reporting...pdf)",
        "Relevant Message ID(s)": "MSG-000070",
        "Visual Review Disposition": "VERIFIED_PRIMARY (SS-0104 visual review complete)",
        "Reason for Visual Review": "WhatsApp call history displaying missed calls from Blake on July 11 and an unlisted number on July 10.",
        "Forensic / Evidentiary Significance": "Corroborates unauthorized telephonic/VoIP contact attempts following boundary notice."
    }
]

# Compute programmatic count of unique Source IDs referenced across all 19 priority rows
all_referenced_sids = set()
for p in priority_mapping:
    all_referenced_sids.add(p["Primary Source ID"])
    supp = p["Supporting Source IDs"]
    for item in supp.split(";"):
        item = item.strip()
        if item.startswith("SS-"):
            sid = item.split()[0]
            all_referenced_sids.add(sid)

print(f"=== PROGRAMMATIC DEDUPLICATION OF MANUAL REVIEW PRIORITY CORPUS ===")
print(f"Total Priority Rows: {len(priority_mapping)}")
print(f"Exact Programmatically Computed Unique Source IDs: {len(all_referenced_sids)}")
for sid in sorted(all_referenced_sids):
    fn = manifest_by_id.get(sid, "UNKNOWN")
    print(f"  {sid}: {fn}")

# Write updated MANUAL_REVIEW_PRIORITY.csv
out_path = BASE_DIR / "MANUAL_REVIEW_PRIORITY.csv"
with open(out_path, "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(priority_mapping[0].keys()))
    writer.writeheader()
    writer.writerows(priority_mapping)

print(f"Wrote updated {out_path}")
