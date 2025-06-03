import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fiona Zhang Website',
  description: 'Personal website of Fiona Zhang',
  generator: 'Fiona Zhang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
