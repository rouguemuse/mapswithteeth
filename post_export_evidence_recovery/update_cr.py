import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")
cr_file = BASE_DIR / "POST_EXPORT_CROSS_REFERENCES.csv"

rows = []
with open(cr_file, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for r in reader:
        rel = r["Relationship"]
        rel = rel.replace("Manufactured Catch-22: Policy Cancellation Immediately Paired with Tow Threat", "Sequence Analysis: Policy Cancellation Paired with Immediate Tow Threat")
        rel = rel.replace("Digital Location History Exfiltration", "Digital Location History Archive Request")
        r["Relationship"] = rel
        
        why = r["Why Comparison Matters"]
        why = why.replace("pretextual", "unilateral")
        why = why.replace("exfiltration", "data archive request")
        r["Why Comparison Matters"] = why
        rows.append(r)

with open(cr_file, "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    writer.writeheader()
    writer.writerows(rows)

print("Updated POST_EXPORT_CROSS_REFERENCES.csv")
