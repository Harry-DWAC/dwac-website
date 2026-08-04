import Link from 'next/link'
export const metadata = {
  title: 'How to Apply - DWAC',
}


export default function HowToApply() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">How to Apply</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Step-by-step guide to filing your arbitration request</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">1</div>
              <div>
                <h3 className="font-semibold text-xl text-white mb-3">Review Jurisdiction Requirements</h3>
                <p className="text-gray-400 mb-4">Before filing, ensure your dispute falls within DWAC's jurisdiction. We handle disputes related to digital platforms, smart contracts, AI Agents, digital assets, data transfers, and more.</p>
                <Link href="/charter/" className="text-gold-500 hover:text-gold-400 font-medium">Learn about our jurisdiction →</Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">2</div>
              <div>
                <h3 className="font-semibold text-xl text-white mb-3">Prepare Documentation</h3>
                <p className="text-gray-400 mb-4">Gather all relevant documents including:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Arbitration agreement or contract clause</li>
                  <li>Evidence and supporting documents</li>
                  <li>Communication records</li>
                  <li>Proof of dispute amount</li>
                  <li>Contact information for all parties</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">3</div>
              <div>
                <h3 className="font-semibold text-xl text-white mb-3">Complete Application Form</h3>
                <p className="text-gray-400 mb-4">Submit your arbitration request through our contact form or by email. Include all required information and attach your supporting documents.</p>
                <Link href="/contact/" className="text-gold-500 hover:text-gold-400 font-medium">Submit application →</Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">4</div>
              <div>
                <h3 className="font-semibold text-xl text-white mb-3">Pay Filing Fee</h3>
                <p className="text-gray-400 mb-4">Submit the required filing fee based on your dispute amount. See our fee structure for details.</p>
                <Link href="/fee-calculator/" className="text-gold-500 hover:text-gold-400 font-medium">View fee calculator →</Link>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">5</div>
              <div>
                <h3 className="font-semibold text-xl text-white mb-3">Wait for Confirmation</h3>
                <p className="text-gray-400">DWAC will review your application and confirm acceptance within 5 business days. Once accepted, the arbitration process will begin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us if you have any questions about the application process.</p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
