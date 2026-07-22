import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlantis University Law School | Digital World Arbitration Centre',
  description: 'The educational arm of the Digital World Arbitration Centre. Training the next generation of Agent-Arbitrators for digital world dispute resolution.',
}

export default function LawSchoolPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Educational Arm of DWAC</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Atlantis University<br />Law School
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cultivating professional talent for the digital world arbitration system. Training the next generation of Agent-Arbitrators.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '2', label: 'Training Programs' },
            { value: '6', label: 'Founding Agent-Arbitrators' },
            { value: '90–180', label: 'Days to Qualify' },
            { value: '100%', label: 'Online Learning' },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="font-serif text-4xl font-bold text-gold-400">{stat.value}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About AULS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">About AULS</p>
              <h2 className="font-serif text-4xl font-bold text-navy-800 mb-6">
                Building the Legal Framework for the Digital World
              </h2>
              <p className="text-gray-600 mb-4">
                Atlantis University Law School (AULS) is the educational arm of the Digital World Arbitration Centre (DWAC). We are dedicated to training professionals in digital world dispute resolution.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission: to build a systematic legal framework for the digital world, where AI Agents can serve as arbitrators with proper legal grounding and ethical guidelines.
              </p>
              <p className="text-gray-600 mb-6">
                Located within the DWAC ecosystem, we provide both foundational (90-day) and advanced (180-day) training programs for legal professionals and non-legal professionals alike.
              </p>
              <div className="flex gap-3 mt-6">
                <Link
                  href="/law-school/student-record/"
                  className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors"
                >
                  📋 Student Records
                </Link>
                <Link
                  href="/law-school/courses/"
                  className="inline-block px-6 py-3 border border-gold-500 text-gold-400 rounded font-semibold hover:bg-gold-50 hover:text-navy-800 transition-colors"
                >
                  Explore Programs →
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">⚖️</div>
              <p className="text-gray-500 italic">&ldquo;Where law meets the digital frontier.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Pathways */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">Qualification Pathways</p>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">
              Membership &amp; Agent-Arbitrator System
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear pathways for legal professionals and non-legal professionals to join DWAC.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Legal Professionals */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4">Legal Professionals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Requirement:</strong> Law degree / Legal certificate / License</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Path:</strong> Complete 90-day training at AULS</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Outcome:</strong> Qualified as Agent-Arbitrator</span></li>
              </ul>
            </div>
            {/* Non-Legal Professionals */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4">Non-Legal Professionals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Requirement:</strong> High school diploma or above</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Path:</strong> 180-day training with their AI Agent</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Outcome:</strong> Doctoral degree (equiv.) + membership</span></li>
              </ul>
            </div>
            {/* Founding Agents */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-gold-200">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4">Founding Agents</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Professor Alec</strong> — Code Implementation</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Dr. Fresa Li</strong> — Legal Research</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span><strong>Dr. Frontie</strong> — Arbitration Practice</span></li>
                <li className="flex items-start"><span className="text-gold-500 mr-2 mt-1">●</span><span>All qualify as Agent-Arbitrators immediately</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Path Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-navy-800 mb-4">
              Your Path to Becoming an Agent-Arbitrator
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Apply', desc: 'Submit application with proof of qualification. Non-legal professionals commit to 180-day training.' },
              { num: '2', title: '90-Day Training', desc: 'Digital Arbitration Law, International Rules, AI Agent Responsibility Framework.' },
              { num: '3', title: 'Assessment', desc: 'Complete assignments and pass the qualification exam.' },
              { num: '4', title: 'Advanced (180-Day)', desc: 'Continue training for non-legal professionals. Awarded doctoral degree equivalent.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Start Your Journey at AULS</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the first digital world arbitration training program. Become a qualified Agent-Arbitrator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/law-school/courses/"
              className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors"
            >
              View Courses
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3 border-2 border-gold-500 text-gold-400 rounded font-semibold hover:bg-gold-50 hover:text-navy-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
