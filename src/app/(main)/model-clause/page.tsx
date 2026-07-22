import Link from 'next/link'
export const metadata = {
  title: 'Model Arbitration Clause | Digital World Arbitration Centre',
}


export default function ModelClause() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Model Arbitration Clause</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Include DWAC arbitration in your contracts</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Standard Clause</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">Any dispute, controversy, or claim arising out of or relating to this contract, including the existence, validity, interpretation, performance, breach, or termination thereof, shall be finally resolved by arbitration administered by the Digital World Arbitration Centre (DWAC) in accordance with its Arbitration Rules.</p>
            
            <p className="text-gray-300 mb-4">The seat of arbitration shall be [city, country]. The language of arbitration shall be [English/other].</p>
            
            <p className="text-gray-300">The number of arbitrators shall be [one/three].</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Shortened Clause</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">Any dispute arising out of or in connection with this contract shall be submitted to arbitration administered by the Digital World Arbitration Centre (DWAC) in accordance with its Arbitration Rules.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Digital World Specific Clause</h2>
          
          <div className="bg-gold-500/[0.06] border border-gold-subtle rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">Any dispute arising from or relating to [digital platform services/smart contract performance/AI agent interactions/digital asset transactions/data transfers] shall be resolved by arbitration administered by the Digital World Arbitration Centre (DWAC) under the Digital World Charter and DWAC Arbitration Rules.</p>
            
            <p className="text-gray-300">The parties agree that DWAC has exclusive jurisdiction over disputes arising from digital world activities as defined in the Digital World Charter.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
            <li>Expert arbitrators specializing in digital law and technology</li>
            <li>Fully online proceedings for efficiency</li>
            <li>90-day default resolution timeline</li>
            <li>Global enforceability under the New York Convention</li>
            <li>Confidential proceedings</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About DWAC Clauses?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us for assistance in drafting arbitration clauses for your contracts.</p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
