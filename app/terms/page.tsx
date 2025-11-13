import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Venn',
  description: 'Terms of Service for Venn - Review the terms and conditions for using our platform.',
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 13, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#acceptance" className="text-orange-600 hover:text-orange-700 hover:underline">1. Acceptance of Terms</a></li>
            <li><a href="#description" className="text-orange-600 hover:text-orange-700 hover:underline">2. Description of Service</a></li>
            <li><a href="#eligibility" className="text-orange-600 hover:text-orange-700 hover:underline">3. Eligibility</a></li>
            <li><a href="#accounts" className="text-orange-600 hover:text-orange-700 hover:underline">4. User Accounts and Registration</a></li>
            <li><a href="#referral-program" className="text-orange-600 hover:text-orange-700 hover:underline">5. Referral Rewards Program</a></li>
            <li><a href="#acceptable-use" className="text-orange-600 hover:text-orange-700 hover:underline">6. Acceptable Use Policy</a></li>
            <li><a href="#intellectual-property" className="text-orange-600 hover:text-orange-700 hover:underline">7. Intellectual Property Rights</a></li>
            <li><a href="#user-content" className="text-orange-600 hover:text-orange-700 hover:underline">8. User-Generated Content</a></li>
            <li><a href="#disclaimers" className="text-orange-600 hover:text-orange-700 hover:underline">9. Disclaimers and Limitations of Liability</a></li>
            <li><a href="#indemnification" className="text-orange-600 hover:text-orange-700 hover:underline">10. Indemnification</a></li>
            <li><a href="#termination" className="text-orange-600 hover:text-orange-700 hover:underline">11. Termination</a></li>
            <li><a href="#dispute-resolution" className="text-orange-600 hover:text-orange-700 hover:underline">12. Dispute Resolution</a></li>
            <li><a href="#governing-law" className="text-orange-600 hover:text-orange-700 hover:underline">13. Governing Law</a></li>
            <li><a href="#modifications" className="text-orange-600 hover:text-orange-700 hover:underline">14. Modifications to Terms</a></li>
            <li><a href="#miscellaneous" className="text-orange-600 hover:text-orange-700 hover:underline">15. Miscellaneous</a></li>
            <li><a href="#contact" className="text-orange-600 hover:text-orange-700 hover:underline">16. Contact Information</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Venn! These Terms of Service ("Terms") constitute a legally binding agreement between you and Venn Corporation ("Venn," "we," "us," or "our") governing your use of our website, mobile application, and all related services (collectively, the "Service").
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using the Service, you agree to be bound by these Terms and our <Link href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>. If you do not agree to these Terms, you may not access or use the Service.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section id="description" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Venn is a social connection platform designed to help people build meaningful friendships and turn plans into reality. Our Service includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Waitlist registration and management</li>
              <li>Referral rewards program with leaderboard tracking</li>
              <li>Social networking features (when available)</li>
              <li>Event discovery and participation (when available)</li>
              <li>User matching based on interests (when available)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Please note that certain features are currently in development and may not be available during the waitlist period. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
            </p>
          </section>

          <section id="eligibility" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
            <p className="text-gray-700 mb-4">
              To use our Service, you must meet the following requirements:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Age Requirement:</strong> You must be at least 13 years old to create an account</li>
              <li><strong>Legal Capacity:</strong> You must have the legal capacity to enter into binding contracts</li>
              <li><strong>Compliance:</strong> You must not be prohibited from using the Service under applicable laws</li>
              <li><strong>Truthfulness:</strong> All information you provide must be accurate and complete</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you are between 13 and 18 years old (or the age of majority in your jurisdiction), you represent that your legal guardian has reviewed and agrees to these Terms on your behalf.
            </p>
            <p className="text-gray-700">
              We reserve the right to verify your eligibility at any time and may request additional information or documentation.
            </p>
          </section>

          <section id="accounts" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Account Creation</h3>
            <p className="text-gray-700 mb-4">
              To join the waitlist and use certain features, you must create an account by providing:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your full name</li>
              <li>Your age</li>
              <li>Your gender (optional)</li>
              <li>A valid email address</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Account Security</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use or security breach</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Account Restrictions</h3>
            <p className="text-gray-700 mb-4">
              You may only create one account. Creating multiple accounts to manipulate the referral program or leaderboard is strictly prohibited and may result in permanent suspension.
            </p>
          </section>

          <section id="referral-program" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Referral Rewards Program</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Program Overview</h3>
            <p className="text-gray-700 mb-4">
              Our referral rewards program is a skill-based competition where users earn points by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Joining the Waitlist:</strong> 10 points for signing up</li>
              <li><strong>Successful Referrals:</strong> 20 points for each person who joins using your referral code</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Points determine your position on the public leaderboard and your eligibility for rewards. For complete program rules, please see our <Link href="/rewards" className="text-orange-600 hover:underline">Referral Program Official Rules</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Program Rules</h3>
            <p className="text-gray-700 mb-4">
              By participating in the referral program, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Share your referral link only with people you know personally</li>
              <li>Not use bots, scripts, or automated tools to generate referrals</li>
              <li>Not create fake accounts or incentivize fraudulent signups</li>
              <li>Not engage in spam, mass emailing, or unsolicited outreach</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Fraud and Disqualification</h3>
            <p className="text-gray-700 mb-4">
              We employ fraud detection systems including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address monitoring and rate limiting</li>
              <li>Disposable email domain blocking</li>
              <li>Referral pattern analysis</li>
              <li>Manual review of suspicious activity</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Users found engaging in fraudulent activity will be:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Disqualified from the program</li>
              <li>Removed from the leaderboard</li>
              <li>Forfeited all points and rewards</li>
              <li>Permanently banned from the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 Program Modifications</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Modify point values and reward tiers</li>
              <li>Extend or shorten the program duration</li>
              <li>Change prize descriptions or substitute prizes of equal or greater value</li>
              <li>Suspend or terminate the program at any time</li>
            </ul>
            <p className="text-gray-700">
              Material changes will be communicated via email and posted on our website.
            </p>
          </section>

          <section id="acceptable-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use Policy</h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Prohibited Activities</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Impersonate any person or entity or falsely state your affiliation</li>
              <li>Harass, abuse, threaten, or intimidate other users</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or other user accounts</li>
              <li>Use automated systems (bots, scrapers, crawlers) without permission</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Service</li>
              <li>Remove, alter, or obscure any proprietary notices or branding</li>
              <li>Engage in any activity that interferes with or disrupts the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Content Restrictions</h3>
            <p className="text-gray-700 mb-4">
              You may not post, upload, or transmit content that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Is illegal, fraudulent, or deceptive</li>
              <li>Infringes intellectual property or privacy rights</li>
              <li>Contains hate speech, discrimination, or incites violence</li>
              <li>Is sexually explicit or pornographic</li>
              <li>Promotes illegal drugs, weapons, or dangerous activities</li>
              <li>Contains personal information of others without consent</li>
            </ul>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Venn's Intellectual Property</h3>
            <p className="text-gray-700 mb-4">
              The Service and all content, features, and functionality (including but not limited to software, text, displays, images, video, audio, and design) are owned by Venn Corporation and are protected by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>United States and international copyright laws</li>
              <li>Trademark laws</li>
              <li>Patent laws</li>
              <li>Other intellectual property rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Limited License</h3>
            <p className="text-gray-700 mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access and use the Service for your personal, non-commercial use</li>
              <li>Share your referral link to invite others to the Service</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use our branding or trademarks without written permission</li>
              <li>Copy, modify, distribute, or create derivative works</li>
              <li>Use the Service for commercial purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Trademarks</h3>
            <p className="text-gray-700 mb-4">
              "Venn," the Venn logo, and other marks are trademarks of Venn Corporation. You may not use these trademarks without our prior written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Copyright Infringement</h3>
            <p className="text-gray-700 mb-4">
              If you believe content on our Service infringes your copyright, please contact us at support@vennapp.co with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Description of the copyrighted work</li>
              <li>Location of the infringing material</li>
              <li>Your contact information</li>
              <li>Statement of good faith belief</li>
              <li>Statement of accuracy under penalty of perjury</li>
              <li>Electronic or physical signature</li>
            </ul>
          </section>

          <section id="user-content" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User-Generated Content</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any content you submit, post, or display on the Service ("User Content"). However, by submitting User Content, you grant Venn a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use, copy, modify, and display your User Content</li>
              <li>Create derivative works from your User Content</li>
              <li>Distribute and publicly display your User Content in connection with the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Responsibility for Content</h3>
            <p className="text-gray-700 mb-4">
              You are solely responsible for your User Content and the consequences of posting it. You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate these Terms or any laws</li>
              <li>Your User Content does not infringe third-party rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Content Moderation</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right, but are not obligated, to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Monitor and review User Content</li>
              <li>Remove or refuse to post any User Content</li>
              <li>Terminate accounts that violate our policies</li>
            </ul>
          </section>

          <section id="disclaimers" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Disclaimer</h3>
            <p className="text-gray-700 mb-4 uppercase font-semibold">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-700 mb-4">
              We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement and accuracy</li>
              <li>Uninterrupted or error-free service</li>
              <li>Security or freedom from viruses</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VENN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
            </p>
            <p className="text-gray-700 mb-4">
              Our total liability for any claims arising from or related to the Service shall not exceed the greater of:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>$100 USD, or</li>
              <li>The value of any prizes you were entitled to receive (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Third-Party Services</h3>
            <p className="text-gray-700 mb-4">
              The Service may contain links to third-party websites or services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The content or practices of third-party services</li>
              <li>Any damages or losses caused by third-party services</li>
              <li>Your interactions with third parties</li>
            </ul>
          </section>

          <section id="indemnification" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Venn Corporation, its officers, directors, employees, contractors, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your User Content</li>
              <li>Your fraudulent or illegal activities</li>
            </ul>
            <p className="text-gray-700">
              This indemnification obligation survives termination of these Terms and your use of the Service.
            </p>
          </section>

          <section id="termination" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us at support@vennapp.co. Upon termination, you will lose access to your account, referral code, points, and leaderboard position.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Termination by Venn</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account immediately, without prior notice or liability, for any reason, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Creating multiple accounts</li>
              <li>Abusive behavior toward other users or staff</li>
              <li>At our sole discretion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.3 Effects of Termination</h3>
            <p className="text-gray-700 mb-4">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your right to use the Service immediately ceases</li>
              <li>We may delete your account and User Content</li>
              <li>You forfeit any unclaimed rewards or prizes</li>
              <li>Sections of these Terms that should survive will remain in effect</li>
            </ul>
          </section>

          <section id="dispute-resolution" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Informal Resolution</h3>
            <p className="text-gray-700 mb-4">
              Before filing a legal claim, you agree to first contact us at support@vennapp.co to attempt to resolve the dispute informally. We will work in good faith to resolve the issue within 30 days.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Binding Arbitration</h3>
            <p className="text-gray-700 mb-4">
              If informal resolution fails, you agree that any dispute arising from or relating to these Terms or the Service shall be resolved through binding arbitration, except:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You may bring claims in small claims court if they qualify</li>
              <li>Either party may seek injunctive relief in court for intellectual property infringement</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Arbitration will be conducted by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration will be held in San Francisco, California, or another mutually agreed location.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Class Action Waiver</h3>
            <p className="text-gray-700 mb-4 uppercase font-semibold">
              YOU AGREE THAT DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.4 Opt-Out</h3>
            <p className="text-gray-700 mb-4">
              You may opt out of the arbitration agreement within 30 days of accepting these Terms by emailing support@vennapp.co with "Arbitration Opt-Out" in the subject line.
            </p>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms and your use of the Service are governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700">
              If the arbitration agreement is found to be unenforceable or if you validly opt out, you agree to submit to the exclusive jurisdiction of the state and federal courts located in San Francisco County, California.
            </p>
          </section>

          <section id="modifications" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. When we make material changes, we will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Update the "Last Updated" date at the top of these Terms</li>
              <li>Notify you via email (if you are registered)</li>
              <li>Display a prominent notice on our website</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Your continued use of the Service after the effective date of the revised Terms constitutes acceptance of the changes.
            </p>
            <p className="text-gray-700">
              If you do not agree to the modified Terms, you must stop using the Service and may terminate your account.
            </p>
          </section>

          <section id="miscellaneous" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Miscellaneous</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with our Privacy Policy and any additional terms you agree to, constitute the entire agreement between you and Venn regarding the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.3 Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign or transfer these Terms or your account without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.5 Force Majeure</h3>
            <p className="text-gray-700 mb-4">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, pandemics, or government actions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.6 Survival</h3>
            <p className="text-gray-700 mb-4">
              Sections that by their nature should survive termination will survive, including: Intellectual Property Rights, Disclaimers, Limitations of Liability, Indemnification, Dispute Resolution, and Governing Law.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about these Terms, please contact us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">Venn Corporation</p>
              <p className="text-gray-700 mb-1">1526 Leavenworth St</p>
              <p className="text-gray-700 mb-1">San Francisco, CA 94109</p>
              <p className="text-gray-700 mb-1">United States</p>
              <p className="text-gray-700 mt-4">
                <strong>Email:</strong> <a href="mailto:support@vennapp.co" className="text-orange-600 hover:underline">support@vennapp.co</a>
              </p>
            </div>
            <p className="text-gray-700">
              We will respond to your inquiry within 5 business days.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Venn Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
