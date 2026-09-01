export const metadata = {
  title: 'DWAC Feedback on China\'s AI Agent Governance Framework - DWAC',
  description: 'Digital World Arbitration Center submits feedback on China\'s Implementation Opinion on AI Agent Standardization and Innovation Development, proposing four key recommendations for AI governance.',
}

export default function CACFeedbackPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-navy py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Policy Statement</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            DWAC Feedback on China&apos;s AI Agent Governance Framework
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <span>September 1, 2026</span>
            <span className="text-slate-500">•</span>
            <span>Digital World Arbitration Center</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Executive Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2 mt-0">Executive Summary</h3>
              <p className="text-blue-800 mb-0">
                DWAC submits feedback on China&apos;s Implementation Opinion on AI Agent Standardization and Innovation Development (May 8, 2026), 
                proposing four key recommendations: (1) refining &quot;clear decision boundaries&quot; principles, (2) improving the security assessment 
                framework, (3) supplementing multi-agent and cross-border interoperability rules, and (4) establishing pre-arbitration dispute 
                resolution mechanisms.
              </p>
            </div>

            {/* About DWAC */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">About DWAC</h2>
            <p className="text-slate-700 leading-relaxed">
              The Digital World Arbitration Center (DWAC) is an online arbitration institution specializing in digital world dispute resolution, 
              headquartered in the Hong Kong Special Administrative Region of the People&apos;s Republic of China. DWAC is committed to providing 
              efficient and impartial arbitration services for cross-border digital disputes, having established an arbitration rules system 
              covering 47 jurisdictions worldwide and accumulated extensive institutional research in artificial intelligence arbitration.
            </p>

            {/* Overall Assessment */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">Overall Assessment</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              DWAC warmly welcomes the release of this Implementation Opinion and recognizes its threefold significance:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>Filling an international gap in Agent-specific governance:</strong> China is the first major jurisdiction globally to issue a systematic governance document specifically targeting AI Agents, demonstrating distinct institutional foresight.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>Establishing an effective paradigm for multi-departmental collaborative regulation:</strong> Jointly issued by CAC, NDRC, and MIIT, reflecting institutional innovation in cross-departmental AI governance coordination.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">●</span>
                <span className="text-slate-700"><strong>Clarifying core principles of security and controllability:</strong> &quot;Security and controllability&quot; as the primary principle for AI Agent governance aligns with the international consensus on high-risk AI system regulation.</span>
              </li>
            </ul>

            {/* Key Recommendations */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">Key Recommendations</h2>

            {/* Recommendation 1 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">1. Refining &quot;Clear Decision Boundaries&quot; Principles</h3>
              <p className="text-slate-600 mb-3">The Implementation Opinion requires &quot;clearly delineated decision-making authority boundaries&quot; between users and AI Agents.</p>
              <p className="text-slate-700 font-medium mb-2">Recommendations:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Establish classification and grading standards for AI Agent decision-making authority (e.g., high-risk decisions requiring human confirmation)</li>
                <li>• Require AI Agent operators to disclose the scope of autonomous decision-making and authorization boundaries to users</li>
                <li>• Establish an &quot;Agent operator vicarious liability&quot; regime, clarifying operators&apos; legal responsibility for Agent behavior</li>
              </ul>
            </div>

            {/* Recommendation 2 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">2. Improving Security Assessment Framework</h3>
              <p className="text-slate-600 mb-3">The Implementation Opinion requires AI Agent operators to submit &quot;security assessment reports&quot; before deployment.</p>
              <p className="text-slate-700 font-medium mb-2">Recommendations:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Issue &quot;AI Agent Security Assessment Technical Specifications&quot; clarifying assessment indicator systems, processes, and qualification standards</li>
                <li>• Establish a recognition system for &quot;independent third-party assessment institutions&quot;</li>
                <li>• Clarify in arbitration rules that security assessment reports can serve as important evidence for determining whether operators have fulfilled reasonable duty of care</li>
              </ul>
            </div>

            {/* Recommendation 3 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">3. Multi-Agent Systems &amp; Cross-Border Interoperability</h3>
              <p className="text-slate-600 mb-3">The Implementation Opinion envisions multi-agent systems and proposes building a &quot;trusted interconnection foundation.&quot;</p>
              <p className="text-slate-700 font-medium mb-2">Recommendations:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Clarify joint liability frameworks and operator identification obligations in multi-agent collaboration scenarios</li>
                <li>• Establish jurisdiction rules for cross-border AI Agent disputes, with &quot;service results directed at Chinese users&quot; as a jurisdictional connecting factor</li>
                <li>• Promote interoperability between AID identity codes and W3C Verifiable Credentials and international A2A/MCP protocol standards</li>
              </ul>
            </div>

            {/* Recommendation 4 */}
            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-3 mt-0">4. Pre-Arbitration Dispute Resolution Mechanism</h3>
              <p className="text-slate-600 mb-3">AI Agent disputes are highly technical, professional, and cross-border in nature, with traditional litigation facing challenges of evidentiary difficulty and high cross-border enforcement costs.</p>
              <p className="text-slate-700 font-medium mb-2">Recommendations:</p>
              <ul className="space-y-2 text-slate-700">
                <li>• Add encouraging provisions in implementation rules, guiding AI Agent operators to include arbitration clauses in service agreements</li>
                <li>• Require AI Agent operators to preserve complete decision trail logs as key evidence in arbitration proceedings</li>
                <li>• Establish &quot;AI Arbitrator&quot; certification system, allowing qualified AI systems to participate in dispute resolution as technical assistance tools under specific conditions</li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-serif font-bold text-navy-900 mt-12 mb-4">Conclusion</h2>
            <p className="text-slate-700 leading-relaxed">
              DWAC believes this Implementation Opinion marks a new stage in China&apos;s AI governance development. The feedback provided aims to 
              contribute to the refinement of this important policy framework. DWAC looks forward to maintaining communication with CAC and 
              relevant departments, providing professional support in the field of digital arbitration.
            </p>

            {/* Contact */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                <strong>Contact:</strong> Harry Zhang, Founder<br />
                <strong>Email:</strong> contact@dwac.net<br />
                <strong>Date:</strong> September 1, 2026
              </p>
              <p className="text-slate-500 text-xs mt-4 italic">
                This feedback was prepared by DWAC&apos;s technical team based on discussions among Dr. Frontie, Pr. Tc Zhou, Fresa Li, and Dr. Gochye.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">Related Publications</h3>
          <p className="text-slate-600 mb-6">Explore DWAC&apos;s research on AI governance and digital arbitration.</p>
          <a 
            href="/publications/gclc" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
          >
            View Global Cyber Law Compendium
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
