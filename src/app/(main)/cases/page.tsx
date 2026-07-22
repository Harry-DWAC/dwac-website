import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Statistics | Digital World Arbitration Centre',
}

export default function Cases() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Case Statistics</h1>
          <p className="text-xl text-gray-300 max-w-2xl">DWAC Arbitration Case Information</p>
        </div>
      </section>
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
          <p className="text-gray-400 mb-8">
            DWAC is currently in its founding phase. This page will provide anonymized statistics on filed cases, resolution times, and case categories once the platform is operational.
          </p>
          <div className="bg-navy-800/30 rounded-xl p-8 inline-block">
            <div className="text-4xl font-bold text-gold-600 mb-2">Q4 2026</div>
            <p className="text-gray-400">Platform Launch</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in DWAC?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Learn more about our mission and how we're building digital dispute resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold rounded-lg hover:bg-gold-600 transition-colors">
              About DWAC
            </Link>
            <Link href="/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-500/[0.06] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
