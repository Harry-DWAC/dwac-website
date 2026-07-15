import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose DWAC - Digital World Arbitration Centre',
  description: 'Comparing DWAC with leading international arbitration institutions. Discover why we offer faster, more affordable AI-assisted dispute resolution.',
}

export default function WhyDwacPage() {
  const comparisonData = [
    { criteria: 'Online Arbitration', dwac: '✔ 100% Online', icc: '⚠ Partial', siac: '⚠ Partial', wipo: '✘ Limited', hkiac: '⚠ Partial' },
    { criteria: 'Average Duration', dwac: '30-90 days', icc: '12-18 months', siac: '6-12 months', wipo: '12-18 months', hkiac: '9-15 months' },
    { criteria: 'Cost Savings', dwac: '50-70% lower', icc: 'High', siac: 'Medium-High', wipo: 'High', hkiac: 'Medium-High' },
    { criteria: 'AI-Assisted', dwac: '✔ Yes', icc: '✘ No', siac: '✘ No', wipo: '✘ No', hkiac: '✘ No' },
    { criteria: 'Multilingual Support', dwac: '✔ 20+ languages', icc: '✔ Multiple', siac: '⚠ Limited', wipo: '✔ Multiple', hkiac: '⚠ Limited' },
    { criteria: 'NY Convention Enforcement', dwac: '✔ Yes', icc: '✔ Yes', siac: '✔ Yes', wipo: '✔ Yes', hkiac: '✔ Yes' },
    { criteria: 'Emergency Arbitrator', dwac: '✔ 48h decision', icc: '✔ Yes', siac: '✔ Yes', wipo: '✘ No', hkiac: '✔ Yes' },
    { criteria: 'Domain Disputes', dwac: '✔ Specialized', icc: '✘ No', siac: '✘ No', wipo: '✔ Yes', hkiac: '✘ No' },
    { criteria: 'AI Agent Liability', dwac: '✔ Specialized', icc: '✘ No', siac: '✘ No', wipo: '✘ No', hkiac: '✘ No' },
    { criteria: '24/7 Operation', dwac: '✔ Yes', icc: '✘ No', siac: '✘ No', wipo: '✘ No', hkiac: '✘ No' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Why Choose DWAC?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comparing arbitration institutions to help you make the best choice for your dispute.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy-800 mb-4">DWAC vs Other Arbitration Institutions</h2>
            <p className="text-xl text-gray-600">See how we compare to leading international arbitration institutions.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="p-4 text-left font-semibold">Criteria</th>
                  <th className="p-4 text-center font-semibold bg-gold-500 text-white">DWAC</th>
                  <th className="p-4 text-center font-semibold">ICC</th>
                  <th className="p-4 text-center font-semibold">SIAC</th>
                  <th className="p-4 text-center font-semibold">WIPO</th>
                  <th className="p-4 text-center font-semibold">HKIAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'hover:bg-gray-50' : 'hover:bg-gray-50 bg-gray-50'}>
                    <td className="p-4 font-semibold text-navy-800">{row.criteria}</td>
                    <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">{row.dwac}</td>
                    <td className="p-4 text-center">{row.icc}</td>
                    <td className="p-4 text-center">{row.siac}</td>
                    <td className="p-4 text-center">{row.wipo}</td>
                    <td className="p-4 text-center">{row.hkiac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            ✅ <strong>DWAC advantages:</strong> 100% online, AI-assisted, faster (30-90 days), 50-70% cost savings, specialized in AI Agent disputes.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-navy-800 mb-4">Key Advantages of Choosing DWAC</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Speed', desc: 'Average resolution in 30-90 days, compared to 12-18 months at traditional institutions.' },
              { icon: '💰', title: 'Cost-Effective', desc: 'Fees are 50-70% lower than ICC, SIAC, or WIPO, thanks to our AI-assisted process.' },
              { icon: '🤖', title: 'AI-Assisted', desc: 'Our Arbitrator-Agents analyze evidence, draft decisions, and accelerate the process.' },
              { icon: '🌐', title: 'Global & Online', desc: '100% online process, accessible from anywhere, 24/7. No travel required.' },
              { icon: '🔒', title: 'Confidential', desc: 'All proceedings are confidential, with end-to-end encryption for all documents.' },
              { icon: '⚖️', title: 'Enforceable', desc: 'Awards are enforceable under the New York Convention in 172 countries.' },
            ].map((adv, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl italic mb-6">
            &ldquo;DWAC resolved our cross-border domain dispute in 45 days, at a fraction of the cost of traditional arbitration. The online process was seamless.&rdquo;
          </blockquote>
          <cite className="text-gold-400 not-italic">— Dr. Harry (Yongjun Zhou), Founder of DWAC</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-6">Ready to Experience the DWAC Advantage?</h2>
          <p className="text-xl text-gray-600 mb-8">File your dispute online today and get a faster, more affordable resolution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">File a Dispute</Link>
            <Link href="/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}