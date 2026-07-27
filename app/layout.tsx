import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Permanent_Marker, Quicksand } from 'next/font/google'
import './globals.css'

const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marker',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "it's Merlin! Pet Shop — Estética Animal em Caxias do Sul",
  description:
    'Estética animal divertida e cuidadosa em Caxias do Sul/RS. Tosa Básica, Premium e Luxo, cuidado hipoalergênico e ambiente low-stress. Seu pet merece um spa e tanto!',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#2b2b2f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark bg-background ${marker.variable} ${quicksand.variable}`}>
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
