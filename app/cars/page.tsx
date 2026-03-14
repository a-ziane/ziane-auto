'use client'

import { useMemo, useState } from 'react'
import CarCard from '@/components/CarCard'
import { cars } from '@/lib/data'
import { useLanguage } from '@/components/LanguageProvider'

export default function CarsPage() {
  const { t } = useLanguage()
  const [search, setSearch] = useState('')
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState('')
  const [availability, setAvailability] = useState('')

  const brands = useMemo(
    () => Array.from(new Set(cars.map((car) => car.brand))).sort(),
    []
  )
  const years = useMemo(
    () => Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => b - a),
    []
  )

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch =
        !search ||
        `${car.brand} ${car.model} ${car.description}`
          .toLowerCase()
          .includes(search.toLowerCase())
      const matchesBrand = !brand || car.brand === brand
      const matchesYear = !year || car.year === Number(year)
      const matchesAvailability =
        !availability ||
        (availability === 'available' ? car.available : !car.available)

      return matchesSearch && matchesBrand && matchesYear && matchesAvailability
    })
  }, [search, brand, year, availability])

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-200">Inventory</p>
          <h1 className="font-display text-4xl text-white">{t.cars.title}</h1>
          <p className="mt-3 max-w-xl text-white/70">{t.cars.subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <label className="text-xs uppercase tracking-[0.3em] text-white/60">
            {t.cars.filters.search}
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`${t.cars.filters.search}...`}
              className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-sm text-white outline-none focus:border-gold-400"
            />
          </label>
          <label className="text-xs uppercase tracking-[0.3em] text-white/60">
            {t.cars.filters.brand}
            <select
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
              className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-sm text-white outline-none focus:border-gold-400"
            >
              <option value="">{t.cars.filters.any}</option>
              {brands.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs uppercase tracking-[0.3em] text-white/60">
            {t.cars.filters.year}
            <select
              value={year}
              onChange={(event) => setYear(event.target.value)}
              className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-sm text-white outline-none focus:border-gold-400"
            >
              <option value="">{t.cars.filters.any}</option>
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs uppercase tracking-[0.3em] text-white/60">
            {t.cars.filters.availability}
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-sm text-white outline-none focus:border-gold-400"
            >
              <option value="">{t.cars.filters.any}</option>
              <option value="available">{t.cars.filters.available}</option>
              <option value="reserved">{t.cars.filters.reserved}</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
