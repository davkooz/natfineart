import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natallia Wyszkowska Fotografia',
  description: 'Natallia Wyszkowska Fotografia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="font-Montserrat">{children}</body>
    </html>
  )
}
