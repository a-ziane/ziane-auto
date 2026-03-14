'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries, Language } from '@/lib/i18n'

const LanguageContext = createContext<{
  lang: Language
  setLang: (lang: Language) => void
  t: typeof dictionaries.en
} | null>(null)

const STORAGE_KEY = 'ziane-auto-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && dictionaries[stored]) {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
