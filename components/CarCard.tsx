'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Car } from '@/lib/data'
import { useLanguage } from '@/components/LanguageProvider'

export default function CarCard({ car }: { car: Car }) {
  const { t } = useLanguage()
  const media = car.media[0]
  return (
    <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl border border-coal-800 transition hover:border-gold-400/60 animate-fade-up">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={media.url}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-coal-950/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-gold-200">
          {car.available ? t.cars.filters.available : t.cars.filters.reserved}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">{car.brand}</p>
          <h3 className="font-display text-2xl text-white">{car.model}</h3>
          <p className="text-sm text-white/70">{car.year}</p>
        </div>
        <p className="text-sm text-white/70">{car.description}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-display text-xl text-gold-200">{car.price}</span>
          <Link
            href={`/cars/${car.id}`}
            className="rounded-full border border-gold-400/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-200 transition hover:bg-gold-400/20"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}
