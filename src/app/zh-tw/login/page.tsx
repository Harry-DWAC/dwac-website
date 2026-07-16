'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('認證功能將於 2026 年第四季度上線。在此期間所有頁面均可免費存取。感謝您的耐心等待。')
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">歡迎回來</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">登入</h1>
          <p className="text-slate-300 leading-relaxed">
            登入您的DWAC帳戶，參與社區討論並管理您的個人資料。
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 lg:p-10">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  電子信箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                  密碼
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                  placeholder="輸入您的密碼"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500/30"
                  />
                  <span className="text-xs text-slate-500">記住我</span>
                </label>
                <span className="text-xs text-gold-600 hover:text-gold-700 cursor-pointer">
                  忘記密碼？
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              登入
            </button>

            <p className="mt-6 text-center text-sm text-slate-500">
              沒有帳戶？{' '}
              <Link href="/zh-tw/register/" className="text-gold-600 hover:text-gold-700 font-medium">
                建立一個
              </Link>
            </p>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/zh-tw/"
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              ← 繼續免登入瀏覽
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
