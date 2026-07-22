import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '付款信息 | Digital World Arbitration Centre',
  description: 'DWAC仲裁服务付款信息。纠纷立案费用银行转账详情。',
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-8 text-center">付款信息</h1>

        <div className="bg-glass-card border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-slate-300 mb-8 leading-relaxed">
            DWAC接受银行转账付款。请使用以下账户信息支付所有费用，包括仲裁立案费和会员费。
          </p>

          <div className="space-y-6">
            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">账户名称</h2>
              <p className="text-white text-lg font-semibold">成都浣锦网络科技有限公司</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">银行账号</h2>
              <p className="text-white text-lg font-mono font-semibold tracking-wider">1228 1565 4024</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">开户银行</h2>
              <p className="text-white text-lg font-semibold">中国银行郫都支行</p>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">付款备注</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                请在转账备注中注明案件编号或申请人名称。如需确认付款或索取发票，请联系{' '}
                <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 underline">secretary@dwac.net</a>。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-glass-card border border-gold-500/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-gold-400 font-semibold mb-2">退款政策</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• 立案后开庭前撤案：退还60%</li>
            <li>• 开庭后裁决前和解：退还40%</li>
            <li>• 裁决后：不予退款</li>
          </ul>
        </div>
      </div>
    </div>
  )
}