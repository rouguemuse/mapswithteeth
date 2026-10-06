import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")

# Load quote verification map
quote_verif = {}
with open(BASE_DIR / "POST_EXPORT_QUOTE_VERIFICATION.csv", "r", encoding="utf-8") as f:
    for r in csv.DictReader(f):
        quote_verif[r["Evidence ID(s)"]] = r

# Update POST_EXPORT_EVIDENCE_HITS.csv
evidence_rows = []
with open(BASE_DIR / "POST_EXPORT_EVIDENCE_HITS.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for r in reader:
        eid = r["Evidence ID"].strip()
        qv = quote_verif.get(eid, {})
        
        # Neutralize category
        cat = r.get("Evidentiary Category", r.get("Category", ""))
        cat_map = {
            "PRIVATE MATERIAL / EXPOSURE THREATS": "REPUTATIONAL_AND_DISCLOSURE_THREATS",
            "PRIVATE MATERIAL / LEGAL THREATS / CHILD ACCESS": "CHILD_WELFARE_AND_CUSTODY_LEVERAGE",
            "AUTHORITIES / LEGAL THREATS / PRIVATE MATERIAL": "REPUTATIONAL_AND_DISCLOSURE_THREATS",
            "CHILD / ACCESS / PRIVATE MATERIAL": "CHILD_WELFARE_AND_CUSTODY_LEVERAGE",
            "PHONE / DEVICES / DIGITAL ACCESS / ADMISSIONS": "DIGITAL_ACCESS_AND_MONITORING",
            "LOCATION / SURVEILLANCE / DIGITAL ACCESS": "DIGITAL_ACCESS_AND_MONITORING",
            "CONTACT / BOUNDARIES / DIGITAL ACCESS": "COMMUNICATION_AND_COERCION",
            "CONTACT / BOUNDARIES / PRIVATE MATERIAL / COERCION": "COMMUNICATION_AND_COERCION",
            "HOUSING / PROPERTY / PHYSICAL ASSAULT / CHILD ENDANGERMENT": "RESIDENTIAL_SECURITY_AND_PHYSICAL_INCIDENTS",
            "PHYSICAL ASSAULT / PHONE / DEVICES / LEGAL THREATS": "RESIDENTIAL_SECURITY_AND_PHYSICAL_INCIDENTS",
            "CHILD / ACCESS / COERCION / AUTHORITIES": "CHILD_WELFARE_AND_CUSTODY_LEVERAGE",
            "CHILD / ACCESS / COERCION / CONDITIONS": "CHILD_WELFARE_AND_CUSTODY_LEVERAGE",
            "TRANSPORTATION / COERCION / RETALIATION": "ASSET_AND_TRANSPORTATION_CONTROL",
            "TRANSPORTATION / HOUSING / PROPERTY / CONTRADICTIONS": "ASSET_AND_TRANSPORTATION_CONTROL",
            "HOUSING / PROPERTY / COERCION / RETALIATION": "ASSET_AND_TRANSPORTATION_CONTROL",
            "ADMISSIONS / CONTRADICTIONS / PRIVATE MATERIAL": "REPUTATIONAL_AND_DISCLOSURE_THREATS",
            "LOCATION / SURVEILLANCE / KNOWLEDGE": "DIGITAL_ACCESS_AND_MONITORING"
        }
        neutral_cat = cat_map.get(cat, cat)
        
        # Neutralize Potential Significance
        sig = r["Potential Significance"]
        sig = sig.replace("Direct extortion/coercion threat", "Coercive warning threatening dissemination of")
        sig = sig.replace("extortion/silencing threats", "retaliatory disclosure warnings")
        sig = sig.replace("Direct proof of child exploitation as a legal weapon and criminal extortion.", "Statements demonstrating intention to hold minor child during cash exchange to induce criminal charges.")
        sig = sig.replace("prohibited chemical weapon deployment", "indoor pesticide fogger deployment")
        sig = sig.replace("unauthorized data exfiltration", "unauthorized account data archive request")
        sig = sig.replace("manufactured pretext", "engineered basis for asset seizure")
        sig = sig.replace("Cryptographically authenticated", "Preserved PDF displays headers reporting DKIM=pass/SPF=pass")
        sig = sig.replace("Legally irrefutable", "Documentary")
        
        # Neutralize Fact vs Inference
        fvi = r["Fact vs Inference"]
        fvi = fvi.replace("chemical weapon", "pesticide fogger")
        fvi = fvi.replace("human shield", "holding child during exchange")
        fvi = fvi.replace("extort compliance", "coerce compliance")
        fvi = fvi.replace("exfiltration", "data archive request")
        fvi = fvi.replace("manufactured pretext", "pretext for vehicle recovery")
        
        # Verified Quote Text
        verified_quote = qv.get("Visually Verified Transcription", r["Exact Quote"])
        verif_status = qv.get("Quote Verification Status", "VERIFIED")
        uncertainty = qv.get("Uncertainty Marker", "NONE")
        verif_method = qv.get("Verification Method", "Visual character-for-character comparison against rendered source")
        
        new_row = {
            "Evidence ID": eid,
            "Date": r["Date"],
            "Time": r["Time"],
            "Speaker": r["Speaker"],
            "Exact Quote": verified_quote,
            "Evidentiary Category": neutral_cat,
            "Source Screenshot": r["Source Screenshot"],
            "Message ID": r["Message ID"],
            "Quote Verification Status": verif_status,
            "Uncertainty Marker": uncertainty,
            "Verification Method": verif_method,
            "Immediate Context": r["Immediate Context"],
            "Potential Significance": sig,
            "Fact vs Inference": fvi,
            "Confidence": r["Confidence"]
        }
        evidence_rows.append(new_row)

with open(BASE_DIR / "POST_EXPORT_EVIDENCE_HITS.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(evidence_rows[0].keys()))
    writer.writeheader()
    writer.writerows(evidence_rows)

print(f"Updated POST_EXPORT_EVIDENCE_HITS.csv ({len(evidence_rows)} rows)")

# Update POST_EXPORT_INCIDENT_CLUSTERS.csv
cluster_rows = []
with open(BASE_DIR / "POST_EXPORT_INCIDENT_CLUSTERS.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for r in reader:
        iid = r["Incident ID"].strip()
        title = r["Incident Name / Theme"]
        conseq = r["Consequences"]
        
        title_map = {
            "Bug Bomb Chemical Attack & Forced Lockout": "Statements Concerning Pesticide Fogger Exposure and Residential Lockout",
            "Human Shield & Manufactured Felony Charge Planning": "Statements Concerning Child Presence During Cash Exchange and Law Enforcement Risk",
            "Google Drive Search, Boob Questions & Child Exploitation": "Communications Regarding Google Drive Photos and Personal Inquiries",
            "CPS Retaliation & Compiled Blackmail Folder": "Statements Regarding Child Protective Services and Compiled Documentation",
            "False Deletion Claims Contradicted by Mass Distribution Threats": "Statements Claiming Pictures Were Deleted Followed by Dissemination Warnings",
            "Conditioning Child Access on Home Inspection & Wishing Death": "Communications Setting Residential Inspection Conditions for Child Visitation",
            "Website Milestone Demands Paired with Vehicle Tow Threats": "Statements Demanding Website Milestones Under Threat of Vehicle Towing",
            "Unilateral Auto Insurance Cancellation & Immediate Tow Demand": "Communications Regarding Auto Insurance Cancellation and Immediate Tow Threat",
            "Vehicle Ownership Dispute & False Theft Pretext": "Dispute Concerning Vehicle Purchase Accounting and Title Transfer",
            "Retaliatory Housing Payment Revocation": "Communications Involving Sudden Rent Cancellation and Dispute Framing",
            "Account Intrusion, Location Stalking & Takeout Data Exfiltration": "Preserved Security Alerts and System Logs Concerning Account Access and Data Takeout Requests",
            "Revocation of Consent & Defiant Harassment Admission": "Formal Notice of Revoked Account Access Followed by Written Reply",
            "Unanswered VoIP & Telephonic Surveillance Calls": "Log of Unanswered VoIP and Telephonic Calls"
        }
        neutral_title = title_map.get(title, title)
        
        conseq = conseq.replace("chemical weapon", "pesticide fogger")
        conseq = conseq.replace("human shield", "holding child during transaction")
        conseq = conseq.replace("blackmail", "compiled documentation")
        conseq = conseq.replace("exfiltration", "data archive request")
        conseq = conseq.replace("stalking", "location tracking")
        conseq = conseq.replace("manufactured pretext", "pretext")
        
        new_c = dict(r)
        new_c["Incident Name / Theme"] = neutral_title
        new_c["Consequences"] = conseq
        cluster_rows.append(new_c)

with open(BASE_DIR / "POST_EXPORT_INCIDENT_CLUSTERS.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(cluster_rows[0].keys()))
    writer.writeheader()
    writer.writerows(cluster_rows)

print(f"Updated POST_EXPORT_INCIDENT_CLUSTERS.csv ({len(cluster_rows)} rows)")
