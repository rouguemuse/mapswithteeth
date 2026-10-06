import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")

# Load manifest
manifest_by_id = {}
manifest_by_name = {}
with open(BASE_DIR / "POST_EXPORT_SOURCE_MANIFEST.csv", "r", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        manifest_by_id[row["Source ID"].strip()] = row
        manifest_by_name[row["Original Filename"].strip()] = row

print(f"Total manifest entries: {len(manifest_by_id)}")

# Check MANUAL_REVIEW_PRIORITY.csv
with open(BASE_DIR / "MANUAL_REVIEW_PRIORITY.csv", "r", encoding="utf-8") as f:
    priority_rows = list(csv.DictReader(f))

priority_sources = set()
for r in priority_rows:
    sid = r["Source ID"].strip()
    rank = r["Rank"].strip()
    fn = r["Original Filename"].strip()
    priority_sources.add(sid)

# Check all CRITICAL/HIGH in POST_EXPORT_EVIDENCE_HITS.csv
evidence_sources = set()
with open(BASE_DIR / "POST_EXPORT_EVIDENCE_HITS.csv", "r", encoding="utf-8") as f:
    for r in csv.DictReader(f):
        conf = r["Confidence"].strip()
        ss_str = r["Source Screenshot"].strip()
        files = [x.strip() for x in ss_str.split(";") if x.strip()]
        for f_item in files:
            if f_item in manifest_by_name:
                evidence_sources.add(manifest_by_name[f_item]["Source ID"])
            elif f_item in manifest_by_id:
                evidence_sources.add(f_item)
            else:
                print(f"WARNING: Evidence file not found in manifest: {f_item}")

print(f"\n--- Evidence Hits Sources (Confidence contains CRITICAL or HIGH): {len(evidence_sources)} ---")
for sid in sorted(evidence_sources):
    fname = manifest_by_id[sid]["Original Filename"]
    print(f"  {sid}: {fname}")

# Combined unique sources referenced by CRITICAL or HIGH priority rows and evidence hits
combined = priority_sources.union(evidence_sources)
print(f"\n--- Combined Unique Review Sources: {len(combined)} ---")
for sid in sorted(combined):
    fname = manifest_by_id[sid]["Original Filename"]
    print(f"  {sid}: {fname}")
