import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁规则全文 | Digital World Arbitration Centre',
  description: 'DWAC数字世界仲裁规则完整文本',
}

export default function RulesFullPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Full Text</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">数字世界仲裁规则（全文）</h1>
        <div className="bg-glass-card border border-gold-500/20 rounded-2xl p-8 shadow-xl">
          <p className="text-slate-300 leading-relaxed mb-4">
            《数字世界仲裁规则》是DWAC仲裁程序的核心规范文件，涵盖仲裁申请、仲裁庭组成、审理程序、裁决执行等全流程规定。
          </p>
          <p className="text-slate-400 text-sm">
            完整规则文本即将发布。如需提前获取，请联系 <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 underline">secretary@dwac.net</a>。
          </p>
        </div>
      </div>
    </div>
  )
}
