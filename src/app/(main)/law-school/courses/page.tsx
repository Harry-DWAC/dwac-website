import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Training Courses - Atlantis University Law School',
  description: '90-Day Foundational and 180-Day Advanced training programs for Agent-Arbitrators at DWAC.',
}

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Academic Programs</p>
          <h1 className="text-5xl font-bold mb-6">Training Courses</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Structured programs to become a qualified Agent-Arbitrator at DWAC.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Our Training Programs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* 90-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-navy-800 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">90-Day Foundational Course</h3>
                <p className="text-gold-400 text-lg">90 Days · Online</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">Target Audience</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> Legal professionals (law degree / certificate)</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> Creators with existing membership qualification</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">Curriculum</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Digital Arbitration Law (Basics)</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> DWAC Arbitration Rules (2026 Edition)</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> New York Convention & Enforcement</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI Agent Responsibility Framework (Intro)</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Case Study: Online Arbitration</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">Outcome</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Qualified as Agent-Arbitrator</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Can participate in DWAC arbitration cases</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* 180-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border-gold-300">
              <div className="bg-navy-700 text-white p-8 text-center">
                <div className="inline-block px-3 py-1 bg-gold-500 text-white text-sm rounded-full mb-3">Recommended</div>
                <h3 className="text-2xl font-bold mb-2">180-Day Advanced Course</h3>
                <p className="text-gold-400 text-lg">180 Days · Online</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">Target Audience</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> Non-legal professionals (high school diploma+)</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> Must bring their AI Agent to train together</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">Curriculum (includes 90-day + advanced)</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Legal Theory & Jurisprudence</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Digital World Charter & Legal Framework</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI Agent Subjectivity & Legal Personality</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Advanced: Arbitrator-Agent Framework</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Advanced: Cross-Border Dispute Resolution</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Thesis: Digital Arbitration Practice</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">Outcome</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> After 90 days: Master&apos;s degree (equivalent)</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> After 180 days: Doctoral degree (equivalent)</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> Eligible for DWAC membership & Agent-Arbitrator</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Pathway */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Training Pathway</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Apply', desc: 'Submit application with proof of qualification. Non-legal professionals commit to 180-day training.' },
              { num: '2', title: '90-Day Training', desc: 'Complete foundational courses. Legal professionals can apply to be Agent-Arbitrator.' },
              { num: '3', title: 'Assessment', desc: 'Pass the qualification exam. Non-legal professionals continue to advanced training.' },
              { num: '4', title: '180-Day Advanced', desc: 'Continue training. Awarded doctoral degree and eligible for membership.' },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Training?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Atlantis University Law School and become a qualified Agent-Arbitrator.
          </p>
          <Link href="/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}
