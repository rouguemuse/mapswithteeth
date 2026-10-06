import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")
leads_file = BASE_DIR / "EXTERNAL_EVIDENCE_LEADS.csv"

rows = []
with open(leads_file, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for r in reader:
        w = r["Why Relevant"]
        w = w.replace("exfiltration target", "data archive target")
        w = w.replace("toxic chemical fogger deployment", "indoor pesticide fogger deployment")
        r["Why Relevant"] = w
        rows.append(r)

with open(leads_file, "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    writer.writeheader()
    writer.writerows(rows)

print("Updated EXTERNAL_EVIDENCE_LEADS.csv")
