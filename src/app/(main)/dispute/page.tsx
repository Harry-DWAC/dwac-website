import Link from 'next/link'
export const metadata = {
  title: 'Dispute Resolution | Digital World Arbitration Centre',
}


export default function Dispute() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">File a Dispute</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Begin your journey to resolve digital world disputes through professional arbitration
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How to File Your Dispute</h2>
            <p className="text-gray-400 mb-6">
              The Digital World Arbitration Centre (DWAC) provides efficient, professional resolution for disputes arising in the digital world. Follow these steps to initiate the arbitration process:
            </p>

            <ol className="space-y-4 mb-8 list-decimal list-inside text-gray-300">
              <li><strong>Review Our Jurisdiction</strong> - Ensure your dispute falls within our scope (digital platform disputes, smart contracts, AI Agents, digital assets, data disputes, etc.)</li>
              <li><strong>Prepare Your Documentation</strong> - Gather all relevant evidence, contracts, communications, and documentation related to your dispute</li>
              <li><strong>Submit Your Application</strong> - Complete the arbitration request form below or contact us directly</li>
              <li><strong>Pay the Filing Fee</strong> - Submit the required arbitration fees based on your dispute amount</li>
              <li><strong>Wait for Confirmation</strong> - DWAC will review your application and confirm acceptance within 5 business days</li>
            </ol>

            {/* What We Handle */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">What We Handle</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• Cross-border digital platform disputes</li>
                <li>• Smart contract performance issues</li>
                <li>• AI Agent and autonomous system disputes</li>
                <li>• Digital asset conflicts (NFTs, tokens, virtual property)</li>
                <li>• Data ownership and transfer disputes</li>
                <li>• Platform service disputes (account bans, content removal)</li>
                <li>• Other digital world disputes by agreement</li>
              </ul>
            </div>

            {/* Filing Requirements */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">Filing Requirements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• Complete arbitration request form</li>
                <li>• Copy of relevant contracts or agreements</li>
                <li>• Evidence and documentation</li>
                <li>• Registration fee payment</li>
                <li>• Contact information for all parties involved</li>
              </ul>
            </div>

            <p className="text-gray-400">
              For disputes under 1,000,000 RMB, you may qualify for our Simplified Procedure with faster resolution (30 days) and reduced costs.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-900 text-white p-8 rounded-2xl mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to File Your Dispute?</h2>
            <p className="text-gray-300 mb-6">
              Contact us to submit your arbitration request or learn more about our process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gradient-gold transition-colors">
                Contact Us
              </Link>
              <Link href="/fee-calculator/" className="px-6 py-3 border-2 border-gold-medium text-gold-400 font-semibold rounded-lg hover:bg-gold-500/30 hover:text-white transition-colors">
                View Fee Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
