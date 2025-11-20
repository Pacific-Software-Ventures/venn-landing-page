import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Venn',
  description: 'Privacy Policy for Venn - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 13, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#introduction" className="text-orange-600 hover:text-orange-700 hover:underline">1. Introduction</a></li>
            <li><a href="#information-we-collect" className="text-orange-600 hover:text-orange-700 hover:underline">2. Information We Collect</a></li>
            <li><a href="#how-we-use" className="text-orange-600 hover:text-orange-700 hover:underline">3. How We Use Your Information</a></li>
            <li><a href="#third-party" className="text-orange-600 hover:text-orange-700 hover:underline">4. Third-Party Services</a></li>
            <li><a href="#data-retention" className="text-orange-600 hover:text-orange-700 hover:underline">5. Data Retention and Deletion</a></li>
            <li><a href="#international" className="text-orange-600 hover:text-orange-700 hover:underline">6. International Data Transfers</a></li>
            <li><a href="#your-rights" className="text-orange-600 hover:text-orange-700 hover:underline">7. Your Privacy Rights</a></li>
            <li><a href="#childrens-privacy" className="text-orange-600 hover:text-orange-700 hover:underline">8. Children's Privacy</a></li>
            <li><a href="#security" className="text-orange-600 hover:text-orange-700 hover:underline">9. Security</a></li>
            <li><a href="#changes" className="text-orange-600 hover:text-orange-700 hover:underline">10. Changes to This Policy</a></li>
            <li><a href="#contact" className="text-orange-600 hover:text-orange-700 hover:underline">11. Contact Us</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Venn. This Privacy Policy explains how Venn Corporation ("Venn," "we," "us," or "our") collects, uses, discloses, and protects your personal information when you use our website, mobile application, and services (collectively, the "Service").
            </p>
            <p className="text-gray-700 mb-4">
              We believe in being transparent about how we handle your data. This policy is written in plain language to help you understand your rights and our practices.
            </p>
            <p className="text-gray-700">
              By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          <section id="information-we-collect" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-gray-700 mb-4">
              When you join our waitlist or use our Service, we collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Name:</strong> Your full name</li>
              <li><strong>Age:</strong> Your age (must be 13 or older)</li>
              <li><strong>Gender:</strong> Your gender identity (optional)</li>
              <li><strong>Email Address:</strong> Your contact email for communications</li>
              <li><strong>Referral Information:</strong> If you were referred by another user, we collect the referral code</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Information We Collect Automatically</h3>
            <p className="text-gray-700 mb-4">
              When you interact with our Service, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>IP Address:</strong> For fraud prevention and security purposes</li>
              <li><strong>Referral Codes:</strong> Unique codes generated for your account to track referrals</li>
              <li><strong>Points and Engagement Data:</strong> Your participation in our referral rewards program</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Usage Data:</strong> How you interact with our Service, including pages visited and features used</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Information We Do NOT Collect</h3>
            <p className="text-gray-700 mb-4">
              For transparency, we want to be clear about what we don't collect:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We do not use cookies for tracking purposes</li>
              <li>We do not use third-party analytics tools (like Google Analytics)</li>
              <li>We do not track you across other websites</li>
              <li>We do not collect payment information (our Service is free)</li>
              <li>We do not access your contacts or photos without permission</li>
            </ul>
          </section>

          <section id="how-we-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Provide Our Service:</strong> To operate our waitlist, create your account, and deliver our social connection platform</li>
              <li><strong>Referral Program:</strong> To track referrals, award points, and manage the rewards program leaderboard</li>
              <li><strong>Communications:</strong> To send you updates about your account, the Service, and important announcements</li>
              <li><strong>Fraud Prevention:</strong> To detect and prevent fake accounts, abuse, and fraudulent activity</li>
              <li><strong>Service Improvement:</strong> To understand how users interact with our Service and make improvements</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              <li><strong>Safety and Security:</strong> To maintain the safety and integrity of our platform</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Communications</h3>
            <p className="text-gray-700 mb-4">
              By joining our waitlist, you agree to receive communications about:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your waitlist status and position</li>
              <li>Referral program updates and leaderboard standings</li>
              <li>Product launches and early access opportunities</li>
              <li>Service updates and new features</li>
            </ul>
            <p className="text-gray-700">
              You can opt out of marketing communications at any time by contacting us at support@vennapp.co.
            </p>
          </section>

          <section id="third-party" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services to operate our platform:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Airtable (Database Provider)</h3>
            <p className="text-gray-700 mb-4">
              We use Airtable to store and manage waitlist data. All information you provide is stored on Airtable's secure servers. Airtable's privacy practices are governed by their privacy policy, available at <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">airtable.com/privacy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Vercel (Hosting and Infrastructure)</h3>
            <p className="text-gray-700 mb-4">
              Our website and application are hosted on Vercel's infrastructure. Vercel may process technical data such as IP addresses and request logs. Vercel's privacy policy is available at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Google Fonts</h3>
            <p className="text-gray-700 mb-4">
              We use Google Fonts to display typography on our website. When you visit our site, Google may collect technical information such as IP addresses. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">policies.google.com/privacy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Data Sharing</h3>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or share your personal information with third parties for their marketing purposes. We only share data with service providers as necessary to operate our Service, and we require them to protect your information.
            </p>
          </section>

          <section id="data-retention" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention and Deletion</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 How Long We Keep Your Data</h3>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. Specifically:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Waitlist Data:</strong> Retained until you request deletion or the Service launches</li>
              <li><strong>Referral Program Data:</strong> Retained through January 20, 2026 (end of program) plus 30 days for prize claiming</li>
              <li><strong>IP Addresses:</strong> Retained for 90 days for fraud prevention, then anonymized</li>
              <li><strong>Communication Records:</strong> Retained for customer support purposes for up to 2 years</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 How to Delete Your Data</h3>
            <p className="text-gray-700 mb-4">
              You have the right to request deletion of your personal information. To do so:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
              <li>Email us at support@vennapp.co with "Data Deletion Request" in the subject line</li>
              <li>Include your email address and any other identifying information</li>
              <li>We will process your request within 30 days</li>
            </ol>
            <p className="text-gray-700">
              Note: If you delete your data, you will lose your referral code, points, and leaderboard position. This action cannot be undone.
            </p>
          </section>

          <section id="international" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Venn is based in the United States (San Francisco, California). If you are accessing our Service from outside the United States, please be aware that your information will be transferred to, stored, and processed in the United States.
            </p>
            <p className="text-gray-700 mb-4">
              The United States may have data protection laws that differ from those in your country. By using our Service, you consent to the transfer of your information to the United States and processing in accordance with this Privacy Policy.
            </p>
            <p className="text-gray-700">
              For users in the European Economic Area (EEA), United Kingdom, or Switzerland, we rely on standard contractual clauses and other appropriate safeguards to protect your data during international transfers.
            </p>
          </section>

          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 General Rights (All Users)</h3>
            <p className="text-gray-700 mb-4">
              Regardless of where you live, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (with some exceptions)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 GDPR Rights (EEA/UK/Swiss Users)</h3>
            <p className="text-gray-700 mb-4">
              If you are in the European Economic Area, United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Object to Processing:</strong> Object to our processing of your data for certain purposes</li>
              <li><strong>Restrict Processing:</strong> Request that we limit how we use your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Our lawful basis for processing your data is primarily consent (for waitlist signup) and legitimate interests (for fraud prevention and service improvement).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 CCPA Rights (California Users)</h3>
            <p className="text-gray-700 mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Know:</strong> Know what personal information we collect, use, disclose, and sell</li>
              <li><strong>Access:</strong> Access the specific pieces of personal information we have about you</li>
              <li><strong>Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out of Sale:</strong> We do not sell personal information to third parties</li>
              <li><strong>Non-Discrimination:</strong> Exercise your rights without discrimination</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 How to Exercise Your Rights</h3>
            <p className="text-gray-700 mb-4">
              To exercise any of these rights, contact us at:
            </p>
            <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
              <li><strong>Email:</strong> support@vennapp.co</li>
              <li><strong>Subject Line:</strong> "Privacy Rights Request"</li>
              <li><strong>Include:</strong> Your name, email, and specific request</li>
            </ul>
            <p className="text-gray-700">
              We will respond to your request within 30 days (or 45 days for CCPA requests if we need additional time). We may ask you to verify your identity before processing your request.
            </p>
          </section>

          <section id="childrens-privacy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our Service is intended for users aged 13 and older. We require users to be at least 13 years old to join our waitlist and use our Service.
            </p>
            <p className="text-gray-700 mb-4">
              We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it immediately.
            </p>
            <p className="text-gray-700">
              If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us at support@vennapp.co and we will delete the information.
            </p>
          </section>

          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Security</h2>
            <p className="text-gray-700 mb-4">
              We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Encryption:</strong> All data is transmitted using HTTPS/TLS encryption</li>
              <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
              <li><strong>Secure Storage:</strong> Data stored with enterprise-grade security providers (Airtable)</li>
              <li><strong>Regular Audits:</strong> Periodic security reviews and updates</li>
              <li><strong>Fraud Prevention:</strong> IP-based rate limiting and duplicate detection</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
            <p className="text-gray-700">
              In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by law.
            </p>
          </section>

          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
            </p>
            <p className="text-gray-700 mb-4">
              When we make material changes, we will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Notify you by email if you are on our waitlist</li>
              <li>Display a prominent notice on our website</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of our Service after changes become effective constitutes acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
            </p>
          </section>

          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              We will respond to your inquiry within 5 business days. For privacy rights requests, please allow up to 30 days for processing.
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
