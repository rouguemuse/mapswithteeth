import { NextRequest, NextResponse } from "next/server";
import { FormCategory, FORM_ROUTING_MAP } from "@/lib/email/routing";
import {
  checkRateLimit,
  checkHoneypot,
  checkDuplicateSubmission,
  validateFieldLengths,
} from "@/lib/email/security";
import { sendFormEmail } from "@/lib/email/mailer";

export async function POST(request: NextRequest) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. Rate Limiting Check
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { category, data } = body;

    // 2. Category Validation against strict server routing map
    if (!category || !(category in FORM_ROUTING_MAP)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or unsupported form category.",
        },
        { status: 400 }
      );
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid submission payload.",
        },
        { status: 400 }
      );
    }

    // 3. Honeypot Spam Trap Check
    if (!checkHoneypot(data) || (body._hp && String(body._hp).trim().length > 0)) {
      // Silently accept spam to prevent bots from testing alternatives
      return NextResponse.json({
        success: true,
        message: "Your submission has been received.",
      });
    }

    // 4. Maximum Field Length Validation
    const lengthValidation = validateFieldLengths(data);
    if (!lengthValidation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: lengthValidation.error,
        },
        { status: 400 }
      );
    }

    // 5. Duplicate Submission Debounce
    if (!checkDuplicateSubmission(category, data)) {
      return NextResponse.json(
        {
          success: false,
          error: "A duplicate submission was recently received. Please do not re-submit immediately.",
        },
        { status: 429 }
      );
    }

    // 6. Server-Side Mail Dispatch
    const mailResult = await sendFormEmail({
      category: category as FormCategory,
      data,
    });

    if (!mailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: mailResult.error || "Failed to dispatch message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully.",
      referenceId: mailResult.messageId,
      confirmationSent: mailResult.confirmationSent,
    });
  } catch (err: any) {
    console.error("[API ERROR] Error processing form submission:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
