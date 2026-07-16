import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '案例管理 - DWAC',
}

export default function Cases() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">案例统计</h1>
          <p className="text-xl text-gray-300 max-w-2xl">DWAC 仲裁案例信息</p>
        </div>
      </section>
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">即将上线</h2>
          <p className="text-gray-400 mb-8">
            DWAC 目前处于创始阶段。本页将在平台投入运营后提供关于已立案案件、解决时间和案件类别的匿名统计数据。
          </p>
          <div className="bg-navy-800/30 rounded-xl p-8 inline-block">
            <div className="text-4xl font-bold text-gold-600 mb-2">Q4 2026</div>
            <p className="text-gray-400">平台上线</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">对 DWAC 感兴趣？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            了解更多关于我们的使命以及我们如何构建数字争议解决机制。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/about/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold rounded-lg hover:bg-gold-600 transition-colors">
              关于 DWAC
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-500/[0.06] transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
