import csv
from pathlib import Path

BASE_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")

messages = []
with open(BASE_DIR / "POST_EXPORT_MESSAGE_MASTER.csv", "r", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        messages.append(row)

print(f"Total messages in master: {len(messages)}")
for m in messages[:10]:
    print(f"{m['Message ID']}: {m['Date']} {m['Time']} [{m['Speaker']} -> {m['Recipient']}] - {m['Source ID(s)']}")
    print(f"   Text: {m['Exact Text'][:100]}...")
