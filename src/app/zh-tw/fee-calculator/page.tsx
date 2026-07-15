'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function FeeCalculator() {
  const [amount, setAmount] = useState<string>('')
  const [arbitrators, setArbitrators] = useState<string>('1')
  const [procedure, setProcedure] = useState<string>('standard')
  const [showResults, setShowResults] = useState<boolean>(false)
  const [fees, setFees] = useState<{ filing: number; arbitrator: number; admin: number; total: number }>({
    filing: 0,
    arbitrator: 0,
    admin: 0,
    total: 0
  })

  const calculateFees = () => {
    const amountNum = parseFloat(amount) || 0
    const arbitratorCount = parseInt(arbitrators)
    
    let filingFee: number
    if (amountNum <= 10000) filingFee = 1000
    else if (amountNum <= 50000) filingFee = 2500
    else if (amountNum <= 100000) filingFee = 5000
    else if (amountNum <= 500000) filingFee = 10000
    else if (amountNum <= 1000000) filingFee = 15000
    else filingFee = 30000
    
    let arbitratorFeeBase: number
    if (amountNum <= 50000) arbitratorFeeBase = 1250
    else if (amountNum <= 200000) arbitratorFeeBase = 3500
    else if (amountNum <= 500000) arbitratorFeeBase = 7500
    else if (amountNum <= 1000000) arbitratorFeeBase = 15000
    else arbitratorFeeBase = amountNum * 0.015
    
    const arbitratorFee = arbitratorCount === 3 ? arbitratorFeeBase * 2.5 : arbitratorFeeBase
    
    let adminFee = 500
    if (procedure === 'expedited') adminFee += 200
    
    const total = filingFee + arbitratorFee + adminFee
    
    setFees({
      filing: filingFee,
      arbitrator: Math.round(arbitratorFee),
      admin: adminFee,
      total: Math.round(total)
    })
    setShowResults(true)
  }

  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">費用計算器</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            通過透明的費用結構估算您的仲裁成本
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-white mb-6">計算費用</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-white mb-2">爭議金額（¥ 人民幣）</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="輸入金額（如 50000）"
                  className="w-full px-4 py-3 border-2 border-gold-subtle/50 rounded-lg focus:border-gold-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-medium text-white mb-2">仲裁員人數</label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="arbitrators" value="1" checked={arbitrators === '1'} onChange={(e) => setArbitrators(e.target.value)} className="w-4 h-4 text-gold-500 mr-2" />
                    <span className="text-gray-300">獨任仲裁員</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="arbitrators" value="3" checked={arbitrators === '3'} onChange={(e) => setArbitrators(e.target.value)} className="w-4 h-4 text-gold-500 mr-2" />
                    <span className="text-gray-300">三名仲裁員</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-medium text-white mb-2">程序類型</label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="procedure" value="standard" checked={procedure === 'standard'} onChange={(e) => setProcedure(e.target.value)} className="w-4 h-4 text-gold-500 mr-2" />
                    <span className="text-gray-300">標準程序</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="procedure" value="expedited" checked={procedure === 'expedited'} onChange={(e) => setProcedure(e.target.value)} className="w-4 h-4 text-gold-500 mr-2" />
                    <span className="text-gray-300">簡易程序（+¥1,500）</span>
                  </label>
                </div>
              </div>

              <button onClick={calculateFees} className="w-full py-4 bg-gradient-gold text-navy-900 font-bold hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] font-semibold rounded-lg transition-colors text-lg">
                計算費用
              </button>

              {showResults && (
                <div className="bg-navy-800/20 rounded-xl p-6 mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">費用估算</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">受理費</span>
                      <span className="font-semibold text-white">¥{fees.filing.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">仲裁員費用</span>
                      <span className="font-semibold text-white">¥{fees.arbitrator.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">行政管理費</span>
                      <span className="font-semibold text-white">¥{fees.admin.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 bg-slate-900 rounded-lg px-4 -mx-4 mt-4">
                      <span className="text-white font-semibold">預估總計</span>
                      <span className="text-gold-400 font-bold text-xl">¥{fees.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-subtle p-4 rounded-r-lg">
            <p className="text-gold-400 text-sm">
              <strong>提示：</strong>以上費用僅供參考。實際費用可能因案件複雜程度、仲裁員選擇等因素而有所不同。如需精確報價，請聯繫 <a href="mailto:secretary@dwac.net" className="underline">secretary@dwac.net</a>。
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="bg-navy-800/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white mb-4">受理費標準</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy-800/40">
                      <th className="text-left px-4 py-3 font-semibold text-white">爭議金額</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">受理費</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-4 py-3">¥10,000以下</td><td className="px-4 py-3">¥1,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥10,001 – ¥50,000</td><td className="px-4 py-3">¥2,500</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥50,001 – ¥100,000</td><td className="px-4 py-3">¥5,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥100,001 – ¥500,000</td><td className="px-4 py-3">¥10,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥500,001 – ¥1,000,000</td><td className="px-4 py-3">¥15,000</td></tr>
                    <tr><td className="px-4 py-3">¥1,000,000以上</td><td className="px-4 py-3">¥30,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-navy-800/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white mb-4">仲裁員費用參考</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy-800/40">
                      <th className="text-left px-4 py-3 font-semibold text-white">爭議金額</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">獨任仲裁員</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">三名仲裁員</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-4 py-3">¥50,000以下</td><td className="px-4 py-3">¥500 – ¥2,000</td><td className="px-4 py-3">¥1,250 – ¥5,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥50,001 – ¥200,000</td><td className="px-4 py-3">¥2,000 – ¥5,000</td><td className="px-4 py-3">¥5,000 – ¥12,500</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥200,001 – ¥500,000</td><td className="px-4 py-3">¥5,000 – ¥10,000</td><td className="px-4 py-3">¥12,500 – ¥25,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥500,001 – ¥1,000,000</td><td className="px-4 py-3">¥10,000 – ¥20,000</td><td className="px-4 py-3">¥25,000 – ¥50,000</td></tr>
                    <tr><td className="px-4 py-3">¥1,000,000以上</td><td className="px-4 py-3">金額的1-2%</td><td className="px-4 py-3">金額的2.5-5%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
