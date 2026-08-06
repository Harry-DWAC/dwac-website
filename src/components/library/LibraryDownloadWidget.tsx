'use client'

import { useState, useEffect } from 'react'

const API = 'https://api.dwac.net'
const PROMO_END = new Date('2026-09-15T23:59:59+08:00')

interface Status {
  total_applied: number
  remaining_slots: number
  limit: number
  promo_active: boolean
  price_after_promo?: number
  price_currency?: string
  promo_end_date: string
  countdown_days: number
}

interface FileRef { lang: string; fmt: string; url: string; size: string }
interface VolRef { volume: number; title: { en: string; cn: string }; files: FileRef[] }

interface ApplyResponse {
  success?: boolean
  position?: number
  remaining_slots?: number
  download_urls?: VolRef[]
  already_applied?: boolean
  price_per_book?: number
  note?: string
  error?: string
  promo_ended?: boolean
  limit_reached?: boolean
}

function fmtIcons(fmt: string) {
  const m: Record<string, string> = { epub: '📖', md: '📝' }
  return m[fmt.toLowerCase()] || '📄'
}

function countdownText(days: number) {
  if (days <= 0) return 'Today is the last day!'
  if (days === 1) return '1 day left'
  return `${days} days left`
}

export default function LibraryDownloadWidget() {
  const [status, setStatus] = useState<Status | null>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lang, setLang] = useState('en')
  const [applying, setApplying] = useState(false)
  const [result, setResult] = useState<ApplyResponse | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API}/library/status`)
      .then(r => r.json())
      .then((s: Status) => setStatus(s))
      .catch(() => setError('Unable to load status'))
  }, [])

  const handleApply = async () => {
    if (!email.trim() || !name.trim()) { setError('Please fill in both name and email'); return }
    if (!email.includes('@') || !email.includes('.')) { setError('Invalid email address'); return }
    setApplying(true)
    setError('')
    try {
      const res = await fetch(`${API}/library/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), name: name.trim(), language: lang })
      })
      const data: ApplyResponse = await res.json()
      if (res.ok) {
        setResult(data)
        if (status) setStatus({ ...status, total_applied: data.position || status.total_applied + 1, remaining_slots: data.remaining_slots || Math.max(0, status.remaining_slots - 1) })
      } else {
        setError(data.error || 'Application failed')
        if (data.promo_ended && status) setStatus({ ...status, promo_active: false })
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setApplying(false)
    }
  }

  if (error && !status) return <div className="text-red-500 text-center py-4">{error}</div>
  if (!status) return <div className="text-center py-8 text-slate-400 animate-pulse">Loading…</div>

  // Already applied or just succeeded
  if (result && (result.success || result.already_applied)) {
    const urls = result.download_urls || []
    return (
      <div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8 text-center">
          <p className="text-emerald-700 font-bold text-lg mb-1">✅ Download Unlocked!</p>
          <p className="text-emerald-600 text-sm">
            {result.already_applied ? 'You previously applied. Your downloads are still available.' : `You are applicant #${result.position} of ${status.limit}.`}
          </p>
          <p className="text-emerald-500 text-xs mt-1">
            {result.remaining_slots != null && result.remaining_slots > 0
              ? `${result.remaining_slots} free slots remaining.`
              : 'All free slots have been claimed.'}
          </p>
        </div>
        <h3 className="font-serif text-xl font-bold text-navy-800 mb-4">
          ↓↓↓ Your Free Downloads
        </h3>
        <div className="space-y-6">
          {urls.map((vol: VolRef) => (
            <div key={vol.volume} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <h4 className="font-bold text-navy-800 mb-3">
                Volume {vol.volume}: {vol.title.en}
                <span className="block text-xs text-slate-400 font-normal">{vol.title.cn}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {vol.files.map((f, i) => (
                  <a
                    key={i} href={f.url} download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-50 hover:bg-gold-100 border border-gold-200 rounded-lg text-sm text-navy-700 transition-colors"
                  >
                    {fmtIcons(f.fmt)} {f.lang.toUpperCase()} .{f.fmt} <span className="text-xs text-slate-400">({f.size})</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 text-center mt-6">
          Need more? After Sep 15 each ebook is ¥20. Share with colleagues &amp; friends — the first 100 are free!
        </p>
      </div>
    )
  }

  // Promo ended
  if (!status.promo_active) {
    const price = status.price_after_promo ?? 20
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
        <p className="text-amber-700 font-bold text-lg mb-2">⏰ Promotion Ended</p>
        <p className="text-amber-600">The free download promotion ended on September 15, 2026.</p>
        <p className="text-amber-600 mt-2 font-semibold">Ebooks are now ¥{price} / book.</p>
        <p className="text-amber-500 text-sm mt-1">
          To purchase, contact <a href="mailto:library@dwac.net" className="underline hover:text-amber-700">library@dwac.net</a> — mention which volume(s) you need.
        </p>
      </div>
    )
  }

  // Promo active, not yet applied
  const pct = Math.round((status.total_applied / status.limit) * 100)
  const price = status.price_after_promo ?? 20
  return (
    <div>
      {/* Promo banner */}
      <div className="bg-gradient-to-r from-gold-50 to-amber-50 border border-gold-200 rounded-xl p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-navy-800 text-lg mb-1">🎉 Limited-Time Free Access</p>
            <p className="text-slate-600 text-sm">
              Apply before <strong>September 15, 2026</strong> to download all 4 volumes for free.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gold-600 font-bold text-2xl">{countdownText(status.countdown_days)}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>{status.total_applied} / {status.limit} claimed</span>
            <span>{status.remaining_slots} remaining</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, pct)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Application form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="font-serif text-xl font-bold text-navy-800 mb-4">Apply for Free Downloads</h3>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder="Your name" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Language</label>
            <select value={lang} onChange={e => setLang(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400">
              <option value="en">English</option>
              <option value="cn">中文</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleApply}
            disabled={applying || status.remaining_slots <= 0}
            className="w-full py-2.5 px-4 bg-gold-500 hover:bg-gold-600 disabled:bg-slate-300 text-navy-800 font-bold rounded-lg transition-colors text-sm"
          >
            {applying ? 'Applying…' : status.remaining_slots <= 0 ? 'All Slots Claimed' : 'Apply Now — Free'}
          </button>

          <p className="text-xs text-slate-400 text-center">
            By applying you agree to DWAC&apos;s terms. We will not share your email.
          </p>
          <p className="text-xs text-slate-400 text-center mt-1">After Sep 15, 2026: ¥{price} per ebook</p>
        </div>
      </div>
    </div>
  )
}
