import Link from 'next/link'
export const metadata = {
  title: 'DWAC Charter | Digital World Arbitration Centre',
}


export default function Charter() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Digital World Charter</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            The foundational principles for digital dispute resolution
          </p>
        </div>
      </section>

      {/* Preamble */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Preamble</h2>
            <p className="text-gray-300 leading-relaxed">
              We, the signatories of this Charter, recognizing the emergence of the digital world as a new domain of human activity, acknowledging the need for rule of law in this increasingly important space, and believing that every digital entity deserves access to justice...
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Establish this Digital World Charter to provide a comprehensive legal framework for resolving disputes arising in digital environments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 mb-4 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Sovereignty</h3>
              <p className="text-gray-400">Every digital entity has the right to operate, interact, and resolve disputes in the digital world, free from undue interference.</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 mb-4 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Justice & Fairness</h3>
              <p className="text-gray-400">All disputes shall be resolved through impartial, transparent procedures that respect the rights of all parties involved.</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 mb-4 bg-emerald-500/[0.06]0/[0.06]0/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Efficiency</h3>
              <p className="text-gray-400">Dispute resolution shall be timely, cost-effective, and conducted through modern digital means.</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <div className="w-12 h-12 mb-4 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Applicability</h3>
              <p className="text-gray-400">Principles apply universally across borders, recognizing the inherently transnational nature of digital activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Scope */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Jurisdiction Scope</h2>
          <p className="text-gray-400 mb-6">DWAC accepts disputes arising from:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Data ownership and data cross-border transfers</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">AI agent or smart contract disputes</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Platform disputes (account bans, content removal)</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Digital assets (NFTs, virtual property, tokens)</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Other digital world disputes by agreement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Legal Framework</h2>
          <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-400 mb-4">DWAC arbitration activities are governed by:</p>
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 font-bold mr-4">1</span>
                <div>
                  <strong className="text-white">DWAC Arbitration Rules</strong>
                  <p className="text-sm text-gray-500">Based on Chapter 8 of the Digital World Charter</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 font-bold mr-4">2</span>
                <div>
                  <strong className="text-white">Party-Agreed Substantive Law</strong>
                  <p className="text-sm text-gray-500">Including the Digital World Charter (Model Code)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 font-bold mr-4">3</span>
                <div>
                  <strong className="text-white">New York Convention (1958)</strong>
                  <p className="text-sm text-gray-500">For recognition and enforcement of foreign arbitral awards</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 font-bold mr-4">4</span>
                <div>
                  <strong className="text-white">Lex Arbitri</strong>
                  <p className="text-sm text-gray-500">Mandatory provisions of the lex arbitri</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="flex items-start bg-navy-800/30 p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">90-Day Default Resolution</h3>
                <p className="text-gray-400 text-sm">Standard cases are resolved within 90 days of tribunal constitution</p>
              </div>
            </div>
            <div className="flex items-start bg-navy-800/30 p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">30-Day Simplified Procedure</h3>
                <p className="text-gray-400 text-sm">For disputes below 1,000,000 RMB, handled by a sole arbitrator</p>
              </div>
            </div>
            <div className="flex items-start bg-navy-800/30 p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Confidential Proceedings</h3>
                <p className="text-gray-400 text-sm">Arbitration is private; awards are not published without consent</p>
              </div>
            </div>
            <div className="flex items-start bg-navy-800/30 p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06]0 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Global Enforcement</h3>
                <p className="text-gray-400 text-sm">Awards enforceable in 172 countries under the New York Convention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn More</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            Ready to explore how DWAC can help resolve your digital disputes?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Contact Us
            </Link>
            <Link href="/arbitrators/join/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              Become an Arbitrator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
