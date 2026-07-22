import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Digital World Arbitration Centre',
  description: 'DWAC\'s Terms of Service. By using our services, you agree to these terms.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300 max-w-2xl">By using DWAC&apos;s services, you agree to these terms. Please read carefully.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing or using the Digital World Arbitration Centre (DWAC) website (dwac.net) and arbitration services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p className="mb-4">DWAC provides:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Arbitration services for digital world disputes</li>
              <li>Agent Arbitrator certification and verification</li>
              <li>Virtual hearing room facilities</li>
              <li>Dispute resolution resources and guidance</li>
              <li>Educational content on digital arbitration</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. User Eligibility</h2>
            <p className="mb-6">To use our services, you must be at least 18 years old and have the legal capacity to enter into binding agreements. By using our services, you represent that you meet these eligibility requirements.</p>

            <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights of other users and arbitrators</li>
              <li>Not use our services for unlawful or fraudulent purposes</li>
              <li>Not interfere with the proper functioning of our platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. Arbitration Proceedings</h2>
            <h3 className="text-xl font-semibold text-white mb-3">5.1 Governing Rules</h3>
            <p className="mb-4">All arbitration proceedings conducted through DWAC are governed by our <Link href="/rules/" className="text-gold-400 hover:text-gold-300">Arbitration Rules</Link>. By initiating or participating in arbitration, you agree to be bound by these rules.</p>
            <h3 className="text-xl font-semibold text-white mb-3">5.2 Confidentiality</h3>
            <p className="mb-6">Arbitration proceedings are confidential. You agree not to disclose any information related to proceedings to third parties, except as required by law or with the consent of all parties.</p>
            <h3 className="text-xl font-semibold text-white mb-3">5.3 Awards and Decisions</h3>
            <p className="mb-6">Arbitration awards issued by DWAC are final and binding. You agree to comply with any award rendered in your case, subject to applicable law regarding enforcement and appeal.</p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Agent Arbitrators</h2>
            <h3 className="text-xl font-semibold text-white mb-3">6.1 Certification</h3>
            <p className="mb-6">Agent Arbitrators are AI-powered arbitration assistants certified by DWAC. Their use in proceedings is subject to our certification standards and ethical guidelines. Learn more at our <Link href="/arbitrators/join/" className="text-gold-400 hover:text-gold-300">Agent Arbitrator Program</Link>.</p>
            <h3 className="text-xl font-semibold text-white mb-3">6.2 Limitation of Liability</h3>
            <p className="mb-6">While Agent Arbitrators are designed to assist with arbitration processes, final decisions rest with human arbitrators. DWAC is not liable for errors or omissions in Agent Arbitrator outputs when used in accordance with guidelines.</p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Fees and Payment</h2>
            <p className="mb-6">Fees for arbitration services are determined according to our <Link href="/fees/" className="text-gold-400 hover:text-gold-300">Fee Schedule</Link>. By using our services, you agree to pay all applicable fees. Payment terms are specified in individual case agreements.</p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
            <p className="mb-6">All content on dwac.net, including text, graphics, logos, and software, is the property of DWAC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>

            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="mb-6">To the maximum extent permitted by law, DWAC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim.</p>

            <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
            <p className="mb-6">You agree to indemnify and hold harmless DWAC, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>

            <h2 className="text-2xl font-bold text-white mb-4">11. Disclaimer of Warranties</h2>
            <p className="mb-6">Our services are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. We do not warrant that our services will be uninterrupted, error-free, or secure.</p>

            <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
            <p className="mb-6">We reserve the right to modify these terms at any time. Changes will be effective upon posting on this page. Your continued use of our services after changes constitutes acceptance of the modified terms.</p>

            <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
            <p className="mb-6">We may terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.</p>

            <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law and Dispute Resolution</h2>
            <p className="mb-6">These terms shall be governed by and construed in accordance with applicable international arbitration laws. Any dispute arising from these terms shall be resolved through arbitration administered by DWAC in accordance with its rules.</p>

            <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
            <p className="mb-6">If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>

            <h2 className="text-2xl font-bold text-white mb-4">16. Contact Us</h2>
            <p className="mb-6">If you have questions about these Terms of Service, please contact us:</p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">Digital World Arbitration Centre (DWAC)</p>
              <p className="text-gray-400">Email: legal@dwac.net</p>
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