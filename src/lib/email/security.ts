/**
 * FORM PROTECTION & SECURITY UTILITY
 * 
 * Includes:
 * 1. Rate limiting (sliding window per client IP)
 * 2. Honeypot spam trap detection
 * 3. Max field length enforcement
 * 4. Duplicate submission debounce window
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();
const recentSubmissions = new Map<string, number>();

// Clean up stale cache periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(key);
    }
  }
  for (const [hash, time] of recentSubmissions.entries()) {
    if (now - time > 60000) {
      recentSubmissions.delete(hash);
    }
  }
}, 60000);

export const MAX_LENGTHS = {
  SHORT_TEXT: 120,    // Name, Organization, Role, Subject
  EMAIL: 180,         // Email address
  PHONE: 40,          // Phone number
  MEDIUM_TEXT: 600,   // Expertise, short answers
  LONG_TEXT: 4000,    // Feedback notes, narrative
};

export interface SecurityValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates request rate limits per client IP (e.g., max 10 submissions per 10 minutes)
 */
export function checkRateLimit(clientIp: string, maxRequests = 10, windowMs = 600000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(clientIp);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

/**
 * Check if the submission is a spam honeypot hit
 */
export function checkHoneypot(data: Record<string, any>): boolean {
  // Any hidden honeypot field filled indicates bot activity
  const honeypotFields = ["_hp", "_gotcha", "website_url_trap", "company_fax"];
  for (const field of honeypotFields) {
    if (data[field] && String(data[field]).trim().length > 0) {
      return false; // Spam detected
    }
  }
  return true;
}

/**
 * Check for accidental duplicate submissions within 30 seconds
 */
export function checkDuplicateSubmission(category: string, data: Record<string, any>): boolean {
  const keyContent = `${category}_${data.email || ""}_${data.name || ""}_${data.organization || ""}_${data.docketId || ""}`;
  const now = Date.now();
  const lastTime = recentSubmissions.get(keyContent);

  if (lastTime && now - lastTime < 30000) {
    return false; // Duplicate
  }

  recentSubmissions.set(keyContent, now);
  return true;
}

/**
 * Enforce maximum field lengths to avoid payload overflows
 */
export function validateFieldLengths(data: Record<string, any>): SecurityValidationResult {
  for (const [key, val] of Object.entries(data)) {
    if (typeof val === "string") {
      const len = val.length;
      if (key.toLowerCase().includes("email") && len > MAX_LENGTHS.EMAIL) {
        return { isValid: false, error: `Email address exceeds maximum length of ${MAX_LENGTHS.EMAIL} characters.` };
      }
      if ((key.toLowerCase().includes("name") || key.toLowerCase().includes("org")) && len > MAX_LENGTHS.SHORT_TEXT) {
        return { isValid: false, error: `Field '${key}' exceeds maximum length of ${MAX_LENGTHS.SHORT_TEXT} characters.` };
      }
      if (len > MAX_LENGTHS.LONG_TEXT) {
        return { isValid: false, error: `Field '${key}' exceeds maximum permitted character limit.` };
      }
    }
  }
  return { isValid: true };
}
