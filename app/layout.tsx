import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mamma\'s Nest - Organic Tea & Honey',
  description: 'Premium organic tea and honey products, crafted with love and tradition. Owned by a passionate African American entrepreneur.',
  keywords: 'organic tea, organic honey, natural products, African American owned business, premium tea, raw honey',
  authors: [{ name: 'Mamma\'s Nest' }],
  openGraph: {
    title: 'Mamma\'s Nest - Organic Tea & Honey',
    description: 'Premium organic tea and honey products, crafted with love and tradition.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 