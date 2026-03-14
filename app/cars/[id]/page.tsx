'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import OrderForm from '@/components/OrderForm'
import MediaCarousel from '@/components/MediaCarousel'
import { cars } from '@/lib/data'
import { useLanguage } from '@/components/LanguageProvider'

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage()
  const car = useMemo(() => cars.find((item) => item.id === params.id), [params.id])

  if (!car) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <Link
          href="/cars"
          className="text-xs uppercase tracking-[0.35em] text-white/60 hover:text-gold-200"
        >
          {t.carDetail.back}
        </Link>
        <p className="mt-6 text-white/70">Car not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <Link
        href="/cars"
        className="text-xs uppercase tracking-[0.35em] text-white/60 hover:text-gold-200"
      >
        {t.carDetail.back}
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">{car.brand}</p>
            <h1 className="font-display text-4xl text-white">{car.model}</h1>
            <p className="text-white/70">{car.year}</p>
          </div>
          <MediaCarousel items={car.media} />
          {car.videoUrl ? (
            <div className="glass-card overflow-hidden rounded-2xl border border-coal-800">
              <div className="relative aspect-[16/9] w-full">
                <video
                  src={car.videoUrl}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                />
              </div>
            </div>
          ) : null}
          <div className="glass-card rounded-2xl border border-coal-800 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
              {t.carDetail.description}
            </p>
            <p className="mt-4 text-white/80">{car.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="font-display text-3xl text-gold-200">{car.price}</span>
              <span className="rounded-full border border-coal-700 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                {t.carDetail.rating} {car.rating}
              </span>
            </div>
          </div>
          <div className="glass-card rounded-2xl border border-coal-800 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
              Specs
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/80 md:grid-cols-2">
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Fuel</span>
                <span>{car.specs.fuel}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Horsepower</span>
                <span>{car.specs.horsepower}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Torque</span>
                <span>{car.specs.torque}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Transmission</span>
                <span>{car.specs.transmission}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Drivetrain</span>
                <span>{car.specs.drivetrain}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Engine</span>
                <span>{car.specs.engine}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Mileage</span>
                <span>{car.specs.mileage}</span>
              </div>
              <div className="flex items-center justify-between border-b border-coal-800/60 pb-2">
                <span className="text-white/60">Seats</span>
                <span>{car.specs.seats}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl border border-coal-800 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
              {t.carDetail.availability}
            </p>
            <p className="mt-3 text-lg text-white">
              {car.available ? t.carDetail.availableNow : t.carDetail.reserved}
            </p>
            <p className="mt-3 text-white/70">{t.carDetail.availabilityNote}</p>
          </div>
          <OrderForm carName={`${car.brand} ${car.model}`} />
          <div className="glass-card rounded-2xl border border-coal-800 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200">
              {t.carDetail.location}
            </p>
            <p className="mt-3 text-white/70">{t.carDetail.locationText}</p>
            <p className="mt-2 text-white/60">{t.carDetail.locationNote}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
