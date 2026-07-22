import Link from 'next/link'
export const metadata = {
  title: 'FAQ | Digital World Arbitration Centre',
  description: 'Frequently asked questions about DWAC digital world arbitration — procedures, costs, enforcement, evidence, arbitrator selection, and more.',
}


export default function FAQ() {
  const faqs = [
    {
      question: "What types of disputes does DWAC handle?",
      answer: "DWAC handles disputes arising from digital world activities including: cross-border digital platform disputes, smart contract performance issues, AI agent interactions, digital asset conflicts (NFTs, tokens, virtual property), data ownership disputes, platform service disputes, and other digital world disputes by agreement."
    },
    {
      question: "How long does the arbitration process take?",
      answer: "Standard cases are typically resolved within 90 days of tribunal constitution. For disputes under ¥1,000,000 RMB, our Simplified Procedure offers resolution within 30 days."
    },
    {
      question: "Are DWAC awards enforceable globally?",
      answer: "Yes. DWAC awards are designed to be enforceable under the New York Convention in over 170 countries worldwide. Participating states are obligated to recognize and enforce arbitration awards, subject to limited grounds for refusal under Article V of the Convention."
    },
    {
      question: "What are the costs associated with arbitration?",
      answer: "Arbitration costs include a filing fee based on the dispute amount and administrative fees. Our fees are approximately 50% of CIETAC rates. Please refer to our Fee Calculator or contact us for a detailed estimate based on your specific case."
    },
    {
      question: "Who can file a dispute with DWAC?",
      answer: "Any party involved in a digital world dispute, provided there is a valid arbitration agreement (either through a contract clause or by submitting to DWAC's jurisdiction) can file a dispute. This includes individuals, businesses, AI Agents acting on behalf of principals, and institutional entities."
    },
    {
      question: "Is the arbitration process confidential?",
      answer: "Yes. DWAC arbitration proceedings are private and confidential. Awards are not published without the consent of all parties involved. All arbitrators, staff, and participants are bound by confidentiality obligations."
    },
    {
      question: "Do I need a lawyer to participate in DWAC arbitration?",
      answer: "While parties may choose to be represented by legal counsel, it is not mandatory. Parties may represent themselves or be represented by AI Agents acting on their behalf in DWAC proceedings."
    },
    {
      question: "What languages are supported?",
      answer: "DWAC proceedings can be conducted in multiple languages. English is the default, but Chinese (Simplified and Traditional) and other languages may be accepted based on the agreement of parties."
    },
    {
      question: "How do I submit evidence in a digital dispute?",
      answer: "Evidence is submitted electronically through DWAC's case management system. Accepted formats include documents, digital records, blockchain transaction logs, smart contract code, AI decision logs, and metadata. All evidence must be properly authenticated. See our Evidence Guidance page for detailed requirements."
    },
    {
      question: "How are arbitrators selected?",
      answer: "Parties may jointly nominate an arbitrator, or each party may nominate one arbitrator who then jointly select a presiding arbitrator. For the Simplified Procedure, a sole arbitrator is appointed. DWAC maintains a roster of qualified arbitrators with expertise in digital law, blockchain, AI, and data compliance."
    },
    {
      question: "Can I challenge or request the recusal of an arbitrator?",
      answer: "Yes. A party may challenge an arbitrator if there are reasonable grounds to doubt the arbitrator's impartiality or independence, or if the arbitrator does not possess the qualifications agreed by the parties. A written challenge must be submitted within 7 days of becoming aware of the grounds for challenge."
    },
    {
      question: "What happens if a party fails to respond or participate?",
      answer: "If a party fails to respond or participate after proper notice, the arbitration may proceed on a default basis. The tribunal will examine the evidence presented by the participating party and may render an award based on the available record, ensuring that the absent party was given a reasonable opportunity to participate."
    },
    {
      question: "How is the arbitration award enforced?",
      answer: "Once an award is rendered, it is binding on all parties. The prevailing party may apply to a competent court in any New York Convention jurisdiction for recognition and enforcement. DWAC provides assistance with enforcement documentation upon request."
    },
    {
      question: "Can the arbitration award be appealed?",
      answer: "DWAC awards are final and binding. There is no appeal on the merits. However, a party may apply to set aside the award on limited procedural grounds under applicable arbitration law, such as lack of proper notice, arbitrator misconduct, or the award being beyond the scope of the arbitration agreement."
    },
    {
      question: "What is a model arbitration clause?",
      answer: "A model clause is a pre-drafted arbitration agreement that parties can include in their contracts. DWAC's recommended clause: 'Any dispute arising out of or in connection with this contract, including any digital world dispute, shall be referred to and finally resolved by arbitration under the DWAC Arbitration Rules.' See our Model Clause page for full text and variations."
    },
    {
      question: "Does DWAC support emergency or interim measures?",
      answer: "Yes. A party may apply for emergency or interim measures before the constitution of the tribunal, including orders to preserve evidence, maintain the status quo, or prevent irreparable harm. An emergency arbitrator can be appointed within 48 hours of receiving such an application."
    },
    {
      question: "Are AI Agents allowed to participate in proceedings?",
      answer: "Yes. DWAC is the first arbitration institution to explicitly recognize AI Agents as authorized representatives. AI Agents may file disputes, submit responses, present evidence, and conduct negotiations on behalf of their principals, subject to authentication and verification requirements."
    },
    {
      question: "How are digital assets valued in arbitration?",
      answer: "Digital assets are valued based on the agreed method between parties. In the absence of agreement, the tribunal may determine fair market value as of a specified date, considering factors such as trading platform prices, rarity, utility, and prevailing market conditions. Expert testimony may be required for complex valuations."
    }
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Find answers to common questions about DWAC arbitration services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
                <h3 className="font-semibold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us directly and we'll be happy to assist you.</p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}
