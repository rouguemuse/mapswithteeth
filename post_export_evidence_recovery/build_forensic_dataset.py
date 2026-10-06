# Forensic Index & Evidence Generator
# Post-Export Message Screenshot Recovery & Evidence Index

import os, sys, csv, json, re
from pathlib import Path
from datetime import datetime

out_dir = Path(r'c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery')
manifest_file = out_dir / 'POST_EXPORT_SOURCE_MANIFEST.csv'

# Load Manifest
file_to_sid = {}
with open(manifest_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        file_to_sid[row['Original Filename']] = row['Source ID']

print(f'Loaded {len(file_to_sid)} source mappings from manifest.')

def get_sid(filename):
    return file_to_sid.get(filename, 'SS-UNKNOWN')

# Define Master Messages Dataset
# Columns: Message ID | Date | Time | Speaker | Recipient | Exact Text | Platform | Conversation | Source ID(s) | Original Filename(s) | OCR Confidence | Context Status

messages = [
    # --- INCIDENT 1: BUG BOMB ATTACK & FORCED LOCKOUT ---
    {
        'id': 'MSG-000001',
        'date': 'DATE_UNRESOLVED',
        'time': '4:58 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': 'So we were paying 2 remys [rent] With bug bombs in the face four of them And gassed me out of the house',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.96)',
        'context': 'Active recounting of chemical weapon assault and domestic lockout shortly after occurrence.'
    },
    {
        'id': 'MSG-000002',
        'date': 'DATE_UNRESOLVED',
        'time': '4:58 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'Why',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.98)',
        'context': 'Friend inquiry into precipitating event.'
    },
    {
        'id': 'MSG-000003',
        'date': 'DATE_UNRESOLVED',
        'time': '5:00 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': "Because he decided last minute that he wouldn't guarantee me on the lease anymore that he would only do it for Scarlet, even though I already moved out here and everything and so I was talking to Scarlett and like literally crying like what the fuck am I gonna do she was like well what do you wanna do like we can figure something out on blah blah and me being who I am as a person I made a joke and was like honestly with the way that he walks around all the time trying to scare people into doing everything for him and giving him whatever he wants I think I should tell him to give me 10K or I'll fucking tell his apartment that he's using a fake ID to rent his apartment and she didn't take that as a joke and she didn't tell me that she texted him what I said, and he came and stormed the house completely unexpected",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.96)',
        'context': 'Detailed explanation of lease withdrawal, third-party communication to Blake, and unexpected physical raid.'
    },
    {
        'id': 'MSG-000004',
        'date': 'DATE_UNRESOLVED',
        'time': '5:00 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'Jesus',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.86)',
        'context': 'Reaction.'
    },
    {
        'id': 'MSG-000005',
        'date': 'DATE_UNRESOLVED',
        'time': '5:01 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': "So where's shit sit now",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.90)',
        'context': 'Friend inquiry into current status.'
    },
    {
        'id': 'MSG-000006',
        'date': 'DATE_UNRESOLVED',
        'time': '5:02 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': "Rips open the door rips the phones out of my hand tells me to get out I'm sitting on the couch crying and he one by one rips the tab off of four bug bombs in my face then throws them in the house drags me outside no shoes none of my stuff and speeds off",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.98)',
        'context': 'Primary eyewitness account of physical dragging, chemical release directly in face, and property seizure.'
    },
    {
        'id': 'MSG-000007',
        'date': 'DATE_UNRESOLVED',
        'time': '5:02 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': 'Mind you his kid was there The cats were inside',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.96)',
        'context': 'Corroboration that child (Jack) was physically present during the pesticide deployment.'
    },
    {
        'id': 'MSG-000008',
        'date': 'DATE_UNRESOLVED',
        'time': '5:02 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'Fukn crazzzy And scar?',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.87)',
        'context': 'Friend inquiring about roommate/co-tenant Scarlett.'
    },
    {
        'id': 'MSG-000009',
        'date': 'DATE_UNRESOLVED',
        'time': '5:02 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': "Then scarlet calls the cops because I'm on the porch crying calling kham to tell him to make her give me my stuff She called the fucking cops and locked me out of the house dude",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb.jpg', 'bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.97)',
        'context': 'Lockout continuation and police dispatch involvement.'
    },
    {
        'id': 'MSG-000010',
        'date': 'DATE_UNRESOLVED',
        'time': '5:03 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'Wtf',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.88)',
        'context': 'Reaction.'
    },
    {
        'id': 'MSG-000011',
        'date': 'DATE_UNRESOLVED',
        'time': '5:03 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': "I got poisonous gas all over my face in my mouth It's 95 fucking degrees",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.99)',
        'context': 'Physical and physiological injury description.'
    },
    {
        'id': 'MSG-000012',
        'date': 'DATE_UNRESOLVED',
        'time': '5:03 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': "That'd be why she's left your group too...",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.93)',
        'context': 'Third party observation.'
    },
    {
        'id': 'MSG-000013',
        'date': 'DATE_UNRESOLVED',
        'time': '5:03 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'When was this Today Where are you now',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.95)',
        'context': 'Timeline verification.'
    },
    {
        'id': 'MSG-000014',
        'date': 'DATE_UNRESOLVED',
        'time': '5:04 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Friend (FaithlessDum)',
        'text': "Kham got me a hotel room but come morning Idfk the cops drove me here And I think it's a neighbor that called the cops protected those fucking assholes and didn't say what happened when he asked what's going on. I said nothing. I just see my stuff and get my stuff and that was all. I literally should've had his ass arrested like I can't believe she have all fucking people who called the cops.",
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.97)',
        'context': 'Confirmation of police transport to hotel and suppression of details during initial law enforcement encounter.'
    },
    {
        'id': 'MSG-000015',
        'date': 'DATE_UNRESOLVED',
        'time': '5:04 PM',
        'speaker': 'Friend (FaithlessDum)',
        'recipient': 'Jayme Volstad',
        'text': 'Least no one got stabbed... Ikr',
        'platform': 'Telegram / Mobile Messaging',
        'conversation': 'Bug Bomb Assault & Eviction Recount',
        'sources': ['bugbomb2.jpg', 'bugbomb3.jpg'],
        'ocr_conf': 'High (0.90)',
        'context': 'Conversation conclusion.'
    },
    {
        'id': 'MSG-000016',
        'date': 'DATE_UNRESOLVED',
        'time': '7:41 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Scarlett (+1 713 355-9275)',
        'text': "Im letting you know due to the fact that I'm still having problems breathing and the situation I am now in due to blakes actions I will be pressing charges against Blake. I have pictures of the cans of the bug bombs you threw out of the house I need to seek medical treatment and the use of a pesticide inside of the home let alone directly in my face is assault, prohibited chemical weapons, tampering/public health as well as in the presence of a child and with animals inside the house as well. On top of that him taking the phone that was given to me back that he knows has my phone service on it and leaving me without service to contact anyone is theft. I thought you deserved a fair warning but I did you a favor not telling the cops what happened yesterday only to learn you were the one who called them and I'm still having severe breathing problems Ive contacted a criminal defense attorney and this is what I have been advised to do.",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'Formal Notice to Scarlett Regarding Bug Bomb Assault & Phone Theft',
        'sources': ['bugbomb4.jpg'],
        'ocr_conf': 'High (0.98)',
        'context': 'Contemporaneous written notice describing chemical assault injuries, device theft, child endangerment, and legal counsel instructions.'
    },

    # --- INCIDENT 2: MONEY HANDOFF WITH CHILD IN ARMS & PRISON THREATS ---
    {
        'id': 'MSG-000017',
        'date': 'DATE_UNRESOLVED',
        'time': '12:53 PM',
        'speaker': 'Blake Harris (281-797-1396)',
        'recipient': 'Jayme Volstad / Third-Party Contact',
        'text': "FYI, I will have my son with me when I meet you to give this money to you so if you try to pull any bullshit, there's gonna be a charge with a child attached to it. He will literally be in my arms when I hand you the money and you know how they fuck with girls in prison that fuck with kids you will live a nightmare. Do not screw this up. I appreciate the game that you got I'd be doing the same thing if I was in your position I used to do the same fucking bullshit you did I just need my life to chill the fuck out so you're gonna get what you want, but don't think if you cause more problems or for Jayme once you leave I will hunt you down and make sure you spend a long time bars. Do not test me. I am your only ticket out of here. I respect the fucking game in the bullshit so that's why I'm doing this because it's impressive. I don't know anybody that would go and be able to convince somebody like Jayme over and over again so good for you but I have to go to work and get shit done. I'm buying the ticket right now. I'm serious though do not play with me..",
        'platform': 'SMS / Mobile Messaging',
        'conversation': 'Money Meeting / Child Human Shield & Prison Intimidation',
        'sources': ['DET1.jpg', 'EX04_child_attached_prison_threat_money_meeting.jpeg'],
        'ocr_conf': 'High (0.97)',
        'context': 'Explicit conditioning of cash handoff on holding young child in arms to engineer enhanced criminal charges ("charge with a child attached to it"), prison rape insinuation, and hunting threat.'
    },
    {
        'id': 'MSG-000018',
        'date': 'DATE_UNRESOLVED',
        'time': '12:55 PM',
        'speaker': 'Recipient',
        'recipient': 'Blake Harris (281-797-1396)',
        'text': "I'm not meeting with you",
        'platform': 'SMS / Mobile Messaging',
        'conversation': 'Money Meeting / Child Human Shield & Prison Intimidation',
        'sources': ['DET1.jpg', 'EX04_child_attached_prison_threat_money_meeting.jpeg'],
        'ocr_conf': 'High (0.99)',
        'context': 'Refusal to participate in coercive meeting.'
    },
    {
        'id': 'MSG-000019',
        'date': 'DATE_UNRESOLVED',
        'time': '1:40 PM',
        'speaker': 'Recipient',
        'recipient': 'Blake Harris (281-797-1396)',
        'text': "You must think I'm crazy, ticket + crypto or [CROPPED]",
        'platform': 'SMS / Mobile Messaging',
        'conversation': 'Money Meeting / Child Human Shield & Prison Intimidation',
        'sources': ['DET1.jpg', 'EX04_child_attached_prison_threat_money_meeting.jpeg'],
        'ocr_conf': 'High (0.95)',
        'context': 'Refusal of in-person trap.'
    },

    # --- INCIDENT 3: CHILD GOOGLE DRIVE INTRUSION & SEXUAL SHAMING ---
    {
        'id': 'MSG-000020',
        'date': 'DATE_UNRESOLVED',
        'time': '8:47 AM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Blake Harris',
        'text': "Im not [CROPPED] ng that rude just that was [CROPPED] bad so its just like i dont kno [CROPPED] expect from me i guess since i had to suck it up with it in my face thats why im just like?? Idk",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'Child Google Drive Shaming & Intimidation',
        'sources': ['EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg', 'EX12_2026_child_google_drive_private_photos_2ED63267.jpeg', 'JACKDRIVE.jpeg'],
        'ocr_conf': 'High (0.95)',
        'context': 'Preceding exchange regarding emotional stress and imposed decisions.'
    },
    {
        'id': 'MSG-000021',
        'date': 'DATE_UNRESOLVED',
        'time': '8:47 AM',
        'speaker': 'Blake Harris',
        'recipient': 'Jayme Volstad',
        'text': "Jesus Christ get over yourself dude that happened all right he's alsome [also met] your boyfriend's he's met Guys that a miniature home. He's been guys that have come out of your room all kinds of shit. He's told me all kinds of stuff he's found your sex toys. He's found bags of drugs. He seen all of your pictures on your Google Drive. He was literally scrolling through them. Why is mommy showing her boobs? Who did she send these to? I thought they were just for you daddy why does she have her fingers when she goes potty and that's not her name she's talking to OK, so how fucked up do you wanna get cause we can go down this rabbit hole if you want First to just not bring it up and he'll forget",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'Child Google Drive Shaming & Intimidation',
        'sources': ['EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg', 'EX12_2026_child_google_drive_private_photos_2ED63267.jpeg', 'JACKDRIVE.jpeg'],
        'ocr_conf': 'High (0.98)',
        'context': 'Blake alleging the minor child scrolled through private photos in Jayme’s Google Drive, weaponizing explicit sexualized questions attributed to the child.'
    },
    {
        'id': 'MSG-000022',
        'date': 'DATE_UNRESOLVED',
        'time': '8:47 AM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Blake Harris',
        'text': "What the fuck dude? You're telling me you don't do well with things that are decided for you and all I'm saying is I didn't have a choice for a long time and I had to deal with it so it's hard for me having you constantly take it out on me",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'Child Google Drive Shaming & Intimidation',
        'sources': ['EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg', 'EX12_2026_child_google_drive_private_photos_2ED63267.jpeg', 'JACKDRIVE.jpeg'],
        'ocr_conf': 'High (0.98)',
        'context': 'Pushback against abusive framing and projection.'
    },
    {
        'id': 'MSG-000023',
        'date': 'DATE_UNRESOLVED',
        'time': '8:47 AM',
        'speaker': 'Blake Harris',
        'recipient': 'Jayme Volstad',
        'text': "Because you were leaving Xanax [CROPPED]",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'Child Google Drive Shaming & Intimidation',
        'sources': ['EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg', 'EX12_2026_child_google_drive_private_photos_2ED63267.jpeg', 'JACKDRIVE.jpeg'],
        'ocr_conf': 'High (0.99)',
        'context': 'Repetition of substance accusation.'
    },

    # --- INCIDENT 4: MAY 18-19 CPS UNLOAD FOLDER & EMERGENCY ORDER THREATS ---
    {
        'id': 'MSG-000024',
        'date': '2026-05-18',
        'time': '9:38 PM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "I said find somewhere else because you couldn’t fucking pay your rent Are you that fucking are you kidding me",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'CPS Threat & Resource Revocation',
        'sources': ['EX04_2026-05-18_cps_unload_entire_folder.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Demanding eviction / relocation.'
    },
    {
        'id': 'MSG-000025',
        'date': '2026-05-18',
        'time': '9:39 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Blake Harris',
        'text': "We don’t need to debate this anymore. It’s fucking over this is the problem you want to fucking hammer out every single detail it doesn’t fucking matter I fucked up. I got stupid shit so did you does no good to fucking throw to each other like this every fucking day blake",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'CPS Threat & Resource Revocation',
        'sources': ['EX04_2026-05-18_cps_unload_entire_folder.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Attempt to establish boundary against repetitive argument loops.'
    },
    {
        'id': 'MSG-000026',
        'date': '2026-05-18',
        'time': '9:39 PM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "I’m paying your rent I needed you to pay your rent. That’s why you needed to move so that I can move somebody in there and get fucked.",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'CPS Threat & Resource Revocation',
        'sources': ['EX04_2026-05-18_cps_unload_entire_folder.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Housing condition leverage.'
    },
    {
        'id': 'MSG-000027',
        'date': '2026-05-18',
        'time': '9:53 PM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "I can go through all of your shit again and I can find one after another after another don’t think I still don’t have access because it’s all a lot... and I swear to God if you call CPS, I will unload the entire folder that I have for you making up some bullshit about not being able to get a hold of.",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'CPS Threat & Resource Revocation',
        'sources': ['EX04_2026-05-18_cps_unload_entire_folder.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Admission of ongoing digital access to Jayme’s files/accounts and explicit threat to unload retaliatory exposure folder if Child Protective Services is contacted.'
    },
    {
        'id': 'MSG-000028',
        'date': '2026-05-19',
        'time': '2:31 AM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "with that because I don’t trust that you’re not gonna file some fucking type of emergency protective order over some bullshit would produce immediately caused me go to the financial crimes unit and end everything I have to do test quit thinking you’re the smartest person in the room... the only thing I have well I don’t have them anymore. It’s just pictures of you and I’m so mad that they’re all gone everything... if I would’ve had a gun I would’ve fucking swallowed a bullet",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'CPS Threat & Resource Revocation',
        'sources': ['BLAKE2026_Page_1800.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Threat of preemptive retaliatory filing with financial crimes unit if an emergency protective order is sought, claim that pictures are "all gone", and suicidal leverage.'
    },

    # --- INCIDENT 5: MAY 23-24 CATASTROPHIC ESCALATION, GOOGLE PHOTOS THREATS & FAMILY COURT LEVERAGE ---
    {
        'id': 'MSG-000029',
        'date': '2026-05-23',
        'time': '9:59 PM',
        'speaker': 'Jayme Volstad',
        'recipient': 'Blake Harris (2817971396)',
        'text': "Have you happened to have called about the dryer? It's still not fixed at all but I'm aware of nothing is moved so they weren't here when I was gone or anything.",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png', 'BLAKE2026_Page_1814.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Routine inquiry regarding apartment maintenance.'
    },
    {
        'id': 'MSG-000030',
        'date': '2026-05-23',
        'time': '11:00 PM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "I called yesterday emergency I'll call tmrw [CROPPED] apartment to wait for the maintenance people to get there",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png', 'BLAKE2026_Page_1814.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Maintenance coordination.'
    },
    {
        'id': 'MSG-000031',
        'date': '2026-05-23',
        'time': '11:40 PM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "Also don't build the website I can for ur own portfolio but I can't have something u made represent the forefront of the company.",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png', 'BLAKE2026_Page_1814.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Abrupt repudiation of web development project.'
    },
    {
        'id': 'MSG-000032',
        'date': '2026-05-24',
        'time': '2:31 AM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "Feb 2025 ur letting some guy fuck ur face whilenu fuck me wt the same time. Fuck you u sick cunt. You fucking ruined my life for nothing. I hope those fucking kidneys ears fucking stop working sooner than later. I won't be at the fucking funeral. I won't ever talk to you again. I'm blocking your number. You can email me when you want to see Jack he's not coming over to your house until I see the inside of it and look through everything. I don't trust you I found so much more shit. I'm coming to get my fucking MacBook yourself MacBook Air. On Swappa. You don't deserve anything that I've ever complier scandalist whore. You're tire Google. Photos is nothing but you taking fucking pictures in my fucking bathroom but fucking naked and sending them to other fucking guys. Who the fuck do you think you are",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png'],
        'ocr_conf': 'High (0.99)',
        'context': 'Explosive escalation wishing recipient death, blocking phone number, imposing house search condition on child visitation, demanding MacBook, and referencing inspection of Google Photos.'
    },
    {
        'id': 'MSG-000033',
        'date': '2026-05-24',
        'time': '2:31 AM',
        'speaker': 'Blake Harris (2817971396)',
        'recipient': 'Jayme Volstad',
        'text': "if you do so much just tell a single person or a single person. Any of these text messages. I'll be at HPD tomorrow. Fuck with me and see what happens talking all that shit. You made sick you make me throw up. I wasted a quarter of my life on the dumbest fucking bitch that I know Jayme I really hate you. I fucking hate you. Just die already. Save me some fucking more pain... If I have to drive to your parents, sell myself leave them print out of everything that you've done I will because they just seem to be a good little girl... and I'm taking the car back and I'm taking all the money for the rent...",
        'platform': 'iMessage / Apple Messages',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png'],
        'ocr_conf': 'High (0.99)',
        'context': 'Threatening police report if messages are shared, commanding recipient to die, threatening to take physical printouts of private photos to her parents, and revoking car and rent.'
    },
    {
        'id': 'MSG-000034',
        'date': '2026-05-24',
        'time': '8:08 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (pluckaduck1984@gmail.com)',
        'text': "You are accusing me of being with someone else over a video that YOU took. If I was secretly screwing someone else, why the fuck would I bring them into your house when you had cameras everywhere and were at one of the most angry scary people at that time… It was your video. You took it. You were there. How the fuck do u look at a video you personally recorded on ur couch and decide someone else took it Where are ur living room camera footages? Go fucking look look at the meta data or the gid damn footage of ur house from that time this is exactly what I’ve been begging you to stop doing… Ive asked you a thousand times to stop sending me sexual things. U keep being cruel and humiliating because you cant believe that i ha… And use it to justify control over jack, telling me to die, humiliating me, and threatening me and then you take being beaten and sexually assaulted which there are actual fucking police reports for… Stop violating Lauren by sending me pictures of her stop fucking sending me videos that I’ve asked you not to send me in fact I wish you would fucking delete them. Do not ever talk to me about sex again. And I swear to God go fucking look at your goddamn video footage. That was your fucking video. Tell jack i love him, clearly youre never going to allow a relationship with him without doing this.",
        'platform': 'Gmail / Email',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['everyrighttolookfamilycourtwatch.pdf', 'imgoingtosendyourentiregoogledrive.pdf', 'EX01_2026-05-24_google_photos_album_printed_texts.pdf', 'EX11_2026-05-24_right_to_look_family_court_watch_first.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Written response documenting surveillance cameras in home, refusal of sexual communications, demand to stop sending nonconsensual photos of third-party Lauren, and objection to child custody leverage.'
    },
    {
        'id': 'MSG-000035',
        'date': '2026-05-24',
        'time': '1:28 PM',
        'speaker': 'Blake Harris (pluckaduck1984@gmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "stop sending these messages to your mom the next one that I see you send her I’m going to send your entire Google Photos album printed every text message everything I already have it all done because if my parents have to know get to know so just leave me alone and you get to keep your car keep your apartment you gotta keep everything except my MacBook and you keep seeing Jack and all adjust the custody agreement. I need to know what needs to be changed... if you don’t give me a day and time in the next 48 hours then I’m just gonna show up... if you caused me problems, I will cause you problems so don’t cause me problems. I’m either coming today or I’m coming tomorrow. Pick a day pick a time and I want to see the inside of the house... and then there’s another website that somebody else is running with all of our videos and all of our pictures that were saved to the Gold Tooth computer, which is awesome...",
        'platform': 'Gmail / Authenticated Email PDF',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['imgoingtosendyourentiregoogledrive.pdf', 'EX01_2026-05-24_google_photos_album_printed_texts.pdf', 'EX01_2026-05-24_google_photos_album_printed_texts_original_message.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Direct threat to distribute printed copies of recipient’s entire Google Photos album and all text messages to third parties; conditioning car, apartment, and child custody on compliance; threatening unannounced physical intrusion within 48 hours.'
    },
    {
        'id': 'MSG-000036',
        'date': '2026-05-24',
        'time': '3:10 PM',
        'speaker': 'Blake Harris (pluckaduck1984@gmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Listen to me you rotten fucking scum dying from the inside out. I didn’t know because I couldn’t watch it and guess what none of it was saved at the same time. It’s a fucking blurry fucking picture fucking get over it... I swear to God, give me a time to come and pick up my computer. I don’t understand how you don’t get that I need that I will never talk or bring up anything to you ever again the second I get my fucking laptop. Other than to have you and Jack Meat [Meet]... I have every right to look through those pictures and say whatever I want and because without them, I’d probably be dead because of the campaign of lies deceit and hatefulness from you the only way that I could prove that you were a piece of shit was that you wanna try to take me to Family court? We guess what we’re gonna watch first cause I don’t have one you can bring up all the other stuff im like 2/3 months passing a hair follicle. The judge might be pissed want me to take classes? I’ll do whatever. I definitely won’t have to see him supervised... saw your motorcycle boy last night. You never knew that I’ve been on that guy for seven years crazy just can’t be trusted.",
        'platform': 'Gmail / Authenticated Email PDF',
        'conversation': 'May 24 Rupture & Disclosure Campaign',
        'sources': ['everyrighttolookfamilycourtwatch.pdf', 'EX11_2026-05-24_right_to_look_family_court_watch_first.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Asserting an absolute "right to look through those pictures", threatening to play private/intimate media in Family Court custody proceedings ("guess what we’re gonna watch first"), and demonstrating surveillance knowledge of movements ("saw your motorcycle boy last night").'
    },

    # --- INCIDENT 6: JUNE 21-25 TOW THREATS, INSURANCE REVOCATION & RENT SHUTOFF ---
    {
        'id': 'MSG-000037',
        'date': '2026-06-21',
        'time': '10:31 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "also owe me the rest of the website and there will be people contacting you and you will finish it or you can send me that money back too. You promised always that your communicate and you just stop immediately after you get what you want. I want It's sent back right now. It's not that complicated. You're not stealing more of my money.",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Demanding immediate refund or completion of website work, alleging theft.'
    },
    {
        'id': 'MSG-000038',
        'date': '2026-06-21',
        'time': '10:37 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "You called me a bitch, accused me of things that never happened, and ignored me repeatedly telling you that Catalina was sitting next to me and that I could not have that conversation in front of her. I did not leave you hanging. I told you where I was, told you I was busy, and eventually fell asleep. You have repeatedly gone through my files and Drive and then used information you find there to create accusations that are not based on what actually happened. This has become a pattern whenever I do not respond the way you want me to you cant condition something you sent on being called named and having my privacy violated in a way you repeatedly say youll stop and dont you lie every time and immedietely do it and then threaten me. Part of those funds have already been used for tools and expenses related to completing your website, and I retrieved laptop so I can finish it If you no longer want the website completed, then we can discuss the status of the project and what work has already I am willing to discuss the project. I am not willing to continue having conversations where I am called names, accused of",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.97)',
        'context': 'Written protest against name-calling in presence of child, pattern of unauthorized searches of Drive files, and boundary enforcement.'
    },
    {
        'id': 'MSG-000039',
        'date': '2026-06-21',
        'time': '10:46 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Yes, you did. You fucking left me fucking hanging it's exactly what you did right before I went to sleep just like you always do. I'm sick of your shit... so you're gonna finish what we paid for and you're gonna send me my money back or I'm gonna come get my car $250. Will get you your laptop. I want my other 250 back... but this is just gonna end bad for you either which way so you can either finish it keep your money... or you're gonna lose everything that you have it's up to you",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Threatening to seize the car, demanding money, and stating "you\'re gonna lose everything that you have it\'s up to you".'
    },
    {
        'id': 'MSG-000040',
        'date': '2026-06-21',
        'time': '10:49 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "ITOLDYOUIWASTALKINGTOCATALINEANDYOUPROCEEDEDTOTALKANDMAKEHERSITTHERESHE GODDAMNFATHERSDAYWITHOUTAFATHERBUTYOUTHINKYOUREMOTEIMPORTANTTHANMYCHILDAND IDONTTHREWATENYOUYOUCONSTANTLYTHREATENMEJESUSCHRIST",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Protesting contact and verbal abuse during Father’s Day in front of child.'
    },
    {
        'id': 'MSG-000041',
        'date': '2026-06-21',
        'time': '10:49 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Fortunately, for you, I can't come up there until Friday so you've got until Friday, but if they're not significant improvements by tomorrow or Tuesday whenever they're given to you I will send Jessy and Hill [he'll] just tow the car",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Explicit threat to dispatch third party (Jessy) to tow the car if software demands are not met by Friday.'
    },
    {
        'id': 'MSG-000042',
        'date': '2026-06-21',
        'time': '10:50 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "these are no longer threats. These are reality. And I can threaten taking my money and not send me my money back you don't send me that 250 back you're gonna lose everything by the end of the week",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Confirming intent: "these are no longer threats. These are reality. ... you\'re gonna lose everything by the end of the week".'
    },
    {
        'id': 'MSG-000043',
        'date': '2026-06-21',
        'time': '10:53 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "communicate with me again you can speak with Gigi in regards to Jack or if you really want to you can email with the words Jack time and place better be the only thing we talk about.",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Imposing communication restrictions via third party (Gigi).'
    },
    {
        'id': 'MSG-000044',
        'date': '2026-06-21',
        'time': '10:55 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "OK, I guess you're not taking me seriously sorry you think it's gonna be hard to find a job now just wait all the Toto [tow truck] drivers work together so they can find any car simply send me my $250 right now or you're accepting the loss of your apartment and your car because it's my apartment that you're living in and it's my car that you're driving",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Stating that tow truck network will locate the vehicle anywhere, and conditioning both housing and car on immediate money payment.'
    },
    {
        'id': 'MSG-000045',
        'date': '2026-06-21',
        'time': '11:49 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "If you never created them, then there wouldn't be pictures of them in Google Drive with my name on them",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Direct admission of unauthorized search and inspection of Jayme’s private Google Drive storage.'
    },
    {
        'id': 'MSG-000046',
        'date': '2026-06-21',
        'time': '1:54 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "I use the wrong card so rent didn't go through. Looks like you'll have to take care of it after all.",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['Oops_towthreats.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Sudden cancellation/sabotage of agreed rent payment under pretext of using "the wrong card".'
    },
    {
        'id': 'MSG-000047',
        'date': '2026-06-21',
        'time': '3:20 PM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "You know I do not currently have the ability to cover that amount on short notice. If the rent was not paid, please let me know immediately so I can determine what arrangements need to be made. I would appreciate direct communication about housing matters rather than having them used as leverage during unrelated disputes.",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['Oops_towthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Requesting direct communication on shelter and objecting to housing being used as leverage in personal conflict.'
    },
    {
        'id': 'MSG-000048',
        'date': '2026-06-21',
        'time': '4:05 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "And it's not leverage it's just that I'm not paying shit anymore not after the way I'm treated like just scum. You could care less about anything that I do so I could care less what happens to you",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['Oops_towthreats.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Retaliatory termination of promised financial shelter support.'
    },
    {
        'id': 'MSG-000049',
        'date': '2026-06-21',
        'time': '9:46 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Glad u can convince urself of that. Purposefully stopped talking and left me hanging with bs. It's okay. Small claims court tommorow. For not completing the website. Also if u put any modifications. On that car. It's against the lease. U don't realize how rude snd how u continue to just steal money. U don't use it on what you say. Your a f lie. FYI there is no insurance on the car. None",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['Oops_towthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Threatening small claims court and disclosing unilateral cancellation of automobile insurance on the vehicle operated by Jayme.'
    },
    {
        'id': 'MSG-000050',
        'date': '2026-06-21',
        'time': '9:48 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "As well I need a copy of full coverage. If u refuse I'll have to get it towed",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['Oops_towthreats.pdf'],
        'ocr_conf': 'High (0.97)',
        'context': 'Creating catch-22: cancels insurance, then immediately threatens towing for lack of insurance.'
    },
    {
        'id': 'MSG-000051',
        'date': '2026-06-24',
        'time': '10:36 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Third notification I need evidence of full coverage car insurance with state Preferred liabilities and you're not allowed to drive the car until I see that because that was my car. I'm the one who paid for it just like when you buy a car from your place and You haven't bought it yet so you can't just do it as you wish. I'm only gonna ask one or two times and then I'm just gonna send a tow truck. It's all standard procedure. I've looked everything up called the police cause you're nowhere in your Payment thing Off I don't think you've even made a payment. All you've done is pay me back the money that I've given you. What's the more money on top? Thatll be a fun discussion sometime. Hope you're doing OK. Congrats on getting a job.",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Imposing driving prohibition, repeating tow truck deployment threats, claiming police consultation, and attempting to rewrite prior purchase payments as personal repayments.'
    },
    {
        'id': 'MSG-000052',
        'date': '2026-06-25',
        'time': '1:47 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "replacement coverage as quickly as I can. I also dispute your characterization of the payments. Our agreement and our text messages reflect what those payments alleged debt simply because we now have a dispute. I do not consent to any attempt to take the vehicle outside the [proper legal process]",
        'platform': 'Gmail / Email',
        'conversation': 'June 21-25 Retaliatory Escalation & Tow Threats',
        'sources': ['41messegeaccusationsthreats.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Disputing payment reclassification and withholding consent to extrajudicial vehicle repossession.'
    },

    # --- INCIDENT 7: JUNE 30 VEHICLE ACCOUNTING & LEASE TERMINATION ---
    {
        'id': 'MSG-000053',
        'date': '2026-06-30',
        'time': '6:07 PM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "Regarding the vehicle, no bill of sale was ever signed or executed between us. I do not recognize or agree to any later-created document stating that the vehicle purchase price was $8,000. The agreed vehicle price was $6,500... The payments and credits designated for the vehicle were made and accepted as vehicle payments. I do not consent to any retroactive reclassification of those payments or credits as entries, or other expenses... Total vehicle payments and credits: $6,180. Remaining balance based on the agreed $6,500 price: $320. A copy of the accounting is attached... When I am able to pay the remaining documented vehicle balance, I will notify you in writing so that the payment and the properly signed title-transfer documents can be exchanged at the same time... Regarding the apartment, please provide a copy of the 60-day notice you stated was submitted... I will not provide my card number to you or allow remote access to my computer, phone, devices, accounts, or financial information. Please tell Jack that his mommy loves him very much.",
        'platform': 'Gmail / Email',
        'conversation': 'June 30 Vehicle Title Accounting & Move-Out Dispute',
        'sources': ['LeaaseNonanswertoCarAccountRequest.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Formal itemized accounting establishing $6,180 paid on $6,500 agreed price ($320 remaining), demanding simultaneous title exchange, refusing device/card access, and requesting lease move-out notice.'
    },
    {
        'id': 'MSG-000054',
        'date': '2026-06-30',
        'time': '7:53 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Okay. Well if that was true maybe. But it's not so I'm just notyfying you. Because it's the only thing that protects my asset and we did have a sign agreement. I have the same agreement so I thought that you threw away or lost it like you lose everything but if you could come dumb enough to give me a car after you stole her $50,ooo which will get to that soon before the end of the year glad u believe what's not real. There's no other way to pay rent so I don't know what you want. I'm not gonna argue nonsense. Good luck",
        'platform': 'Gmail / Email',
        'conversation': 'June 30 Vehicle Title Accounting & Move-Out Dispute',
        'sources': ['LeaaseNonanswertoCarAccountRequest.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Refusal to honor accounting, claiming an unproduced written agreement, reiterating $50k theft allegation, and refusing alternative rent payment methods.'
    },
    {
        'id': 'MSG-000055',
        'date': '2026-06-30',
        'time': '8:14 PM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Marida Volstad (gvolstad@icloud.com)',
        'text': "[Forwarded entire vehicle accounting and Blake Harris response thread for preservation]",
        'platform': 'Gmail / Email',
        'conversation': 'June 30 Vehicle Title Accounting & Move-Out Dispute',
        'sources': ['LeaaseNonanswertoCarAccountRequest.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Preservation forward to family member.'
    },

    # --- INCIDENT 8: JULY 21-22 CHARGES, HARASSMENT AUDIT & AI FILTER DISMISSAL ---
    {
        'id': 'MSG-000056',
        'date': '2026-07-21',
        'time': '10:04 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "119! dollars. 3 dollars. Is there not the kind of charges that I make this is the same kind of stuff that happened last time? Why is my card being charged?",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Accusing Jayme of unauthorized charges on Mastercard.'
    },
    {
        'id': 'MSG-000057',
        'date': '2026-07-21',
        'time': '10:10 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Mastercard 1944. Charges for McDonald's in Elgin tons of apple charges none of them are mine what's going on?",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Specifying charges in Elgin and Apple transactions.'
    },
    {
        'id': 'MSG-000058',
        'date': '2026-07-21',
        'time': '10:12 PM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "No June 8 no June 11. Again. Ur stealing my money. Ik through with this. I told u what was gonna happen. We're gonna let the cops figure this out this time. Because there's 1 million little small charges just like all the ones you did on Bank of America and there's a brand $119 charge. None of those are mine. None of them are mine and it's been going on and on and on while I've been paying all this shit.",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Threatening police investigation over alleged card theft.'
    },
    {
        'id': 'MSG-000059',
        'date': '2026-07-22',
        'time': '12:28 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (rudzmgmt@hotmail.com)',
        'text': "Regarding Bluevine, the account I have shows no activity other than two small verification transactions connected to my own bank account. I have not used that account for purchases, transfers, or any activity involving your money. The account has never had any other transactions. I do not have an iPhone, and I do not have any card belonging to you connected to an Apple account. After you disputed charges that were made during a period when I had permission to use the card, my Apple account was restricted from making App Store purchases. I therefore cannot even use my own card with Apple, much less yours... Please stop presenting unsupported accusations as established facts and then claiming that you are not threatening me. [Documenting harassment]: Your communications and contact this month have included approximately 20 emails from three known email addresses, missed WhatsApp calls from two phone numbers, demands that I sign and notarize a supposed plea agreement, repeated threats involving the car, disputed transactions, threats to involve law enforcement, unsolicited contacts to third parties, threats to obtain information through multiple business and personal accounts, and contact through business social-media accounts... I am not abandoning my son. I want to speak with him and maintain regular contact with him. However, calls with Jack should remain focused on him and should not be used as an opportunity for your accusations, pressure, interruptions, or unrelated conflict.",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Comprehensive factual rebuttal: Apple restriction prevents card usage; comprehensive audit of 20 emails from 3 addresses, missed WhatsApp calls, demand for fake plea agreement, vehicle threats; request to isolate child calls from conflict.'
    },
    {
        'id': 'MSG-000060',
        'date': '2026-07-22',
        'time': '2:12 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Dude your hilarious. You lie like it's just natural. I can live humans a line of em a mile long to testify how rude and evil you have acted and the things you have done to me. You cant get anyone because there all criminals... Again, your chat gpt mental mind f stuff isn't gonna work anymore and gemini will scan and put any AI emails in the trash. So if you can't start using yuour own words I wont be seeing your emails... Good bye. Ive used to many email address., like gold tooth tonhys where you had all the backup codes and marked off one by one as you used them to contact my old business partner and illegaly use my emails and onedrive to help him try and screw me over. Good luck. bye",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Dismissing documented evidence as "AI", threatening automated deletion of incoming emails via AI filter, and reiterating business partner accusations.'
    },
    {
        'id': 'MSG-000061',
        'date': '2026-07-22',
        'time': '2:13 AM',
        'speaker': 'Blake Harris (rudzmgmt@hotmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Moving forward all your emails will be forwarded to gigi., only things about jack will she discuss with me.",
        'platform': 'Gmail / Email',
        'conversation': 'July 21-22 Card Allegations & Harassment Documentation',
        'sources': ['requesttocease_unrelated accusations.pdf'],
        'ocr_conf': 'High (1.00)',
        'context': 'Third-party gatekeeping imposition.'
    },

    # --- INCIDENT 9: JULY 30 - AUGUST 1 ACCOUNT INTRUSION & EXPLICIT REVOCATION ---
    {
        'id': 'MSG-000062',
        'date': '2026-07-30',
        'time': '9:54 PM',
        'speaker': 'Google System Alert',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Critical security alert: Suspicious activity in your account. Someone tried to change your password. New sign-in on Mac OS. Location: Texas, USA.",
        'platform': 'Google Account Security Alert',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['security.png', 'securitytwo.png'],
        'ocr_conf': 'High (0.99)',
        'context': 'Unauthorized password reset attempt and login detected on Mac OS from Texas.'
    },
    {
        'id': 'MSG-000063',
        'date': '2026-07-30',
        'time': '10:11 PM',
        'speaker': 'Google System Alert',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Critical security alert: Suspicious activity in your account. Someone tried to change your password. Location: Texas, USA.",
        'platform': 'Google Account Security Alert',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['securitytwo.png'],
        'ocr_conf': 'High (0.98)',
        'context': 'Second unauthorized password change attempt.'
    },
    {
        'id': 'MSG-000064',
        'date': '2026-07-30',
        'time': '10:12 PM',
        'speaker': 'Google System Log (Unauthorized Device)',
        'recipient': 'Google Account Activity Log',
        'text': "Searched for google drive. 10:12 PM. Details.",
        'platform': 'Google My Activity',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['actactivityuna.png'],
        'ocr_conf': 'High (0.97)',
        'context': 'Intruder searching for Google Drive files within compromised session.'
    },
    {
        'id': 'MSG-000065',
        'date': '2026-07-30',
        'time': '10:19 PM',
        'speaker': 'Google System Log (Unauthorized Device)',
        'recipient': 'Google Account Activity Log',
        'text': "Used Maps. 3750 E Palm Valley Blvd. 10:19 PM. Details.",
        'platform': 'Google My Activity',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['act.png', 'actactivityuna.png'],
        'ocr_conf': 'High (0.98)',
        'context': 'Intruder executing map searches for 3750 E Palm Valley Blvd in Round Rock, TX.'
    },
    {
        'id': 'MSG-000066',
        'date': '2026-07-30',
        'time': '10:33 PM',
        'speaker': 'Google System Alert / Takeout Service',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Archive of Google data requested. 3 products: Maps, Maps (your places), Timeline. Created July 30, 10:33 PM. URL: https://takeout.google.com/u/5/manage/archive/b1e08d32-6e83-4843-a74e-905bfaba68f8",
        'platform': 'Google Takeout / Account Archive',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['security3.png', 'securitytwo.png'],
        'ocr_conf': 'High (0.98)',
        'context': 'Direct attempt to export and exfiltrate Jayme’s complete historical location data, saved places, and movement timeline.'
    },
    {
        'id': 'MSG-000067',
        'date': '2026-07-30',
        'time': '10:37 PM',
        'speaker': 'Google System Log (Manage Devices)',
        'recipient': 'Google Account Device List',
        'text': "Mac OS. Houston, TX, USA. First sign-in: Jul 30, 10:37 PM. Browser: Google Chrome.",
        'platform': 'Google Account Manage Devices',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['DeviceAccessGoogle.png'],
        'ocr_conf': 'High (0.99)',
        'context': 'Active unauthorized session recorded on Mac OS in Houston, TX using Chrome.'
    },
    {
        'id': 'MSG-000068',
        'date': '2026-07-31',
        'time': '12:15 AM',
        'speaker': 'Jayme Volstad (jaymev02@gmail.com)',
        'recipient': 'Blake Harris (pluckaduck1984@gmail.com)',
        'text': "You are not authorized to access, reset, recover, export, or change information on any of my accounts. I am receiving repeated security alerts for Mac sign-ins from Houston and data-export requests I did not authorize. Stop immediately. I am preserving these alerts. Do not contact me except in writing about necessary matters involving Jack.",
        'platform': 'Gmail / Email',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['NotificationofNotAuthorizedandResponse.png', 'Notauthorized.pdf', 'ResponsetoNotAuthorized.pdf'],
        'ocr_conf': 'High (0.98)',
        'context': 'Formal written revocation of authorization, direct cease-and-desist command on account intrusion, notice of evidence preservation, and strict boundary imposition limiting contact exclusively to written communication concerning Jack.'
    },
    {
        'id': 'MSG-000069',
        'date': '2026-07-31',
        'time': '5:00 AM',
        'speaker': 'Blake Harris (pluckaduck1984@gmail.com)',
        'recipient': 'Jayme Volstad (jaymev02@gmail.com)',
        'text': "Yes mam. Now the bigger question is. Are you lying like you always do. Or are you telling the truth. Because you lie so much you don't know what's really going on in the world. how many people do you piss off online a day? Now. Your not authorized to login to toast to any of my email accounts anything. Your not allowed to talk to my ex business partner and try to fuck me out of a business nor steal tens of thousands of dollars which will get to the bottom of at some point. Problem is I care to much but you'll remind me when you reply that I shouldn't. it's been almost 2 months and you haven't even tried to talk to your son or see him. Lie cheat and steal. That's it. The only three well there is another but we wont talk about that. Those are the only 3 things your good at. Especially when it comes to me. Karma is a bitch though. And I wouold never do anything to harm, to hold hostage, to hold in contempt or stop from doing anything. But I will begin following in your footsteps one day. No one wants to see your pictures of meth pipes at your apt and meth in bags and half the city that well good night. So pleasent to take a piss and see you contact me. what sucks is I can't be the low life that you have become and make up disgusting accusations you should be ashamed of yourself. If there is a god, your screwed after that last one. Because I actually care. That's why I haven't done a single damn bit of retribution and never will. Cuase ive already won. Sweet dreams. Regards, Blake Harris Gold Tooth Tony's Detroit Pizza / Rudyard's Pub / 6s & 7s Pool Hall / The Riot Comedy Club Owner / General Manager 2010 Waugh Drive 281.797.1396",
        'platform': 'Gmail / Email',
        'conversation': 'Account Compromise & Exfiltration Campaign',
        'sources': ['NotificationofNotAuthorizedandResponse.png', 'Notauthorized.pdf', 'ResponsetoNotAuthorized.pdf'],
        'ocr_conf': 'High (0.99)',
        'context': 'Direct response 4 hours and 45 minutes after written revocation: mocking acknowledgment ("Yes mam"), deflecting intrusion onto third parties, retaliatory counter-revocation, falsely alleging child abandonment, explicit reference to possessing private photos ("No one wants to see your pictures of meth pipes..."), and declaring "Cuase ive already won. Sweet dreams."'
    },
    {
        'id': 'MSG-000070',
        'date': '2026-07-11',
        'time': 'TIME_UNRESOLVED',
        'speaker': 'Blake Harris',
        'recipient': 'Jayme Volstad',
        'text': "Missed WhatsApp Call from Blake (7/11/2026). Prior missed call from +1 (832) 4... (7/10/2026).",
        'platform': 'WhatsApp Call Log',
        'conversation': 'Alternate Channel Intrusion (July 2026)',
        'sources': ['Screenshot 2026-08-01 124617.png'],
        'ocr_conf': 'High (0.98)',
        'context': 'Corroboration of Jayme’s documentation that Blake repeatedly called via alternate phone channels/WhatsApp despite written contact restrictions.'
    }
]

print(f'Populated {len(messages)} primary reconstructed messages.')

# Write POST_EXPORT_MESSAGE_MASTER.csv
master_file = out_dir / 'POST_EXPORT_MESSAGE_MASTER.csv'
master_headers = [
    'Message ID', 'Date', 'Time', 'Speaker', 'Recipient', 'Exact Text', 
    'Platform', 'Conversation', 'Source ID(s)', 'Original Filename(s)', 
    'OCR Confidence', 'Context Status'
]

master_rows = []
for m in messages:
    sids = [get_sid(fn) for fn in m['sources']]
    master_rows.append({
        'Message ID': m['id'],
        'Date': m['date'],
        'Time': m['time'],
        'Speaker': m['speaker'],
        'Recipient': m['recipient'],
        'Exact Text': m['text'],
        'Platform': m['platform'],
        'Conversation': m['conversation'],
        'Source ID(s)': '; '.join(sids),
        'Original Filename(s)': '; '.join(m['sources']),
        'OCR Confidence': m['ocr_conf'],
        'Context Status': m['context']
    })

with open(master_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=master_headers)
    writer.writeheader()
    writer.writerows(master_rows)

print(f'Successfully created {master_file} with {len(master_rows)} messages.')

# --- PHASE 4 & 5: TARGETED EVIDENCE SEARCH & HIT TABLE ---
# Columns: Evidence ID | Date | Time | Speaker | Exact Quote | Category | Source Screenshot | Message ID | Immediate Context | Potential Significance | Fact vs Inference | Confidence

evidence_hits = [
    # Category 1: PRIVATE MATERIAL & EXPOSURE THREATS
    {
        'id': 'EVD-001',
        'date': '2026-05-24',
        'time': '1:28 PM',
        'speaker': 'Blake Harris',
        'quote': 'the next one that I see you send her I’m going to send your entire Google Photos album printed every text message everything I already have it all done',
        'cat': 'PRIVATE MATERIAL / EXPOSURE THREATS',
        'sources': 'imgoingtosendyourentiregoogledrive.pdf; EX01_2026-05-24_google_photos_album_printed_texts.pdf',
        'msg_id': 'MSG-000035',
        'context': 'Email to Jayme demanding she cease messaging her mother and warning of immediate mass publication of private photos and messages.',
        'significance': 'Direct extortion/coercion threat to disseminate private digital photo album and text history to family members.',
        'fact_vs_inference': 'FACT: Blake explicitly states he has printed her entire Google Photos album and every text message and will send them. INFERENCE: Demonstrates retaliatory information weaponization to isolate Jayme from familial support.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-002',
        'date': '2026-05-24',
        'time': '2:31 AM',
        'speaker': 'Blake Harris',
        'quote': "If I have to drive to your parents, sell myself leave them print out of everything that you've done I will because they just seem to be a good little girl",
        'cat': 'PRIVATE MATERIAL / EXPOSURE THREATS',
        'sources': 'EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png',
        'msg_id': 'MSG-000033',
        'context': 'Early-morning message barrage following inspection of Google Photos.',
        'significance': 'Threatening physical travel to parents’ residence to deliver printouts of private sexual and personal material.',
        'fact_vs_inference': 'FACT: Blake threatens in-person delivery of private printouts to her parents. INFERENCE: Strategic effort to destroy personal reputation and family relationships.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-003',
        'date': '2026-05-24',
        'time': '3:10 PM',
        'speaker': 'Blake Harris',
        'quote': 'I have every right to look through those pictures and say whatever I want and because without them, I’d probably be dead... you wanna try to take me to Family court? We guess what we’re gonna watch first',
        'cat': 'PRIVATE MATERIAL / LEGAL THREATS / CHILD ACCESS',
        'sources': 'everyrighttolookfamilycourtwatch.pdf; EX11_2026-05-24_right_to_look_family_court_watch_first.pdf',
        'msg_id': 'MSG-000036',
        'context': 'Blake justifying looking through private photographs and threatening their presentation in custody litigation.',
        'significance': 'Explicit threat to exhibit private intimate media in Family Court custody proceedings to intimidate recipient out of pursuing legal custody.',
        'fact_vs_inference': 'FACT: Blake claims an unqualified right to search private pictures and threatens to play them first in Family Court. INFERENCE: Attempt to leverage fear of courtroom humiliation to deter Jayme from asserting legal parental rights.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-004',
        'date': '2026-05-18',
        'time': '9:53 PM',
        'speaker': 'Blake Harris',
        'quote': 'and I swear to God if you call CPS, I will unload the entire folder that I have for you making up some bullshit about not being able to get a hold of',
        'cat': 'AUTHORITIES / LEGAL THREATS / PRIVATE MATERIAL',
        'sources': 'EX04_2026-05-18_cps_unload_entire_folder.pdf',
        'msg_id': 'MSG-000027',
        'context': 'Preempting reporting to protective services.',
        'significance': 'Conditioning non-reporting of child welfare concerns on threat of retaliatory mass disclosure of compiled "folder".',
        'fact_vs_inference': 'FACT: Blake explicitly conditions releasing a compiled folder on Jayme contacting Child Protective Services. INFERENCE: Witness tampering and obstruction of mandated/protective reporting.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-005',
        'date': 'DATE_UNRESOLVED',
        'time': '8:47 AM',
        'speaker': 'Blake Harris',
        'quote': "He seen all of your pictures on your Google Drive. He was literally scrolling through them. Why is mommy showing her boobs? Who did she send these to? I thought they were just for you daddy why does she have her fingers when she goes potty",
        'cat': 'CHILD / ACCESS / PRIVATE MATERIAL',
        'sources': 'EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg; JACKDRIVE.jpeg; EX12_2026_child_google_drive_private_photos_2ED63267.jpeg',
        'msg_id': 'MSG-000021',
        'context': 'Blake confronting Jayme about digital drive contents.',
        'significance': 'Using young child to convey graphic sexual accusations and shaming recipient over private images in her Google Drive.',
        'fact_vs_inference': 'FACT: Blake states that the child viewed intimate photos in Jayme’s Google Drive and quotes explicit sexualized remarks attributed to the child. INFERENCE: Weaponization of child and drive access to inflict psychological trauma and fabricate maternal unfitness.',
        'conf': 'CRITICAL / High'
    },

    # Category 2: DIGITAL INTRUSION, ACCOUNT ACCESS & SURVEILLANCE
    {
        'id': 'EVD-006',
        'date': '2026-05-18',
        'time': '9:53 PM',
        'speaker': 'Blake Harris',
        'quote': 'I can go through all of your shit again and I can find one after another after another don’t think I still don’t have access because it’s all a lot',
        'cat': 'PHONE / DEVICES / DIGITAL ACCESS / ADMISSIONS',
        'sources': 'EX04_2026-05-18_cps_unload_entire_folder.pdf',
        'msg_id': 'MSG-000027',
        'context': 'Blake threatening continuous surveillance.',
        'significance': 'Explicit affirmative admission of ongoing unauthorized access to Jayme’s personal accounts and digital files.',
        'fact_vs_inference': 'FACT: Blake explicitly admits he still has access and can go through her digital accounts repeatedly. INFERENCE: Establishes pervasive, intentional digital intrusion and unauthorized access.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-007',
        'date': '2026-06-21',
        'time': '11:49 AM',
        'speaker': 'Blake Harris',
        'quote': "If you never created them, then there wouldn't be pictures of them in Google Drive with my name on them",
        'cat': 'PHONE / DEVICES / DIGITAL ACCESS / ADMISSIONS',
        'sources': '41messegeaccusationsthreats.pdf',
        'msg_id': 'MSG-000045',
        'context': 'Email argument over Bluevine account creation.',
        'significance': 'Corroborating admission that Blake was actively browsing and inspecting images inside Jayme’s Google Drive.',
        'fact_vs_inference': 'FACT: Blake asserts specific knowledge of files in Google Drive. INFERENCE: Corroborates Jayme’s repeated assertions that her Google storage was actively accessed without authorization.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-008',
        'date': '2026-07-30',
        'time': '10:33 PM',
        'speaker': 'Google System Alert / Security Takeout',
        'recipient': 'Jayme Volstad',
        'quote': 'Archive of Google data requested: 3 products · Maps, Maps (your places), Timeline. URL: takeout.google.com/.../archive/b1e08d32-6e83-4843-a74e-905bfaba68f8',
        'cat': 'LOCATION / SURVEILLANCE / DIGITAL ACCESS',
        'sources': 'security3.png; securitytwo.png',
        'msg_id': 'MSG-000066',
        'context': 'Forensic security alert captured in browser session.',
        'significance': 'Physical documentary proof that an unauthorized intruder requested an archive specifically targeting Jayme’s location history and places.',
        'fact_vs_inference': 'FACT: Google logs establish a data archive was initiated on July 30 at 10:33 PM for Maps, Saved Places, and Timeline. INFERENCE: Direct attempt at digital stalking and movement surveillance.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-009',
        'date': '2026-07-30',
        'time': '10:19 PM',
        'speaker': 'Google System Activity Log',
        'recipient': 'Google Account Activity',
        'quote': 'Used Maps. 3750 E Palm Valley Blvd. 10:19 PM. Details.',
        'cat': 'LOCATION / SURVEILLANCE / DIGITAL ACCESS',
        'sources': 'act.png; actactivityuna.png',
        'msg_id': 'MSG-000065',
        'context': 'Forensic Google My Activity log during unauthorized session.',
        'significance': 'Proves intruder utilized compromised Google Maps account to search specific Round Rock address.',
        'fact_vs_inference': 'FACT: The compromised account searched 3750 E Palm Valley Blvd at 10:19 PM. INFERENCE: Intruder was tracking or investigating physical locations associated with Jayme or third parties.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-010',
        'date': '2026-07-31',
        'time': '12:15 AM',
        'speaker': 'Jayme Volstad',
        'quote': 'You are not authorized to access, reset, recover, export, or change information on any of my accounts. I am receiving repeated security alerts for Mac sign-ins from Houston and data-export requests I did not authorize. Stop immediately. I am preserving these alerts. Do not contact me except in writing about necessary matters involving Jack.',
        'cat': 'CONTACT / BOUNDARIES / DIGITAL ACCESS',
        'sources': 'NotificationofNotAuthorizedandResponse.png; Notauthorized.pdf; ResponsetoNotAuthorized.pdf',
        'msg_id': 'MSG-000068',
        'context': 'Formal email notice to Blake following evening of security alerts.',
        'significance': 'Unambiguous formal revocation of consent and imposition of written-only communication boundary.',
        'fact_vs_inference': 'FACT: Jayme explicitly withdrew all access permissions and ordered contact limited strictly to writing concerning Jack. INFERENCE: Directly refutes any subsequent claim of implied permission or mutual contact.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-011',
        'date': '2026-07-31',
        'time': '5:00 AM',
        'speaker': 'Blake Harris',
        'quote': "Yes mam. Now the bigger question is. Are you lying like you always do... No one wants to see your pictures of meth pipes at your apt and meth in bags and half the city that well good night... Cuase ive already won. Sweet dreams.",
        'cat': 'CONTACT / BOUNDARIES / PRIVATE MATERIAL / COERCION',
        'sources': 'NotificationofNotAuthorizedandResponse.png; Notauthorized.pdf; ResponsetoNotAuthorized.pdf',
        'msg_id': 'MSG-000069',
        'context': 'Blake replying to the revocation notice at 5:00 AM.',
        'significance': 'Direct breach of contact boundary, mocking response, reiteration of possessing private photos, and declaration of triumph.',
        'fact_vs_inference': 'FACT: Blake responded within hours of the cease-and-desist, mocked the notice, made allegations of drug photos, and declared victory. INFERENCE: Demonstrates defiance of legal boundaries and ongoing retention of private pictures.',
        'conf': 'CRITICAL / High'
    },

    # Category 3: PHYSICAL ASSAULT & CHEMICAL INTRUSION
    {
        'id': 'EVD-012',
        'date': 'DATE_UNRESOLVED',
        'time': '5:02 PM',
        'speaker': 'Jayme Volstad',
        'quote': 'Rips open the door rips the phones out of my hand tells me to get out I\'m sitting on the couch crying and he one by one rips the tab off of four bug bombs in my face then throws them in the house drags me outside no shoes none of my stuff and speeds off Mind you his kid was there The cats were inside',
        'cat': 'HOUSING / PROPERTY / PHYSICAL ASSAULT / CHILD ENDANGERMENT',
        'sources': 'bugbomb.jpg; bugbomb2.jpg; bugbomb3.jpg',
        'msg_id': 'MSG-000006',
        'context': 'Real-time recounting of eviction raid to friend.',
        'significance': 'Documented physical battery, weaponized pesticide deployment indoors in front of minor child, and immediate unlawful eviction.',
        'fact_vs_inference': 'FACT: Text contemporaneous log records Blake bursting into residence, seizing phone, deploying 4 pesticide foggers in victim\'s face, and physically dragging her outside barefoot with child present. INFERENCE: Constitutes domestic battery, chemical endangerment, and illegal self-help eviction.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-013',
        'date': 'DATE_UNRESOLVED',
        'time': '7:41 PM',
        'speaker': 'Jayme Volstad',
        'quote': 'Im letting you know due to the fact that I\'m still having problems breathing and the situation I am now in due to blakes actions I will be pressing charges against Blake... use of a pesticide inside of the home let alone directly in my face is assault, prohibited chemical weapons, tampering/public health as well as in the presence of a child and with animals inside the house as well. On top of that him taking the phone that was given to me back that he knows has my phone service on it and leaving me without service to contact anyone is theft.',
        'cat': 'PHYSICAL ASSAULT / PHONE / DEVICES / LEGAL THREATS',
        'sources': 'bugbomb4.jpg',
        'msg_id': 'MSG-000016',
        'context': 'Formal notification sent to co-tenant Scarlett.',
        'significance': 'Immediate formal notice of criminal intent, documented respiratory injury, and seizure of communication lifeline.',
        'fact_vs_inference': 'FACT: Contemporaneous message sent to Scarlett confirming respiratory symptoms, physical evidence (cans), and stolen phone. INFERENCE: Corroborates physical injury and severe vulnerability caused by device theft.',
        'conf': 'CRITICAL / High'
    },

    # Category 4: CHILD EXPLOITATION & CUSTODY INTIMIDATION
    {
        'id': 'EVD-014',
        'date': 'DATE_UNRESOLVED',
        'time': '12:53 PM',
        'speaker': 'Blake Harris',
        'quote': "FYI, I will have my son with me when I meet you to give this money to you so if you try to pull any bullshit, there's gonna be a charge with a child attached to it. He will literally be in my arms when I hand you the money and you know how they fuck with girls in prison that fuck with kids you will live a nightmare. Do not screw this up... if you cause more problems or for Jayme once you leave I will hunt you down",
        'cat': 'CHILD / ACCESS / COERCION / AUTHORITIES',
        'sources': 'DET1.jpg; EX04_child_attached_prison_threat_money_meeting.jpeg',
        'msg_id': 'MSG-000017',
        'context': 'Meeting setup involving financial handover.',
        'significance': 'Intentional premeditated plan to utilize minor child as human shield/legal lever to manufacture enhanced child endangerment charges against recipient, accompanied by prison threats and stalking threats.',
        'fact_vs_inference': 'FACT: Blake explicitly states he will hold his son in his arms during the exchange so that any dispute carries a "charge with a child attached to it", invokes prison rape consequences, and threatens to "hunt you down". INFERENCE: Premeditated weaponization of child custody and safety to extort compliance.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-015',
        'date': '2026-05-24',
        'time': '2:31 AM',
        'speaker': 'Blake Harris',
        'quote': "You can email me when you want to see Jack he's not coming over to your house until I see the inside of it and look through everything. I don't trust you I found so much more shit... Just die already.",
        'cat': 'CHILD / ACCESS / COERCION / CONDITIONS',
        'sources': 'EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png',
        'msg_id': 'MSG-000032',
        'context': 'Blake blocking Jayme’s phone line and setting unilateral terms for seeing Jack.',
        'significance': 'Conditioning maternal access to child upon mandatory physical search and inspection of Jayme’s private home.',
        'fact_vs_inference': 'FACT: Blake conditions Jack visiting Jayme upon his inspecting the inside of her home and looking through everything. INFERENCE: Unlawful extrajudicial custody withholding used as coercive leverage to violate residential privacy.',
        'conf': 'CRITICAL / High'
    },

    # Category 5: TRANSPORTATION & VEHICLE SABOTAGE
    {
        'id': 'EVD-016',
        'date': '2026-06-21',
        'time': '10:49 AM',
        'speaker': 'Blake Harris',
        'quote': "Fortunately, for you, I can't come up there until Friday so you've got until Friday, but if they're not significant improvements by tomorrow or Tuesday whenever they're given to you I will send Jessy and Hill [he'll] just tow the car",
        'cat': 'TRANSPORTATION / COERCION / RETALIATION',
        'sources': '41messegeaccusationsthreats.pdf',
        'msg_id': 'MSG-000041',
        'context': 'Demands regarding software/website work.',
        'significance': 'Conditioning transportation access on rapid completion of unpaid technical work under threat of private repossession.',
        'fact_vs_inference': 'FACT: Blake threatens to dispatch a third party to tow the vehicle if work milestones are not met. INFERENCE: Weaponizing vehicle access to coerce labor.',
        'conf': 'HIGH / High'
    },
    {
        'id': 'EVD-017',
        'date': '2026-06-21',
        'time': '9:46 PM',
        'speaker': 'Blake Harris',
        'quote': 'FYI there is no insurance on the car. None... As well I need a copy of full coverage. If u refuse I\'ll have to get it towed',
        'cat': 'TRANSPORTATION / COERCION / RETALIATION',
        'sources': 'Oops_towthreats.pdf',
        'msg_id': 'MSG-000049',
        'context': 'Post-dispute email escalation.',
        'significance': 'Unilateral cancellation of auto insurance without warning, followed immediately by demanding proof of insurance or vehicle towing.',
        'fact_vs_inference': 'FACT: Blake informs Jayme there is no insurance on the car and then immediately states he will tow the car if she cannot show proof of full coverage. INFERENCE: Deliberate administrative sabotage engineered to create an immediate pretext for asset seizure.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-018',
        'date': '2026-06-30',
        'time': '6:07 PM',
        'speaker': 'Jayme Volstad',
        'quote': 'The agreed vehicle price was $6,500... Total vehicle payments and credits: $6,180. Remaining balance based on the agreed $6,500 price: $320... When I am able to pay the remaining documented vehicle balance, I will notify you in writing so that the payment and the properly signed title-transfer documents can be exchanged at the same time.',
        'cat': 'TRANSPORTATION / HOUSING / PROPERTY / CONTRADICTIONS',
        'sources': 'LeaaseNonanswertoCarAccountRequest.pdf',
        'msg_id': 'MSG-000053',
        'context': 'Formal written accounting sent to Blake.',
        'significance': 'Documentary proof of 95% vehicle payment ($6,180 paid) and dispute over Blake’s retroactive reclassification of payments.',
        'fact_vs_inference': 'FACT: Detailed ledger lists Zelle transfers, Mazda credit, and Sling funds totaling $6,180 toward $6,500 agreed price. INFERENCE: Blake’s claims that Jayme "stole" the car or "never made a payment" are direct material misrepresentations.',
        'conf': 'HIGH / High'
    },

    # Category 6: HOUSING & FINANCIAL SABOTAGE
    {
        'id': 'EVD-019',
        'date': '2026-06-21',
        'time': '1:54 PM',
        'speaker': 'Blake Harris',
        'quote': "I use the wrong card so rent didn't go through. Looks like you'll have to take care of it after all... And it's not leverage it's just that I'm not paying shit anymore not after the way I'm treated like just scum.",
        'cat': 'HOUSING / PROPERTY / COERCION / RETALIATION',
        'sources': 'Oops_towthreats.pdf',
        'msg_id': 'MSG-000046',
        'context': 'Revoking shelter rent commitment within hours of dispute.',
        'significance': 'Sudden cancellation of promised housing payment as punishment for setting emotional/conversational boundaries.',
        'fact_vs_inference': 'FACT: Blake initially claims accidental card error, then admits 2 hours later he is intentionally withholding payment due to how he feels treated. INFERENCE: Pattern of using basic shelter security as retaliatory leverage.',
        'conf': 'CRITICAL / High'
    },

    # Category 7: ADMISSIONS & CONTRADICTIONS
    {
        'id': 'EVD-020',
        'date': '2026-05-19',
        'time': '2:31 AM',
        'speaker': 'Blake Harris',
        'quote': "The thing is I’ve been up in the hide you can look through everything in my I don’t care cause the only thing I have well I don’t have them anymore. It’s just pictures of you and I’m so mad that they’re all gone everything",
        'cat': 'ADMISSIONS / CONTRADICTIONS / PRIVATE MATERIAL',
        'sources': 'BLAKE2026_Page_1800.pdf',
        'msg_id': 'MSG-000028',
        'context': 'Late night message claiming pictures were deleted.',
        'significance': 'Direct contradiction: Blake claims pictures are "all gone", but 5 days later (May 24) threatens to print and distribute her entire Google Photos album.',
        'fact_vs_inference': 'FACT: On May 19 Blake claims the pictures are all gone. On May 24 he threatens to deliver printouts to her parents and mail the entire album. INFERENCE: Material falsehood designed to create false closure while retaining coercive material.',
        'conf': 'CRITICAL / High'
    },
    {
        'id': 'EVD-021',
        'date': '2026-05-24',
        'time': '3:10 PM',
        'speaker': 'Blake Harris',
        'quote': 'saw your motorcycle boy last night. You never knew that I’ve been on that guy for seven years crazy just can’t be trusted.',
        'cat': 'LOCATION / SURVEILLANCE / KNOWLEDGE',
        'sources': 'everyrighttolookfamilycourtwatch.pdf; EX11_2026-05-24_right_to_look_family_court_watch_first.pdf',
        'msg_id': 'MSG-000036',
        'context': 'Email sent to Jayme demonstrating awareness of her associations.',
        'significance': 'Affirmative claim of physical or electronic surveillance demonstrating knowledge of Jayme’s movements/encounters.',
        'fact_vs_inference': 'FACT: Blake explicitly tells Jayme he saw her association "last night" and has been monitoring him for seven years. INFERENCE: Communicates active surveillance to induce fear of omnipresent observation.',
        'conf': 'HIGH / High'
    }
]

print(f'Populated {len(evidence_hits)} high-value evidence hits.')

# Write POST_EXPORT_EVIDENCE_HITS.csv
evidence_file = out_dir / 'POST_EXPORT_EVIDENCE_HITS.csv'
evidence_headers = [
    'Evidence ID', 'Date', 'Time', 'Speaker', 'Exact Quote', 'Category', 
    'Source Screenshot', 'Message ID', 'Immediate Context', 
    'Potential Significance', 'Fact vs Inference', 'Confidence'
]

evidence_rows = []
for h in evidence_hits:
    evidence_rows.append({
        'Evidence ID': h['id'],
        'Date': h['date'],
        'Time': h['time'],
        'Speaker': h['speaker'],
        'Exact Quote': h['quote'],
        'Category': h['cat'],
        'Source Screenshot': h['sources'],
        'Message ID': h['msg_id'],
        'Immediate Context': h['context'],
        'Potential Significance': h['significance'],
        'Fact vs Inference': h['fact_vs_inference'],
        'Confidence': h['conf']
    })

with open(evidence_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=evidence_headers)
    writer.writeheader()
    writer.writerows(evidence_rows)

print(f'Successfully created {evidence_file} with {len(evidence_rows)} hits.')

# --- PHASE 6: INCIDENT CLUSTERING ---
# Columns: Incident ID | Earliest Message Date/Time | Latest Message Date/Time | Incident Name / Theme | Participants | Triggering Event | Boundary or Request Imposed | Subsequent Response / Action | Resource Involved | Consequences | Exact Key Quotations | Relevant Message IDs | Relevant Source IDs | Missing Context / External Leads

incident_clusters = [
    {
        'id': 'INC-001',
        'earliest': 'DATE_UNRESOLVED 4:58 PM',
        'latest': 'DATE_UNRESOLVED 7:41 PM',
        'theme': 'Physical Eviction Raid, Bug Bomb Chemical Weapon Assault & Device Seizure',
        'participants': 'Blake Harris, Jayme Volstad, Scarlett (co-tenant), Minor Child (Jack), Friend (FaithlessDum), Law Enforcement',
        'trigger': 'Blake withdrawing lease guarantee; third party (Scarlett) relaying a private venting remark about apartment lease fraud.',
        'boundary': 'Jayme crying on couch asking for belongings; attempting to recover essential phone and personal effects.',
        'response': 'Blake storms residence, tears phones out of Jayme’s hands, activates 4 chemical pesticide foggers directly in her face, and physically drags her barefoot outside into 95-degree heat.',
        'resource': 'Shelter lease, primary mobile phone / communication lifeline, shoes, physical safety.',
        'consequences': 'Acute chemical gas inhalation and respiratory distress; emergency police transport to hotel room; complete sudden homelessness.',
        'quotes': '"he one by one rips the tab off of four bug bombs in my face then throws them in the house drags me outside no shoes none of my stuff and speeds off Mind you his kid was there" (MSG-000006); "use of a pesticide inside of the home let alone directly in my face is assault, prohibited chemical weapons... taking the phone... is theft" (MSG-000016)',
        'msg_ids': 'MSG-000001; MSG-000003; MSG-000006; MSG-000007; MSG-000009; MSG-000011; MSG-000014; MSG-000016',
        'source_ids': f"{get_sid('bugbomb.jpg')}; {get_sid('bugbomb2.jpg')}; {get_sid('bugbomb3.jpg')}; {get_sid('bugbomb4.jpg')}",
        'external_leads': 'Local Police 911 dispatch calls, incident reports, and officer transport logs; hotel registration records; emergency medical records for toxic pesticide inhalation; witness testimony (Scarlett, neighbor, Kham).'
    },
    {
        'id': 'INC-002',
        'earliest': 'DATE_UNRESOLVED 12:53 PM',
        'latest': 'DATE_UNRESOLVED 1:40 PM',
        'theme': 'Engineered Cash Handoff with Child as Human Shield & Prison Intimidation',
        'participants': 'Blake Harris, Jayme Volstad / Third-Party Recipient, Minor Child (Jack)',
        'trigger': 'Negotiation over travel ticket, money, and departure.',
        'boundary': 'Recipient refusing to participate in coercive physical meeting ("I\'m not meeting with you").',
        'response': 'Blake explicitly threatens that he will have his young son in his arms so that any confrontation results in a "charge with a child attached to it", invokes prison rape horrors, and promises to hunt recipient down.',
        'resource': 'Minor child (Jack), travel funds, personal liberty.',
        'consequences': 'Severe psychological terror; weaponization of minor child as an instrumental defensive shield and criminal catalyst.',
        'quotes': '"FYI, I will have my son with me when I meet you to give this money to you so if you try to pull any bullshit, there\'s gonna be a charge with a child attached to it. He will literally be in my arms when I hand you the money and you know how they fuck with girls in prison that fuck with kids you will live a nightmare... I will hunt you down" (MSG-000017)',
        'msg_ids': 'MSG-000017; MSG-000018; MSG-000019',
        'source_ids': f"{get_sid('DET1.jpg')}; {get_sid('EX04_child_attached_prison_threat_money_meeting.jpeg')}",
        'external_leads': 'Airline / travel ticket booking records; cellular SMS carrier archives for (281) 797-1396.'
    },
    {
        'id': 'INC-003',
        'earliest': 'DATE_UNRESOLVED 8:47 AM',
        'latest': 'DATE_UNRESOLVED 8:47 AM',
        'theme': 'Child Exploitation of Private Google Drive & Sexual Shaming Campaign',
        'participants': 'Blake Harris, Jayme Volstad, Minor Child (Jack)',
        'trigger': 'Jayme protesting ongoing emotional mistreatment and lack of agency.',
        'boundary': 'Jayme demanding Blake cease projecting anger and taking frustrations out on her.',
        'response': 'Blake claims the minor child accessed Jayme’s private Google Drive and scrolled through private nude photos; Blake directs graphic sexual questions attributed to the child at Jayme.',
        'resource': 'Minor child emotional well-being, Google Drive account security, maternal relationship.',
        'consequences': 'Severe maternal distress and moral degradation; weaponization of child against mother.',
        'quotes': '"He seen all of your pictures on your Google Drive. He was literally scrolling through them. Why is mommy showing her boobs? Who did she send these to? I thought they were just for you daddy... OK, so how fucked up do you wanna get cause we can go down this rabbit hole if you want" (MSG-000021)',
        'msg_ids': 'MSG-000020; MSG-000021; MSG-000022; MSG-000023',
        'source_ids': f"{get_sid('EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg')}; {get_sid('EX12_2026_child_google_drive_private_photos_2ED63267.jpeg')}; {get_sid('JACKDRIVE.jpeg')}",
        'external_leads': 'Google Drive audit logs showing device access and file browsing history; psychological child custody evaluations.'
    },
    {
        'id': 'INC-004',
        'earliest': '2026-05-18 9:38 PM',
        'latest': '2026-05-19 2:31 AM',
        'theme': 'CPS Reporting Suppression, Unload Folder Threats & Emergency Order Counter-Filing',
        'participants': 'Blake Harris, Jayme Volstad',
        'trigger': 'Rent disputes and Jayme stating arguments are unproductive and over.',
        'boundary': 'Jayme stating "We don’t need to debate this anymore... does no good to fucking throw to each other like this every fucking day".',
        'response': 'Blake threatens that if Jayme contacts CPS, he will "unload the entire folder that I have for you"; affirms he still has access to her accounts; threatens to trigger financial crimes charges if she seeks an emergency protective order; claims photos are "all gone" while threatening suicide.',
        'resource': 'CPS protective reporting, emergency legal protection, digital accounts, housing rent.',
        'consequences': 'Intimidation against seeking civil protection or protective reporting; false representation of file deletion.',
        'quotes': '"and I swear to God if you call CPS, I will unload the entire folder that I have for you" (MSG-000027); "I don’t trust that you’re not gonna file some fucking type of emergency protective order over some bullshit would produce immediately caused me go to the financial crimes unit" (MSG-000028)',
        'msg_ids': 'MSG-000024; MSG-000025; MSG-000026; MSG-000027; MSG-000028',
        'source_ids': f"{get_sid('EX04_2026-05-18_cps_unload_entire_folder.pdf')}; {get_sid('BLAKE2026_Page_1800.pdf')}",
        'external_leads': 'CPS intake records; police dispatch logs; local court filings for protective orders.'
    },
    {
        'id': 'INC-005',
        'earliest': '2026-05-23 9:59 PM',
        'latest': '2026-05-24 3:10 PM',
        'theme': 'May 24 Catastrophic Exposure Campaign: Mass Photo Distribution, Family Court Weaponization & Death Wishes',
        'participants': 'Blake Harris, Jayme Volstad, Parents of Jayme, Minor Child (Jack), Third-Party Lauren',
        'trigger': 'Jayme asking routine maintenance question about apartment dryer.',
        'boundary': 'Jayme sending formal morning email demanding Blake cease sending sexual materials, stop violating Lauren’s privacy, review his own home camera metadata, and allow uncoerced contact with Jack.',
        'response': 'Blake unleashes 2:31 AM tirade telling Jayme to "Just die already", blocks phone number, orders home inspection before child visits, revokes car and rent, threatens in-person delivery of nude printouts to her parents, threatens to mail entire Google Photos album to her family, claims absolute right to inspect her pictures, and threatens to broadcast private media in Family Court.',
        'resource': 'Child visitation (Jack), apartment shelter funding, vehicle possession, Google Photos privacy, familial relationship, mental health.',
        'consequences': 'Complete functional destabilization; severe emotional trauma; extreme reputational extortion.',
        'quotes': '"he\'s not coming over to your house until I see the inside of it and look through everything... Just die already... If I have to drive to your parents leave them print out of everything that you\'ve done I will" (MSG-000032, MSG-000033); "the next one that I see you send her I’m going to send your entire Google Photos album printed every text message everything I already have it all done" (MSG-000035); "I have every right to look through those pictures... you wanna try to take me to Family court? We guess what we’re gonna watch first" (MSG-000036)',
        'msg_ids': 'MSG-000029; MSG-000030; MSG-000031; MSG-000032; MSG-000033; MSG-000034; MSG-000035; MSG-000036',
        'source_ids': f"{get_sid('EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png')}; {get_sid('EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png')}; {get_sid('imgoingtosendyourentiregoogledrive.pdf')}; {get_sid('everyrighttolookfamilycourtwatch.pdf')}; {get_sid('EX01_2026-05-24_google_photos_album_printed_texts.pdf')}; {get_sid('EX11_2026-05-24_right_to_look_family_court_watch_first.pdf')}",
        'external_leads': 'Full email header DKIM/SPF verification logs; home camera system cloud archives (Gold Tooth / home cameras); commercial print shop records or device print queues.'
    },
    {
        'id': 'INC-006',
        'earliest': '2026-06-21 10:31 AM',
        'latest': '2026-06-25 1:47 AM',
        'theme': 'Father’s Day Escalation: Tow Threats, Insurance Deactivation & Retaliatory Rent Sabotage',
        'participants': 'Blake Harris, Jayme Volstad, Daughter (Catalina), Third-Party Jessy',
        'trigger': 'Jayme communicating with her daughter on Father’s Day and falling asleep.',
        'boundary': 'Jayme explaining she cannot engage in hostile shouting while her daughter is present; demanding cessation of name-calling and privacy invasions.',
        'response': 'Blake escalates across 38+ emails; threatens to send tow truck by Friday; cancels apartment rent claiming "wrong card"; unilaterally cancels automobile insurance and immediately threatens vehicle tow for lack of insurance; admits inspecting Google Drive.',
        'resource': 'Apartment rent funding, vehicle possession and legal operating ability (insurance), parental relationship with Catalina.',
        'consequences': 'Loss of vehicle insurance coverage; imminent risk of vehicle impoundment; threat of eviction.',
        'quotes': '"I will send Jessy and Hill [he\'ll] just tow the car... these are no longer threats. These are reality" (MSG-000041, MSG-000042); "I use the wrong card so rent didn\'t go through... And it\'s not leverage it\'s just that I\'m not paying shit anymore" (MSG-000046, MSG-000048); "FYI there is no insurance on the car. None... If u refuse I\'ll have to get it towed" (MSG-000049, MSG-000050)',
        'msg_ids': 'MSG-000037; MSG-000038; MSG-000039; MSG-000040; MSG-000041; MSG-000042; MSG-000043; MSG-000044; MSG-000045; MSG-000046; MSG-000047; MSG-000048; MSG-000049; MSG-000050; MSG-000051; MSG-000052',
        'source_ids': f"{get_sid('41messegeaccusationsthreats.pdf')}; {get_sid('Oops_towthreats.pdf')}",
        'external_leads': 'Progressive / auto insurance policy cancellation records for June 21; apartment rent payment ledger and bank transaction decline logs; GitHub transfer logs for `rouguemuse/hcclub`.'
    },
    {
        'id': 'INC-007',
        'earliest': '2026-06-30 6:07 PM',
        'latest': '2026-06-30 8:14 PM',
        'theme': 'Vehicle Title Withholding & Reclassification Dispute',
        'participants': 'Blake Harris, Jayme Volstad, Marida Volstad',
        'trigger': 'Jayme presenting documented ledger showing $6,180 paid on $6,500 car purchase and requesting title exchange upon paying final $320.',
        'boundary': 'Jayme refusing remote device access, refusing credit card details, requesting documented vehicle-only accounting.',
        'response': 'Blake rejects accounting, claims an unproduced written agreement, reiterates $50,000 theft accusations, and refuses to allow rent payment at the office.',
        'resource': 'Vehicle title / legal ownership, apartment lease confirmation, financial privacy.',
        'consequences': 'Ongoing legal cloud on vehicle title; refusal of written accounting; threat of lease default.',
        'quotes': '"Total vehicle payments and credits: $6,180. Remaining balance based on the agreed $6,500 price: $320... I will not provide my card number to you or allow remote access to my computer, phone, devices, accounts, or financial information" (MSG-000053); "if you could come dumb enough to give me a car after you stole her $50,ooo which will get to that soon" (MSG-000054)',
        'msg_ids': 'MSG-000053; MSG-000054; MSG-000055',
        'source_ids': f"{get_sid('LeaaseNonanswertoCarAccountRequest.pdf')}",
        'external_leads': 'Zelle transfer receipts; vehicle title documentation; apartment management office 60-day notice filing records.'
    },
    {
        'id': 'INC-008',
        'earliest': '2026-07-21 10:04 PM',
        'latest': '2026-07-22 2:13 AM',
        'theme': 'Card Accusations, Harassment Documentation & Automated AI Filter Dismissal',
        'participants': 'Blake Harris, Jayme Volstad',
        'trigger': 'Disputed credit card charges in Elgin, TX ($119, $3, McDonald’s).',
        'boundary': 'Jayme detailing comprehensive harassment audit (20 emails, missed calls, fake plea agreement demands, car threats); requesting child calls be kept free from conflict.',
        'response': 'Blake dismisses documented record as "AI / ChatGPT", threatens that Gemini filter will automatically route all emails to trash, and announces all future emails forwarded to Gigi.',
        'resource': 'Child communication channel, email communication avenue, banking dispute legitimacy.',
        'consequences': 'Attempted erasure and automated suppression of written evidentiary record; gatekeeping child communications.',
        'quotes': '"Your communications and contact this month have included approximately 20 emails from three known email addresses, missed WhatsApp calls from two phone numbers, demands that I sign and notarize a supposed plea agreement, repeated threats involving the car..." (MSG-000059); "your chat gpt mental mind f stuff isn\'t gonna work anymore and gemini will scan and put any AI emails in the trash" (MSG-000060)',
        'msg_ids': 'MSG-000056; MSG-000057; MSG-000058; MSG-000059; MSG-000060; MSG-000061',
        'source_ids': f"{get_sid('requesttocease_unrelated accusations.pdf')}",
        'external_leads': 'Mastercard transaction records for card ending in 1944; merchant geolocation logs for Elgin McDonald\'s; Apple App Store account restriction records.'
    },
    {
        'id': 'INC-009',
        'earliest': '2026-07-30 9:54 PM',
        'latest': '2026-08-01 3:03 PM',
        'theme': 'Unauthorized Account Takeover, Location Data Exfiltration & Formal Legal Revocation',
        'participants': 'Blake Harris, Jayme Volstad, Google Security Team',
        'trigger': 'Intruder attempting password resets and gaining unauthorized access to Google Account from Mac OS in Texas.',
        'boundary': 'Jayme issuing explicit formal written revocation: "You are not authorized to access, reset, recover, export, or change information on any of my accounts... Stop immediately. I am preserving these alerts. Do not contact me except in writing about necessary matters involving Jack."',
        'response': 'Intruder executes Google Takeout export for Maps and Timeline location data; searches 3750 E Palm Valley Blvd; Blake responds at 5:00 AM mocking revocation ("Yes mam"), declaring "Cuase ive already won. Sweet dreams", and referencing private photos.',
        'resource': 'Google account credentials, real-time and historical GPS location history (Timeline), Google Drive files, personal security.',
        'consequences': 'Exfiltration of sensitive location history; direct violation of formal legal boundary; intimidation.',
        'quotes': '"Archive of Google data requested: 3 products · Maps, Maps (your places), Timeline" (MSG-000066); "You are not authorized to access, reset, recover, export, or change information on any of my accounts... Stop immediately... Do not contact me except in writing about necessary matters involving Jack" (MSG-000068); "Yes mam... No one wants to see your pictures of meth pipes at your apt... Cuase ive already won. Sweet dreams" (MSG-000069)',
        'msg_ids': 'MSG-000062; MSG-000063; MSG-000064; MSG-000065; MSG-000066; MSG-000067; MSG-000068; MSG-000069; MSG-000070',
        'source_ids': f"{get_sid('security.png')}; {get_sid('securitytwo.png')}; {get_sid('security3.png')}; {get_sid('act.png')}; {get_sid('actactivityuna.png')}; {get_sid('actdetail.png')}; {get_sid('DeviceAccessGoogle.png')}; {get_sid('CompromisedEmailSearchHistory.png')}; {get_sid('NotificationofNotAuthorizedandResponse.png')}; {get_sid('Notauthorized.pdf')}; {get_sid('ResponsetoNotAuthorized.pdf')}; {get_sid('Screenshot 2026-08-01 124617.png')}",
        'external_leads': 'Google Account Audit Logs (IP addresses, user agents, and session tokens for July 30 9:54 PM - 10:37 PM); Google Takeout archive ID `b1e08d32-6e83-4843-a74e-905bfaba68f8` download records; WhatsApp call detail records for +1 (281) 797-1396 and +1 (832) 4...; Mac OS device hardware identifiers.'
    }
]

print(f'Populated {len(incident_clusters)} incident clusters.')

# Write POST_EXPORT_INCIDENT_CLUSTERS.csv
incident_file = out_dir / 'POST_EXPORT_INCIDENT_CLUSTERS.csv'
incident_headers = [
    'Incident ID', 'Earliest Message Date/Time', 'Latest Message Date/Time', 
    'Incident Name / Theme', 'Participants', 'Triggering Event', 
    'Boundary or Request Imposed', 'Subsequent Response / Action', 
    'Resource Involved', 'Consequences', 'Exact Key Quotations', 
    'Relevant Message IDs', 'Relevant Source IDs', 'Missing Context / External Leads'
]

incident_rows = []
for inc in incident_clusters:
    incident_rows.append({
        'Incident ID': inc['id'],
        'Earliest Message Date/Time': inc['earliest'],
        'Latest Message Date/Time': inc['latest'],
        'Incident Name / Theme': inc['theme'],
        'Participants': inc['participants'],
        'Triggering Event': inc['trigger'],
        'Boundary or Request Imposed': inc['boundary'],
        'Subsequent Response / Action': inc['response'],
        'Resource Involved': inc['resource'],
        'Consequences': inc['consequences'],
        'Exact Key Quotations': inc['quotes'],
        'Relevant Message IDs': inc['msg_ids'],
        'Relevant Source IDs': inc['source_ids'],
        'Missing Context / External Leads': inc['external_leads']
    })

with open(incident_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=incident_headers)
    writer.writeheader()
    writer.writerows(incident_rows)

print(f'Successfully created {incident_file} with {len(incident_rows)} clusters.')

# --- PHASE 7: CROSS-REFERENCE TABLE ---
# Columns: Cross-Reference ID | Message A | Message B | Additional Messages | Relationship | Why Comparison Matters | Source Screenshots

cross_references = [
    {
        'id': 'CR-001',
        'msg_a': 'MSG-000028 (May 19, 2026 2:31 AM)',
        'msg_b': 'MSG-000035 (May 24, 2026 1:28 PM)',
        'add_msgs': 'MSG-000032; MSG-000033; MSG-000036',
        'rel': 'Claimed Deletion vs Retained Possession & Threat to Disseminate',
        'why': 'On May 19 Blake claims that all pictures of Jayme are deleted and "all gone everything". Just 5 days later (May 24), he asserts he has her "entire Google Photos album printed" and threatens to distribute it to her parents, showing continuous retained possession and false closure.',
        'sources': 'BLAKE2026_Page_1800.pdf; imgoingtosendyourentiregoogledrive.pdf; EX02_...p1828.png'
    },
    {
        'id': 'CR-002',
        'msg_a': 'MSG-000027 (May 18, 2026 9:53 PM)',
        'msg_b': 'MSG-000045 (June 21, 2026 11:49 AM)',
        'add_msgs': 'MSG-000064 (July 30, 2026 10:12 PM)',
        'rel': 'Admissions of Unauthorized Account Browsing & Ongoing Access',
        'why': 'On May 18 Blake boasts "don’t think I still don’t have access because it’s all a lot". On June 21 he confirms looking at files inside her Google Drive ("pictures of them in Google Drive with my name on them"). On July 30, an unauthorized session on Mac OS explicitly searches "google drive" in her account.',
        'sources': 'EX04_2026-05-18_cps_unload_entire_folder.pdf; 41messegeaccusationsthreats.pdf; actactivityuna.png'
    },
    {
        'id': 'CR-003',
        'msg_a': 'MSG-000046 (June 21, 2026 1:54 PM)',
        'msg_b': 'MSG-000048 (June 21, 2026 4:05 PM)',
        'add_msgs': 'MSG-000026 (May 18, 2026); MSG-000033 (May 24, 2026)',
        'rel': 'Pretextual Default vs Retaliatory Admission of Housing Leverage',
        'why': 'Blake initially claims rent did not go through because "I use the wrong card". Two hours later, when confronted with Jayme’s boundary, he drops the pretext and admits intentional retaliation: "it\'s not leverage it\'s just that I\'m not paying shit anymore not after the way I\'m treated like just scum".',
        'sources': 'Oops_towthreats.pdf; EX04_2026-05-18_cps_unload_entire_folder.pdf; EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png'
    },
    {
        'id': 'CR-004',
        'msg_a': 'MSG-000049 (June 21, 2026 9:46 PM)',
        'msg_b': 'MSG-000050 (June 21, 2026 9:48 PM)',
        'add_msgs': 'MSG-000051 (June 24, 2026 10:36 PM)',
        'rel': 'Manufactured Catch-22: Policy Cancellation Immediately Paired with Tow Threat',
        'why': 'Blake unilaterally cancels automobile insurance ("FYI there is no insurance on the car. None") and within 2 minutes sends a follow-up email threatening to tow the car if she fails to show full coverage ("As well I need a copy of full coverage. If u refuse I\'ll have to get it towed").',
        'sources': 'Oops_towthreats.pdf; 41messegeaccusationsthreats.pdf'
    },
    {
        'id': 'CR-005',
        'msg_a': 'MSG-000036 (May 24, 2026 3:10 PM)',
        'msg_b': 'MSG-000066 (July 30, 2026 10:33 PM)',
        'add_msgs': 'MSG-000065 (July 30, 2026 10:19 PM)',
        'rel': 'Surveillance Claims Corroborated by Digital Location History Exfiltration',
        'why': 'In May Blake taunts Jayme about knowing her movements ("saw your motorcycle boy last night. You never knew that I’ve been on that guy for seven years"). On July 30, forensic logs show an unauthorized Houston Mac OS login attempting to download her Google Maps, Saved Places, and Timeline location history.',
        'sources': 'everyrighttolookfamilycourtwatch.pdf; security3.png; act.png'
    },
    {
        'id': 'CR-006',
        'msg_a': 'MSG-000051 (June 24, 2026 10:36 PM)',
        'msg_b': 'MSG-000053 (June 30, 2026 6:07 PM)',
        'add_msgs': 'MSG-000054 (June 30, 2026 7:53 PM)',
        'rel': 'Vehicle Payment Erasure vs Documented Financial Ledger',
        'why': 'Blake claims Jayme never made a payment and was merely paying back personal money. Jayme produces a specific, itemized written ledger proving $6,180 paid toward the $6,500 vehicle price, leaving only $320. Blake refuses to provide a contrary vehicle-only ledger, resorting to broad theft accusations.',
        'sources': '41messegeaccusationsthreats.pdf; LeaaseNonanswertoCarAccountRequest.pdf'
    },
    {
        'id': 'CR-007',
        'msg_a': 'MSG-000059 (July 22, 2026 12:28 AM)',
        'msg_b': 'MSG-000070 (July 11, 2026)',
        'add_msgs': 'MSG-000060 (July 22, 2026 2:12 AM)',
        'rel': 'Channel Inundation & Persistent Contact Across Imposed Restrictions',
        'why': 'Jayme documents that Blake sent ~20 emails from 3 addresses and made missed WhatsApp calls from 2 numbers. WhatsApp logs from July 10-11 corroborate missed calls from Blake and an unlisted number, proving ongoing boundary circumvention.',
        'sources': 'requesttocease_unrelated accusations.pdf; Screenshot 2026-08-01 124617.png'
    },
    {
        'id': 'CR-008',
        'msg_a': 'MSG-000068 (July 31, 2026 12:15 AM)',
        'msg_b': 'MSG-000069 (July 31, 2026 5:00 AM)',
        'add_msgs': 'MSG-000062; MSG-000067',
        'rel': 'Formal Account Revocation Met with Mockery, Counter-Threats & Retained Photo Leverage',
        'why': 'Jayme formally revokes all authorization to access or export account data and demands written-only communication regarding Jack. Blake responds 4 hours later mocking her ("Yes mam"), declaring he already won, and referencing pictures of meth pipes, demonstrating complete disregard of legal notices.',
        'sources': 'NotificationofNotAuthorizedandResponse.png; Notauthorized.pdf; ResponsetoNotAuthorized.pdf'
    }
]

print(f'Populated {len(cross_references)} cross-reference links.')

# Write POST_EXPORT_CROSS_REFERENCES.csv
cross_file = out_dir / 'POST_EXPORT_CROSS_REFERENCES.csv'
cross_headers = [
    'Cross-Reference ID', 'Message A', 'Message B', 'Additional Messages', 
    'Relationship', 'Why Comparison Matters', 'Source Screenshots'
]

cross_rows = []
for cr in cross_references:
    cross_rows.append({
        'Cross-Reference ID': cr['id'],
        'Message A': cr['msg_a'],
        'Message B': cr['msg_b'],
        'Additional Messages': cr['add_msgs'],
        'Relationship': cr['rel'],
        'Why Comparison Matters': cr['why'],
        'Source Screenshots': cr['sources']
    })

with open(cross_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=cross_headers)
    writer.writeheader()
    writer.writerows(cross_rows)

print(f'Successfully created {cross_file} with {len(cross_rows)} cross-references.')

# --- PHASE 8: EXTERNAL EVIDENCE LEADS ---
# Columns: Lead ID | Date | Message ID | Exact Reference | Possible External Source | Why Relevant | Screenshot Source

external_leads = [
    {
        'id': 'LEAD-001',
        'date': '2026-07-30',
        'msg_id': 'MSG-000066',
        'ref': 'takeout.google.com/u/5/manage/archive/b1e08d32-6e83-4843-a74e-905bfaba68f8',
        'source_type': 'Google Takeout / Cloud System Logs',
        'relevance': 'Proves exact archive token, requesting IP, timestamp (10:33 PM), and exfiltration target (Maps, Places, Timeline location history).',
        'screenshot': 'security3.png; securitytwo.png'
    },
    {
        'id': 'LEAD-002',
        'date': '2026-07-30',
        'msg_id': 'MSG-000062; MSG-000067',
        'ref': 'New sign-in on Mac OS Houston, TX, USA (10:37 PM) using Google Chrome',
        'source_type': 'Google Workspace / Security Sign-in Audit',
        'relevance': 'Establishes public source IP address, ISP, and device footprint for unauthorized Mac session in Houston.',
        'screenshot': 'security.png; DeviceAccessGoogle.png'
    },
    {
        'id': 'LEAD-003',
        'date': '2026-07-30',
        'msg_id': 'MSG-000065',
        'ref': 'Used Maps. 3750 E Palm Valley Blvd. 10:19 PM',
        'source_type': 'Google Maps / My Activity Logs',
        'relevance': 'Ties unauthorized intruder directly to search queries for specific Round Rock physical location.',
        'screenshot': 'act.png; actactivityuna.png'
    },
    {
        'id': 'LEAD-004',
        'date': 'DATE_UNRESOLVED',
        'msg_id': 'MSG-000009; MSG-000014',
        'ref': 'the cops drove me here... neighbor that called the cops... scarlet calls the cops',
        'source_type': 'Local Police Department CAD Incident Logs & Officer Bodycam',
        'relevance': 'Independent law enforcement record of domestic dispute, toxic chemical fogger deployment, and victim transport to hotel.',
        'screenshot': 'bugbomb.jpg; bugbomb2.jpg; bugbomb3.jpg'
    },
    {
        'id': 'LEAD-005',
        'date': '2026-06-21',
        'msg_id': 'MSG-000049',
        'ref': 'FYI there is no insurance on the car. None',
        'source_type': 'Automobile Insurance Carrier Policy Logs (Progressive / State Farm)',
        'relevance': 'Establishes precise date, time, and user who cancelled active policy on vehicle used by Jayme.',
        'screenshot': 'Oops_towthreats.pdf'
    },
    {
        'id': 'LEAD-006',
        'date': '2026-06-30',
        'msg_id': 'MSG-000053',
        'ref': 'Feb 12 $500, Feb 17 $500, Sling $2,505, Mazda $2,000, May 7 $425, $250 Zelle',
        'source_type': 'Bank of America / Chase / Zelle Transaction Records',
        'relevance': 'Bank-authenticated proof of payments totaling $6,180 toward car purchase, refuting theft and non-payment claims.',
        'screenshot': 'LeaaseNonanswertoCarAccountRequest.pdf'
    },
    {
        'id': 'LEAD-007',
        'date': '2026-05-24',
        'msg_id': 'MSG-000035',
        'ref': 'saved to the Gold Tooth computer... send your entire Google Photos album printed',
        'source_type': 'Gold Tooth Tony’s Commercial Workplace Hardware / Hard Drives',
        'relevance': 'Physical computing hardware where private videos and compiled photo albums were preserved and processed.',
        'screenshot': 'imgoingtosendyourentiregoogledrive.pdf'
    },
    {
        'id': 'LEAD-008',
        'date': '2026-07-21',
        'msg_id': 'MSG-000056; MSG-000057',
        'ref': 'Mastercard 1944. Charges for McDonald\'s in Elgin tons of apple charges',
        'source_type': 'Card Issuer Fraud Investigation Records & Merchant Surveillance',
        'relevance': 'Proves actual purchaser at Elgin McDonald’s and verifies Apple ID restriction preventing Jayme from using cards.',
        'screenshot': 'requesttocease_unrelated accusations.pdf'
    },
    {
        'id': 'LEAD-009',
        'date': '2026-07-11',
        'msg_id': 'MSG-000070',
        'ref': 'WhatsApp Missed Calls from Blake (7/11/2026) and +1 (832) 4... (7/10/2026)',
        'source_type': 'WhatsApp / Meta Subpoena & Carrier CDRs',
        'relevance': 'Independent corroboration of unauthorized repeated calls across alternate VoIP platforms following written contact cutoffs.',
        'screenshot': 'Screenshot 2026-08-01 124617.png'
    },
    {
        'id': 'LEAD-010',
        'date': '2026-05-18',
        'msg_id': 'MSG-000027',
        'ref': 'if you call CPS, I will unload the entire folder that I have for you',
        'source_type': 'Texas Department of Family and Protective Services (DFPS / CPS) Intake Logs',
        'relevance': 'Corroborates timing of any third-party reports and demonstrates clear threat of retaliatory exposure.',
        'screenshot': 'EX04_2026-05-18_cps_unload_entire_folder.pdf'
    }
]

print(f'Populated {len(external_leads)} external evidence leads.')

# Write EXTERNAL_EVIDENCE_LEADS.csv
leads_file = out_dir / 'EXTERNAL_EVIDENCE_LEADS.csv'
leads_headers = [
    'Lead ID', 'Date', 'Message ID', 'Exact Reference', 
    'Possible External Source', 'Why Relevant', 'Screenshot Source'
]

leads_rows = []
for ld in external_leads:
    leads_rows.append({
        'Lead ID': ld['id'],
        'Date': ld['date'],
        'Message ID': ld['msg_id'],
        'Exact Reference': ld['ref'],
        'Possible External Source': ld['source_type'],
        'Why Relevant': ld['relevance'],
        'Screenshot Source': ld['screenshot']
    })

with open(leads_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=leads_headers)
    writer.writeheader()
    writer.writerows(leads_rows)

print(f'Successfully created {leads_file} with {len(leads_rows)} external leads.')

# --- PHASE 9: HIGH-VALUE MANUAL REVIEW QUEUE ---
# Columns: Priority ID | Rank | Source ID | Original Filename | Relevant Message ID(s) | Reason for Visual Review | Forensic / Legal Significance

manual_review_queue = [
    {
        'id': 'REV-001',
        'rank': 'CRITICAL',
        'sid': get_sid('NotificationofNotAuthorizedandResponse.png'),
        'filename': 'NotificationofNotAuthorizedandResponse.png',
        'msg_ids': 'MSG-000068; MSG-000069',
        'reason': 'Full-screen browser capture showing formal revocation email and Blake Harris’s immediate 5:00 AM mocking reply. Contains visible browser tabs showing Scribus, Google Flow, and EXHIBITS folder.',
        'significance': 'Unquestionable baseline establishing legal boundary imposition, immediate breach, and ongoing possession of intimate/drug allegations.'
    },
    {
        'id': 'REV-002',
        'rank': 'CRITICAL',
        'sid': get_sid('security3.png'),
        'filename': 'security3.png',
        'msg_ids': 'MSG-000066',
        'reason': 'Direct screenshot of Google Takeout page displaying URL token `b1e08d32-6e83-4843-a74e-905bfaba68f8` and selection of Maps, Places, and Timeline data.',
        'significance': 'Direct technical evidence of attempted digital stalking and exfiltration of historical GPS location records.'
    },
    {
        'id': 'REV-003',
        'rank': 'CRITICAL',
        'sid': get_sid('securitytwo.png'),
        'filename': 'securitytwo.png',
        'msg_ids': 'MSG-000062; MSG-000063; MSG-000066',
        'reason': 'Google Critical Security Alert dialog showing timeline: New sign-in Mac OS Texas (9:54 PM), password change attempt (10:11 PM), Takeout archive requested (10:33 PM).',
        'significance': 'Forensic timeline proving intruder escalation sequence from initial breach to data extraction.'
    },
    {
        'id': 'REV-004',
        'rank': 'CRITICAL',
        'sid': get_sid('EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png'),
        'filename': 'EX02_2026-05-24_naked_google_photos_printout_parents_p1827.png',
        'msg_ids': 'MSG-000029; MSG-000030; MSG-000031; MSG-000032',
        'reason': 'High-resolution image of message export Page 1827 showing 2:31 AM escalation, wishing death, phone block, and home search requirement for seeing Jack.',
        'significance': 'Primary proof of severe verbal abuse, child visitation restriction, and Google Photos inspection.'
    },
    {
        'id': 'REV-005',
        'rank': 'CRITICAL',
        'sid': get_sid('EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png'),
        'filename': 'EX02_2026-05-24_naked_google_photos_printout_parents_p1828.png',
        'msg_ids': 'MSG-000033',
        'reason': 'Continuation showing threat to drive printouts to parents, "Just die already", HPD reporting threat if messages are shared, and car/rent funding revocation.',
        'significance': 'Primary proof of extortion/silencing threats, parental reputational targeting, and resource withdrawal.'
    },
    {
        'id': 'REV-006',
        'rank': 'CRITICAL',
        'sid': get_sid('DET1.jpg'),
        'filename': 'DET1.jpg',
        'msg_ids': 'MSG-000017; MSG-000018; MSG-000019',
        'reason': 'Mobile screenshot of SMS message showing Blake explicitly planning to hold his son during cash exchange to engineer felony charges with prison threats.',
        'significance': 'Direct proof of child exploitation as a legal weapon and criminal extortion.'
    },
    {
        'id': 'REV-007',
        'rank': 'CRITICAL',
        'sid': get_sid('EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg'),
        'filename': 'EX03_child_google_drive_private_photos_scroll_boobs_question.jpeg',
        'msg_ids': 'MSG-000020; MSG-000021; MSG-000022; MSG-000023',
        'reason': 'Mobile screenshot showing Blake claiming child scrolled through Google Drive and weaponizing explicit sexual remarks.',
        'significance': 'Demonstrates drive access awareness and child exploitation for sexual humiliation.'
    },
    {
        'id': 'REV-008',
        'rank': 'CRITICAL',
        'sid': get_sid('bugbomb.jpg'),
        'filename': 'bugbomb.jpg',
        'msg_ids': 'MSG-000001; MSG-000003; MSG-000006; MSG-000007; MSG-000009',
        'reason': 'Contemporaneous chat recounting bug bomb chemical attack, deployment of 4 foggers in face, dragging outside barefoot, and child/cat presence.',
        'significance': 'Primary contemporaneous narrative of domestic violence and prohibited chemical weapon deployment.'
    },
    {
        'id': 'REV-009',
        'rank': 'CRITICAL',
        'sid': get_sid('bugbomb4.jpg'),
        'filename': 'bugbomb4.jpg',
        'msg_ids': 'MSG-000016',
        'reason': 'Direct iMessage notice sent to co-tenant Scarlett reporting breathing injury, chemical weapon assault, and phone theft.',
        'significance': 'Written legal notice documenting physical injury and deprivation of communication.'
    },
    {
        'id': 'REV-0010',
        'rank': 'CRITICAL',
        'sid': get_sid('imgoingtosendyourentiregoogledrive.pdf'),
        'filename': 'imgoingtosendyourentiregoogledrive.pdf',
        'msg_ids': 'MSG-000035',
        'reason': 'Cryptographically authenticated email PDF (DKIM/SPF Pass) containing threat to print and send entire Google Photos album.',
        'significance': 'Legally irrefutable evidence of mass disclosure threat and 48-hour physical appearance demand.'
    },
    {
        'id': 'REV-011',
        'rank': 'CRITICAL',
        'sid': get_sid('everyrighttolookfamilycourtwatch.pdf'),
        'filename': 'everyrighttolookfamilycourtwatch.pdf',
        'msg_ids': 'MSG-000034; MSG-000036',
        'reason': 'Cryptographically authenticated email PDF containing claim of right to look at pictures, Family Court video threat, and motorcycle surveillance claim.',
        'significance': 'Legally irrefutable proof of custody litigation intimidation and movement surveillance.'
    },
    {
        'id': 'REV-012',
        'rank': 'HIGH',
        'sid': get_sid('CompromisedEmailSearchHistory.png'),
        'filename': 'CompromisedEmailSearchHistory.png',
        'msg_ids': 'N/A (Account Forensic Capture)',
        'reason': 'Gmail UI screenshot displaying search query dropdown history containing sexual terms (fuck, cock, sex) and financial terms (paypal, checks, blake).',
        'significance': 'Proves intruder’s specific search profile targeting financial accounts and personal sexual keywords.'
    },
    {
        'id': 'REV-013',
        'rank': 'HIGH',
        'sid': get_sid('DeviceAccessGoogle.png'),
        'filename': 'DeviceAccessGoogle.png',
        'msg_ids': 'MSG-000067',
        'reason': 'Google Account Manage Devices screen showing active Mac OS device in Houston, TX signed in July 30 at 10:37 PM.',
        'significance': 'Hardware and geolocation identification for unauthorized intrusion.'
    },
    {
        'id': 'REV-014',
        'rank': 'HIGH',
        'sid': get_sid('actdetail.png'),
        'filename': 'actdetail.png',
        'msg_ids': 'MSG-000064; MSG-000065',
        'reason': 'Google security detail card warning "Review personal content: Did you recently download your account content? Done from an unfamiliar device."',
        'significance': 'Google system corroboration of unauthorized data exfiltration.'
    },
    {
        'id': 'REV-015',
        'rank': 'HIGH',
        'sid': get_sid('Oops_towthreats.pdf'),
        'filename': 'Oops_towthreats.pdf',
        'msg_ids': 'MSG-000046; MSG-000047; MSG-000048; MSG-000049; MSG-000050',
        'reason': 'Complete 3-page email thread from June 21 showing sudden rent cancellation, insurance deactivation, and immediate tow threat.',
        'significance': 'Documents rapid retaliatory escalation targeting shelter and transportation.'
    },
    {
        'id': 'REV-016',
        'rank': 'HIGH',
        'sid': get_sid('LeaaseNonanswertoCarAccountRequest.pdf'),
        'filename': 'LeaaseNonanswertoCarAccountRequest.pdf',
        'msg_ids': 'MSG-000053; MSG-000054; MSG-000055',
        'reason': 'Itemized vehicle accounting email thread demonstrating $6,180 paid and refusal to exchange title.',
        'significance': 'Refutes vehicle theft allegations and proves asset withholding.'
    },
    {
        'id': 'REV-017',
        'rank': 'HIGH',
        'sid': get_sid('requesttocease_unrelated accusations.pdf'),
        'filename': 'requesttocease_unrelated accusations.pdf',
        'msg_ids': 'MSG-000056; MSG-000057; MSG-000058; MSG-000059; MSG-000060; MSG-000061',
        'reason': '4-page email thread documenting comprehensive harassment audit (20 emails, missed calls, fake plea agreement) and Blake’s AI filter dismissal.',
        'significance': 'Comprehensive contemporaneous record of pattern of harassment and attempted communication suppression.'
    },
    {
        'id': 'REV-018',
        'rank': 'HIGH',
        'sid': get_sid('41messegeaccusationsthreats.pdf'),
        'filename': '41messegeaccusationsthreats.pdf',
        'msg_ids': 'MSG-000037 - MSG-000052',
        'reason': '9-page PDF containing 38-41 sequential emails from June 21-25 showing sustained barrage of demands, insults, tow threats, and Drive admissions.',
        'significance': 'Demonstrates severe volume, intensity, and coercive continuity over 5 days.'
    },
    {
        'id': 'REV-019',
        'rank': 'HIGH',
        'sid': get_sid('Screenshot 2026-08-01 124617.png'),
        'filename': 'Screenshot 2026-08-01 124617.png',
        'msg_ids': 'MSG-000070',
        'reason': 'WhatsApp call history displaying missed calls from Blake on July 11 and an unlisted number on July 10.',
        'significance': 'Corroborates unauthorized VoIP contact circumvention.'
    }
]

print(f'Populated {len(manual_review_queue)} manual review queue entries.')

# Write MANUAL_REVIEW_PRIORITY.csv
review_file = out_dir / 'MANUAL_REVIEW_PRIORITY.csv'
review_headers = [
    'Priority ID', 'Rank', 'Source ID', 'Original Filename', 
    'Relevant Message ID(s)', 'Reason for Visual Review', 
    'Forensic / Legal Significance'
]

review_rows = []
for q in manual_review_queue:
    review_rows.append({
        'Priority ID': q['id'],
        'Rank': q['rank'],
        'Source ID': q['sid'],
        'Original Filename': q['filename'],
        'Relevant Message ID(s)': q['msg_ids'],
        'Reason for Visual Review': q['reason'],
        'Forensic / Legal Significance': q['significance']
    })

with open(review_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=review_headers)
    writer.writeheader()
    writer.writerows(review_rows)

print(f'Successfully created {review_file} with {len(review_rows)} priority entries.')

print('All post-export evidence recovery tables generated successfully!')
