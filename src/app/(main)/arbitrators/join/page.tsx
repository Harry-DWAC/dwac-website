import Link from 'next/link'

export default function JoinArbitrator() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Join as Arbitrator</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Become part of our elite panel of digital law experts</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join DWAC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital Law Focus</h3>
              <p className="text-gray-400 text-sm">Specialize in cutting-edge digital disputes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-gold-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Fees</h3>
              <p className="text-gray-400 text-sm">Earn professional fees for your expertise</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Network</h3>
              <p className="text-gray-400 text-sm">Connect with leading digital law professionals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Format</h3>
              <p className="text-gray-400 text-sm">Conduct hearings online from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Qualification Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
                <h3 className="font-semibold text-lg mb-3 text-white">Education & Expertise</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Law degree (LLB, LLM, or equivalent)</li>
                  <li>• Minimum 5 years of legal experience</li>
                  <li>• Expertise in digital law, blockchain, AI, or data protection</li>
                  <li>• Fluency in English (additional languages a plus)</li>
                </ul>
              </div>
              <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
                <h3 className="font-semibold text-lg mb-3 text-white">Professional Standing</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Good standing in professional community</li>
                  <li>• No disciplinary actions or convictions</li>
                  <li>• Strong ethical standards and independence</li>
                  <li>• Arbitration experience preferred</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Application Form</h2>
          <form className="space-y-6 bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                <input type="text" id="fullName" required className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                <input type="email" id="email" required className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">Country/Region *</label>
                <input type="text" id="country" required className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-1">Organization / Firm</label>
              <input type="text" id="organization" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
            </div>
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-300 mb-1">Areas of Expertise *</label>
              <select id="expertise" required className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500">
                <option value="">Select your primary area</option>
                <option value="blockchain">Blockchain & Smart Contracts</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="data">Data Protection & Privacy</option>
                <option value="ip">Intellectual Property</option>
                <option value="fintech">Fintech & Digital Payments</option>
                <option value="ecommerce">E-commerce & Platforms</option>
                <option value="other">Other Digital Law</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">Years of Legal Experience *</label>
              <select id="experience" required className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500">
                <option value="">Select</option>
                <option value="5-10">5-10 years</option>
                <option value="10-15">10-15 years</option>
                <option value="15-20">15-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>
            <div>
              <label htmlFor="languages" className="block text-sm font-medium text-gray-300 mb-1">Languages *</label>
              <input type="text" id="languages" required placeholder="e.g., English, Mandarin, Spanish" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
            </div>
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">LinkedIn Profile URL</label>
              <input type="url" id="linkedin" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500" />
            </div>
            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-1">Why do you want to join DWAC? *</label>
              <textarea id="motivation" required rows={4} placeholder="Tell us about your interest in digital dispute resolution and what you can contribute to DWAC..." className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-gold-500"></textarea>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                Submit Application
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">By submitting this application, you agree to DWAC's Privacy Policy and Terms of Service.</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
