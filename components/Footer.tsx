'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-coal-800 bg-coal-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-gold-400">Ziane Auto</p>
          <p className="mt-2 max-w-sm">
            {t.footer.about}
          </p>
        </div>
        <div className="space-y-2">
          <p className="uppercase tracking-[0.2em] text-white/60">{t.footer.visit}</p>
          <p>Ain Touta, Batna, Algeria</p>
          <p>{t.footer.hours}</p>
        </div>
        <div className="space-y-2">
          <p className="uppercase tracking-[0.2em] text-white/60">{t.footer.contact}</p>
          <p>0791921389</p>
          <p>contact@zianeauto.dz</p>
        </div>
      </div>
    </footer>
  )
}
