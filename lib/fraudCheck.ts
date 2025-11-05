/**
 * Simple fraud prevention checks for referral system
 * Good enough™ for a startup MVP
 */

// Top 20 most common disposable email domains
const DISPOSABLE_DOMAINS = [
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'mailinator.com',
  'throwaway.email',
  'temp-mail.org',
  'yopmail.com',
  'sharklasers.com',
  'guerrillamailblock.com',
  'spam4.me',
  'trashmail.com',
  'mintemail.com',
  'fakeinbox.com',
  'dispostable.com',
  'throwawaymail.com',
  'tempmail.net',
  'getnada.com',
  'mohmal.com',
  'emailondeck.com',
  'maildrop.cc',
];

/**
 * Clean email to prevent +1, +2, etc. tricks
 * Example: "user+1@gmail.com" becomes "user@gmail.com"
 */
export function cleanEmail(email: string): string {
  const lowerEmail = email.toLowerCase().trim();
  const [localPart, domain] = lowerEmail.split('@');

  if (!domain) return lowerEmail;

  // Remove everything after + in local part
  const cleanedLocalPart = localPart.split('+')[0];

  return `${cleanedLocalPart}@${domain}`;
}

/**
 * Check if email is from a disposable email service
 */
export function isDisposableEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  if (!domain) return false;

  return DISPOSABLE_DOMAINS.includes(domain);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Run all email fraud checks
 * Returns { valid: boolean, reason?: string }
 */
export function validateEmailForReferral(email: string): { valid: boolean; reason?: string } {
  if (!isValidEmail(email)) {
    return { valid: false, reason: 'Invalid email format' };
  }

  if (isDisposableEmail(email)) {
    return { valid: false, reason: 'Please use a real email address' };
  }

  return { valid: true };
}

/**
 * Check if IP has exceeded signup limit
 * @param ipSignupCount - Number of times this IP has signed up
 * @param limit - Maximum allowed (default 5)
 */
export function checkIPLimit(ipSignupCount: number, limit: number = 5): {
  allowed: boolean;
  reason?: string
} {
  if (ipSignupCount >= limit) {
    return {
      allowed: false,
      reason: 'Too many signups from this location'
    };
  }

  return { allowed: true };
}

/**
 * Check if referrer has exceeded referral limit
 * @param referralCount - Number of referrals this user has made
 * @param limit - Maximum allowed (default 20)
 */
export function checkReferralLimit(referralCount: number, limit: number = 20): {
  allowed: boolean;
  reason?: string;
} {
  if (referralCount >= limit) {
    return {
      allowed: false,
      reason: 'Referral limit reached',
    };
  }

  return { allowed: true };
}
