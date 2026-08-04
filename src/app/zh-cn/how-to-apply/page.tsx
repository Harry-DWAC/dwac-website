import Link from 'next/link'
export const metadata = {
  title: '如何申请 - 数字世界仲裁中心',
}


export default function HowToApplyZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">如何申请</h1>
          <p className="text-xl text-gray-300 max-w-2xl">提交仲裁申请的步骤指南</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">审查管辖权要求</h3>
                <p className="text-gray-400">在提交之前，确保您的纠纷属于DWAC的管辖范围。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">准备文件</h3>
                <p className="text-gray-400">收集所有相关文件，包括仲裁协议、证据和支持文档。</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">提交申请</h3>
                <p className="text-gray-400">通过我们的联系表单或电子邮件提交仲裁请求。</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              开始申请
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
