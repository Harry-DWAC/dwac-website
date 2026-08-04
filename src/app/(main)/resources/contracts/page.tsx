'use client'

import { useState } from 'react'
import Link from 'next/link'

interface TemplateCardProps {
  icon: string
  title: string
  id: string
  desc: string
  tags: string[]
  onDownload: (filename: string) => void
}

function TemplateCard({ icon, title, id, desc, tags, onDownload }: TemplateCardProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-gold-500/50 transition-all hover:-translate-y-0.5">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <div className="text-xs text-gray-500 font-mono">{id}</div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-0.5 rounded ${
              tag === '⚖️ DWAC Clause'
                ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                : 'bg-gold-500/10 text-gold-400'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-3 border-t border-slate-700/50">
        <button
          onClick={() => alert('Preview coming soon!')}
          className="flex-1 px-3 py-2 text-sm border border-slate-600 text-gray-400 rounded-lg hover:border-gold-500 hover:text-gold-400 transition-colors"
        >
          👁️ Preview Free
        </button>
        <button
          onClick={() => onDownload(`${title.replace(/\s+/g, '_')}.pdf`)}
          className="flex-1 px-3 py-2 text-sm bg-gold-500/[0.06] hover:bg-gold-500 text-white font-medium rounded-lg transition-colors"
        >
          📥 Download ¥35
        </button>
      </div>
    </div>
  )
}

function PaymentModal({ 
  isOpen, 
  onClose, 
  filename,
  onTabChange,
  activeTab 
}: { 
  isOpen: boolean
  onClose: () => void
  filename: string
  onTabChange: (tab: string) => void
  activeTab: string
}) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-white font-medium">{filename}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <div className="flex border-b border-slate-700">
          <button
            onClick={() => onTabChange('wechat')}
            className={`flex-1 py-3 text-sm ${activeTab === 'wechat' ? 'text-gold-400 border-b-2 border-gold-subtle font-medium' : 'text-gray-400'}`}
          >
            💳 WeChat Pay
          </button>
          <button
            onClick={() => onTabChange('alipay')}
            className={`flex-1 py-3 text-sm ${activeTab === 'alipay' ? 'text-gold-400 border-b-2 border-gold-subtle font-medium' : 'text-gray-400'}`}
          >
            💰 Alipay
          </button>
          <button
            onClick={() => onTabChange('ecny')}
            className={`flex-1 py-3 text-sm ${activeTab === 'ecny' ? 'text-gold-400 border-b-2 border-gold-subtle font-medium' : 'text-gray-400'}`}
          >
            💴 e-CNY
          </button>
        </div>
        
        <div className="p-6 text-center">
          {activeTab === 'wechat' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/wechat-qr.jpg" alt="WeChat Pay" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">Scan with WeChat to pay<br />Send screenshot to:</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
          {activeTab === 'alipay' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/alipay-qr.jpg" alt="Alipay" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">Scan with Alipay to pay<br />Send screenshot to:</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
          {activeTab === 'ecny' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/ecny-qr.jpg" alt="e-CNY" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">Scan with e-CNY app to pay<br />Send screenshot to:</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={() => { onClose(); alert('Preview coming soon!') }}
            className="w-full py-3 border-2 border-dashed border-slate-600 text-gray-400 rounded-lg hover:border-gold-500 hover:text-gold-400 transition-colors"
          >
            👁️ Free Online Preview
          </button>
        </div>
      </div>
    </div>
  )
}

const templates = {
  sales: [
    {
      icon: '📦',
      title: 'Goods Purchase Agreement',
      id: 'DWAC-SALE-001',
      desc: 'Standard purchase agreement for physical goods with delivery terms, quality guarantees, and payment conditions. Includes DWAC arbitration clause.',
      tags: ['B2B', 'Goods', '⚖️ DWAC Clause'],
    },
    {
      icon: '💾',
      title: 'Digital Asset Purchase',
      id: 'DWAC-SALE-002',
      desc: 'Purchase agreement for digital assets including NFTs, digital art, software licenses, and virtual property. Crypto payment clauses included.',
      tags: ['Digital', 'NFT', '⚖️ DWAC Clause'],
    },
  ],
  service: [
    {
      icon: '🔧',
      title: 'Professional Services Agreement',
      id: 'DWAC-SVC-001',
      desc: 'General services agreement for consultants, agencies, and service providers. Includes scope of work, deliverables, and payment schedule.',
      tags: ['Services', 'Consulting', '⚖️ DWAC Clause'],
    },
    {
      icon: '☁️',
      title: 'SaaS Service Agreement',
      id: 'DWAC-SVC-002',
      desc: 'Software-as-a-Service agreement with SLA terms, uptime guarantees, data handling, and subscription management clauses.',
      tags: ['SaaS', 'Cloud', '⚖️ DWAC Clause'],
    },
  ],
  tech: [
    {
      icon: '🔐',
      title: 'Software License Agreement',
      id: 'DWAC-TECH-001',
      desc: 'Comprehensive software license for end-users and enterprises. Covers usage rights, restrictions, updates, and support terms.',
      tags: ['Software', 'License', '⚖️ DWAC Clause'],
    },
    {
      icon: '🤖',
      title: 'AI/ML Model License',
      id: 'DWAC-TECH-002',
      desc: 'Specialized license for AI models, machine learning algorithms, and training data usage. Includes model output rights and data privacy terms.',
      tags: ['AI/ML', 'Model', '⚖️ DWAC Clause'],
    },
  ],
  partnership: [
    {
      icon: '📋',
      title: 'Partnership Agreement',
      id: 'DWAC-PART-001',
      desc: 'General partnership agreement covering profit sharing, decision making, capital contributions, and partner exit procedures.',
      tags: ['Partnership', 'Business', '⚖️ DWAC Clause'],
    },
    {
      icon: '🌐',
      title: 'Joint Venture Agreement',
      id: 'DWAC-PART-002',
      desc: 'Joint venture agreement for specific projects or business ventures. Includes JV structure, governance, and dispute resolution.',
      tags: ['Joint Venture', 'Collaboration', '⚖️ DWAC Clause'],
    },
  ],
  employment: [
    {
      icon: '💼',
      title: 'Employment Contract',
      id: 'DWAC-EMPL-001',
      desc: 'Standard employment contract with salary, benefits, job responsibilities, termination clauses, and confidentiality terms.',
      tags: ['Employment', 'Full-time', '⚖️ DWAC Clause'],
    },
    {
      icon: '📝',
      title: 'Independent Contractor Agreement',
      id: 'DWAC-EMPL-002',
      desc: 'Agreement for freelancers, consultants, and independent contractors. Defines project scope, deliverables, payment terms, and IP ownership.',
      tags: ['Contractor', 'Freelance', '⚖️ DWAC Clause'],
    },
  ],
}

const categories = [
  { key: 'sales', icon: '🏷️', title: 'Sales / Purchase Agreements', desc: 'For buying and selling goods, digital products, and services' },
  { key: 'service', icon: '🛠️', title: 'Service Agreements', desc: 'For professional services, consulting, and technical support' },
  { key: 'tech', icon: '⚙️', title: 'Technology License Agreements', desc: 'For software licensing, IP rights, and technology transfer' },
  { key: 'partnership', icon: '🤝', title: 'Partnership / Joint Venture Agreements', desc: 'For business partnerships, joint ventures, and collaborations' },
  { key: 'employment', icon: '👥', title: 'Employment / Consulting Agreements', desc: 'For hiring employees, contractors, and consultants' },
]

export default function ContractsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [filename, setFilename] = useState('')
  const [activeTab, setActiveTab] = useState('wechat')

  const handleDownload = (name: string) => {
    setFilename(name)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero */}
      <section className="bg-navy-800 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm rounded-full mb-4">
            📝 Professional Templates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contract <span className="text-gold-400">Templates</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready-to-use contract templates with built-in DWAC arbitration clauses for sales, services, technology licensing, partnerships, and employment.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/resources/" className="text-gray-400 hover:text-gold-400">Resources</Link>
          <span className="text-gray-400">›</span>
          <span className="text-white">Contract Templates</span>
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.key} className="mb-12">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center text-2xl">
                {cat.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{cat.title}</h2>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(templates as Record<string, typeof templates.sales>)[cat.key]?.map((template, idx) => (
                <TemplateCard
                  key={idx}
                  {...template}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <PaymentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        filename={filename}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
