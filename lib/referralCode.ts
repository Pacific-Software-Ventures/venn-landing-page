import { customAlphabet } from 'nanoid';

// Generate referral codes like "SARAH2K9" (8 characters, uppercase alphanumeric)
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 8);

/**
 * Generate a unique referral code
 * Format: 8 uppercase alphanumeric characters (e.g., "SARAH2K9")
 */
export function generateReferralCode(): string {
  return nanoid();
}

/**
 * Validate referral code format
 * Must be exactly 8 characters, uppercase alphanumeric
 */
export function isValidReferralCodeFormat(code: string): boolean {
  const regex = /^[A-Z0-9]{8}$/;
  return regex.test(code);
}

/**
 * Format referral link with the base URL
 * @param code - The referral code
 * @param baseUrl - Optional base URL (defaults to current domain)
 */
export function formatReferralLink(code: string, baseUrl?: string): string {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  return `${base}?ref=${code}`;
}
