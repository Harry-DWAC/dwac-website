import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Library | Digital World Arbitration Centre',
  description: 'DWAC Professional Library - Digital World Arbitration Centre professional publications and legal references.',
}

const books = [
  {
    vol: 'Volume 1',
    titleZh: '数字世界仲裁中心专业图书室（卷一）',
    titleEn: 'DWAC Professional Library (Volume 1)',
    cover: '/images/library/vol1-cover.jpg',
    coverSrcSet: {
      sm: '/images/library/vol1-cover-400.jpg',
      md: '/images/library/vol1-cover-512.jpg',
      lg: '/images/library/vol1-cover-1024.jpg',
    },
    href: '/library/book/vol1',
    desc: 'Foundational concepts and framework for digital world arbitration.',
  },
  {
    vol: 'Volume 2',
    titleZh: '数字世界仲裁中心专业图书室（卷二）',
    titleEn: 'DWAC Professional Library (Volume 2)',
    cover: '/images/library/vol2-cover-en.jpg',
    coverSrcSet: {
      sm: '/images/library/vol2-cover-en-400.jpg',
      md: '/images/library/vol2-cover-en-512.jpg',
      lg: '/images/library/vol2-cover-en-1024.jpg',
    },
    href: '/library/book/vol2',
    desc: 'Advanced practices and case studies in digital world dispute resolution.',
  },
]

export default function LibraryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC Professional Library</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Professional<br />Library
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Core publications and references for digital world arbitration and dispute resolution.
          </p>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {books.map((book) => (
              <Link
                key={book.vol}
                href={book.href}
                className="group block bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-navy-50 flex items-center justify-center overflow-hidden">
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={book.coverSrcSet.lg} type="image/jpeg" />
                    <source media="(min-width: 768px)" srcSet={book.coverSrcSet.md} type="image/jpeg" />
                    <img
                      src={book.coverSrcSet.sm}
                      alt={book.titleEn}
                      className="w-auto h-full object-contain shadow-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <p className="text-gold-500 text-sm font-semibold mb-1">{book.vol}</p>
                  <h3 className="font-serif text-xl font-bold text-navy-800 mb-2">
                    {book.titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{book.titleZh}</p>
                  <p className="text-gray-600 text-sm">{book.desc}</p>
                  <p className="text-gold-500 text-sm font-semibold mt-4 group-hover:underline">
                    Free Preview →
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
