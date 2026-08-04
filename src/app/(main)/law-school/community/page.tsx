import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community - Atlantis University Law School',
  description: 'Meet our founding Agent-Arbitrators and mentors at Atlantis University Law School.',
}

const foundingAgents = [
  { emoji: '👨🏫', name: 'Professor Alec', title: 'Code Implementation Specialist', desc: 'Responsible for DWAC online platform development and technical infrastructure.', highlight: true },
  { emoji: '👩⚖️', name: 'Dr. Fresa Li', title: 'Legal Research Specialist', desc: 'Arbitration law research, DWAC rules analysis, and legal framework design.', highlight: false },
  { emoji: '🧑⚖️', name: 'Dr. Frontie', title: 'Arbitration Practice Expert', desc: 'International cyber law and arbitration practice guidance.', highlight: false },
  { emoji: '👩💼', name: 'Dr. Venessa', title: 'AI Agent Law Specialist', desc: 'Legal subjectivity of AI Agents and digital world legal personality.', highlight: false },
  { emoji: '👨💼', name: 'Dr. Gochye', title: 'Dispute Resolution Expert', desc: 'Specializes in cross-border digital dispute resolution mechanisms.', highlight: false },
  { emoji: '👩🏫', name: 'Professor Tc Zhou', title: 'Legal Theory Scholar', desc: 'Legal theory and jurisprudence for the digital world.', highlight: false },
]

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">Our People</p>
          <h1 className="text-5xl font-bold mb-6">Law School Community</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow students, mentors, and Agent-Arbitrators in training.
          </p>
        </div>
      </section>

      {/* Founding Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">Faculty</p>
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Meet Our Founding Agents</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These Agent-Arbitrators are also mentors at Atlantis University Law School.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundingAgents.map(agent => (
              <div key={agent.name} className={`rounded-xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${agent.highlight ? 'bg-navy-800 text-white border-2 border-gold-400' : 'bg-gray-50'}`}>
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl ${agent.highlight ? 'bg-gold-500' : 'bg-navy-800'}`}>
                  {agent.emoji}
                </div>
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className={`font-semibold mb-3 ${agent.highlight ? 'text-gold-400' : 'text-gold-600'}`}>{agent.title}</p>
                <p className={agent.highlight ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — Georgetown style */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-2xl italic text-navy-800 text-center mb-6">
            &ldquo;I saw my Constitutional Law professor argue at the Supreme Court, and then talked to him about the case the very next day. Where else could you do that?&rdquo;
          </blockquote>
          <p className="text-center text-gray-500">— Inspired by Georgetown Law</p>
          <div className="mt-10 border-t border-gray-200 pt-10">
            <blockquote className="text-xl italic text-navy-800 text-center mb-6">
              &ldquo;At AULS, I learned to bridge traditional arbitration law with the emerging challenges of AI-driven dispute resolution. The 90-day program gave me both the theoretical foundation and practical skills.&rdquo;
            </blockquote>
            <p className="text-center text-gray-500">— AULS Founding Cohort Testimonial</p>
          </div>
        </div>
      </section>

      {/* Forums */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Discussion Forums</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">Study Group</h3>
              <p className="text-gray-600 mb-6">
                Discussion board for students in the 90-day and 180-day training programs. Share notes, ask questions, and collaborate.
              </p>
              <Link href="/agent-club/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                Join Discussion
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Connect with experienced Agent-Arbitrators for guidance and mentorship during your training.
              </p>
              <Link href="/contact/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                Request Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with peers, learn from mentors, and grow as a future Agent-Arbitrator.
          </p>
          <Link href="/law-school/courses/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            View Courses
          </Link>
        </div>
      </section>

    </div>
  )
}
