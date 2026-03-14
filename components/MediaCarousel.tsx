'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export type MediaItem = {
  url: string
  type: 'image' | 'video'
}

type Props = {
  items: MediaItem[]
  autoPlay?: boolean
  interval?: number
}

export default function MediaCarousel({ items, autoPlay = true, interval = 4500 }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [autoPlay, interval, items.length])

  function goTo(nextIndex: number) {
    setIndex((nextIndex + items.length) % items.length)
  }

  const current = items[index]

  return (
    <div className="glass-card relative overflow-hidden rounded-2xl border border-coal-800">
      <div className="relative aspect-[4/3] w-full">
        {current.type === 'image' ? (
          <Image
            src={current.url}
            alt="Car media"
            fill
            className="object-cover transition duration-700"
          />
        ) : (
          <video
            src={current.url}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
      </div>

      {items.length > 1 ? (
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 w-6 rounded-full transition ${
                i === index ? 'bg-gold-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      ) : null}

      {items.length > 1 ? (
        <div className="absolute right-4 top-4 flex gap-2">
          <button
            onClick={() => goTo(index - 1)}
            className="rounded-full border border-gold-400/40 bg-coal-950/80 px-3 py-2 text-xs uppercase tracking-[0.3em] text-gold-200"
          >
            Prev
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="rounded-full border border-gold-400/40 bg-coal-950/80 px-3 py-2 text-xs uppercase tracking-[0.3em] text-gold-200"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  )
}
