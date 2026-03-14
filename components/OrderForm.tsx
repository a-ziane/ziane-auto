'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

type OrderFormProps = {
  carName: string
}

export default function OrderForm({ carName }: OrderFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const { t } = useLanguage()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, carName })
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('sent')
      setMessage(t.orderForm.success)
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setMessage(t.orderForm.error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card flex flex-col gap-4 rounded-2xl border border-coal-800 p-6"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">{t.order.label}</p>
        <h3 className="font-display text-2xl">{t.orderForm.title}</h3>
      </div>
      <label className="text-sm text-white/70">
        {t.orderForm.name}
        <input
          required
          name="customerName"
          className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-white outline-none transition focus:border-gold-400"
          placeholder="Your name"
        />
      </label>
      <label className="text-sm text-white/70">
        {t.orderForm.phone}
        <input
          required
          name="phone"
          className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-white outline-none transition focus:border-gold-400"
          placeholder="+213..."
        />
      </label>
      <label className="text-sm text-white/70">
        {t.orderForm.message}
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-coal-700 bg-coal-900/80 px-4 py-3 text-white outline-none transition focus:border-gold-400"
          placeholder="Tell us the color or any request"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full bg-gold-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-coal-950 transition hover:bg-gold-200 disabled:opacity-60"
      >
        {status === 'loading' ? t.orderForm.sending : t.orderForm.button}
      </button>
      {message ? (
        <p className={`text-sm ${status === 'sent' ? 'text-gold-200' : 'text-red-300'}`}>
          {message}
        </p>
      ) : null}
    </form>
  )
}
