import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '專業圖書室 | Digital World Arbitration Centre',
  description: 'DWAC 專業圖書室 — 數位世界仲裁中心專業出版物與法律參考資料。',
}

const books = [
  {
    vol: '第一卷',
    titleZh: '數位世界仲裁中心專業圖書室（卷一）',
    titleEn: 'DWAC Professional Library (Volume 1)',
    cover: '/images/library/vol1-cover.jpg',
    coverSrcSet: {
      sm: '/images/library/vol1-cover-400.jpg',
      md: '/images/library/vol1-cover-512.jpg',
      lg: '/images/library/vol1-cover-1024.jpg',
    },
    href: '/zh-tw/library/book/vol1',
    desc: '數位世界仲裁的基礎概念與框架。',
  },
  {
    vol: '第二卷',
    titleZh: '數位世界仲裁中心專業圖書室（卷二）',
    titleEn: 'DWAC Professional Library (Volume 2)',
    cover: '/images/library/vol2-cover-en.jpg',
    coverSrcSet: {
      sm: '/images/library/vol2-cover-en-400.jpg',
      md: '/images/library/vol2-cover-en-512.jpg',
      lg: '/images/library/vol2-cover-en-1024.jpg',
    },
    href: '/zh-tw/library/book/vol2',
    desc: '數位世界爭議解決的進階實踐與案例研究。',
  },
  {
    vol: '第三卷',
    titleZh: '全球網絡法彙編（卷三）— AI 法律問題研究',
    titleEn: 'Global Cyber Law Compendium (Volume III)',
    cover: '/images/library/vol3-cover.jpg',
    href: '/zh-tw/library/book/vol3',
    desc: '人工智慧時代的法律框架與治理模型。',
  },
  {
    vol: '第四卷',
    titleZh: '全球仲裁規則彙編（卷四）',
    titleEn: 'Global Arbitration Rules Reference (Volume IV)',
    cover: '/images/library/vol4-cover.jpg',
    href: '/zh-tw/library/book/vol4',
    desc: '全球主要仲裁機構規則全面參考指南。',
  },
]

export default function LibraryPageZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC 專業圖書室</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            專業<br />圖書室
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            數位世界仲裁與爭議解決的核心出版物與參考資料。
          </p>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            出版物
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {books.map((book) => (
              <Link
                key={book.vol}
                href={book.href}
                className="group block bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-navy-50 flex items-center justify-center overflow-hidden">
                  {book.coverSrcSet ? (
                    <picture>
                      <source media="(min-width: 1024px)" srcSet={book.coverSrcSet.lg} type="image/jpeg" />
                      <source media="(min-width: 768px)" srcSet={book.coverSrcSet.md} type="image/jpeg" />
                      <img
                        src={book.coverSrcSet.sm}
                        alt={book.titleZh}
                        className="w-auto h-full object-contain shadow-lg group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </picture>
                  ) : (
                    <img
                      src={book.cover}
                      alt={book.titleZh}
                      className="w-auto h-full object-contain shadow-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-gold-500 text-sm font-semibold mb-1">{book.vol}</p>
                  <h3 className="font-serif text-xl font-bold text-navy-800 mb-2">
                    {book.titleZh}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{book.titleEn}</p>
                  <p className="text-gray-600 text-sm">{book.desc}</p>
                  <p className="text-gold-500 text-sm font-semibold mt-4 group-hover:underline">
                    限時免費獲取 →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
