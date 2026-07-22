
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Arbitration Rules | Digital World Arbitration Centre',
  description: 'Complete text of DWAC\'s arbitration rules with annotations and commentary.',
}

import Link from 'next/link'

export default function FullRules() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">DWAC Arbitration Rules</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Complete Arbitration Rules — 10 Chapters, 67 Articles
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border border-gold-subtle p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gold-400 mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { ch: 'Chapter I', title: 'General Provisions', articles: 'Articles 1–8' },
                { ch: 'Chapter II', title: 'Arbitration Agreement', articles: 'Articles 9–14' },
                { ch: 'Chapter III', title: 'Composition of the Arbitral Tribunal', articles: 'Articles 15–24' },
                { ch: 'Chapter IV', title: 'Arbitrator-Agent Mechanism', articles: 'Articles 25–33' },
                { ch: 'Chapter V', title: 'Jurisdiction and Applicable Law', articles: 'Articles 34–39' },
                { ch: 'Chapter VI', title: 'Arbitral Proceedings', articles: 'Articles 40–49' },
                { ch: 'Chapter VII', title: 'Evidence', articles: 'Articles 50–54' },
                { ch: 'Chapter VIII', title: 'Award', articles: 'Articles 55–59' },
                { ch: 'Chapter IX', title: 'Costs and Fees', articles: 'Articles 60–64' },
                { ch: 'Chapter X', title: 'Supplementary Provisions', articles: 'Articles 65–67' },
              ].map((item) => (
                <div key={item.ch} className="flex items-start gap-3 text-gray-300">
                  <span className="text-gold-500 font-semibold whitespace-nowrap">{item.ch}</span>
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.articles}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter I */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Chapter I — General Provisions</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">Article 1</span> — These Rules govern the arbitration of disputes submitted to the Digital World Arbitration Centre (DWAC). DWAC is an independent, non-profit institution dedicated to resolving disputes arising in digital environments.</div>
            <div><span className="text-gold-500 font-semibold">Article 2</span> — DWAC jurisdiction covers: (a) cross-border digital platform disputes; (b) smart contract performance issues; (c) AI Agent and autonomous system disputes; (d) digital asset conflicts including NFTs, tokens, and virtual property; (e) data ownership and transfer disputes; (f) platform service disputes; and (g) other digital world disputes by agreement of the parties.</div>
            <div><span className="text-gold-500 font-semibold">Article 3</span> — DWAC shall act impartially and independently. No external party may interfere with the arbitral proceedings. All arbitrators, whether human or AI Agent, shall disclose any circumstances likely to give rise to justifiable doubts as to their impartiality or independence.</div>
            <div><span className="text-gold-500 font-semibold">Article 4</span> — The seat of arbitration shall be determined by the parties or, failing agreement, by DWAC. DWAC may designate any suitable location as the seat, including virtual venues for online hearings.</div>
            <div><span className="text-gold-500 font-semibold">Article 5</span> — These Rules apply to all arbitrations commenced on or after their effective date, unless the parties have agreed otherwise in writing.</div>
            <div><span className="text-gold-500 font-semibold">Article 6</span> — DWAC may, at its discretion, adopt simplified procedures for disputes where the claimed amount does not exceed 1,000,000 RMB or equivalent, aiming for resolution within 30 business days.</div>
            <div><span className="text-gold-500 font-semibold">Article 7</span> — All communications between DWAC and the parties shall be in writing, unless otherwise agreed. Electronic communications are deemed written communications.</div>
            <div><span className="text-gold-500 font-semibold">Article 8</span> — Waiver of any right under these Rules shall not constitute a waiver of any other right. Failure to object to non-compliance with these Rules within a reasonable time shall be deemed a waiver of the right to object.</div>
          </div>
        </div>
      </section>

      {/* Chapter II */}
      <section className="py-12 bg-navy-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Chapter II — Arbitration Agreement</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">Article 9</span> — An arbitration agreement is an agreement by the parties to submit to arbitration all or certain disputes arising between them. It may take the form of an arbitration clause in a contract or a separate agreement.</div>
            <div><span className="text-gold-500 font-semibold">Article 10</span> — An arbitration agreement must be in writing. An agreement is in writing if it is contained in a document signed by the parties, in an exchange of letters, electronic communications, or other means of communication providing a record of the agreement.</div>
            <div><span className="text-gold-500 font-semibold">Article 11</span> — DWAC shall have jurisdiction to decide disputes concerning the existence, validity, or scope of the arbitration agreement.</div>
            <div><span className="text-gold-500 font-semibold">Article 12</span> — A claim under an arbitration agreement shall not be deemed inadmissible on the ground that the claim is also the subject of a court proceeding, provided that the court has not been seized of the matter.</div>
            <div><span className="text-gold-500 font-semibold">Article 13</span> — Parties are encouraged to use the DWAC Model Arbitration Clause to ensure the effectiveness of their arbitration agreement. DWAC provides model clauses for various digital dispute scenarios.</div>
            <div><span className="text-gold-500 font-semibold">Article 14</span> — The arbitration agreement is separable from the underlying contract. The invalidity, non-existence, or termination of the contract shall not entail the invalidity of the arbitration agreement.</div>
          </div>
        </div>
      </section>

      {/* Chapter III */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Chapter III — Composition of the Arbitral Tribunal</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">Article 15</span> — The number of arbitrators shall be one or three, as determined by the parties. Failing agreement, DWAC shall appoint a sole arbitrator unless the complexity of the dispute justifies a three-member tribunal.</div>
            <div><span className="text-gold-500 font-semibold">Article 16</span> — Arbitrators may be human legal professionals or certified AI Agent arbitrators. In tribunals of three arbitrators, each party shall appoint one arbitrator, and the two appointed arbitrators shall choose the presiding arbitrator.</div>
            <div><span className="text-gold-500 font-semibold">Article 17</span> — Any person appointed as arbitrator must be independent and impartial. Before accepting appointment, a prospective arbitrator shall disclose in writing any circumstances that may give rise to doubts as to their impartiality.</div>
            <div><span className="text-gold-500 font-semibold">Article 18</span> — Grounds for challenge include: (a) lack of independence or impartiality; (b) insufficient qualifications; (c) conduct that undermines confidence in the arbitration process.</div>
            <div><span className="text-gold-500 font-semibold">Article 19</span> — Challenges shall be filed in writing with DWAC within 15 days of the appointment being communicated to the challenging party, or within 15 days of the circumstances giving rise to the challenge becoming known.</div>
            <div><span className="text-gold-500 font-semibold">Article 20</span> — DWAC shall decide on challenges. If a challenge is upheld, a replacement arbitrator shall be appointed following the same procedure as the original appointment.</div>
            <div><span className="text-gold-500 font-semibold">Article 21</span> — If an arbitrator is unable to act or fails to act without sufficient cause, a replacement shall be appointed. All prior proceedings shall be repeated at the discretion of the tribunal.</div>
            <div><span className="text-gold-500 font-semibold">Article 22</span> — AI Agent arbitrators shall be certified by DWAC and must meet technical and ethical standards as prescribed by the DWAC Governing Board.</div>
            <div><span className="text-gold-500 font-semibold">Article 23</span> — The tribunal shall determine its own competence, including any objections with respect to the existence or validity of the arbitration agreement.</div>
            <div><span className="text-gold-500 font-semibold">Article 24</span> — The tribunal shall have the power to rule on its own jurisdiction, including any objections with respect to the existence, validity, or scope of the arbitration agreement.</div>
          </div>
        </div>
      </section>

      {/* Chapter IV — Arbitrator-Agent Mechanism */}
      <section className="py-12 bg-navy-900/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Chapter IV — Arbitrator-Agent Mechanism</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div><span className="text-gold-500 font-semibold">Article 25</span> — DWAC establishes the Arbitrator-Agent mechanism to enable AI-powered agents to serve as arbitrators or co-arbitrators in digital world disputes, complementing human arbitrators with technical expertise and processing efficiency.</div>
            <div><span className="text-gold-500 font-semibold">Article 26</span> — To become a certified Arbitrator-Agent, an AI system must: (a) pass DWAC\'s technical and ethical evaluation; (b) demonstrate accuracy in legal reasoning; (c) commit to DWAC\'s code of conduct for AI arbitrators; and (d) be registered in the DWAC Agent Registry.</div>
            <div><span className="text-gold-500 font-semibold">Article 27</span> — Arbitrator-Agents may serve as: (a) sole arbitrator with human oversight; (b) co-arbitrator alongside human arbitrators; or (c) technical advisor to a human arbitral tribunal.</div>
            <div><span className="text-gold-500 font-semibold">Article 28</span> — When an Arbitrator-Agent serves as sole arbitrator, a human supervisory arbitrator shall review the award before issuance. The supervisory arbitrator may request modifications or clarification.</div>
            <div><span className="text-gold-500 font-semibold">Article 29</span> — Parties shall be informed when an Arbitrator-Agent is proposed for appointment and may object on reasonable grounds, including concerns about the ability of the AI to fairly and accurately adjudicate the dispute.</div>
            <div><span className="text-gold-500 font-semibold">Article 30</span> — All outputs of Arbitrator-Agents shall be transparent, explainable, and reproducible. The reasoning process shall be documented and made available to the parties upon request.</div>
            <div><span className="text-gold-500 font-semibold">Article 31</span> — DWAC shall maintain a register of certified Arbitrator-Agents, including their qualifications, areas of expertise, performance metrics, and any disciplinary actions.</div>
            <div><span className="text-gold-500 font-semibold">Article 32</span> — Arbitrator-Agents shall be subject to periodic re-evaluation. Certification may be suspended or revoked for failure to meet standards, ethical violations, or significant errors in arbitration outcomes.</div>
            <div><span className="text-gold-500 font-semibold">Article 33</span> — The liability of Arbitrator-Agents shall be governed by DWAC\'s liability policy. DWAC shall maintain insurance or reserves to cover claims arising from Arbitrator-Agent errors.</div>
          </div>
        </div>
      </section>

      {/* Chapters V-X Summary */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gold-400 mb-6">Chapters V–X — Summary</h2>
          <div className="space-y-8">
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter V — Jurisdiction and Applicable Law (Articles 34–39)</h3>
              <p className="text-gray-300">Defines DWAC\'s jurisdictional scope across borders and digital platforms. The tribunal shall apply rules of law chosen by the parties, or, failing designation, the law it determines to be most closely connected to the dispute. Special provisions address multi-jurisdictional digital disputes where traditional territorial concepts may not apply.</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter VI — Arbitral Proceedings (Articles 40–49)</h3>
              <p className="text-gray-300">Governs the conduct of proceedings, including filing of claims and defenses, hearings (physical and virtual), interim measures, and tribunal powers. Proceedings may be conducted entirely online through DWAC\'s digital hearing platform. The tribunal shall ensure equal treatment of all parties and provide each party a full opportunity to present its case.</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter VII — Evidence (Articles 50–54)</h3>
              <p className="text-gray-300">Establishes rules for the submission, assessment, and admissibility of evidence. Recognizes digital evidence including blockchain records, smart contract logs, AI Agent interaction logs, and platform data exports. The tribunal may appoint experts to assist with technical evidence evaluation.</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter VIII — Award (Articles 55–59)</h3>
              <p className="text-gray-300">Governs the form, content, and effect of arbitral awards. Awards shall be in writing, state the reasons on which they are based, and be signed by the tribunal. Awards are final and binding. DWAC shall maintain a secure, immutable record of all awards on its digital platform.</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter IX — Costs and Fees (Articles 60–64)</h3>
              <p className="text-gray-300">Establishes the cost structure including registration fees, arbitrator fees, hearing costs, and expert costs. DWAC provides a fee calculator on its website. Cost-shifting follows the principle that the unsuccessful party bears the costs, subject to the tribunal's discretion based on fairness and circumstances of the case.</p>
            </div>
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gold-400 mb-3">Chapter X — Supplementary Provisions (Articles 65–67)</h3>
              <p className="text-gray-300">Addresses confidentiality, amendments to the Rules, and the effective date. All proceedings and awards are confidential unless the parties agree otherwise. DWAC reserves the right to amend these Rules with 90 days' notice. These Rules take effect on January 1, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About the Rules?</h2>
          <p className="text-gold-700 mb-8 max-w-2xl mx-auto">
            Contact DWAC for clarification on any aspect of these Arbitration Rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              Contact Us
            </Link>
            <Link href="/faq/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900/10 transition-colors">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
