export const metadata = {
  title: 'Membership - DWAC',
}
﻿import Link from 'next/link'

export default function Membership() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join DWAC in building rule of law for the digital world
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Membership Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Founding Member */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 border-2 border-gold-medium">
              <div className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-2">Exclusive</div>
              <h3 className="text-2xl font-bold text-white mb-2">Founding Member</h3>
              <p className="text-gray-400 mb-6">For individuals and organizations that participated in DWAC's founding.</p>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Participation in Founding Council
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lifetime voting rights
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority arbitrator nomination rights
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All future benefits
                </li>
              </ul>
              <a href="mailto:secretary@dwac.net?subject=Founding%20Membership%20Inquiry" className="block w-full text-center px-4 py-2 bg-gold-500/[0.06] text-white font-semibold rounded-lg hover:bg-gold-500/[0.06] transition-colors">
                Inquire Now
              </a>
            </div>

            {/* Regular Member */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/10 rounded-xl p-8 border-2 border-gold-medium relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-gold text-navy-900 font-bold text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
              </div>
              <div className="text-gold-600 font-semibold text-sm uppercase tracking-wide mb-2">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Regular Member</h3>
              <p className="text-gray-400 mb-6">For individuals and organizations committed to digital justice.</p>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Voting rights at General Assembly
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority access to services
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Training & events discount
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Recommend arbitrator candidates
                </li>
              </ul>
              <a href="mailto:secretary@dwac.net?subject=Regular%20Membership%20Application" className="block w-full text-center px-4 py-2 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
                Apply Now
              </a>
            </div>

            {/* Honorary Member */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/20 rounded-xl p-8 border border-gold-subtle">
              <div className="text-gray-400 font-semibold text-sm uppercase tracking-wide mb-2">Special</div>
              <h3 className="text-2xl font-bold text-white mb-2">Honorary Member</h3>
              <p className="text-gray-400 mb-6">For individuals who made significant contributions to digital rule of law.</p>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Conferred by Council
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advisory participation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Recognition & visibility
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Invitation to special events
                </li>
              </ul>
              <a href="mailto:secretary@dwac.net?subject=Honorary%20Membership%20Inquiry" className="block w-full text-center px-4 py-2 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors">
                Nominate Someone
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Member Rights & Benefits */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Member Rights & Benefits</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-gold-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rights
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Vote at General Assembly meetings</li>
                <li>• Recommend arbitrator candidates</li>
                <li>• Participate in Center's training and events</li>
                <li>• Access services at preferential rates</li>
                <li>• Propose suggestions and oversight</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-gold-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Obligations
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Abide by DWAC Constitution and Rules</li>
                <li>• Pay membership fees on time</li>
                <li>• Maintain reputation and interests</li>
                <li>• Support digital rule of law initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Who Can Join?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Individuals</h3>
                <p className="text-gray-400 text-sm">Legal professionals, academics, and digital law enthusiasts</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Law Firms</h3>
                <p className="text-gray-400 text-sm">Corporate members from law firms and legal service providers</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Organizations</h3>
                <p className="text-gray-400 text-sm">Digital platforms, enterprises, universities, and NGOs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Member?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            Join us in building the foundation for digital world rule of law.
          </p>
          <a href="mailto:secretary@dwac.net?subject=Membership%20Inquiry" className="inline-flex items-center px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
            Apply Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
