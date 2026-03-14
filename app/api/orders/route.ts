import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendTelegramOrder } from '@/lib/telegram'

export async function POST(request: Request) {
  const body = await request.json()
  const { carId, carName, customerName, phone, message } = body

  if (!customerName || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 501 }
    )
  }

  const order = await prisma.order.create({
    data: {
      carId: carId ?? null,
      customerName,
      phone,
      message: message ?? '',
      status: 'new'
    }
  })

  const telegramMessage = `
New Car Order

Car: ${carName ?? 'Unknown'}
Name: ${customerName}
Phone: ${phone}

Message:
${message ?? '-'}
`

  await sendTelegramOrder(telegramMessage.trim())

  return NextResponse.json({ ok: true, orderId: order.id })
}
