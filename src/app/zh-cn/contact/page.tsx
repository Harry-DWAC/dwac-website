import Link from 'next/link'

export default function ContactZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-xl text-gray-300 max-w-2xl">与DWAC取得联系</p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">联系方式</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">邮箱</h3>
                  <a href="mailto:secretary@dwac.net" className="text-gold-500 hover:text-gold-400">secretary@dwac.net</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">网站</h3>
                  <a href="https://dwac.net" className="text-gold-500 hover:text-gold-400">dwac.net</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">回复时间</h3>
                  <p className="text-gray-400">2-3个工作日</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-4">常见咨询</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/zh-cn/arbitrators/join/" className="text-gold-500 hover:text-gold-400">→ 申请成为仲裁员</Link></li>
                <li><Link href="/zh-cn/membership/" className="text-gold-500 hover:text-gold-400">→ 会员信息</Link></li>
                <li><Link href="/zh-cn/charter/" className="text-gold-500 hover:text-gold-400">→ 数字世界公约</Link></li>
                <li><Link href="/zh-cn/about/" className="text-gold-500 hover:text-gold-400">→ 关于DWAC</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
