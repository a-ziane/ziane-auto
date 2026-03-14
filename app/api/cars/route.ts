import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cars as mockCars } from '@/lib/data'

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ cars: mockCars })
  }

  const cars = await prisma.car.findMany({
    include: { media: true, ratings: true },
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json({ cars })
}
