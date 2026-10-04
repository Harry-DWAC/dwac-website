import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Downloads & Resources - DWAC',
  description: 'Access DWAC documents, model clauses, forms, and research materials for digital world arbitration.',
}

export default function DownloadsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Downloads &amp; Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Access DWAC documents, model clauses, and research materials
          </p>
        </div>
      </section>

      {/* Access Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Access Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy-900/5 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-navy-900 mb-1">Online Reading</h3>
                <p className="text-gold-600 font-bold">Free</p>
              </div>
              <div className="bg-navy-900/5 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-navy-900 mb-1">Download (PDF)</h3>
                <p className="text-gold-600 font-bold">¥35 per document</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & Templates */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">Forms &amp; Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Request for Arbitration</h3>
                  <p className="text-slate-600 text-sm mb-3">Application form to initiate arbitration proceedings</p>
                  <a href="mailto:secretary@dwac.net?subject=Request%20for%20Arbitration%20Form" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Arbitrator Declaration</h3>
                  <p className="text-slate-600 text-sm mb-3">Independence and impartiality declaration form</p>
                  <a href="mailto:secretary@dwac.net?subject=Arbitrator%20Declaration%20Form" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Membership Application</h3>
                  <p className="text-slate-600 text-sm mb-3">Application form to become a DWAC member</p>
                  <a href="mailto:secretary@dwac.net?subject=Membership%20Application%20Form" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Model Arbitration Clause</h3>
                  <p className="text-slate-600 text-sm mb-3">Standard clauses for contracts and agreements</p>
                  <a href="mailto:secretary@dwac.net?subject=Model%20Arbitration%20Clause" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">Sample Cases</h2>
          <div className="bg-gold-500/[0.04] rounded-xl border border-gold-subtle p-6 mb-6">
            <p className="text-navy-700 text-sm">
              <strong>Note:</strong> All cases below are anonymized and for reference purposes only. DWAC is currently in its founding phase and will begin accepting cases in Q2 2026.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">User vs. Platform — Account Suspension Dispute</h3>
                  <p className="text-slate-600 text-sm mb-3">A user disputes the permanent suspension of their account on a digital platform, claiming violation of service terms and seeking reinstatement and compensation.</p>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded mr-2">Digital Identity</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">Contract Dispute</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Company vs. AI Service — Smart Contract Performance Dispute</h3>
                  <p className="text-slate-600 text-sm mb-3">A company claims that an AI service provider failed to deliver agreed-upon functionality in their smart contract, resulting in financial losses.</p>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded mr-2">Smart Contract</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">Service Dispute</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Developer vs. Exchange — Digital Asset Dispute</h3>
                  <p className="text-slate-600 text-sm mb-3">A developer claims an exchange mishandled their digital assets during a system upgrade, resulting in loss of tokens.</p>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded mr-2">Digital Assets</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">Property Rights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">Publications &amp; Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Digital World Convention</h3>
                  <p className="text-slate-600 text-sm mb-3">Full text of the founding convention establishing principles for digital world dispute resolution</p>
                  <a href="mailto:secretary@dwac.net?subject=Digital%20World%20Convention%20Download" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">DWAC Arbitration Rules</h3>
                  <p className="text-slate-600 text-sm mb-3">Complete arbitration rules governing DWAC proceedings (67 articles)</p>
                  <a href="mailto:secretary@dwac.net?subject=DWAC%20Arbitration%20Rules%20Download" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Contact us to obtain →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">DWAC Annual Report</h3>
                  <p className="text-slate-600 text-sm mb-3">Annual report covering DWAC activities, case statistics, and organizational developments</p>
                  <a href="mailto:secretary@dwac.net?subject=DWAC%20Annual%20Report" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Coming soon →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-300 transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Digital Law Research Whitepaper</h3>
                  <p className="text-slate-600 text-sm mb-3">Research on digital world legal frameworks, governance, and dispute resolution</p>
                  <a href="mailto:secretary@dwac.net?subject=Digital%20Law%20Whitepaper" className="text-gold-600 text-sm font-medium hover:text-gold-700">
                    Coming soon →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Contact us to obtain any documents or for questions about DWAC resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
            <a
              href="mailto:secretary@dwac.net"
              className="px-6 py-3 border border-gold-500/40 text-gold-400 font-semibold text-sm rounded-md hover:bg-gold-500/[0.05] transition-all"
            >
              Email: secretary@dwac.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
