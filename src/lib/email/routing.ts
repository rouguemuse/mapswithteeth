/**
 * MAPS WITH TEETH — CENTRAL FORM EMAIL ROUTING
 * 
 * Strict destination mapping for all public website forms.
 * These five addresses are the only authorized destination aliases.
 */

export const AUTHORIZED_DESTINATION_EMAILS = {
  HELLO: "hello@mapswithteeth.org",
  PARTNERS: "partners@mapswithteeth.org",
  FEEDBACK: "feedback@mapswithteeth.org",
  RESOURCES: "resources@mapswithteeth.org",
  GOVERNANCE: "governance@mapswithteeth.org",
} as const;

export const SENDER_EMAIL = "Maps With Teeth <hello@mapswithteeth.org>";

export const FORM_ROUTING_MAP = {
  GENERAL: AUTHORIZED_DESTINATION_EMAILS.HELLO,
  SUPPORT: AUTHORIZED_DESTINATION_EMAILS.HELLO,
  PARTNERSHIP: AUTHORIZED_DESTINATION_EMAILS.PARTNERS,
  FEEDBACK: AUTHORIZED_DESTINATION_EMAILS.FEEDBACK,
  RESOURCE: AUTHORIZED_DESTINATION_EMAILS.RESOURCES,
  RESOURCE_DISCOVERY: AUTHORIZED_DESTINATION_EMAILS.RESOURCES,
  GOVERNANCE: AUTHORIZED_DESTINATION_EMAILS.GOVERNANCE,
} as const;

export type FormCategory = keyof typeof FORM_ROUTING_MAP;

export interface RoutingResult {
  destinationEmail: string;
  senderEmail: string;
  subject: string;
  replyToEmail?: string;
  sendVisitorConfirmation: boolean;
  confirmationSubject: string;
  confirmationBodyText: string;
}

export function escapeHtml(str: unknown): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function resolveFormRouting(
  category: FormCategory,
  data: Record<string, any>
): RoutingResult {
  const destinationEmail = FORM_ROUTING_MAP[category];
  const submittedEmail = typeof data.email === "string" && data.email.includes("@") ? data.email.trim() : undefined;
  
  let subject = "[MWT · GENERAL] Inquiry";
  let sendVisitorConfirmation = Boolean(submittedEmail);
  const confirmationSubject = "[Maps With Teeth] Message Received";
  const confirmationBodyText =
    "We received your message. Maps With Teeth is an initiative in development, and response times may vary. Thank you for helping us build this carefully.\n\n— The Maps With Teeth Initiative (mapswithteeth.org)";

  switch (category) {
    case "GENERAL": {
      const label = data.name ? String(data.name).trim() : (data.subject ? String(data.subject).trim() : "General Inquiry");
      subject = `[MWT · GENERAL] ${label}`;
      break;
    }
    case "SUPPORT": {
      const label = data.name ? String(data.name).trim() : "Support Inquiry";
      subject = `[MWT · SUPPORT] Payment/support inquiry — ${label}`;
      break;
    }
    case "PARTNERSHIP": {
      const orgOrName = data.organization ? String(data.organization).trim() : (data.name ? String(data.name).trim() : "Collaborator");
      subject = `[MWT · PARTNER] ${orgOrName}`;
      break;
    }
    case "FEEDBACK": {
      subject = `[MWT · FEEDBACK] Stakeholder feedback`;
      break;
    }
    case "RESOURCE": {
      const resName = data.resourceName ? ` — ${String(data.resourceName).trim()}` : "";
      subject = `[MWT · RESOURCE] Resource suggestion or correction${resName}`;
      break;
    }
    case "RESOURCE_DISCOVERY": {
      const refId = data.docketId || data.referenceId || "DOCKET-" + Math.floor(100000 + Math.random() * 900000);
      subject = `[MWT · LOOK] Resource discovery request — [${refId}]`;
      // Do not automatically send confirmation email for Ask Us to Look unless explicitly requested
      sendVisitorConfirmation = Boolean(data.optInConfirmation && submittedEmail);
      break;
    }
    case "GOVERNANCE": {
      subject = `[MWT · GOVERNANCE] Board / Advisory Circle interest`;
      break;
    }
  }

  return {
    destinationEmail,
    senderEmail: SENDER_EMAIL,
    subject,
    replyToEmail: submittedEmail,
    sendVisitorConfirmation,
    confirmationSubject,
    confirmationBodyText,
  };
}

/**
 * Filter and format safe email notification bodies based on category.
 * Strictly strips sensitive details from RESOURCE_DISCOVERY requests.
 */
export function buildNotificationEmailContent(
  category: FormCategory,
  data: Record<string, any>
): { html: string; text: string } {
  const timestamp = new Date().toISOString();

  if (category === "RESOURCE_DISCOVERY") {
    // PRIVACY ENFORCEMENT: Email ONLY minimal non-identifying metadata
    const docketId = escapeHtml(data.docketId || "DOCKET-PENDING");
    const state = escapeHtml(data.state || "Not specified");
    const county = escapeHtml(data.county || "Not specified");
    const primaryBarriers = Array.isArray(data.primaryBarriers) 
      ? data.primaryBarriers.map(escapeHtml).join(", ") 
      : escapeHtml(data.primaryBarriers || "Not specified");
    const currentIndustry = escapeHtml(data.currentIndustry || "Not specified");
    const contactPreference = escapeHtml(data.contactPreference || (data.email ? "Email provided" : "Anonymous in-memory"));
    const matchCount = escapeHtml(data.matchCount || "N/A");

    const text = `
MAPS WITH TEETH — RESOURCE DISCOVERY DOCKET
--------------------------------------------------
Internal Category: RESOURCE_DISCOVERY
Destination: resources@mapswithteeth.org
Timestamp: ${timestamp}

DOCKET REFERENCE ID: ${docketId}
GEOGRAPHIC REGION: State: ${state} · County: ${county}
BARRIER CATEGORIES: ${primaryBarriers}
WORK BACKGROUND: ${currentIndustry}
MATCHED PATHWAYS COUNT: ${matchCount}
CONTACT PREFERENCE: ${contactPreference}

[PRIVACY NOTICE]: Full narrative, family details, and personal records are excluded from email in accordance with the Maps With Teeth data minimization standard.
    `.trim();

    const html = `
      <div style="font-family: monospace, sans-serif; background-color: #F5F1E8; color: #1C1D1D; padding: 24px; border: 2px solid #1C1D1D; border-radius: 8px; max-width: 600px;">
        <div style="border-bottom: 2px solid #971F26; padding-bottom: 12px; margin-bottom: 16px;">
          <strong style="color: #971F26; font-size: 14px; text-transform: uppercase;">[MWT · LOOK] Resource Discovery Request</strong>
          <div style="font-size: 11px; color: #555;">Ref ID: <strong>${docketId}</strong> · ${timestamp}</div>
        </div>
        
        <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 160px;">Jurisdiction:</td><td>${state} / ${county}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Barrier Categories:</td><td>${primaryBarriers}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Work Context:</td><td>${currentIndustry}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Surfaced Matches:</td><td>${matchCount}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Contact Preference:</td><td>${contactPreference}</td></tr>
        </table>

        <div style="margin-top: 20px; padding: 12px; background-color: #EEE8DD; border-left: 4px solid #971F26; font-size: 11px; color: #333;">
          <strong>Data Minimization Standard:</strong> Full narratives, personal identifiers, and sensitive records are deliberately excluded from email transmission.
        </div>
      </div>
    `;

    return { html, text };
  }

  // Standard Form Notification
  const fields = Object.entries(data)
    .filter(([key]) => !key.startsWith("_") && key !== "optInConfirmation")
    .map(([key, val]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").toUpperCase();
      const value = Array.isArray(val) ? val.join(", ") : String(val ?? "");
      return { label, value: escapeHtml(value) };
    });

  const textFields = fields.map((f) => `${f.label}: ${f.value}`).join("\n");
  const text = `
MAPS WITH TEETH — FORM SUBMISSION
--------------------------------------------------
Category: ${category}
Timestamp: ${timestamp}

${textFields}
  `.trim();

  const rows = fields
    .map(
      (f) => `
      <tr style="border-bottom: 1px solid #D9D1C4;">
        <td style="padding: 8px 4px; font-weight: bold; font-family: monospace; font-size: 11px; color: #971F26; width: 180px; vertical-align: top;">${f.label}:</td>
        <td style="padding: 8px 4px; font-size: 13px; color: #1C1D1D; font-family: sans-serif; white-space: pre-wrap;">${f.value}</td>
      </tr>
    `
    )
    .join("");

  const html = `
    <div style="font-family: sans-serif; background-color: #F5F1E8; color: #1C1D1D; padding: 24px; border: 2px solid #1C1D1D; border-radius: 8px; max-width: 650px;">
      <div style="border-bottom: 2px solid #1C1D1D; padding-bottom: 12px; margin-bottom: 16px;">
        <span style="font-family: monospace; font-size: 11px; color: #971F26; font-weight: bold; text-transform: uppercase;">MAPS WITH TEETH · INCOMING NOTIFICATION</span>
        <h2 style="margin: 4px 0 0 0; font-size: 18px; color: #1C1D1D; font-family: serif;">Category: ${category}</h2>
        <div style="font-size: 11px; color: #666; font-family: monospace; margin-top: 4px;">Received: ${timestamp}</div>
      </div>
      
      <table style="width: 100%; border-collapse: collapse;">
        ${rows}
      </table>

      <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #D9D1C4; font-size: 10px; font-family: monospace; color: #777; text-align: center;">
        Maps With Teeth · Independent Public-Interest Resource Intelligence · Central Texas Pilot
      </div>
    </div>
  `;

  return { html, text };
}
