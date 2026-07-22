import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '付款資訊 | Digital World Arbitration Centre',
  description: 'DWAC仲裁服務付款資訊。糾紛立案費用銀行轉帳詳情。',
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-8 text-center">付款資訊</h1>

        <div className="bg-glass-card border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-slate-300 mb-8 leading-relaxed">
            DWAC接受銀行轉帳付款。請使用以下帳戶資訊支付所有費用，包括仲裁立案費和會員費。
          </p>

          <div className="space-y-6">
            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">帳戶名稱</h2>
              <p className="text-white text-lg font-semibold">成都浣錦網絡科技有限公司</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">銀行帳號</h2>
              <p className="text-white text-lg font-mono font-semibold tracking-wider">1228 1565 4024</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">開戶銀行</h2>
              <p className="text-white text-lg font-semibold">中國銀行郫都支行</p>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">付款備註</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                請在轉帳備註中註明案件編號或申請人名稱。如需確認付款或索取發票，請聯繫{' '}
                <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 underline">secretary@dwac.net</a>。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-glass-card border border-gold-500/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-gold-400 font-semibold mb-2">退款政策</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• 立案後開庭前撤案：退還60%</li>
            <li>• 開庭後裁決前和解：退還40%</li>
            <li>• 裁決後：不予退款</li>
          </ul>
        </div>
      </div>
    </div>
  )
}