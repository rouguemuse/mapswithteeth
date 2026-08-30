import { Resend } from "resend";
import {
  FormCategory,
  resolveFormRouting,
  buildNotificationEmailContent,
  SENDER_EMAIL,
} from "./routing";

interface SendFormEmailOptions {
  category: FormCategory;
  data: Record<string, any>;
}

export interface MailerResponse {
  success: boolean;
  messageId?: string;
  confirmationSent?: boolean;
  error?: string;
  simulated?: boolean;
}

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

/**
 * Central server-side dispatcher for all website form emails.
 */
export async function sendFormEmail({
  category,
  data,
}: SendFormEmailOptions): Promise<MailerResponse> {
  const routing = resolveFormRouting(category, data);
  const content = buildNotificationEmailContent(category, data);

  // Development / fallback mode when Resend API key is not configured
  if (!resend) {
    console.info(
      `[DEV / SIMULATED EMAIL DISPATCH]\n` +
      `Category: ${category}\n` +
      `To: ${routing.destinationEmail}\n` +
      `From: ${routing.senderEmail}\n` +
      `Subject: ${routing.subject}\n` +
      `Reply-To: ${routing.replyToEmail || "None"}\n` +
      `Send Visitor Confirmation: ${routing.sendVisitorConfirmation ? "YES to " + routing.replyToEmail : "NO"}\n` +
      `Payload:\n${content.text}`
    );

    return {
      success: true,
      messageId: `sim_${Date.now()}`,
      confirmationSent: routing.sendVisitorConfirmation,
      simulated: true,
    };
  }

  try {
    // 1. Send Internal Notification to the designated team inbox
    const notificationPayload: any = {
      from: SENDER_EMAIL,
      to: [routing.destinationEmail],
      subject: routing.subject,
      html: content.html,
      text: content.text,
    };

    if (routing.replyToEmail) {
      notificationPayload.replyTo = routing.replyToEmail;
    }

    const { data: notificationResult, error: notificationError } =
      await resend.emails.send(notificationPayload);

    if (notificationError) {
      console.error("[RESEND ERROR] Failed to dispatch internal notification:", notificationError);
      return {
        success: false,
        error: notificationError.message,
      };
    }

    let confirmationSent = false;

    // 2. Send Visitor Confirmation (if applicable and email provided)
    if (routing.sendVisitorConfirmation && routing.replyToEmail) {
      try {
        const { error: confError } = await resend.emails.send({
          from: SENDER_EMAIL,
          to: [routing.replyToEmail],
          replyTo: routing.destinationEmail,
          subject: routing.confirmationSubject,
          text: routing.confirmationBodyText,
          html: `
            <div style="font-family: sans-serif; background-color: #F5F1E8; color: #1C1D1D; padding: 24px; border: 2px solid #1C1D1D; border-radius: 8px; max-width: 540px;">
              <div style="border-bottom: 2px solid #971F26; padding-bottom: 12px; margin-bottom: 16px;">
                <span style="font-family: monospace; font-size: 11px; color: #971F26; font-weight: bold; text-transform: uppercase;">MAPS WITH TEETH</span>
                <h3 style="margin: 4px 0 0 0; font-size: 16px; color: #1C1D1D;">Message Received</h3>
              </div>
              <p style="font-size: 13px; line-height: 1.6; color: #1C1D1D;">
                We received your message. Maps With Teeth is an initiative in development, and response times may vary. Thank you for helping us build this carefully.
              </p>
              <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #D9D1C4; font-size: 11px; font-family: monospace; color: #666;">
                — The Maps With Teeth Initiative · <a href="https://mapswithteeth.org" style="color: #971F26; text-decoration: none;">mapswithteeth.org</a>
              </div>
            </div>
          `,
        });

        if (!confError) {
          confirmationSent = true;
        } else {
          console.warn("[RESEND WARNING] Visitor confirmation failed:", confError);
        }
      } catch (confEx) {
        console.warn("[RESEND WARNING] Visitor confirmation exception:", confEx);
      }
    }

    return {
      success: true,
      messageId: notificationResult?.id,
      confirmationSent,
    };
  } catch (err: any) {
    console.error("[SERVER ERROR] Exception during email send:", err);
    return {
      success: false,
      error: err.message || "Failed to process email dispatch",
    };
  }
}
