import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'B Creative Media Services',
  description: 'Elevate your brand\'s digital presence with our creative media services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 