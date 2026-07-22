import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'About Us | Digital World Arbitration Centre',
  openGraph: {
    locale: 'en_US',
    title: 'About Us | Digital World Arbitration Centre',
    description: 'The first permanent international arbitration institution dedicated to resolving digital world disputes.',
  },
}


export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Building rule of law for the digital world
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-xl font-medium text-gray-200 mb-6">
                Establishing rule of law for the digital world
              </p>
              <p className="mb-4">
                When the boundaries of the physical world are no longer obstacles, when AI Agents begin to sign contracts, when NFTs become digital assets, when data flows across borders as naturally as breathing...
              </p>
              <p className="mb-4">
                The digital world needs its own arbiter.
              </p>
              <p className="mb-4">
                DWAC was created for this purpose.
              </p>
              <p className="mb-4">
                We are committed to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Providing fair, efficient resolutions for digital disputes</li>
                <li>Promoting the Digital World Charter and advancing global digital governance standards</li>
                <li>Cultivating digital legal talent and fostering academic research</li>
                <li>Serving as a reference model for digital rule of law development worldwide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">
                Digital justice everywhere, for everyone
              </p>
              <p className="text-gray-400">
                In the future, every digital entity—whether an AI Agent, a digital platform, or a cross-border data owner—will find fair, professional, and efficient dispute resolution at DWAC.
              </p>
              <p className="text-gray-400 mt-4">
                We believe that through continuous effort, an orderly and fair digital world rule of law will eventually be established.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why DWAC Over Traditional Methods</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">Dimension</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">Traditional Litigation</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">Traditional Arbitration</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left bg-gold-500/10 font-semibold">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">Jurisdiction Certainty</td>
                  <td className="border border-gold-subtle px-4 py-3">Low</td>
                  <td className="border border-gold-subtle px-4 py-3">Medium</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">High</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">Process Duration</td>
                  <td className="border border-gold-subtle px-4 py-3">1-3 years</td>
                  <td className="border border-gold-subtle px-4 py-3">6-18 months</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">90 days / 30 days</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">Expertise</td>
                  <td className="border border-gold-subtle px-4 py-3">Inconsistent</td>
                  <td className="border border-gold-subtle px-4 py-3">Partial</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">Digital Law Experts</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">Cross-border Enforcement</td>
                  <td className="border border-gold-subtle px-4 py-3">Difficult</td>
                  <td className="border border-gold-subtle px-4 py-3">Good</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">Best (NY Convention + Specialized)</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">Online Process</td>
                  <td className="border border-gold-subtle px-4 py-3">Low</td>
                  <td className="border border-gold-subtle px-4 py-3">Partial</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">Fully Online</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Milestones</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025</h3>
                  <p className="text-gray-400">DWAC initiated and established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q4 2025</h3>
                  <p className="text-gray-400">Founding Council composition completed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q1 2026</h3>
                  <p className="text-gray-400">Arbitration rules published, first panel of arbitrators established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q2 2026</h3>
                  <p className="text-gray-400">Arbitration rules published, first panel of arbitrators established</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q3 2026</h3>
                  <p className="text-gray-400">Community platform live — Agent Club, Waline forum, Law School enrollment open</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">Q4 2026</h3>
                  <p className="text-gray-400">Founding council established, online arbitration platform Alpha launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Founder</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Harry</h3>
            <p className="text-gold-600 font-medium mb-4">Founder of DWAC</p>
            <ul className="space-y-2 text-gray-400">
              <li>• Compiler of the "Global Cyber Law Compendium"</li>
              <li>• Chief Drafter of the "Digital World Charter (Model Code)"</li>
              <li>• Initiator of DWAC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            Explore our Digital World Charter or get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/charter/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Read the Charter
            </Link>
            <Link href="/contact/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
