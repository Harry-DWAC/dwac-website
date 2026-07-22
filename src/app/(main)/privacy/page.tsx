import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Digital World Arbitration Centre',
  description: 'DWAC\'s Privacy Policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Your privacy matters. Learn how DWAC collects, uses, and protects your information.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-6">Digital World Arbitration Centre (DWAC) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dwac.net, use our arbitration services, or interact with our digital platforms.</p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name, email address, and contact details</li>
              <li>Professional credentials and affiliation information</li>
              <li>Dispute-related documentation and communications</li>
              <li>Payment information for arbitration fees</li>
              <li>Identification documents for verification purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Data</h3>
            <p className="mb-6">When you access our platform, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Usage patterns and page visits</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Process and administer arbitration proceedings</li>
              <li>Communicate with you about services and updates</li>
              <li>Maintain the security and integrity of our platform</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Improve our services and user experience</li>
              <li>Facilitate agent arbitration certification and verification</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Arbitration Parties:</strong> Necessary information for dispute resolution</li>
              <li><strong>Certified Arbitrators:</strong> Relevant case details for proceedings</li>
              <li><strong>Service Providers:</strong> Third parties who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or court order</li>
              <li><strong>Business Transfers:</strong> In connection with merger or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="mb-6">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="mb-6">We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or for dispute resolution purposes. Arbitration case records may be retained for an extended period in accordance with institutional rules.</p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability in a machine-readable format</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="mb-6">Our website uses cookies and similar technologies to enhance user experience. You can control cookie preferences through your browser settings. We use both session cookies (temporary) and persistent cookies (remain on your device for a set period).</p>

            <h2 className="text-2xl font-bold text-white mb-4">9. International Transfers</h2>
            <p className="mb-6">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.</p>

            <h2 className="text-2xl font-bold text-white mb-4">10. Children&apos;s Privacy</h2>
            <p className="mb-6">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.</p>

            <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Policy</h2>
            <p className="mb-6">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after changes constitutes acceptance.</p>

            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="mb-6">If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">Digital World Arbitration Centre (DWAC)</p>
              <p className="text-gray-400">Email: privacy@dwac.net</p>
              <p className="text-gray-400">Website: <Link href="/contact/" className="text-gold-400 hover:text-gold-300">Contact Form</Link></p>
            </div>

            <div className="border-t border-gold-subtle pt-6 mt-8">
              <p className="text-sm text-gray-500">© 2026 Digital World Arbitration Centre. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}