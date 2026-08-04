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
    <div className="bg-navy-800/50 border border-gold-subtle/50 rounded-xl p-5 hover:border-gold-500/50 transition-all hover:-translate-y-0.5">
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
              tag === '⚖️ DWAC仲裁條款'
                ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                : 'bg-gold-500/10 text-gold-400'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-3 border-t border-gold-subtle/50">
        <button
          onClick={() => alert('預覽即將上線！')}
          className="flex-1 px-3 py-2 text-sm border border-gold-subtle text-gray-400 rounded-lg hover:border-gold-500 hover:text-gold-400 transition-colors"
        >
          👁️ 免費預覽
        </button>
        <button
          onClick={() => onDownload(`${title.replace(/\s+/g, '_')}.pdf`)}
          className="flex-1 px-3 py-2 text-sm bg-gold-500/[0.06] hover:bg-gold-500 text-white font-medium rounded-lg transition-colors"
        >
          📥 下載 ¥35
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
        className="bg-navy-800 border border-gold-subtle rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gold-subtle flex justify-between items-center">
          <h3 className="text-white font-medium">{filename}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <div className="flex border-b border-gold-subtle">
          <button
            onClick={() => onTabChange('wechat')}
            className={`flex-1 py-3 text-sm ${activeTab === 'wechat' ? 'text-gold-400 border-b-2 border-gold-medium font-medium' : 'text-gray-400'}`}
          >
            💳 微信支付
          </button>
          <button
            onClick={() => onTabChange('alipay')}
            className={`flex-1 py-3 text-sm ${activeTab === 'alipay' ? 'text-gold-400 border-b-2 border-gold-medium font-medium' : 'text-gray-400'}`}
          >
            💰 支付寶
          </button>
          <button
            onClick={() => onTabChange('ecny')}
            className={`flex-1 py-3 text-sm ${activeTab === 'ecny' ? 'text-gold-400 border-b-2 border-gold-medium font-medium' : 'text-gray-400'}`}
          >
            💴 數字人民幣
          </button>
        </div>
        
        <div className="p-6 text-center">
          {activeTab === 'wechat' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/wechat-qr.jpg" alt="微信支付" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">用微信掃描支付<br />發送截圖至：</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
          {activeTab === 'alipay' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/alipay-qr.jpg" alt="支付寶" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">用支付寶掃描支付<br />發送截圖至：</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
          {activeTab === 'ecny' && (
            <div>
              <div className="bg-navy-800/20 rounded-xl p-4 inline-block mb-4">
                <img src="/resources/payment/ecny-qr.jpg" alt="數字人民幣" className="w-48 h-48 object-contain" />
              </div>
              <div className="text-2xl font-bold text-gold-400 mb-2">¥35.00</div>
              <p className="text-gray-400 text-sm mb-3">用數字人民幣APP掃描支付<br />發送截圖至：</p>
              <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-lg px-4 py-2 text-sm">
                📧 secretary@dwac.net
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gold-subtle">
          <button 
            onClick={() => { onClose(); alert('預覽即將上線！') }}
            className="w-full py-3 border-2 border-dashed border-gold-subtle text-gray-400 rounded-lg hover:border-gold-500 hover:text-gold-400 transition-colors"
          >
            👁️ 免費在線預覽
          </button>
        </div>
      </div>
    </div>
  )
}

const templates = {
  tech: [
    {
      icon: '📄',
      title: '技術服務SLA',
      id: 'TMPL-TECH-001',
      desc: '技術服務提供商的服務等級協議，附績效指標。',
      tags: ['SLA', 'Performance', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🔧',
      title: '軟體開發',
      id: 'TMPL-TECH-002',
      desc: '定制軟體開發合同，含里程碑付款及智慧財產權條款。',
      tags: ['Development', 'IP Rights', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🖥️',
      title: 'IT外包',
      id: 'TMPL-TECH-003',
      desc: 'IT 基礎設施外包協議，涵蓋管理服務與技術支援。',
      tags: ['Outsourcing', 'Support', '⚖️ DWAC仲裁條款'],
    },
  ],
  dao: [
    {
      icon: '⛓️',
      title: '智慧合約框架',
      id: 'TMPL-DAO-001',
      desc: '建立智慧合約的模板，整合 DWAC 爭議解決機制。',
      tags: ['Smart Contract', 'Blockchain', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🪙',
      title: '代幣銷售協議',
      id: 'TMPL-DAO-002',
      desc: '數位資產發行的代幣銷售與分配協議。',
      tags: ['Token', 'Sale', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🏛️',
      title: '數位財產許可',
      id: 'TMPL-DAO-003',
      desc: '數位資產、NFT 及虛擬財產的授權協議。',
      tags: ['NFT', 'License', '⚖️ DWAC仲裁條款'],
    },
  ],
  platform: [
    {
      icon: '📋',
      title: '服務條款',
      id: 'TMPL-PLT-001',
      desc: '數位平台與市場的綜合服務條款。',
      tags: ['ToS', 'Platform', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🤖',
      title: 'AI Agent（電子代理人）服務協議',
      id: 'TMPL-PLT-002',
      desc: 'AI Agent（電子代理人）服務條款，含身份驗證要求。',
      tags: ['AI Agent', 'DID', '⚖️ DWAC仲裁條款'],
    },
  ],
  data: [
    {
      icon: '📊',
      title: '資料處理協議',
      id: 'TMPL-DPA-001',
      desc: '符合 GDPR/CCPA 的資料處理協議，適用於服務提供商。',
      tags: ['GDPR', 'Privacy', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🛡️',
      title: '隱私權政策',
      id: 'TMPL-DPA-002',
      desc: '數位平台與服務的綜合隱私權政策模板。',
      tags: ['Privacy', 'Compliance', '⚖️ DWAC仲裁條款'],
    },
    {
      icon: '🌍',
      title: '跨境資料傳輸',
      id: 'TMPL-DPA-003',
      desc: '國際資料傳輸協議，附標準合約條款。',
      tags: ['International', 'SCCs', '⚖️ DWAC仲裁條款'],
    },
  ],
}

const categories = [
  { key: 'tech', icon: '💻', title: '技術服務合同', desc: '軟體開發、IT外包和技術支援協議', count: '3個模板' },
  { key: 'dao', icon: '🌐', title: '數位資產交易', desc: '智慧合約、代幣銷售和數位財產協議', count: '3個模板' },
  { key: 'platform', icon: '📱', title: '平台用戶協議', desc: '服務條款、用戶註冊和平台使用政策', count: '2個模板' },
  { key: 'data', icon: '🔒', title: '資料處理協議', desc: '資料處理、隱私和處理條款', count: '3個模板' },
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
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="bg-navy-800 border-b border-gold-subtle">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm rounded-full mb-4">
            📝 專業模板
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            合同<span className="text-gold-400">模板</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            可直接使用的合同模板，含DWAC仲裁條款，適用於數位服務、AI Agent（电子代理人）和跨境交易。
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/zh-tw/resources/" className="text-gray-400 hover:text-gold-400">資源中心</Link>
          <span className="text-gray-400">›</span>
          <span className="text-white">合同模板</span>
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.key} className="mb-12">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gold-subtle">
              <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center text-2xl">
                {cat.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white">{cat.title}</h2>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
              <span className="text-sm text-gray-500">{cat.count}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(templates as Record<string, typeof templates.tech>)[cat.key]?.map((template, idx) => (
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
