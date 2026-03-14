import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, Cairo } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'

const display = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display'
})

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif'
})

const arabic = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600'],
  variable: '--font-arabic'
})

export const metadata: Metadata = {
  title: 'Ziane Auto | Premium Cars in Aïn Touta, Batna',
  description:
    'Ziane Auto is a premium car showroom in Aïn Touta, Batna, Algeria. Explore curated vehicles and order directly.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${arabic.variable}`}
    >
      <body className="font-serif">
        <LanguageProvider>
          <div className="min-h-screen bg-coal-950">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
