import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment | Digital World Arbitration Centre',
  description: 'Payment information for DWAC arbitration services. Bank transfer details for dispute filing fees.',
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-8 text-center">Payment Information</h1>

        <div className="bg-glass-card border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-slate-300 mb-8 leading-relaxed">
            DWAC accepts payment via bank transfer. Please use the following account details for all fee payments, including arbitration filing fees and membership dues.
          </p>

          <div className="space-y-6">
            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">Account Holder</h2>
              <p className="text-white text-lg font-semibold">成都浣锦网络科技有限公司</p>
              <p className="text-slate-400 text-sm mt-1">Chengdu Huanjin Network Technology Co., Ltd.</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">Bank Account Number</h2>
              <p className="text-white text-lg font-mono font-semibold tracking-wider">1228 1565 4024</p>
            </div>

            <div className="border-b border-gold-subtle/30 pb-6">
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">Bank Name</h2>
              <p className="text-white text-lg font-semibold">中国银行郫都支行</p>
              <p className="text-slate-400 text-sm mt-1">Bank of China, Pidu Sub-branch</p>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-4">Reference</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Please include your case number or applicant name in the transfer reference. Contact{' '}
                <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 underline">secretary@dwac.net</a>{' '}
                for payment confirmation or if you require an invoice.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-glass-card border border-gold-500/20 rounded-2xl p-6 shadow-xl">
          <h3 className="text-gold-400 font-semibold mb-2">Refund Policy</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Withdrawal before hearing: 60% refund</li>
            <li>• Settlement after hearing, before award: 40% refund</li>
            <li>• After award issuance: No refund</li>
          </ul>
        </div>
      </div>
    </div>
  )
}