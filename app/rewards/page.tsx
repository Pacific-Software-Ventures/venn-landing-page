import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Referral Rewards Program - Venn',
  description: 'Official rules for the Venn Referral Rewards Program - Learn how to earn points and win prizes.',
};

export default function RewardsProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBEB] via-white to-white">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Referral Rewards Program
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Official Rules
          </p>
          <p className="text-lg text-gray-600">
            Last Updated: January 13, 2025
          </p>
        </div>

        {/* Key Info Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Information</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Program End:</strong> December 31, 2025 at 11:59 PM EST</li>
                <li><strong>Total Prize Value:</strong> $10,000+</li>
                <li><strong>No Purchase Necessary</strong> - Free to join and participate</li>
                <li><strong>Age Requirement:</strong> 13 years or older</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-orange-600 hover:text-orange-700 hover:underline">1. Program Overview</a></li>
            <li><a href="#eligibility" className="text-orange-600 hover:text-orange-700 hover:underline">2. Eligibility Requirements</a></li>
            <li><a href="#how-to-participate" className="text-orange-600 hover:text-orange-700 hover:underline">3. How to Participate</a></li>
            <li><a href="#points-system" className="text-orange-600 hover:text-orange-700 hover:underline">4. Points System</a></li>
            <li><a href="#prizes" className="text-orange-600 hover:text-orange-700 hover:underline">5. Prize Tiers and Values</a></li>
            <li><a href="#program-period" className="text-orange-600 hover:text-orange-700 hover:underline">6. Program Period</a></li>
            <li><a href="#winner-notification" className="text-orange-600 hover:text-orange-700 hover:underline">7. Winner Notification and Prize Claiming</a></li>
            <li><a href="#fraud" className="text-orange-600 hover:text-orange-700 hover:underline">8. Fraud Prevention and Disqualification</a></li>
            <li><a href="#general-conditions" className="text-orange-600 hover:text-orange-700 hover:underline">9. General Conditions</a></li>
            <li><a href="#limitations" className="text-orange-600 hover:text-orange-700 hover:underline">10. Limitations of Liability</a></li>
            <li><a href="#privacy" className="text-orange-600 hover:text-orange-700 hover:underline">11. Privacy and Data Use</a></li>
            <li><a href="#modifications" className="text-orange-600 hover:text-orange-700 hover:underline">12. Right to Modify or Terminate</a></li>
            <li><a href="#contact" className="text-orange-600 hover:text-orange-700 hover:underline">13. Contact Information</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Program Overview</h2>
            <p className="text-gray-700 mb-4">
              The Venn Referral Rewards Program (the "Program") is a <strong>skill-based competition</strong> where participants earn points by successfully referring new users to join the Venn waitlist. This is NOT a lottery, sweepstakes, or game of chance. Success in the Program depends on your skill, effort, and ability to share Venn with your network.
            </p>
            <p className="text-gray-700 mb-4">
              The Program is sponsored by Venn Corporation ("Venn," "we," "us," or "our"), a Delaware corporation with offices at 1526 Leavenworth St, San Francisco, CA 94109.
            </p>
            <p className="text-gray-700">
              By participating in the Program, you agree to these Official Rules and our <Link href="/terms" className="text-orange-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section id="eligibility" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility Requirements</h2>
            <p className="text-gray-700 mb-4">
              To participate in the Program, you must meet ALL of the following requirements:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Age</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You must be at least 13 years old at the time of entry</li>
              <li>Participants under 18 require parental or guardian consent</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Geographic Requirements</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Open to legal residents worldwide</li>
              <li>Subject to local laws and regulations in your jurisdiction</li>
              <li>Void where prohibited by law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Account Requirements</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Must have a valid Venn account on the waitlist</li>
              <li>Must provide accurate and truthful information</li>
              <li>Must have a valid email address for communications</li>
              <li>One account per person (multiple accounts are prohibited)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 Exclusions</h3>
            <p className="text-gray-700 mb-4">
              The following individuals are NOT eligible to participate:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Employees, officers, and directors of Venn Corporation</li>
              <li>Immediate family members (spouse, parent, child, sibling) of Venn employees</li>
              <li>Anyone living in the same household as a Venn employee</li>
              <li>Individuals previously banned or disqualified from Venn</li>
            </ul>
          </section>

          <section id="how-to-participate" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Participate</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Join the Waitlist</h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li>Visit <a href="https://vennapp.co" className="text-orange-600 hover:underline">vennapp.co</a></li>
              <li>Complete the waitlist signup form with your name, age, gender, and email</li>
              <li>Accept our Terms of Service and Privacy Policy</li>
              <li>Submit the form to create your account</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Get Your Referral Code</h3>
            <p className="text-gray-700 mb-4">
              Upon successful signup, you will receive:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>A unique referral code (e.g., "ABC123XYZ")</li>
              <li>Your personal referral link (e.g., "vennapp.co?ref=ABC123XYZ")</li>
              <li>10 base points for joining the waitlist</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Share Your Referral Link</h3>
            <p className="text-gray-700 mb-4">
              Share your unique referral link with friends, family, and your network through:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Direct messages and personal conversations</li>
              <li>Social media posts (Twitter, Instagram, LinkedIn, etc.)</li>
              <li>Text messages or email to people you know</li>
              <li>Word of mouth and personal recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Earn Points</h3>
            <p className="text-gray-700 mb-4">
              When someone joins the waitlist using your referral link, you earn 20 points per successful referral.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Track Your Progress</h3>
            <p className="text-gray-700 mb-4">
              Monitor your performance on the public leaderboard at <a href="https://vennapp.co" className="text-orange-600 hover:underline">vennapp.co</a> which displays:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your current rank</li>
              <li>Total points accumulated</li>
              <li>Number of successful referrals</li>
              <li>Top 10 participants (updated in real-time)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Purchase Necessary</h3>
            <p className="text-gray-700">
              Participation is completely free. No purchase, payment, or subscription is required to enter or win.
            </p>
          </section>

          <section id="points-system" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Points System</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 How Points Are Earned</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900">Joining the Waitlist</p>
                    <p className="text-sm text-gray-600">One-time reward for creating an account</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">10 pts</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Successful Referral</p>
                    <p className="text-sm text-gray-600">Per person who joins using your referral link</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">20 pts</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 What Counts as a Valid Referral</h3>
            <p className="text-gray-700 mb-4">
              A referral is valid when ALL of the following conditions are met:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The new user clicks your unique referral link</li>
              <li>They complete the full waitlist signup form</li>
              <li>They provide a valid, non-disposable email address</li>
              <li>They are not flagged by our fraud detection system</li>
              <li>They have not previously created an account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 What Does NOT Count</h3>
            <p className="text-gray-700 mb-4">
              The following will NOT earn you points:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Self-referrals (referring yourself with a different email)</li>
              <li>Fake accounts or bot-generated signups</li>
              <li>Duplicate accounts from the same person</li>
              <li>Signups using disposable or temporary email addresses</li>
              <li>Referrals flagged as fraudulent or suspicious</li>
              <li>Incomplete or abandoned signup forms</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Leaderboard Rankings</h3>
            <p className="text-gray-700 mb-4">
              Your position on the leaderboard is determined by:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Primary:</strong> Total points (highest to lowest)</li>
              <li><strong>Tiebreaker:</strong> Earlier signup timestamp (first to reach that point total)</li>
            </ol>
            <p className="text-gray-700">
              The leaderboard updates in real-time and displays your current rank among all participants.
            </p>
          </section>

          <section id="prizes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prize Tiers and Values</h2>
            <p className="text-gray-700 mb-4">
              Prizes will be awarded based on final leaderboard standings when the Program ends on December 31, 2025 at 11:59 PM EST.
            </p>

            <div className="space-y-6">
              {/* Rank 1 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-300 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Rank #1 - Champion
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">$2,000+ Total Value</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>4 VIP Yacht Party Tickets</strong> OR <strong>$250 Cash</strong> (winner's choice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Founders Dinner:</strong> Michelin-starred restaurant or House of Prime Rib (up to $150 value)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Lifetime Early Access</strong> to all Venn features and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>"Hall of Fame" Founder Badge</strong> in the app</span>
                  </li>
                </ul>
              </div>

              {/* Rank 2-10 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Ranks #2-10
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">$500+ Value Each</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>1 Free Flagship Venn Event Ticket</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>$100 Delta Airlines Credit</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Early Access</strong> 48 hours before public launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>"Early Architect" Badge</strong> in the app</span>
                  </li>
                </ul>
              </div>

              {/* Rank 11-25 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Ranks #11-25
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">$300+ Value Each</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Free House of Prime Rib Dinner</strong> (up to $150 value)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>30% off</strong> first 3 event tickets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Early Access</strong> 24 hours before public launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>"First Cohort" Badge</strong> in the app</span>
                  </li>
                </ul>
              </div>

              {/* Rank 26-100 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Ranks #26-100
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">$100+ Value Each</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Free 7-Day Venn+ Trial</strong> access code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Skip-the-line matching</strong> at launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Limited edition physical collectible</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Prize values are approximate and may vary based on availability and market rates. Venn reserves the right to substitute prizes of equal or greater value at its discretion.
              </p>
            </div>
          </section>

          <section id="program-period" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Program Period</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Start and End Dates</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Program Start:</strong> Began with initial waitlist launch</li>
              <li><strong>Program End:</strong> December 31, 2025 at 11:59:59 PM Eastern Standard Time (EST)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Signups completed after the end time will NOT be eligible for prizes, even if using a referral link from before the deadline.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Winner Determination</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Leaderboard Freeze:</strong> Final standings will be frozen on January 1, 2026 at 12:00 AM EST</li>
              <li><strong>Verification Period:</strong> January 1-7, 2026 (Venn will verify accounts for fraud)</li>
              <li><strong>Winners Announced:</strong> By January 15, 2026</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Time Zone</h3>
            <p className="text-gray-700">
              All times referenced in these rules are Eastern Standard Time (EST). It is your responsibility to ensure you understand the deadline in your local time zone.
            </p>
          </section>

          <section id="winner-notification" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Winner Notification and Prize Claiming</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Notification Method</h3>
            <p className="text-gray-700 mb-4">
              Winners will be notified via:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Email sent to the address on file</li>
              <li>Public announcement on vennapp.co</li>
              <li>Social media announcement (X/Twitter: @zedfromvenn, Instagram: @app.venn)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Response Deadline</h3>
            <p className="text-gray-700 mb-4">
              Winners must respond within <strong>30 days</strong> of notification to claim their prize. Failure to respond within this timeframe will result in forfeiture of the prize, which may be awarded to the next eligible participant.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Verification and Documentation</h3>
            <p className="text-gray-700 mb-4">
              Before receiving prizes, winners must:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Confirm identity (may require government-issued ID)</li>
              <li>Verify age and eligibility</li>
              <li>Sign and return an affidavit of eligibility and liability release</li>
              <li>Complete any required tax forms (see Section 7.5)</li>
              <li>Provide shipping address (for physical prizes)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Prize Delivery</h3>
            <p className="text-gray-700 mb-4">
              Prizes will be delivered as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Cash Prizes:</strong> Sent via PayPal, Venmo, Zelle, or check within 60 days of verification</li>
              <li><strong>Event Tickets:</strong> Digital codes or vouchers emailed to winner</li>
              <li><strong>Gift Cards/Credits:</strong> Digital codes emailed within 30 days</li>
              <li><strong>Physical Items:</strong> Shipped via USPS/UPS within 60 days (US only; international winners receive cash equivalent)</li>
              <li><strong>App Features:</strong> Activated upon app launch</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.5 Taxes and Fees</h3>
            <p className="text-gray-700 mb-4">
              <strong>Winners are solely responsible for all applicable federal, state, and local taxes.</strong> For US winners receiving prizes valued at $600 or more, Venn will issue IRS Form 1099-MISC.
            </p>
            <p className="text-gray-700">
              International winners may be subject to withholding taxes and customs fees in their jurisdiction. Winners are responsible for understanding and complying with their local tax obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.6 Prize Restrictions</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Prizes are non-transferable and cannot be sold or exchanged</li>
              <li>No cash substitution except where required by law</li>
              <li>Prizes cannot be combined with other offers or promotions</li>
              <li>Some prizes (e.g., event tickets) may have expiration dates</li>
            </ul>
          </section>

          <section id="fraud" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fraud Prevention and Disqualification</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">
              The following activities are strictly prohibited and will result in immediate disqualification:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Fake Accounts:</strong> Creating multiple accounts or fake user profiles</li>
              <li><strong>Bots and Automation:</strong> Using scripts, bots, or automated tools to generate referrals</li>
              <li><strong>Self-Referrals:</strong> Signing up with different emails to refer yourself</li>
              <li><strong>Incentivized Signups:</strong> Paying or offering rewards to people for signing up</li>
              <li><strong>Email Manipulation:</strong> Using plus addressing (email+1@domain.com) to create duplicate accounts</li>
              <li><strong>Spam:</strong> Mass emailing, posting on forums without permission, or unsolicited outreach</li>
              <li><strong>Misleading Content:</strong> Misrepresenting Venn or making false claims to attract signups</li>
              <li><strong>IP Manipulation:</strong> Using VPNs or proxies to circumvent rate limits</li>
              <li><strong>Collusion:</strong> Coordinating with others to manipulate rankings</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Fraud Detection Systems</h3>
            <p className="text-gray-700 mb-4">
              We employ sophisticated fraud detection including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address monitoring (max 5 signups per IP address)</li>
              <li>Email domain validation (disposable email domains blocked)</li>
              <li>Email normalization (removes plus addressing)</li>
              <li>Referral pattern analysis</li>
              <li>Duplicate account detection</li>
              <li>Manual review of top performers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Consequences of Fraud</h3>
            <p className="text-gray-700 mb-4">
              Participants found engaging in fraudulent activity will face:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Immediate Disqualification</strong> from the Program</li>
              <li><strong>Point Forfeiture</strong> - all points reset to zero</li>
              <li><strong>Leaderboard Removal</strong> - removed from public standings</li>
              <li><strong>Prize Ineligibility</strong> - cannot win or claim any prizes</li>
              <li><strong>Account Termination</strong> - permanent ban from Venn</li>
              <li><strong>Legal Action</strong> - we reserve the right to pursue legal remedies for fraud</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.4 Appeals Process</h3>
            <p className="text-gray-700 mb-4">
              If you believe you were wrongly disqualified, you may appeal by emailing support@vennapp.co within 7 days of disqualification with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your account email and referral code</li>
              <li>Detailed explanation of why the disqualification was incorrect</li>
              <li>Any supporting evidence</li>
            </ul>
            <p className="text-gray-700">
              Appeals will be reviewed within 15 business days. Venn's decision on all appeals is final and binding.
            </p>
          </section>

          <section id="general-conditions" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. General Conditions</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Acceptance of Prize</h3>
            <p className="text-gray-700 mb-4">
              By accepting a prize, winners:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Grant Venn permission to use their name, likeness, and city/state for promotional purposes without compensation</li>
              <li>Release Venn from any liability related to the prize</li>
              <li>Agree to comply with all prize-specific terms and conditions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Force Majeure</h3>
            <p className="text-gray-700 mb-4">
              Venn is not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Technical failures (server outages, internet disruptions, etc.)</li>
              <li>Acts of God, natural disasters, or pandemics</li>
              <li>Unauthorized human intervention or hacking</li>
              <li>Printing, distribution, or programming errors</li>
              <li>Any other circumstances beyond our reasonable control</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Governing Terms</h3>
            <p className="text-gray-700 mb-4">
              This Program is also subject to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Venn <Link href="/terms" className="text-orange-600 hover:underline">Terms of Service</Link></li>
              <li>Venn <Link href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link></li>
            </ul>
            <p className="text-gray-700">
              In case of conflict between these Program Rules and other policies, these Program Rules shall govern with respect to the Program specifically.
            </p>
          </section>

          <section id="limitations" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitations of Liability</h2>
            <p className="text-gray-700 mb-4 uppercase font-semibold">
              BY PARTICIPATING IN THE PROGRAM, YOU AGREE TO RELEASE AND HOLD HARMLESS VENN CORPORATION, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES FROM ANY LIABILITY, INJURY, LOSS, OR DAMAGE ARISING FROM OR RELATED TO YOUR PARTICIPATION OR ANY PRIZE AWARDED.
            </p>
            <p className="text-gray-700 mb-4">
              This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Technical malfunctions or errors</li>
              <li>Lost, late, or misdirected entries</li>
              <li>Incorrect or inaccurate information</li>
              <li>Unauthorized access to personal information</li>
              <li>Prize delivery delays or failures</li>
              <li>Prize quality or fitness for a particular purpose</li>
            </ul>
            <p className="text-gray-700">
              Venn's total liability shall not exceed the actual retail value of the prize awarded to you.
            </p>
          </section>

          <section id="privacy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy and Data Use</h2>
            <p className="text-gray-700 mb-4">
              Information collected during the Program is subject to our <Link href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>. By participating, you consent to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Collection of your name, email, age, gender, IP address, and referral activity</li>
              <li>Public display of your first name and last initial on the leaderboard</li>
              <li>Storage of your data on third-party platforms (Airtable)</li>
              <li>Use of your information for fraud detection and Program administration</li>
              <li>Marketing communications about Venn (you can opt out anytime)</li>
            </ul>
            <p className="text-gray-700">
              Winners' names may be published on our website and social media. If you wish to opt out of this publicity, contact us within 7 days of winning.
            </p>
          </section>

          <section id="modifications" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Right to Modify or Terminate</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Rule Changes</h3>
            <p className="text-gray-700 mb-4">
              Venn reserves the right to modify these Official Rules at any time for any reason, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Clarification of ambiguous language</li>
              <li>Compliance with new laws or regulations</li>
              <li>Addressing unforeseen issues or fraud</li>
              <li>Adjusting point values or prize tiers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Material changes will be posted on vennapp.co and communicated via email. Your continued participation after changes are posted constitutes acceptance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Program Termination</h3>
            <p className="text-gray-700 mb-4">
              Venn reserves the right to suspend or terminate the Program at any time if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Widespread fraud or abuse occurs</li>
              <li>Technical failures make fair operation impossible</li>
              <li>Legal or regulatory issues arise</li>
              <li>Company circumstances require termination</li>
            </ul>
            <p className="text-gray-700">
              In the event of termination, prizes will be awarded based on standings at the time of termination, or prizes may be awarded through alternative methods (e.g., random drawing among eligible participants).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Dispute Resolution</h3>
            <p className="text-gray-700 mb-4">
              All decisions by Venn regarding the Program, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Eligibility determinations</li>
              <li>Point awards and deductions</li>
              <li>Fraud investigations</li>
              <li>Winner selection</li>
              <li>Prize substitutions</li>
              <li>Rule interpretations</li>
            </ul>
            <p className="text-gray-700">
              are final and binding in all respects.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about the Referral Rewards Program, please contact us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">Venn Corporation</p>
              <p className="text-gray-700 mb-1">Referral Program Administrator</p>
              <p className="text-gray-700 mb-1">1526 Leavenworth St</p>
              <p className="text-gray-700 mb-1">San Francisco, CA 94109</p>
              <p className="text-gray-700 mb-1">United States</p>
              <p className="text-gray-700 mt-4">
                <strong>Email:</strong> <a href="mailto:support@vennapp.co" className="text-orange-600 hover:underline">support@vennapp.co</a>
              </p>
              <p className="text-gray-700 mt-2 text-sm">
                Subject Line: "Referral Program Question"
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              We will respond to inquiries within 5 business days.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">To Request a Copy of These Rules</h3>
            <p className="text-gray-700">
              A copy of these Official Rules is available at <a href="https://vennapp.co/rewards" className="text-orange-600 hover:underline">vennapp.co/rewards</a>. You may also request a printed copy by emailing support@vennapp.co or writing to the address above.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 text-center mb-2">
              © 2024 Venn Corporation. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 text-center">
              This is a skill-based referral rewards program. No purchase necessary. Void where prohibited.
              See full Official Rules above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
