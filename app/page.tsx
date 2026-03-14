'use client'

import Link from 'next/link'
import CarCard from '@/components/CarCard'
import MediaCarousel, { type MediaItem } from '@/components/MediaCarousel'
import { cars } from '@/lib/data'
import { useLanguage } from '@/components/LanguageProvider'

export default function HomePage() {
  const { t } = useLanguage()

  const heroMedia: MediaItem[] = [
    {
      url: 'https://res.cloudinary.com/demo/image/upload/v1690971611/sample.jpg',
      type: 'image'
    }
  ]

  return (
    <div>
      <section className="hero-grid relative overflow-hidden border-b border-coal-800 bg-coal-950">
        <div className="absolute inset-0 bg-gold-sheen opacity-80" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-gold-200 animate-fade-up">
              {t.hero.location}
            </p>
            <h1 className="font-display text-5xl uppercase leading-tight text-white md:text-6xl animate-fade-up">
              {t.hero.title}
            </h1>
            <p className="max-w-lg text-lg text-white/70 animate-fade-up">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up">
              <Link
                href="/cars"
                className="rounded-full bg-gold-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-coal-950 transition hover:bg-gold-200"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="/cars"
                className="rounded-full border border-gold-400/60 px-6 py-3 text-xs uppercase tracking-[0.35em] text-gold-200 transition hover:bg-gold-400/20"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="animate-float">
            <MediaCarousel items={heroMedia} autoPlay={false} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {t.highlights.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-coal-800 p-6 animate-fade-up"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
                {item.title}
              </p>
              <p className="mt-4 text-lg text-white/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">{t.featured.label}</p>
            <h2 className="font-display text-3xl text-white">{t.featured.title}</h2>
          </div>
          <Link
            href="/cars"
            className="text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-gold-200"
          >
            {t.featured.viewAll}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="border-t border-coal-800 bg-coal-900/60">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">{t.order.label}</p>
            <h2 className="font-display text-3xl text-white">{t.order.title}</h2>
            <p className="mt-4 text-white/70">{t.order.description}</p>
          </div>
          <Link
            href="/cars"
            className="rounded-full border border-gold-400/60 px-6 py-3 text-xs uppercase tracking-[0.35em] text-gold-200 transition hover:bg-gold-400/20"
          >
            {t.order.cta}
          </Link>
        </div>
      </section>
    </div>
  )
}
