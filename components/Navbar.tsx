'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  return (
    <header className="sticky top-0 z-50 border-b border-coal-800 bg-coal-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-3xl tracking-widest text-gold-400">
          Ziane Auto
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] text-white/80 md:flex">
            <Link href="/" className="transition hover:text-gold-200">
              {t.nav.home}
            </Link>
            <Link href="/cars" className="transition hover:text-gold-200">
              {t.nav.cars}
            </Link>
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-coal-700 bg-coal-900/80 p-1 text-xs uppercase tracking-[0.3em] text-white/70">
            {(['en', 'fr', 'ar'] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 transition ${
                  lang === code ? 'bg-gold-400 text-coal-950' : 'hover:text-gold-200'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
